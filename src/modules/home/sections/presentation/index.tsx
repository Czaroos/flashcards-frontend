import React from "react";

import { SimpleImage, FastImage, IntuitiveImage, BoardImage } from "@icons"

import { PresentationContainer, Tile1, Tile2, Tile3, Tile4, Tile0 } from "./style";

export const Presentation = () => {
  return (
    <PresentationContainer>
      {/* <Tile0>
        <h1>Learning with FlashYourCards!</h1>
      </Tile0> */}
      <Tile1>
        <BoardImage />
        <h2>FlashTool</h2>
        <p>
          FlashTool is our build-in editor which allows you to create and
          customize your own flashcards very easly and - of course - for free!
        </p>
      </Tile1>
      <Tile2>
        <SimpleImage />
        <h2>Simple</h2>
        <p>
          Choose from three sizes and start creating whatever you want.
          If you think it's that simple - you are right!
        </p>
      </Tile2>
      <Tile3>
        <FastImage />
        <h2>Fast</h2>
        <p>
          Have you ever thought about creating flashcards?
          Don't think, just do it. Take a step towards a better tomorrow as soon as possible!
        </p>
      </Tile3>
      <Tile4>
        <IntuitiveImage />
        <h2>Intuitive</h2>
        <p>
          Drag, move, add, remove, edit, arrange, random, choose, play! Flashcard is your best friend to learn...
        </p>
      </Tile4>
    </PresentationContainer>
  );
};
