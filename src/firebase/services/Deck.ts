import { firestore } from "../config";

import { Deck } from "../models";

export const createDeck = async (name: string, userId: string) => {
  const deck = await firestore
    .collection("decks")
    .where("name", "==", name)
    .get();

  //TODO: change it later to users only decks (?)
  if (!deck.empty) {
    alert("Deck with this name already exists.");
    return;
  }

  const authors: string[] = [userId];
  const createdAt = new Date();
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
        const deckObj = Object.assign({}, { id: deck.id }, deck.data());
        return deckObj as Deck;
      })
    );

    return decks;
  } catch (err) {
    return err;
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

    return await firestore.doc(`decks/${deckId}`).delete();
  } catch (err) {
    return err;
  }
};
