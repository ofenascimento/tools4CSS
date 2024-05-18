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
      });
    } else {
      saveFavorite(tool);
      showSnackbar({
        type: "success",
        title: `${props.title} added to favorites list`,
      });
    }
    setIsFavorited(!isFavorited);
  };

  return (
    <>
      <Link href={`/${props.slug}`}>
        <div className="w-full lg:w-2/4">
          <div
            className={` ${styles.card} border border-slate-300 hover:border rounded-md shadow-sm bg-white flex items-center justify-center m-2 lg:mr-2 lg:mb-2 lg:m-auto relative cursor-pointer`}
          >
            <Image
              className={`${styles.imageContainer} rounded-l-sm`}
              src={`/cover/${props.img}`}
              width={200}
              height={200}
              alt=""
            />
            <div className=" w-full h-full flex flex-col items-start justify-center">
              <h2
                className={`${styles.title} text-lg pr-4 font-EuclidSemiBold ml-2`}
              >
                {props.title}
              </h2>

              <p
                className={`${styles.info} mt-1 ml-1 text-slate-800 leading-4 text-sm font-EuclidRegular mb-2 cursor-pointer p-1`}
              >
                {props.info}
              </p>

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
      </Link>
      <SnackBarContainer>{snackbarList}</SnackBarContainer>
    </>
  );
};

export default Card;
