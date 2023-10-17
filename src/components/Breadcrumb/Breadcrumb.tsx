import Link from 'next/link';
import { TBreadcrumb } from './types';

export const Breadcrumb = ({ links }: TBreadcrumb): React.ReactElement => {
  return (
    <nav className='text-md font-medium'>
      <ol className='list-none p-0 flex'>
        {links.map((link, index) => (
          <li className='flex items-center' key={index}>
            {link.href ? (
              <Link href={link.href}>
                <div className=' text-blue-700 font-medium cursor-pointer'>
                {link.label}
                </div>
                
              </Link>
            ) : (
              <span className='font-medium'>{link.label}</span>
            )}

            {index < links.length - 1 && (
              <span className='mx-2'>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
