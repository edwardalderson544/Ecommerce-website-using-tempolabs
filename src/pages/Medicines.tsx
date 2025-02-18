import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import MobileNav from "@/components/navigation/MobileNav";
import ProductCard from "@/components/products/ProductCard";
import { getMedicines, type Medicine } from "@/services/medicines";

const MedicinesPage = () => {
  const [medicines, setMedicines] = React.useState<Medicine[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadMedicines = async () => {
      try {
        const data = await getMedicines();
        setMedicines(data);
      } catch (error) {
        console.error("Error loading medicines:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMedicines();
  }, []);

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Navbar />
      <main className="pt-[72px] max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">All Medicines</h1>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicines.map((medicine) => (
              <ProductCard
                key={medicine.id}
                image={medicine.image}
                name={medicine.name}
                price={medicine.price}
                description={medicine.description}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default MedicinesPage;
