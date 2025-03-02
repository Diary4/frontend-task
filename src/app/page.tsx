import Header from "@/app/components/ui/Header";
import HeroSection from "@/app/components/ui/HeroSection";
import ProductCategories from "@/app/components/ProductCategories";
import DealsSection from "@/app/components/DealsSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="text-black bg-gray-100 flex flex-row justify-center items-center sm:py-4 sm:px-10">
        <div className="bg-white w-full rounded-lg pb-4">
          <HeroSection />
          <ProductCategories />
          <DealsSection />
        </div>
      </div>
    </div>
  );
}
