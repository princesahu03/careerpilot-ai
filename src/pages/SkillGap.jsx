import { useState } from "react";

function SkillGap() {
  const [skill, setSkill] = useState("");
  const [result, setResult] = useState([]);

  const analyzeSkill = () => {
    if (!skill) {
      alert("Enter your target role");
      return;
    }

    const roadmap = [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Git & GitHub",
      "Node.js",
      "Projects & Portfolio",
      "Interview Preparation",
    ];

    setResult(roadmap);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>📈 Skill Gap Analysis</h1>

      <input
        type="text"
        placeholder="Target Role (e.g. Frontend Developer)"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button
        onClick={analyzeSkill}
        style={{ marginLeft: "10px" }}
      >
        Analyze
      </button>

      <ul>
        {result.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillGap;