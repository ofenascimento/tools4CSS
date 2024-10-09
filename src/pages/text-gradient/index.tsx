import React from "react";
import { useControls } from "../../hooks/useControls";
import style from "./styles.module.scss";
import Switch from "react-switch";
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
import AnglePicker from "@/components/AnglePicker/AnglePicker";

const TextGradient = () => {
  const {
    colorVariant1,
    setColorVariant1,
    colorVariant2,
    setColorVariant2,
    setDirection,
    animated,
    setAnimated,
    angle,
    setAngle,
  } = useControls();

  const { isFavorited, handleFavorite } = useFavoriteTool("Text Gradient");

  return (
    <>
      <SEO title="Text Gradient Generator" />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className=" flex flex-row justify-between items-center mx-4 lg:mx-0">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { label: "Text Gradient Generator" },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>
        <Title
          title="Text Gradient CSS"
          info="Create stunning gradient text effects effortlessly with our CSS Text Gradient Generator. Ideal for enhancing headlines, logos, and important text in your web projects."
          customInfoClassname="lg:w-3/4"
        />
        <div className="mt-4 border border-slate-300 bg-white dark:border-slate-600 dark:bg-mainDark p-2 rounded-lg mx-4 lg:mx-0">
          <h5
            className={`${animated ? style.h5animated : style.h5textGradient
              } lg:text-4xl text-center font-lexend leading-3`}
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              backgroundClip: "text",
              fontSize: 20,
              fontWeight: 700,
              background: `linear-gradient(${animated ? 80 : angle
                }deg, ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
                } ${colorVariant2} ${animated ? "," + colorVariant2 : ""})`,
            }}
          >
            TOOLS4CSS
          </h5>
          <h1
            className={`${animated ? style.animated : style.textGradient
              } lg:text-8xl text-center font-lexend`}
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              backgroundClip: "text",
              background: `linear-gradient(${animated ? 80 : angle
                }deg, ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
                } ${colorVariant2} ${animated ? "," + colorVariant2 : ""})`,
            }}
          >
            Text Gradient
          </h1>
          <h3
            className={`${animated ? style.h3animated : style.h3textGradient
              } lg:text-4xl text-center font-lexend leading-3`}
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              backgroundClip: "text",
              background: `linear-gradient(${animated ? 80 : angle
                }deg, ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
                } ${colorVariant2} ${animated ? "," + colorVariant2 : ""})`,
            }}
          >
            Connecting You to a World of Possibilities and Innovations
          </h3>
          <h5
            className={`${animated ? style.h5animated : style.h5textGradient
              } lg:text-4xl text-center font-lexend leading-3`}
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              backgroundClip: "text",
              background: `linear-gradient(${animated ? 80 : angle
                }deg, ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
                } ${colorVariant2} ${animated ? "," + colorVariant2 : ""})`,
            }}
          >
            Experience the Power of Color
          </h5>

        </div>
        <ControlsContainer>
          <ColorPicker
            value={colorVariant1}
            onChange={(color) => setColorVariant1(color)}
          />
          <ColorPicker
            value={colorVariant2}
            onChange={(color) => setColorVariant2(color)}
          />
          <div className="flex items-center justify-center gap-2">
            <span>Direction:</span>
            <AnglePicker initialAngle={angle} onAngleChange={setAngle} />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span>Animation:</span>
            <Switch
              checked={animated}
              onChange={(
                nextChecked: boolean | ((prevState: boolean) => boolean)
              ) => {
                setAnimated(nextChecked);
                setDirection("-80deg");
              }}
              onColor="#CBD5FF"
              onHandleColor="#0f54b4"
              className="border border-slate-300 shadow-sm"
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
        </ControlsContainer>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0">
          <SyntaxHighlighter language="css" style={darcula}>
            {`background: linear-gradient(${animated ? 80 : angle
              }deg, ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
              } ${colorVariant2}${animated ? ", " + colorVariant2 : ""
              }); \nbackground: -webkit-linear-gradient(${angle}deg, ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
              } ${colorVariant2}${animated ? ", " + colorVariant2 : ""
              });\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;\n${animated
                ? "background-size: 300% !important;\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\nanimation: animated_text 10s ease-in-out infinite;\n-moz-animation: animated_text 10s ease-in-out infinite;\n-webkit-animation: animated_text 10s ease-in-out infinite;\n@keyframes animated_text {\n0% { background-position: 0px 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0px 50%; }} "
                : ""
              }`}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 lg:mx-0">
          <CopyButton
            textToCopy={`background: linear-gradient(${animated ? 80 : angle
              }deg, ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
              } ${colorVariant2}${animated ? ", " + colorVariant2 : ""
              });\nbackground: -webkit-linear-gradient(${angle}deg, ${colorVariant1}, ${animated ? colorVariant1 + "," : ""
              } ${colorVariant2}${animated ? ", " + colorVariant2 : ""
              });\n-webkit-background-clip: text;\nbackground-clip: text;\ncolor: transparent;\n${animated
                ? "background-size: 300% !important;\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\nanimation: animated_text 10s ease-in-out infinite;\n-moz-animation: animated_text 10s ease-in-out infinite;\n-webkit-animation: animated_text 10s ease-in-out infinite;\n@keyframes animated_text {\n0% { background-position: 0px 50%; }\n50% { background-position: 100% 50%; }\n100% { background-position: 0px 50%; }} "
                : ""
              }`}
          />
        </div>
        <Info
          title="What is Text Gradient Generator?"
          paragraph="A text gradient is a graphic design technique that involves applying
            a smooth color transition to specific text or words. Instead of
            solid text in a single color, text gradient creates an visually
            appealing effect by having the text blend gradually from one color
            to another, giving a sense of depth and dynamism. This is often
            achieved using a spectrum of colors or a custom color blend, and it
            can be a powerful way to make text elements in design projects stand
            out and captivate the viewer's attention. Text gradients are
            commonly used in various design applications, including web design,
            advertising, and branding, to create eye-catching and engaging
            typography."
        />
      </div>
    </>
  );
};

export default TextGradient;
