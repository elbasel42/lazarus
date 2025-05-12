import Link from "next/link";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children?: ReactNode;
}
export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li>
      <Link className="border border-white/20 p-2 rounded-sm" href={href}>
        {children}
      </Link>
    </li>
  );
};
