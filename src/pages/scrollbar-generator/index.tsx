import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ColorInput from "../../components/ColorInput/ColorInput";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import Footer from "../../components/Sections/Footer/Footer";
import { Slider } from "@material-ui/core";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";

const ScrollbarGenerator = () => {
  const [scrollbarStyle, setScrollbarStyle] = useState({
    thumbColor: "#1C4ED8",
    trackColor: "#2B2B2B",
    width: 14,
    borderRadius: 0,
    borderWidth: 0,
    borderColor: "#555777",
  });

  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Scrollbar Generator"
  );

  return (
    <>
      <style>
        {`
  *::-webkit-scrollbar {
    width: ${scrollbarStyle.width}px;
  }
  
  *::-webkit-scrollbar-track {
    background: ${scrollbarStyle.trackColor};
    border-radius: ${scrollbarStyle.borderRadius}px;
  }
  
  *::-webkit-scrollbar-thumb {
    background: ${scrollbarStyle.thumbColor};
    border-radius: ${scrollbarStyle.borderRadius}px;
    border:${scrollbarStyle.borderWidth}px solid ${scrollbarStyle.borderColor};
  }
                `}
      </style>
      <SEO title="Scrollbar Generator" />
      <Navbar />
      <div className="w-full lg:w-4/6 mx-auto">
        <div className=" flex flex-row justify-between items-center">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { label: "Scrollbar Generator" },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>

        <div className="border border-slate-300 rounded-md shadow-sm bg-white p-4 text-gray-700 mt-4 flex flex-wrap justify-center items-center gap-6 font-EuclidRegular mx-4 lg:mx-0">
          <div className="flex items-center justify-center gap-2">
            <span>Thumb Color:</span>
            <ColorInput
              preview={scrollbarStyle.thumbColor}
              value={scrollbarStyle.thumbColor}
              onChange={(e) =>
                setScrollbarStyle({
                  ...scrollbarStyle,
                  thumbColor: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Track Color:</span>
            <ColorInput
              preview={scrollbarStyle.trackColor}
              value={scrollbarStyle.trackColor}
              onChange={(e) =>
                setScrollbarStyle({
                  ...scrollbarStyle,
                  trackColor: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Width:</span>
            <Slider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={scrollbarStyle.width}
              onChange={(e, value) =>
                setScrollbarStyle({ ...scrollbarStyle, width: value as number })
              }
              step={1}
              min={0}
              max={20}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Border Radius:</span>
            <Slider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={scrollbarStyle.borderRadius}
              onChange={(e, value) =>
                setScrollbarStyle({
                  ...scrollbarStyle,
                  borderRadius: value as number,
                })
              }
              step={1}
              min={0}
              max={30}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Border Width:</span>
            <Slider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={scrollbarStyle.borderWidth}
              onChange={(e, value) =>
                setScrollbarStyle({
                  ...scrollbarStyle,
                  borderWidth: value as number,
                })
              }
              step={1}
              min={0}
              max={20}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Border Color:</span>
            <ColorInput
              preview={scrollbarStyle.borderColor}
              value={scrollbarStyle.borderColor}
              onChange={(e) =>
                setScrollbarStyle({
                  ...scrollbarStyle,
                  borderColor: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div
          className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0 custom-scrollbar"
          style={{ maxHeight: "200px", overflow: "auto" }}
        >
          <SyntaxHighlighter language="css" style={darcula}>
            {`.scrollbar::-webkit-scrollbar {
    width: ${scrollbarStyle.width}px;
  }

.scrollbar::-webkit-scrollbar-track {
    background: ${scrollbarStyle.trackColor};
    border-radius: ${scrollbarStyle.borderRadius}px;
  }
  
.scrollbar::-webkit-scrollbar-thumb {
    background: ${scrollbarStyle.thumbColor};
    border-radius: ${scrollbarStyle.borderRadius}px;
    border:${scrollbarStyle.borderWidth}px solid ${scrollbarStyle.borderColor};
  }
                `}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 lg:mx-0">
          <CopyButton
            textToCopy={`.scroll-bar::-webkit-scrollbar {
    width: ${scrollbarStyle.width}px;
  }

.scroll-bar::-webkit-scrollbar-track {
    background: ${scrollbarStyle.trackColor};
    border-radius: ${scrollbarStyle.borderRadius}px;
  }
  
.scroll-bar::-webkit-scrollbar-thumb {
    background: ${scrollbarStyle.thumbColor};
    border-radius: ${scrollbarStyle.borderRadius}px;
    border:${scrollbarStyle.borderWidth}px solid ${scrollbarStyle.borderColor};
  }
                `}
          />
        </div>

        <div className="w-auto md:w-full mt-4 p-4 bg-slate-200 font-manrope text-lg mx-4 lg:mx-0">
          <h1 className="text-3xl">What is Scrollbar Generator?</h1>
          <br />
          <p>
            The CSS Scrollbar Generator is a powerful web development tool
            designed to help designers and developers create customized
            scrollbars for web pages. Utilizing Cascading Style Sheets (CSS),
            this tool enables users to easily specify various attributes of
            scrollbars, such as color, width, border radius, and border style.
            By providing a user-friendly interface, the Scrollbar Generator
            allows for the precise adjustment of scrollbar aesthetics to match
            the overall design of a website or application. The customized CSS
            code generated by this tool can be directly integrated into web
            projects, enhancing the visual consistency and user experience. With
            the Scrollbar Generator, implementing stylish and cohesive
            scrollbars is straightforward, elevating the functional and
            aesthetic appeal of web interfaces.
          </p>{" "}
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ScrollbarGenerator;
