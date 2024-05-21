import React, { useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import Navbar from "../../components/Navbar";
import { SEO } from "../../components/SEO";
import Footer from "../../components/Sections/Footer/Footer";
import CopyButton from "../../components/CopyButton/CopyButton";
import { palleteGradient } from "../../utils/gradients";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import {
  MdArrowBack,
  MdBrush,
  MdCode,
  MdContentCopy,
  MdCopyAll,
  MdEdit,
  MdFullscreen,
  MdPalette,
  MdShare,
} from "react-icons/md";
import Tooltip from "../../components/Tooltip/Tooltip";
import CopyToClipboard from "react-copy-to-clipboard";

const PalleteGradient = () => {
  const { isFavorited, handleFavorite } = useFavoriteTool("Gradient Pallete ");
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [selectedGradient, setSelectedGradient] = useState<null | {
    color1: string;
    color2: string;
  }>(null);
  const [textCopied, setTextCopied] = useState<boolean>(false);

  return (
    <div className="bg-white dark:bg-transparent">
      <SEO title="Gradient Pallete" />
      <Navbar />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className=" flex flex-row justify-between items-center mx-4 md:mx-0">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { label: "Gradient Pallete" },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>
        <div className="flex mt-4 gap-4 justify-start p-5 md:p-0 lg:justify-between md:justify-center items-center flex-wrap">
          {palleteGradient.map((gradient) => (
            <>
              <div
                key={gradient.id}
                className="justify-center items-center gap-2 w-full md:mx-4 lg:mx-0 lg:w-[30%]"
              >
                <div
                  id="preview"
                  className="p-6 h-32 xl:h-32 rounded-lg relative"
                  style={{
                    backgroundImage: `linear-gradient(80deg, ${gradient.color1}, ${gradient.color2})`,
                  }}
                ></div>
                <div className="mt-2 flex justify-between items-center bg-white dark:bg-mainDark rounded-2xl p-2 border border-slate-300 dark:border-slate-600">
                  <div className="flex gap-1">
                    <Tooltip text={textCopied ? "Copied" : gradient.color1}>
                      <CopyToClipboard text={gradient.color1}>
                        <button
                          onClick={() => {
                            setTextCopied(true);
                            setTimeout(() => {
                              setTextCopied(false);
                            }, 600);
                          }}
                          className=" w-6 h-6 rounded-full cursor-pointer"
                          style={{ backgroundColor: gradient.color1 }}
                        ></button>
                      </CopyToClipboard>
                    </Tooltip>
                    <Tooltip text={textCopied ? "Copied" : gradient.color2}>
                      <CopyToClipboard text={gradient.color2}>
                        <button
                          onClick={() => {
                            setTextCopied(true);
                            setTimeout(() => {
                              setTextCopied(false);
                            }, 600);
                          }}
                          className=" w-6 h-6 rounded-full cursor-pointer"
                          style={{ backgroundColor: gradient.color2 }}
                        ></button>
                      </CopyToClipboard>
                    </Tooltip>
                  </div>
                  <div className="w-full flex justify-end items-center gap-2 ">
                    <Tooltip text={textCopied ? "Copied" : "Copy the code"}>
                      <CopyToClipboard
                        text={`backgroundImage: linear-gradient(80deg, ${gradient.color1}, ${gradient.color2})`}
                      >
                        <button
                          onClick={() => {
                            setTextCopied(true);
                            setTimeout(() => {
                              setTextCopied(false);
                            }, 600);
                          }}
                          className="cursor-pointer text-gray-600 dark:text-white"
                        >
                          <MdContentCopy size={18} />
                        </button>
                      </CopyToClipboard>
                    </Tooltip>
                    <Tooltip text="View in full screen">
                      <button
                        className=" text-gray-600 dark:text-white"
                        onClick={() => {
                          setSelectedGradient({
                            color1: gradient.color1,
                            color2: gradient.color2,
                          });
                          setFullScreen(true);
                        }}
                      >
                        <MdFullscreen size={22} />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="w-full mt-4 p-4 bg-slate-200 famil font-manrope text-lg">
            <h1 className="text-3xl">What is Gradient Pallete ?</h1>
            <br />
            <p>
              Gradient Palette is a versatile and user-friendly CSS gradient
              generator designed for web developers and designers who seek to
              add a vibrant touch to their projects. This tool provides an
              extensive collection of beautiful and modern background gradients,
              perfect for enhancing the visual appeal of websites and
              applications. Users can easily browse through a wide array of
              gradient styles, from subtle pastel blends to bold and dynamic
              color transitions. Each gradient in the palette comes with
              ready-to-use CSS code, simplifying the process of integrating
              these stunning backgrounds into your web designs. Gradient Palette
              also offers customization options, allowing users to tweak the
              colors and direction of the gradients to match their specific
              design needs. Whether you&apos;re building a professional website,
              a personal blog, or a creative portfolio, Gradient Palette is an
              invaluable resource for making your projects stand out with
              minimal effort.
            </p>{" "}
            <br />
          </div>
        </div>
      </div>
      <Footer />
      {selectedGradient && (
        <div
          id="full-screen"
          className={`fixed inset-0 h-screen w-screen ${
            fullScreen ? "block" : "hidden"
          }`}
          style={{
            backgroundImage: `linear-gradient(80deg, ${selectedGradient.color1}, ${selectedGradient.color2})`,
            zIndex: 9999,
          }}
        >
          <button
            className="p-4 rounded-full bg-white m-2 flex gap-2 justify-center items-center"
            onClick={() => setFullScreen(false)}
          >
            <MdArrowBack />
            Back to gradients
          </button>
        </div>
      )}
    </div>
  );
};

export default PalleteGradient;
