import pic1a from "../assets/ecoQuest.png"
import pic1b from "../assets/ecoQuest_2.png"
import pic1c from "../assets/ecoQuest_3.png"
import pic2a from "../assets/planit.png"
import pic2b from "../assets/planit_1.png"
import pic3a from "../assets/versemate.png"
import pic3b from "../assets/versemate_2.png"
import pic3c from "../assets/versemate_3.png"
import pic4a from "../assets/GWH.png"
import pic4b from "../assets/GenWriteHub.png"
import pic4c from "../assets/GWH_history.png"





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
    title: "📝 GWH",
    description:
      "Gen Write Hub is your creative partner for generating engaging content in seconds. Just enter your topic, and it crafts personalized output with tone and keyword precision. ",
    technologies: "React.js , Node.js, Tailwind CSS, Langchain, Groq API, Llama 3",
    link: "https://github.com/ankitagrg/GenWriteHub",
    date: "Jun 2025",
    images: [pic4a, pic4b, pic4c],
  },
    {
    title: "📖 VerseMate",
    description:
      "VerseMate is a book companion app that helps users discover, organize, and track their reading.It offers book search, custom reading lists, progress tracking, recommendations, and search filters for a seamless reading experience.",
    technologies: "React.js, Typescript , Tailwind CSS",
    link: "https://github.com/ankitagrg/versemate",
    date: "Dec 2024",
    images: [pic3a, pic3b, pic3c],
  },
  
  {
    title: "📋 PlanIt",
    description:
      "PlanIt is an intuitive event management platform that simplifies event creation , discovery and participation.It allows users to explore upcoming events, view event details.",
    technologies: "React.js, Tailwind CSS, Javascript, Firebase",
    link: "https://github.com/ankitagrg/eventify",
    date: "Oct 2024",
    images: [pic2a, pic2b],
  },
  {
    title: "🌍 EcoQuest",
    description:
      "EcoQuest helps users live a greener lifestyle by offering eco-friendly challenges, tracking carbon footprints, and providing sustainable tips. It empowers people to make choices that benefit the environment. ",
    technologies: "React.js, Node.js with Express, Tailwind CSS, MongoDb",
    link: "https://github.com/ankitagrg/ecoquest-finalproject",
    date: "Aug 2024",
    images: [pic1a, pic1b, pic1c],
  },
  

];
export const skills = [
  { src: "https://cdn-icons-png.flaticon.com/512/732/732212.png", alt: "HTML" },
  { src: "https://icons.veryicon.com/png/o/business/office-icon-series/css-3-4.png", alt: "CSS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", alt: "Bootstrap 5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", alt: "Tailwind"},
  { src: "https://icons.veryicon.com/png/o/application/skills-section/javascript-1.png", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://seeklogo.com/images/R/react-logo-65B7CD91B5-seeklogo.com.png", alt: "React" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg", alt: "Git" },
  { src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", alt: "Node.js" },
  { src: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png", alt: "MongoDB" },
  { src: "https://cdn-icons-png.flaticon.com/512/919/919853.png", alt: "Docker" },
  { src: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", alt: "SEO" },


  
];

