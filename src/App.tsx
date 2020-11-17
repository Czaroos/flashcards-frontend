import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Modules } from "./modules/Modules";

const App = () => {
  return (
    <BrowserRouter>
      <Modules />
    </BrowserRouter>
  );
};

export default App;
