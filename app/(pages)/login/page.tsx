import { GithubLogin, GoogleLogin } from "../../components/auth";

const h1Style = "text-2xl text-center font-bold";

const LoginPage = () => {
  return (
    <main className="pt-20 space-y-4">
      <h1 className={h1Style}>Login to Lazarus</h1>
      <GoogleLogin />
      <GithubLogin />
    </main>
  );
};

export default LoginPage;
