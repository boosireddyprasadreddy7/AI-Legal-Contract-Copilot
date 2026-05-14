"use client"

import { useState } from "react"

import axios from "axios"

import { Button } from "@/components/ui/button"

export default function UploadPage() {
  const [file, setFile] =
    useState<File | null>(null)

  const [message, setMessage] =
    useState("")

  const handleUpload = async () => {
    if (!file) return

    const formData = new FormData()

    formData.append("file", file)

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload-contract",
        formData
      )

      setMessage(response.data.message)

    } catch (error) {
      setMessage("Upload failed")
    }
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-10">
        Upload Contract
      </h1>

      <div className="space-y-6">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] || null
            )
          }
        />

        <Button onClick={handleUpload}>
          Upload PDF
        </Button>

        {message && (
          <p className="text-lg">
            {message}
          </p>
        )}
      </div>
    </main>
  )
}