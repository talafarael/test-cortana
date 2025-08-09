"use client";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { IUserProfile } from "../model";
import { getUserApi } from "../api/get-user-api";
import { handlerError } from "@/shared";

export interface IUserStore {
  user: IUserProfile | undefined;
  error: string | undefined;
  loading: boolean;
  getUser: () => Promise<void>;
  removeUser: () => void
}

const localMiddlewares = (f: StateCreator<IUserStore>) =>
  devtools(
    persist(f, {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }),
  );

export const useUserStore = create<IUserStore>()(
  localMiddlewares((set) => ({
    user: undefined,
    loading: false,
    error: undefined,
    getUser: async () => {
      set(() => ({ error: undefined }));
      set(() => ({ loading: true }));
      try {

        const res = await getUserApi();
        console.log(res?.data?.user)
        if (res?.data?.user)
          set({ user: res.data.user, loading: false, error: undefined });
      } catch (e) {
        const errMessagehandlerError = handlerError(e);
        set({ loading: false, user: undefined, error: errMessagehandlerError });
      }
    },
    removeUser: () => set({ user: undefined }),
  })),
);
