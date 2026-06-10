import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <div className="title">
        <h1>🚀 CareerPilot AI</h1>
        <p>Your AI Powered Career Assistant</p>
      </div>

      <div className="card-container">
        <div className="card">
          <h2>📄 Resume Analyzer</h2>
          <p>Analyze resumes and get AI suggestions.</p>

          <Link to="/resume">
            <button className="btn">Open</button>
          </Link>
        </div>

        <div className="card">
          <h2>🎤 Interview Prep</h2>
          <p>Generate interview questions instantly.</p>

          <Link to="/interview">
            <button className="btn">Open</button>
          </Link>
        </div>

        <div className="card">
          <h2>📈 Skill Gap Analysis</h2>
          <p>Find missing skills and learning roadmap.</p>

          <Link to="/skills">
            <button className="btn">Open</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;