import React from "react";
import type { User } from "@/types";

import { MenuButton } from "@/components/common/MenuButton/MenuButton";
import styles from "./UserCard.module.scss";

interface UserCardProps {
  user: User;
  isArchived?: boolean;
  onArchive?: (id: number) => void;
  onRestore?: (id: number) => void;
  onHide?: (id: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  isArchived = false,
  onArchive,
  onRestore,
  onHide,
}) => {
  const avatarUrl = `https://picsum.photos/id/${user.id}/112/120`;

  const menuItems = isArchived
    ? [{ label: "Активировать", onClick: () => onRestore?.(user.id) }]
    : [
        { label: "Редактировать", to: `/edit/${user.id}` },
        { label: "Архивировать", onClick: () => onArchive?.(user.id) },
        {
          label: "Скрыть",
          onClick: () => onHide?.(user.id),
          variant: "danger",
        },
      ];

  return (
    <div className={`${styles.card} ${isArchived ? styles.archived : ""}`}>
      <div className={styles.cardInner}>
        <div className={styles.top}>
          <div className={styles.avatarWrapper}>
            <img
              src={avatarUrl}
              alt={user.username}
              className={styles.avatar}
            />
          </div>
          <MenuButton items={menuItems} />
        </div>
        <div className={styles.info}>
          <div className={styles.headerRow}>
            <h3 className={styles.username}>{user.username}</h3>
          </div>
          <p className={styles.company}>{user.company.name}</p>
          <p className={styles.city}>{user.address.city}</p>
        </div>
      </div>
    </div>
  );
};
