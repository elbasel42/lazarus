import { githubLogin } from "@auth/actions";

export const GithubLogin = () => {
  return (
    <form action={githubLogin}>
      <button type="submit" className="primary px-1 py-2 w-full">
        Login with Github
      </button>
    </form>
  );
};
