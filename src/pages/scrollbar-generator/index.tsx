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
