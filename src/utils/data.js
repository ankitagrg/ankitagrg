import pic1a from "../assets/ecoquest.png";
import pic1b from "../assets/ecoquest_2.png";
import pic1c from "../assets/ecoquest_3.png";

import pic2a from "../assets/movemetric_1.png";
import pic2b from "../assets/movemetric_2.png";
import pic2c from "../assets/movemetric_3.png";
import pic2d from "../assets/movemetric_4.png";

import pic3a from "../assets/versemate.png";
import pic3b from "../assets/versemate_2.png";
import pic3c from "../assets/versemate_3.png";

import pic4a from "../assets/GWH.png";
import pic4b from "../assets/GenWriteHub.png";
import pic4c from "../assets/GWH_history.png";

import pic5a from "../assets/technicalsewa_3.png";
import pic5b from "../assets/technicalsewa_1.png";
import pic5c from "../assets/technicalsewa_2.png";

import pic6a from "../assets/Smartcare_1.png";
import pic6b from "../assets/Smartcare_3.png";
import pic6c from "../assets/Smartcare_2.png";

import pic7a from "../assets/Rinovix_1.png";
import pic7b from "../assets/Rinovix_2.png";
import pic7c from "../assets/Rinovix_3.png";

import pic8a from "../assets/Gcesgirls_1.png";
import pic8b from "../assets/Gcesgirls_2.png";
import pic8c from "../assets/Gcesgirls_3.png";

import pic9a from "../assets/Inta_1.png";
import pic9b from "../assets/Inta_2.png";
import pic9c from "../assets/Inta_3.png";



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
    title: "📈 MoveMetric",
    description:
      "A computer-vision platform for movement professionals that tracks a client's joint angles from webcam video during exercises, logging objective, dated metrics per client.",
    fullDescription:
      "MoveMetric helps movement professionals objectively track how a client's exercise form changes over time. It uses real-time webcam pose detection to measure joint angles, auto-detect reps, and log dated metrics with trend charts and heuristic A-F grading.",
    technologies: "React.js, TailwindCSS, MediaPipe (Computer Vision), Supabase",
    link: "https://github.com/ankitagrg/MoveMetric",
    date: "Aug 2026",
    images: [pic2a, pic2b, pic2c, pic2d],
  },
  {
    title: "💼 INTA",
    description:
      "An AI-powered mock interview platform that scores spoken or typed answers locally using semantic embeddings, TF-IDF, sentiment analysis.",
    fullDescription:
      "INTA is an AI-powered mock interview platform. It evaluates typed or voice answers locally using TF-IDF, transformer embeddings, sentiment analysis, and keyword extraction, with no paid API required.",
    technologies: "React.js, TailwindCSS, Node.js, Express.js, MongoDB, Whisper, Transformers.js",
    link: "https://github.com/ankitagrg/INTA",
    date: "Aug 2026",
    images: [pic9a, pic9b, pic9c],
  },
  {
    title: "👩‍💻 GCES Girls Tech",
    description:
      "A student-led club at Gandaki College of Engineering and Science empowering girls to explore technology through hands-on workshops.",
    fullDescription:
      "GCES Girls Tech is a student-led club at Gandaki College of Engineering and Science, founded in 2018 to encourage, support, and inspire girls to explore technology with confidence through workshops, mentorship, and community-driven initiatives.",
    technologies: "React.js, TailwindCSS, Javascript",
    link: "https://gcesgirlstech.gceslab.edu.np/",
    date: "Jun 2026",
    images: [pic8a, pic8b, pic8c],
  },
  {
    title: "🛠️ Technical Sewa",
    description:
      "A Nepal-based platform delivering expert repair, maintenance, and doorstep support for home appliances through certified, trusted technicians nationwide.",
    fullDescription:
      "Technical Sewa is a Nepal-based service platform offering expert repair, maintenance, and doorstep support for home appliances and electronics. Backed by certified technicians and genuine parts, it delivers reliable service across major cities in Nepal.",
    technologies: "Next.js, TypeScript, TailwindCSS, PHP, MySQL",
    link: "https://www.technicalsewa.com/",
    date: "Jun 2025",
    images: [pic5a, pic5b, pic5c],
  },
  {
    title: "📝 GWH",
    description:
      "An AI-powered content generator that crafts personalized, keyword-driven, tone-specific writing instantly from just a single topic in seconds.",
    fullDescription:
      "Gen Write Hub is an AI-powered writing companion that generates engaging, personalized content in seconds. Simply enter a topic, and it crafts tailored output with precise tone and keyword optimization, streamlining content creation for any use case.",
    technologies: "React.js , Node.js, Tailwind CSS, Langchain, Groq API, Llama 3",
    link: "https://github.com/ankitagrg/GenWriteHub",
    date: "Jun 2025",
    images: [pic4a, pic4b, pic4c],
  },
  {
    title: "👩‍💻 Rinovix",
    description:
      "A marketplace offering premium website templates, WordPress themes, plugins, and PHP scripts for quickly building secure, high-performance websites.",
    fullDescription:
      "Rinovix is a digital marketplace offering premium website templates, WordPress themes, plugins, and PHP scripts. It enables both beginners and experienced developers to quickly build secure, high-performance websites without starting from scratch.",
    technologies: "WordPress",
    link: "https://rinovix.com/",
    date: "Apr 2025",
    images: [pic7a, pic7b, pic7c],
  },
  {
    title: "🧰 Smart Care",
    description:
      "A Nepal-based platform providing professional repair, maintenance, and reliable after-sales support for appliances, electronics, and mobile devices nationwide.",
    fullDescription:
      "SmartCare Nepal provides professional repair, maintenance, and after-sales support for appliances, electronics, and mobile devices. With reliable doorstep service and certified technicians available across Nepal, it ensures fast, trustworthy support for every customer.",
    technologies: "AngularJS",
    link: "https://smartcare.com.np/",
    date: "Mar 2025",
    images: [pic6a, pic6b, pic6c],
  },
  {
    title: "📖 VerseMate",
    description:
      "A book companion app for discovering, organizing, and tracking your reading progress with personalized recommendations and search filters.",
    fullDescription:
      "VerseMate is a book companion app that helps readers discover, organize, and track their reading journey. It offers book search, custom reading lists, progress tracking, personalized recommendations, and advanced filters for a seamless reading experience.",
    technologies: "React.js, Typescript , TailwindCSS",
    link: "https://github.com/ankitagrg/versemate",
    date: "Dec 2024",
    images: [pic3a, pic3b, pic3c],
  },
  {
    title: "🌍 EcoQuest",
    description:
      "A sustainability app that helps users track carbon footprints and adopt eco-friendly habits through fun, engaging daily challenges.",
    fullDescription:
      "EcoQuest helps users live a greener lifestyle by offering eco-friendly challenges, tracking carbon footprints, and providing sustainable living tips. It empowers people to make everyday choices that create a meaningful, positive impact on the environment.",
    technologies: "React.js, Node.js with Express, TailwindCSS, MongoDb",
    link: "https://github.com/ankitagrg/ecoquest-finalproject",
    date: "Aug 2024",
    images: [pic1a, pic1b, pic1c],
  },
];

