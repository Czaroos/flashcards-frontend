import { Flashcard } from "@firebase";

export interface Params {
  deckId: string;
}

export interface ContentProps {
  again: boolean;
  good: boolean;
}

export interface MarkedFlashcard extends Flashcard {
  again: boolean;
  good: boolean;
}
