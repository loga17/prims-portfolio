import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { fetchProjects } from '../services/api';
import Title from './Title';
import CardProject from './CardProject';
import { ArrowRight } from 'lucide-react';

// On définit un type pour les projets
interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  demoLink: string | null;
  githubLink: string | null;
}

const Projects = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data.slice(0, 3)); // On prend les 3 premiers
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  if (loading) return <div className="text-center py-20">Chargement...</div>;

  return (
    <section id="projects" className="py-20 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <Title text={t('projects.title')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <CardProject
              key={project.id}
              id={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              stack={project.stack}
              githubLink={project.githubLink || undefined}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link to="/projets">
            <button className="bg-base-100 border-2 border-base-300 text-base-content px-8 py-4 rounded-xl font-semibold hover:border-prims-orange hover:text-prims-orange transition-all duration-300 flex items-center gap-2">
              {t('projects.viewAll')}
              <ArrowRight size={20} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;