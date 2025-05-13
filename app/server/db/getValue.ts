"use server";

import { db } from "../../lib/db";

export const getValue = async (key: string) => {
  const value = db.get(key);
  return value;
};
