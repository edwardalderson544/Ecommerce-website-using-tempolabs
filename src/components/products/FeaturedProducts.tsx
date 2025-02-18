import React from "react";
import ProductCard from "./ProductCard";
import { getMedicines, type Medicine } from "@/services/medicines";

interface FeaturedProductsProps {
  products?: Medicine[];
}

const FeaturedProducts = ({
  products: initialProducts,
}: FeaturedProductsProps) => {
  const [products, setProducts] = React.useState<Medicine[]>(
    initialProducts || [],
  );
  const [loading, setLoading] = React.useState(!initialProducts);

  React.useEffect(() => {
    if (!initialProducts) {
      const loadProducts = async () => {
        try {
          const data = await getMedicines();
          setProducts(data);
        } catch (error) {
          console.error("Error loading products:", error);
        } finally {
          setLoading(false);
        }
      };

      loadProducts();
    }
  }, [initialProducts]);

  if (loading) {
    return (
      <div className="w-full max-w-[1200px] mx-auto py-12 px-4 bg-gray-50">
        <div className="text-center">Loading products...</div>
      </div>
    );
  }
  return (
    <section className="w-full max-w-[1200px] mx-auto py-12 px-4 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our selection of high-quality medicines and healthcare
          products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            onAddToCart={() => console.log(`Added ${product.name} to cart`)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
