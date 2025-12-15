import React from "react";
import { motion } from "framer-motion";
import { User, Heart } from "lucide-react"; 

import PageTitle from "../components/PageTitle";
import Skills from "./skills";
import SocialMedia from "../components/SocialMedia";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutMe = () => {
  return (
    <>
      <div id="about" />
      <PageTitle title="ABOUT ME" />

      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white shadow rounded-lg p-6 transition-transform duration-500 hover:scale-[1.01]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* My Story */}
            <motion.div
              custom={0.2}
              variants={fadeUp}
              className="bg-blue-50 border-l-4 border-blue-600 px-4 py-3 rounded-md text-black text-sm md:text-base font-medium shadow-sm mt-4 md:mt-6"
            >
              <div className="flex items-center mb-3">
                <User className="w-5 h-5 text-blue-600 mr-2" /> {/* ✅ Fixed */}
                <h3 className="text-base font-semibold text-black">My Story</h3>
              </div>
              <p className="text-sm md:text-base font-normal text-black leading-relaxed">
                I’m Ankita, a full-stack developer passionate about turning ideas into clean, functional, and user-friendly digital experiences—from front-end pixels to back-end logic.
              </p>
            </motion.div>

            {/* What I Love */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              className="bg-blue-50 border-l-4 border-blue-600 px-4 py-3 rounded-md text-black text-sm md:text-base font-medium shadow-sm mt-4 md:mt-6"
            >
              <div className="flex items-center mb-3">
                <Heart className="w-5 h-5 text-red-500 mr-2" /> {/* ✅ Fixed */}
                <h3 className="text-base font-semibold text-black">What I Love</h3>
              </div>
              <p className="text-sm md:text-base font-normal text-black leading-relaxed mt-2">
                I love crafting user-friendly web experiences and exploring AI to solve real-world problems. Fueled by creativity & curiosity, I enjoy turning ideas into innovative digital solutions. 🚀
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Connect with me */}
        <div className="pt-4">
          <h3 className="font-semibold text-black text-lg mb-4 text-center md:text-left">
            Connect with me
          </h3>
          <div className="flex justify-center md:justify-start">
            <SocialMedia />
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Skills />
        </motion.div>
      </main>
    </>
  );
};

export default AboutMe;
