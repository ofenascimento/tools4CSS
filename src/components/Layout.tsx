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

  useEffect(() => { console.log(currentPath) }, [])

  if (currentPath === '/tailwind-playground') return <>{children}</>;

  return (
    <>
     {currentPath === '/' && <TopBanner />}
      <div className={`lg:flex items-center justify-center ${theme === 'dark' ? 'bg-blured' : 'bg-white'}   dark:bg-black bg-center bg-no-repeat dark:bg-unset dark:bg-repeat`}>
        <div className="lg:max-w-[100rem] min-h-screen min-w-full">
          <Navbar />
          <div className="min-h-screen min-w-full">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
