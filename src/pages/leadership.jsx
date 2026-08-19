import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle";
import { leadership } from "../utils/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Leadership = () => {
  return (
    <div id="leadership" className="flex flex-col items-center justify-center py-14 px-4">
      <PageTitle title="LEADERSHIP & COMMUNITY" />
      <div className="w-full max-w-3xl">
        {leadership.map((item, index) => (
          <motion.div
            key={`${item.role}_${item.org}`}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex gap-5 sm:gap-6"
          >
            {/* Icon marker + connecting line */}
            <div className="flex flex-col items-center">
              <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-white border-2 border-blue-900 text-lg">
                {item.icon}
              </span>
              {index !== leadership.length - 1 && (
                <span className="w-px flex-1 my-1 bg-blue-100" />
              )}
            </div>

            {/* Content */}
            <div className={index !== leadership.length - 1 ? "pb-10" : ""}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-x-2 pt-1.5">
                <h3 className="text-xl font-semibold font-marcellus text-black leading-snug">
                  {item.role}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${item.org} website`}
                    className="text-base text-blue-900 font-medium hover:text-blue-600 hover:underline transition-colors duration-200"
                  >
                    {item.org}
                  </a>
                ) : (
                  <span className="text-base text-blue-900 font-medium">
                    {item.org}
                  </span>
                )}
              </div>

              <p className="mt-2 text-base text-gray-700 leading-relaxed max-w-xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
