import { ReactNode } from "react";

type Variant = "default" | "round";

export interface ButtonVariant {
  variant: Variant;
}

export interface ButtonProps extends ButtonVariant {
  onClick(): void;
  children: ReactNode;
}
