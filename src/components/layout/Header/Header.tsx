// src/components/layout/Header/Header.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IconHeart } from "../../../assets/icons/IconHeart";
import { IconNotifications } from "../../../assets/icons/IconNotifications";
import logo from "../../../assets/icons/logo.svg";
import avatar from "../../../assets/images/header/avatar.png";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  const location = useLocation();
  const isEditPage = location.pathname.includes("/edit");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="at-work" />
          </Link>
          <div className={styles.right}>
            {!isEditPage && (
              <>
                <IconHeart className={styles.icon} />
                <IconNotifications className={styles.icon} />
              </>
            )}
            <div className={styles.user}>
              <img src={avatar} alt="avatar" className={styles.avatar} />
              {!isEditPage && <span className={styles.username}>Ivan1234</span>}
            </div>
          </div>
        </div>
      </div>
      {isEditPage && (
        <div className={styles.backWrapper}>
          <button
            onClick={() => window.history.back()}
            className={styles.backBtn}
          >
            ← Назад
          </button>
        </div>
      )}
    </header>
  );
};
