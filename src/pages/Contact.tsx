import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Title from '../components/Title';
import { Mail, Phone, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

// Remplace par ton Access Key Web3Forms
const WEB3FORMS_ACCESS_KEY = "bd1c2a24-a883-4221-9d2a-a9be412ce906";

const Contact = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.email || !formData.message) {
      setError("Veuillez remplir tous les champs avant de soumettre.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nouveau message de ${formData.name} (Portfolio)`,
          from_name: "Portfolio Prims",
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Erreur lors de l'envoi.");
      }

      // Succès : on redirige vers la page de remerciement
      navigate('/merci');
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Title text={t('contact.title')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-50 text-prims-orange rounded-full mt-1">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <p className="font-semibold">+237 659 040 503</p>
                <p className="font-semibold">+237 640 220 619</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-50 text-prims-orange rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">logabenjamin17@icloud.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-base-200 rounded-full hover:text-prims-orange transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/loga17" target="_blank" rel="noreferrer" className="p-3 bg-base-200 rounded-full hover:text-prims-orange transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-3 bg-base-200 rounded-full hover:text-prims-orange transition-colors">
                <FaXTwitter size={24} />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-base-100 p-8 rounded-3xl shadow-lg border border-base-200 flex flex-col gap-4"
          >
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-2 border border-red-200">
                <AlertCircle size={20} />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <div>
              <label className="text-sm font-medium mb-1 block">{t('contact.name')}</label>
              <input 
                type="text" 
                className="input input-bordered w-full rounded-xl focus:border-prims-orange focus:outline-none bg-base-100" 
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">{t('contact.email')}</label>
              <input 
                type="email" 
                className="input input-bordered w-full rounded-xl focus:border-prims-orange focus:outline-none bg-base-100" 
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">{t('contact.message')}</label>
              <textarea 
                className="textarea textarea-bordered w-full rounded-xl h-32 focus:border-prims-orange focus:outline-none bg-base-100" 
                placeholder="Votre message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`py-3 rounded-xl font-semibold transition-colors mt-2 ${
                isSubmitting ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-prims-orange text-white hover:bg-orange-600'
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : t('contact.submit')}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;