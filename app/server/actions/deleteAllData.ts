"use server";

import { revalidateData } from "../caching";
import { db } from "@db";

export const deleteAllData = async () => {
  await db.clear();
  revalidateData();
};
