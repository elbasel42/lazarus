import { deleteAllData, setValue } from "@server/db";
import {
  buttonStyle,
  dangerButtonStyle,
  primaryButtonStyle,
} from "@styles/button";
import { textInputStyle } from "@styles/input";
import { twMerge } from "tailwind-merge";

export const DataForm = () => {
  return (
    <form action={setValue} className={formStyle}>
      <input
        type="text"
        name="key"
        placeholder="Key"
        className={textInputStyle}
      />
      <input
        type="text"
        name="value"
        placeholder="Value"
        className={textInputStyle}
      />
      <button
        className={twMerge(buttonStyle, primaryButtonStyle)}
        type="submit"
      >
        Add data
      </button>
      <button
        className={twMerge(buttonStyle, dangerButtonStyle)}
        formAction={deleteAllData}
      >
        Delete all data
      </button>
    </form>
  );
};

// ! Styles
const formStyle = "space-y-2";
