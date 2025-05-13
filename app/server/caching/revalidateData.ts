"use server";

import { revalidatePath } from "next/cache";

export const revalidateData = async () => {
  revalidatePath("/", "layout");
};
