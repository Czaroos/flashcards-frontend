import React, { useCallback } from "react";
import GridLayout from "react-grid-layout";
import { BoardProps } from "./model";
import { COLUMNS, ROW_HEIGHTS, WIDTH, SIZE } from "./utils";

import { Flashcard } from "@components";

import { StyledGridLayout } from "./style";

export const Board = ({ items, setItems }: BoardProps) => {
  const handleOnDragStop = (e: GridLayout.Layout[]) => {
    console.log(e); //implement send data to database
  };

  const handleDelete = useCallback((id: string) => {
    setItems!(items.filter((item) => item.id !== id));
  }, []);

  return (
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
  );
};

export { Item } from "./model";
