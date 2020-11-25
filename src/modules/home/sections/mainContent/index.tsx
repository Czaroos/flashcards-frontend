import { Button } from "@components";
import React from "react";
import { CreateFlashcardContainer } from "./style";

export const MainContent = () => {
  return (
    <CreateFlashcardContainer>
      <section>
        <h1>Create your own flashcards today!</h1>
        <p>
          We bring you brand new look on flashcards with our tools and features.
          Check them out now!
        </p>
        <div>
          <Button
            variant="default"
            onClick={() => console.log("clicked")}
            width="222px"
          >
            Let's go!
          </Button>
        </div>
      </section>
    </CreateFlashcardContainer>
  );
};
