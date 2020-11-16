import styled from "styled-components";

import { ModalOpen } from "./model";

export const ModalContainer = styled.div<ModalOpen>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  /* position: absolute;
  z-index: ${({ open }) => (open ? "2" : "-1")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  width: ${({ open }) => (open ? "100%" : "0")};
  height: ${({ open }) => (open ? "100%" : "0")}; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;
