import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-purple-900 selection:text-purple-100">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Education />
      </main>
      <Contact />
    </div>
  );
};

export default App;
