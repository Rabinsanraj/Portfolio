import React from "react";
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from "lucide-react";
import { PROJECT_DATA } from "../constants";

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            A selection of verified projects demonstrating full stack
            capabilities.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {PROJECT_DATA.map((project) => (
           <motion.div 
           key={project.id} 
           variants={itemVariants}
           whileHover={{ y: -10 }}
           className="group bg-slate-900 rounded-xl shadow-sm border border-slate-800 overflow-hidden hover:shadow-2xl hover:border-purple-500/30 transition-all duration-500 flex flex-col"
         >
              <div className="h-48 w-full bg-slate-800 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-green-400 flex items-center shadow-sm border border-slate-700">
                  <CheckCircle size={12} className="mr-1" />
                  Verified
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm font-medium text-slate-400 mb-4">
                  {project.role}
                </p>

                <ul className="mb-6 space-y-1 flex-1">
                  {project.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-slate-300 text-sm flex items-start"
                    >
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-600 rounded-full flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    {project.path ? (
                      <motion.button 
                      href={project.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-primary hover:bg-violet-700 transition-colors"
                    >
                       <ExternalLink size={16} className="mr-2" />
                        Live Demo
                     
                    </motion.button>
                      
                       
                    ) : (
                      <div className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium text-slate-400 bg-slate-800 border border-slate-700 cursor-not-allowed">
                        🚧 Live demo not available — Project in progress
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
