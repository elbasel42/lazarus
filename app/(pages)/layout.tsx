import type { ReactNode } from "react";
import { NavBar } from "../components/Navbar";

interface PagesLayoutProps {
  children: ReactNode;
}
const PagesLayout = ({ children }: PagesLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default PagesLayout;
