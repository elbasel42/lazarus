import { urls } from "@lib";
import Image from "next/image";
import Link from "next/link";

export const HomeLogo = () => {
  return (
    <Link href={urls.home} className={linkStyle}>
      <Image
        className={imageStyle}
        width={50}
        height={50}
        src="/logo.png"
        alt="logo"
      />
    </Link>
  );
};

// ! Styles
const linkStyle = "hover:scale-110";
const imageStyle = "mr-2";
