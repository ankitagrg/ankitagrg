import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  title,
  description,
  link,
  date,
  images,
  demo,
  impact,
  technologies, 
}) => {
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
        className="flex flex-col h-full py-4 shadow-md rounded-xl bg-white hover:shadow-lg transition-shadow duration-300"
        whileHover={{ scale: 1.03 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project Image */}
        <motion.img
          src={images[currentImage]}
          alt={title}
          className="w-full h-48 object-contain "
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            duration: 0.5,
          }}
        />
        <div className="flex flex-col flex-grow px-4 mt-3 space-y-2">
          <h3 className="text-lg md:text-xl font-semibold font-marcellus text-pri hover:text-blue-800 hover:underline">
            {title}
          </h3>
          <p className="text-sm text-black">{date}</p>
          <p className="text-sm  text-black flex-grow line-clamp-3 md:line-clamp-none">
            {description}
          </p>
        </div>
        <div className="px-4 pt-4 mt-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center text-black hover:text-blue-900 transition-all duration-200 group"
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
        project={{
          title,
          description,
          date,
          images,
          link,
          demo,
          impact,
          technologies, 
        }}
      />
    </>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  demo: PropTypes.string,
  technologies: PropTypes.string.isRequired,
  impact: PropTypes.string,
};

export default ProjectCard;
