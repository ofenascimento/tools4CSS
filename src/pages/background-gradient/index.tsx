import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import ColorInput from "../../components/ColorInput/ColorInput";
import { useControls } from "../../hooks/useControls";
import style from "./styles.module.scss";
import Switch from "react-switch";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import Footer from "../../components/Sections/Footer/Footer";
import { Slider } from "@material-ui/core";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { useFavorites } from "../../context/FavoriteContext";
import { useRouter } from "next/router";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

const BakcgroundGradient = () => {
  const {
    colorVariant1,
    setColorVariant1,
    colorVariant2,
    setColorVariant2,
    animated,
    setAnimated,
    angle,
    setAngle,
  } = useControls();

  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Background Gradient"
  );

  return (
    <>
      <SEO title="Background Gradient Generator" />
      <Navbar />
      <div className="w-full lg:w-4/6 mx-auto">
        <div className=" flex flex-row justify-between items-center">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { label: "Background Gradient Generator" },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>

        <div className="mt-4 mx-4 lg:mx-0">
          <div
            className={`${
              animated ? style.animatedApp : style.app
            } py-32 rounded-md  `}
            style={{
              backgroundImage: `linear-gradient(${angle}deg, ${colorVariant1}, ${
                animated ? colorVariant1 + "," : ""
              } ${colorVariant2} ${animated ? "," + colorVariant2 : ""})`,
            }}
          ></div>
        </div>
        <div className="border border-slate-300 rounded-md shadow-sm bg-white dark:bg-mainDark p-4 text-gray-700 mt-4 flex flex-wrap justify-center items-center gap-6 font-EuclidRegular mx-4 lg:mx-0">
          <ColorInput
            preview={colorVariant1}
            value={colorVariant1}
            onChange={(e) => setColorVariant1(e.target.value)}
          />
          <ColorInput
            preview={colorVariant2}
            value={colorVariant2}
            onChange={(e) => setColorVariant2(e.target.value)}
          />
          <div className="flex items-center justify-center gap-2">
            <span>Direction:</span>
            <Slider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={angle}
              onChange={(e, value) => setAngle(value as number)}
              className={style.slider}
              step={1}
              min={0}
              max={360}
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span>Animation:</span>
            <Switch
              checked={animated}
              onChange={(
                nextChecked: boolean | ((prevState: boolean) => boolean)
              ) => {
                setAnimated(nextChecked);
                setAngle(120);
              }}
              onColor="#CBD5FF"
              onHandleColor="#0f54b4"
              className="mt-0 border border-slate-300 shadow-sm"
              handleDiameter={10}
              uncheckedIcon={false}
              checkedIcon={false}
              offColor="#fff"
              offHandleColor="#0f54b4"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              id="material-switch"
            />
          </div>
        </div>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0">
          <SyntaxHighlighter language="css" style={darcula}>
            {`background-image: linear-gradient(${angle}deg, ${colorVariant1}, ${colorVariant2});${
              animated
                ? "\nbackground-size: 400% 400%;\nanimation: gradient 10s ease infinite;\n@keyframes gradient {\n0% { background-position: 0% 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0% 50%; }}"
                : ""
            } `}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 lg:mx-0">
          <CopyButton
            textToCopy={`background-image: linear-gradient(${angle}deg, ${colorVariant1}, ${colorVariant2});${
              animated
                ? "\nbackground-size: 400% 400%;\nanimation: gradient 10s ease infinite;\n@keyframes gradient {\n0% { background-position: 0% 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0% 50%; }}"
                : ""
            } `}
          />
        </div>

        <div className="w-auto md:w-full mt-4 p-4 bg-slate-200 font-manrope text-lg mx-4 lg:mx-0">
          <h1 className="text-3xl">What is Background Gradient Generator?</h1>
          <br />
          <p>
            The CSS Background Gradient Generator is a web development tool that
            assists in creating gradient backgrounds for HTML elements using
            Cascading Style Sheets (CSS). With this generator, designers and
            developers can define and customize gradients, specifying colors,
            angles, and other properties to achieve the desired visual effect.
            The resulting CSS code can then be easily integrated into web
            projects, allowing for the creation of stylish and dynamic
            backgrounds for web pages and user interfaces. This tool simplifies
            the process of implementing gradient backgrounds in CSS, enhancing
            the overall design and user experience of websites and web
            applications.
          </p>{" "}
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BakcgroundGradient;
