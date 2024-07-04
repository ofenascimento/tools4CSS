// components/Navbar.js
import Link from 'next/link';

export default function Navbar2() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <svg
                        className="h-8 w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M13 2L3 14h9l-1 8 10-12h-9z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="flex-grow hidden md:flex justify-center space-x-4">
                    <Link href="/">
                        <a className="text-gray-300 hover:text-white">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-gray-300 hover:text-white">About</a>
                    </Link>
                    <Link href="/services">
                        <a className="text-gray-300 hover:text-white">Services</a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-gray-300 hover:text-white">Contact</a>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <Link href="/login">
                        <a className="text-gray-300 hover:text-white bg-blue-600 px-4 py-2 rounded">Login</a>
                    </Link>
                </div>
                <div className="md:hidden">
                    <input type="checkbox" id="menu-toggle" className="hidden" />
                    <label htmlFor="menu-toggle" className="text-gray-300 hover:text-white cursor-pointer">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <div id="menu" className="hidden">
                        <div className="flex flex-col space-y-4 mt-2">
                            <Link href="/">
                                <a className="text-gray-300 hover:text-white">Home</a>
                            </Link>
                            <Link href="/about">
                                <a className="text-gray-300 hover:text-white">About</a>
                            </Link>
                            <Link href="/services">
                                <a className="text-gray-300 hover:text-white">Services</a>
                            </Link>
                            <Link href="/contact">
                                <a className="text-gray-300 hover:text-white">Contact</a>
                            </Link>
                            <Link href="/login">
                                <a className="text-gray-300 hover:text-white bg-blue-600 px-4 py-2 rounded">Login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
