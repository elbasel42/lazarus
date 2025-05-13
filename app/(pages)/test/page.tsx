import { urls } from "@lib";
import Link from "next/link";
import { linkStyle } from "../../styles/links/linkStyle";

const TestPage = () => {
  return (
    <main className={mainStyle}>
      <Link className={linkStyle} href={urls.test.db}>
        /test/db/
      </Link>
    </main>
  );
};

export default TestPage;

// ! Styles
const mainStyle = "space-y-4";
