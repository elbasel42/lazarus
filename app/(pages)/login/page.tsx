import { GithubLogin, GoogleLogin } from "@auth/components";
import { Logout } from "../../auth/components/Logout";

const LoginPage = () => {
  return (
    <main className="space-y-4">
      <GoogleLogin />
      <GithubLogin />
    </main>
  );
};

export default LoginPage;
