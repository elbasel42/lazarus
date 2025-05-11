import { googleLogin } from "@auth/actions";

export const GoogleLogin = () => {
  return (
    <form action={googleLogin}>
      <button type="submit" className="primary">
        Login with Google
      </button>
    </form>
  );
};
