import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthProvider } from "@core/auth";
import { useAlert } from "@core/alert";

import { ContentImage } from "@icons"

import { CreateFlashcardContainer, Inner, Content, Aside, StyledButton } from "./style";

export const MainContent = () => {
  const history = useHistory();
  const { user } = useAuthProvider();
  const { addAlert } = useAlert();

  const handle = () => {
    if (user) {
      history.push(`/dashboard/${user.id}`)
      return;
    }

    addAlert("You must be logged in", "info");
  }

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
            <StyledButton onClick={handle} variant="transparent">
              Let's go!
            </StyledButton>
          </Aside>
          <ContentImage />
        </Content>
      </Inner>

    </CreateFlashcardContainer>
  );
};
