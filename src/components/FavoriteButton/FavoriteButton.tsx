import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IFavoriteButton } from "./types";

const FavoriteButton = ({ handleFavorite, isFavorited }: IFavoriteButton) => {
  return (
    <button
      onClick={handleFavorite}
      className="text-lg font-medium text-white rounded-full  md:px-1 dark:bg-dark-100"
    >
      {isFavorited ? (
        <div className="flex flex-row justify-center items-center gap-2 px-4 py-2">
          <MdFavorite size={18} color="#FF407D" />{" "}
          <span className="hidden md:block text-black font-EuclidMedium text-base dark:text-white">
            Favorited
          </span>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center gap-2 px-4 py-2">
          <MdFavoriteBorder size={18} className=" text-black dark:text-white" />{" "}
          <span className="hidden md:block text-black font-EuclidMedium text-base dark:text-white">
            Add to favorites
          </span>
        </div>
      )}
    </button>
  );
};

export default FavoriteButton;
