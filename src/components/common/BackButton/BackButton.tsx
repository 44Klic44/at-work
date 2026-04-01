import React from "react";
import { IconBack } from "../../../assets/icons/IconBack";
import mobArrow from "../../../assets/icons/mob-arrow.svg";
import styles from "./BackButton.module.scss";

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.backButton} onClick={onClick}>
      <IconBack className={styles.icon} />
      <img
        src={mobArrow}
        alt="back"
        className={`${styles.icon} ${styles.iconMobile}`}
      />
      <span>Назад</span>
    </button>
  );
};
