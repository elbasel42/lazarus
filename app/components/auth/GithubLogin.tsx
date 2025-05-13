import { GithubIcon } from "@icons";
import { githubLogin } from "@server/auth";
import { buttonStyle } from "@styles/button";
import { twMerge } from "tailwind-merge";
import { loginButtonStyle } from "./styles";

export const GithubLogin = () => {
  return (
    <form action={githubLogin}>
      <button type="submit" className={twMerge(buttonStyle, loginButtonStyle)}>
        <GithubIcon />
        <span>Login with Github</span>
      </button>
    </form>
  );
};
