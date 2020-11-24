import React from "react";

import { FlashToolContainer } from "./style";
import { Carousel } from "@components";
import images from "components/carousel/images";

export const FlashTool = () => {
  return (
    <FlashToolContainer>
      <section>
        <div className="flashTool">
          <h2>FlashTool</h2>
          <p>
            FlashTool is our build-in editor which allows you to create and
            customize your own flashcards very easly and - of course - for free!
          </p>
        </div>
        <div className="carouselContainer">
          <Carousel images={images} autoPlay={4} width={350}></Carousel>
          {/* <img src={FlashToolImg} width="350" /> */}
        </div>
      </section>
    </FlashToolContainer>
  );
};
