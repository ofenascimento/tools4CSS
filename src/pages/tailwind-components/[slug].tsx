import React, { useEffect, useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import Info from "@/components/Info/Info";
import Title from "@/components/Title/Title";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineDeviceTablet,
  HiOutlineComputerDesktop,
  HiOutlineEye,
  HiOutlineCodeBracket,
  HiOutlineCheck,
  HiOutlineClipboard,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import Sidebar from "@/components/Sidebar/Sidebar";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "@/hooks/useFavoriteTool";
import beautify from "js-beautify";
import { SEO } from "@/components/SEO";
import NavbarTailwindComponents from "@/constants/tailwind-components/navbar";
import HeroTailwindComponents from "@/constants/tailwind-components/hero";
import { useRouter } from "next/router";
import CookiesTailwindComponents from "@/constants/tailwind-components/cookies";
import CardTailwindComponents from "@/constants/tailwind-components/card";
import Loading from "@/components/Loading/Loading";
import TestimonialsTailwindComponents from "@/constants/tailwind-components/testimonials";
import FooterTailwindComponents from "@/constants/tailwind-components/footer";
import LoginTailwindComponents from "@/constants/tailwind-components/login";
import PaginationTailwindComponents from "@/constants/tailwind-components/pagination";

const NavbarTailwindComponentsPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const componentsMap: { [key: string]: { name: string; content: string }[] } =
    {
      navbar: NavbarTailwindComponents,
      hero: HeroTailwindComponents,
      cookies: CookiesTailwindComponents,
      card: CardTailwindComponents,
      testimonials: TestimonialsTailwindComponents,
      footer: FooterTailwindComponents,
      login: LoginTailwindComponents,
      pagination: PaginationTailwindComponents
    };

  let currentComponents: { name: string; content: string }[] | null = null;
  if (typeof slug === "string") {
    currentComponents = componentsMap[slug] || null;
  }

  useEffect(() => {
    if (slug && !currentComponents) {
      router.push("/404");
    }
  }, [slug, currentComponents, router]);

  const [widths, setWidths] = useState<string[]>([]);
  const [activeView, setActiveView] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Navbar Tailwind Components"
  );

  useEffect(() => {
    if (currentComponents) {
      setWidths(currentComponents.map(() => "100%"));
      setActiveView(currentComponents.map(() => "preview"));
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [currentComponents]);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  if (loading) {
    return (
      <div
        className="flex justify-center items-center w-screen"
        style={{ height: "80vh" }}
      >
        <Loading />
      </div>
    );
  }

  if (!currentComponents) {
    return null;
  }

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
    if (currentComponents) {
      await navigator.clipboard.writeText(currentComponents[index].content);
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    }
  };

  const formatHtml = (content: string): string => {
    return beautify.html(content, { indent_size: 2 });
  };

  const title = Array.isArray(slug)
    ? slug[0]
    : `${slug?.charAt(0).toUpperCase()}${slug?.slice(1)}`;

  return (
    <>
      <SEO title={`${title} Tailwind Components`} />
      <div className="w-full lg:w-[90%] mx-auto font-medium">
        <div className="flex flex-row justify-between items-center mx-4 lg:mx-0 cap">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { href: "/tailwind-components", label: "Tailwind Components" },
              { label: title },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>
        <Title
          customTitleClassname="capitalize"
          title={
            <>
              <h1
                className="lg:leading-08 text-5xl text-center mt-0 lg:mt-6 gap-5 font-GilroyBold dark:text-white"
                id="generators"
              >
                <span
                  style={{
                    textDecorationColor: "#1a4fd8",
                    textDecorationThickness: "5px",
                    textDecorationLine: "underline",
                  }}
                >
                  {title}
                </span>
                {" "}
                Tailwind Components
              </h1>
            </>
          }
          // title={`${title} Tailwind Components`}
          info={`Explore a collection of Tailwind CSS ${title} components`}
          customInfoClassname="lg:w-3/4"
        />
        <div className=" lg:grid grid-cols-16 mt-10">
          <div className=" col-span-14 lg:col-span-3 pr-2 hidden lg:block">
            <Sidebar />
          </div>
          <div style={{ gridColumn: 'span 13 / span 13' }} className="col-span-14 lg:col-span-13 lg:px-0">
            <div className="pl-6">
              {currentComponents.map((item, index) => (
                <div
                  key={index}
                  className="mb-10 w-full dark:bg-dark-100 bg-custom-gray-main border-slate-300 border  dark:border rounded-lg dark:border-gray-600 p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h1 className="dark:text-white text-gray-600 font-GilroyMedium font-semibold text-base">
                      {item.name}
                    </h1>
                    <div className="text-gray-400 gap-4 hidden lg:flex">
                      <button onClick={() => handleWidthChange(index, "320px")}>
                        <HiOutlineDevicePhoneMobile
                          size={28}
                          className={`${widths[index] === "320px" ? "text-blue-500" : ""}`}
                        />
                      </button>
                      <button onClick={() => handleWidthChange(index, "768px")}>
                        <HiOutlineDeviceTablet
                          size={28}
                          className={`${widths[index] === "768px" ? "text-blue-500" : ""}`}
                        />
                      </button>
                      <button onClick={() => handleWidthChange(index, "100%")}>
                        <HiOutlineComputerDesktop
                          size={28}
                          className={`${widths[index] === "100%" ? "text-blue-500" : ""}`}
                        />
                      </button>
                    </div>
                    <div className="text-white flex">
                      <div className="flex dark:bg-gray-600 bg-custom-gray-secondary p-1 rounded-lg font-raleway">
                        <button
                          className={`flex gap-2 justify-center items-center px-8 lg:w-28 lg:px-2 py-[0.5rem] rounded-md text-sm ${activeView[index] === "preview" ? "bg-blue-600" : "dark:bg-gray-600 bg-custom-gray-secondary text-gray-700 dark:text-white"}`}
                          onClick={() => toggleView(index, "preview")}
                        >
                          <HiOutlineEye size={18} />
                          <span className="hidden md:block font-lexend font-medium">
                            Preview
                          </span>
                        </button>
                        <button
                          className={`flex gap-2 justify-center items-center px-8 lg:w-28 lg:px-2 py-[0.5rem] rounded-md text-sm ${activeView[index] === "code" ? "bg-blue-600" : "dark:bg-gray-600 bg-custom-gray-secondary text-gray-700 dark:text-white"}`}
                          onClick={() => toggleView(index, "code")}
                        >
                          <HiOutlineCodeBracket size={18} />
                          <span className="hidden md:block font-lexend font-medium">
                            Code
                          </span>
                        </button>
                      </div>
                      <button
                        className="ml-4 flex gap-2 justify-center items-center dark:bg-gray-600 bg-custom-gray-secondary text-gray-700 dark:text-white rounded-lg px-4"
                        onClick={() => handleCopy(index)}
                      >
                        {copiedIndex === index ? (
                          <HiOutlineClipboardDocumentCheck
                            className="text-green-600 dark:text-green-400"
                            size={18}
                          />
                        ) : (
                          <HiOutlineClipboard
                            className="text-black dark:text-white"
                            size={18}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                  {activeView[index] === "preview" ? (
                    <iframe
                      className={`w-full rounded-md ring-2 dark:ring-gray-900 ring-gray-200 lg:transition-all bg-white ${slug === "navbar" ? "h-[300px]" : slug === "pagination" ?  "h-[100px]" : "h-[500px]"}`}
                      loading="lazy"
                      style={{ maxWidth: widths[index] }}
                      srcDoc={`
                                                <!DOCTYPE html>
                                                <html class="relative" dir="ltr">
                                                <head>
                                                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                                                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                                                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" />
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
                                                    ${item.content}
                                                </body>
                                                </html>
                                            `}
                      title={`Component in ${item.name}`}
                    />
                  ) : (
                    <Highlight className="html">
                      <div className="h-[400px]">
                        {formatHtml(item.content)}
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
    </>
  );
};

export default NavbarTailwindComponentsPage;
