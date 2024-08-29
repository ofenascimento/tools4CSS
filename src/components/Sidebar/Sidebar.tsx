import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { MdDescription, MdGridOn, MdNearMe } from 'react-icons/md';

type ComponentData = {
    name: string;
    count: number;
};

type ComponentsData = {
    [category: string]: ComponentData[];
};

const componentsData: ComponentsData = {
    Components: [
        { name: "Hero", count: 3 },
        { name: "Card", count: 1 },
        { name: "Footer", count: 1 },
        { name: "Cookies", count: 1 },
        // { name: "Blog", count: 3 },
        // { name: "Snackbar", count: 4 },
        // { name: "Slider", count: 2 },
        // { name: "Carousel", count: 2 },
    ],
    Navigation: [
        { name: "Navbar", count: 2 },
        { name: "Sidebar", count: 2 },
    ],
    Forms: [
        { name: "Form Elements", count: 2 },
        { name: "Login", count: 4 },
    ]
};

const Sidebar: React.FC = () => {
    const router = useRouter();
    const currentPath = router.asPath;

    const renderCategory = (category: string, components: ComponentData[]) => (
        <>
            <div className='flex gap-4 items-center'>
                <div className='bg-blue-600 w-8 h-8 rounded-lg flex justify-center items-center'>
                    {category === "Components" && <MdGridOn color='#fff' size={20} />}
                    {category === "Navigation" && <MdNearMe color='#fff' size={20} />}
                    {category === "Forms" && <MdDescription color='#fff' size={20} />}
                </div>
                <h1 className='font-raleway text-lg dark:text-white text-black'>{category}</h1>
            </div>
            <div className='text-lg text-white mt-6 gap-1 flex flex-col'>
                {components.map((component, index) => {
                    const linkPath = `/tailwind-components/${component.name.toLowerCase()}`;
                    return (
                        <Link href={linkPath} key={index}>
                            <div className={`flex justify-between items-center cursor-pointer px-2 py-1 rounded-lg ${currentPath === linkPath ? 'dark:bg-dark-100 bg-white border dark:border-gray-600 border-gray-300' : ''}`}>
                                <h3 className='font-lexend font-normal text-base dark:text-white text-black'>{component.name}</h3>
                                <span className='dark:bg-gray-600 bg-slate-200 border dark:border-slate-600 border-slate-300 px-2 py-1 rounded-full text-xs text-black dark:text-white'>{component.count}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );

    return (
        <div id='sidebar-components'>
            {Object.entries(componentsData).map(([category, components]) => (
                <div key={category} className='mb-8'>
                    {renderCategory(category, components)}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
