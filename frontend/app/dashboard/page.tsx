import Navbar from "@/components/layout/Navbar"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="p-10">
        <h1 className="text-5xl font-bold">
          Dashboard
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Welcome to your AI legal workspace.
        </p>
      </section>
    </main>
  )
}