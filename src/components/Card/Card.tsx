import Link from "next/link";
import { ICard } from "./types";
import Image from "next/image";


const Card = (props: ICard) => {
  return (
    <div
      className="w-full lg:w-2/4"
    >
      <div className="border border-slate-300 rounded-md shadow-sm bg-white flex items-center justify-center m-2 lg:mr-2 lg:mb-2 lg:m-auto" >
        <Image className="" src={`/cover/${props.img}`} width={200} height={200} alt="" />
        <div className="ml-4 w-full h-full flex flex-col items-start justify-center">
          <h2 className="font-semibold text-sm pr-4">{props.title}</h2>
          <Link href={`/${props.slug}`}>
            <div className="text-blue-500 text-sm font-medium hover:underline mb-4 cursor-pointer" >
              More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;