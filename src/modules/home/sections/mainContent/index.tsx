import React from "react";

import { ContentImage } from "@icons"

import { CreateFlashcardContainer, LeftDiv, RightDiv, Content, StyledButton } from "./style";

export const MainContent = () => {
  return (
    <CreateFlashcardContainer>
      <LeftDiv>
        <Content>
          <h1>Create your own flashcards today!</h1>
          <h2>
            We bring you brand new look on flashcards with our tools and features.
            Check them out now!
        </h2>
          <StyledButton>Let's go!</StyledButton>
        </Content>
      </LeftDiv>
      <RightDiv>
        <ContentImage />
      </RightDiv>

    </CreateFlashcardContainer>
  );
};
