import React, { useState } from "react";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { SEO } from "../../components/SEO";
import { hexToRgb } from "../../utils/hexToRGB";
import styles from "./styles.module.scss";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import ControlsContainer from "../../components/ControlsContainer/ControlsContainer";
import CustomSlider from "../../components/CustomSlider/CustomSlider";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import { MdCheck } from "react-icons/md";

const Glassmorphism = () => {
  const [blur, setBlur] = useState(12);
  const [trasnparency, setTransparency] = useState(0.15);
  const [color, setColor] = useState("#dddbdb");

  const r = hexToRgb(color)?.r;
  const g = hexToRgb(color)?.g;
  const b = hexToRgb(color)?.b;

  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Glassmorphism Generator"
  );

  return (
    <>
      <SEO title="Glassmorphism Generator" />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className=" flex flex-row justify-between items-center mx-4 lg:mx-0">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { label: "Glassmorphism Generator" },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>
        <Title
          title="Glassmorphism CSS Generator"
          info="Easily create modern glassmorphism effects for your web projects with our Glassmorphism CSS Generator. Perfect for achieving the trendy frosted glass look in your designs."
          customInfoClassname="lg:w-3/4"
        />
        <div className="mt-4">
          <div
            className={`${styles.backgroundImage} py-20 rounded-md flex items-center justify-center mx-4 lg:mx-0`}
          >
            <div
              className=" p-4 rounded-2xl"
              style={{
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: `rgba(${r}, ${g}, ${b}, ${trasnparency})`,
              }}
            >
              <div className=" flex justify-center items-center gap-2 pb-4 border-b border-b-slate-300">
                <img
                  src="/avatars/avatar1.png"
                  className=" w-16 h-16 rounded-xl"
                  alt=""
                />
                <img
                  src="/avatars/avatar2.png"
                  className=" w-16 h-16 rounded-xl"
                  alt=""
                />
                <img
                  src="/avatars/avatar3.png"
                  className=" w-16 h-16 rounded-xl"
                  alt=""
                />
                <img
                  src="/avatars/avatar4.png"
                  className=" w-16 h-16 rounded-xl"
                  alt=""
                />
              </div>
              <div className="flex justify-start items-center mt-4 pb-4 border-b border-b-slate-300">
                <div className=" p-2 rounded-lg bg-green-500"><MdCheck color="#fff" /></div>
                <div className="ml-4">
                  <h1 className="text-white text-xl m-0 p-0 font-lexend leading-5">Something with glass</h1>
                  <p className=" font-lexend text-gray-300">Your subtitle here</p>
                </div>

              </div>
              <div className=" mt-4">
                <button className=" bg-blue-600 p-2 w-full rounded-lg text-white font-lexend hover:bg-blue-700">Click here</button>
              </div>
            </div>

            {/* <span
              className="text-5xl lg:text-7xl text-center text-white p-4 rounded-md"
              style={{
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: `rgba(${r}, ${g}, ${b}, ${trasnparency})`,
              }}
            >
              glassmorphism
            </span> */}
          </div>
        </div>
        <ControlsContainer>
          <ColorPicker value={color} onChange={(color) => setColor(color)} />
          <div className="flex items-center justify-center gap-2">
            <span>Blur:</span>
            <CustomSlider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={blur}
              onChange={(_e: any, value: number) => setBlur(value as number)}
              step={0.5}
              min={0}
              max={20}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Transparency:</span>
            <CustomSlider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={trasnparency}
              onChange={(_e: any, value: number) =>
                setTransparency(value as number)
              }
              step={0.05}
              min={0.0}
              max={0.99}
            />
          </div>
        </ControlsContainer>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0 rounded-lg">
          <SyntaxHighlighter language="css"  style={{ ...darcula, borderRadius: '0.5rem' }}>
            {`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 mt-2 lg:mx-0">
          <CopyButton
            textToCopy={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
          />
        </div>

        <Info
          title="What is Glassmorphism Generator?"
          paragraph=" A Glassmorphism Generator is a specialized tool or software
            application that allows designers and developers to create graphical
            user interface (GUI) elements with the popular glassmorphism design
            style. Glassmorphism is characterized by frosted glass-like elements
            that are semi-transparent, with a blurred background, creating a
            sleek and modern look for UI components."
        />
      </div>
    </>
  );
};

export default Glassmorphism;
