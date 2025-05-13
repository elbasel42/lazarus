"use server";

import { revalidateData } from "../caching";
import { db } from "../../lib/db";

export const deleteAllData = async () => {
  await db.clear();
  revalidateData();
};
