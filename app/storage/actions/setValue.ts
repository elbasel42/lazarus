"use server";

import { storage } from "@storage";

export const setValue = async (formData: FormData) => {
  console.log({ formData });
  const key = formData.get("key")?.toString();
  const value = formData.get("value")?.toString();
  if (!key) {
    throw new Error("Key is required");
  }
  if (!value) {
    throw new Error("Value is required");
  }

  storage.setItem(key, value);
};