// Leadership & Community
export const leadership = [
  {
    role: "Vice President & Club Advisor",
    org: "GCESGirlsTech",
    description:
      "Led club strategy and operations as Vice President, organizing coding workshops, ideathons, and Hour of Code sessions to strengthen members' technical and leadership abilities. Built an inclusive, collaborative community that encouraged students to learn and take initiative.",
    icon: "🏆",
    link: "https://gcesgirlstech.gceslab.edu.np/",
  },
  {
    role: "Fellow",
    org: "WLiT",
    description:
      "Completed a 9-month leadership development fellowship centered on collaborative project work and structured mentorship.",
    icon: "🌱",
    link: "https://wlit.org/",
  },
  {
    role: "Hour of Code",
    org: "WLiT & WIIT",
    description:
      "Delivered hands-on programming workshops to 100+ students across underserved schools in Pokhara and Parbat, broadening access to computer science education.",
    icon: "💻",
    link: "https://wiit.org.np/",
  },
];

// Skills
export const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React Native" },
  { src: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://media.licdn.com/dms/image/v2/D4D12AQF8MwWNbgUZ_g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1697534805076?e=2147483647&v=beta&t=oidQ7KQtMb1CVUj-mRzfSaKSFlAHdvzu4z0FZ1VsU10", alt: "LangChain" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase" },
  { src: "https://cdn-icons-png.flaticon.com/512/6155/6155762.png", alt: "SEO" }
];
