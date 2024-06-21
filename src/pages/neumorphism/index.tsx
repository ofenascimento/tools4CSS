import React from "react";
import { useControls } from "../../hooks/useControls";
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

const Neumorphism = () => {
  const { blur, setBlur, borderRadius, distance, setDistance } = useControls();

  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Neumorphism Generator"
  );

  return (
    <>
      <SEO title="Neumorphism" />
      <div className="w-full lg:w-4/6 mx-auto font-medium bg-transparent">
        <div className=" flex flex-row justify-between items-center mx-4 lg:mx-0">
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
        <div className="mt-4 flex justify-center bg-white py-6 rounded-lg">
          <div
            style={{
              width: "240px",
              height: "240px",
              borderRadius: `${borderRadius}px`,
              boxShadow: `${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff`,
            }}
          ></div>
        </div>
        <ControlsContainer>
          <div className="flex items-center justify-center gap-2">
            <span>Direction:</span>
            <CustomSlider
              style={{ width: 200, marginLeft: 20, marginRight: 20 }}
              value={distance}
              onChange={(_e: any, value: number) =>
                setDistance(value as number)
              }
              defaultValue={30}
              max={60}
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>Blur:</span>
            <CustomSlider
              style={{ width: 200, marginLeft: 20, marginRight: 20 }}
              value={blur}
              onChange={(_e: any, value: number) => setBlur(value as number)}
              defaultValue={30}
            />
          </div>
        </ControlsContainer>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0">
          <SyntaxHighlighter language="css" style={darcula}>
            {`box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\n-webkit-box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;`}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 lg:mx-0">
          <CopyButton
            textToCopy={`box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;\n-webkit-box-shadow: ${distance}px ${distance}px ${blur}px #b2b8c9, -${distance}px -${distance}px ${blur}px #f0f8ff;`}
          />
        </div>
        <Info
          title="What is Neumorphism?"
          paragraph={
            <>
              {" "}
              <p>
                Neumorphism is a design trend that has gained popularity in user
                interface (UI) design. It represents a blend of background
                colors, soft shadow, and smooth shapes to emulate physicality
                through digital elements. Unlike traditional skeuomorphism,
                which aims to mimic real-world textures and objects closely,
                neumorphism focuses on subtle, soft, and almost tactile surfaces
                that appear to extrude from or recede into the background.{" "}
              </p>
              <br />
              <p>
                The Neumorphism Generator is a web development tool designed to
                assist in crafting user interface (UI) elements featuring the
                neumorphic design style, using Cascading Style Sheets (CSS)
              </p>
            </>
          }
        />
      </div>
    </>
  );
};

export default Neumorphism;
