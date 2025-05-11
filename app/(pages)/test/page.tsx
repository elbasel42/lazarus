import { urls } from "@lib";
import Link from "next/link";

const TestPage = () => {
  return (
    <main className="space-y-4">
      <Link className="link" href={urls.test.db}>/test/db/</Link>
    </main>
  );
};

export default TestPage;
