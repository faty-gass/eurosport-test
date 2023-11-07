import React from "react";
import { IconButton } from "@material-tailwind/react";

interface CloseIconProps {
  onClick: () => void;
}
const WinningGameModal = ({ onClick }: CloseIconProps): React.ReactElement => {
  return (
    <IconButton size="sm" variant="text" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </IconButton>
  );
};

export default WinningGameModal;
