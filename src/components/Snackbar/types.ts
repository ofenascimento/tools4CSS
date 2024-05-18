import { type ReactNode } from 'react';

export interface TSnackBarContainer {
    children: ReactNode
}

export interface TSnackBar {
    id: string
    type?: 'alert' | 'info' | 'error' | 'success'
    title: string
    subtitle?: string
    action?: JSX.Element
    duration?: number | null
}
