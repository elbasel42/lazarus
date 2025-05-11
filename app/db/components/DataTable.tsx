import { getAllKeys, getValue } from "@db/actions";

export const DataTable = async () => {
  const allKeys = await getAllKeys();
  return (
    <table className="table mt-4">
      <thead className="table-header">
        <tr className="table-row">
          <th className="table-head text-green-600">key</th>
          <th className="table-head text-red-600">value</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {allKeys.map(async (key) => {
          const value = await getValue(key);
          return (
            <tr key={key} className="table-row">
              <td className="table-data">{key}</td>
              <td className="table-data">{value?.toString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
