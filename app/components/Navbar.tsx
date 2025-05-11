// "use client";

import { auth } from "@auth";
import { Slash } from "@components";
import { urls } from "@lib";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const NavBar = async () => {
  const session = await auth();
  const user = session?.user;
  const imageUrl = user?.image;
  // const pathName = usePathname();
  // const [imageUrl, setImageUrl] = useState("");
  // const initUser = async () => {
  //   const session = await auth();
  //   const user = session?.user;
  //   const imageUrl = user?.image;
  //   setImageUrl(imageUrl ?? "");
  // };
  // useEffect(() => {
  //   initUser();
  // }, []);
  return (
    <nav className="flex items-center text-sm mb-4 pb-2 border-b border-white/80 rounded-sm">
      <Link href={urls.home} className="!m-0 !p-0 hover:!bg-transparent">
        <Image
          className="mr-2"
          width={50}
          height={50}
          src="/logo.png" 
          alt="logo"
        />
      </Link>
      <Slash />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {imageUrl && <img src={imageUrl} alt="profile pic" width={40} height={40} className="rounded-full mr-4"/>}
      {/* {imageUrl && <img src={imageUrl} alt="user image" />} */}
      <ul className="flex w-full justify-between">
        <div>
          <li>
            <Link
              // className={twMerge(pathName === urls.test.root && "active")}
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
