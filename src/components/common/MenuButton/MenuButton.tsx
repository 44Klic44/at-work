import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconDots } from "../../../assets/icons/IconDots";
import styles from "./MenuButton.module.scss";

interface MenuItem {
  label: string;
  onClick?: () => void;
  to?: string;
  variant?: "danger" | "primary";
}

interface MenuButtonProps {
  items: MenuItem[];
}

export const MenuButton: React.FC<MenuButtonProps> = ({ items }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.menuButton} ref={menuRef}>
      <IconDots onClick={() => setOpen(!open)} />
      {open && (
        <div className={styles.dropdown}>
          {items.map((item, idx) =>
            item.to ? (
              <Link
                key={idx}
                to={item.to}
                className={`${styles.item} ${item.variant === "danger" ? styles.danger : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={idx}
                className={`${styles.item} ${item.variant === "danger" ? styles.danger : ""}`}
                onClick={() => {
                  item.onClick?.();
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
};
