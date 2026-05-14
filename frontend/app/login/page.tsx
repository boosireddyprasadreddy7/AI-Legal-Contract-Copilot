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

import { loginUser } from "@/services/authService"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState("")

  const handleLogin = async () => {
    try {
      setLoading(true)

      setError("")

      const response = await loginUser(
        email,
        password
      )

      localStorage.setItem(
        "token",
        response.access_token
      )

      router.push("/dashboard")

    } catch (err: any) {
      setError(
        err.response?.data?.detail ||
        "Login failed"
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
            Login
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
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
            placeholder="Enter your password"
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
            onClick={handleLogin}
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}