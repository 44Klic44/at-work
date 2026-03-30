import React from "react";
import type { User } from "@/types";

import { UserCard } from "../UserCard/UserCard";
import styles from "./UserList.module.scss";

interface UserListProps {
  users: User[];
  isArchived?: boolean;
  onArchive?: (id: number) => void;
  onRestore?: (id: number) => void;
  onHide?: (id: number) => void;
}

export const UserList: React.FC<UserListProps> = ({
  users,
  isArchived = false,
  onArchive,
  onRestore,
  onHide,
}) => {
  if (users.length === 0) return null;

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          isArchived={isArchived}
          onArchive={onArchive}
          onRestore={onRestore}
          onHide={onHide}
        />
      ))}
    </div>
  );
};
