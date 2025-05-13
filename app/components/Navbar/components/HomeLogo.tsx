import { urls } from "@lib";
import Link from "next/link";
import Image from "next/image";

export const HomeLogo = () => {
  return (
    <Link href={urls.home}>
      <Image
        className="mr-2"
        width={50}
        height={50}
        src="/logo.png"
        alt="logo"
      />
    </Link>
  );
};
