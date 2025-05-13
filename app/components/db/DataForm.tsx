import { deleteAllData, setValue } from "@server/db";

export const DataForm = () => {
  return (
    <form action={setValue} className="space-y-2">
      <input className="text-input" type="text" name="key" placeholder="Key" />
      <input
        className="text-input"
        type="text"
        name="value"
        placeholder="Value"
      />
      <button className="w-full px-1 py-2 primary" type="submit">
        Add data
      </button>
      <button className="w-full px-1 py-2 danger" formAction={deleteAllData}>
        Delete all data
      </button>
    </form>
  );
};
