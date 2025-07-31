import { motion, AnimatePresence } from "framer-motion";
import SocialMedia from "../components/SocialMedia";
import { useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const taglines = [
  "Crafting full-stack solutions with precision and empathy. 🛠️",
  "Designing with clarity, developing with purpose. 🎯",
  "Your ideas, turned into digital magic. ✨",
  "Full-stack solutions, front to back. 👩‍💻",
];

const taglineFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 0.8 } },
};

const emojiFloat = {
  animate: {
    y: [0, -8, 0], 
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
  id="home"
  className="relative flex flex-col justify-center items-center md:items-start mt-16 md:mt-24 px-4 md:px-0 max-w-3xl mx-auto font-poppins"
>
<motion.div
  initial={{ y: -80, opacity: 0, scale: 0.98 }}
  animate={{ y: 0, opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  style={{ willChange: "transform" }}
  className="absolute inset-0 z-[-1] rounded-xl bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 opacity-20 blur-xl"
/>


<motion.h1
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  custom={1}
  className="text-xl md:text-2xl font-semibold text-black text-center md:text-left mb-2 whitespace-nowrap"
>
  Step inside my digital space —{" "}
  <span className="text-blue-900">
    turning ideas into seamless experiences.{" "}
   
  </span>
  <span className="inline-block animate-wave">👩‍💻</span>
</motion.h1>



{/* Rotating Tagline */}
<AnimatePresence mode="wait">
  <motion.p
    key={taglineIndex}
    variants={taglineFade}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="text-black text-base font-semibold md:text-lg leading-snug max-w-lg text-center md:text-left min-h-[3rem] mt-1"
  >
    {taglines[taglineIndex]}
  </motion.p>
</AnimatePresence>


</motion.section>

  );
};

export default Home;
