import Info from '@/components/Info/Info'
import { SEO } from '@/components/SEO'
import CSSComponents from '@/components/Sections/Tools/CSSComponents'
import CSSTools from '@/components/Sections/Tools/CSSTools'
import Title from '@/components/Title/Title'
import React from 'react'

function CSSComponentsPage() {
    return (
        <>
            <SEO title="CSS Components" />
            <div className="w-full md:w-4/6 mx-auto min-h-screen">
                <Title customInfoClassname='mb-4' title='CSS Components' info='Unlock a World of Pre-made CSS Components for Faster Design and Development' />
                <CSSComponents />
                <Info
                    title="CSS Components Library"
                    paragraph="Explore our CSS Components Library, featuring a wide range of pre-built, customizable elements. From buttons and forms to navigation bars and layout sections, our collection is designed to save you time and enhance your projects with responsive and modern designs."
                />
            </div>
        </>
    )
}

export default CSSComponentsPage