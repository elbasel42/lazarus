"use server";

import { db } from "@db";

export const getAllKeys = async () => {
  const allKeys = await db.getKeys();
  return allKeys;
};
