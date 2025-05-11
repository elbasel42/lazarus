"use server";

import { storage } from "@storage";
import { revalidateData } from "@actions";

export const setValue = async (formData: FormData) => {
  const key = formData.get("key")?.toString();
  const value = formData.get("value")?.toString();
  if (!key) {
    throw new Error("Key is required");
  }
  if (!value) {
    throw new Error("Value is required");
  }

  await storage.setItem(key, value);
  revalidateData();
};
