import React from "react";
import styles from "./ProfileSidebar.module.scss";

interface ProfileSidebarProps {
  avatarUrl: string;
}

export const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  avatarUrl,
}) => {
  const menuItems = [
    { name: "Данные профиля", active: true },
    { name: "Рабочее пространство", active: false },
    { name: "Приватность", active: false },
    { name: "Безопасность", active: false },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatarWrapper}>
        <img src={avatarUrl} alt="avatar" className={styles.avatar} />
      </div>
      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.name}>
            <div className={styles.menuItem}>
              <span className={item.active ? styles.active : styles.inactive}>
                {item.name}
              </span>
            </div>
            <div className={styles.divider} />
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
};
