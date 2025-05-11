import { GithubLogin, GoogleLogin } from "@auth/components";

const LoginPage = () => {
  return (
    <main className="space-y-4">
      <GoogleLogin />
      <GithubLogin />
    </main>
  );
};

export default LoginPage;
