import React, { useState, useEffect } from "react";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import { SEO } from "../../components/SEO";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import {
  MdArrowBack,
  MdContentCopy,
  MdFullscreen,
  MdThumbUp,
} from "react-icons/md";
import Tooltip from "../../components/Tooltip/Tooltip";
import CopyToClipboard from "react-copy-to-clipboard";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";
import { useGradient } from "@/hooks/getGradients";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

const PalleteGradient = () => {
  const { isFavorited, handleFavorite } = useFavoriteTool("Gradient Pallete ");
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [selectedGradient, setSelectedGradient] = useState<null | {
    color1: string;
    color2: string;
  }>(null);
  const [textCopied, setTextCopied] = useState<boolean>(false);
  const { gradients, isLoading } = useGradient();

  const [likes, setLikes] = useState<{ [key: string]: number }>({});
  const [likedGradients, setLikedGradients] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (gradients.length > 0) {
      const initialLikes = gradients.reduce((acc, gradient) => {
        acc[gradient._id] = gradient.likes;
        return acc;
      }, {} as { [key: string]: number });

      setLikes(initialLikes);

      const storedLikedGradients = JSON.parse(localStorage.getItem("likedGradients") || "{}");
      setLikedGradients(storedLikedGradients);
    }
  }, [gradients]);

  const handleLike = async (gradientId: string) => {
    try {
      const isLiked = likedGradients[gradientId];
      const url = `http://http://147.93.67.22:4000/gradients/${gradientId}/${isLiked ? "dislike" : "like"}`;
      const method = isLiked ? "DELETE" : "POST";

      const response = await fetch(url, { method });

      if (!response.ok) {
        throw new Error(`Erro ao ${isLiked ? "remover" : "adicionar"} like`);
      }

      const updatedGradient = await response.json();

      setLikes((prevLikes) => ({
        ...prevLikes,
        [gradientId]: updatedGradient.likes,
      }));

      setLikedGradients((prevLiked) => {
        const newLiked = { ...prevLiked, [gradientId]: !isLiked };
        localStorage.setItem("likedGradients", JSON.stringify(newLiked));
        return newLiked;
      });
    } catch (error) {
      console.error("Erro ao curtir/descurtir o gradiente:", error);
    }
  };

  if (isLoading) return <p>Carregando gradientes...</p>;

  return (
    <div>
      <SEO title="Gradient Pallete" />
      <div className="w-full lg:w-4/6 mx-auto font-medium">
        <div className="flex flex-row justify-between items-center mx-4">
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
        <Title title="Gradient Pallete" info="Explore a collection of stunning CSS gradients" />
        <div className="flex mt-4 gap-4 justify-start p-5 md:p-0 lg:justify-between md:justify-center items-center flex-wrap">
          {gradients.map((gradient) => (
            <div key={gradient._id} className="justify-center items-center gap-2 w-full md:mx-4 lg:mx-0 lg:w-[30%]">
              <div
                id="preview"
                className="p-6 h-32 xl:h-32 rounded-lg relative"
                style={{
                  backgroundImage: `linear-gradient(80deg, ${gradient.color1}, ${gradient.color2})`,
                }}
              >
                <div className="absolute top-2 right-2">
                  <div className=" bg-white p-2 w-16 rounded-lg flex justify-center items-center gap-2">
                    <button
                      className={`cursor-pointer ${likedGradients[gradient._id] ? "text-red-400" : "text-gray-600 dark:text-white"}`}
                      onClick={() => handleLike(gradient._id)}
                    >
                      {
                        likedGradients[gradient._id] ? <IoMdHeart size={20} /> : <IoMdHeartEmpty size={20} />
                      }

                    </button>

                    <span className="text-xs font-semibold">{likes[gradient._id] || 0}</span>
                  </div>
                </div>
              </div>
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
                        className="w-6 h-6 rounded-full cursor-pointer"
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
                        className="w-6 h-6 rounded-full cursor-pointer"
                        style={{ backgroundColor: gradient.color2 }}
                      ></button>
                    </CopyToClipboard>
                  </Tooltip>


                </div>
                <span className="text-xs w-64 ml-2 dark:text-white font-semibold">{gradient.name}</span>
                <div className="w-full flex justify-end items-center gap-2">

                  <Tooltip text={textCopied ? "Copied" : "Copy the code"}>
                    <CopyToClipboard text={`background-image: linear-gradient(80deg, ${gradient.color1}, ${gradient.color2})`}>
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
                      className="text-gray-600 dark:text-white"
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
          ))}
          <Info
            title="What is Gradient Pallete?"
            paragraph="Gradient Palette é uma ferramenta que ajuda designers a encontrar e copiar gradientes CSS incríveis."
          />
          {selectedGradient && (
            <div
              id="full-screen"
              className={`fixed inset-0 h-screen w-screen z-50 ${fullScreen ? "block" : "hidden"
                }`}
              style={{
                backgroundImage: `linear-gradient(80deg, ${selectedGradient.color1}, ${selectedGradient.color2})`,
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
      </div>
    </div>
  );
};

export default PalleteGradient;
