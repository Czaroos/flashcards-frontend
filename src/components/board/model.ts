import { Variant, Color } from "../flashcard/model"

export interface BoardProps {
    items: Item[]
}

export type Item = {
    variant?: Variant,
    onClick?(): void;
    answer?: string,
    question?: string,
    color?: Color,
    id: string,
    coords: {
        x: number,
        y: number
    }
}