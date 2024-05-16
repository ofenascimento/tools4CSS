import Link from "next/link";
import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { ICard } from "./types";
import Image from "next/image";
import { useFavorites } from "../../context/FavoriteContext";

const Card = (props: ICard) => {
  const { favoriteTools, saveFavorite, deleteFavorite } = useFavorites();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    setIsFavorited(favoriteTools.some((tool) => tool.name === props.title));
  }, [favoriteTools, props.title]);

  const handleFavorite = () => {
    const tool = { name: props.title, url: `/${props.slug}` };
    if (isFavorited) {
      deleteFavorite(props.title);
    } else {
      saveFavorite(tool);
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="w-full lg:w-2/4">
      <div className="border border-slate-300 rounded-md shadow-sm bg-white flex items-center justify-center m-2 lg:mr-2 lg:mb-2 lg:m-auto relative">
        <Image
          className=""
          src={`/cover/${props.img}`}
          width={200}
          height={200}
          alt=""
        />
        <div className="ml-4 w-full h-full flex flex-col items-start justify-center">
          <h2 className="text-lg pr-4 font-EuclidSemiBold">{props.title}</h2>
          <Link href={`/${props.slug}`}>
            <div className="text-blue-500 text-lg font-medium hover:underline mb-4 cursor-pointer">
              More
            </div>
          </Link>
          <button
            onClick={handleFavorite}
            className="mt-2 text-lg font-medium text-white rounded-full px-3 absolute top-0 right-0 p-1"
          >
            {isFavorited ? (
              <MdFavorite size={18} color="#FF407D" />
            ) : (
              <MdFavoriteBorder size={18} color="#000" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
