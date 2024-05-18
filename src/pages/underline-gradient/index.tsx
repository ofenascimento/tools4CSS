import React from "react";
import Navbar from "../../components/Navbar";
import ColorInput from "../../components/ColorInput/ColorInput";
import { useControls } from "../../hooks/useControls";
import DirectionButton from "../../components/DirectionButton/DirectionButton";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import Footer from "../../components/Sections/Footer/Footer";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";

const UnderlineGradient = () => {
  const {
    colorVariant1,
    setColorVariant1,
    colorVariant2,
    setColorVariant2,
    direction,
    setAnimated,
  } = useControls();

  const { isFavorited, handleFavorite } = useFavoriteTool("Underline Gradient");

  return (
    <>
      <SEO title="Underline Gradient Generator" />
      <Navbar />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className=" flex flex-row justify-between items-center">
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
        <div className="mt-4 text-center">
          <span
            className="text-6xl xl:text-9xl lg:text-8xl font-GilroyBold dark:text-white"
            style={{
              backgroundImage: `linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 0.3em",
              backgroundPosition: "0 80%",
            }}
          >
            Underline Gradient
          </span>
        </div>
        <div className="border border-slate-300 rounded-md shadow-sm bg-white p-4 text-gray-700 flex gap-10 mt-4 flex-wrap justify-center items-center font-EuclidRegular mx-4 lg:mx-0">
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
          <DirectionButton />
        </div>

        <div className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0">
          <SyntaxHighlighter language="css" style={darcula}>
            {`background-image: linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%); \nbackground-repeat: no-repeat; \nbackground-size: 100% 0.3em; \nbackground-position: 0 80%;`}
          </SyntaxHighlighter>
        </div>

        <div className="mx-4 lg:mx-0">
          <CopyButton
            textToCopy={`background-image: linear-gradient(${direction}, ${colorVariant1},${colorVariant2} 100%); \n background-repeat: no-repeat; \n background-size: 100% 0.3em; \n background-position: 0 80%;`}
          />
        </div>

        <div className="w-auto md:w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg mx-4 lg:mx-0">
          <h1 className="text-3xl">What is Underline Gradient Generator?</h1>
          <br />
          <p>
            An underline gradient generator is a web development tool or
            resource designed to streamline the creation of gradient effects for
            the underline of text, typically used in links or other text
            elements. These tools allow developers to easily customize the
            appearance of the underline, setting desired gradient colors and
            directions without the need to write CSS code manually. With an
            underline gradient generator, developers can save time and effort,
            creating visually engaging and dynamic underlines for their web
            content.
          </p>
          <br />
          <p>
            Creating an underline gradient for text elements can be a visually
            appealing and dynamic way to enhance the user experience on a
            website. By applying gradient effects to underlines, web developers
            can add depth and style to hyperlinks or other text-based elements.
            This technique allows for creative customization, enabling designers
            to match the underline gradient to a website&apos;s overall
            aesthetic or to convey specific visual cues. CSS properties like
            linear-gradient or background-image can be employed to achieve this
            effect, giving developers fine-grained control over the
            gradient&apos;s colors, direction, and transition. With the help of
            CSS, underline gradients become a powerful tool in the arsenal of
            web designers, allowing them to make user interactions more engaging
            and visually appealing.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnderlineGradient;
