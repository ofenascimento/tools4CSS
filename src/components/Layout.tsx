import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Sections/Footer/Footer";
import TopBanner from "./TopBanner/TopBanner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const currentPath = router.asPath;
  const { theme } = useTheme()

  if (currentPath === '/tailwind-playground' || currentPath === '/test-component') return <>{children}</>;


  return (
    <>
      {/* {(currentPath === '/' || currentPath === '/#generators') && <TopBanner />} */}
      <div className={`lg:flex items-center justify-center ${theme === 'dark' ? 'bg-blured' : 'bg-white'}   dark:bg-black bg-center bg-no-repeat dark:bg-unset dark:bg-repeat w-full  mx-auto`}>
        <div className=" max-w-[100rem]">
          <Navbar />
          <div className="min-h-screen min-w-full">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
