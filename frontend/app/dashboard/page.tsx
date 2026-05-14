"use client"

import Navbar from "@/components/layout/Navbar"

import useProtectedRoute from "@/hooks/useProtectedRoute"

import { Button } from "@/components/ui/button"

import { useRouter } from "next/navigation"

export default function DashboardPage() {
  useProtectedRoute()

  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token")

    router.push("/login")
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="p-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold">
              Dashboard
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Welcome to your AI legal workspace.
            </p>
          </div>

          <Button
            variant="destructive"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </section>
    </main>
  )
}