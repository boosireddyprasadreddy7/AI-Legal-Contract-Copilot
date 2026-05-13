import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/common/HeroSection"
import FeaturesSection from "@/components/common/FeaturesSection"
import Footer from "@/components/common/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <HeroSection />

      <FeaturesSection />

      <Footer />
    </main>
  )
}