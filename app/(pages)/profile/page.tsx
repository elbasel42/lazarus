import { AuthSession, Logout } from "../../components/auth";
import { auth } from "../../lib/auth";
import { redirect } from "next/navigation";
import { urls } from "@lib";

const ProfilePage = async () => {
  const session = await auth();
  if (!session) return redirect(urls.login);
  return (
    <main className={mainStyle}>
      <AuthSession />
      <Logout />
    </main>
  );
};

export default ProfilePage;

// ! Styles
const mainStyle = "space-y-4";
