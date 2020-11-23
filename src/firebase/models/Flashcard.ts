export type Variant = "tiny" | "medium" | "large";
export type Color = "red" | "blue" | "pink" | "green" | "gray";

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  createdAt: Date;
  coords: {
    x: number;
    y: number;
  };
  color: Color;
  variant: Variant;
}
