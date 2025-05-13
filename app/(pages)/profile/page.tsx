import { AuthSession, Logout } from "../../components/auth";
import { auth } from "../../server/auth/auth";
import { redirect } from "next/navigation";
import { urls } from "@lib";

const ProfilePage = async () => {
  const session = await auth();
  if (!session) return redirect(urls.login);
  return (
    <main className="space-y-4">
      <AuthSession />
      <Logout />
    </main>
  );
};

export default ProfilePage;
