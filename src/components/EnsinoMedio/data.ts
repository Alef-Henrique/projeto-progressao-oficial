
export interface TurmaEnsinoMedio {
  id: string;
  serie: string;
  modalidade?: string;
  titulo: string;
  resumo: string;
  slug: string;
}

export const TURMAS_ENSINO_MEDIO: TurmaEnsinoMedio[] = [
  {
    id: '1-serie',
    serie: '1ª Série',
    titulo: '1ª SÉRIE · ENSINO MÉDIO',
    resumo: 'Base forte de ensino de competição, com preparação para Colégio Naval, EPCAR, Escolas Técnicas e ENEM.',
    slug: '1-serie'
  },
  {
    id: '2-serie-militar',
    serie: '2ª Série',
    modalidade: 'Militar',
    titulo: '2ª SÉRIE · MILITAR · ENSINO MÉDIO',
    resumo: 'Base pedagógica voltada para concursos militares como EAM, ESA, ESPCEX e EEAR.',
    slug: '2-serie-militar'
  },
  {
    id: '2-serie-vestibular',
    serie: '2ª Série',
    modalidade: 'Vestibular',
    titulo: '2ª SÉRIE · VESTIBULAR · ENSINO MÉDIO',
    resumo: 'Base pedagógica voltada para o ENEM e VESTIBULARES.',
    slug: '2-serie-vestibular'
  },
  {
    id: '3-serie-militar',
    serie: '3ª Série',
    modalidade: 'Militar',
    titulo: '3ª SÉRIE · MILITAR · ENSINO MÉDIO',
    resumo: 'Preparação direcionada para concursos militares como EAM, ESA, ESPCEX e EEAR.',
    slug: '3-serie-militar'
  }
];
