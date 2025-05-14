import { urls } from "@lib";
import Link from "next/link";
import Image from "next/image";

export const HomeLogo = () => {
  return (
    <Link href={urls.home} className={linkStyle}>
      <Image
        className={linkStyle}
        width={50}
        height={50}
        src="/logo.png"
        alt="logo"
      />
    </Link>
  );
};

// ! Styles
const linkStyle = "hover:scale-110"
const imageStyle = "mr-2"