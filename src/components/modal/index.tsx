import React, { useCallback, useEffect } from "react";

import { ModalContainer } from "./style";

import { ModalProps } from "./model";

export const Modal = ({ open, setOpen, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return function () {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handlePreventPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <ModalContainer onClick={handleClose} open={open}>
      <div onClick={handlePreventPropagation}>{children}</div>
    </ModalContainer>
  );
};
