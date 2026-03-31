import React from "react";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${className || ""}`}>
        <div className="container">{children}</div>
      </main>
    </>
  );
};
