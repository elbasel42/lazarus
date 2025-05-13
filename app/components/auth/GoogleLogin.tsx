import { twMerge } from "tailwind-merge";
import { googleLogin } from "@server/auth";
import { GoogleIcon } from "@icons";
import { buttonStyle } from "@styles/button";
import { IconStyle, loginButtonStyle } from "./styles";

export const GoogleLogin = () => {
  return (
    <form action={googleLogin}>
      <button type="submit" className={googleLoginButtonStyle}>
        <GoogleIcon className={IconStyle} />
        <span>Login with Google</span>
      </button>
    </form>
  );
};

const googleLoginButtonStyle = twMerge(buttonStyle, loginButtonStyle);
