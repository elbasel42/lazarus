import { Slash } from "@icons";
import { auth, urls } from "@lib";
import { HomeLogo, NavLink, UserImage } from "./components";

export const NavBar = async () => {
  const session = await auth();
  const user = session?.user;
  const imageUrl = user?.image;
  return (
    <nav className={navStyle}>
      <HomeLogo />
      <Slash />
      <UserImage imageUrl={imageUrl} />
      <ul className={ulStyle}>
        <NavLink href={urls.contact}>Contact</NavLink>
        {!session && <NavLink href={urls.login}>Login</NavLink>}
        {session && <NavLink href={urls.profile}> Profile</NavLink>}
      </ul>
    </nav>
  );
};

// ! Styles
const navStyle =
  "flex items-center pb-2 mb-4 text-sm border-b rounded-sm border-white/80";
const ulStyle = "flex justify-between gap-2 p-0 m-0 ml-auto";
