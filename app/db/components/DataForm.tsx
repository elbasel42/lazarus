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
      <button className="primary" type="submit">
        Add data
      </button>
      <button className="danger" formAction={deleteAllData}>
        Delete all data
      </button>
    </form>
  );
};
