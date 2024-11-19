import type { NextPage } from "next";
import { SEO } from "../components/SEO";
import React from "react";
import Hero from "../components/Sections/Hero/Hero";
import Tools from "../components/Sections/Tools/Tools";
import GithubStargazers from "@/components/GithubStargazers/GithubStargazers";

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        shouldExcludeTitleSuffix
        title="Tools4CSS - Free CSS Generators, Tools, and Components"
        description="Explore free CSS generators for gradients, glassmorphism, scrollbars, and more. Find tools, components, and resources to create modern and responsive designs."
      />
      <Hero />
      <Tools />
      <GithubStargazers />
    </div>
  );
};

export default Home;
