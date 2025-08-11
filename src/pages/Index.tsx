import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import CountdownTimer from "@/components/home/CountdownTimer";
import YouTubePlaylist from "@/components/home/YouTubePlaylist";
import ImpactStoriesPreview from "@/components/home/ImpactStoriesPreview";
import NewsEvents from "@/components/home/NewsEvents";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSlider />
        <AboutSection />
        <CountdownTimer />
        <YouTubePlaylist />
        <ImpactStoriesPreview />
        <NewsEvents />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
