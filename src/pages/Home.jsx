function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>🚀 CareerPilot AI</h1>
      <p>
        Your AI-powered career assistant for resume analysis,
        interview preparation, and skill gap assessment.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>📄 Resume Analyzer</h3>
          <p>Analyze resumes and get AI feedback.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>🎤 Interview Prep</h3>
          <p>Generate interview questions instantly.</p>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px" }}>
          <h3>📈 Skill Gap Analysis</h3>
          <p>Discover missing skills and learning paths.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;