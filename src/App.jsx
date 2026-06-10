import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import InterviewPrep from "./pages/InterviewPrep";
import SkillGap from "./pages/SkillGap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeAnalyzer />} />
        <Route path="/interview" element={<InterviewPrep />} />
        <Route path="/skills" element={<SkillGap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;