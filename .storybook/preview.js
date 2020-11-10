import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";

import { GlobalStyle } from "../src/styles/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  withKnobs,
  (style) => (
    <>
      <GlobalStyle />
      {style()}
    </>
  )
];