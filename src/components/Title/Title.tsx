import React from "react";
import { iTitle } from "./types";

export default function Title({
  title,
  info,
  customTitleClassname,
  customInfoClassname,
}: iTitle): React.ReactElement {
  return (
    <div className=" flex flex-col justify-center items-center mx-4 lg:mx-0 mt-3 lg:mt-0">
      {typeof title === 'string' ? <h1
        className={`${customTitleClassname} lg:leading-08 text-5xl text-center mt-0 lg:mt-6 gap-5 font-GilroyBold dark:text-white `}
        id="generators"
      >
        {title}
      </h1> : title}
      <h3
        className={`${customInfoClassname} text-slate-900 text-center text-md md:text-lg mt-2 font-lexend font-light dark:text-white lg:leading-6 w-full lg:w-1/2`}
      >
        {info}
      </h3>
    </div>
  );
}
