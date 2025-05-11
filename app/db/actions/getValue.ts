"use server";

import { db } from "@db";

export const getValue = async (key: string) => {
  const value = db.get(key);
  return value;
};
