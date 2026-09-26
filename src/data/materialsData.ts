import { DidacticMaterialItem } from '../types';

export const DIDACTIC_MATERIALS_DATA: DidacticMaterialItem[] = [
  // -------------------------------------------------------------
  // MATERIAIS DO COLÉGIO
  // -------------------------------------------------------------
  {
    id: 'mat-col-ef2',
    category: 'colegio',
    title: 'Coleção Fundamental II',
    description: 'Material didático integrado para o 6º ao 9º ano com teoria contextualizada, exercícios gradativos e projetos interdisciplinares.',
    features: [
      'Teoria objetiva e contextualizada por disciplina',
      'Atividades de leitura, redação e interpretação',
      'Exercícios e atividades voltados à fixação dos conteúdos'
    ],
    image: '/assets/fundamental-02.jpeg',
    link: '#contato'
  },
  {
    id: 'mat-col-em',
    category: 'colegio',
    title: 'Coleção Ensino Médio',
    description: 'Apostilas robustas focadas na formação geral básica e itinerários formativos, preparando para os principais vestibulares do país.',
    features: [
      'Conteúdo alinhado à BNCC e matrizes de vestibulares',
      'Aprofundamento por áreas do conhecimento',
      'Simulados periódicos com padrão de banca',
      'Cadernos complementares de redação e atualidades'
    ],
    image: '/assets/material-colegio.jpg',
    link: '#contato'
  },
  {
    id: 'mat-col-redacao',
    category: 'colegio',
    title: 'Material para pré-vestibular e redação',
    description: 'Conteúdos selecionados para auxiliar na preparação para vestibulares, com teoria, exercícios e práticas de redação.',
    features: [
      'Conteúdos direcionados para o vestibular',
      'Práticas de redação e produção textual',
      'Questões e exercícios de preparação',
      'Exercícios de fixação e revisão'
    ],
    image: '/assets/colegio-material.jpg',
    link: '#contato'
  },
  // -------------------------------------------------------------
  // MATERIAIS DOS CURSOS PREPARATÓRIOS
  // -------------------------------------------------------------
  {
    id: 'mat-cur-militar',
    category: 'cursos',
    title: 'Material de estudo para Concursos Militares',
    description: 'Material com teoria rigorosa e milhares de questões das bancas de EsPCEx, AFA, ESA, EEAr e Colégio Naval com gabarito comentado.',
    features: [
      'Questões catalogadas por banca e nível de cobrança',
      'Resoluções passo a passo de exercícios complexos',
      'Dicas estratégicas para gestão do tempo de prova',
      'Simulados nos moldes e cronogramas militares'
    ],
    image: '/assets/material-preparatorio-01.jpeg',
    link: '#contato'
  },

];
