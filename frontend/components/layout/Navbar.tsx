"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null

  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          AI Legal Copilot
        </h1>
      </Link>

      <div className="flex gap-4">
        {token ? (
          <Link href="/dashboard">
            <Button>
              Dashboard
            </Button>
          </Link>

        ) : (
          <>
            <Link href="/login">
              <Button variant="outline">
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button>
                Register
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}