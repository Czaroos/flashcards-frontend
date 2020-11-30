import React, { useState } from "react";

import MenuImage from "@images/menu.png";

import { Container, List, StyledButton } from "./style"

interface Props {
    children: React.ReactNode,
    name: string,
}

export const DropDownMenu = ({ children, name }: Props) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(prev => !prev);

    return (
        <Container>
            <StyledButton variant="transparent" onClick={handleOpen}>{name}<img src={MenuImage} /></StyledButton>
            <List open={open}>
                {children}
            </List>
        </Container>
    )

}