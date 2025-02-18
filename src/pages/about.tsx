import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import MobileNav from "@/components/navigation/MobileNav";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      <Navbar />
      <main className="pt-[72px] max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Welcome to PharmaCare Plus, your trusted online pharmacy
            destination.
          </p>
          {/* Add more content here */}
        </div>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default AboutPage;
