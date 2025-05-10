import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";

export const storage = createStorage({
  driver: fsLiteDriver({ base: "./data" }),
});

// await storage.getItem("foo:bar"); // or storage.getItem('/foo/bar')
// await storage.setItem("foo:bar", "baz"); // or storage.setItem('/foo/bar', 'baz')
