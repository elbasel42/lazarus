import { GithubLogin, GoogleLogin } from "@auth/components";

const LoginPage = () => {
  return (
    <main className="space-y-4 pt-20">
      <h1 className="text-2xl text-center font-bold">Login to Lazarus</h1>
      <GoogleLogin />
      <GithubLogin />
    </main>
  );
};

export default LoginPage;
