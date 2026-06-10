import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#111827",
      color: "white"
    }}>
      <h2>CareerPilot AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume Analyzer</Link>
        <Link to="/interview">Interview Prep</Link>
        <Link to="/skills">Skill Gap</Link>
      </div>
    </nav>
  );
}

export default Navbar;