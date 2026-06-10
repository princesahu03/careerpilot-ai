import { useState } from "react";

function ResumeAnalyzer() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState("");

  const analyzeResume = () => {
    setResult(`
Resume Score: 80/100

Strengths:
✔ JavaScript
✔ React

Suggestions:
✔ Add Projects
✔ Add Internship Experience
    `);
  };

  return (
    <div className="page">
      <h1>Resume Analyzer</h1>

      <textarea
        className="textarea"
        placeholder="Paste your resume here..."
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <br /><br />

      <button className="btn" onClick={analyzeResume}>
        Analyze Resume
      </button>

      {result && (
        <div className="result-box">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default ResumeAnalyzer;