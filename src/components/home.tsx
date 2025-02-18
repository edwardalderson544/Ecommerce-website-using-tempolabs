import React from "react";
import Navbar from "./navigation/Navbar";
import MobileNav from "./navigation/MobileNav";
import HeroSection from "./home/HeroSection";
import FeaturedProducts from "./products/FeaturedProducts";
import Footer from "./navigation/Footer";

interface HomePageProps {
  onSearch?: (searchTerm: string) => void;
  onShopNow?: () => void;
  onUploadPrescription?: () => void;
  featuredProducts?: Array<{
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
  }>;
}

const HomePage = ({
  onSearch = (searchTerm) => console.log("Search:", searchTerm),
  onShopNow = () => console.log("Shop now clicked"),
  onUploadPrescription = () => console.log("Upload prescription clicked"),
  featuredProducts = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800",
      name: "Pain Relief Tablets",
      price: 29.99,
      description: "Fast-acting pain relief medication for various conditions",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
      name: "Vitamin C Complex",
      price: 19.99,
      description: "Immune system support with essential vitamins",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800",
      name: "Allergy Relief",
      price: 24.99,
      description: "24-hour protection against seasonal allergies",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800",
      name: "Digestive Health",
      price: 34.99,
      description: "Probiotic supplement for digestive wellness",
    },
  ],
}: HomePageProps) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Navbar />
      <main className="pt-[72px]">
        <HeroSection
          onSearch={onSearch}
          onShopNow={onShopNow}
          onUploadPrescription={onUploadPrescription}
        />
        <FeaturedProducts products={featuredProducts} />
      </main>
      <Footer />
      <MobileNav
        onSearchClick={() => setIsSearchOpen(true)}
        onConsultClick={() => console.log("Consult clicked")}
      />
    </div>
  );
};

export default HomePage;
