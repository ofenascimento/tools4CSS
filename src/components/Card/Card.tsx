import Link from "next/link";
import { useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { ICard } from "./types";
import Image from "next/image";
import { useFavorites } from "../../context/FavoriteContext";
import styles from "./styles.module.scss";
import { useSnackbar } from "../Snackbar/SnackBar";
import { SnackBarContainer } from "../Snackbar/SnackbarContainer";

const Card = (props: ICard) => {
  const { favoriteTools, saveFavorite, deleteFavorite } = useFavorites();
  const [isFavorited, setIsFavorited] = useState(false);
  const { showSnackbar, snackbarList } = useSnackbar();

  useEffect(() => {
    setIsFavorited(favoriteTools.some((tool) => tool.name === props.title));
  }, [favoriteTools, props.title]);

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const tool = { name: props.title, url: `/${props.slug}` };
    if (isFavorited) {
      deleteFavorite(props.title);
      showSnackbar({
        type: "error",
        title: `${props.title} removed to favorites list`,
        subtitle: 'It has been removed, but you can add it back anytime'
      });
    } else {
      saveFavorite(tool);
      showSnackbar({
        type: "success",
        title: `${props.title} added to favorites list`,
        subtitle: 'You can now find it in your favorites'
      });
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      <Link href={`/${props.slug}`}>
        <div className="w-full">

          <div
            className={` ${styles.card} border border-slate-300 dark:border-slate-600 dark:hover:border-slate-500 rounded-md shadow-sm bg-gray-50 dark:bg-mainDark mx-2 md:mx-0 lg:m-auto relative cursor-pointer h-48 p-4`}
          >
            <Image src={props.img ?? ''} width={50} height={50} />

            <div className=" w-full flex flex-col items-start justify-center">

              <h2
                className={` text-base pr-4 font-GilroyMedium leading-6 font-bold ml-2 dark:text-white`}
              >
                {props.title}
              </h2>

              <p
                className={`mt-1 ml-1 text-slate-800 leading-4 text-sm font-normal font-GilroyMedium mb-2 cursor-pointer p-1 dark:text-white`}
              >
                {props.info}
              </p>

              <button
                onClick={handleFavorite}
                className="mt-2 text-lg font-medium text-white  rounded-full px-3 absolute top-0 right-0 p-1"
              >
                {isFavorited ? (
                  <MdFavorite size={18} color="#FF407D" />
                ) : (
                  <MdFavoriteBorder size={18} className="  text-black dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </Link>
      <SnackBarContainer>{snackbarList}</SnackBarContainer>
    </>
  );
};

export default Card;
