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
          <button className={contactButtonStyle}>Contact Us</button>
        </div>
      </main>
    </>
  );
};

export default Home;

// ! Styles
const h1Style = "pt-24 text-8xl font-bold text-center";
const pStyle = "text-center text-4xl mt-8";
const spanStyle = "underline decoration-wavy decoration-purple-800 font-bold";
const divStyle = "flex gap-4 !bg-black/5 w-fit mx-auto mt-8";
const getStartedButtonStyle = twMerge(
  buttonStyle,
  primaryButtonStyle,
  "w-[35vw] text-4xl px-4 py-8 md:w-[30vw] rounded-full"
);
const contactButtonStyle = twMerge(
  buttonStyle,
  "w-[35vw] bg-black text-white px4 py-8  md:!w-[30vw] text-4xl border border-white/20 rounded-full"
);
