import { auth } from "@auth";

export const AuthSession = async () => {
  const session = await auth();
  const user = session?.user;
  // const expires = session?.expires;
  const name = user?.name;
  const email = user?.email;
  const image = user?.image;
  return (
    <div className="flex gap-4">
      <img src={image ?? ""} alt="User Image" />
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
