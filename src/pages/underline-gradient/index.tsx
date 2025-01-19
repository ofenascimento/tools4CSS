import React, { useState } from "react";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import CustomSlider from "../../components/CustomSlider/CustomSlider";
import ControlsContainer from "../../components/ControlsContainer/ControlsContainer";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";
import ColorPicker from "../../components/ColorPicker/ColorPicker";

const UnderlineGradient = () => {
  const [colorVariant1, setColorVariant1] = useState<string>("#1D4ED8");
  const [colorVariant2, setColorVariant2] = useState<string>("#24ff8e");
  const [weight, setWeight] = useState<number>(3);

  const { isFavorited, handleFavorite } = useFavoriteTool("Underline Gradient");

  return (
    <>
      <SEO title="Underline Gradient Generator" />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className=" flex flex-row justify-between items-center mx-4 lg:mx-0">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { label: "Underline Gradient Generator" },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>
        <Title
          title="Underline Gradient"
          info="Easily create stylish text with gradient underlines using our CSS Gradient Underline Generator."
        />
        <div className="mt-4 text-center bg-white dark:bg-mainDark border border-slate-300 dark:border-slate-600 p-2 rounded-lg mx-4 lg:mx-0">
          <span
            className="text-6xl font-GilroyBold dark:text-white"
            style={{
              backgroundImage: `linear-gradient(80deg, ${colorVariant1},${colorVariant2} 100%)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `100% 0.${weight}em`,
              backgroundPosition: "0 80%",
            }}
          >
            Underline Gradient
          </span>
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

            <CustomSlider
              style={{ width: 140, marginLeft: 20, marginRight: 20 }}
              value={weight}
              onChange={(_e: any, value: number) => setWeight(value as number)}
              step={1}
              min={1}
              max={9}
            />
          </div>
        </ControlsContainer>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0 rounded-lg">
          <SyntaxHighlighter language="css"  style={{ ...darcula, borderRadius: '0.5rem' }}>
            {`background-image: linear-gradient(80deg, ${colorVariant1},${colorVariant2} 100%); \nbackground-repeat: no-repeat; \nbackground-size: 100% 0.${weight}em; \nbackground-position: 0 80%;`}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 mt-2 lg:mx-0">
          <CopyButton
            textToCopy={`background-image: linear-gradient(80deg, ${colorVariant1},${colorVariant2} 100%); \n background-repeat: no-repeat; \n background-size: 100% 0.${weight}em; \n background-position: 0 80%;`}
          />
        </div>

        <Info
          title="What is Underline Gradient Generator?"
          paragraph={
            <>
              <p>
                An underline gradient generator is a web development tool or
                resource designed to streamline the creation of gradient effects
                for the underline of text, typically used in links or other text
                elements. These tools allow developers to easily customize the
                appearance of the underline, setting desired gradient colors and
                directions without the need to write CSS code manually. With an
                underline gradient generator, developers can save time and
                effort, creating visually engaging and dynamic underlines for
                their web content.
              </p>
              <br />
              <p>
                Creating an underline gradient for text elements can be a
                visually appealing and dynamic way to enhance the user
                experience on a website. By applying gradient effects to
                underlines, web developers can add depth and style to hyperlinks
                or other text-based elements. This technique allows for creative
                customization, enabling designers to match the underline
                gradient to a website&apos;s overall aesthetic or to convey
                specific visual cues. CSS properties like linear-gradient or
                background-image can be employed to achieve this effect, giving
                developers fine-grained control over the gradient&apos;s colors,
                direction, and transition. With the help of CSS, underline
                gradients become a powerful tool in the arsenal of web
                designers, allowing them to make user interactions more engaging
                and visually appealing.
              </p>
            </>
          }
        />
      </div>
    </>
  );
};

export default UnderlineGradient;
