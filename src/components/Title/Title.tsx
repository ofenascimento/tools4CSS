import React from "react";
import { iTitle } from "./types";

export default function Title({
  title,
  info,
  customTitleClassname,
  customInfoClassname,
}: iTitle): React.ReactElement {
  return (
    <div className=" flex flex-col justify-center items-center mx-4 lg:mx-0 mt-3 lg:mt-1">
      {typeof title === 'string' ? <h1
        className={`${customTitleClassname} lg:leading-08 font-bold text-4xl text-center mt-0 lg:mt-6 gap-5 dark:text-white `}
        id="generators"
      >
        {title}
      </h1> : title}
      <h3
        className={`${customInfoClassname} text-slate-900 text-center font-manrope text-md mt-2 font-semibold dark:text-white lg:leading-6 w-full lg:w-[80%]`}
      >
        {info}
      </h3>
    </div>
  );
}
