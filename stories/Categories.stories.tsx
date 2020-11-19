import React from "react";
import { storiesOf } from "@storybook/react";
import { CenteredContainer } from "./style";
import { Categories, CategoriesItem } from "@components";

const categories: CategoriesItem[] = [
    { id: "0", name: "Fruits" },
    { id: "1", name: "Animals" },
    { id: "2", name: "Food" },
];

storiesOf("Categories", module)
    .add("default", () => (
        <div style={{ background: "var(--primary-light)", width: "100%", height: "100%" }}>
            <Categories items={categories} />
        </div>
    ));
