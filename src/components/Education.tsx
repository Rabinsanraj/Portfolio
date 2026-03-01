import React from "react";
import { GraduationCap } from "lucide-react";
import { motion } from 'framer-motion';
import { CONTACT_INFO } from "../constants";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-8 sm:p-12 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300"
        >
          <motion.div 
            initial={{ rotate: -10 }}
            whileInView={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex-shrink-0 bg-purple-900/50 p-4 rounded-full mb-6 sm:mb-0 sm:mr-8"
          >
            <GraduationCap className="h-10 w-10 text-primary" />
          </motion.div>
          <div>
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-white mb-2">
              Education Verification
            </motion.h2>
            <motion.div
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }} className="space-y-1">
              <p className="text-lg font-semibold text-primary">
                {CONTACT_INFO.degree}
              </p>
              <p className="text-slate-300 font-medium">
                {CONTACT_INFO.college}
              </p>
              <p className="text-slate-400">{CONTACT_INFO.university}</p>
              <p className="text-slate-500 text-sm mt-2">
                {CONTACT_INFO.gradYear}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-900/50"
            >
              Status: Verified
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
