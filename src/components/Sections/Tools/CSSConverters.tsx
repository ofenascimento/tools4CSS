import Card from '@/components/Card/Card'
import React from 'react'

function CSSConverters() {
    return (
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
                title="Hex to RGB Converter"
                slug="hex-to-rgb"
                img="/icons/hex-to-rgb.webp"
                info="Convert hexadecimal color codes to their RGB representation with ease."
            />
            <Card
                title="RGB to Hex Converter"
                slug="rgb-to-hex"
                img="/icons/rgb-to-hex.webp"
                info="Transform RGB values into their corresponding hexadecimal color codes."
            />
            <Card
                title="Hex to HSL Converter"
                slug="hex-to-hsl"
                img="/icons/hex-to-hsl.webp"
                info="Convert hex colors to the HSL format for more intuitive color adjustments."
            />
            <Card
                title="RGB to HSV Converter"
                slug="rgb-to-hsv"
                img="/icons/rgb-to-hsv.webp"
                info="Convert RGB values to the HSV format for better control over brightness and vibrancy."
            />
        </div>
    )
}

export default CSSConverters