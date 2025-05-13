import { getAllKeys, getValue } from "@server/db";

export const DataTable = async () => {
  const allKeys = await getAllKeys();
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="text-center text-green-600 border border-white/20">
            key
          </th>
          <th className="text-center text-red-600 border border-white/20">
            value
          </th>
        </tr>
      </thead>
      <tbody>
        {allKeys.map(async (key) => {
          const value = await getValue(key);
          return (
            <tr key={key}>
              <td className="px-1 py-2 text-center border border-white/20">
                {key}
              </td>
              <td className="px-1 py-2 text-center border border-white/20">
                {value?.toString()}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
