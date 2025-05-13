import { githubLogin } from "@server/auth";
import { GithubIcon } from "@icons";
import { loginButtonStyle } from "./styles";

export const GithubLogin = () => {
  return (
    <form action={githubLogin}>
      <button type="submit" className={loginButtonStyle}>
        <GithubIcon />
        <span>Login with Github</span>
      </button>
    </form>
  );
};
