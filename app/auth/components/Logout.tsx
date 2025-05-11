import { logout } from "@auth/actions";

export const Logout = () => {
  return (
    <form action={logout}>
      <button type="submit" className="primary">
        Logout
      </button>
    </form>
  );
};
