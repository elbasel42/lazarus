import { logout } from "@auth/actions";

export const Logout = () => {
  return (
    <form action={logout}>
      <button type="submit" className="button button-primary">
        Logout
      </button>
    </form>
  );
};
