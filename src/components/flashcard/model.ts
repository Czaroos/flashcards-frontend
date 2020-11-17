type Variant = "tiny" | "medium" | "large";

export interface FlashcardVariant {
    variant?: Variant;
}

export interface FlashcardProps extends FlashcardVariant {
    onClick?(): void;
    answer?: string,
    question?: string,
    id: string,
    coords: {
        x: number,
        y: number
    }
}
