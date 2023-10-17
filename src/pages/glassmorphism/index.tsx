import React from 'react'
import Navbar from '../../components/Navbar'
import ColorInput from '../../components/ColorInput/ColorInput'
import { useControls } from '../../hooks/useControls'
import DirectionButton from '../../components/DirectionButton/DirectionButton'
import CopyButton from '../../components/CopyButton/CopyButton'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Footer from '../../components/Sections/Footer/Footer'
import { SEO } from '../../components/SEO'
import { Slider } from '@material-ui/core';
import { hexToRgb } from '../../utils/hexToRGB'
import styles from './styles.module.scss'



const Glassmorphism = () => {

    const {
        color,
        setColor,
        blur,
        setBlur,
        trasnparency,
        setTransparency
    } = useControls();

    const r = hexToRgb(color)?.r;
    const g = hexToRgb(color)?.g;
    const b = hexToRgb(color)?.b;

    return (
        <>
            <SEO title='Underline Gradient Generator' />
            <Navbar />
            <div className='w-full lg:w-4/6 mx-auto font-medium'>
                <div className='mt-4'>
                    <div className={`${styles.backgroundImage} py-20 rounded-md flex items-center justify-center  `}>
                        <span className='text-5xl lg:text-7xl text-center font-semibold text-white p-4 rounded-md' style={{
                            backdropFilter: `blur(${blur}px)`,
                            WebkitBackdropFilter: `blur(${blur}px)`,
                            backgroundColor: `rgba(${r}, ${g}, ${b}, ${trasnparency})`,
                        }}>glassmorphism</span>
                    </div>
                </div>
                <div className='p-4 bg-slate-200 text-gray-700 flex gap-10 mt-4 flex-wrap rounded-md justify-center items-center font-prompt font-semibold'>
                    <ColorInput label='Color:' preview={color} value={color} onChange={(e) => setColor(e.target.value)} />
                    <div className='flex items-center justify-center gap-2'>
                        <span>Blur:</span>
                        <Slider
                            style={{ width: 140, marginLeft: 20, marginRight: 20 }}
                            value={blur}
                            onChange={(e, value) => setBlur(value as number)}
                            step={0.5}
                            min={0}
                            max={20}
                        />
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <span>Transparency:</span>
                        <Slider
                            style={{ width: 140, marginLeft: 20, marginRight: 20 }}
                            value={trasnparency}
                            onChange={(e, value) => setTransparency(value as number)}
                            step={0.05}
                            min={0.0}
                            max={0.99}
                        />
                    </div>

                </div>

                <div className='w-full bg-slate-600 mt-4'>
                    <SyntaxHighlighter language="css" style={darcula}>
                        {`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
                    </SyntaxHighlighter>
                </div>

                <div className=''>
                    <CopyButton textToCopy={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`} />
                </div>

                <div className='w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg'>
                    <h1 className='font-semibold text-3xl'>What is Glassmorphism Generator?</h1>
                    <br />
                    <p>A Glassmorphism Generator is a specialized tool or software application that allows designers and developers to create graphical user interface (GUI) elements with the popular glassmorphism design style. Glassmorphism is characterized by frosted glass-like elements that are semi-transparent, with a blurred background, creating a sleek and modern look for UI components.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Glassmorphism