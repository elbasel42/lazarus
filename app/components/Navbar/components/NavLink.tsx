import Link from "next/link";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children?: ReactNode;
}
export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <Link className={linkStyle} href={href}>
        {children}
      </Link>
    </li>
  );
};

const linkStyle = "border border-white/20 p-2 rounded-sm hover:bg-white/10 hover:ring-2 ring-blue-600";
