function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-gray-600 mb-8">Here’s an overview of your resume and job matches.</p>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Resume Score</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">78/100</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Jobs Matched</p>
            <p className="text-3xl font-bold text-green-600 mt-1">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Applications</p>
            <p className="text-3xl font-bold text-purple-600 mt-1">3</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex justify-between border-b pb-2">
              <span>Resume analyzed</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Matched with Frontend Developer job</span>
              <span className="text-sm text-gray-500">Yesterday</span>
            </li>
            <li className="flex justify-between">
              <span>Applied to React Developer role</span>
              <span className="text-sm text-gray-500">2 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard