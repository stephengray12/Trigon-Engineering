"use client";
import { motion } from "framer-motion";

export default function About() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.6, ease: "easeOut" },
    }),
  };

  const paragraphs = [
    `Founded with dedication to delivering precision-engineered solutions, Trigon Engineering is your trusted partner for high-quality wet-process equipment. Headquartered in Little Rock, Arkansas, we serve as a manufacturer’s representative, offering an extensive range of robust industrial pumps, valves, and complementary process equipment tailored to meet the unique demands of your operations.`,
    `At Trigon Engineering, we understand that reliability, efficiency, and unmatched service are non-negotiable. That’s why we align with leading manufacturers and maintain deep technical expertise to ensure seamless integration of solutions across a broad spectrum of industrial applications.`,
    `Whether you're maintaining municipal systems, optimizing industrial operations, or designing new process infrastructure, Trigon Engineering provides the expertise and the products to make your project a success. With a team of seasoned professionals dedicated to customer service and industrial innovation, we stand ready to support you from concept to installation and beyond.`,
    `Let’s build the future of industrial reliability—together.`,
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <motion.h1
        className="text-4xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      {paragraphs.map((text, i) => (
        <motion.p
          key={i}
          className="text-lg text-gray-300 max-w-2xl text-center mt-4"
          custom={i}
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
}
