/* eslint-disable @next/next/no-img-element */
import { auth } from "@auth";
import { Slash } from "@components";
import { urls } from "@lib";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";

export const NavBar = async () => {
  const session = await auth();
  const user = session?.user;
  const imageUrl = user?.image;

  return (
    <nav className="flex items-center text-sm mb-4 pb-2 border-b border-white/80 rounded-sm">
      {/* TODO: extract Link into a client component that uses `usePathName` and takes a href prop to apply a white bottom border if the pathname matches the link */}
      <Link href={urls.home}>
        <Image
          className="mr-2"
          width={50}
          height={50}
          src="/logo.png"
          alt="logo"
        />
      </Link>
      <Slash />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="profile pic"
          width={30}
          height={30}
          className="rounded-full mr-4"
        />
      )}
      <ul className="flex w-full justify-between gap-2 p-0 m-0">
        <li>{!session && <NavLink href={urls.login}>Login</NavLink>}</li>
        <li>{session && <NavLink href={urls.profile}> Profile</NavLink>}</li>
      </ul>
    </nav>
  );
};
