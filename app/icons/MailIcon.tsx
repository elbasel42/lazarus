import { IconProps } from "./types/IconProps";

export const MailIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    </svg>
  );
};

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   // width={width}
//   // height={height}
//   // viewBox={viewBox ?? `0 0 ${width} ${height}`}
//   // fill={fill}
//   // stroke={stroke ?? "currentColor"}
//   // strokeWidth={strokeWidth}
//   // strokeLinecap={strokeLineCap ?? "round"}
//   // strokeLinejoin={strokeLinejoin ?? "round"}
//   className={className}
// >
//   <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
//   <rect x="2" y="4" width="20" height="16" rx="2" />
// </svg>
