import React from 'react';
import { Download,} from 'lucide-react';
const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 print:hidden">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Resume
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            My professional background and qualifications.
          </p>
        </div>

        {/* Resume PDF Embed */}
        <div className="bg-slate shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none border border-slate-800">
          <iframe
            src="../ResumeAndImage/Rabinsan_ResumeC.pdf" 
            className="w-full h-[800px] md:h-[1200px] print:h-auto"
            title="Resume PDF"
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;