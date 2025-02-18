import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload } from "lucide-react";

interface HeroSectionProps {
  onSearch?: (searchTerm: string) => void;
  onShopNow?: () => void;
  onUploadPrescription?: () => void;
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  onSearch = () => console.log("Search clicked"),
  onShopNow = () => console.log("Shop now clicked"),
  onUploadPrescription = () => console.log("Upload prescription clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1600&auto=format&fit=crop&q=60",
  title = "Your Health, Our Priority",
  subtitle = "Find and order your medicines with ease",
}: HeroSectionProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <div className="relative w-full h-[500px] bg-gray-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Pharmacy Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-white/90 mb-8">{subtitle}</p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl mb-8">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search medicines..."
                className="w-full h-12 pl-12 bg-white/95 text-gray-900 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Search
            </Button>
          </div>
        </form>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={onShopNow}
            className="bg-white text-primary hover:bg-white/90 px-8"
          >
            Shop Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onUploadPrescription}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8"
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload Prescription
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
