import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const componentsData = [
    { name: "Hero", count: 3 },
    { name: "Navbar", count: 2 },
    { name: "Footer", count: 1 },
    { name: "Card", count: 1 },
];

const Sidebar = () => {
    const router = useRouter();
    const currentPath = router.asPath;

    return (
        <div id='sidebar-components'>
            <h1 className=' font-raleway text-xl dark:text-white text-black'>Components</h1>
            <div className='text-lg text-white mt-6 gap-1 flex flex-col'>
                {componentsData.map((component, index) => {
                    const linkPath = `/tailwind-components/${component.name.toLowerCase()}`;
                    return (
                        <Link href={linkPath} key={index}>
                            <div className={`flex justify-between items-center cursor-pointer px-2 py-1 rounded-lg ${currentPath === linkPath ? 'dark:bg-dark-100 bg-white border dark:border-gray-600 border-gray-300' : ''}`}>
                                <h3 className=' font-raleway text-base dark:text-white text-black'>{component.name}</h3>
                                <span className='dark:bg-gray-600 bg-slate-200 border dark:border-slate-600 border-slate-300 px-2 py-1 rounded-full text-xs text-black dark:text-white'>{component.count}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
