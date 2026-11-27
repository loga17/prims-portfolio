import taskflowImg from '../assets/c7.png';
import ginsImg from '../assets/b8.png';

export const projectsData = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'Application web collaborative de gestion de projets et de suivi des tâches, intégrant un système innovant de capitalisation des solutions techniques lors de la clôture des tickets.',
    image: taskflowImg, // On utilise l'import
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Prisma', 'PostgreSQL', 'Clerk'],
    demoLink: 'https://prims-taskflow.vercel.app',
    githubLink: 'https://github.com/loga17/task-flow',
    longDescription: `TaskFlow est une plateforme moderne de gestion de projets et de tâches conçue pour fluidifier le travail des développeurs et des équipes techniques. Au-delà d'un simple tableau de suivi, l'application intègre un workflow collaboratif par code d'invitation unique et un système de clôture inédit : pour marquer une tâche comme terminée, le collaborateur assigné doit documenter la solution technique via un éditeur riche (code, texte, médias). L'outil agit ainsi comme un gestionnaire de tâches doublé d'une base de connaissances pérenne.`,
    screenshots: ['c1.png', 'c2.png', 'c3.png', 'c4.png', 'c5.png', 'c6.png'], // Nous les importerons plus tard
  },
  {
    id: 'gins-minEE',
    title: 'GINS_MINEE',
    description: 'Plateforme web de gouvernance et de suivi des infrastructures nationales d\'eau et d\'énergie, intégrant un calcul d\'avancement physique en temps réel, un tableau de bord décisionnel Bento et un espace Kanban pour les techniciens terrain.',
    image: ginsImg, // On utilise l'import
    stack: ['PHP 8', 'MySQL 8', 'JavaScript Vanilla', 'CSS3', 'Apache', 'RBAC'],
    demoLink: null,
    githubLink: 'https://github.com/loga17/GINS_MINEE',
    longDescription: `GINS_MINEE est une application web d'administration publique conçue pour le Ministère de l'Eau et de l'Énergie du Cameroun (MINEE), permettant le pilotage centralisé, le suivi de la progression physique et le contrôle de l'exécution budgétaire des chantiers nationaux (barrages, centrales, forages et réseaux d'eau). Développée en PHP 8 natif, MySQL (InnoDB), CSS3 pur (Material Design 3) et JavaScript Vanilla, la plateforme intègre un contrôle d'accès strict (RBAC à 4 profils), un tableau de bord décisionnel Bento avec KPIs en temps réel, un tableau Kanban pour les agents terrain et une GED sécurisée.`,
    screenshots: ['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b6.png', 'b7.png'], // Nous les importerons plus tard
  },
];