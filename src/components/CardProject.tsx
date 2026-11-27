import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface CardProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  githubLink?: string;
  index: number;
}

const CardProject = ({ 
  id, 
  title, 
  description, 
  image, 
  stack, 
  githubLink,
  index 
}: CardProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-base-100 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col border border-base-200"
    >
      {/* Titre seul (petit) - SANS catégorie à droite */}
      <div className="p-5 pb-0">
        <h3 className="text-sm font-bold">{title}</h3>
      </div>

      {/* Image du projet */}
      <div className="p-5 pt-3">
        <div className="overflow-hidden rounded-2xl h-48 md:h-56">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
          />
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="px-5 pb-5 flex flex-col flex-grow gap-4">
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        
        {/* Tags de la stack */}
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="text-xs font-medium bg-base-200 px-3 py-1 rounded-full text-gray-600">
              {tech}
            </span>
          ))}
        </div>

        {/* Boutons */}
        <div className="flex items-center gap-3 mt-auto pt-2">
          <Link to={`/projets/${id}`} className="flex-1">
            <button className="w-full bg-prims-orange text-white py-2 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              Détails <ArrowRight size={16} />
            </button>
          </Link>
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-base-200 p-2 rounded-xl hover:bg-gray-300 transition-colors"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CardProject;