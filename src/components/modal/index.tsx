import React, { useCallback, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

import { ModalContainer } from "./style";

import { ModalProps } from "./model";

export const Modal = ({ open, setOpen, children }: ModalProps) => {
  useEffect(() => {
    document.body.prepend(el);
    if (open) document.body.style.overflow = "hidden";

    return () => {
      document.body.removeChild(el);
      document.body.style.overflow = "auto";
    };
  }, []);

  const el = useMemo(() => {
    return document.createElement("div");
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handlePreventPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return createPortal(
    open && (
      <ModalContainer
        onClick={handleClose}
        open={open}
        onMouseDown={handlePreventPropagation}
      >
        <div onClick={handlePreventPropagation}>{children}</div>
      </ModalContainer>
    ),
    el
  );
};
