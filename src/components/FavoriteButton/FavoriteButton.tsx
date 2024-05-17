import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IFavoriteButton } from "./types";

const FavoriteButton = ({ handleFavorite, isFavorited }: IFavoriteButton) => {
  return (
    <button
      onClick={handleFavorite}
      className="text-lg font-medium text-white rounded-full px-4 md:px-1"
    >
      {isFavorited ? (
        <div className="flex flex-row justify-center items-center gap-2">
          <MdFavorite size={18} color="#FF407D" />{" "}
          <span className="hidden md:block text-black font-EuclidMedium text-base">
            Favorited
          </span>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center gap-2 ">
          <MdFavoriteBorder size={18} color="#000" />{" "}
          <span className="hidden md:block text-black font-EuclidMedium text-base">
            Add to favorites
          </span>
        </div>
      )}
    </button>
  );
};

export default FavoriteButton;
