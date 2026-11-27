const API_URL = 'http://localhost:3001/api';

export const fetchProjects = async () => {
  const res = await fetch(`${API_URL}/projects`);
  if (!res.ok) throw new Error('Erreur lors de la récupération des projets');
  return res.json();
};

export const fetchProjectBySlug = async (slug: string) => {
  const res = await fetch(`${API_URL}/projects/${slug}`);
  if (!res.ok) throw new Error('Erreur lors de la récupération du projet');
  return res.json();
};

export const fetchSkills = async () => {
  const res = await fetch(`${API_URL}/skills`);
  if (!res.ok) throw new Error('Erreur lors de la récupération des compétences');
  return res.json();
};

export const fetchExperiences = async () => {
  const res = await fetch(`${API_URL}/experiences`);
  if (!res.ok) throw new Error('Erreur lors de la récupération des expériences');
  return res.json();
};