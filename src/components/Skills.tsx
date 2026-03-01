import React from "react";
import { motion } from 'framer-motion';
import { SKILL_DATA } from "../constants";

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Expertise
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Technical Skills & Tools
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            A comprehensive tech stack verified through real-world commercial
            projects.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILL_DATA.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div 
              key={category.title} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-slate-900 rounded-xl p-6 border border-slate-800 shadow-sm hover:shadow-xl hover:border-purple-500/30 transition-all duration-300"
            >
                <div className="h-12 w-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
