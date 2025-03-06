import pic1 from "../assets/EcoQuest.png"
import pic2 from "../assets/VerseMate.png"
import pic3 from "../assets/planit.png"


export const fadeinSkills = {
  initial: { opacity: 0, y: 50 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * index, duration: 0.4 },
  }),
};
export const projects = [
  {
    title: "📖 VerseMate",
    description:
      "The File Summarizer simplifies document analysis by generating concise summaries using OpenAI's model and LangChain.",
    technologies: "React with vite, Typescript , Tailwind CSS",
    link: "https://github.com/ankitagrg/versemate",
    date: "Feb 2025",
    image: pic2,
  },
  {
    title: "📋 PlanIt",
    description:
      "The File Summarizer simplifies document analysis by generating concise summaries using OpenAI's model and LangChain.",
    technologies: "React.js, Tailwind CSS, Firebase",
    link: "https://github.com/ankitagrg/eventify",
    date: "Oct 2024",
    image: pic3,
  },
  {
    title: "🌍 EcoQuest",
    description:
      "The File Summarizer simplifies document analysis by generating concise summaries using OpenAI's model and LangChain.",
    technologies: "React.js, Node.js with Express, Tailwind CSS, MongoDb",
    link: "https://github.com/ankitagrg/ecoquest-finalproject",
    date: "Aug 2024",
    image: pic1,
  },
];

export const skills = [
  { src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", alt: "HTML" },
  { src: "https://icons.veryicon.com/png/o/business/office-icon-series/css-3-4.png", alt: "CSS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", alt: "Bootstrap 5" },
  { src: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png", alt: "Tailwind" },
  { src: "https://icons.veryicon.com/png/o/application/skills-section/javascript-1.png", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://seeklogo.com/images/R/react-logo-65B7CD91B5-seeklogo.com.png", alt: "React" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", alt: "Git" },
  { src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", alt: "Node.js" },
  { src: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png", alt: "MongoDB" },
];
