import React from "react";
import { IconBack } from "../../../assets/icons/IconBack";
import styles from "./BackButton.module.scss";

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.backButton} onClick={onClick}>
      <IconBack className={styles.icon} />
      <span>Назад</span>
    </button>
  );
};
