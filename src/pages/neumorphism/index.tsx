import React from 'react'
import Navbar from '../../components/Navbar'
import ColorInput from '../../components/ColorInput/ColorInput'
import { useControls } from '../../hooks/useControls'
import Switch from 'react-switch';
import CopyButton from '../../components/CopyButton/CopyButton'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import Footer from '../../components/Sections/Footer/Footer'
import { Slider } from '@material-ui/core';
import { SEO } from '../../components/SEO'
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb'



const Neumorphism = () => {

    const {
        blur,
        setBlur,
        borderRadius,
        distance,
        setDistance,
    } = useControls();

    return (
        <>
            <SEO title='Neumorphism' />
            <Navbar />
            <div className='w-full lg:w-4/6 mx-auto font-medium'>
                <Breadcrumb links={[
                    { href: '/', label: 'Home' },
                    { label: 'Neumorphism' },
                ]} />
                <div className='mt-4 flex justify-center'>
                    <div
                        style={{
                            width: '240px',
                            height: '240px',
                            borderRadius: `${borderRadius}px`,
                            boxShadow: `${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff`,
                        }}
                    ></div>
                </div>
                <div className='p-4 bg-slate-200 text-gray-700 flex gap-6 mt-8 flex-wrap rounded-md justify-center items-center font-prompt font-semibold'>

                    <div className='flex items-center justify-center gap-2'>
                        <span>Direction:</span>
                        <Slider
                            style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                            value={distance}
                            onChange={(e, value) => setDistance(value as number)}
                            defaultValue={30}
                            max={60}
                        />
                    </div>
                    <div className='flex items-center justify-center gap-2'>

                        <span>Blur:</span>
                        <Slider
                            style={{ width: 200, marginLeft: 20, marginRight: 20 }}
                            value={blur}
                            onChange={(e, value) => setBlur(value as number)}
                            defaultValue={30}
                        />
                    </div>

                </div>

                <div className='w-full bg-slate-600 mt-4'>
                    <SyntaxHighlighter language="css" style={darcula}>
                        {`box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\n-webkit-box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;`}
                    </SyntaxHighlighter>
                </div>

                <div className=''>
                    <CopyButton textToCopy={`box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\n-webkit-box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;`} />
                </div>

                <div className='w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg'>
                    <h1 className='font-semibold text-3xl'>What is Neumorphism?</h1>
                    <br />
                    <p>Neumorphism is a design trend that has gained popularity in user interface (UI) design. It represents a blend of background colors, soft shadow, and smooth shapes to emulate physicality through digital elements. Unlike traditional skeuomorphism, which aims to mimic real-world textures and objects closely, neumorphism focuses on subtle, soft, and almost tactile surfaces that appear to extrude from or recede into the background. </p>
                    <br />
                    <p>The Neumorphism Generator is a web development tool designed to assist in crafting user interface (UI) elements featuring the neumorphic design style, using Cascading Style Sheets (CSS)</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Neumorphism