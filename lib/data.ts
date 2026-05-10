export type Tier = 'medical' | 'nursing' | 'highschool';

export interface Slide {
  title: string;
  content: string[];
}

export interface MindMapNode {
  label: string;
  children?: MindMapNode[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  tier: Tier;
  videoUrl: string;
  diagramUrl: string;
  slides: Slide[];
  mindMap: MindMapNode;
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
    slides: [
      { title: 'Introduction to Anatomy', content: ['Definition of Anatomy', 'Anatomical Position', 'Directional Terms'] },
      { title: 'Skeletal System', content: ['Axial Skeleton (Skull, Vertebral Column, Thoracic Cage)', 'Appendicular Skeleton (Limbs, Pectoral & Pelvic Girdles)', 'Bone Histology & Ossification'] },
      { title: 'Muscular System', content: ['Types of Muscle Tissue', 'Muscle Contraction Mechanism (Sliding Filament Theory)', 'Major Muscle Groups of the Trunk and Limbs'] }
    ],
    mindMap: {
      label: 'Human Anatomy',
      children: [
        { label: 'Skeletal System', children: [{ label: 'Axial' }, { label: 'Appendicular' }] },
        { label: 'Muscular System', children: [{ label: 'Skeletal' }, { label: 'Smooth' }, { label: 'Cardiac' }] },
        { label: 'Nervous System', children: [{ label: 'Central' }, { label: 'Peripheral' }] }
      ]
    }
  },
  {
    id: 'med-microbiology',
    tier: 'medical',
    title: 'Medical Microbiology',
    description: 'The study of microorganisms, including bacteria, viruses, fungi and parasites.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000',
    slides: [
      { title: 'Bacteriology Fundamentals', content: ['Gram Positive vs Negative Cell Walls', 'Endotoxin vs Exotoxin', 'Bacterial Growth Phases'] },
      { title: 'Virology', content: ['Viral Structure (Capsid, Envelope)', 'Replication: Attachment, Penetration, Uncoating, Assembly', 'Pathogenesis of Retroviruses'] },
      { title: 'Antibiotics', content: ['Cell Wall Synthesis Inhibitors', 'Protein Synthesis Inhibitors', 'Antifolates'] }
    ],
    mindMap: {
      label: 'Microbiology',
      children: [
        { label: 'Bacteria', children: [{ label: 'Gram +' }, { label: 'Gram -' }] },
        { label: 'Viruses', children: [{ label: 'DNA' }, { label: 'RNA' }] },
        { label: 'Fungi' },
        { label: 'Parasites' }
      ]
    }
  },
  // Nursing Tier
  {
    id: 'nurs-medsurg',
    tier: 'nursing',
    title: 'Medical-Surgical Nursing',
    description: 'Care of adult patients with various medical conditions and those undergoing surgical procedures.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
    slides: [
      { title: 'Perioperative Nursing', content: ['Pre-operative Checklist', 'Intra-operative Safety (Time-out)', 'Post-operative Recovery (PACU) Monitoring'] },
      { title: 'Endocrine Management', content: ['Diabetes Mellitus Type 1 & 2', 'Insulin Administration Techniques', 'Managing Hypoglycemia vs Hyperglycemia'] }
    ],
    mindMap: {
      label: 'Med-Surg Nursing',
      children: [
        { label: 'Perioperative' },
        { label: 'Cardiovascular' },
        { label: 'Respiratory' },
        { label: 'Endocrine' }
      ]
    }
  },
  {
    id: 'nurs-pharmacology',
    tier: 'nursing',
    title: 'Pharmacology for Nursing',
    description: 'Safe administration of medications and understanding their effects on patients.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    diagramUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=1000',
    slides: [
      { title: 'Pharmacokinetics', content: ['Absorption: Route of administration', 'Distribution: Plasma protein binding', 'Metabolism: First-pass effect', 'Excretion: Renal clearance'] },
      { title: 'Medication Safety', content: ['The 7 Rights of Administration', 'High-Alert Medications', 'Reporting Medication Errors (Adverse Events)'] }
    ],
    mindMap: {
      label: 'Nursing Pharmacology',
      children: [
        { label: 'Pharmacokinetics' },
        { label: 'Pharmacodynamics' },
        { label: 'Drug Classes', children: [{ label: 'Analgesics' }, { label: 'Antibiotics' }, { label: 'Antihypertensives' }] }
      ]
    }
  },
  // High School Tier (AP Biology Curriculum)
  {
    id: 'hs-bio-u1',
    tier: 'highschool',
    title: 'AP Biology Unit 1: Chemistry of Life',
    description: 'The role of water, elements of life, and biological macromolecules.',
    videoUrl: 'https://www.youtube.com/embed/QWf2jcznLsY',
    diagramUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000',
    slides: [
      { title: 'Structure of Water', content: ['Polarity and Hydrogen Bonding', 'Cohesion, Adhesion, and Surface Tension', 'High Specific Heat and Heat of Vaporization', 'Solvent Properties'] },
      { title: 'Macromolecules', content: ['Carbohydrates (Energy & Structure)', 'Proteins (Enzymes & Transport)', 'Lipids (Membranes & Storage)', 'Nucleic Acids (Information)'] }
    ],
    mindMap: {
      label: 'Chemistry of Life',
      children: [
        { label: 'Water' },
        { label: 'Elements (CHNOPS)' },
        { label: 'Macromolecules', children: [{ label: 'Carbs' }, { label: 'Lipids' }, { label: 'Proteins' }, { label: 'DNA/RNA' }] }
      ]
    }
  },
  {
    id: 'hs-bio-u2',
    tier: 'highschool',
    title: 'AP Biology Unit 2: Cell Structure and Function',
    description: 'Cell organelles, cell size, membrane structure, and transport.',
    videoUrl: 'https://www.youtube.com/embed/ufvH4S0E7S4',
    diagramUrl: 'https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=1000',
    slides: [
      { title: 'Cell Organelles', content: ['Nucleus: Genetic Control', 'Ribosomes: Protein Synthesis', 'Endomembrane System (ER, Golgi)', 'Mitochondria & Chloroplasts (Energy)'] },
      { title: 'Cell Membrane & Transport', content: ['Fluid Mosaic Model', 'Passive Transport (Diffusion, Osmosis)', 'Active Transport (ATP-driven, Pumps)', 'Endocytosis & Exocytosis'] }
    ],
    mindMap: {
      label: 'Cell Biology',
      children: [
        { label: 'Structure', children: [{ label: 'Organelles' }, { label: 'Cytoskeleton' }] },
        { label: 'Function', children: [{ label: 'Transport' }, { label: 'Signaling' }] }
      ]
    }
  }
];

export const tiers = [
  {
    id: 'medical',
    name: 'Medical Tier',
    price: '$49.99',
    description: 'Top-tier medical curriculum for aspiring doctors.',
    features: ['USMLE Step 1 Content', 'Advanced Clinical Case Studies', 'Full Multimedia Curriculum'],
  },
  {
    id: 'nursing',
    name: 'Nursing Tier',
    price: '$29.99',
    description: 'Mid-tier nursing curriculum for BSN students.',
    features: ['NCLEX-RN Prep', 'Nursing Skills Videos', 'Interactive Mind Maps'],
  },
  {
    id: 'highschool',
    name: 'High School Tier',
    price: '$14.99',
    description: 'Foundation tier for science-focused high schoolers.',
    features: ['AP Biology (8 Units)', 'AP Chemistry', 'Standard Curriculum'],
  },
];
