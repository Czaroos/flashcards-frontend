import styled from "styled-components";

import { ModalOpen } from "./model";

export const ModalContainer = styled.div<ModalOpen>`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 100;

  > * > * {
    z-index: 101;
    float: left;
    position: relative;
  }
`;
