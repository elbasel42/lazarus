import { GithubLogin, GoogleLogin } from "@components/auth";

const LoginPage = () => {
  return (
    <main className={mainStyle}>
      <h1 className={h1Style}>Login to Lazarus</h1>
      <div className={divStyle}>
        <GoogleLogin />
        <GithubLogin />
      </div>
    </main>
  );
};

export default LoginPage;

// ! Styles
const mainStyle = "pt-[20vh] space-y-4 bg-logo min-h-[85vh]";
const h1Style = "text-2xl text-center font-bold";
const divStyle = "bg-black/80 space-y-4"
