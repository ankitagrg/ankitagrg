import pic1a from "../assets/ecoquest.png";
import pic1b from "../assets/ecoquest_2.png";
import pic1c from "../assets/ecoquest_3.png";
import pic2a from "../assets/planit.png";
import pic2b from "../assets/planit_1.png";
import pic3a from "../assets/versemate.png";
import pic3b from "../assets/versemate_2.png";
import pic3c from "../assets/versemate_3.png";
import pic4a from "../assets/GWH.png";
import pic4b from "../assets/GenWriteHub.png";
import pic4c from "../assets/GWH_history.png";
import pic5a from "../assets/technicalsewa_3.png";
import pic5b from "../assets/technicalsewa_1.png";
import pic5c from "../assets/technicalsewa_2.png";


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
    title: " Technical Sewa",
    description:
      "Technical Sewa is a Nepal-based service platform providing expert repair, maintenance, and doorstep support for home appliances and electronics, backed by certified technicians and genuine parts across major cities.",
    technologies: "Next.js, TypeScript, TailwindCSS, PHP, MySQL,",
    link: "https://www.technicalsewa.com/",
    date: "Jun 2025",
    images: [pic5a, pic5b, pic5c],
  },
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
    technologies: "React.js, Typescript , TailwindCSS",
    link: "https://github.com/ankitagrg/versemate",
    date: "Dec 2024",
    images: [pic3a, pic3b, pic3c],
  },
  
  {
    title: "📋 PlanIt",
    description:
      "PlanIt is an intuitive event management platform that simplifies event creation , discovery and participation.It allows users to explore upcoming events, view event details.",
    technologies: "React.js, TailwindCSS, Javascript, Firebase",
    link: "https://github.com/ankitagrg/eventify",
    date: "Oct 2024",
    images: [pic2a, pic2b],
  },
  {
    title: "🌍 EcoQuest",
    description:
      "EcoQuest helps users live a greener lifestyle by offering eco-friendly challenges, tracking carbon footprints, and providing sustainable tips. It empowers people to make choices that benefit the environment. ",
    technologies: "React.js, Node.js with Express, TailwindCSS, MongoDb",
    link: "https://github.com/ankitagrg/ecoquest-finalproject",
    date: "Aug 2024",
    images: [pic1a, pic1b, pic1c],
  },
  

];
export const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", alt: "Bootstrap 5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  {
    src: "https://media.licdn.com/dms/image/v2/D4D12AQF8MwWNbgUZ_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697534805076?e=2147483647&v=beta&t=oidQ7KQtMb1CVUj-mRzfSaKSFlAHdvzu4z0FZ1VsU10",
    alt: "LangChain"
  },
  {
    src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    alt: "Node.js",
  },
  { src: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn-icons-png.flaticon.com/512/6155/6155762.png", alt: "SEO" }
];
