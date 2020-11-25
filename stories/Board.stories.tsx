import React from "react";
import { storiesOf } from "@storybook/react";
import { Board, Item } from "@components";

const elements: Item[] = [
  { id: "tiny_0", coords: { x: 0, y: 0 }, variant: "tiny", color: "pink" },
  { id: "medium_0", coords: { x: 1, y: 1 }, variant: "medium", color: "gray" },
  { id: "large_0", coords: { x: 0, y: 4 }, variant: "large", color: "blue" },
  { id: "tiny_1", coords: { x: 2, y: 1 }, variant: "tiny" },
];

storiesOf("Board", module).add("default", () => <Board items={elements} />);
