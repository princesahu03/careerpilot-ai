import { useState } from "react";
import { askGemini } from "../services/gemini";

function ResumeAnalyzer() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    if (!resume) {
      setResult("Please paste your resume.");
      return;
    }

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

    const response = await askGemini(prompt);

    setResult(response);
    setLoading(false);
  };

  return (
    <div className="page">
      <h1>📄 Resume Analyzer</h1>

      <textarea
        className="textarea"
        placeholder="Paste your resume here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <br />
      <br />

      <button className="btn" onClick={analyzeResume}>
        Analyze Resume
      </button>

      {loading && (
        <p style={{ marginTop: "20px" }}>
          🤖 AI is analyzing your resume...
        </p>
      )}

      {result && (
        <div className="result-box">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {result}
          </pre>
        </div>
      )}
    </div>
  );
}

export default ResumeAnalyzer;