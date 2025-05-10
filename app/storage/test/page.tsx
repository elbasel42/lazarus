import { getAllKeys, setValue, getValue } from "@storage/actions";

const TestStoragePage = async () => {
  const allKeys = await getAllKeys();
  console.log({ allKeys });

  return (
    <main>
      <h1>Test Storage Page</h1>
      <form action={setValue} className="space-y-2">
        <input
          className="text-input"
          type="text"
          name="key"
          placeholder="Key"
        />
        <input
          className="text-input"
          type="text"
          name="value"
          placeholder="Value"
        />
        <button className="button" type="submit">
          Submit
        </button>
        <table className="table">
          <thead>
            <tr>
              <th className="table-head">key</th>
              <th className="table-head">value</th>
            </tr>
          </thead>
          <tbody>
            {allKeys.map(async (key) => {
              const value = await getValue(key);
              return (
                <tr>
                  <td className="table-data">{key}</td>
                  <td className="table-data">{value?.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </main>
  );
};

export default TestStoragePage;
