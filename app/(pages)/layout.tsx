import type { ReactNode } from "react";
import { NavBar } from "@components";

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
