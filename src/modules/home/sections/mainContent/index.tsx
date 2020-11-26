import React from "react";

import { ContentImage } from "@icons"

import { CreateFlashcardContainer, Inner, Content, Aside, StyledButton } from "./style";

export const MainContent = () => {
  return (
    <CreateFlashcardContainer>
      <Inner>
        <Content>
          <Aside>
            <h1>Create your own flashcards today!</h1>
            <p>
              We bring you brand new look on flashcards with our tools and features.
              Check them out now!
            </p>
            <StyledButton variant="transparent">
              Let's go!
            </StyledButton>
          </Aside>
          <ContentImage />
        </Content>
      </Inner>

    </CreateFlashcardContainer>
  );
};
