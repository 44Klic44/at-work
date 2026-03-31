import React from "react";
import "./Icon.scss";

interface IconProps {
  className?: string;
  onClick?: () => void;
}

export const IconBack: React.FC<IconProps> = ({ className, onClick }) => (
  <svg
    className={`icon ${className || ""}`}
    onClick={onClick}
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.125 10.5H0.875"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 16.625L0.875 10.5L7 4.375"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
