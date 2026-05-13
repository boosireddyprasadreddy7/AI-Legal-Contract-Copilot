import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[85vh] px-6">
      <h1 className="text-6xl md:text-7xl font-bold text-blue-600 max-w-5xl leading-tight">
        AI-Powered Legal Contract Analysis
      </h1>

      <p className="mt-8 text-xl text-gray-600 max-w-3xl">
        Upload contracts instantly and get AI-generated summaries,
        clause extraction, and risk analysis in seconds.
      </p>

      <div className="mt-10 flex gap-4">
        <Button size="lg">
          Get Started
        </Button>

        <Button variant="outline" size="lg">
          Learn More
        </Button>
      </div>
    </section>
  )
}