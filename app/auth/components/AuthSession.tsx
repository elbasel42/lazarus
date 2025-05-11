import { auth } from "@auth";
import { UserImage } from "@components";

export const AuthSession = async () => {
  const session = await auth();
  const user = session?.user;
  const name = user?.name;
  const email = user?.email;
  const image = user?.image;
  // const expires = session?.expires;
  return (
    <div className="flex gap-4">
      <UserImage url={image} />
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
