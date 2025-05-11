"use client";

import { urls } from "@lib";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex flex-col gap-2">
      <p>{pathName}</p>
      <ul className="flex ">
        <li>
          <Link href={urls.home}>Home</Link>
        </li>
        <li>
          <Link href={urls.test.root}>Tests</Link>
        </li>
        <li>
          <Link href={urls.login}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
