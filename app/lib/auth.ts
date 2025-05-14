import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { db } from "./db";
import { UnstorageAdapter } from "@auth/unstorage-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "database",
  },
  adapter: UnstorageAdapter(db, { useItemRaw: true }),
  providers: [Google, GitHub],
});
