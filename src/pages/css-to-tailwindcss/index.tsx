import React, { useState, ChangeEvent } from 'react';
import tailwindMapping from '../../utils/CSSToTailwind';
import { SEO } from '../../components/SEO';
import Navbar from '../../components/Navbar';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Sections/Footer/Footer';
import CopyButton from '../../components/CopyButton/CopyButton';

type TailwindMapping = {
    [key: string]: {
        [innerKey: string]: string;
    };
};

const mapping = tailwindMapping as TailwindMapping;

const CssToTailwindConverter: React.FC = () => {
    const [cssInput, setCssInput] = useState<string>(
`display: none;
margin-top: 3rem;
text-align: center;
position: absolute;`);
    const [tailwindOutput, setTailwindOutput] = useState<string>('hidden mt-12 text-center absolute');

    const convertToTailwind = (): void => {
        const cssProperties = cssInput.split(';').map(prop => prop.trim()).filter(prop => prop !== '');
        let tailwindClasses: string[] = [];

        cssProperties.forEach(property => {
            const [key, value] = property.split(':').map(p => p.trim());
            const tailwindClass = mapping[key]?.[value];
            if (tailwindClass) {
                const formattedClass = tailwindClass.startsWith('.') ? tailwindClass.substring(1) : tailwindClass;
                tailwindClasses.push(formattedClass);
            }
        });

        setTailwindOutput(tailwindClasses.join(' '));
    };


    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setCssInput(e.target.value);
    };

    return (
        <>
            <SEO title='CSS to Tailwind Converter' />
            <Navbar />
            <div className='w-full lg:w-4/6 mx-auto font-medium'>
                <Breadcrumb links={[
                    { href: '/', label: 'Home' },
                    { label: 'CSS to Tailwind Converters' },
                ]} />
                <div className='w-full flex mt-4 gap-4 flex-wrap'>
                    <div className='flex flex-col'>
                        <textarea
                            value={cssInput}
                            onChange={handleInputChange}
                            placeholder="Enter CSS properties here"
                            className='w-[405px] h-[285px]  bg-slate-950 text-yellow-50 p-2'
                        />
                        <button className='bg-blue-700 w-full text-white py-2' onClick={convertToTailwind}>Convert to Tailwind</button>
                    </div>
                    <div>
                        <div>Tailwind Classes:</div>
                        <div className='flex bg-slate-900 p-2 rounded-md items-center justify-center'>
                            <p className='text-yellow-50'>{tailwindOutput}</p>
                            <CopyButton withIcon textToCopy={tailwindOutput} className='w-auto bg-transparent p-0' />
                        </div>
                    </div>

                </div>

                <div className='w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg'>
                    <h1 className='font-semibold text-3xl'>What is Background Gradient Generator?</h1>
                    <br />
                    <p>The CSS Background Gradient Generator is a web development tool that assists in creating gradient backgrounds for HTML elements using Cascading Style Sheets (CSS). With this generator, designers and developers can define and customize gradients, specifying colors, angles, and other properties to achieve the desired visual effect. The resulting CSS code can then be easily integrated into web projects, allowing for the creation of stylish and dynamic backgrounds for web pages and user interfaces. This tool simplifies the process of implementing gradient backgrounds in CSS, enhancing the overall design and user experience of websites and web applications.</p>                    <br />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CssToTailwindConverter;
