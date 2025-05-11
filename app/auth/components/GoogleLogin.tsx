import { googleLogin } from "@auth/actions";

export const GoogleLogin = () => {
  return (
    <form action={googleLogin}>
      <button type="submit" className="button button-primary">
        Login with Google
      </button>
    </form>
  );
};
