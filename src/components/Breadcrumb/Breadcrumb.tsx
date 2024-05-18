import Link from 'next/link';
import { TBreadcrumb } from './types';

export const Breadcrumb = ({ links }: TBreadcrumb): React.ReactElement => {
  return (
    <nav className='lg:ml-0 ml-6 text-md font-medium'>
      <ol className='list-none p-0 flex'>
        {links.map((link, index) => (
          <li className='flex items-center' key={index}>
            {link.href ? (
              <Link href={link.href}>
                <div className=' text-main dark:text-blue-500 dark:hover:text-blue-600 font-medium cursor-pointer'>
                {link.label}
                </div>
                
              </Link>
            ) : (
              <span className='font-medium dark:text-white'>{link.label}</span>
            )}

            {index < links.length - 1 && (
              <span className='mx-2 dark:text-white'>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
