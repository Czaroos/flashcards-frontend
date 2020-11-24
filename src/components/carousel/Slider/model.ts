import { ReactNode } from "react";

export interface Slider {
    transform?: number;
    transition?: number;
    width?: number;
  }
  
export interface SliderProps extends Slider {
    children: ReactNode;
}