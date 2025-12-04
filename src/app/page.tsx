import Navigation from "../../components/Navigation";
import HeroSection from "../../components/HeroSection";
import MissionSection from "../../components/MissionSection";
import IntroSection from "../../components/IntroSection";
import BooksSection from "../../components/BooksSection";
import GlobalSection from "../../components/GlobalSection";
import AboutSection from "../../components/AboutSection";
import NewsletterSection from "../../components/NewsletterSection";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <IntroSection />
      <BooksSection />
      <GlobalSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
