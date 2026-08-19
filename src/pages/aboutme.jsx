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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* My Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1}
            variants={fadeUp}
            className="bg-blue-50 border-l-4 border-blue-600 px-4 py-4 rounded-md shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-blue-600" />
              <h3 className="text-sm font-semibold text-black">My Story</h3>
            </div>
            <p className="text-sm text-black leading-relaxed">
              I'm Ankita, a software developer who transforms ideas into clean, functional, and user-friendly experiences. From designing intuitive interfaces to building reliable back-end systems, I create solutions that deliver lasting impact.
            </p>
          </motion.div>

          {/* What I Love */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.25}
            variants={fadeUp}
            className="bg-blue-50 border-l-4 border-blue-600 px-4 py-4 rounded-md shadow-sm"
          >
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4 text-red-500" />
              <h3 className="text-sm font-semibold text-black">What I Love</h3>
            </div>
            <p className="text-sm text-black leading-relaxed">
              I love building user-friendly web experiences and exploring AI to solve real-world problems. Driven by creativity and curiosity, I enjoy turning ambitious ideas into innovative, meaningful digital solutions that inspire.
            </p>
          </motion.div>
        </div>

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
