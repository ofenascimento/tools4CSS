// components/CardToComponents.js
import Image from 'next/image';
import { ICardToComponentsCategory } from './types';
import Link from 'next/link';

const CardToComponentsCategory: React.FC<ICardToComponentsCategory> = ({ urlImage, title, subtitle, href }) => {
    return (
        <Link href={href}>
            <div className="rounded-lg overflow-hidden dark:bg-dark-100 bg-white border border-slate-300 dark:border-slate-600 w-full font-lexend cursor-pointer">
                <Image
                    className="w-full"
                    src={urlImage}
                    alt="Image of a project"
                    width={576}
                    height={300}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl truncate dark:text-white">
                        {title}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-base line-clamp-3">
                        {subtitle}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CardToComponentsCategory;
