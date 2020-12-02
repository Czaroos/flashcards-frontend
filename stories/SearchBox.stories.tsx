import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { SearchBox } from "@components";

const Render = () => {
    const movies = ["Spider-man", "Lost", "Venom", "Escape Room"];
    const [items, setItems] = useState(movies);

    const search = (value: string) => {
        const array: string[] = [];
        movies.map(e => {
            if (e.toLowerCase().includes(value.toLowerCase())) {
                array.push(e);
            }
        })
        setItems(array);
    }

    return (
        <div>
            <SearchBox onChange={(e) => search(e.target.value)} />
            {items.map(e => {
                return <p>{e}</p>
            })}
        </div>
    )
}

storiesOf("Search", module)
    .add("default", () => (
        <CenteredContainer style={{ background: "var(--secondary)" }}>
            <Render />
        </CenteredContainer>
    ));
