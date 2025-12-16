import PropTypes from "prop-types";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  const {
    images = [],
    title = "",
    date = "",
    description = "",
    technologies = "",
    link = "#",
  } = project || {};

  // Projects WITHOUT GitHub
  const noGithubProjects = [
    "🛠️ Technical Sewa",
    "👩‍💻 Rinovix",
    "🧰 Smart Care",
  ];

  const showGithub = !noGithubProjects.includes(title);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Background */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-white/10"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="bg-white w-full max-w-2xl max-h-[90vh] p-6 rounded-2xl relative z-10 overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-3xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Project Image */}
        {images[0] && (
          <img
            src={images[0]}
            alt={title}
            className="rounded-md mb-6 w-full object-contain max-h-[40vh]"
          />
        )}

        {/* Title & Date */}
        <h2 className="text-3xl font-bold mb-1">{title}</h2>
        <p className="text-sm mb-4">{date}</p>

        {/* Description */}
        <p className="mb-6">{description}</p>

        {/* Technologies */}
        {technologies && (
          <>
            <h3 className="font-semibold mb-2">Technologies Used</h3>
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

        {/* Link */}
        <div className="mt-6">
          {showGithub ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-3xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-3xl"
              aria-label="Website"
            >
              <FaGlobe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

export default ProjectModal;
