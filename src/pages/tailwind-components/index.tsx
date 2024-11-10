import React, { useState } from "react";
import CopyButton from "../../components/CopyButton/CopyButton";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { SEO } from "../../components/SEO";
import { Breadcrumb } from "../../components/Breadcrumb/Breadcrumb";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { useFavoriteTool } from "../../hooks/useFavoriteTool";
import ControlsContainer from "../../components/ControlsContainer/ControlsContainer";
import CustomSlider from "../../components/CustomSlider/CustomSlider";
import Title from "../../components/Title/Title";
import Info from "../../components/Info/Info";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import CardToComponentsCategory from "@/components/CardToComponentsCategory/CardToComponentsCategory";
import { MdDescription, MdGridOn, MdNearMe } from "react-icons/md";

const ScrollbarGenerator = () => {
  const { isFavorited, handleFavorite } = useFavoriteTool(
    "Tailwind CSS Component"
  );

  return (
    <>
      <SEO title="Tailwind CSS Components" />
      <div className="w-full lg:w-[90%] mx-auto">
        <div className=" flex flex-row justify-between items-center mx-4 lg:mx-0">
          <Breadcrumb
            links={[
              { href: "/", label: "Home" },
              { label: "Tailwind CSS Components" },
            ]}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            handleFavorite={handleFavorite}
          />
        </div>
        <Title
          title={
            <>
              <h1
                className="lg:leading-08 text-5xl text-center mt-0 lg:mt-6 gap-5 font-GilroyBold dark:text-white"
              >
                Tailwind CSS {" "}
                <span
                  style={{
                    textDecorationColor: "#1a4fd8",
                    textDecorationThickness: "5px",
                    textDecorationLine: "underline",
                  }}
                >
                  Components
                </span>
              </h1>
            </>

          }
          info="Explore and utilize a variety of free, customizable components built with Tailwind CSS to speed up your development process."
          />
        <div className=" flex items-center gap-4 mt-6 mx-4 lg:mx-0">
          <div className="bg-blue-600 w-8 h-8 rounded-lg flex justify-center items-center">
            <MdGridOn color="#fff" size={20} />
          </div>
          <h1 className="text-lg dark:text-white font-lexend font-medium text-gray-700">
            Components
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 mx-4 lg:mx-0">
          <CardToComponentsCategory
            href="/tailwind-components/hero"
            urlImage="/mocks/tailwind-components/hero.png"
            title="Hero"
            subtitle="4 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/card"
            urlImage="/mocks/tailwind-components/card.png"
            title="Card"
            subtitle="8 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/testimonials"
            urlImage="/mocks/tailwind-components/testimonials.png"
            title="Testimonials"
            subtitle="6 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/pricing"
            urlImage="/mocks/tailwind-components/pricing.png"
            title="Pricing"
            subtitle="5 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/features"
            urlImage="/mocks/tailwind-components/features.png"
            title="Features"
            subtitle="2 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/cookies"
            urlImage="/mocks/tailwind-components/cookies.png"
            title="Cookies"
            subtitle="2 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/loading"
            urlImage="/mocks/tailwind-components/loading.png"
            title="Loading"
            subtitle="6 components"
          />
        </div>

        <div className=" flex items-center gap-4 mt-6 mx-4 lg:mx-0">
          <div className="bg-blue-600 w-8 h-8 rounded-lg flex justify-center items-center">
            <MdNearMe color="#fff" size={20} />
          </div>
          <h1 className="text-lg dark:text-white font-lexend font-medium text-gray-700">
            Navigation
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 mx-4 lg:mx-0">
          <CardToComponentsCategory
            href="/tailwind-components/navbar"
            urlImage="/mocks/tailwind-components/navbar.png"
            title="Navbar"
            subtitle="2 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/footer"
            urlImage="/mocks/tailwind-components/footer.png"
            title="Footer"
            subtitle="2 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/pagination"
            urlImage="/mocks/tailwind-components/pagination.png"
            title="Pagination"
            subtitle="2 components"
          />
          <CardToComponentsCategory
            href="/tailwind-components/breadcrumb"
            urlImage="/mocks/tailwind-components/breadcrumb.png"
            title="Breadcrumb"
            subtitle="3 components"
          />
        </div>
        <div className=" flex items-center gap-4 mt-6 mx-4 lg:mx-0">
          <div className="bg-blue-600 w-8 h-8 rounded-lg flex justify-center items-center">
            <MdDescription color="#fff" size={20} />
          </div>
          <h1 className="text-lg dark:text-white font-lexend font-medium text-gray-700">
            Form
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 mx-4 lg:mx-0">
          <CardToComponentsCategory
            href="/tailwind-components/login"
            urlImage="/mocks/tailwind-components/login.png"
            title="Login"
            subtitle="3 components"
          />
        </div>

        <Info
          title="What is the Tailwind CSS Component Library?"
          paragraph="The Tailwind CSS Component Library is a highly effective web development tool designed to help developers create responsive and customizable user interfaces with ease. By leveraging the power of Tailwind CSS, this library provides a wide range of pre-built components, such as buttons, cards, and navigation elements, all of which can be easily tailored to fit the specific design requirements of any project.

    Tailwind CSS stands out due to its utility-first approach, allowing developers to apply styles directly within their HTML, ensuring a fast, efficient, and scalable development process. This component library empowers developers to speed up their workflow, reduce redundant CSS code, and build visually consistent, modern, and responsive web applications. Whether you're a beginner or an experienced developer, integrating these Tailwind CSS components into your project can significantly enhance both your productivity and the user experience. Start building faster and more stylish interfaces today with the Tailwind CSS Component Library!"
        />
      </div>
    </>
  );
};

export default ScrollbarGenerator;
