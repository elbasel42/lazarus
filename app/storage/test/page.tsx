import {
  getAllKeys,
  setValue,
  getValue,
  deleteAllData,
} from "@storage/actions";

const TestStoragePage = async () => {
  const allKeys = await getAllKeys();
  console.log({ allKeys });

  return (
    <main>
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
        <button className="button button-primary" type="submit">
          Submit
        </button>
        <button className="button button-danger" formAction={deleteAllData}>
          Delete all data
        </button>
        <table className="table">
          <thead className="table-header">
            <tr className="table-row">
              <th className="table-head">key</th>
              <th className="table-head">value</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {allKeys.map(async (key) => {
              const value = await getValue(key);
              return (
                <tr className="table-row">
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
