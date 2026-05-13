import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Create Account
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input type="text" placeholder="Enter your name" />

          <Input type="email" placeholder="Enter your email" />

          <Input type="password" placeholder="Create password" />

          <Button className="w-full">
            Register
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}