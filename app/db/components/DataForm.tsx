import { deleteAllData, setValue } from "@db/actions";

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
      <button className="primary w-full px-1 py-2" type="submit">
        Add data
      </button>
      <button className="danger w-full px-1 py-2" formAction={deleteAllData}>
        Delete all data
      </button>
    </form>
  );
};
