export interface AlertVariant {
    variant: boolean
}

export interface AlertProps extends AlertVariant {
    msg: string,
    onClick: () => void
}