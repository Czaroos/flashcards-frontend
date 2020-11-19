import React, { useState } from "react";

import { CategoriesProps } from "./model"

import ArrowImg from "@images/arrow.png"

import { Arrow, CategoriesContainer } from "./style"

export const Categories = ({ items }: CategoriesProps) => {
    const [categories, setCategories] = useState(items || []);

    return (
        <CategoriesContainer>
            <h3>Categories</h3>
            <ul>
                {categories.map(e => {
                    return <li>{e.name}</li>
                })}
                <li> + Add category</li>
            </ul>
            <Arrow>
                <img src={ArrowImg} height="12" />
            </Arrow>
        </CategoriesContainer>
    )

}

export { CategoriesItem } from "./model";