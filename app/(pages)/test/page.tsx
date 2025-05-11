import { urls } from "@lib";
import Link from "next/link";

const TestPage = () => {
  return (
    <main className="space-y-4 flex flex-col items-center justify-center min-h-[90vh]">
      <Link className="link" href={urls.test.db}>Test Storage</Link>
      <Link className="link" href={urls.test.login}>Test Login</Link>
    </main>
  );
};

export default TestPage;
