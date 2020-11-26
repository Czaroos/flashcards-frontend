import { ReactNode } from "react";

type Variant = "default" | "transparent";

export interface ButtonVariant {
  variant?: Variant;
  width?: string;
  disabled?: boolean;
}

export interface ButtonProps extends ButtonVariant {
  onClick?(e?: React.MouseEvent): void;
  children: ReactNode;
}
