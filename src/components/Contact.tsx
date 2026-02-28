import React, { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO } from "../constants";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 🔴 replace with your Service ID
        "YOUR_TEMPLATE_ID", // 🔴 replace with your Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY", // 🔴 replace with your Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              I am currently available for full-time opportunities. If you have
              any questions about my projects or would like to discuss a
              potential collaboration, please get in touch.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center group"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="ml-4 text-slate-400 group-hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center group"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-900/50 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="ml-4 text-slate-400 group-hover:text-primary transition-colors">
                  {CONTACT_INFO.phone}
                </span>
              </a>

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="ml-4 text-slate-400">
                  {CONTACT_INFO.location}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-6">
              Send a Message
            </h3>

            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-slate-700 bg-slate-800 py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm border text-white placeholder-slate-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-slate-700 bg-slate-800 py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm border text-white placeholder-slate-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-slate-700 bg-slate-800 py-2 px-3 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm border text-white placeholder-slate-500"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {CONTACT_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
