import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Sections/Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-blured dark:bg-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
