export type Variant = "tiny" | "medium" | "large";
export type Color = "red" | "blue" | "pink" | "green" | "gray";

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  coords: {
    x: number;
    y: number;
  };
  color: Color;
  variant: Variant;
  editedAt?: string;
  editedBy?: string;
}

export interface EditPayload {
  id: string;
  userId: string;
  question?: string;
  answer?: string;
  coords?: { x: number; y: number };
  color?: Color;
  variant?: Variant;
}
