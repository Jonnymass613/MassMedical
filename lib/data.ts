export type Tier = 'medical' | 'nursing' | 'highschool';

export interface Slide {
  title: string;
  content: string[];
}

export interface MindMapNode {
  label: string;
  children?: MindMapNode[];
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  diagramUrl: string;
  slides: Slide[];
  mindMap: MindMapNode;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  tier: Tier;
  thumbnail: string;
  lessons: Lesson[];
}

export const courses: Course[] = [
  // --- HIGH SCHOOL TIER (BOTTOM TIER) ---
  {
    id: 'hs-biology',
    tier: 'highschool',
    title: 'AP Biology',
    description: 'A comprehensive college-level biology course covering evolution, cellular processes, genetics, and ecology.',
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000',
    lessons: [
      {
        id: 'u1',
        title: 'Unit 1: Chemistry of Life',
        videoUrl: 'https://www.youtube.com/embed/QWf2jcznLsY',
        diagramUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'The Properties of Water', content: ['Polarity: Oxygen is more electronegative than Hydrogen', 'Hydrogen Bonding: Cohesion, Adhesion, Surface Tension', 'Specific Heat: Water resists temperature changes', 'Solvent of Life: Water dissolves polar/ionic substances'] },
          { title: 'Macromolecules', content: ['Carbon: The backbone of biological molecules', 'Proteins: Amino acid monomers, 4 levels of folding', 'Carbohydrates: Monosaccharides (Glucose) to Polysaccharides (Starch/Cellulose)', 'Lipids: Non-polar, Saturated vs Unsaturated fats', 'Nucleic Acids: DNA/RNA, Pentose sugar + Phosphate + Base'] }
        ],
        mindMap: {
          label: 'Chemistry of Life',
          children: [
            { label: 'Water Properties', children: [{ label: 'Cohesion' }, { label: 'Adhesion' }, { label: 'High Specific Heat' }] },
            { label: 'Macromolecules', children: [{ label: 'Proteins' }, { label: 'Lipids' }, { label: 'Carbs' }, { label: 'Nucleic Acids' }] }
          ]
        }
      },
      {
        id: 'u2',
        title: 'Unit 2: Cell Structure & Function',
        videoUrl: 'https://www.youtube.com/embed/ufvH4S0E7S4',
        diagramUrl: 'https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'Cell Organelles', content: ['Nucleus: Stores genetic info', 'Ribosomes: Protein synthesis', 'ER (Rough & Smooth): Processing & Lipid synthesis', 'Golgi: Sorting & Shipping', 'Mitochondria: ATP production via respiration', 'Chloroplast: Sugar production via photosynthesis'] },
          { title: 'Cell Membrane & Transport', content: ['Fluid Mosaic Model: Phospholipids & Proteins', 'Passive Transport: Diffusion, Osmosis, Facilitated Diffusion', 'Active Transport: Requires ATP, moving against gradient', 'Bulk Transport: Endocytosis & Exocytosis'] }
        ],
        mindMap: {
          label: 'The Cell',
          children: [
            { label: 'Organelles', children: [{ label: 'Endomembrane System' }, { label: 'Energy Transducers' }] },
            { label: 'Transport', children: [{ label: 'Passive' }, { label: 'Active' }] }
          ]
        }
      },
      {
        id: 'u3',
        title: 'Unit 3: Cellular Energetics',
        videoUrl: 'https://www.youtube.com/embed/00jbG_cfGuQ',
        diagramUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'Enzymes', content: ['Catalysts: Lower activation energy', 'Active Site: Where substrate binds', 'Inhibition: Competitive vs Non-competitive', 'Environmental Effects: pH and Temperature'] },
          { title: 'Energy Processes', content: ['Photosynthesis: Light-dependent & Calvin Cycle', 'Cellular Respiration: Glycolysis, Krebs, ETC', 'ATP: The energy currency of the cell'] }
        ],
        mindMap: {
          label: 'Energetics',
          children: [
            { label: 'Enzymes' },
            { label: 'Photosynthesis' },
            { label: 'Respiration' }
          ]
        }
      },
      {
        id: 'u4',
        title: 'Unit 4: Cell Communication & Cycle',
        videoUrl: 'https://www.youtube.com/embed/ax7p_Y_H86E',
        diagramUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'Signal Transduction', content: ['Reception: Ligand binds to receptor', 'Transduction: Phosphorylation cascade', 'Response: Activation of gene or enzyme'] },
          { title: 'Cell Cycle', content: ['Interphase: G1, S, G2', 'Mitosis: Prophase, Metaphase, Anaphase, Telophase', 'Checkpoints: Regulating cell division (Cyclins/CDKs)'] }
        ],
        mindMap: {
          label: 'Communication',
          children: [
            { label: 'Signaling' },
            { label: 'Cell Cycle' }
          ]
        }
      },
      {
        id: 'u5',
        title: 'Unit 5: Heredity',
        videoUrl: 'https://www.youtube.com/embed/3S_u7089oG8',
        diagramUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'Meiosis', content: ['Production of gametes (haploid)', 'Genetic Variation: Crossing over, Independent assortment', 'Meiosis I vs Meiosis II'] },
          { title: 'Mendelian Genetics', content: ['Law of Segregation', 'Law of Independent Assortment', 'Punnett Squares: Predict offspring genotypes'] }
        ],
        mindMap: {
          label: 'Heredity',
          children: [
            { label: 'Meiosis' },
            { label: 'Genetics' }
          ]
        }
      },
      {
        id: 'u6',
        title: 'Unit 6: Gene Expression & Regulation',
        videoUrl: 'https://www.youtube.com/embed/vi-zWoFb_FE',
        diagramUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'DNA Structure & Replication', content: ['Double Helix: Antiparallel strands', 'Replication: Semi-conservative process', 'Enzymes: Helicase, DNA Polymerase, Ligase'] },
          { title: 'Transcription & Translation', content: ['Transcription: DNA to mRNA in nucleus', 'Translation: mRNA to Protein in ribosome', 'The Genetic Code: Triplet codons'] }
        ],
        mindMap: {
          label: 'Gene Expression',
          children: [
            { label: 'Replication' },
            { label: 'Transcription' },
            { label: 'Translation' }
          ]
        }
      },
      {
        id: 'u7',
        title: 'Unit 7: Natural Selection',
        videoUrl: 'https://www.youtube.com/embed/S7EhExhXOPQ',
        diagramUrl: 'https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'Evolutionary Theory', content: ['Natural Selection: Survival of the fittest', 'Artificial Selection: Human intervention', 'Genetic Drift: Random change in allele frequencies'] },
          { title: 'Evidence of Evolution', content: ['Fossil Record', 'Homologous Structures', 'Molecular Biology: DNA comparisons'] }
        ],
        mindMap: {
          label: 'Evolution',
          children: [
            { label: 'Selection' },
            { label: 'Evidence' }
          ]
        }
      },
      {
        id: 'u8',
        title: 'Unit 8: Ecology',
        videoUrl: 'https://www.youtube.com/embed/h9mEfSQUGeY',
        diagramUrl: 'https://images.unsplash.com/photo-1501147830916-ce44a6359892?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'Ecosystem Dynamics', content: ['Energy Flow: Trophic levels and 10% rule', 'Biogeochemical Cycles: Carbon, Nitrogen, Water', 'Biodiversity: Importance of species variety'] },
          { title: 'Population Ecology', content: ['Growth Models: Exponential vs Logistic', 'Community Interactions: Predation, Symbiosis, Competition'] }
        ],
        mindMap: {
          label: 'Ecology',
          children: [
            { label: 'Energy Flow' },
            { label: 'Populations' },
            { label: 'Communities' }
          ]
        }
      }
    ]
  },
  {
    id: 'hs-chemistry',
    tier: 'highschool',
    title: 'AP Chemistry',
    description: 'Master chemical principles including atomic structure, intermolecular forces, and thermodynamics.',
    thumbnail: 'https://images.unsplash.com/photo-1532187875605-186c6df440d9?auto=format&fit=crop&q=80&w=1000',
    lessons: [
      {
        id: 'chem-u1',
        title: 'Atomic Structure & Properties',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        diagramUrl: 'https://images.unsplash.com/photo-1532187875605-186c6df440d9?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'The Atom', content: ['Protons, Neutrons, Electrons', 'Isotopes & Atomic Mass', 'Electron Configuration'] }
        ],
        mindMap: { label: 'Atomic Structure' }
      }
    ]
  },
  // --- NURSING TIER (MID TIER) ---
  {
    id: 'nurs-medsurg',
    tier: 'nursing',
    title: 'Medical-Surgical Nursing',
    description: 'Advanced nursing care for adult patients with complex conditions.',
    thumbnail: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
    lessons: [
      {
        id: 'ms-u1',
        title: 'Fluid & Electrolyte Balance',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        diagramUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'Fluid Compartments', content: ['Intracellular vs Extracellular', 'Osmosis & Diffusion', 'Electrolyte Imbalances'] }
        ],
        mindMap: { label: 'Fluids & Electrolytes' }
      }
    ]
  },
  // --- MEDICAL TIER (TOP TIER) ---
  {
    id: 'med-anatomy',
    tier: 'medical',
    title: 'Gross Anatomy',
    description: 'Professional-level anatomy curriculum for medical students.',
    thumbnail: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1000',
    lessons: [
      {
        id: 'anat-u1',
        title: 'The Thorax',
        videoUrl: 'https://www.youtube.com/embed/fHI6_1SndNo',
        diagramUrl: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=1000',
        slides: [
          { title: 'Thoracic Wall', content: ['Ribs & Intercostal Muscles', 'Internal Thoracic Artery', 'Surface Anatomy of the Chest'] }
        ],
        mindMap: { label: 'The Thorax' }
      }
    ]
  }
];

export const tiers = [
  {
    id: 'medical',
    name: 'Medical Tier',
    price: '$49.99',
    description: 'Top-tier medical curriculum for aspiring doctors.',
    features: ['USMLE Step 1 Content', 'Advanced Clinical Case Studies', 'Full Multimedia Curriculum', 'Access All Tiers'],
  },
  {
    id: 'nursing',
    name: 'Nursing Tier',
    price: '$29.99',
    description: 'Mid-tier nursing curriculum for BSN students.',
    features: ['NCLEX-RN Prep', 'Nursing Skills Videos', 'Interactive Mind Maps', 'Access High School Tier'],
  },
  {
    id: 'highschool',
    name: 'High School Tier',
    price: '$14.99',
    description: 'Foundation tier for science-focused high schoolers.',
    features: ['AP Biology (Units 1-8)', 'AP Chemistry', 'Standard Curriculum', 'Videos & Slideshows'],
  },
];
