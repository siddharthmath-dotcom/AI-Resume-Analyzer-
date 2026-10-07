function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Resume Analyzer & Job Match
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Upload your resume, get an AI score, and find the best matching jobs instantly.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/analyze" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Analyze Resume
          </a>
          <a href="/register" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Get Started
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">AI Resume Score</h3>
          <p className="text-gray-600">Get a detailed score out of 100 with strengths and weaknesses.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">Smart Job Matching</h3>
          <p className="text-gray-600">Find jobs that best match your skills and experience.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="text-xl font-bold mb-2">Improvement Tips</h3>
          <p className="text-gray-600">Get clear suggestions to make your resume stronger.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
