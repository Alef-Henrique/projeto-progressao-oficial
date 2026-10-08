import { DidacticMaterialItem } from '../types';

export const DIDACTIC_MATERIALS_DATA: DidacticMaterialItem[] = [
  // -------------------------------------------------------------
  // MATERIAIS DO COLÉGIO
  // -------------------------------------------------------------
  {
    id: 'mat-col-ef2',
    category: 'colegio',
    segment: 'Ensino Fundamental II',
    title: 'Coleção Fundamental II',
    description: 'Material didático integrado para o 6º ao 9º ano com teoria contextualizada, exercícios gradativos e projetos interdisciplinares.',
    features: [
      'Teoria objetiva com mapas mentais',
      'Caderno de exercícios com níveis de dificuldade',
      'Atividades de leitura, redação e interpretação',
      'Plataforma digital integrada de apoio'
    ],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    badge: 'Colégio • 6º ao 9º Ano',
    link: '#contato'
  },
  {
    id: 'mat-col-em',
    category: 'colegio',
    segment: 'Ensino Médio',
    title: 'Coleção Ensino Médio & Itinerários',
    description: 'Apostilas robustas focadas na formação geral básica e itinerários formativos, preparando para os principais vestibulares do país.',
    features: [
      'Conteúdo alinhado à BNCC e matrizes de vestibulares',
      'Aprofundamento por áreas do conhecimento',
      'Simulados periódicos com padrão de banca',
      'Cadernos complementares de redação e atualidades'
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    badge: 'Colégio • 1ª a 3ª Série',
    link: '#contato'
  },
  {
    id: 'mat-col-redacao',
    category: 'colegio',
    segment: 'Materiais Complementares',
    title: 'Caderno de Redação & Laboratório',
    description: 'Cadernos de produção textual, oficinas de escrita analítica e práticas orientadas para o desenvolvimento da competência leitora e crítica.',
    features: [
      'Critérios de correção detalhados por competência',
      'Propostas temáticas autorais e contemporâneas',
      'Folhas padronizadas de rascunho e versão definitiva',
      'Comentários e repertórios socioculturais'
    ],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    badge: 'Colégio • Complementar',
    link: '#contato'
  },
  {
    id: 'mat-col-apoio',
    category: 'colegio',
    segment: 'Apoio Pedagógico',
    title: 'Guias de Estudo & Revisão',
    description: 'Roteiros de aprendizagem, resumos esquematizados e guias práticos para nivelamento escolar e reforço pedagógico contínuo.',
    features: [
      'Checklist de metas e conteúdos prioritários',
      'Esquemas visuais de fixação rápida',
      'Exercícios de revisão direcionados',
      'Orientação para hábitos e rotinas de estudo'
    ],
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    badge: 'Colégio • Apoio e Reforço',
    link: '#contato'
  },

  // -------------------------------------------------------------
  // MATERIAIS DOS CURSOS PREPARATÓRIOS
  // -------------------------------------------------------------
  {
    id: 'mat-cur-militar',
    category: 'cursos',
    segment: 'Preparatório Militar',
    title: 'Coleção Forças Armadas',
    description: 'Material com teoria rigorosa e milhares de questões das bancas de EsPCEx, AFA, ESA, EEAr e Colégio Naval com gabarito comentado.',
    features: [
      'Questões catalogadas por banca e nível de cobrança',
      'Resoluções passo a passo de exercícios complexos',
      'Dicas estratégicas para gestão do tempo de prova',
      'Simulados nos moldes e cronogramas militares'
    ],
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=800&q=80',
    badge: 'Preparatório • Militar',
    link: '#contato'
  },
  {
    id: 'mat-cur-enem',
    category: 'cursos',
    segment: 'ENEM & Vestibulares',
    title: 'Coleção Pré-Vestibular & ENEM',
    description: 'Apostilas direcionadas à matriz de referência do ENEM com foco na metodologia TRI, além de módulos especiais para UERJ e vestibulares estaduais.',
    features: [
      'Análise de recorrência temática dos últimos 10 anos',
      'Redação Nota 1000 com repertórios e estruturas modelo',
      'Exercícios organizados por habilidades e competências',
      'Fórmulas, sínteses conceituais e guias de prova'
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    badge: 'Preparatório • ENEM e UERJ',
    link: '#contato'
  },
  {
    id: 'mat-cur-medicina',
    category: 'cursos',
    segment: 'Medicina & Alto Desempenho',
    title: 'Cadernos de Aprofundamento',
    description: 'Módulos avançados de Biologia, Química, Física e Matemática para candidatos aos cursos mais concorridos do Brasil.',
    features: [
      'Questões discursivas com critérios rigorosos de correção',
      'Casos práticos e experimentos em ciências da natureza',
      'Simulados exclusivos com concorrência real',
      'Plantões e roteiros de resolução analítica'
    ],
    image: 'https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&w=800&q=80',
    badge: 'Preparatório • Medicina',
    link: '#contato'
  },
  {
    id: 'mat-cur-concursos',
    category: 'cursos',
    segment: 'Concursos Públicos',
    title: 'Coleção Carreiras Públicas',
    description: 'Material estruturado com teoria sintetizada, legislação atualizada, jurisprudência essencial e foco em bancas de concursos públicos.',
    features: [
      'Legislação com destaques dos artigos mais cobrados',
      'Raciocínio lógico-matemático e língua portuguesa aplicada',
      'Simulados por carreira (policiais, tribunais e administrativas)',
      'Mapas conceituais para revisão de véspera'
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    badge: 'Preparatório • Concursos',
    link: '#contato'
  }
];