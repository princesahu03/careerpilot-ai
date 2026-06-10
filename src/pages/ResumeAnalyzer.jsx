import { useState } from "react";

function ResumeAnalyzer() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState("");

  const analyzeResume = () => {
    if (!resume) {
      setResult("Please paste your resume.");
      return;
    }

    setResult(
      "AI Analysis: Your resume looks good. Add more projects, achievements, and measurable results."
    );
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>📄 Resume Analyzer</h1>

      <textarea
        rows="12"
        cols="80"
        placeholder="Paste your resume here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <br />
      <br />

      <button onClick={analyzeResume}>
        Analyze Resume
      </button>

      <p style={{ marginTop: "20px" }}>
        {result}
      </p>
    </div>
  );
}

export default ResumeAnalyzer;