import Card from '@/components/Card/Card'
import React from 'react'

function CSSGenerators() {
    return (
        <div className="flex flex-wrap gap-1 justify-between items-center">
            <Card
                title="Background Gradient"
                slug="background-gradient"
                img="1.png?version="
                info="Easily customize gradient backgrounds with your colors, angles, and styles."
            />
            <Card
                title="Text Gradient"
                slug="text-gradient"
                img="2.png?version="
                info="Create stunning text gradients by selecting from a range of colors, angles, and gradient types."
            />
            <Card
                title="Underline Gradient"
                slug="underline-gradient"
                img="3.png"
                info="Transform your text with vibrant gradient underlines. Customize colors and styles for a unique look."
            />
            <Card
                title="Glassmorphism Generator"
                slug="glassmorphism"
                img="4.png"
                info="Customize blur, transparency, and colors for a sleek, modern look."
            />
            <Card
                title="Neumorphism Generator"
                slug="neumorphism"
                img="5.png?version="
                info="Customize shadows and highlights for a modern, tactile look."
            />
            <Card
                title="Scrollbar Generator"
                slug="scrollbar-generator"
                img="scrollbar-generator.png?version=2"
                info=" Customize your scrollbars with ease. Choose colors, sizes, and styles to enhance your web design."
            />
        </div>
    )
}

export default CSSGenerators