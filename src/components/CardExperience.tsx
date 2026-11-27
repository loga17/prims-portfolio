import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface CardExperienceProps {
  company: string;
  role: string;
  dates: string;
  description: string;
  index: number;
}

const CardExperience = ({ company, role, dates, description, index }: CardExperienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col gap-2"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="text-prims-orange">
          <Briefcase size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold">{role}</h3>
          <p className="text-sm font-semibold text-prims-orange">{company}</p>
        </div>
      </div>
      <span className="text-xs font-medium text-gray-400 bg-base-200 w-fit px-3 py-1 rounded-full">
        {dates}
      </span>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </motion.div>
  );
};

export default CardExperience;