import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CheckCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume', special: true },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <div className="bg-primary text-white p-1.5 rounded-lg">
               <span className="font-bold text-xl">I</span>
            </div>
            <span className={`font-bold text-2xl tracking-tight ${scrolled ? 'text-white' : 'text-slate-200'}`}>
              I N F I<span className="text-primary"> N I T Y</span>
            </span>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link,index) => (
                <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 
                  ${link.special 
                    ? 'bg-purple-900/30 text-purple-300 hover:bg-purple-900/50 border border-purple-700 flex items-center gap-1 shadow-lg shadow-purple-500/10' 
                    : 'text-slate-300 hover:text-primary hover:bg-slate-800'
                  }`}
              >
                  {link.special && <CheckCircle size={14} />}
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden bg-slate-900 border-b border-slate-800 shadow-lg overflow-hidden"
      >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.95 }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                ${link.special 
                  ? 'bg-purple-900/30 text-purple-300' 
                  : 'text-slate-300 hover:text-primary hover:bg-slate-800'
                }`}
            >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;