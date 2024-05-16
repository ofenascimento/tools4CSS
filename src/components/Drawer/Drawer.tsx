import React from "react";
import { MdDelete } from "react-icons/md";
import { useFavorites } from "../../context/FavoriteContext";

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, toggleDrawer }) => {
  const { favoriteTools, deleteFavorite } = useFavorites();

  const handleDelete = (toolName: string) => {
    deleteFavorite(toolName);
  };

  return (
    <div
      className={` z-30 fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        id="header"
        className="p-4 flex flex-row justify-between items-center"
      >
        <h1 className="font-GilroyMedium text-black">Favorites</h1>
        <button onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="px-4 py-2" id="content">
        <ul className="">
          {favoriteTools.length > 0 ? (
            favoriteTools.map((tool, index) => (
              <li
                key={index}
                className="mb-2 flex justify-between items-center"
              >
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-EuclidRegular text-md"
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
        <p className="font-EuclidRegular text-sm bg-main rounded-md p-4 text-white mt-4">
          Your favorites are saved in your browser&apos;s cache. Clearing your
          browsing data will result in the deletion of your favorites as well.
        </p>
      </div>
    </div>
  );
};

export default Drawer;
