"use server";

import { db } from "../../lib/db";

export const getAllKeys = async () => {
  const allKeys = await db.getKeys();
  return allKeys;
};
