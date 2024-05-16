"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Drawer from "../Drawer/Drawer";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="w-full pt-2 z-50 top-0">
      <div className="justify-between lg:w-4/6 px-4 mx-auto lg:max-w-7xl md:items-center md:flex lg:px-0">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="cursor-pointer">
              <Image
                className="cursor-pointer"
                src="/logo.png"
                width={60}
                height={60}
                alt=""
              />
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-slate-900"
                    viewBox="0 0 20 20"
                    fill="#000"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6  text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#000"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-md flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center text-lg font-medium space-y-8 md:flex md:space-x-6 md:space-y-0 text-gray-300 font-EuclidMedium">
              <li className="md:block text-slate-900  group relative cursor-pointer">
                <span className="group-hover:block hidden">
                  <ul className="mt-7 absolute bg-slate-100 border border-gray-200 z-50 shadow-lg w-56 flex flex-col justify-center items-center rounded-lg p-4 font-GilroyMedium">
                    <li className="p-2 rounded-md w-full m-2">
                      <Link href="/background-gradient">
                        Background Gradient
                      </Link>
                    </li>
                    <li className="p-2 rounded-md w-full m-2">
                      <Link href="/text-gradient">Text Gradient</Link>
                    </li>
                    <li className="p-2 rounded-md w-full m-2">
                      <Link href="/underline-gradient">Underline Gradient</Link>
                    </li>
                    <li className="p-2 rounded-md w-full m-2">
                      <Link href="/glassmorphism">Glassmorphism</Link>
                    </li>
                    <li className="p-2 rounded-md w-full m-2">
                      <Link href="/neumorphism">Neumorphism</Link>
                    </li>
                    <li className="p-2 rounded-md w-full m-2">
                      <Link href="/scrollbar-generator">
                        Scrollbar Generator
                      </Link>
                    </li>
                  </ul>
                </span>

                <Link href="">
                  <div className="gap-2 justify-center items-center hidden md:flex">
                    CSS Generators
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 320 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_127_13614)">
                        <path
                          d="M137.4 374.6C149.9 387.1 170.2 387.1 182.7 374.6L310.7 246.6C319.9 237.4 322.6 223.7 317.6 211.7C312.6 199.7 301 191.9 288 191.9L32 192C19.1 192 7.40001 199.8 2.40001 211.8C-2.59999 223.8 0.200006 237.5 9.30001 246.7L137.3 374.7L137.4 374.6Z"
                          fill="#c7cbd8"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_127_13614">
                          <rect width="320" height="512" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>{" "}
                  </div>
                </Link>
              </li>
              <li className="md:block text-slate-900  group relative cursor-pointer">
                <span className="group-hover:block hidden">
                  <ul className="mt-7 absolute bg-slate-100 border border-gray-200 z-50 shadow-lg w-56 flex flex-col justify-center items-center rounded-lg p-4 font-GilroyMedium">
                    <li className="p-2 rounded-md w-full m-2">
                      <Link href="/gradient-pallete">Gradient Pallete</Link>
                    </li>
                    <li className="p-2 rounded-md w-full m-22">
                      <Link href="/css-formatter">CSS Formatter</Link>
                    </li>
                  </ul>
                </span>

                <Link href="">
                  <div className="gap-2 justify-center items-center hidden md:flex">
                    CSS Tools
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 320 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_127_13614)">
                        <path
                          d="M137.4 374.6C149.9 387.1 170.2 387.1 182.7 374.6L310.7 246.6C319.9 237.4 322.6 223.7 317.6 211.7C312.6 199.7 301 191.9 288 191.9L32 192C19.1 192 7.40001 199.8 2.40001 211.8C-2.59999 223.8 0.200006 237.5 9.30001 246.7L137.3 374.7L137.4 374.6Z"
                          fill="#c7cbd8"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_127_13614">
                          <rect width="320" height="512" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Link>
              </li>

              <li className="text-slate-900 block md:hidden">
                <Link href="/background-gradient">Background Gradient</Link>
              </li>
              <li className="text-slate-900 block md:hidden">
                <Link href="/text-gradient">Text Gradient</Link>
              </li>
              <li className="text-slate-900 block md:hidden">
                <Link href="/underline-gradient">Underline Gradient</Link>
              </li>
              <li className="text-slate-900 block md:hidden">
                <Link href="/glassmorphism">Glassmorphism</Link>
              </li>
              <li className="text-slate-900 block md:hidden">
                <Link href="/gradient-pallete">Gradient Pallete</Link>
              </li>
              <li className="text-slate-900 block md:hidden">
                <Link href="/neumorphism">Neumorphism</Link>
              </li>
              <li className="text-slate-900 block md:hidden">
                <Link href="/css-formatter">CSS Formatter</Link>
              </li>
              <li className="text-slate-900 block md:hidden">
                <Link href="/scrollbar-generator">Scrollbar Generator</Link>
              </li>
              <li>
                <button
                  onClick={toggleDrawer}
                  className="px-6 py-2 rounded-full text-white flex flex-row justify-center items-center gap-2" 
                  style={{backgroundColor: '#FF407D'}}
                >
                  Favorites
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
                <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
