import { create } from "zustand";
import type { User } from "@/types";

interface UserStore {
  activeUsers: User[];
  archivedUsers: User[];
  setUsers: (users: User[]) => void;
  archiveUser: (id: number) => void;
  restoreUser: (id: number) => void;
  hideUser: (id: number) => void;
  updateUser: (id: number, updatedData: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  activeUsers: [],
  archivedUsers: [],
  setUsers: (users) => set({ activeUsers: users.slice(0, 6) }),
  archiveUser: (id) =>
    set((state) => {
      const user = state.activeUsers.find((u) => u.id === id);
      if (!user) return state;
      return {
        activeUsers: state.activeUsers.filter((u) => u.id !== id),
        archivedUsers: [...state.archivedUsers, user],
      };
    }),
  restoreUser: (id) =>
    set((state) => {
      const user = state.archivedUsers.find((u) => u.id === id);
      if (!user) return state;
      return {
        archivedUsers: state.archivedUsers.filter((u) => u.id !== id),
        activeUsers: [...state.activeUsers, user],
      };
    }),
  hideUser: (id) =>
    set((state) => ({
      activeUsers: state.activeUsers.filter((u) => u.id !== id),
      archivedUsers: state.archivedUsers.filter((u) => u.id !== id),
    })),
  updateUser: (id, updatedData) =>
    set((state) => ({
      activeUsers: state.activeUsers.map((u) =>
        u.id === id ? { ...u, ...updatedData } : u,
      ),
      archivedUsers: state.archivedUsers.map((u) =>
        u.id === id ? { ...u, ...updatedData } : u,
      ),
    })),
}));
