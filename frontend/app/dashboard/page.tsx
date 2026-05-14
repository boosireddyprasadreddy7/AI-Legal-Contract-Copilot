"use client"

import { useEffect, useState } from "react"

import axios from "axios"

import Navbar from "@/components/layout/Navbar"

type Contract = {
  id: number
  filename: string
  file_path: string
  uploaded_by: string
}

export default function DashboardPage() {

  const [contracts, setContracts] =
    useState<Contract[]>([])

  useEffect(() => {
    fetchContracts()
  }, [])

  const fetchContracts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/contracts"
      )

      setContracts(response.data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="p-10">
        <h1 className="text-5xl font-bold mb-10">
          Your Contracts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {contracts.map((contract) => (
            <div
              key={contract.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-bold">
                {contract.filename}
              </h2>

              <p className="text-gray-600 mt-2">
                Uploaded By:
                {" "}
                {contract.uploaded_by}
              </p>
            </div>
          ))}

        </div>
      </section>
    </main>
  )
}