import { twMerge } from "tailwind-merge";
import { googleLogin } from "@server/auth";
import { GoogleIcon } from "@icons";
import { buttonStyle } from "@styles/button";
import { loginButtonStyle } from "./styles";

export const GoogleLogin = () => {
  return (
    <form action={googleLogin}>
      <button type="submit" className={twMerge(buttonStyle, loginButtonStyle)}>
        <GoogleIcon />
        <span>Login with Google</span>
      </button>
    </form>
  );
};
