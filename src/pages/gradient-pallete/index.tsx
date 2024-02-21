import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import Navbar from '../../components/Navbar';
import { SEO } from '../../components/SEO';
import Footer from '../../components/Sections/Footer/Footer';
import CopyButton from '../../components/CopyButton/CopyButton';
import { palleteGradient } from '../../utils/gradients';


const PalleteGradient = () => {
    return (
        <>
            <SEO title='Gradient Pallete' />
            <Navbar />
            <div className='w-full lg:w-4/6 mx-auto font-medium'>
                <Breadcrumb links={[
                    { href: '/', label: 'Home' },
                    { label: 'Gradient Pallete' },
                ]} />
                <div className='flex mt-4 gap-6 lg:justify-between justify-center  items-center flex-wrap'>
                    {palleteGradient.map((gradient) => (
                        <div key={gradient.id} className="flex justify-center items-center gap-2">
                            <div
                                id="preview"
                                className="p-6 w-44 h-28 xl:w-72 xl:h-32 rounded-lg relative"
                                style={{
                                    backgroundImage: `linear-gradient(80deg, ${gradient.color1}, ${gradient.color2})`,
                                }}
                            >

                                <CopyButton className='bg-transparent p-0 absolute right-0 top-0 px-2 py-1 m-2 w-auto bg-stone-600 rounded-lg cursor-pointer' textToCopy={`linear-gradient(80deg, ${gradient.color1}, ${gradient.color2})`} withIcon />
                            </div>

                            <div className='flex flex-col gap-3'>
                                <div>
                                    <CopyButton className='text-black bg-transparent m-0 p-0 w-auto' textClassName='text-black' textToCopy={gradient.color1} initialText={gradient.color1} copiedText='copied' />
                                </div>
                                <div>
                                    <CopyButton className='text-black bg-transparent m-0 p-0 w-auto' textClassName='text-black' textToCopy={gradient.color2} initialText={gradient.color2} copiedText='copied' />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg'>
                        <h1 className='font-semibold text-3xl'>What is Gradient Pallete ?</h1>
                        <br />
                        <p>Gradient Palette is a versatile and user-friendly CSS gradient generator designed for web developers and designers who seek to add a vibrant touch to their projects. This tool provides an extensive collection of beautiful and modern background gradients, perfect for enhancing the visual appeal of websites and applications. Users can easily browse through a wide array of gradient styles, from subtle pastel blends to bold and dynamic color transitions. Each gradient in the palette comes with ready-to-use CSS code, simplifying the process of integrating these stunning backgrounds into your web designs. Gradient Palette also offers customization options, allowing users to tweak the colors and direction of the gradients to match their specific design needs. Whether you&apos;re building a professional website, a personal blog, or a creative portfolio, Gradient Palette is an invaluable resource for making your projects stand out with minimal effort.</p>                    <br />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PalleteGradient;
