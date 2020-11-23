import { firestore } from "../config";

import { Color, Flashcard, Variant } from "../models";

export const createFlashcard = async (
  deckId: string,
  question: string,
  answer: string,
  variant: Variant,
  color?: Color
) => {
  const createdAt = new Date();
  const coords = { x: 0, y: 0 };

  const newFlashcard = {
    question,
    answer,
    variant,
    color,
    coords,
    createdAt,
  };

  const deckRef = firestore.doc(`decks/${deckId}`);
  const deck = await deckRef.get();

  try {
    const { flashcards } = deck.data()!;
    const flashcardRef = await firestore
      .collection("flashcards")
      .add(newFlashcard);
    await deckRef.set({
      ...deck.data(),
      flashcards: [...flashcards, flashcardRef.id],
    });

    return { ...newFlashcard, id: flashcardRef.id } as Flashcard;
  } catch (err) {
    return err;
  }
};

export const getFlashcards = async (flashcardsIds: string[]) => {
  try {
    const flashcards = Promise.all(
      flashcardsIds.map(async (id) => {
        const flashcard = await firestore.doc(`flashcards/${id}`).get();
        const flashcardObj = Object.assign(
          {},
          { id: flashcard.id },
          flashcard.data()
        );
        return flashcardObj as Flashcard;
      })
    );

    return flashcards;
  } catch (err) {
    return err;
  }
};

export const deleteFlashcard = async (flashcardId: string) => {
  try {
    const decks = await firestore
      .collection("decks")
      .where("flashcards", "array-contains", flashcardId)
      .get();

    decks.forEach(async (deck) => {
      const { flashcards } = deck.data();
      await deck.ref.set({
        ...deck.data(),
        flashcards: flashcards.filter((id: string) => id !== flashcardId),
      });
    });

    return await firestore.doc(`flashcards/${flashcardId}`).delete();
  } catch (err) {
    return err;
  }
};
