import PromotionBanner from './sections/PromotionBanner';
import MainHeader from './sections/MainHeader';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';

const Header = () => {
  return (
    <header className="bg-background w-full">
      {/* Promotional Banner */}
      <PromotionBanner />

      {/* Main Header */}
      <MainHeader />

      {/* Category Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

    </header>
  );
};

export default Header;
