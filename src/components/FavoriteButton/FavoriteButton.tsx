import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IFavoriteButton } from "./types";
import { useSnackbar } from "../Snackbar/SnackBar";
import { SnackBarContainer } from "../Snackbar/SnackbarContainer";

const FavoriteButton = ({ handleFavorite, isFavorited }: IFavoriteButton) => {
  const { showSnackbar, snackbarList } = useSnackbar();
  return (
    <>
      <button
        onClick={() => {
          handleFavorite();
          if (isFavorited) {
            showSnackbar({
              type: "error",
              title: `Removed to favorites list`,
              subtitle: 'It has been removed, but you can add it back anytime'
            });

          } else {
            showSnackbar({
              type: "success",
              title: `Added to favorites list`,
              subtitle: 'You can now find it in your favorites'
            });
          }

        }}
        className="text-lg font-medium text-white rounded-full  md:px-1 dark:bg-dark-100 bg-white border border-slate-300 dark:border-slate-600"
      >
        {isFavorited ? (
          <div className="flex flex-row justify-center items-center gap-2 p-3 md:px-4 md:py-2">
            <svg className="text-[#FF407D]" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M734-313 615-432l51-51 68 68 136-136 51 51-187 187ZM432-480Zm0 360-108-96q-79-70-132-124t-85-99q-32-45-45.5-84.5T48-605q0-89 60.5-150T257-816q50 0 96.5 21t78.5 59q32.3-38.1 76.95-59.05Q553.6-816 603-816q78 0 136.5 47.5T812-648h-75q-14-42-50-69t-84-27q-57 0-87.5 28.5T452-648h-40q-34-40-65.5-68T257-744q-57 0-97 40t-40 99q0 31.37 12.5 63.68 12.5 32.32 47 75.82 34.5 43.5 95 103T432-217q25-22 73.5-65t68.5-62l8.05 8.05 17.45 17.45 17.45 17.45L625-293q-21 20-46 42t-41 36l-106 95Z" /></svg>
            <span className="hidden md:block font-raleway text-black font-medium text-base dark:text-white">
              Favorited
            </span>
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center gap-2 p-3 md:px-4 md:py-2 ">
            <svg className="text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
              <path d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
            </svg>
            <span className="hidden md:block text-black font-raleway font-medium text-base dark:text-white">
              Add to favorites
            </span>
          </div>
        )}
      </button >
      <SnackBarContainer>{snackbarList}</SnackBarContainer>
    </>
  );
};

export default FavoriteButton;
