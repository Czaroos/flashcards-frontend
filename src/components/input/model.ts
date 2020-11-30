export interface Input {
  width?: string;
}

export interface InputProps extends Input {
  onChange?: (e: { target: { value: string } }) => void;
  value?: string;
  placeholder?: string;
  [x: string]: any;
}
