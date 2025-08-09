"use client";
import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface ILanguageStore {
  language: "ua" | "eng";
  switchLanguage: () => void;
}

const localMiddlewares = (f: StateCreator<ILanguageStore>) =>
  devtools(
    persist(f, {
      name: "language",
      storage: createJSONStorage(() => localStorage),
    }),
  );

export const useLanguageStore = create<ILanguageStore>()(
  localMiddlewares((set, get) => ({
    language: "ua",
    switchLanguage: () => {
      set({
        language: get().language === "ua" ? "eng" : "ua",
      });
    },
  }))
);

