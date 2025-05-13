/* eslint-disable @next/next/no-img-element */
import { auth } from "../../server/auth/auth";
import { Slash } from "@icons";
import { urls } from "@lib";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./NavLink";

export const NavBar = async () => {
  const session = await auth();
  const user = session?.user;
  const imageUrl = user?.image;

  return (
    <nav className="flex items-center pb-2 mb-4 text-sm border-b rounded-sm border-white/80">
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
          className="mr-4 rounded-full"
        />
      )}
      <ul className="flex justify-between gap-2 p-0 m-0 ml-auto">
        <NavLink href={urls.contact}>Contact</NavLink>
        {!session && <NavLink href={urls.login}>Login</NavLink>}
        {session && <NavLink href={urls.profile}> Profile</NavLink>}
      </ul>
    </nav>
  );
};
