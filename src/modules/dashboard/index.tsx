import React, { useState, useEffect } from "react";
import { useAuthProvider } from "@core/auth";

import { Board, Item, Variant, Categories, CategoriesItem } from "@components";

import { StyledButton, DashboardContainer } from "./style";
import { Redirect } from "react-router";

const Dashboard = () => {
  const { user } = useAuthProvider();
  const [items, setItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<CategoriesItem[]>([]);

  useEffect(() => {
    //implement fetch categories
    //implement fetch current board
  }, [])

  const getIndex = () => {
    let max = -1;
    items.map(({ id }) => (parseInt(id) > max ? (max = parseInt(id)) : ""));
    return max + 1 + "";
  };

  const addFlashcard = (v: Variant) => {
    const item: Item = { id: getIndex(), coords: { x: 0, y: 0 }, variant: v };
    setItems([...items, item]);
  };

  return (
    <>
      {user ? (
        <DashboardContainer>
          <Categories items={categories} />
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

export default Dashboard;
