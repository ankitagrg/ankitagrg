import { motion } from "framer-motion";

const PageTitle = ({ title, watermark = true }) => {
  const titleVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  if (!watermark) {
    return (
      <div className="flex flex-col items-center justify-center my-8">
        <motion.h1
          className="md:text-3xl text-2xl font-marcellus text-black-800"
          variants={titleVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>
      </div>
    );
  }

  return (
    <div className="relative my-8 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-marcellus font-semibold opacity-10">
        {title}
      </h1>

      {/* Animated main title, centered on top of the watermark regardless of line wrapping */}
      <motion.h1
        className="absolute inset-0 flex items-center justify-center md:text-3xl text-2xl font-marcellus text-black-800"
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
