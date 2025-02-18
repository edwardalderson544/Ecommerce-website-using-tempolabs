import { supabase, MOCK_MEDICINES } from "@/lib/supabase";
import type { Database } from "@/types/supabase";

export type Medicine = Database["public"]["Tables"]["medicines"]["Row"];

export const getMedicines = async (
  searchTerm?: string,
): Promise<Medicine[]> => {
  // If Supabase is not configured, filter mock data
  if (!import.meta.env.VITE_SUPABASE_URL) {
    if (!searchTerm) return MOCK_MEDICINES;
    const lowercaseSearch = searchTerm.toLowerCase();
    return MOCK_MEDICINES.filter(
      (medicine) =>
        medicine.name.toLowerCase().includes(lowercaseSearch) ||
        medicine.description.toLowerCase().includes(lowercaseSearch) ||
        medicine.category.toLowerCase().includes(lowercaseSearch),
    );
  }

  try {
    let query = supabase.from("medicines").select("*");

    if (searchTerm) {
      query = query.or(
        `name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,category.ilike.%${searchTerm}%`,
      );
    }

    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.warn("Falling back to mock data:", error);
    return MOCK_MEDICINES;
  }
};

export const getMedicineById = async (id: string): Promise<Medicine | null> => {
  const { data, error } = await supabase
    .from("medicines")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
};

export const createMedicine = async (
  medicine: Omit<Medicine, "id" | "created_at" | "updated_at">,
): Promise<Medicine> => {
  const { data, error } = await supabase
    .from("medicines")
    .insert([medicine])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateMedicine = async (
  id: string,
  updates: Partial<Medicine>,
): Promise<Medicine> => {
  const { data, error } = await supabase
    .from("medicines")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteMedicine = async (id: string): Promise<void> => {
  const { error } = await supabase.from("medicines").delete().eq("id", id);

  if (error) throw error;
};
