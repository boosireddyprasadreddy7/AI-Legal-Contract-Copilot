export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        AI Legal Copilot
      </h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>
    </nav>
  )
}