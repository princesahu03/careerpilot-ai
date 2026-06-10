import { useState } from "react";

function InterviewPrep() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState([]);

  const generateQuestions = () => {
    if (!role) {
      alert("Enter a job role");
      return;
    }

    const sampleQuestions = [
      `Tell me about yourself as a ${role}.`,
      `Why do you want to become a ${role}?`,
      `What are your strengths?`,
      `Describe a challenging project you worked on.`,
      `Why should we hire you?`,
    ];

    setQuestions(sampleQuestions);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>🎤 Interview Prep</h1>

      <input
        type="text"
        placeholder="Enter Job Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button
        onClick={generateQuestions}
        style={{ marginLeft: "10px" }}
      >
        Generate Questions
      </button>

      <ul>
        {questions.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </ul>
    </div>
  );
}

export default InterviewPrep;