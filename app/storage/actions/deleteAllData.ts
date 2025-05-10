"use server";

import { revalidateData } from "@actions";
import { storage } from "@storage";

export const deleteAllData = async () => {
  await storage.clear("")
  revalidateData();
};
