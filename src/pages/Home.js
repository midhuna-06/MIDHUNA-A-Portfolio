import React from "react";
import { motion } from "framer-motion";

function Home() {
  const skills = {
    Languages: ["Java", "C++", "C", "JavaScript"],
    "Frontend": ["React.js", "Next.js", "HTML", "CSS"],
    "Backend": ["Node.js", "Spring Boot", "MySQL", "MongoDB"],
    "Frameworks / Libraries": [
      "Spring Boot",
      "WebSocket (STOMP)",
      "Node.js",
      "Express.js",
      "React",
    ],
    "Core Concepts": ["DSA", "OOPS", "CN", "DBMS", "OS"],
    "Tools": [
      "VS Code",
      "Git/GitHub",
      "AWS (EC2)",
      "Vercel",
      "Render",
      "Postman",
      "Docker",
    ],
  };

  const achievements = [
    "Basics of Java and DSA Course | NavGurukul (AFE + ZUVY)",
    "Introduction to NoSQL Databases | Infosys Spring Board",
    "Mastering Data Structures using C and C++ | Udemy",
    "Learn Java Programming – Beginner to Master | Udemy",
    { label: "LeetCode Profile", link: "https://leetcode.com/u/midhuna06/" },
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
    {
      title: "Spring Connect",
      description:
        "A real-time chat application enabling instant communication between multiple users through WebSocket connections. Implements dynamic user tracking, live message broadcasting, and smooth frontend–backend integration. Fully containerized using Docker for easy deployment and scalability across environments.",
      tech: "Spring Boot, WebSocket (STOMP), MySQL, Docker",
      link: "https://github.com/midhuna-06/springboot-websocket-chat-app.git",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-4 sm:px-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <motion.img
          src="/profile.jpg"
          alt="profile"
          className="w-32 sm:w-40 h-32 sm:h-40 rounded-full border-4 border-cyan-500 shadow-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          MIDHUNA A
        </motion.h1>

        <motion.a
          href="https://drive.google.com/drive/folders/12PjXtR3zBN5EQT3oi4TXCXtiPb9cmkRR"
          target="_blank"
          rel="noreferrer"
          className="mt-2 sm:mt-4 px-6 py-2 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Download Resume
        </motion.a>

        <motion.p
          className="text-sm sm:text-lg text-gray-400 mt-2 sm:mt-4 max-w-xl sm:max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          💻 A dedicated Full Stack Developer with strong expertise in building
          scalable and high-performance web applications using MERN & Spring
          Boot. 🚀 I specialize in crafting intuitive and responsive UIs on the
          frontend while designing secure, reliable, and optimized APIs on the
          backend. 🌱 Constantly exploring emerging technologies to deliver
          modern and impactful software solutions.
        </motion.p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-8">
          {["skills", "achievements", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="px-4 sm:px-6 py-2 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition text-sm sm:text-base"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16">
        <motion.div
          className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">🚀 Skills</h2>
          {Object.keys(skills).map((category) => (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-300">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                {skills[category].map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-cyan-500 transition"
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
      <section id="achievements" className="py-12 sm:py-16">
        <motion.div
          className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            📜 Achievements
          </h2>
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
    <section id="projects" className="py-12 sm:py-16">
      <motion.div
        className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
          <span>💼</span> Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-[#1f2937] border border-gray-700 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500 hover:shadow-lg transition duration-300"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="mt-4 border-t border-gray-600 pt-3">
                <p className="text-cyan-400 font-semibold text-sm mb-2 flex items-center gap-1">
                  ⚙️ {proj.tech}
                </p>
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-cyan-500 text-gray-900 font-medium px-3 py-1 rounded-md text-sm hover:bg-cyan-400 transition"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

    </div>
  );
}

export default Home;
