import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAuthProvider } from "@core/auth";

import { Board, Item } from "@components";

import {
  createFlashcard,
  getDecks,
  getFlashcards,
  Variant,
  Color,
} from "@firebase";

import { StyledButton, DashboardContainer } from "./style";

interface Params {
  deckId: string;
}

const DeckDashboard = () => {
  const { user } = useAuthProvider();
  const [flashcards, setFlashcards] = useState<Item[]>([]);

  const { deckId } = useParams<Params>();

  useEffect(() => {
    user &&
      (async () => {
        try {
          const deck = await getDecks([deckId]);
          const flashcards = await getFlashcards(deck[0].flashcards);
          setFlashcards(flashcards);
        } catch (err) {
          console.log(err);
        }
      })();
  }, [user]);

  const addFlashcard = async (
    question: string,
    answer: string,
    variant: Variant,
    color: Color = "red"
  ) => {
    try {
      const newFlashcard = await createFlashcard(
        deckId,
        question,
        answer,
        variant,
        color
      );
      setFlashcards([...flashcards, newFlashcard]);
    } catch (err) {}
  };

  return (
    <>
      <DashboardContainer>
        <StyledButton onClick={() => addFlashcard("", "", "tiny")}>
          Add tiny flashcard
        </StyledButton>
        <StyledButton onClick={() => addFlashcard("", "", "medium", "blue")}>
          Add medium flashcard
        </StyledButton>
        <StyledButton onClick={() => addFlashcard("", "", "large", "pink")}>
          Add large flashcard
        </StyledButton>
        <Board items={flashcards} setItems={setFlashcards} />
      </DashboardContainer>
      )
    </>
  );
};

export default DeckDashboard;