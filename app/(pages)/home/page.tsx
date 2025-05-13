import { Net } from "@components";
import { auth, urls } from "@lib";
import Link from "next/link";
import { redirect } from "next/navigation";

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
          Make <span className={spanStyle}>35,000 EGP</span> a month!
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
const h1Style = "pt-24 text-2xl font-bold text-center";
const pStyle = "text-center";
const spanStyle = "underline decoration-wavy decoration-purple-800";
const divStyle = "flex gap-4 !bg-black/5 w-fit mx-auto mt-4";
const getStartedButtonStyle =
  "w-[35vw] bg-white text-black px-1 py-2 text-sm md:!w-[30vw] primary !rounded-full";
const contactButtonStyle =
  "w-[35vw] px-1 py-2 text-sm md:!w-[30vw] primary border border-white/20 !rounded-full !bg-black !text-white";
