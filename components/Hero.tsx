import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-900 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-violet-900 opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-700 bg-purple-900/30 text-purple-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
              Available for immediate joining
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Hi, I'm {CONTACT_INFO.name}</span>
              <span className="block text-primary mt-2">Full Stack Developer</span>
            </h1>
            
            <p className="mt-6 text-base text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Transforming ideas into scalable web applications. Over 6 months+ of experience building responsive platforms with React, Python, FastAPI, and MongoDB.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-4 text-slate-400 text-sm font-medium sm:justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                {CONTACT_INFO.location}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                {CONTACT_INFO.email}
              </div>
            </div>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-violet-700 md:py-4 md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  View Projects
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </a>
                <a
                  href="#resume"
                  className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-slate-300 bg-slate-900 hover:bg-slate-800 md:py-4 md:text-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  View Resume
                  <Download className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
             <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden bg-slate-800 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <div className="rounded-xl overflow-hidden bg-slate-900 aspect-[4/6] relative">
                  <img 
                    src="../ResumeAndImage/HeroImage1.jpeg" 
                    alt="Rabinsan Raj A" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <p className="text-white font-bold text-lg">{CONTACT_INFO.name}</p>
                    <p className="text-purple-300 text-sm">6 Months+ Experience</p>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;