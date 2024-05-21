import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ColorInput from "../../components/ColorInput/ColorInput";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import Footer from "../../components/Sections/Footer/Footer";
import { SEO } from "../../components/SEO";
import { Slider } from "@material-ui/core";
import { hexToRgb } from "../../utils/hexToRGB";
import styles from "./styles.module.scss";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import ControlsContainer from "../../components/ControlsContainer/ControlsContainer";
import CustomSlider from "../../components/CustomSlider/CustomSlider";

const Glassmorphism = () => {
  const [blur, setBlur] = useState(4);
  const [trasnparency, setTransparency] = useState(0.15);
  const [color, setColor] = useState("#ffffff");

  const r = hexToRgb(color)?.r;
  const g = hexToRgb(color)?.g;
  const b = hexToRgb(color)?.b;

  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Glassmorphism Generator"
  );

  return (
    <>
      <SEO title="Glassmorphism Generator" />
      <Navbar />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className=" flex flex-row justify-between items-center">
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
        <div className="mt-4">
          <div
            className={`${styles.backgroundImage} py-20 rounded-md flex items-center justify-center mx-4 lg:mx-0`}
          >
            <span
              className="text-5xl lg:text-7xl text-center text-white p-4 rounded-md"
              style={{
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: `rgba(${r}, ${g}, ${b}, ${trasnparency})`,
              }}
            >
              glassmorphism
            </span>
          </div>
        </div>
        <ControlsContainer>
          <ColorInput
            label="Color:"
            preview={color}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
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
              onChange={(_e: any, value: number) => setTransparency(value as number)}
              step={0.05}
              min={0.0}
              max={0.99}
            />
          </div>
        </ControlsContainer>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0">
          <SyntaxHighlighter language="css" style={darcula}>
            {`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 lg:mx-0">
          <CopyButton
            textToCopy={`backdrop-filter: blur(${blur}px);\n--webkit-backdrop-filter: blur(${blur}px);\n--moz-backdrop-filter: blur(${blur}px);\nbackground-color: rgba(${r}, ${g}, ${b}, ${trasnparency});`}
          />
        </div>

        <div className="w-auto md:w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg mx-4 lg:mx-0">
          <h1 className="text-3xl">What is Glassmorphism Generator?</h1>
          <br />
          <p>
            A Glassmorphism Generator is a specialized tool or software
            application that allows designers and developers to create graphical
            user interface (GUI) elements with the popular glassmorphism design
            style. Glassmorphism is characterized by frosted glass-like elements
            that are semi-transparent, with a blurred background, creating a
            sleek and modern look for UI components.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Glassmorphism;
