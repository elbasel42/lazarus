import { twMerge } from "tailwind-merge";
import { githubLogin } from "@server/auth";
import { GithubIcon } from "@icons";
import { buttonStyle } from "@styles/button";
import { IconStyle, loginButtonStyle } from "./styles";

export const GithubLogin = () => {
  return (
    <form action={githubLogin}>
      <button type="submit" className={twMerge(buttonStyle, loginButtonStyle)}>
        <GithubIcon className={IconStyle} />
        <span>Login with Github</span>
      </button>
    </form>
  );
};
