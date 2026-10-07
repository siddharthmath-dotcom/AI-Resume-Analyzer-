import { useState } from 'react'

function Analyze() {
  const [file, setFile] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload a resume first")
      return
    }

    setIsAnalyzing(true)

    // Temporary fake result (later we will connect real AI)
    setTimeout(() => {
      setResult({
        score: 78,
        strengths: [
          "Good use of action verbs",
          "Relevant technical skills listed",
          "Clear project descriptions"
        ],
        weaknesses: [
          "Missing quantifiable achievements",
          "Summary section is too generic",
          "Some important keywords are missing"
        ],
        suggestions: [
          "Add numbers and metrics in experience (e.g. Increased performance by 30%)",
          "Write a stronger professional summary",
          "Include more job-specific keywords"
        ]
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">AI Resume Analyzer</h1>
        <p className="text-center text-gray-600 mb-8">
          Upload your resume and get instant AI-powered feedback
        </p>

        {/* Upload Box */}
        <div className="bg-white p-8 rounded-xl shadow-md text-center mb-8">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mb-4"
          />

          {file && (
            <p className="text-sm text-gray-600 mb-4">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
          )}

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
            {/* Score */}
            <div className="text-center">
              <p className="text-gray-600 mb-1">Your Resume Score</p>
              <p className="text-5xl font-bold text-blue-600">{result.score}/100</p>
            </div>

            {/* Strengths */}
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Strengths</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {result.strengths.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-2">Weaknesses</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {result.weaknesses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Suggestions */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Suggestions</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {result.suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Analyze