import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout/Layout/Layout";
import { UserList } from "../../components/user/UserList/UserList";
import { useUsers } from "../../hooks/useUser";
import { useUserStore } from "../../store/userStore";
import { Loader } from "../../components/common/Loader/Loader";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  const { data, isLoading, error } = useUsers();
  const {
    activeUsers,
    archivedUsers,
    setUsers,
    archiveUser,
    restoreUser,
    hideUser,
  } = useUserStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (data && !initialized) {
      setUsers(data);
      setInitialized(true);
    }
  }, [data, setUsers, initialized]);

  if (isLoading) return <Loader />;
  if (error)
    return <div className={styles.error}>Ошибка загрузки пользователей</div>;

  return (
    <Layout>
      <div className={styles.home}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Активные</h2>
          <div className={styles.divider}></div>
          <div className={styles.listWrapper}>
            <UserList
              users={activeUsers}
              onArchive={archiveUser}
              onHide={hideUser}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Архив</h2>
          <div className={styles.divider}></div>
          <div className={styles.listWrapper}>
            <UserList
              users={archivedUsers}
              isArchived
              onRestore={restoreUser}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
