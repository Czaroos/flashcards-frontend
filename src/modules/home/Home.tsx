import { Navbar, Footer } from "@components";
import { CreateFlashcard, FlashTool, Features, Benefits } from "./sections";
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
