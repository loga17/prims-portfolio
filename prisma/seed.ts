/// <reference types="node" />
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL is not defined');

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Début du seed...');

  // 1. Compétences
  const skills = [
    { title: 'Développeur Frontend', description: 'Je conçois des interfaces modernes, réactives et accessibles avec React, Next.js et Tailwind CSS.', iconName: 'Code' },
    { title: 'Développeur Backend', description: 'Je développe des APIs robustes et sécurisées avec Node.js, PHP et Prisma pour connecter les données au frontend.', iconName: 'Server' },
    { title: 'Passionné UI/UX', description: 'Je place l\'expérience utilisateur au cœur de chaque projet, en créant des designs épurés et intuitifs.', iconName: 'Palette' },
    { title: 'Conception de Bases de Données', description: 'Je modélise des bases de données relationnelles performantes (PostgreSQL, MySQL) avec un souci d\'intégrité et d\'optimisation.', iconName: 'Database' },
    { title: 'Analyse Fonctionnelle', description: 'Je traduis les besoins métiers en spécifications techniques claires pour garantir la réussite des projets.', iconName: 'FileText' },
  ];
  await prisma.skill.createMany({ data: skills });
  console.log('✅ Compétences ajoutées');

  // 2. Expériences
  const experiences = [
    { company: 'MINEE (Ministère de l\'Eau et de l\'Énergie)', role: 'Stagiaire Ingénieur Logiciel', dates: 'Mars 2026 - Mai 2026', description: 'Conception et déploiement d\'une solution de gestion des projets. Analyse des besoins, modélisation des processus métier et optimisation de la base de données.' },
    { company: 'MINEE (Ministère de l\'Eau et de l\'Énergie)', role: 'Stagiaire Développeur', dates: 'Juillet 2024 - Septembre 2024', description: 'Conception et développement d\'un système de gestion de la base de données des projets énergétiques. Modélisation des données, tests et validation.' },
  ];
  await prisma.experience.createMany({ data: experiences });
  console.log('✅ Expériences ajoutées');

  // 3. Projets
  const projects = [
        {
      slug: 'taskflow',
      title: 'TaskFlow',
      description: 'Application web collaborative de gestion de projets et de suivi des tâches, intégrant un système innovant de capitalisation des solutions techniques lors de la clôture des tickets.',
      longDescription: `TaskFlow est une plateforme moderne de gestion de projets et de tâches conçue pour fluidifier le travail des développeurs et des équipes techniques. Au-delà d'un simple tableau de suivi, l'application intègre un workflow collaboratif par code d'invitation unique et un système de clôture inédit : pour marquer une tâche comme terminée, le collaborateur assigné doit documenter la solution technique via un éditeur riche (code, texte, médias). L'outil agit ainsi comme un gestionnaire de tâches doublé d'une base de connaissances pérenne.`,
      image: 'https://res.cloudinary.com/lbrfwoql/image/upload/v1795464546/c7.png', // Remplace par ton URL
      screenshots: [
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682731/c1.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682731/c2.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682738/c3.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682736/c4.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682734/c5.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682738/c6.png',
        
      ],
      stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Prisma', 'PostgreSQL', 'Clerk'],
      demoLink: 'https://prims-taskflow.vercel.app',
      githubLink: 'https://github.com/loga17/task-flow',
    },
    {
      slug: 'gins-minEE',
      title: 'GINS_MINEE',
      description: 'Plateforme web de gouvernance et de suivi des infrastructures nationales d\'eau et d\'énergie, intégrant un calcul d\'avancement physique en temps réel, un tableau de bord décisionnel Bento et un espace Kanban pour les techniciens terrain.',
      longDescription: `GINS_MINEE est une application web d'administration publique conçue pour le Ministère de l'Eau et de l'Énergie du Cameroun (MINEE), permettant le pilotage centralisé, le suivi de la progression physique et le contrôle de l'exécution budgétaire des chantiers nationaux (barrages, centrales, forages et réseaux d'eau). Développée en PHP 8 natif, MySQL (InnoDB), CSS3 pur (Material Design 3) et JavaScript Vanilla, la plateforme intègre un contrôle d'accès strict (RBAC à 4 profils), un tableau de bord décisionnel Bento avec KPIs en temps réel, un tableau Kanban pour les agents terrain et une GED sécurisée.`,
      image: 'https://res.cloudinary.com/lbrfwoql/image/upload/v1795464546/b8.png', // Remplace par ton URL
      screenshots: [
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682791/b1.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682790/b2.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682780/b3.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682783/b4.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682783/b5.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682785/b6.png',
        'https://res.cloudinary.com/lbrfwoql/image/upload/v1795682787/b7.png',

      ],
      stack: ['PHP 8', 'MySQL 8', 'JavaScript Vanilla', 'CSS3', 'Apache', 'RBAC'],
      demoLink: null,
      githubLink: 'https://github.com/loga17/GINS_MINEE',
    },
  ];
  await prisma.project.createMany({ data: projects });
  console.log('✅ Projets ajoutés');

  console.log('Seed terminé !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });