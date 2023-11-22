import { create } from "zustand";

export const useAppStore = create((products) => ({

  setproducts: (products) => set({ products  }),

}));
