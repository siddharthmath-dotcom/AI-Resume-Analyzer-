import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">ResumeAI</Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/analyze" className="hover:underline">Analyze</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link 
          to="/register" 
          className="bg-white text-blue-600 px-4 py-1.5 rounded-lg font-medium hover:bg-gray-100"
        >
          Register
        </Link>
      </div>
    </nav>
  )
}

export default Navbar