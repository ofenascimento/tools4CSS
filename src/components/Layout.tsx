import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Sections/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-blured dark:bg-black bg-center bg-no-repeat dark:bg-unset dark:bg-repeat">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
