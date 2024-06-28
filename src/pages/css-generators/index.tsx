import Info from '@/components/Info/Info'
import { SEO } from '@/components/SEO'
import CSSGenerators from '@/components/Sections/Tools/CSSGenerators'
import Title from '@/components/Title/Title'
import React from 'react'

function CSSGeneratorsPage() {
    return (
        <>
            <SEO title="CSS Generators" />
            <div className="w-full md:w-4/6 mx-auto min-h-screen">
                <Title customInfoClassname='mb-4' title='CSS Generators' info='Discover a variety of CSS generators to simplify your development process' />
                <CSSGenerators />
                <Info
                    title="CSS Generators Collection"
                    paragraph="Explore our collection of CSS generators, designed to help developers and designers create stunning visual effects with ease. From Glassmorphism and Neumorphism to Gradient and Box Shadow generators, find the perfect tool to enhance your UI components and streamline your design process."
                />

            </div>
        </>
    )
}

export default CSSGeneratorsPage