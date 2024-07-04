import React from 'react'

const Footer1 = () => {
    return (


        <footer className="bg-gray-800 text-white py-8 w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">Your Company</h1>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/" className="hover:text-gray-400">Home</a>
                        <a href="/about" className="hover:text-gray-400">About</a>
                        <a href="/services" className="hover:text-gray-400">Services</a>
                        <a href="/contact" className="hover:text-gray-400">Contact</a>
                    </div>
                </div>
                <div className="mt-4 text-center md:text-left">
                    <p> Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer1