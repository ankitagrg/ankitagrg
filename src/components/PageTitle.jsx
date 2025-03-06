import { motion } from "framer-motion";

const PageTitle = ({ title }) => {
  const titleVariants = {
    initial: { opacity: 0, x: -100 },  // Starts from the left side
    animate: { opacity: 1, x: 0, transition: { duration: 1.5} },  
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      {/* Hidden part for the initial fade-in effect */}
      <motion.h1
        className="text-3xl font-semibold bg-clip-text bg-gradient-to-r from-blue-500"
        variants={titleVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default PageTitle;
