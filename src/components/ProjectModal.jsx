import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const {
    images = [],
    title = "",
    date = "",
    description = "",
    technologies = "",
    impact = "",
    link = "#",
  } = project || {};

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
          className="absolute top-3 right-4 text-3xl text-black hover:text-black"
          aria-label="Close modal"
        >
          &times;
        </button>

        {images[0] && (
          <img
            src={images[0]}
            alt={title}
            className="rounded-md mb-6 w-full object-contain max-h-[40vh]"
            style={{ maxHeight: "40vh" }}
          />
        )}

        <h2 className="text-3xl font-bold mb-1">{title}</h2>
        <p className="text-base text-black mb-4">{date}</p>


        <p className="text-black text-[16px] leading-relaxed mb-6">{description}</p>

        {technologies && (
          <>
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.split(",").map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 text-sm rounded-full"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </>
        )}

     

        {/* GitHub Link */}
        <div className="mt-6">
          <a
            href={link}
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
    impact: PropTypes.string,
    link: PropTypes.string,
    technologies: PropTypes.string,
  }),
};

export default ProjectModal;
