import React, { useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import Footer from "../../components/Sections/Footer/Footer";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";

import cssbeautify from "cssbeautify";
import Textarea from "../../components/Textarea/Textarea";
import Button from "../../components/Button";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import Title from "../../components/Title/Title";

const CSSFormatter = () => {
  const [inputCSS, setInputCSS] = useState("");
  const [formattedCSS, setFormattedCSS] = useState("");
  const formattedCSSRef = useRef<HTMLDivElement>(null);

  const handleCSSInput = (event: any) => {
    setInputCSS(event.target.value);
  };

  const beautifyCSS = () => {
    const beautified = cssbeautify(inputCSS, {
      indent: "  ",
      openbrace: "end-of-line",
      autosemicolon: true,
    });
    setFormattedCSS(beautified);

    setTimeout(() => {
      formattedCSSRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const { isFavorited, handleFavorite } = useFavoriteTool("CSS Formatter");

  return (
    <>
      <SEO title="CSS Formatter" />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className=" flex flex-row justify-between items-center mx-4 lg:mx-0">
          <Breadcrumb
            links={[{ href: "/", label: "Home" }, { label: "CSS Formatter" }]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>
        <Title title="CSS Formatter" info="Format and beautify your CSS code with our CSS Formatter tool" />


        <div className="w-auto md:w-full mt-4 mx-4 lg:mx-0">
          <Textarea
            placeholder="Cole seu CSS aqui..."
            value={inputCSS}
            onChange={handleCSSInput}
          />
        </div>

        <div className="mx-4 lg:mx-0">
          <Button text="Format" onClick={beautifyCSS} />
        </div>

        {formattedCSS && (
          <>
            <div
              ref={formattedCSSRef}
              className="w-auto md:w-full bg-slate-600 mt-4 mx-4 lg:mx-0"
              style={{ maxHeight: "350px", overflow: "auto" }}
              id="formatted-css"
            >
              <SyntaxHighlighter language="css" style={darcula}>
                {formattedCSS}
              </SyntaxHighlighter>
            </div>
            <div className="mx-4 lg:mx-0 mt-2">
              <CopyButton textToCopy={formattedCSS} />
            </div>
          </>
        )}

        <div className="w-auto md:w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg mx-4 lg:mx-0">
          <h1 className="text-3xl">What is CSS Formatter?</h1>
          <br />
          <p>
            A CSS Formatter is a specialized tool or software application that
            enables designers and developers to beautify and organize Cascading
            Style Sheets (CSS) code. CSS is crucial for defining the visual
            presentation of web pages, and maintaining clean and orderly CSS can
            improve readability, facilitate easier maintenance, and enhance
            overall code efficiency. The CSS Formatter automatically adjusts
            spacing, alignment, and syntax to ensure that CSS code is not only
            functional but also aesthetically pleasing and easy to understand.
            This tool is essential for professionals aiming to optimize web
            development workflows and uphold high standards in web design.
          </p>
        </div>
      </div>
    </>
  );
};

export default CSSFormatter;
