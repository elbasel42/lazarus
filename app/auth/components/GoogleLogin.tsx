import { googleLogin } from "@auth/actions";

export const GoogleLogin = () => {
  return (
    <form action={googleLogin}>
      <button type="submit" className="primary px-1 py-2 w-full">
        Login with Google
      </button>
    </form>
  );
};
