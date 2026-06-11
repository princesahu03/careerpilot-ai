import { useState } from "react";
import { askGemini } from "../services/gemini";

function ResumeAnalyzer() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    if (resume.trim().length < 50) {
    setResult("Please paste a complete resume.");
    return;
    }

    setResult("");
    setLoading(true);

    const prompt = `
You are an expert career coach.

Analyze the following resume and provide:

1. Resume Score out of 100
2. Strengths
3. Weaknesses
4. Missing Skills
5. Suggestions for Improvement

Resume:
${resume}
`;

    try {
      const response = await askGemini(prompt);
      setResult(response);
    } catch (error) {
      setResult("Unable to analyze resume. Please try again.");
      console.error(error);
    }

    setLoading(false);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    alert("Result copied successfully!");
  };

  return (
    <div className="page">
      <h1>📄 Resume Analyzer</h1>

      <textarea
        placeholder="Paste your resume here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <button
        className="btn"
        onClick={analyzeResume}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {loading && (
        <p style={{ marginTop: "20px" }}>
          🤖 AI is analyzing your resume...
        </p>
      )}

      {result && (
        <div className="result-box">
          <pre>{result}</pre>

          <button
            className="btn"
            onClick={copyResult}
            style={{ marginTop: "15px" }}
          >
            📋 Copy Result
          </button>
        </div>
      )}
    </div>
  );
}

export default ResumeAnalyzer;