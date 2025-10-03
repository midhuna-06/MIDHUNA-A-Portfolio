import React, { useState } from "react";

function About() {
  const [view, setView] = useState("detailed");

  const contents = {
    detailed: `Hello — I’m Midhuna A, a 3rd year CSE student at Sri Eshwar College of Engineering, and an FFE Scholar. 
I am an aspiring Full Stack Developer building strong expertise in the MERN stack and Spring Boot. 
I’m also an AWS enthusiast, exploring cloud services to enhance scalability and deployment.

I enjoy developing creative technologies that solve real-world problems and deliver value to users. 
I am a fast technical learner who quickly adapts to new tools, frameworks, and industry trends — currently learning Docker and other DevOps practices to improve deployment automation and reliability.

I consider myself a problem solver who thrives on tackling challenges, debugging complex issues, and optimizing solutions for performance and maintainability. 
My practical experience includes projects such as a Banking System (Spring Boot) and a Job Portal (MERN). 
I also actively practice Data Structures & Algorithms on LeetCode to strengthen my problem-solving skills.

My goal is to grow into a versatile software developer, gain deeper expertise in Java, Cloud, and DevOps, and contribute to impactful, scalable applications.`,
    short: `I’m Midhuna A, a 3rd year CSE student at Sri Eshwar College of Engineering and an FFE Scholar. 
I build full-stack applications using MERN and Spring Boot, I’m an AWS enthusiast, currently learning Docker & DevOps, 
and I love solving problems and developing creative technologies.`,
    resume: `3rd year CSE, Sri Eshwar College of Engineering • FFE Scholar • MERN & Spring Boot Full-Stack Developer • AWS enthusiast • Learning Docker • Problem solver`,
  };

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(contents[view]);
      alert("Copied to clipboard!");
    } catch (e) {
      alert("Failed to copy!");
    }
  };

  return (
    <div className="px-4 sm:px-10 py-16">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8">
        <img src="/profile.jpg" alt="Midhuna A" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-cyan-500 shadow-lg object-cover" />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">MIDHUNA A</h1>
          <p className="text-cyan-400 font-medium text-sm sm:text-base">
            3rd year CSE · Sri Eshwar College of Engineering · FFE Scholar
          </p>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
        {["detailed", "short", "resume"].map((type) => (
          <button
            key={type}
            onClick={() => setView(type)}
            className={`px-4 py-2 rounded-full font-semibold ${
              view === type ? "bg-cyan-500 text-black" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {type === "detailed" ? "Detailed" : type === "short" ? "Short" : "Resume Line"}
          </button>
        ))}
        <button onClick={copyText} className="ml-auto px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600">
          Copy
        </button>
      </div>

      <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg whitespace-pre-line text-gray-300 leading-relaxed">
        {contents[view]}
      </div>

      <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-400">
        <span>Profiles:</span>
        <a className="text-cyan-400 hover:underline" href="https://github.com/midhuna-06" target="_blank" rel="noreferrer">GitHub</a>
        <a className="text-cyan-400 hover:underline" href="https://leetcode.com/u/midhuna06/" target="_blank" rel="noreferrer">LeetCode</a>
      </div>
    </div>
  );
}

export default About;
