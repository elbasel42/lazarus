"use server";

import { storage } from "@storage";

export const getValue = async (key: string) => {
  const value = storage.get(key);
  return value;
};
