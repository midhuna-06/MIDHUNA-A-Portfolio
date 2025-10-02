import React from "react";
import { motion } from "framer-motion";

function Home() {
  const skills = {
    Languages: ["Java", "C++", "C", "JavaScript"],
    Frontend: ["React.js", "Next.js", "HTML", "CSS"],
    Backend: ["Node.js", "Spring Boot", "MySQL", "MongoDB"],
    Tools: [
      "VS Code",
      "Git/GitHub",
      "AWS(EC2)",
      "Vercel",
      "Render",
      "Postman",
    ],
  };

  const achievements = [
    "Basics of Java and DSA Course | NavGurukul (AFE + ZUVY)",
    "Introduction to NoSQL Databases | Infosys Spring Board",
    "Mastering Data Structures using C and C++ | Udemy",
    "Learn Java Programming – Beginner to Master | Udemy",
    {
      label: "LeetCode Profile",
      link: "https://leetcode.com/u/midhuna06/",
    },
  ];

  const projects = [
    {
      title: "Banking System",
      description:
        "A Spring Boot web application for core banking operations with secure authentication, account management, balance inquiry, fund transfer, and transaction history. Uses REST APIs and Spring Security for scalability and robustness.",
      tech: "Spring Boot, REST API, Spring Security, MySQL",
      link: "https://github.com/midhuna-06/Bank_App_SpringBoot",
    },
    {
      title: "Job Portal",
      description:
        "A MERN-based web application connecting job seekers and recruiters. Features secure user authentication, resume upload & parsing, job posting & application management, and dynamic dashboards. Integrated with REST APIs and responsive UI for seamless experience.",
      tech: "MongoDB, Express, React, Node.js",
      link: "https://github.com/midhuna-06/jobEase-Smart-Job-Portal",
    },
  ];

  // Function to scroll smoothly to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 md:px-20">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <motion.img
          src="/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full border-4 border-cyan-500 shadow-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl font-bold mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          MIDHUNA A
        </motion.h1>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/your-resume-link" 
          target="_blank"
          rel="noreferrer"
          className="mt-4 px-6 py-2 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
        Download Resume
        </motion.a>

        <motion.p
          className="text-lg text-gray-400 mt-4 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          💻 A dedicated Full Stack Developer with strong expertise in building scalable and high-performance web applications using the MERN stack and Spring Boot.
           🚀 I specialize in crafting intuitive and responsive user interfaces on the frontend while designing secure, reliable, and optimized APIs on the backend. 
           🌱 With a deep curiosity for emerging technologies, I constantly push boundaries to deliver modern, efficient, and impactful software solutions.
        </motion.p>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => scrollToSection("skills")}
            className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("achievements")}
            className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition"
          >
            Projects
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <motion.div
          className="bg-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">🚀 Skills</h2>
          {Object.keys(skills).map((category) => (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-300">{category}</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm hover:bg-cyan-500 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16">
        <motion.div
          className="bg-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">📜 Achievements</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            {achievements.map((ach, index) =>
              typeof ach === "string" ? (
                <li key={index}>{ach}</li>
              ) : (
                <li key={index}>
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    {ach.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <motion.div
          className="bg-gray-800 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">💼 Projects</h2>
          <div className="space-y-6">
            {projects.map((proj, index) => (
              <div
                key={index}
                className="bg-gray-700 p-4 rounded-xl hover:scale-105 transition transform"
              >
                <h3 className="text-lg font-semibold text-gray-300">{proj.title}</h3>
                <p className="text-gray-400 mt-1">{proj.description}</p>
                <p className="text-xs text-gray-500 mt-1">Tech Stack: {proj.tech}</p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 bg-cyan-500 px-3 py-1 rounded-lg text-sm hover:scale-105 transition"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
