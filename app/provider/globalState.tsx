import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type AppUser = {
    name: string;
    email: string;
};

type IGlobalStateType = {
    user: AppUser | null;
    setUser: (user: AppUser) => void;
    logout: () => void;
};

export const useGlobalState = create<IGlobalStateType>()(
    persist(
        (set, _get) => ({
            user: null,
            setUser: (user) => set({ user }),

            logout: () =>
                set(() => {
                    return { user: null };
                }),
        }),
        {
            name: "global-storage",
            partialize: (state) => ({
                user: state.user,
            }),
        },
    ),
);
