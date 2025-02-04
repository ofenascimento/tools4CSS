import Link from 'next/link';
import { TBreadcrumb } from './types';

export const Breadcrumb = ({ links }: TBreadcrumb): React.ReactElement => {
  return (
    <nav className='lg:ml-0 text-md font-normal pt-2 font-DMSans'>
      <ol className='list-none p-0 flex'>
        {links.map((link, index) => (
          <li className='flex items-center' key={index}>
            {link.href ? (
              <Link href={link.href}>
                <div className=' text-main dark:text-blue-500 dark:hover:text-blue-600 cursor-pointer'>
                {link.label}
                </div>
                
              </Link>
            ) : (
              <span className=' text-slate-800 dark:text-white'>{link.label}</span>
            )}

            {index < links.length - 1 && (
              <span className='mx-2 text-slate-800 dark:text-white'>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
