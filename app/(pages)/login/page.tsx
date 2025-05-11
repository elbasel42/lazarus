import { githubLogin, googleLogin } from "./actions";

const LoginPage = () => {
  return (
    <main>
      <h1>Login Page</h1>
      <form>
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
