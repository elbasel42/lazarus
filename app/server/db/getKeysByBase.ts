import { getAllKeys } from "./getAllKeys";

export const getKeysByBase = async (base: string) => {
  const keys = await getAllKeys();
  const filteredKeys = keys.filter((key) => key.startsWith(base));
  return filteredKeys;
};
