import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg sticky top-0 z-50">
          <div className="flex space-x-6 text-lg font-semibold">
            <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">About Me</Link>
          </div>
          <div className="flex space-x-4 items-center">
            <a
              href="https://www.linkedin.com/in/midhuna-a-504644291"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full hover:bg-cyan-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <Link to="/contact">
              <button className="bg-cyan-500 px-4 py-2 rounded-xl shadow-xl hover:scale-105 transition">
                Contact Me
              </button>
            </Link>
          </div>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
