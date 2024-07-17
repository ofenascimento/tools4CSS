import Card from '@/components/Card/Card'
import React from 'react'

function CSSTools() {
    return (
        <div className="gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
                title="Gradient Pallete"
                slug="gradient-pallete"
                img="/icons/palette.png"
                info=" Explore a collection of stunning CSS gradients. Pick your favorite styles to enhance your design."
            />
            <Card
                title="CSS Formatter"
                slug="css-formatter"
                img="/icons/css.png"
                info="Beautify and format your CSS code effortlessly."
            />
        </div>
    )
}

export default CSSTools