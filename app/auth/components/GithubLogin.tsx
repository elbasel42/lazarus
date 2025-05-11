import { githubLogin } from "@auth/actions";

export const GithubLogin = () => {
  return (
    <form action={githubLogin}>
      <button type="submit" className="primary">
        Login with Github
      </button>
    </form>
  );
};
