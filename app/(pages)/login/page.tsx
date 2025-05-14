import { GithubLogin, GoogleLogin } from "@components/auth";
import { auth } from "@lib";
import { Globe } from "@ui";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();
  if (session) {
    return redirect("/profile");
  }

  return (
    <>
      <Globe />
      <main className={mainStyle}>
        <h1 className={h1Style}>Login to Lazarus</h1>
        <div className={divStyle}>
          <GoogleLogin />
          <GithubLogin />
        </div>
      </main>
    </>
  );
};

export default LoginPage;

// ! Styles
const mainStyle = "pt-[10vh] space-y-4 min-h-[80vh]";
const h1Style = "text-2xl lg:text-6xl mb-8 text-center font-bold";
const divStyle = "bg-black/80 space-y-4 w-fit mx-auto";
