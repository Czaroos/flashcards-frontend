export type Variant = "tiny" | "medium" | "large";
export type Color = "red" | "blue" | "pink" | "green" | "gray";

export interface FlashcardVariant {
  variant?: Variant;
  color?: Color;
}

export interface FlashcardProps extends FlashcardVariant {
  onClick?(): void;
  onDelete?(id: string): void;
  answer?: string;
  question?: string;
  id: string;
  coords: {
    x: number;
    y: number;
  };
}
