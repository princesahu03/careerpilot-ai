import { useState } from "react";
import { askGemini } from "../services/gemini";

function SkillGap() {
  const [role, setRole] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeSkill = async () => {
    if (role.trim().length < 3) {
    alert("Please enter a valid role");
    return;
  }

    setResult("");
    setLoading(true);

    const prompt = `
You are an expert career mentor.

Create a complete skill roadmap for becoming a ${role}.

Include:

1. Required Skills
2. Tools & Technologies
3. Learning Path (Beginner to Advanced)
4. Recommended Projects
5. Interview Preparation Tips

Format the answer clearly with headings and bullet points.
`;

    try {
      const response = await askGemini(prompt);
      setResult(response);
    } catch (error) {
      console.error(error);
      setResult("Error generating roadmap.");
    }

    setLoading(false);
  };

  const copyRoadmap = () => {
    navigator.clipboard.writeText(result);
    alert("Roadmap copied successfully!");
  };

  const clearData = () => {
    setRole("");
    setResult("");
  };

  return (
    <div className="page">
      <h1>📈 AI Skill Gap Analysis</h1>

      <input
        type="text"
        placeholder="Target Role (Frontend Developer, Data Analyst...)"
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
          setResult("");
        }}
      />

      <button
        className="btn"
        onClick={analyzeSkill}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {loading && (
        <p style={{ marginTop: "20px" }}>
          🤖 AI is creating your roadmap...
        </p>
      )}

      {result && (
        <div className="result-box">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {result}
          </pre>

          <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
            <button className="btn" onClick={copyRoadmap}>
              📋 Copy
            </button>

            <button className="btn" onClick={clearData}>
              🗑 Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillGap;