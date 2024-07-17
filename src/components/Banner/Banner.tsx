import React from "react";
import Link from "next/link";
import ColorGrid from "../ColorGrid/ColorGrid";
import { BsPalette2 } from "react-icons/bs";
import { LuPaintbrush2 } from "react-icons/lu";

export default function Banner() {
  return (
    <>
      <div className="dark:bg-mainDark bg-white w-full mt-10 flex flex-col lg:flex-row justify-between items-center rounded-lg border dark:border-slate-600 p-4">
        <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 mb-4 lg:mb-0">
          <ColorGrid />
        </div>
        <div className="ml-0 lg:ml-8 flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2">
          <h2 className="font-GilroyBold dark:text-white text-2xl mt-2 leading-6 text-center lg:text-left">
            Unlock Your Creativity with Our Ultimate CSS Gradients Collection
          </h2>
          <Link href='/gradient-pallete'>
            <button
              className="font-GilroyMedium text-white py-2 px-6 lg:px-14 mt-2 rounded-full flex justify-center items-center gap-3 w-full"
              style={{
                backgroundImage: `linear-gradient(80deg, #f97d98, #d41f46)`,
              }}
            >
              Explore Gradient Palette <BsPalette2 className=" hover:ml-4" />
            </button>
          </Link>
          <Link href='/background-gradient'>
            <button
              className="font-GilroyMedium text-white py-2 px-6 lg:px-14 mt-2 rounded-full flex justify-center items-center gap-3 w-full"
              style={{
                backgroundImage: `linear-gradient(80deg, #6a25cb, #2580fc)`,
              }}
            >
              Create Your Gradient <LuPaintbrush2 className=" hover:ml-4" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
