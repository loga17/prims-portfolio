import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchProjects } from '../services/api';
import Title from '../components/Title';
import CardProject from '../components/CardProject';

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

const AllProjects = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
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
    <section className="pt-32 *pb-20 px-4 min-h-screen">
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
      </div>
    </section>
  );
};

export default AllProjects;