import React, { useState, useEffect } from "react";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { SEO } from "../../components/SEO";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import { MdClose, MdCode } from "react-icons/md";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";
import CopyButton from "../../components/CopyButton/CopyButton";
import { buttonsGenerator } from "@/constants/buttonsGenerator";
import { css as beautifyCSS } from 'js-beautify';

export interface IButtonGenerator {
  id: number;
  className: string;
  text: string;
  css?: string;
}

const ButtonsGenerator: React.FC = () => {
  const { isFavorited, handleFavorite } = useFavoriteTool("Buttons Generator");
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<IButtonGenerator | null>(null);

  // Injetar CSS das constantes no documento
  useEffect(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = buttonsGenerator.map(button => button.css).join('\n');
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleButtonClick = (button: IButtonGenerator) => {
    const beautifiedCSS = beautifyCSS(button.css ?? '', { indent_size: 2 });
    setSelectedButton({ ...button, css: beautifiedCSS });
    setFullScreen(true);
  };

  const handleCloseModal = () => {
    setFullScreen(false);
    setSelectedButton(null);
  };

  return (
    <div>
      <SEO title="CSS Buttons" />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className="flex flex-row justify-between items-center mx-4 md:mx-0">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { label: "CSS Buttons" },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>
        <Title
          customInfoClassname="lg:w-3/4"
          title="CSS Buttons"
          info="Discover an amazing collection of CSS button styles. Explore different designs and get the code to enhance your projects with beautiful buttons."
        />
        <div className="flex mt-4 gap-4 justify-start p-5 md:p-0 lg:justify-between md:justify-center items-center flex-wrap">
          {buttonsGenerator.map((button) => (
            <div
              className="flex w-full justify-center items-center md:w-[48%] lg:w-[30%] h-56 lg:h-52 bg-gray-50 border border-slate-300 dark:bg-dark-100 dark:border-slate-600  rounded-lg p-10 md:p-2 relative"
              key={button.id}
            >
              <button className={`${button.className} font-lexend font-normal`}>
                {button.text}
              </button>
              <div className="p-2 absolute bottom-0 right-0">
                <button
                  className="bg-dark-100 dark:bg-black py-1 px-4 rounded-full text-white flex gap-2 justify-center items-center"
                  onClick={() => handleButtonClick(button)}
                >
                  Get the code <MdCode />
                </button>
              </div>
            </div>
          ))}
          <Info
            title="What is CSS Buttons?"
            paragraph="Buttons Generator is a powerful and user-friendly CSS button generator designed for web developers and designers who aim to elevate their projects with stylish and interactive buttons. This tool offers a comprehensive collection of beautifully crafted button styles, perfect for enhancing the usability and aesthetics of websites and applications. Users can easily explore a wide range of button designs, from sleek and modern to vibrant and eye-catching. Each button in the generator comes with ready-to-use CSS code, making it simple to integrate these stunning buttons into your web designs. Buttons Generator also provides customization options, allowing users to adjust colors, sizes, and animations to fit their specific design requirements. Whether you're developing a professional website, an e-commerce platform, or a personal blog, Buttons Generator is an essential resource for creating visually appealing and functional buttons with minimal effort."
          />
        </div>
      </div>
      {selectedButton && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${fullScreen ? "block" : "hidden"
            }`}
        >
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-gray-50 dark:bg-black border-4 border-slate-300 dark:border-dark-100 rounded-lg p-4 md:p-4 relative z-10 w-full max-w-lg mx-4 md:mx-auto">
            <div className="mb-4 flex justify-end">
              <button
                className="dark:text-white text-black bg-gray-200 dark:bg-dark-100 p-2 rounded-full"
                onClick={handleCloseModal}
              >
                <MdClose />
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 dark:bg-gray-700 w-full p-2 rounded-lg">
                <button className={selectedButton.className}>
                  {selectedButton.text}
                </button>
              </div>

              <div className="w-full mt-4 max-h-60 overflow-auto">
                <SyntaxHighlighter language="css" style={darcula}>
                  {selectedButton.css}
                </SyntaxHighlighter>
              </div>
              <div className="mt-2 w-full">
                <CopyButton textToCopy={selectedButton.css ?? ""} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonsGenerator;
