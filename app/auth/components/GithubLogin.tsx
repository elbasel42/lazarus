import { githubLogin } from "@auth/actions";
import { GithubIcon } from "@icons";

export const GithubLogin = () => {
  return (
    <form action={githubLogin}>
      <button
        type="submit"
        className="px-8 bg-gray-600/80 py-2 flex items-center gap-2 mx-auto rounded-sm"
      >
        <GithubIcon />
        <span>Login with Github</span>
      </button>
    </form>
  );
};
