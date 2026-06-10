import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚀 CareerPilot AI</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume Analyzer</Link>
        <Link to="/interview">Interview Prep</Link>
        <Link to="/skills">Skill Gap</Link>
      </div>
    </nav>
  );
}

export default Navbar;