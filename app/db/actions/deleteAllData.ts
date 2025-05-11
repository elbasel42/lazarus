"use server";

import { revalidateData } from "@actions";
import { db } from "@db";

export const deleteAllData = async () => {
  await db.clear();
  revalidateData();
};
