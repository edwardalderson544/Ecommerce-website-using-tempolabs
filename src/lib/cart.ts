import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "./supabase";
import type { Medicine } from "@/types";

interface CartItem {
  medicineId: string;
  quantity: number;
  medicine: Medicine;
}

interface CartStore {
  items: CartItem[];
  addItem: (medicine: Medicine, quantity?: number) => void;
  removeItem: (medicineId: string) => void;
  updateQuantity: (medicineId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>(
  persist(
    (set, get) => ({
      items: [],
      addItem: (medicine: Medicine, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.medicineId === medicine.id,
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.medicineId === medicine.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              { medicineId: medicine.id, quantity, medicine },
            ],
          };
        });
      },
      removeItem: (medicineId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.medicineId !== medicineId),
        }));
      },
      updateQuantity: (medicineId: string, quantity: number) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.medicineId === medicineId ? { ...item, quantity } : item,
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      get total() {
        return get().items.reduce(
          (sum, item) => sum + item.medicine.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
