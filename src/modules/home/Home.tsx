import { CreateFlashcard, FlashTool, Features, Benefits } from "./sections";
import React from "react";

const Home = () => {
  return (
    <>
      <CreateFlashcard />
      <FlashTool />
      <Features />
      <Benefits />
    </>
  );
};

export default Home;
