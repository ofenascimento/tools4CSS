"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Drawer from "../Drawer/Drawer";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdClose, MdFavoriteBorder, MdMenu } from "react-icons/md";
import { ISubmenuItem } from "./types";
import styles from './styles.module.scss'

function SubmenuItem({ href, children, onClick }: ISubmenuItem) {
  return (
    <li className={`p-2 rounded-md w-full m-1 `} onClick={onClick}>
      <Link href={href}>
      <span className={`${styles.link} cursor-pointer font-raleway text-base`}>{children}</span>
      </Link>
    </li>
  );
}

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isCssGeneratorsOpen, setIsCssGeneratorsOpen] = useState(false);
  const [isCssToolsOpen, setIsCssToolsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSubmenuClick = () => {
    setIsCssGeneratorsOpen(false);
    setIsCssToolsOpen(false);
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
            <div className="md:hidden flex flex-row gap-3">
              <button
                onClick={toggleDrawer}
                className="px-3 py-3 rounded-full text-white flex flex-row justify-center items-center gap-2"
                style={{ backgroundColor: "#FF407D" }}
              >
                <MdFavoriteBorder size={20} />
              </button>
              <button
                onClick={toggleTheme}
                className="bg-gray-200 px-3 py-3 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {theme === "dark" ? (
                  <FaSun color="#A0AFBF" size={20} />
                ) : (
                  <FaMoon size={20} />
                )}
              </button>
              <button
                className="p-2 dark:text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <MdClose size={28} /> : <MdMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-md flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 h-screen md:h-auto ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center text-lg font-medium space-y-8 md:flex md:space-x-6 md:space-y-0 text-gray-300 font-GilroyMedium">
              <li
                className="md:block text-slate-900 group relative"
                onMouseEnter={() => setIsCssGeneratorsOpen(true)}
                onMouseLeave={() => setIsCssGeneratorsOpen(false)}
              >
                <span className={`${isCssGeneratorsOpen ? "block" : "hidden"}`}>
                  <ul className="mt-7 absolute bg-slate-100 dark:bg-mainDark border border-gray-200 dark:border-slate-700 dark:text-white z-50 shadow-lg w-56 flex flex-col justify-center items-center rounded-lg p-4 font-GilroyMedium">
                    <SubmenuItem
                      href="/background-gradient"
                      onClick={handleSubmenuClick}
                    >
                      Background Gradient
                    </SubmenuItem>
                    <SubmenuItem
                      href="/text-gradient"
                      onClick={handleSubmenuClick}
                    >
                      Text Gradient
                    </SubmenuItem>
                    <SubmenuItem
                      href="/underline-gradient"
                      onClick={handleSubmenuClick}
                    >
                      Underline Gradient
                    </SubmenuItem>
                    <SubmenuItem
                      href="/buttons-generator"
                      onClick={handleSubmenuClick}
                    >
                      Buttons Generator
                    </SubmenuItem>
                    <SubmenuItem
                      href="/glassmorphism"
                      onClick={handleSubmenuClick}
                    >
                      Glassmorphism
                    </SubmenuItem>
                    <SubmenuItem
                      href="/neumorphism"
                      onClick={handleSubmenuClick}
                    >
                      Neumorphism
                    </SubmenuItem>
                    <SubmenuItem
                      href="/scrollbar-generator"
                      onClick={handleSubmenuClick}
                    >
                      Scrollbar Generator
                    </SubmenuItem>
                  </ul>
                </span>
                <Link href="/css-generators">
                  <div className="gap-2 justify-center items-center hidden md:flex cursor-pointer" onClick={handleSubmenuClick}>
                    <h1 className="dark:text-white">CSS Generators</h1>
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
              <li
                className="md:block text-slate-900 group relative cursor-pointer"
                onMouseEnter={() => setIsCssToolsOpen(true)}
                onMouseLeave={() => setIsCssToolsOpen(false)}
              >
                <span className={`${isCssToolsOpen ? "block" : "hidden"}`}>
                  <ul className="mt-7 absolute bg-slate-100 dark:bg-mainDark border border-gray-200 dark:border-slate-700 dark:text-white z-50 shadow-lg w-56 flex flex-col justify-center items-center rounded-lg p-4 font-GilroyMedium">
                    <SubmenuItem
                      href="/gradient-pallete"
                      onClick={handleSubmenuClick}
                    >
                      Gradient Pallete
                    </SubmenuItem>
                    <SubmenuItem
                      href="/css-formatter"
                      onClick={handleSubmenuClick}
                    >
                      CSS Formatter
                    </SubmenuItem>
                  </ul>
                </span>
                <Link href="/css-tools">
                  <div className="gap-2 justify-center items-center hidden md:flex" onClick={handleSubmenuClick}>
                    <h1 className="dark:text-white">CSS Tools</h1>
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
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/background-gradient">Background Gradient</Link>
              </li>
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/text-gradient">Text Gradient</Link>
              </li>
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/underline-gradient">Underline Gradient</Link>
              </li>
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/buttons-generator">Buttons Generator</Link>
              </li>
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/glassmorphism">Glassmorphism</Link>
              </li>
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/gradient-pallete">Gradient Pallete</Link>
              </li>
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/neumorphism">Neumorphism</Link>
              </li>
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/css-formatter">CSS Formatter</Link>
              </li>
              <li
                className="text-slate-900 dark:text-white block md:hidden"
                onClick={() => setNavbar(false)}
              >
                <Link href="/scrollbar-generator">Scrollbar Generator</Link>
              </li>
              <li className="hidden md:block">
                <button
                  onClick={toggleDrawer}
                  className="px-6 py-1 rounded-full text-white flex flex-row justify-center items-center gap-2"
                  style={{ backgroundColor: "#FF407D" }}
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
              </li>
              <li className="hidden md:block">
                <button
                  onClick={toggleTheme}
                  className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-full border border-slate-300 dark:border-slate-600"
                >
                  {theme === "dark" ? <FaSun color="#A0AFBF" /> : <FaMoon />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </nav>
  );
}

export default Navbar;
