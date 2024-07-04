import { GetStaticPaths, GetStaticProps } from 'next';
import Highlight from 'react-highlight';
import 'highlight.js/styles/darcula.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { readComponents } from '@/utils/readComponents';
import Info from '@/components/Info/Info';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import FavoriteButton from '@/components/FavoriteButton/FavoriteButton';
import Title from '@/components/Title/Title';
import { useFavoriteTool } from '@/hooks/useFavoriteTool';
import { HiOutlineCheck, HiOutlineClipboard, HiOutlineCodeBracket, HiOutlineComputerDesktop, HiOutlineDevicePhoneMobile, HiOutlineDeviceTablet, HiOutlineEye } from "react-icons/hi2";
import beautify from 'js-beautify';
import Sidebar from '@/components/Sidebar/Sidebar';

interface Component {
  fileName: string;
  content: string;
}

interface TailwindComponentsPageProps {
  components: Component[];
}

const extractReturnContent = (content: string): string => {
  const match = content.match(/return\s*\(([\s\S]*?)\);?\s*}/);
  return match ? match[1].trim() : content;
};

function replaceToClass(content: string) {
  return content.replace(/className=/g, 'class=');
}

const formatHtml = (content: string): string => {
  return beautify.html(content, { indent_size: 2 });
};

