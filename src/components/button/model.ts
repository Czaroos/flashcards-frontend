import { ReactNode } from "react";

type Variant = "default" | "transparent";

export interface ButtonVariant {
  variant: Variant;
  width: string;
}

export interface ButtonProps extends ButtonVariant {
  onClick(): void;
  children: ReactNode;
}
