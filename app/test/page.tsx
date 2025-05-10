import { urls } from "@lib";
import Link from "next/link";

const TestPage = () => {
  return (
    <main>
      <h1>Test Page</h1>
      <Link href={urls.test.storage}>Test Storage</Link>
    </main>
  );
};

export default TestPage;
