import React from "react";
import { FlashToolContainer } from "./style";

export const FlashTool = () => {
  return (
    <FlashToolContainer>
      <section>
        <div>
          <h2>FlashTool</h2>
          <p>
            FlashTool is our build-in editor which allows you to create and
            customize your own flashcards very easly and - of course - for free!
          </p>
        </div>
        <div>
          <div className="carousel"></div>
        </div>
      </section>
    </FlashToolContainer>
  );
};
