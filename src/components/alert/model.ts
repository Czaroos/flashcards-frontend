export type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

export interface AlertStyleProps {
    visibility: boolean,
    variant?: AlertVariant
}

export interface AlertProps extends AlertStyleProps {
    msg: string,
}