import Card from '@/components/Card/Card'
import React from 'react'

function CSSTools() {
    return (
        <div className="flex flex-wrap gap-1 w-full justify-between items-center">
            <Card
                title="Gradient Pallete"
                slug="gradient-pallete"
                img="6.png"
                info=" Explore a collection of stunning CSS gradients. Pick your favorite styles to enhance your design."
            />
            <Card
                title="CSS Formatter"
                slug="css-formatter"
                img="css-formatter.png?version="
                info="Beautify and format your CSS code effortlessly."
            />
        </div>
    )
}

export default CSSTools