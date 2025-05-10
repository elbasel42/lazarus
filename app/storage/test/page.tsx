import { testSetItem } from "../actions/testSetItem";

const TestStoragePage = () => {
  return (
    <main>
      <h1>Test Storage Page</h1>
      <form action={testSetItem}>
        <input type="text" name="key" placeholder="Key" />
        <input type="text" name="value" placeholder="Value" />
      </form>
    </main>
  );
};

export default TestStoragePage;
