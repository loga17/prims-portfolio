import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { fetchProjectBySlug } from '../services/api';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  stack: string[];
  demoLink: string | null;
  githubLink: string | null;
}

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await fetchProjectBySlug(slug!);
        setProject(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  }, [slug]);

  if (loading) return <div className="pt-32 text-center min-h-screen">Chargement...</div>;

  if (!project) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-2xl font-bold">Projet non trouvé</h1>
        <Link to="/projets" className="text-prims-orange hover:underline mt-4 block">
          Retour aux projets
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">

        <Link to="/projets" className="inline-flex items-center gap-2 text-gray-500 hover:text-prims-orange mb-8 transition-colors">
          <ArrowLeft size={20} />
          Retour aux projets
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{project.title}</h1>

          {/* Description longue */}
          <p className="text-lg text-gray-500 mb-8 whitespace-pre-line">{project.longDescription}</p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((tech) => (
              <span key={tech} className="bg-base-200 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Boutons */}
          <div className="flex items-center gap-4 mb-12">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-prims-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2"
              >
                Démo <ArrowRight size={20} />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-base-200 px-6 py-3 rounded-xl font-semibold hover:bg-base-300 transition-colors flex items-center gap-2"
              >
                <FaGithub size={20} /> GitHub
              </a>
            )}
          </div>

          {/* Image principale */}
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
            <img src={project.image} alt={project.title} className="w-full h-auto" />
          </div>

          {/* Captures d'écran */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Captures d'écran</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden shadow-md">
                    <img src={screenshot} alt={`Capture ${index + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetail;