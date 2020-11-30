import React from "react";

import QuestionMark from "@images/qmark.png"

import { BenefitsContainer } from "./style";

export const Benefits = () => {
  return (
    <BenefitsContainer>
      <section>
        <div>
          <img src={QuestionMark} width={180} />
        </div>
        <div>
          <h2>Why flashcards?</h2>
          <p>
            Have you read what is above me? No?
            Eh ... Listen, FlashYourCard - simple, fast, intuitive.
            I won't tell you more, go up!  I was kidding, and maybe not... well, go ahead.
          </p>
        </div>
      </section>
    </BenefitsContainer>
  );
};
