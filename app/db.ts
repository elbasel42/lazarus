import { createStorage } from "unstorage";
// import fsLiteDriver from "unstorage/drivers/fs-lite";
import upstashDriver from "unstorage/drivers/upstash";

export const db = createStorage({
  // driver: fsLiteDriver({ base: "./data" }),
  driver: upstashDriver({
    base: "unstorage",
  }),
});

// await storage.getItem("foo:bar"); // or storage.getItem('/foo/bar')
// await storage.setItem("foo:bar", "baz"); // or storage.setItem('/foo/bar', 'baz')
