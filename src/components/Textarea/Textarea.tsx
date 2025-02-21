import React from 'react'
import { ITextarea } from './types'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const Textarea = (props: ITextarea) => {
    return (
        <>
            <textarea
                className={twMerge(clsx('w-full h-72 p-4 font-manrope dark:bg-mainDark border rounded-md border-gray-300 dark:border-gray-600 dark:text-white', props.customClassName))}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}

            />
        </>
    )
}

export default Textarea