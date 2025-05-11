"use client";

import { urls } from "@lib";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col gap-2 py-4">
      <p className="bg-white/80 text-black px-1 py-2 rounded-sm w-fit">{pathName}</p>
      <ul className="flex ">
        <li>
          <Link href={urls.home}>/home</Link>
        </li>
        <li>
          <Link href={urls.test.root}>/test</Link>
        </li>
        <li>
          <Link href={urls.login}>/login</Link>
        </li>
        <li>
          <Link href={urls.profile}>/profile</Link>
        </li>
      </ul>
    </nav>
  );
};
