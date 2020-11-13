import { ReactNode } from "react";

export interface ModalOpen {
  open: boolean;
}

export interface ModalProps extends ModalOpen {
  setOpen: (open: boolean) => void;
  children: ReactNode;
}
