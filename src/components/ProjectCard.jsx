import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProjectCard = ({ title, description, link, date, technologies, images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    // Cleanup interval when component unmounts or hover ends
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
      }, 1000); // Faster transition to next image
      setIntervalId(interval); // Store interval ID for cleanup
    }
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear interval on mouse leave
    }
    setCurrentImage(0); // Reset to the first image
  };

  return (
    <motion.div
      className="flex flex-col h-full gap-4 py-4 shadow-md rounded-lg hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Slideshow with Slide Animation entering from right to left */}
      <motion.img
        src={images[currentImage]}
        alt={title}
        className="w-full object-contain"
        initial={{ x: '100%' }} // Start from the right (off-screen)
        animate={{ x: '0%' }}    // Slide to center (on hover)
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20,
          duration: 0.5,          // Duration of the transition
        }}
      />

      {/* Title & Date */}
      <div className="px-4">
        <h3 className="text-[22px] font-bold text-black-800 hover:text-blue-800 hover:underline">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-700">{date}</p>
      </div>

      {/* Description */}
      <p className="text-black-800 px-4 flex-grow line-clamp-3 md:line-clamp-none">
        {description}
      </p>

      {/* View Project Button */}
      <div className="px-4 pb-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-black-800 hover:text-blue-700 transition-all duration-200 group"
        >
          View Project
          <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </a>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  technologies: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
