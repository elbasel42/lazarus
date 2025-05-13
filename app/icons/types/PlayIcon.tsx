import { IconProps } from "./IconProps";

export const PlayIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      className={className}
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
};
