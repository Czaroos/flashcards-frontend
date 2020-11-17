import React, { useState } from "react";
import { useAuthProvider } from "@core/auth"

import { Board, Item, Variant } from "@components"

import { StyledButton } from "./style"

export const Dashboard = () => {
    const { user } = useAuthProvider();
    const [items, setItems] = useState<Item[]>([]);

    const getIndex = () => {
        let max = -1;
        items.map(({ id }) => parseInt(id) > max ? max = parseInt(id) : "");
        return (max + 1) + "";
    }

    const addFlashcard = (v: Variant) => {
        const item: Item = { id: getIndex(), coords: { x: 0, y: 0 }, variant: v };
        setItems([...items, item]);
    }

    return (
        <>
            {user !== null &&
                <div>
                    <StyledButton
                        onClick={() => addFlashcard("tiny")} >
                        Add tiny flashcard
                    </StyledButton>
                    <StyledButton
                        onClick={() => addFlashcard("medium")} >
                        Add medium flashcard
                    </StyledButton>
                    <StyledButton
                        onClick={() => addFlashcard("large")} >
                        Add large flashcard
                    </StyledButton>
                    <Board items={items} />
                </div>}
        </>
    )


}