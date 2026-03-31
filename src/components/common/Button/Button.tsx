import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "dark";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const variantClass = styles[variant] || styles.primary;
  return (
    <button
      className={`${styles.button} ${variantClass} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
