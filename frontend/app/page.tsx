import Navbar from "@/components/layout/Navbar"

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

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </main>
  )
}