import { getAllKeys, getValue } from "@db/actions";

export const DataTable = async () => {
  const allKeys = await getAllKeys();
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border text-center border-white/20 text-green-600">
            key
          </th>
          <th className="border text-center border-white/20 text-red-600">
            value
          </th>
        </tr>
      </thead>
      <tbody>
        {allKeys.map(async (key) => {
          const value = await getValue(key);
          return (
            <tr key={key}>
              <td className="border border-white/20 px-1 py-2 text-center">
                {key}
              </td>
              <td className="border border-white/20 px-1 py-2 text-center">
                {value?.toString()}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
