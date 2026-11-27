import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const navLinks = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.about'), path: '/#about' },
    { name: t('navbar.experiences'), path: '/#experiences' },
    { name: t('navbar.projects'), path: '/projets' },
    { name: t('navbar.contact'), path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      // On retire 'fixed top-0 w-full' et on met un conteneur flottant
      className="fixed top-0 left-0 w-full z-50 px-4 pt-4 md:pt-6 pointer-events-none"
    >
      {/* Conteneur de la barre flottante */}
      <div className="max-w-7xl mx-auto bg-base-100/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex justify-between items-center pointer-events-auto border border-base-200">
        
        {/* Logo */}
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <Logo />
        </Link>

        {/* Liens Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-sm font-medium hover:text-prims-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Boutons Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleLanguage} className="flex items-center gap-1 text-sm font-medium hover:text-prims-orange transition-colors">
            <Globe size={18} />
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-base-200 transition-colors">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Menu Burger Mobile */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-base-200 transition-colors">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Menu Mobile (Overlay) - on le garde fixé en dessous de la navbar flottante */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden max-w-7xl mx-auto mt-2 bg-base-100/95 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden pointer-events-auto border border-base-200"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium hover:text-prims-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={toggleLanguage} 
                className="flex items-center gap-2 text-lg font-medium hover:text-prims-orange transition-colors text-left"
              >
                <Globe size={20} />
                {language === 'fr' ? 'English' : 'Français'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;