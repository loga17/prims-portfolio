import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error('DATABASE_URL is not defined');

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

const app = express();
app.use(cors());
app.use(express.json());

// Route pour récupérer tous les projets
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des projets' });
  }
});

// Route pour récupérer un projet par son slug
app.get('/api/projects/:slug', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { slug: req.params.slug },
    });
    if (!project) {
      return res.status(404).json({ error: 'Projet non trouvé' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du projet' });
  }
});

// Route pour récupérer toutes les compétences
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({ orderBy: { order: 'asc' } });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des compétences' });
  }
});

// Route pour récupérer toutes les expériences
app.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await prisma.experience.findMany({ orderBy: { order: 'asc' } });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des expériences' });
  }
});

export default app;