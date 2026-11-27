import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/loga-benjamin-58850b444/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/loga17', label: 'GitHub' },
    { icon: FaXTwitter, url: 'https://x.com/PrimsDev', label: 'X (Twitter)' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-base-200 py-10 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        
        {/* Logo */}
        <Logo />

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center">
          {t('footer.copyright')}
        </p>

        {/* Réseaux Sociaux */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-prims-orange hover:scale-110 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;