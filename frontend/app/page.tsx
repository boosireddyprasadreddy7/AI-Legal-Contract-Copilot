import Navbar from "@/components/layout/Navbar"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          AI Legal Contract Copilot
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Analyze legal contracts instantly using AI-powered risk detection,
          summarization, and clause extraction.
        </p>

        <Button className="mt-8">
          Get Started
        </Button>
      </section>
    </main>
  )
}