import React, { useState } from "react";
import style from "./styles.module.scss";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import Tooltip from "../../components/Tooltip/Tooltip";
import { MdArrowBack, MdFullscreen, MdOutlineBlurLinear, MdOutlineCircle } from "react-icons/md";
import ControlsContainer from "../../components/ControlsContainer/ControlsContainer";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";
import AnglePicker from "../../components/AnglePicker/AnglePicker";
import { HexColorPicker } from "react-colorful";
import CustomSwitch from "@/components/CustomSwitch/CustomSwitch";
import { palleteGradient } from "@/utils/gradients";
import { validateAndFormatHex } from "@/utils/validateAndFormatHex";
import { parseHexToRGB } from "@/utils/parseHexToRGB";

const BackgroundGradient = () => {
  const [colorVariant1, setColorVariant1] = useState("#1d4ed8");
  const [colorVariant2, setColorVariant2] = useState("#24ff8e");
  const [type, setType] = useState("linear");
  const [animated, setAnimated] = useState(false);
  const [angle, setAngle] = useState(80);
  const [fullScreen, setFullScreen] = useState(false);
  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Background Gradient"
  );

  const color1Rgb = parseHexToRGB(colorVariant1);
  const color2Rgb = parseHexToRGB(colorVariant2);

  const parseRGBToHex = (r: number, g: number, b: number) => {
    return (
      "#" +
      ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)
        .toUpperCase()
    );
  };

  const handleRgbChange = (color: any, setColor: any) => (e: any) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/^0+/, '');
    const rgb = { ...color, [name]: Math.max(0, Math.min(255, Number(sanitizedValue))) };
    setColor(parseRGBToHex(rgb.r, rgb.g, rgb.b));
  };

  return (
    <>
      <SEO title="Background Gradient Generator" />
      <div className="w-full lg:w-4/6 mx-auto">
        <div className="flex flex-row justify-between items-center mx-4 md:mx-0">
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

        <Title
          title="CSS Gradient"
          info="The CSS Gradient Generator is a user-friendly online tool designed to help developers and designers create beautiful gradient backgrounds."
          customInfoClassname="lg:w-3/4"
        />

        <div className="mt-4 mx-4 lg:mx-0 flex flex-col lg:flex-row  gap-1">
          <div
            className={`${animated ? style.animatedApp : style.app
              } py-32 rounded-md relative p-2 w-full lg:w-[64%]`}
            style={{
              backgroundImage: `${type}-gradient(${type === 'linear' ? `${angle}deg,` : ''} ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
                } ${colorVariant2} ${animated ? "," + colorVariant2 : ""})`,
            }}
          >
            <button
              className="text-gray-600 bg-white dark:bg-mainDark dark:text-slate-200 absolute right-0 top-0 m-4 flex justify-center items-center rounded-sm"
              onClick={() => setFullScreen(true)}
            >
              <Tooltip text="View in full screen">
                <MdFullscreen size={22} />
              </Tooltip>
            </button>

            <div
              className="text-gray-600 bg-white border border-slate-300 dark:border-slate-600 p-2 rounded-lg dark:bg-mainDark dark:text-slate-200 absolute right-0 bottom-0 m-2 flex justify-center items-center"
            >
              <div className="flex items-center justify-center gap-4">
                <span className=" text-sm">Animation:</span>
                <CustomSwitch
                  checked={animated}
                  onChange={() => setAnimated((prev) => !prev)}

                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[35%] p-2 bg-white border shadow-none border-slate-300 dark:bg-mainDark dark:text-white dark:border-slate-600 rounded-lg">
            <div id="controls">
              <div className="items-center p-2 rounded-lg">
                <HexColorPicker style={{ width: '100%', height: 100 }} color={colorVariant1} onChange={setColorVariant1} />
                <div className="mt-3 flex gap-2 justify-between items-center">
                  <div className=" flex flex-col gap-2 justify-center items-center">
                    <input value={colorVariant1} onChange={e => validateAndFormatHex(e, setColorVariant1)} className="bg-white text-black dark:text-white dark:bg-gray-700 border-slate-400 border w-[88px] p-2 rounded-lg" />
                    <span className=" text-xs">HEX</span>
                  </div>
                  <div className="flex gap-1">
                    <div className=" flex flex-col gap-2 justify-center items-center">
                      <input
                        className="bg-white text-black dark:text-white dark:bg-gray-700 border-slate-400 border p-2 rounded-lg w-12 text-center"
                        type="number"
                        name="r"
                        value={color1Rgb.r}
                        onChange={handleRgbChange(color1Rgb, setColorVariant1)}
                      />
                      <span className=" text-xs">R</span>
                    </div>
                    <div className=" flex flex-col gap-2 justify-center items-center">
                      <input
                        className="bg-white text-black dark:text-white dark:bg-gray-700 border-slate-400 border p-2 rounded-lg w-12 text-center"
                        type="number"
                        name="g"
                        value={color1Rgb.g}
                        onChange={handleRgbChange(color1Rgb, setColorVariant1)}
                      />
                      <span className=" text-xs">G</span>
                    </div>
                    <div className=" flex flex-col gap-2 justify-center items-center">

                      <input
                        className="bg-white text-black dark:text-white dark:bg-gray-700 border-slate-400 border p-2 rounded-lg w-12 text-center"
                        type="number"
                        name="b"
                        value={color1Rgb.b}
                        onChange={handleRgbChange(color1Rgb, setColorVariant1)}
                      />
                      <span className=" text-xs">R</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className="items-center p-2 rounded-lg">
                <HexColorPicker style={{ width: '100%', height: 100 }} color={colorVariant2} onChange={setColorVariant2} />
                <div className="mt-3 flex gap-2 justify-between items-center">
                  <div className=" flex flex-col gap-2 justify-center items-center">
                    <input value={colorVariant2} onChange={e => validateAndFormatHex(e, setColorVariant2)} className="bg-white text-black dark:text-white dark:bg-gray-700 border-slate-400 border w-[88px] p-2 rounded-lg" />
                    <span className=" text-xs">HEX</span>
                  </div>
                  <div className="flex gap-1">
                    <div className=" flex flex-col gap-2 justify-center items-center">
                      <input
                        className="bg-white text-black dark:text-white dark:bg-gray-700 border-slate-400 border p-2 rounded-lg w-12 text-center"
                        type="number"
                        name="r"
                        value={color2Rgb.r}
                        onChange={handleRgbChange(color2Rgb, setColorVariant2)}
                      />
                      <span className=" text-xs">R</span>
                    </div>
                    <div className=" flex flex-col gap-2 justify-center items-center">
                      <input
                        className="bg-white text-black dark:text-white dark:bg-gray-700 border-slate-400 border p-2 rounded-lg w-12 text-center"
                        type="number"
                        name="g"
                        value={color2Rgb.g}
                        onChange={handleRgbChange(color2Rgb, setColorVariant2)}
                      />
                      <span className=" text-xs">G</span>
                    </div>
                    <div className=" flex flex-col gap-2 justify-center items-center">
                      <input
                        className="bg-white text-black dark:text-white dark:bg-gray-700 border-slate-400 border p-2 rounded-lg w-12 text-center"
                        type="number"
                        name="b"
                        value={color2Rgb.b}
                        onChange={handleRgbChange(color2Rgb, setColorVariant2)}
                      />
                      <span className=" text-xs">R</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ControlsContainer className=" justify-between">
          <div className=" flex">
            <button className={`${type === 'linear' ? 'bg-blue-700 text-white' : 'dark:bg-gray-700 bg-slate-300'} px-6 py-2  flex gap-2 rounded-l-lg justify-center items-center`} onClick={() => setType('linear')}> <MdOutlineBlurLinear style={{ marginBottom: 3 }} /> Linear</button>
            <button className={`${type === 'radial' ? 'bg-blue-700 text-white' : 'dark:bg-gray-700 bg-slate-300'} px-6 py-2  flex gap-2 rounded-r-lg justify-center items-center`} onClick={() => setType('radial')}> <MdOutlineCircle style={{ marginBottom: 3 }} /> <span>Circle</span></button>
            {type === 'linear' && <div className="flex items-center justify-center gap-2 w-36 ml-6">
              <AnglePicker initialAngle={angle} onAngleChange={setAngle} />
            </div>}

          </div>
          <div className=" flex gap-2">
            {palleteGradient.slice(0, 5).map((item, index) => (
              <button key={index} className="p-4 rounded-full" onClick={() => {
                setColorVariant1(item.color1);
                setColorVariant2(item.color2);
              }} style={{
                backgroundImage: `linear-gradient(80deg, ${item.color1}, ${item.color2})`,
              }}></button>
            ))}
          </div>
        </ControlsContainer>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0">
          <SyntaxHighlighter language="css" style={darcula}>
            {`background-image: ${type}-gradient(${type === 'linear' ? `${angle}deg,` : ''} ${colorVariant1},${animated ? ` ${colorVariant1}` + "," : ""} ${colorVariant2} ${animated ? "," + colorVariant2 : ""});${animated
              ? "\nbackground-size: 400% 400%;\nanimation: gradient 10s ease infinite;\n@keyframes gradient {\n0% { background-position: 0% 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0% 50%; }}"
              : ""
              } `}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 lg:mx-0">
          <CopyButton
            textToCopy={`background-image: ${type}-gradient(${type === 'linear' ? `${angle}deg,` : ''} ${colorVariant1},${animated ? ` ${colorVariant1}` + "," : ""} ${colorVariant2} ${animated ? "," + colorVariant2 : ""});${animated
              ? "\nbackground-size: 400% 400%;\nanimation: gradient 10s ease infinite;\n@keyframes gradient {\n0% { background-position: 0% 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0% 50%; }}"
              : ""
              } `}
          />
        </div>
        <Info
          title="What is CSS Gradient Generator?"
          paragraph="The CSS Background Gradient Generator is a web development tool that assists in creating gradient backgrounds for HTML elements using Cascading Style Sheets (CSS). With this generator, designers and developers can define and customize gradients, specifying colors, angles, and other properties to achieve the desired visual effect. The resulting CSS code can then be easily integrated into web projects, allowing for the creation of stylish and dynamic backgrounds for web pages and user interfaces. This tool simplifies the process of implementing gradient backgrounds in CSS, enhancing the overall design and user experience of websites and web applications."
        />
      </div>
      <div
        id="full-screen"
        className={`fixed inset-0 h-screen w-screen z-50 ${animated ? style.animatedApp : style.app
          } ${fullScreen ? "block" : "hidden"}`}
        style={{
          backgroundImage: `${type}-gradient(${type === 'linear' ? `${angle}deg,` : ''} ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
            } ${colorVariant2} ${animated ? "," + colorVariant2 : ""})`,
        }}
      >
        <button
          className="p-4 rounded-full bg-white m-2 flex gap-2 justify-center items-center"
          onClick={() => setFullScreen(false)}
        >
          <MdArrowBack />
          Back to generator
        </button>
      </div>
    </>
  );
};

export default BackgroundGradient;
