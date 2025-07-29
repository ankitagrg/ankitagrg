import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Transparent blurred background */}
      <div
        className="absolute inset-0 backdrop-blur-md backdrop-saturate-150 bg-white/10"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="bg-white w-full max-w-2xl max-h-[90vh] p-8 rounded-2xl relative z-10 overflow-y-auto shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-3xl text-black-900 hover:text-black"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Image */}
        {project.images && project.images[0] && (
          <img
            src={project.images[0]}
            alt={project.title}
            className="rounded-md mb-6 w-full object-contain max-h-[40vh]"
            style={{ maxHeight: "40vh" }}
          />
        )}

        {/* Title & Date */}
        <h2 className="text-3xl font-bold mb-1">{project.title}</h2>
        <p className="text-base text-black-900 mb-4">{project.date}</p>

        {/* Description */}
        <p className="text-black-900 text-[16px] leading-relaxed mb-6">{project.description}</p>

        {/* Technologies */}
        <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.split(",").map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Optional Impact */}
        {project.impact && (
          <>
            <h3 className="text-lg font-semibold mb-2">Impact</h3>
            <p className="text-black-900 text-sm mb-6">{project.impact}</p>
          </>
        )}

        {/* Only GitHub Icon */}
        <div className="mt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-black-900 text-3xl"
            aria-label="GitHub Repository"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.string,
    impact: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default ProjectModal;
