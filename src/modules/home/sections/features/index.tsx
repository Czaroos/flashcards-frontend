import React from "react";

import Ruler from "@images/ruler.png"
import StopWatch from "@images/stopwatch.png"
import Bulb from "@images/bulb.png"

import { FeaturesContainer } from "./style";

export const Features = () => {
  return (
    <FeaturesContainer>
      <section>
        <div>
          <h2>Simple<img src={Ruler} height={35} /></h2>
          <p>
            Choose from three sizes and start creating whatever you want.
            If you think it's that simple - you are right!
          </p>
        </div>
        <div>
          <h2>Fast<img src={StopWatch} height={35} /></h2>
          <p>
            Have you ever thought about creating flashcards? Don't think, just do it.
            Take a step towards a better tomorrow as soon as possible!
          </p>
        </div>
        <div>
          <h2>Intuitive<img src={Bulb} height={35} /></h2>
          <p>
            Drag, move, add, remove, edit, arrange, random, choose, play!
            Flashcard is your best friend to learn...
          </p>
        </div>
      </section>
    </FeaturesContainer>
  );
};
