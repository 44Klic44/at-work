# At-Work – Тестовое задание Frontend

Двухстраничное приложение на React с TypeScript, Zustand, React Query, React Hook Form + Zod, SCSS.

### Функционал

- **Главная страница**  
  – Загрузка первых 6 пользователей с JSONPlaceholder  
  – Карточки: аватар, username, город, компания  
  – Действия: редактировать, архивировать, скрыть (восстановить из архива)  
  – Данные сбрасываются после перезагрузки

- **Страница редактирования**  
  – Загрузка данных выбранного пользователя  
  – Форма с валидацией (имя, никнейм, почта, город, телефон (только цифры), компания)  
  – Кнопка «Сохранить» активна только при валидных данных  
  – После сохранения – попап с сообщением, закрывается по крестику, клику на подложку или через 4 секунды  
  – Изменения не сохраняются после перезагрузки

### Технологии

React, TypeScript, Zustand, TanStack Query, React Hook Form, Zod, React Router v7, SCSS, Vite.

### Деплой

- GitHub: https://github.com/44Klic44/at-work
- Демо: https://at-work-sq86.vercel.app

### Локальный запуск

```bash
git clone https://github.com/44Klic44/at-work.git
cd at-work
npm install
npm run dev
```

Примечание: API JSONPlaceholder может требовать VPN в России.
