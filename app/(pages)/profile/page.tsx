import { AuthSession } from "@auth/components";
import { Logout } from "../../auth/components/Logout";

const ProfilePage = () => {
  return (
    <main className="space-y-4">
      <AuthSession />
      <Logout />
    </main>
  );
};

export default ProfilePage;
