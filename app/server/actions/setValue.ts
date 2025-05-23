"use server";

import { revalidateData } from "../caching";
import { db } from "../../lib/db";

export const setValue = async (formData: FormData) => {
  const key = formData.get("key")?.toString();
  const value = formData.get("value")?.toString();
  if (!key) {
    throw new Error("Key is required");
  }
  if (!value) {
    throw new Error("Value is required");
  }

  await db.setItem(key, value);
  revalidateData();
};
