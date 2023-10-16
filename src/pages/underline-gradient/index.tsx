import React from 'react'
import Navbar from '../../components/Navbar'
import ColorInput from '../../components/ColorInput/ColorInput'
import { useControls } from '../../hooks/useControls'
import DirectionButton from '../../components/DirectionButton/DirectionButton'
import Switch from 'react-switch';
import CopyButton from '../../components/CopyButton/CopyButton'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Footer from '../../components/Sections/Footer/Footer'



const UnderlineGradient = () => {

    const {
        colorVariant1,
        setColorVariant1,
        colorVariant2,
        setColorVariant2,
        direction,
        setDirection,
        animated,
        setAnimated,
    } = useControls();

    return (
        <>
            <Navbar />
            <div className='w-full lg:w-4/6 mx-auto font-medium'>
                <div className='mt-4 text-center'>
                    <span className='lg:text-8xl font-semibold text'
                        style={{
                            backgroundImage: `linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%)`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 0.3em',
                            backgroundPosition: '0 80%',
                        }}
                    >Underline Gradient</span>
                </div>
                <div className='p-4 bg-slate-200 text-gray-700 flex gap-10 mt-4 flex-wrap rounded-md justify-center items-center font-prompt font-semibold'>
                    <ColorInput label='Color 1:' preview={colorVariant1} value={colorVariant1} onChange={(e) => setColorVariant1(e.target.value)} />
                    <ColorInput label='Color 2:' preview={colorVariant2} value={colorVariant2} onChange={(e) => setColorVariant2(e.target.value)} />
                    <DirectionButton />

                </div>

                <div className='w-full bg-slate-600 mt-4'>
                    <SyntaxHighlighter language="css" style={darcula}>
                        {`background-image: linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%); \n background-repeat: no-repeat; \n background-size: 100% 0.3em; \n background-position: 0 80%;`}
                    </SyntaxHighlighter>
                </div>

                <div className=''>
                    <CopyButton textToCopy={`background-image: linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%); \n background-repeat: no-repeat; \n background-size: 100% 0.3em; \n background-position: 0 80%;`} />
                </div>

                <div className='w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg'>
                    <h1 className='font-semibold text-3xl'>What is Underline Gradient Generator?</h1>
                    <br />
                    <p>An underline gradient generator is a web development tool or resource designed to streamline the creation of gradient effects for the underline of text, typically used in links or other text elements. These tools allow developers to easily customize the appearance of the underline, setting desired gradient colors and directions without the need to write CSS code manually. With an underline gradient generator, developers can save time and effort, creating visually engaging and dynamic underlines for their web content.</p>                    <br />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UnderlineGradient