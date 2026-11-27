import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center flex flex-col items-center gap-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold flex items-center gap-4">
          Soumission Terminé 
          <span className="bg-black text-white p-3 rounded-xl rotate-12">
            <ArrowRight size={32} />
          </span>
        </h1>
        <p className="text-lg text-gray-500 max-w-lg">
          Nous avons reçu votre soumission. Notre équipe vous contactera sous peu.
        </p>
        <Link 
          to="/" 
          className="bg-base-100 border-2 border-base-300 px-6 py-3 rounded-xl font-semibold hover:border-prims-orange hover:text-prims-orange transition-all duration-300 flex items-center gap-2 mt-4"
        >
          Retour à la maison <ArrowRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
};

export default ThankYou;