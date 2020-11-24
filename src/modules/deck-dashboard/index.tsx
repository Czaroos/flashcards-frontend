import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { useAuthProvider } from "@core/auth";

import { Board, Item } from "@components";

import { StyledButton, DashboardContainer } from "./style";

const DeckDashboard = () => {
  const { user } = useAuthProvider();
  const [items, setItems] = useState<Item[]>([]);

  const getIndex = () => {
    let max = -1;
    items.map(({ id }) => (parseInt(id) > max ? (max = parseInt(id)) : ""));
    return max + 1 + "";
  };

  const addFlashcard = (v: any) => {
    const item: Item = { id: getIndex(), coords: { x: 0, y: 0 }, variant: v };
    setItems([...items, item]);
  };

  return (
    <>
      {/* change user condition to - if user has access to deck then allow otherwise redirect to home */}
      {user ? (
        <DashboardContainer>
          <StyledButton onClick={() => addFlashcard("tiny")}>
            Add tiny flashcard
          </StyledButton>
          <StyledButton onClick={() => addFlashcard("medium")}>
            Add medium flashcard
          </StyledButton>
          <StyledButton onClick={() => addFlashcard("large")}>
            Add large flashcard
          </StyledButton>
          <Board items={items} />
        </DashboardContainer>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default DeckDashboard;
