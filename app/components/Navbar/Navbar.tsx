import { Slash } from "@icons";
import { auth, urls } from "@lib";
import { HomeLogo, NavLink, UserImage } from "./components";

export const NavBar = async () => {
  const session = await auth();
  const user = session?.user;
  const imageUrl = user?.image;
  return (
    <nav className="flex items-center pb-2 mb-4 text-sm border-b rounded-sm border-white/80">
      <HomeLogo />
      <Slash />
      <UserImage />
      <ul className="flex justify-between gap-2 p-0 m-0 ml-auto">
        <NavLink href={urls.contact}>Contact</NavLink>
        {!session && <NavLink href={urls.login}>Login</NavLink>}
        {session && <NavLink href={urls.profile}> Profile</NavLink>}
      </ul>
    </nav>
  );
};
