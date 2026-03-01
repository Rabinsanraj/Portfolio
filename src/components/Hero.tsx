import React from "react";
import {
  ArrowRight,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from 'framer-motion';
import { CONTACT_INFO } from "../constants";
import HeroImage1 from "../assets/HeroImage1.png";

const Hero: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950"
    >
      {/* Background decoration */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-900 blur-3xl"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-violet-900 blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: false }}
          className="lg:grid lg:grid-cols-12 lg:gap-8 items-center"
        >
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1 rounded-full border border-purple-700 bg-purple-900/30 text-purple-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
              Available for immediate joining
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                Hi, I'm {CONTACT_INFO.name}
              </span>
              <span className="block text-primary mt-2">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Transforming ideas into scalable web applications by building
              responsive, high-performance platforms using React, Python,
              FastAPI, and MongoDB.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4 text-slate-400 text-sm font-medium sm:justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                {CONTACT_INFO.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                {CONTACT_INFO.email}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-violet-700 md:py-4 md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#resume"
                  className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-900 hover:bg-slate-800 md:py-4 md:text-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  View Resume
                  <Download className="ml-2 -mr-1 h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden bg-slate-800 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="rounded-xl overflow-hidden bg-slate-900 aspect-[4/6] relative">
                <img
                  src={HeroImage1}
                  alt="Rabinsan Raj A"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex flex-col justify-end p-6">
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
