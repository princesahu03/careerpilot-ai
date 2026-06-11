import { useState } from "react";
import { askGemini } from "../services/gemini";

function InterviewPrep() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!role) {
      alert("Enter a job role");
      return;
    }

    setQuestions(""); // Purane questions hata do
    setLoading(true);

    const prompt = `
You are an expert technical interviewer.

Generate 10 interview questions for a ${role}.

Format:

Beginner Questions

Intermediate Questions

Advanced Questions

Make the questions practical and industry-relevant.
`;

    try {
      const response = await askGemini(prompt);
      setQuestions(response);
    } catch (error) {
      setQuestions("Error generating questions.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="page">
      <h1>🎤 AI Interview Prep</h1>

      <input
        type="text"
        placeholder="Enter Job Role"
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
          setQuestions(""); // Typing start hote hi purana result remove
        }}
      />

      <br />
      <br />

      <button
        className="btn"
        onClick={generateQuestions}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>

      {loading && (
        <p style={{ marginTop: "20px" }}>
          🤖 AI is generating interview questions...
        </p>
      )}

      {questions && (
        <div className="result-box">
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {questions}
          </pre>
        </div>
      )}
    </div>
  );
}

export default InterviewPrep;