import React, { useEffect } from "react";
import { IconClose } from "../../../assets/icons/IconClose";
import successIcon from "../../../assets/icons/Iconadd.svg";
import styles from "./SuccessPopup.module.scss";

interface SuccessPopupProps {
  onClose: () => void;
  duration?: number;
}

export const SuccessPopup: React.FC<SuccessPopupProps> = ({
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          <IconClose />
        </button>
        <img src={successIcon} alt="success" className={styles.icon} />
        <p className={styles.message}>Изменения сохранены!</p>
      </div>
    </div>
  );
};
