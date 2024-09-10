import Card from '@/components/Card/Card'
import React from 'react'

function CSSComponents() {
    return (
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
                title="Tailwind Components"
                slug="tailwind-components/hero"
                img="/icons/tailwind.png"
                info="Explore a wide range of ready-to-use Tailwind CSS components."
            />
            <Card
                title="CSS Buttons"
                slug="buttons-generator"
                img="/icons/button.png"
                info="Browse through a variety of customizable CSS buttons."
            />
        </div>
    )
}

export default CSSComponents