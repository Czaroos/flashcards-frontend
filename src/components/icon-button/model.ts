import { ReactNode } from "react";

export interface SVGProps {
  fill?: string;
}

export interface IconButtonProps extends SVGProps {
  onClick(): void;
  children: ReactNode;
}
