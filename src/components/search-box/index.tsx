import React from "react";

import { Props } from "./model"

import { Input } from "@components";

import SearchImage from "@images/search.png";
import { SearchContainer } from "./style"

export const SearchBox = ({ onChange }: Props) => {

    return (
        <SearchContainer>
            <Input width="250px" onChange={onChange} />
            <img src={SearchImage} height="30" />
        </SearchContainer>
    )
}