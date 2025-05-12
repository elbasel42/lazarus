import { googleLogin } from "@auth/actions";
import { GoogleIcon } from "@icons";

export const GoogleLogin = () => {
  return (
    <form action={googleLogin}>
      <button type="submit" className="bg-blue-800/20 px-8 flex items-center gap-2 rounded-sm py-2 mx-auto ">
        <GoogleIcon />
        <span>Login with Google</span>
      </button>
    </form>
  );
};
