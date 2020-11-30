import React from "react";
import GridLayout from "react-grid-layout";
import { BoardProps } from "./model";
import { COLUMNS, ROW_HEIGHTS, WIDTH, SIZE } from "./utils";

import { editFlashcard } from "@firebase";

import { Flashcard } from "@components";

import { useAuthProvider } from "@core/auth";

import { StyledGridLayout, Container } from "./style";

export const Board = ({ items, setItems }: BoardProps) => {
  const { user } = useAuthProvider();

  const handleOnDragStop = async (e: GridLayout.Layout[]) => {
    try {
      e.forEach((flashcard: any) => {
        const coords = {
          x: flashcard.x,
          y: flashcard.y,
        };

        editFlashcard({ id: flashcard.i, userId: user!.id, coords });
      });
    } catch (err) {
      //put alert here
      console.log(err);
    }
  };

  const handleDelete = (id: string) => {
    setItems!(items.filter((item) => item.id !== id));
  };

  return (
    <Container>
      <StyledGridLayout
        onDragStop={(e) => handleOnDragStop(e)}
        cols={COLUMNS}
        rowHeight={ROW_HEIGHTS}
        width={WIDTH}
      >
        {items.map((item) => {
          const { variant } = item;
          const index = variant ? variant : "tiny";

          return (
            <div
              key={item.id}
              data-grid={{
                x: item.coords.x,
                y: item.coords.y,
                w: SIZE[index].w,
                h: SIZE[index].h,
              }}
            >
              <Flashcard {...item} onDelete={handleDelete} />
            </div>
          );
        })}
      </StyledGridLayout>
    </Container>
  );
};

export { Item } from "./model";
