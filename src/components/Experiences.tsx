import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { fetchExperiences } from '../services/api';
import Title from './Title';
import CardExperience from './CardExperience';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiTypescript, SiNextdotjs, SiPrisma } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

interface Experience {
  id: string;
  company: string;
  role: string;
  dates: string;
  description: string;
}

const Experiences = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        const data = await fetchExperiences();
        setExperiences(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadExperiences();
  }, []);

  const stack = [
    { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: SiCss, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Next.js', icon: SiNextdotjs, color: theme === 'dark' ? 'text-white' : 'text-black' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-indigo-500' },
  ];

  const duplicatedStack = [...stack, ...stack, ...stack];

  const StackCard = ({ tech }: { tech: typeof stack[0] }) => (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-base-100 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300 min-w-[120px] md:min-w-0">
      <tech.icon 
        size={32} 
        className={tech.color} 
        style={{ color: tech.name === 'Next.js' ? (theme === 'dark' ? 'white' : 'black') : undefined }} 
      />
      <span className="text-xs font-medium text-center">{tech.name}</span>
    </div>
  );

  if (loading) return <div className="text-center py-20">Chargement...</div>;

  return (
    <section id="experiences" className="py-20 px-4 bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Title text={t('experiences.title')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          
          <div className="order-1 md:order-2 flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <CardExperience
                key={exp.id}
                company={exp.company}
                role={exp.role}
                dates={exp.dates}
                description={exp.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 flex flex-col justify-center"
          >
            <div className="block md:hidden relative overflow-hidden marquee-gradient">
              <div className="flex gap-4 w-max animate-marquee py-4">
                {duplicatedStack.map((tech, index) => (
                  <StackCard key={`${tech.name}-mobile-${index}`} tech={tech} />
                ))}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-4">
              {stack.map((tech) => (
                <StackCard key={`${tech.name}-desktop`} tech={tech} />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experiences;