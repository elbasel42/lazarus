import { logout } from "@auth/actions";

export const Logout = () => {
  return (
    <form action={logout}>
      <button type="submit" className="primary w-full px-1 py-2">
        Logout
      </button>
    </form>
  );
};
