"use client";

import { urls } from "@lib";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex items-center text-sm mb-4 pb-2 border-b border-white/80 rounded-sm">
      <Link href={urls.home} className="!m-0 !p-0 hover:!bg-transparent">
        <Image
          className="mr-4"
          width={50}
          height={50}
          src="/logo.png"
          alt="logo"
        />
      </Link>
      <ul className="flex w-full justify-between">
        <div>
          <li>
            <Link
              className={twMerge(pathName === urls.test.root && "active")}
              href={urls.test.root}
            >
              Test
            </Link>
          </li>
        </div>
        <div className="flex gap-2">
          <li>
            <Link className="hollow" href={urls.login}>
              Login
            </Link>
          </li>
          <li>
            <Link className="hollow" href={urls.profile}>
              Profile
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
