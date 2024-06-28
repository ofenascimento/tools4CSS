import Info from '@/components/Info/Info'
import { SEO } from '@/components/SEO'
import CSSTools from '@/components/Sections/Tools/CSSTools'
import Title from '@/components/Title/Title'
import React from 'react'

function CSSToolsPage() {
    return (
        <>
            <SEO title="CSS Tools" />
            <div className="w-full md:w-4/6 mx-auto min-h-screen">
                <Title customInfoClassname='mb-4' title='CSS Tools' info='Discover a variety of CSS generators to simplify your development process' />
                <CSSTools />
                <Info
                    title="CSS Tools Collection"
                    paragraph="Welcome to our CSS Tools Collection, where you'll find a variety of tools to help you streamline your CSS development. Whether you're looking to create stunning visual effects, optimize your code, or simplify your design process, our collection has everything you need to elevate your web development projects."
                />
            </div>
        </>
    )
}

export default CSSToolsPage