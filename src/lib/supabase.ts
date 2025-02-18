import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

// For development, use mock data if Supabase is not configured
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://mock.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "mock-key";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Mock data for development
export const MOCK_MEDICINES = [
  {
    id: "1",
    name: "Pain Relief Tablets",
    description: "Fast-acting pain relief medication",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800",
    category: "Pain Relief",
    inStock: true,
    requiresPrescription: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Vitamin C Complex",
    description: "Immune system support",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
    category: "Vitamins",
    inStock: true,
    requiresPrescription: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
