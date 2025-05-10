"use server";

import { storage } from "@storage";

export const getAllKeys = async () => {
  const allKeys = await storage.getKeys();
  return allKeys;
};
