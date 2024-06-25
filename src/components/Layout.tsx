import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Sections/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blured  dark:bg-black bg-center bg-no-repeat dark:bg-unset dark:bg-repeat">
      <div className=" max-w-[100rem]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
