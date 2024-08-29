import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Sections/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className=" lg:flex items-center justify-center bg-blured  dark:bg-black bg-center bg-no-repeat dark:bg-unset dark:bg-repeat">
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
