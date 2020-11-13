import { ReactNode } from "react";

export interface SVGProps {
  fill?: string;
  isGoogle?: boolean;
}

export interface IconButtonProps extends SVGProps {
  onClick(): void;
  children: ReactNode;
}
