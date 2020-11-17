import React from "react";
import { storiesOf } from "@storybook/react";
import { Board, Item } from "@components";

const elements: Item[] = [
    { id: "tiny_0", coords: { x: 0, y: 0 }, variant: "tiny" },
    { id: "medium_0", coords: { x: 1, y: 1 }, variant: "medium" },
    { id: "large_0", coords: { x: 0, y: 4 }, variant: "large" },
]

storiesOf("Board", module)
    .add("default", () => (
        <Board items={elements} />
    ));
