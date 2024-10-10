import React from 'react'
import { PiArrowBendUpRightBold } from 'react-icons/pi'

const TopBanner = () => {
    return (
        <div className="w-full flex justify-center items-center p-4 bg-violet-600">
            <a href="/tailwind-components" className="flex justify-center items-center gap-3 group">
                <span className="font-lexend p-1 px-3 text-white bg-violet-500 rounded-full border border-violet-500 text-xs font-semibold group-hover:scale-110 transition-transform duration-300">NEW</span>
                <h5 className="font-lexend text-white text-sm">Explore our Tailwind components library!</h5>
                <PiArrowBendUpRightBold className="group-hover:translate-x-1 transition-transform duration-300" color="#fff" />
            </a>
        </div>
    )
}

export default TopBanner
