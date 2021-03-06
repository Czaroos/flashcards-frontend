import { firestore, Deck, EditDeckPayload } from "@firebase";

export const createDeck = async (name: string, userId: string) => {
  const deck = await firestore
    .collection("decks")
    .where("name", "==", name)
    .where("authors", "array-contains", userId)
    .get();

  if (!deck.empty) {
    throw new Error("Deck with this name already exists.");
  }

  const authors: string[] = [userId];
  const createdAt = new Date().toUTCString();
  const flashcards: string[] = [];

  const newDeck = {
    name,
    createdAt,
    authors,
    flashcards,
  };

  const userRef = firestore.doc(`users/${userId}`);
  const user = await userRef.get();

  try {
    const { decks } = user.data()!;
    const deckRef = await firestore.collection("decks").add(newDeck);
    await userRef.set({
      ...user.data(),
      decks: [...decks, deckRef.id],
    });

    return { ...newDeck, id: deckRef.id } as Deck;
  } catch (err) {
    return err;
  }
};

export const getDecks = async (decksIds: string[]) => {
  try {
    const decks = Promise.all(
      decksIds.map(async (id) => {
        const deck = await firestore.doc(`decks/${id}`).get();
        if (deck.exists) {
          const deckObj = Object.assign({}, { id: deck.id }, deck.data());
          return deckObj as Deck;
        } else throw new Error(`This deck doesn't exist.`);
      })
    );

    return decks;
  } catch (err) {
    throw new Error(`Something went wrong.`);
  }
};

export const deleteDeck = async (deckId: string) => {
  try {
    const users = await firestore
      .collection("users")
      .where("decks", "array-contains", deckId)
      .get();

    users.forEach(async (user) => {
      const { decks } = user.data();
      await user.ref.set({
        ...user.data(),
        decks: decks.filter((id: string) => id !== deckId),
      });
    });

    const shares = await firestore
      .collection("shares")
      .where("deckId", "==", deckId)
      .get();

    shares.forEach(async (share) => {
      await share.ref.delete();
    });

    const { flashcards } = await (
      await firestore.doc(`decks/${deckId}`).get()
    ).data()!;

    flashcards.forEach(async (id: string) => {
      await firestore.doc(`flashcards/${id}`).delete();
    });

    return await firestore.doc(`decks/${deckId}`).delete();
  } catch (err) {
    return err;
  }
};

export const editDeck = async ({ id, userId, name }: EditDeckPayload) => {
  const deck = await firestore
    .collection("decks")
    .where("name", "==", name)
    .where("authors", "array-contains", userId)
    .get();

  if (!deck.empty) {
    return new Error("Deck with this name already exists.");
  }

  const editedAt = new Date().toUTCString();

  try {
    const user = await firestore.doc(`users/${userId}`).get();
    const { displayName } = user.data()!;

    const deck = await firestore.doc(`decks/${id}`).get();
    return await deck.ref.set({
      ...deck.data(),
      name,
      editedAt,
      editedBy: displayName,
    });
  } catch (err) {
    return err;
  }
};
