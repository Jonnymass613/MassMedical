export type Tier = 'medical' | 'nursing' | 'highschool';

export interface Course {
  id: string;
  title: string;
  description: string;
  tier: Tier;
  videoUrl: string;
  diagramUrl: string;
  slideshowUrl: string;
  mindMapUrl: string;
}

export const courses: Course[] = [
  // Medical Tier
  {
    id: 'med-anatomy',
    tier: 'medical',
    title: 'Gross Anatomy',
    description: 'A comprehensive study of the human body structure, including musculoskeletal, cardiovascular, and nervous systems.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    diagramUrl: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'med-physiology',
    tier: 'medical',
    title: 'Medical Physiology',
    description: 'Detailed exploration of the mechanical, physical, and biochemical functions of humans.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1532187875605-186c6df440d9?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'med-pathology',
    tier: 'medical',
    title: 'General Pathology',
    description: 'The study of the causes and effects of diseases or injuries.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1579154235884-332c02167739?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000',
  },
  // Nursing Tier
  {
    id: 'nurs-fundamentals',
    tier: 'nursing',
    title: 'Nursing Fundamentals',
    description: 'Essential nursing skills and knowledge for providing basic patient care.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'nurs-assessment',
    tier: 'nursing',
    title: 'Health Assessment',
    description: 'Techniques and tools for performing comprehensive health evaluations on patients.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000',
  },
  // High School Tier
  {
    id: 'hs-biology',
    tier: 'highschool',
    title: 'AP Biology',
    description: 'College-level biology covering evolution, cellular processes, genetics, and ecology.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'hs-chemistry',
    tier: 'highschool',
    title: 'AP Chemistry',
    description: 'Advanced chemistry topics including thermodynamics, kinetics, and equilibrium.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1532187875605-186c6df440d9?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1603126010305-fd0bac4bc20d?auto=format&fit=crop&q=80&w=1000',
  },
];

export const tiers = [
  {
    id: 'medical',
    name: 'Medical Tier',
    price: '$49.99',
    description: 'Top-tier medical curriculum for aspiring doctors.',
    features: ['USMLE Step 1 Content', 'Advanced Clinical Case Studies', 'High-Res Anatomy Diagrams'],
  },
  {
    id: 'nursing',
    name: 'Nursing Tier',
    price: '$29.99',
    description: 'Mid-tier nursing curriculum for BSN students.',
    features: ['NCLEX-RN Prep', 'Nursing Skills Videos', 'Patient Care Plans'],
  },
  {
    id: 'highschool',
    name: 'High School Tier',
    price: '$14.99',
    description: 'Foundation tier for science-focused high schoolers.',
    features: ['AP Biology & Chemistry', 'SAT Subject Prep', 'Interactive Mind Maps'],
  },
];
