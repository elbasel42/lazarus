import { AuthSession, Logout } from "@auth/components";
import { auth } from "@auth";

const ProfilePage = async () => {
  const session = await auth();
  return (
    <main className="space-y-4">
      <AuthSession />
      {session && <Logout />}
    </main>
  );
};

export default ProfilePage;
