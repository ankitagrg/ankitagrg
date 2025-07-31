import { motion } from "framer-motion";
import { fadeinSkills } from "../utils/data";

const SkillCase = ({ items }) => {
  return (
    <div className="h-max w-full">
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 items-center gap-x-4 gap-y-14">

        {items.map((item, index) => (
          <ul key={`alt_${index}`}>
            <motion.li
              variants={fadeinSkills}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.3 }}
              className="flex flex-col items-center"
            >
              <img
                className="col-span-1 max-h-12 w-full object-contain lg:col-span-1"
                src={item.src}
                alt={item.alt}
              />
              <p className="mt-2 text-center text-sm text-gray-800">{item.alt}</p>
            </motion.li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SkillCase;
