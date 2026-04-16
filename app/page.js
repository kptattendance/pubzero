import CTASection from "./components/home/CTASection";
import FeaturedMenu from "./components/home/FeaturedMenu";
import GalleryPreview from "./components/home/GalleryPreview";
import Hero from "./components/home/Hero";
import SignatureStrip from "./components/home/SignatureStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureStrip />
      <FeaturedMenu />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
