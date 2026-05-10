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
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
  {
    id: 'med-pharmacology',
    tier: 'medical',
    title: 'Medical Pharmacology',
    description: 'Study of drug action and the interaction between living organisms and chemicals that affect normal or abnormal biochemical function.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1471864190281-ad5f9f33d70e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'med-microbiology',
    tier: 'medical',
    title: 'Medical Microbiology',
    description: 'The study of microorganisms, including bacteria, viruses, fungi and parasites, which are of importance in the context of human medicine.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1000',
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
  {
    id: 'nurs-medsurg',
    tier: 'nursing',
    title: 'Medical-Surgical Nursing',
    description: 'Care of adult patients with various medical conditions and those undergoing surgical procedures.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'nurs-pharmacology',
    tier: 'nursing',
    title: 'Pharmacology for Nursing',
    description: 'Safe administration of medications and understanding their effects on patients.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1471864190281-ad5f9f33d70e?auto=format&fit=crop&q=80&w=1000',
  },
  // High School Tier (AP Biology Curriculum)
  {
    id: 'hs-bio-u1',
    tier: 'highschool',
    title: 'AP Biology Unit 1: Chemistry of Life',
    description: 'The role of water, elements of life, and the structure/function of biological macromolecules (carbohydrates, lipids, proteins, nucleic acids).',
    videoUrl: 'https://www.youtube.com/embed/QWf2jcznLsY',
    diagramUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'hs-bio-u2',
    tier: 'highschool',
    title: 'AP Biology Unit 2: Cell Structure and Function',
    description: 'Cell organelles, cell size, membrane structure, and membrane transport (osmosis, active transport).',
    videoUrl: 'https://www.youtube.com/embed/ufvH4S0E7S4', // Cell Organelles
    diagramUrl: 'https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1532187875605-186c6df440d9?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'hs-bio-u3',
    tier: 'highschool',
    title: 'AP Biology Unit 3: Cellular Energetics',
    description: 'Enzyme structure and catalysis, environmental impacts on enzymes, cellular respiration, and photosynthesis.',
    videoUrl: 'https://www.youtube.com/embed/00jbG_cfGuQ', // Photosynthesis and Respiration
    diagramUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'hs-bio-u4',
    tier: 'highschool',
    title: 'AP Biology Unit 4: Cell Communication and Cell Cycle',
    description: 'Cell communication, signal transduction, feedback mechanisms, and the stages of the cell cycle (Mitosis).',
    videoUrl: 'https://www.youtube.com/embed/ax7p_Y_H86E', // Cell Communication
    diagramUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'hs-bio-u5',
    tier: 'highschool',
    title: 'AP Biology Unit 5: Heredity',
    description: 'Meiosis, genetic diversity, Mendelian genetics, non-Mendelian genetics, and environmental effects on phenotypes.',
    videoUrl: 'https://www.youtube.com/embed/3S_u7089oG8', // Meiosis
    diagramUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'hs-bio-u6',
    tier: 'highschool',
    title: 'AP Biology Unit 6: Gene Expression and Regulation',
    description: 'DNA/RNA structure, replication, transcription, translation, and regulation of gene expression.',
    videoUrl: 'https://www.youtube.com/embed/vi-zWoFb_FE', // Gene Regulation
    diagramUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'hs-bio-u7',
    tier: 'highschool',
    title: 'AP Biology Unit 7: Natural Selection',
    description: 'Artificial selection, population genetics, Hardy-Weinberg equilibrium, and evidence of evolution.',
    videoUrl: 'https://www.youtube.com/embed/S7EhExhXOPQ', // Natural Selection
    diagramUrl: 'https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'hs-bio-u8',
    tier: 'highschool',
    title: 'AP Biology Unit 8: Ecology',
    description: 'Responses to environment, energy flow through ecosystems, population ecology, and community ecology.',
    videoUrl: 'https://www.youtube.com/embed/h9mEfSQUGeY', // Ecology
    diagramUrl: 'https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&q=80&w=1000',
    slideshowUrl: 'https://www.google.com',
    mindMapUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000',
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
    features: ['AP Biology (8 Units)', 'AP Chemistry', 'Interactive Mind Maps'],
  },
];
