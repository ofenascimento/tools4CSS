import React from "react";
import { IInfo } from "./types";

function Info({ title, paragraph }: IInfo): React.ReactElement {
  return (
    <div className="w-auto md:w-full mt-4 p-4 bg-slate-200 rounded-lg font-manrope text-lg mx-4 lg:mx-0 dark:bg-mainDark dark:text-white dark:border dark:border-slate-600">
      <h1 className="text-3xl">{title}</h1>
      <br />
      <p>{paragraph}</p>
      <br />
    </div>
  );
}

export default Info;
