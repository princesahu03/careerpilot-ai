import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>🚀 CareerPilot AI</h1>

        <p className="hero-subtitle">
          Your AI Career Copilot for Resume Analysis,
          Interview Preparation, and Skill Growth.
        </p>

        <div className="hero-buttons">
          <Link to="/resume">
            <button className="btn">Get Started</button>
          </Link>
        </div>
      </section>

      <div className="card-container">
        <div className="card">
          <h2>📄 Resume Analyzer</h2>

          <p>
            Analyze your resume and discover improvements
            to increase interview chances.
          </p>

          <Link to="/resume">
            <button className="btn">Open</button>
          </Link>
        </div>

        <div className="card">
          <h2>🎤 Interview Prep</h2>

          <p>
            Generate interview questions based on your
            target role and practice confidently.
          </p>

          <Link to="/interview">
            <button className="btn">Open</button>
          </Link>
        </div>

        <div className="card">
          <h2>📈 Skill Gap Analysis</h2>

          <p>
            Find missing skills and get a roadmap
            for your dream career.
          </p>

          <Link to="/skills">
            <button className="btn">Open</button>
          </Link>
        </div>
      </div>

      <footer className="footer">
        <p>Built with React • CareerPilot AI © 2026</p>
      </footer>
    </div>
  );
}

export default Home;