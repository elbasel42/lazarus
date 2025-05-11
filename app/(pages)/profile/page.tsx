import { AuthSession } from "@auth/components";
import { Logout } from "../../auth/components/Logout";

const ProfilePage = () => {
  return (
    <main>
      <AuthSession />
      <Logout />
    </main>
  );
};

export default ProfilePage;
