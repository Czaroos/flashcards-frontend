import {
  firestore,
  Flashcard,
  Share,
  getDecks,
  getFlashcards,
} from "@firebase";

export const shareDeck = async (deckId: string) => {
  const share = await firestore
    .collection("shares")
    .where("deckId", "==", deckId)
    .get();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const newShare = {
    deckId,
    expires: Math.floor(tomorrow.getTime() / 1000),
  };

  if (!share.empty) {
    let result: any;

    share.forEach(async (share) => {
      const { expires } = share.data();

      const now = Math.floor(new Date().getTime() / 1000);

      const timeLeft = expires - now;

      if (timeLeft > 0) {
        const stringDate = new Date(timeLeft * 1000);

        const info = `Your link is still available for ${stringDate
          .toUTCString()
          .substr(17, 8)} and was copied to your clipboard.`;

        result = { ...share.data(), token: share.id, info } as Share;
      } else {
        try {
          await share.ref.delete();
          const shareRef = await firestore.collection("shares").add(newShare);

          result = { ...newShare, token: shareRef.id } as Share;
        } catch (err) {
          throw new Error(err.message);
        }
      }
    });
    return result;
  } else {
    try {
      const shareRef = await firestore.collection("shares").add(newShare);

      return { ...newShare, token: shareRef.id } as Share;
    } catch (err) {
      throw new Error(err.message);
    }
  }
};

export const checkToken = async (token: string) => {
  const share = await firestore.doc(`shares/${token}`).get();

  if (share.exists) {
    const { expires } = share.data()!;

    const now = Math.floor(new Date().getTime() / 1000);

    const timeLeft = expires - now;

    if (timeLeft < 0) {
      throw new Error("Token has expired.");
    } else {
      return share;
    }
  } else {
    throw new Error(`Token doesn't exist.`);
  }
};

export const AcceptShareDeck = async (deckId: string, userId?: string) => {
  try {
    if (!userId)
      throw new Error("You must be logged in to perform this action.");

    const userRef = firestore.doc(`users/${userId}`);
    const deckRef = firestore.doc(`decks/${deckId}`);

    const user = await userRef.get();

    const userData = user.data()!;

    const deck = await deckRef.get();
    const deckData = deck.data()!;

    const userDecks = await getDecks(userData.decks);
    const deckExists = userDecks.filter((deck) => deck.name === deckData.name);

    if (deckExists.length > 0)
      throw new Error(`Deck ${deckData.name} already exists in your library.`);

    const flashcards = await getFlashcards(deckData.flashcards);

    const newFlashcards: String[] = await Promise.all(
      flashcards.map(async (flashcard: Flashcard) => {
        const flashcardRef = await firestore
          .collection("flashcards")
          .add(flashcard);
        return flashcardRef.id as String;
      })
    );

    const newDeck = {
      ...deckData,
      flashcards: newFlashcards,
      shared: true,
    };
    const newDeckRef = await firestore.collection("decks").add(newDeck);

    userRef.set({
      ...userData,
      decks: [...userData.decks, newDeckRef.id],
    });

    return `${deckData.name} was added to your library.`;
  } catch (err) {
    throw new Error(err.message);
  }
};
