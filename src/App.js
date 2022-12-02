import { Routes, Route, Navigate } from "react-router-dom";
import Attendence from "./pages/attendence/Attendence";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

export const URL = "https://test.nexisltd.com";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Attendence />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:projectTitle" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/home" replace />} /> */}
    </Routes>
  );
}
