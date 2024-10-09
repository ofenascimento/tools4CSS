import React, { useState, useEffect } from "react";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import ControlsContainer from "../../components/ControlsContainer/ControlsContainer";
import CustomSlider from "../../components/CustomSlider/CustomSlider";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";
import ColorPicker from "@/components/ColorPicker/ColorPicker";

const Neumorphism: React.FC = () => {
  const [blur, setBlur] = useState<number>(34);
  const [borderRadius, setBorderRadius] = useState<number>(20);
  const [distance, setDistance] = useState<number>(10);
  const [color, setColor] = useState<string>("#f0f0f0");

  // Ensure that the component only renders on the client side
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Neumorphism Generator"
  );

  const lightenColor = (hex: string, percent: number): string => {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
    g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
    b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

    const newHex =
      "#" +
      [r, g, b]
        .map((x) => {
          const hexPart = x.toString(16);
          return hexPart.length === 1 ? "0" + hexPart : hexPart;
        })
        .join("");
    return newHex;
  };

  const darkenColor = (hex: string, percent: number): string => {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.max(0, Math.floor(r - r * (percent / 100)));
    g = Math.max(0, Math.floor(g - g * (percent / 100)));
    b = Math.max(0, Math.floor(b - b * (percent / 100)));

    const newHex =
      "#" +
      [r, g, b]
        .map((x) => {
          const hexPart = x.toString(16);
          return hexPart.length === 1 ? "0" + hexPart : hexPart;
        })
        .join("");
    return newHex;
  };

  const lighterColor = lightenColor(color, 20);
  const darkerColor = darkenColor(color, 20);

  const boxShadowStyle = `${distance}px ${distance}px ${blur}px ${darkerColor}, -${distance}px -${distance}px ${blur}px ${lighterColor}`;

  // Render null on the server to avoid mismatch issues, only render on the client
  if (!mounted) {
    return null;
  }

  return (
    <>
      <SEO title="Neumorphism" />
      <div className="w-full lg:w-4/6 mx-auto font-medium bg-transparent">
        <div className="flex flex-row justify-between items-center mx-4 lg:mx-0">
          <Breadcrumb
            links={[{ href: "/", label: "Home" }, { label: "Neumorphism" }]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>

        <Title
          title="Neumorphism CSS Generator"
          info="Effortlessly create soft, subtle 3D effects with our Neumorphism CSS Generator"
        />

        <div
          style={{ backgroundColor: color }}
          className="mt-4 flex justify-center py-20 rounded-2xl"
        >
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: `${borderRadius}px`,
              boxShadow: boxShadowStyle,
              backgroundColor: color,
            }}
          ></div>
        </div>

        <ControlsContainer>
          <ColorPicker value={color} onChange={(color) => setColor(color)} />
          <div className="flex items-center justify-center gap-2">
            <span>Distance:</span>
            <CustomSlider
              style={{ width: 200, marginLeft: 20, marginRight: 20 }}
              value={distance}
              onChange={(_e: any, value: number) => setDistance(value)}
              defaultValue={30}
              max={60}
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <span>Blur:</span>
            <CustomSlider
              style={{ width: 200, marginLeft: 20, marginRight: 20 }}
              value={blur}
              onChange={(_e: any, value: number) => setBlur(value)}
              defaultValue={30}
            />
          </div>
        </ControlsContainer>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0">
          <SyntaxHighlighter language="css" style={darcula}>
            {`background-color: ${color};
box-shadow: ${boxShadowStyle};
-webkit-box-shadow: ${boxShadowStyle};`}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 lg:mx-0">
          <CopyButton
            textToCopy={`background-color: ${color};
box-shadow: ${boxShadowStyle};
-webkit-box-shadow: ${boxShadowStyle};`}
          />
        </div>

        <Info
          title="What is Neumorphism?"
          paragraph={
            <>
              <p>
                Neumorphism is a design trend that has gained popularity in user
                interface (UI) design. It represents a blend of background
                colors, soft shadows, and smooth shapes to emulate physicality
                through digital elements. Unlike traditional skeuomorphism,
                which aims to mimic real-world textures and objects closely,
                neumorphism focuses on subtle, soft, and almost tactile surfaces
                that appear to extrude from or recede into the background.
              </p>
              <br />
              <p>
                The Neumorphism Generator is a web development tool designed to
                assist in crafting user interface (UI) elements featuring the
                neumorphic design style, using Cascading Style Sheets (CSS).
              </p>
            </>
          }
        />
      </div>
    </>
  );
};

export default Neumorphism;
