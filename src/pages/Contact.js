import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section className="px-10 py-16 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold text-cyan-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        👩‍💻 Contact <span className="text-white">Midhuna A</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Left Info Section */}
        <motion.div
          className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Let’s Connect 🚀
          </h2>
          <p className="text-gray-400 mb-6">
            I’m always open to new opportunities, collaborations, and exciting
            challenges! Feel free to reach out.
          </p>

          {/* Contact Info */}
          <div className="flex items-center space-x-3 mb-4">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-400">midhuashwin@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhone className="text-cyan-400 text-2xl" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-400">9677631125</p>
            </div>
          </div>
        </motion.div>

        {/* Right Mailto Section */}
        <motion.div
          className="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4 items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            Send a Message ✉️
          </h2>
          <p className="text-gray-400 text-center mb-4">
            Click the button below to send me an email directly from your email
            client.
          </p>
          <a
            href="mailto:midhuashwin@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Midhuna%2C%0A%0AI%20would%20like%20to%20connect%20with%20you.%0A%0ARegards%2C%0A"
            className="w-full bg-cyan-500 py-3 rounded-lg font-semibold text-center hover:scale-105 transition"
          >
            ✉️ Send Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
