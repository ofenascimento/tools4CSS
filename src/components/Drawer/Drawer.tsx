import React from "react";
import { MdClose, MdDelete } from "react-icons/md";
import { useFavorites } from "../../context/FavoriteContext";
import styles from "./Drawer.module.scss";
import { IDrawer } from "./types";

const Drawer: React.FC<IDrawer> = ({ isOpen, toggleDrawer }) => {
  const { favoriteTools, deleteFavorite } = useFavorites();

  const handleDelete = (toolName: string) => {
    deleteFavorite(toolName);
  };

  return (
    <div
      className={`${
        styles.glass
      } bg-white-glass-mobile dark:bg-black-glass-mobile lg:bg-white-glass lg:dark:bg-black-glass z-30 fixed top-0 right-0 h-full w-64   dark:border-l-2 dark:border-l-dark-100 shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        id="header"
        className="p-4 flex flex-row justify-between items-center"
      >
        <h1 className="font-GilroyBold text-lg text-black dark:text-white">
          Favorites
        </h1>
        <button onClick={toggleDrawer} className="text-black dark:text-white">
          <MdClose size={24} />
        </button>
      </div>
      <div className="px-4 py-2" id="content">
        <ul className="">
          {favoriteTools.length > 0 ? (
            favoriteTools.map((tool, index) => (
              <li
                key={index}
                className="mb-2 flex p-2 rounded-lg justify-between items-center border  bg-slate-100 border-slate-300 dark:bg-dark-100 dark:border-slate-600"
              >
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-white hover:underline font-raleway font-semibold text-md"
                >
                  {tool.name}
                </a>
                <button
                  onClick={() => handleDelete(tool.name)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  <MdDelete size={20} />
                </button>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
        <p className="opacity-80 font-raleway text-sm bg-main rounded-md p-4 text-white mt-4">
          Your favorites are saved in your browser&apos;s cache. Clearing your
          browsing data will result in the deletion of your favorites as well.
        </p>
      </div>
    </div>
  );
};

export default Drawer;
