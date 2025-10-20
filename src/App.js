import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Linkedin, Github } from "lucide-react"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        
        <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 py-4 md:py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg sticky top-0 z-50 gap-4 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 sm:space-x-4 md:space-x-6 text-lg font-semibold">
            <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
            <Link to="/about" className="hover:text-cyan-400 transition">About Me</Link>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4 items-center">
            <a href="https://www.linkedin.com/in/midhuna-a-504644291" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-cyan-500 transition">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="https://github.com/midhuna-06" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-cyan-500 transition">
              <Github className="w-6 h-6 text-white" />
            </a>
            <Link to="/contact">
              <button className="bg-cyan-500 px-3 py-2 rounded-xl shadow-xl hover:scale-105 transition text-sm sm:text-base">
                Contact Me
              </button>
            </Link>
          </div>
        </nav>

        {/* Routes */}
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
