import { logout } from "@server/auth";

export const Logout = () => {
  return (
    <form action={logout}>
      <button type="submit" className="w-full px-1 py-2 primary">
        Logout
      </button>
    </form>
  );
};
