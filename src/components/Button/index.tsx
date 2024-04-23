import React from 'react'
import { IButton } from './types'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props: IButton) => {
    return (
        <button className={twMerge(clsx('bg-blue-700 w-full text-white py-2', props.className))} onClick={props.onClick}>
           <span className={props.textClassName}>{props.text}</span>
        </button>
    )
}

export default Button;