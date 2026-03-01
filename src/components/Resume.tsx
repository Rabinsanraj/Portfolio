import React from "react";
import { motion } from 'framer-motion';
import ResumePdf from "../assets/Rabinsan_ResumeC.pdf";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 print:hidden"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Resume
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            My professional background and qualifications.
          </p>
        </motion.div>

        {/* Resume PDF Embed */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-slate-950 shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none border border-slate-800" 
          id="resume-content"
        >
          <iframe
            src={ResumePdf}
            className="w-full h-[800px] md:h-[1200px] print:h-auto"
            title="Resume PDF"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
