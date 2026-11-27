import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface CardSkillProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const CardSkill = ({ icon: Icon, title, description, index }: CardSkillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center gap-3"
    >
      <div className="text-prims-orange p-3 bg-orange-50 rounded-full">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </motion.div>
  );
};

export default CardSkill;