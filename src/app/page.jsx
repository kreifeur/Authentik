import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import HeroSection from "./components/HeroSection";
import imagesrc from "@/assets/coverscreen.jpg";
import FeaturesSection from "./components/FeaturesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${imagesrc.src})` }}
        className="bg-cover bg-center "
      >
        <div className="text-white bg-[rgba(0,0,0,0.7)]">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <FeaturesSection/>
      <ContactSection/>
      <Footer />
    </div>
  );
}
