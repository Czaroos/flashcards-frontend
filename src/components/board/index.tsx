import React from "react"
import GridLayout from 'react-grid-layout';
import { BoardProps } from "./model"
import { COLUMNS, ROW_HEIGHTS, WIDTH, SIZE } from "./utils"

import { Flashcard } from "@components"

import "./style.css";

export const Board = ({ items }: BoardProps) => {

    const handleOnDragStop = (e: GridLayout.Layout[]) => {
        console.log(e); //implement send data to database
    }

    return (
        <GridLayout
            onDragStop={e => handleOnDragStop(e)}
            cols={COLUMNS}
            rowHeight={ROW_HEIGHTS}
            width={WIDTH}>

            {items.map(item => {
                const { variant } = item;
                const index = variant ? variant : "tiny";

                return (
                    <div
                        key={item.id}
                        data-grid={{
                            x: item.coords.x,
                            y: item.coords.y,
                            w: SIZE[index].w,
                            h: SIZE[index].h
                        }}>
                        <Flashcard {...item} />
                    </div>
                )
            })}
        </GridLayout>
    )

}

export { Item } from "./model";