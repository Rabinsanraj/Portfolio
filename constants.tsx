import { Code2, Database, Layout, Terminal } from "lucide-react";
import { ExperienceItem, ProjectItem, SkillCategory } from "./types";

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    company: "Aroganam Technologies",
    role: "Full Stack Developer",
    duration: "6+ Months",
    type: "Full-time",
    location: "Coimbatore",
    description: [
      "Developed full-stack web applications using React.js, Python, and FastAPI.",
      "Designed and integrated RESTful APIs.",
      "Managed databases using MongoDB.",
      "Implemented Material UI and Bootstrap for consistent UI design.",
      "Collaborated with designers and backend developers to deliver scalable solutions.",
    ],
  },
  {
    id: 2,
    company: "Vetri Technology Solutions",
    role: "Frontend Development Intern",
    duration: "6+ Months",
    type: "Internship",
    location: "Surandai",
    description: [
      "Developed responsive user interfaces using HTML, CSS, JavaScript, and React.js.",
      "Implemented reusable UI components.",
      "Followed UI/UX best practices.",
      "Collaborated with team members for feature development.",
    ],
  },
];

export const PROJECT_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "Online Car Rental Platform",
    role: "Full Stack Developer",
    description: [
      "Developed a responsive online car rental platform with modern UI.",
      "Implemented interactive features for vehicle listing and booking.",
    ],
    techStack: ["React.js", "HTML/CSS", "BootStrap"],
    verified: true,
    image: "https://picsum.photos/seed/car/800/600",
    path: " https://rabinsanraj.github.io/Car-Rental/",
  },
  {
    id: 2,
    title: "Community Portal",
    role: "Frontend / Full Stack Developer",
    description: [
      "Built a community interaction platform for announcements, events, and discussions.",
      "Designed responsive layouts and reusable UI components.",
    ],
    techStack: ["React.js", "Material UI", "JavaScript"],
    verified: true,
    image: "https://picsum.photos/seed/community/800/600",
    path: "",
  },
  {
    id: 3,
    title: "IMF Portal",
    role: "Full Stack Developer",
    description: [
      "Developed a portal for the Indian Mountaineering Foundation to manage expeditions and member profiles.",
      "Enabled online registration and activity tracking with administrative workflows.",
    ],
    techStack: ["React.js", "Material UI", "REST API"],
    verified: true,
    image: "https://picsum.photos/seed/imf/800/600",
    path: "",
  },

  {
    id: 4,
    title: "SLV – Secure Land Verifiers",
    role: "Full Stack Developer",
    description: [
      "Built an end-to-end land management platform enabling property buying and selling workflows.",
      "Integrated advocate consultation features and ensured authenticity using verified land records.",
    ],
    techStack: ["React.js", "Material UI", "Python", "FastAPI", "MongoDB"],
    verified: true,
    image: "https://picsum.photos/seed/slv/800/600",
    path: "",
  },
];

export const SKILL_DATA: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: ["Python", "FastAPI", "REST API"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB"],
  },
  {
    title: "Tools & DevOps",
    icon: Code2,
    skills: ["Git", "GitHub", "VS Code", "Google AI Studio"],
  },
];

export const CONTACT_INFO = {
  name: "Rabinsan Raj A",
  role: "Full Stack Developer",
  phone: "+91 7868067207",
  email: "rabinsanraj.off07@gmail.com",
  location: "Tenkasi, Tamil Nadu, India",
  degree: "Bachelor of Commerce (General)",
  university: "Manonmaniam Sundaranar University",
  college: "JP College of Arts and Science",
  gradYear: "2018 – 2021",
};
