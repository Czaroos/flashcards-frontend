import React from "react";
import { storiesOf } from "@storybook/react";
import { Board, Item } from "@components";
import styled from "styled-components"

const elements: Item[] = [
    { id: "tiny_0", coords: { x: 0, y: 0 }, variant: "tiny", color: "pink" },
    { id: "medium_0", coords: { x: 1, y: 1 }, variant: "medium", color: "gray" },
    { id: "large_0", coords: { x: 0, y: 4 }, variant: "large", color: "blue" },
    { id: "tiny_3", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_4", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_5", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_6", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_7", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_8", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_9", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_10", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_11", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_12", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_13", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_14", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_15", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_16", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_17", coords: { x: 2, y: 1 }, variant: "tiny" },
    { id: "tiny_18", coords: { x: 2, y: 1 }, variant: "tiny" },
];

storiesOf("Board", module).add("default", () => <Board items={elements} />);
