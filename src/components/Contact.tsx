import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../constants";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const highlightTimeoutRef = useRef<NodeJS.Timeout>();

  const [showPopup, setShowPopup] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const showUnavailablePopup = () => {
    setShowPopup(true);
  };

  const handleOkClick = () => {
    setShowPopup(false);

    // Scroll to email section smoothly
    emailRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Clear any existing timeout to avoid conflicts
    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current);
    }

    // Trigger glow effect
    setHighlight(true);

    highlightTimeoutRef.current = setTimeout(() => {
      setHighlight(false);
      highlightTimeoutRef.current = undefined;
    }, 2000);
  };

  // Prevent actual form submission and show popup instead
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showUnavailablePopup();
  };

  return (
    <>
      <footer id="contact" className="bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Let's Connect
              </h2>

              <p className="text-lg text-slate-400 mb-8">
                I am currently available for full-time opportunities. If you
                have any questions or would like to collaborate, feel free to
                reach out.
              </p>

              <div className="space-y-6">
                {/* EMAIL */}
                <motion.a
                  ref={emailRef}
                  whileHover={{ x: 10 }}
                  href={`mailto:${CONTACT_INFO.email}?subject=Portfolio%20Inquiry&body=Hi%20${CONTACT_INFO.name},%0A%0AI%20would%20like%20to%20connect%20with%20you.`}
                  className={`flex items-center group transition-all duration-500 ${
                    highlight
                      ? "shadow-[0_0_25px_rgba(139,92,246,0.9)] scale-105 rounded-lg p-2"
                      : ""
                  }`}
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="ml-4 text-slate-400 group-hover:text-primary transition-colors">
                    {CONTACT_INFO.email}
                  </span>
                </motion.a>

                {/* PHONE */}
                <motion.a
                  whileHover={{ x: 10 }}
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className={`flex items-center group transition-all duration-500 ${
                    highlight
                      ? "shadow-[0_0_25px_rgba(139,92,246,0.9)] scale-105 rounded-lg p-2"
                      : ""
                  }`}
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="ml-4 text-slate-400 group-hover:text-primary transition-colors">
                    {CONTACT_INFO.phone}
                  </span>
                </motion.a>

                {/* LOCATION */}
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="ml-4 text-slate-400">
                    {CONTACT_INFO.location}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white mb-6">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-300">Name</label>
                  <input
                    type="text"
                    readOnly
                    onFocus={showUnavailablePopup}
                    className="mt-1 w-full cursor-pointer rounded-md border border-slate-700 bg-slate-800 py-2 px-3 text-white"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300">Email</label>
                  <input
                    type="email"
                    readOnly
                    onFocus={showUnavailablePopup}
                    className="mt-1 w-full cursor-pointer rounded-md border border-slate-700 bg-slate-800 py-2 px-3 text-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    readOnly
                    onFocus={showUnavailablePopup}
                    className="mt-1 w-full cursor-pointer rounded-md border border-slate-700 bg-slate-800 py-2 px-3 text-white"
                    placeholder="How can I help you?"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-violet-700 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* FOOTER */}
          <div className="mt-16 border-t border-slate-800 pt-8 text-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-slate-900 rounded-xl p-6 w-[90%] max-w-md border border-slate-700 text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Service Unavailable
            </h4>
            <p className="text-slate-400 mb-6">
              This form is currently unavailable. Please contact me via phone or
              email.
            </p>
            <button
              onClick={handleOkClick}
              className="px-6 py-2 bg-primary hover:bg-violet-700 text-white rounded-md transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;