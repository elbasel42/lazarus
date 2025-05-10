import Link from "next/link";
import { urls } from "@lib";

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <Link href={urls.login}>Login</Link>
    </main>
  );
}
