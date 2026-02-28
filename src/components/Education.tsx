import React from "react";
import { GraduationCap } from "lucide-react";
import { CONTACT_INFO } from "../constants";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl shadow-sm border border-slate-800 p-8 sm:p-12 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
          <div className="flex-shrink-0 bg-purple-900/50 p-4 rounded-full mb-6 sm:mb-0 sm:mr-8">
            <GraduationCap className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Education Verification
            </h2>
            <div className="space-y-1">
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
            </div>
            <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-900/50">
              Status: Verified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
