import { githubLogin, googleLogin } from "./actions";

const LoginPage = () => {
  return (
    <main>
      <form className="space-y-4">
        <button formAction={googleLogin} className="button button-primary">
          Login with Google
        </button>
        <button formAction={githubLogin} className="button button-primary">
          Login with Github
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
