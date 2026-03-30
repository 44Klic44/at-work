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
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.25 9H0.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 14.25L0.75 9L6 3.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
