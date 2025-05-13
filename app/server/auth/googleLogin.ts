"use server";

import { signIn } from "../../lib/auth";

export const googleLogin = async () => {
  await signIn("google");
};
