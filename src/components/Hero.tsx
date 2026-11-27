import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/imageprofil.png';

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen flex items-center pt-28 pb-12 px-4">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Texte (à gauche sur desktop, en bas sur mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 flex flex-col gap-6 text-center md:text-left"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold leading-tight">
            {t('hero.greeting')}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-prims-orange">
            {t('hero.role')}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-500 text-lg max-w-lg mx-auto md:mx-0">
            Je conçois des solutions numériques performantes et intuitives, en alliant design épuré et architecture robuste.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-4">
            <Link to="/contact">
              <button className="w-full md:w-auto bg-prims-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail size={20} />
                {t('hero.cta')}
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Carte de Profil (à droite sur desktop, en haut sur mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center"
        >
          {/* Conteneur principal de la carte */}
          <div className="bg-base-100 p-3 rounded-[2.5rem] shadow-xl w-full max-w-sm border border-base-200">
            
            {/* Image */}
            <div className="rounded-[2rem] overflow-hidden aspect-square">
              <img 
                src={profileImg} 
                alt="Loga Benjamin" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Infos en bas */}
            <div className="flex justify-between items-center p-4 pt-6">
              <div>
                <h3 className="text-xl font-bold text-base-content">Loga Benjamin</h3>
                <p className="text-sm text-gray-500">Développeur Fullstack</p>
              </div>
              
              {/* Icône de contact */}
              <Link to="/contact">
                <button className="bg-base-100 p-3 rounded-full shadow-md hover:bg-prims-orange hover:text-white transition-all duration-300 border border-base-200">
                  <Send size={20} />
                </button>
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;