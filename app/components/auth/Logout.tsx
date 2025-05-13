import { logout } from "@server/auth";
import { buttonStyle } from "@styles/button";

export const Logout = () => {
  return (
    <form action={logout}>
      <button type="submit" className={buttonStyle}>
        Logout
      </button>
    </form>
  );
};
