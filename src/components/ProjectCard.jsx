import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link, date, technologies, image }) => {
  return (
    <motion.div
      className="flex flex-col h-full gap-4 py-4 shadow-md rounded-lg hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }} // Popup effect (slightly zoom in on hover)
      transition={{ duration: 0.3 }} // Smooth transition for hover effect
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full object-contain" />

      {/* Title & Date */}
      <div className="px-4">
        <h3 className="text-[22px] font-bold text-gray-800 hover:text-blue-800 hover:underline">
          {title}
        </h3>
        <p className="text-sm text-black-800">{date}</p>
      </div>

      {/* Description */}
      <p className="text-gray-800 px-4 flex-grow line-clamp-3 md:line-clamp-none">
        {description}
      </p>

      {/* Technologies & GitHub Link - Wrapped for Consistency */}
      <div className="px-4 flex flex-col gap-2 mt-auto">
        <div className="flex items-center">
          <BsGithub size={22} className="text-gray-800" />
          <Link to={link} className="ml-2 text-black-800 hover:underline">
            GitHub Repository
          </Link>
        </div>
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
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
