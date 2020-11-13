export interface Input {
    width?: string;
}

export interface InputProps extends Input {
    onChange?(): void;
    value?: string,
    placeholder?: string
}
