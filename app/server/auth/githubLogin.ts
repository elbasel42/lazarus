"use server";

import { signIn } from "../../lib/auth";

export const githubLogin = async () => {
  await signIn("github");
};
