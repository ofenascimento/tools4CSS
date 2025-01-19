import React, { useState } from "react";
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
import ColorPicker from "../../components/ColorPicker/ColorPicker";

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
  /* Estilos para navegadores WebKit (Chrome, Safari) */
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
    border: ${scrollbarStyle.borderWidth}px solid ${scrollbarStyle.borderColor};
  }

  /* Estilos para Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${scrollbarStyle.thumbColor} ${scrollbarStyle.trackColor};
  }
        `}
      </style>
      <SEO title="Scrollbar Generator" />
      <div className="w-full lg:w-4/6 mx-auto">
        <div className=" flex flex-row justify-between items-center mx-4 lg:mx-0">
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
        <Title
          title="Scrollbar CSS Generator"
          info="Customize and generate stylish scrollbars with our Scrollbar CSS Generator"
        />

        {/* Scrollbar Preview */}
        <div className="w-full mt-4 px-4 md:px-0  rounded-lg">
          <div
            className="custom-scrollbar overflow-y-scroll rounded-lg"
            style={{
              height: "180px",
              maxHeight: "180px",
              overflow: "auto",
              background: scrollbarStyle.trackColor,
              paddingInline: 20,
              paddingBlock: 10,
            }}
          >
            <p className="text-white">
              This is a preview of your custom scrollbar. Try scrolling inside
              this box to see how the scrollbar looks with the current settings.
              You can customize the thumb color, track color, width, border
              radius, and more. Adjust the settings below to see the scrollbar
              change in real-time.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <ControlsContainer>
          <div className="flex items-center justify-center gap-2">
            <span>Thumb Color:</span>
            <ColorPicker
              value={scrollbarStyle.thumbColor}
              onChange={(color) =>
                setScrollbarStyle({
                  ...scrollbarStyle,
                  thumbColor: color,
                })
              }
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Track Color:</span>
            <ColorPicker
              value={scrollbarStyle.trackColor}
              onChange={(color) =>
                setScrollbarStyle({
                  ...scrollbarStyle,
                  trackColor: color,
                })
              }
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Width:</span>
            <CustomSlider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={scrollbarStyle.width}
              onChange={(_e: any, value: number) =>
                setScrollbarStyle({ ...scrollbarStyle, width: value as number })
              }
              step={1}
              min={0}
              max={20}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Border Radius:</span>
            <CustomSlider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={scrollbarStyle.borderRadius}
              onChange={(_e: any, value: number) =>
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
            <CustomSlider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={scrollbarStyle.borderWidth}
              onChange={(_e: any, value: number) =>
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
            <ColorPicker
              value={scrollbarStyle.borderColor}
              onChange={(color) =>
                setScrollbarStyle({
                  ...scrollbarStyle,
                  borderColor: color,
                })
              }
            />
          </div>
        </ControlsContainer>

        <div
          className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0 custom-scrollbar rounded-lg"
          style={{ maxHeight: "200px", overflow: "auto" }}
        >
          <SyntaxHighlighter language="css" style={{ ...darcula, borderRadius: '0.5rem' }}>
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

/* Estilos para Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${scrollbarStyle.thumbColor} ${scrollbarStyle.trackColor};
  }
                `}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 mt-2 lg:mx-0">
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

/* Estilos para Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: ${scrollbarStyle.thumbColor} ${scrollbarStyle.trackColor};
  }
                `}
          />
        </div>

        <Info
          title="What is Scrollbar Generator?"
          paragraph="The CSS Scrollbar Generator is a powerful web development tool
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
            aesthetic appeal of web interfaces."
        />
      </div>
    </>
  );
};

export default ScrollbarGenerator;
