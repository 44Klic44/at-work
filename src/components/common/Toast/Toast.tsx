import React, { useEffect } from "react";
import { IconClose } from "@/assets/icons/IconClose";
import styles from "./Toast.module.scss";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.toast} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          <IconClose />
        </button>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
};