const TailwindComponentsPage = ({ components }: TailwindComponentsPageProps) => {
  const router = useRouter();

  const { slug } = router.query;
  const slugString = Array.isArray(slug) ? slug[0] : (slug ?? '');

  const { isFavorited, handleFavorite } = useFavoriteTool("CSS Formatter");

  const [componentContents, setComponentContents] = useState<string[]>([]);
  const [widths, setWidths] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (components) {
      setComponentContents(components.map((component) => replaceToClass(extractReturnContent(component.content))));
      setWidths(components.map(() => '100%'));
      setActiveView(components.map(() => 'preview'));
    }
  }, [components]);

  const handleWidthChange = (index: number, width: string) => {
    setWidths((prevWidths) => {
      const newWidths = [...prevWidths];
      newWidths[index] = width;
      return newWidths;
    });
  };

  const toggleView = (index: number, view: string) => {
    setActiveView((prevViews) => {
      const newViews = [...prevViews];
      newViews[index] = view;
      return newViews;
    });
  };

  const handleCopy = async (index: number) => {
    const codeToCopy = formatHtml(extractReturnContent(components[index].content));
    await navigator.clipboard.writeText(codeToCopy);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };



  return (
    <div className="w-full lg:w-5/6 mx-auto font-medium">
      <div className="flex flex-row justify-between items-center mx-4 lg:mx-0 cap">
        <Breadcrumb
          links={[{ href: "/", label: "Home" }, { href: "/", label: "Tailwind Components" }, { label: Array.isArray(slug) ? slug[0] : (`${slugString?.charAt(0).toUpperCase() + slugString?.slice(1)}` ?? '') }]}
        />
        <FavoriteButton
          isFavorited={isFavorited}
          handleFavorite={handleFavorite}
        />
      </div>
      <Title
        customTitleClassname='capitalize'
        title={`${slug} Tailwind Components`}
        info="Explore a collection of Tailwind CSS components"
        customInfoClassname="lg:w-3/4"
      />

      <div className=" grid grid-cols-12 mt-6">
        <div className=' col-span-2 pr-2 hidden lg:block'>
          <Sidebar />
        </div>
        <div className="col-span-12 px-4 lg:col-span-10  lg:px-0">
          <div className='dark:bg-dark-100 bg-white border rounded-lg dark:border-gray-600 border-slate-300 p-6'>
            {components.map((component, index) => (
              <div key={index} className="mb-8 w-full">
                <div className='flex justify-between items-center mb-4'>
                  <h1 className='text-white font-GilroyMedium text-lg'>{component.fileName.split(".")[0]}</h1>
                  <div className='text-gray-400 gap-4 hidden lg:flex'>
                    <button onClick={() => handleWidthChange(index, '320px')}>
                      <HiOutlineDevicePhoneMobile size={28} className={`${widths[index] === '320px' ? 'text-blue-500' : ''}`} />
                    </button>
                    <button onClick={() => handleWidthChange(index, '768px')}>
                      <HiOutlineDeviceTablet size={28} className={`${widths[index] === '768px' ? 'text-blue-500' : ''}`} />
                    </button>
                    <button onClick={() => handleWidthChange(index, '100%')}>
                      <HiOutlineComputerDesktop size={28} className={`${widths[index] === '100%' ? 'text-blue-500' : ''}`} />
                    </button>
                  </div>
                  <div className='text-white flex'>
                    <div className=' flex dark:bg-gray-600 bg-slate-300 p-1 rounded-lg font-raleway'>
                      <button
                        className={`flex gap-2 justify-center items-center p-1 w-32 rounded-lg text-base ${activeView[index] === 'preview' ? 'bg-blue-600' : 'dark:bg-gray-600 bg-slate-300 text-black dark:text-white'}`}
                        onClick={() => toggleView(index, 'preview')}
                      >
                        <HiOutlineEye size={20} />  preview
                      </button>
                      <button
                        className={`flex gap-2 justify-center items-center p-2 w-32 rounded-lg ${activeView[index] === 'code' ? 'bg-blue-600' : 'dark:bg-gray-600 bg-slate-300 text-black dark:text-white'}`}
                        onClick={() => toggleView(index, 'code')}
                      >
                        <HiOutlineCodeBracket size={20} />
                        code
                      </button>
                    </div>
                    <button className='ml-6 flex gap-2 justify-center items-center' onClick={() => handleCopy(index)}>
                      {copiedIndex === index ? <HiOutlineCheck className="text-green-400" size={20} /> : <HiOutlineClipboard className=' text-black dark:text-white' size={20} />}
                    </button>
                  </div>
                </div>
                {activeView[index] === 'preview' ? (
                  <iframe
                    className={`w-full rounded-md ring-2 dark:ring-gray-900 ring-gray-200 lg:transition-all bg-white ${slug === 'navbar' ? 'h-[200px]' : 'h-[500px]'} `}
                    loading="lazy"
                    style={{ maxWidth: widths[index] }}
                    srcDoc={`
                      <!DOCTYPE html>
                      <html class="relative" dir="ltr">
                        <head>
                          <link rel="preconnect" href="https://fonts.googleapis.com" />
                          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
                          <script>
                            document.addEventListener('DOMContentLoaded', function () {
                              const iframeLinks = [...document.querySelectorAll('a')];
                              const iframeForms = [...document.querySelectorAll('form')];
                              iframeLinks.forEach(function (iframeLink) {
                                iframeLink.addEventListener('click', (e) => e.preventDefault());
                              });
                              iframeForms.forEach(function (iframeForm) {
                                iframeForm.addEventListener('submit', (e) => e.preventDefault());
                              });
                            });
                          </script>
                          <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
                          <script>
                            tailwind.config = {
                              darkMode: 'class',
                              safelist: ['keen-slider', 'keen-slider__slide'],
                              theme: {
                                extend: {
                                  fontFamily: {
                                    sans: ['Inter'],
                                  },
                                  animation: {
                                    background: 'background ease infinite',
                                  },
                                  keyframes: {
                                    background: {
                                      '0%, 100%': { backgroundPosition: '0% 50%' },
                                      '50%': { backgroundPosition: '100% 50%' },
                                    },
                                  },
                                },
                              },
                            };
                          </script>
                        </head>
                        <body class="">
                          ${componentContents[index]}
                        </body>
                      </html>
                    `}
                    title={`Component in ${slug}`}
                  />
                ) : (
                  <Highlight className="html">
                    <div className='h-[300px]'>
                      {formatHtml(extractReturnContent(component.content))}
                    </div>
                  </Highlight>
                )}
              </div>
            ))}
          </div>



        </div>

      </div>
      <Info
        title="What is Tailwind Components?"
        paragraph="Tailwind Components is a dedicated page that offers a collection of pre-designed Tailwind CSS components available for free. This resource allows designers and developers to easily copy and integrate these components into their projects, ensuring a faster and more efficient workflow. By providing a variety of ready-to-use components, Tailwind Components simplifies the process of creating responsive and visually appealing web pages. Each component is crafted to adhere to best practices, ensuring both functionality and aesthetic appeal. This tool is invaluable for professionals seeking to streamline their web development process and maintain high standards in their design work."
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const componentsData = [
    { name: "hero" },
    { name: "navbar" },
    { name: "footer" },
    { name: "card" },
    { name: "blog" },
    { name: "cookies" }
  ];

  const paths = componentsData.map(component => ({
    params: { slug: component.name.toLowerCase() }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const components = readComponents(`src/components/tailwindComponents/${slug}`);
  return {
    props: {
      components,
    },
  };
};

export default TailwindComponentsPage;
