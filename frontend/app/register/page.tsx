"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { registerUser } from "@/services/authService"

export default function RegisterPage() {
  const router = useRouter()

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")

  const handleRegister = async () => {
    try {
      setLoading(true)

      setError("")

      await registerUser(
        name,
        email,
        password
      )

      router.push("/login")

    } catch (err: any) {
      setError(
        err.response?.data?.detail ||
        "Registration failed"
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Create Account
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <Button
            className="w-full"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading
              ? "Creating account..."
              : "Register"}
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}