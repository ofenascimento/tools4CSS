import React from 'react'
import { ITextarea } from './types'

const Textarea = (props: ITextarea) => {
    return (
        <>
            <textarea
                className=' w-full h-72 p-4 font-manrope dark:bg-mainDark dark:border dark:border-gray-600 dark:text-white'
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}

            />
        </>
    )
}

export default Textarea