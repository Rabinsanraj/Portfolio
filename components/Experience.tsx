import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Career Path</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Professional Experience
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Proven track record of delivering scalable solutions in verified roles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-800"></div>

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => (
              <div key={job.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center md:items-start`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-900 bg-primary shadow-sm z-10 mt-1.5"></div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 px-4 md:px-8 w-full">
                  <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/50 text-purple-300 mt-2 sm:mt-0">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-slate-300 font-medium mb-1">
                        <Briefcase size={16} className="mr-2 text-primary" />
                        {job.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">

                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.description.map((desc, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-slate-600 rounded-full flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;