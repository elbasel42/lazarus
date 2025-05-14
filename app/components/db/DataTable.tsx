import { getAllKeys, getValue } from "@server/db";
import {
  tableStyle,
  tdStyle as tdBaseStyle,
  thStyle as thBaseStyle,
} from "@styles/table";
import { twMerge } from "tailwind-merge";

export const DataTable = async () => {
  const allKeys = await getAllKeys();
  return (
    <table className={tableStyle}>
      <thead>
        <tr>
          <th className={thStyle}>key</th>
          <th className={thStyle}>value</th>
        </tr>
      </thead>
      <tbody>
        {allKeys.map(async (key) => {
          const value = await getValue(key);
          return (
            <tr key={key}>
              <td className={tdStyle}>{key}</td>
              <td className={tdStyle}>{value?.toString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// ! Styles
const thStyle = twMerge(thBaseStyle, "border border-white/20");
const tdStyle = twMerge(tdBaseStyle, "border border-white/20");
