import Card from '@/components/Card/Card'
import React from 'react'

function CSSGenerators() {
    return (
        <div className="gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
                title="Background Gradient"
                slug="background-gradient"
                img="/icons/gradient.png"
                info="Easily customize gradient backgrounds with your colors, angles, and styles."
            />
            <Card
                title="Text Gradient"
                slug="text-gradient"
                img="/icons/text-gradient.png"
                info="Create stunning text gradients by selecting from a range of colors, angles, and gradient types."
            />
            <Card
                title="Underline Gradient"
                slug="underline-gradient"
                img="/icons/underline-gradient.png"
                info="Transform your text with vibrant gradient underlines. Customize colors and styles for a unique look."
            />
            <Card
                title="Glassmorphism Generator"
                slug="glassmorphism"
                img="/icons/glassmorphism.png"
                info="Customize blur, transparency, and colors for a sleek, modern look."
            />
            <Card
                title="Neumorphism Generator"
                slug="neumorphism"
                img="/icons/stacks.png"
                info="Customize shadows and highlights for a modern, tactile look."
            />
            <Card
                title="Scrollbar Generator"
                slug="scrollbar-generator"
                img="/icons/scroll.png"
                info=" Customize your scrollbars with ease. Choose colors, sizes, and styles to enhance your web design."
            />
        </div>
    )
}

export default CSSGenerators