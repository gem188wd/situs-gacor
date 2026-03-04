import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GameCategories from "@/components/GameCategories";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GameCategories />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
