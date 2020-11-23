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
  display: ${({ open }) => (open ? "default" : "none")};

  > * > * {
    float: left;
    position: relative;
  }
`;
