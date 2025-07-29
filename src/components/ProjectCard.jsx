import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ title, description, link, date, technologies, images, demo, impact }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleMouseEnter = () => {
    if (images.length > 1) {
      let index = 0;
      const interval = setInterval(() => {
        index = (index + 1) % images.length;
        setCurrentImage(index);
      }, 1000);
      setIntervalId(interval);
    }
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setCurrentImage(0);
  };

  return (
    <>
      <motion.div
        className="flex flex-col h-full gap-4 py-4 shadow-md rounded-lg hover:shadow-lg transition-shadow"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.img
          src={images[currentImage]}
          alt={title}
          className="w-full object-contain"
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 20,
            duration: 0.5,
          }}
        />

        <div className="px-4">
          <h3 className="text-[22px] font-bold text-black-900 hover:text-blue-800 hover:underline">
            {title}
          </h3>
          <p className="mt-1 text-sm text-black-900">{date}</p>
        </div>

        <p className="text-black-900 px-4 flex-grow line-clamp-3 md:line-clamp-none">
          {description}
        </p>

        <div className="px-4 pb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center text-black-900 hover:text-blue-900 transition-all duration-200 group"
          >
            View Project
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        project={{ title, description, date, technologies, images, link, demo, impact }}
      />
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  technologies: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  demo: PropTypes.string,
  impact: PropTypes.string,
};

export default ProjectCard;
