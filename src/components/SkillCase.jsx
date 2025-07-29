import { motion } from "framer-motion";
import { fadeinSkills } from "../utils/data";

const SkillCase = ({ items }) => {
  return (
    <div className="h-max w-full">
      <div className="mx-auto grid max-w-4xl lg:grid-cols-5 grid-cols-2 md:grid-cols-4 items-center gap-x-3 gap-y-6 sm:grid-cols-3 lg:gap-x-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            variants={fadeinSkills}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.18 }}
          >
            <img
              className="h-12 w-12 object-contain"
              src={item.src}
              alt={item.alt}
            />
            <p className="mt-2 font-small  text-black-900">{item.alt}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillCase;
