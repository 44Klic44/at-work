import React from "react";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">{children}</div>
      </main>
    </>
  );
};
