import { createStorage } from "unstorage";

export const storage = createStorage(/* opts */);

// await storage.getItem("foo:bar"); // or storage.getItem('/foo/bar')
// await storage.setItem("foo:bar", "baz"); // or storage.setItem('/foo/bar', 'baz')
