import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { fetchSkills } from '../services/api';
import Title from './Title';
import CardSkill from './CardSkill';
import profileImg from '../assets/imageprofil.png';
import { Code, Server, Palette, Database, FileText } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  Code, Server, Palette, Database, FileText
};

interface Skill {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

const About = () => {
  const { t } = useLanguage();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await fetchSkills();
        setSkills(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadSkills();
  }, []);

  if (loading) return <div className="text-center py-20">Chargement...</div>;

  return (
    <section id="about" className="py-20 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <Title text={t('about.title')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex justify-center md:justify-start"
          >
            <div className="w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl rotate-[-5deg] hover:rotate-0 transition-transform duration-500 bg-base-200">
              <img 
                src={profileImg} 
                alt="Loga Benjamin" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            {skills.map((skill, index) => (
              <CardSkill
                key={skill.id}
                icon={iconMap[skill.iconName] || Code}
                title={skill.title}
                description={skill.description}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;