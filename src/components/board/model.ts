type Variant = "tiny" | "medium" | "large"

export interface BoardProps {
    items: Item[]
}

export type Item = {
    variant?: Variant,
    onClick?(): void;
    answer?: string,
    question?: string,
    id: string,
    coords: {
        x: number,
        y: number
    }
}