import { GithubLogin, GoogleLogin } from "@components/auth";

const LoginPage = () => {
  return (
    <main className={mainStyle}>
      <h1 className={h1Style}>Login to Lazarus</h1>
      <GoogleLogin />
      <GithubLogin />
    </main>
  );
};

export default LoginPage;

// ! Styles
const h1Style = "text-2xl text-center font-bold";
const mainStyle = "pt-20 space-y-4";
