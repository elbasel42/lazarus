import { Net } from "@components";
import { auth, urls } from "@lib";
import { buttonStyle, primaryButtonStyle } from "@styles/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Home = async () => {
  const session = await auth();
  if (session !== null) {
    redirect("/study");
  }

  return (
    <>
      <Net />
      <main>
        <h1 className={h1Style}>Your future in Tech awaits!</h1>
        <p className={pStyle}>
          Make up to <span className={spanStyle}>35,000 EGP</span> a month!
        </p>
        <div className={divStyle}>
          <Link href={urls.login}>
            <button className={getStartedButtonStyle}>Get Started</button>
          </Link>
          <Link href={urls.contact}>
            <button className={contactButtonStyle}>Contact Us</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;

// ! Styles
const h1Style = "pt-24 text-4xl lg:text-8xl font-bold text-center";
const mainStyle = "min-h-[85vh] bg-logo"
const pStyle = "text-center lg:text-4xl mt-8";
const spanStyle = "underline decoration-wavy decoration-purple-800 font-bold";
const divStyle = "flex gap-4 !bg-black/5 w-fit mx-auto mt-8";
const getStartedButtonStyle = twMerge(
  buttonStyle,
  primaryButtonStyle,
  "w-[35vw] lg:text-4xl lg:px-4 lg:py-8 md:w-[30vw]"
);
const contactButtonStyle = twMerge(
  buttonStyle,
  "w-[35vw] bg-black text-white lg:px4 lg:py-8  md:!w-[30vw] lg:text-4xl border border-white/20"
);
