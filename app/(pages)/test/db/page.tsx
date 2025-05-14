import { DataTable, DataForm } from "@components/db";

const TestStoragePage = async () => {
  return (
    <main className={mainStyle}>
      <DataForm />
      <DataTable />
    </main>
  );
};

export default TestStoragePage;

// ! Styles
const mainStyle = "space-y-4";
