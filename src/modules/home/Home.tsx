import {
  Navbar,
  Footer,
  CreateFlashcard,
  FlashTool,
  Features,
  Benefits,
} from "@components";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <CreateFlashcard />
      <FlashTool />
      <Features />
      <Benefits />
      <Footer />
    </>
  );
};

export default Home;
