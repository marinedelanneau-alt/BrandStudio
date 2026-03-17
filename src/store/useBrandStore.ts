"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Primitive = string | boolean;

type BrandStoreState = {
  mission: string;
  vision: string;
  values: string[];
  promise: string;
  fields: Record<string, Primitive>;
  currentStep: Record<string, number>;
  hydrated: boolean;
  updateField: (field: string, value: Primitive) => void;
  setCurrentStep: (moduleId: string, step: number) => void;
  setHydrated: (value: boolean) => void;
  reset: () => void;
};

const initialState = {
  mission: "",
  vision: "",
  values: ["", "", ""],
  promise: "",
  fields: {},
  currentStep: {
    vision: 0,
    positioning: 0,
    tone: 0,
  },
  hydrated: false,
};

function deriveState(state: BrandStoreState, field: string, value: Primitive) {
  const derived = {
    mission: state.mission,
    vision: state.vision,
    values: [...state.values],
    promise: state.promise,
  };

  if (field === "mission" && typeof value === "string") derived.mission = value;
  if (field === "vision" && typeof value === "string") derived.vision = value;
  if (field === "promise" && typeof value === "string") derived.promise = value;

  if (field.startsWith("value-") && typeof value === "string") {
    const index = Number(field.split("-")[1]);
    if (!Number.isNaN(index)) derived.values[index] = value;
  }

  return derived;
}

export const useBrandStore = create<BrandStoreState>()(
  persist(
    (set) => ({
      ...initialState,
      updateField: (field, value) =>
        set((state) => ({
          fields: {
            ...state.fields,
            [field]: value,
          },
          ...deriveState(state, field, value),
        })),
      setCurrentStep: (moduleId, step) =>
        set((state) => ({
          currentStep: {
            ...state.currentStep,
            [moduleId]: step,
          },
        })),
      setHydrated: (value) => set({ hydrated: value }),
      reset: () => set(initialState),
    }),
    {
      name: "brand-studio-saas",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        mission: state.mission,
        vision: state.vision,
        values: state.values,
        promise: state.promise,
        fields: state.fields,
        currentStep: state.currentStep,
      }),
      onRehydrateStorage: () => (state) => state?.setHydrated(true),
    }
  )
);
