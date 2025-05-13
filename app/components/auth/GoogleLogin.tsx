import { googleLogin } from "@server/auth";
import { GoogleIcon } from "@icons";
import { loginButtonStyle } from "./styles";

export const GoogleLogin = () => {
  return (
    <form action={googleLogin}>
      <button type="submit" className={loginButtonStyle}>
        <GoogleIcon />
        <span>Login with Google</span>
      </button>
    </form>
  );
};
