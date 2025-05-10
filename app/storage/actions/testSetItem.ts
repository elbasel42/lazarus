"use server";

import { storage } from "@storage";

export const testSetItem = async (formData: FormData) => {
  console.log({ formData });
  storage.setItem("test", "test");
};
