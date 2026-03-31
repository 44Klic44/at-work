import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../../utils/validation";
import type { UserFormSchema } from "../../../utils/validation"; // import type
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import styles from "./ProfileForm.module.scss";

interface ProfileFormProps {
  defaultValues: UserFormSchema;
  onSubmit: (data: UserFormSchema) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  defaultValues,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(userSchema),
    defaultValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Данные профиля</h2>
      <div className={styles.divider} />
      <div className={styles.fields}>
        <Input label="Имя" {...register("name")} error={errors.name?.message} />
        <Input
          label="Никнейм"
          {...register("username")}
          error={errors.username?.message}
        />
        <Input
          label="Почта"
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          label="Город"
          {...register("city")}
          error={errors.city?.message}
        />
        <Input
          label="Телефон"
          {...register("phone")}
          error={errors.phone?.message}
          inputMode="numeric"
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            e.target.value = value;
            register("phone").onChange(e);
          }}
        />
        <Input
          label="Название компании"
          {...register("companyName")}
          error={errors.companyName?.message}
        />
      </div>
      <Button type="submit" disabled={!isValid} className={styles.submit}>
        Сохранить
      </Button>
    </form>
  );
};
