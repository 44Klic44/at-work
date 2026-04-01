import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/Layout/Layout";
import { BackButton } from "../../components/common/BackButton/BackButton";
import { ProfileSidebar } from "../../components/profile/ProfileSidebar/ProfileSidebar";
import { ProfileForm } from "../../components/profile/ProfileForm/ProfileForm";
import { SuccessPopup } from "../../components/common/SuccessPopup/SuccessPopup";
import { Loader } from "../../components/common/Loader/Loader";
import { useUser } from "../../hooks/useUser";
import { useUserStore } from "../../store/userStore";
import type { UserFormSchema } from "../../utils/validation";
import styles from "./Edit.module.scss";

const Edit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userId = Number(id);
  const { data: user, isLoading, error } = useUser(userId);
  const { updateUser } = useUserStore();
  const [showPopup, setShowPopup] = useState(false);

  const handleBack = () => navigate("/");

  const handleSubmit = (data: UserFormSchema) => {
    const updatedUser = {
      name: data.name,
      username: data.username,
      email: data.email,
      address: { city: data.city },
      phone: data.phone,
      company: { name: data.companyName },
    };
    updateUser(userId, updatedUser);
    setShowPopup(true);
  };

  if (isLoading) return <Loader />;
  if (error || !user) return <div>Ошибка загрузки</div>;

  const defaultValues: UserFormSchema = {
    name: user.name,
    username: user.username,
    email: user.email,
    city: user.address.city,
    phone: user.phone.replace(/\D/g, ""),
    companyName: user.company.name,
  };

  const avatarUrl = `https://picsum.photos/id/${user.id}/280/485`;

  return (
    <Layout className={styles.editLayout}>
      <div className={styles.edit}>
        <div className={styles.backRow}>
          <BackButton onClick={handleBack} />
        </div>
        <div className={styles.columns}>
          <ProfileSidebar avatarUrl={avatarUrl} />
          <ProfileForm defaultValues={defaultValues} onSubmit={handleSubmit} />
        </div>
        {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
      </div>
    </Layout>
  );
};

export default Edit;
