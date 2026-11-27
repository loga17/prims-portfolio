import { motion } from 'framer-motion';

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className = '' }: TitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 ${className}`}
    >
      {text}
    </motion.h2>
  );
};

export default Title;