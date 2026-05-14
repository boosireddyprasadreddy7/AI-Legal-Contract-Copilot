"use client"

import { useEffect } from "react"

import { useRouter } from "next/navigation"

export default function useProtectedRoute() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      router.push("/login")
    }

  }, [router])
}