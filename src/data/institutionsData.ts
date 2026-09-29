export interface ApprovedInstitution {
  id: string;
  shortName: string;
  fullName: string;
  category: 'militar' | 'vestibular' | 'engenharia';
  categoryLabel: string;
  imageUrl: string; // <-- ALTERE AQUI A IMAGEM DO CARD
  logo?: string;
  description: string;
}

export const APPROVED_INSTITUTIONS_DATA: ApprovedInstitution[] = [
  {
    id: 'card-esa',
    shortName: 'ESA',
    fullName: 'Escola de Sargentos das Armas',
    category: 'militar',
    categoryLabel: 'Exército Brasileiro',
    imageUrl: '/assets/logos-concursos/1.webp',
    logo: '/assets/logos/esa.svg',
    description: 'Carreira de Sargentos do Exército nas armas de Infantaria, Cavalaria, Artilharia e Engenharia.'
  },
  {
    id: 'card-espcex',
    shortName: 'EsPCEx',
    fullName: 'Escola Preparatória de Cadetes do Exército',
    category: 'militar',
    categoryLabel: 'Oficiais do Exército',
    imageUrl: '/assets/logos-concursos/2.webp',
    logo: '/assets/logos/espcex.png',
    description: 'Formação preparatória para ingresso na Academia Militar das Agulhas Negras (AMAN).'
  },
  {
    id: 'card-colegio-naval',
    shortName: 'Colégio Naval',
    fullName: 'Colégio Naval',
    category: 'militar',
    categoryLabel: 'Marinha do Brasil',
    imageUrl: '/assets/logos-concursos/7.webp',
    logo: '/assets/logos/colegio-naval.png',
    description: 'Ensino Médio de excelência e porta de entrada para a carreira de Oficiais da Escola Naval.'
  },
  {
    id: 'card-afa',
    shortName: 'AFA',
    fullName: 'Academia da Força Aérea',
    category: 'militar',
    categoryLabel: 'Força Aérea Brasileira',
    imageUrl: '/assets/logos-concursos/9.webp',
    logo: '/assets/logos/afa.gif',
    description: 'Formação dos Oficiais Aviadores, Intendentes e de Infantaria da Força Aérea Brasileira.'
  },
  {
    id: 'card-uerj',
    shortName: 'UERJ',
    fullName: 'Universidade do Estado do Rio de Janeiro',
    category: 'vestibular',
    categoryLabel: 'Vestibular Estadual',
    imageUrl: '/assets/logos-concursos/4.webp',
    logo: '/assets/logos/uerj.svg',
    description: 'Histórico consistente de aprovações em Medicina, Direito, Engenharias e Humanas.'
  },
  {
    id: 'card-ufrj',
    shortName: 'UFRJ',
    fullName: 'Universidade Federal do Rio de Janeiro',
    category: 'vestibular',
    categoryLabel: 'Federal / ENEM / SISU',
    imageUrl: '/assets/logos-concursos/5.webp',
    logo: '/assets/logos/ufrj.svg',
    description: 'A maior universidade federal do Brasil com aprovações em cursos de alta concorrência.'
  },
  {
    id: 'card-epcar',
    shortName: 'EPCAr',
    fullName: 'Escola Preparatória de Cadetes do Ar',
    category: 'militar',
    categoryLabel: 'Força Aérea Brasileira',
   imageUrl: '/assets/logos-concursos/8.webp',
    logo: '/assets/logos/epcar.svg',
    description: 'Ensino Médio de alto nível da Aeronáutica preparando futuros cadetes da AFA em Barbacena.'
  },
  {
    id: 'card-eear',
    shortName: 'EEAr',
    fullName: 'Escola de Especialistas de Aeronáutica',
    category: 'militar',
    categoryLabel: 'Sargentos Especialistas',
    imageUrl: '/assets/logos-concursos/3.webp',
  
    logo: '/assets/logos/eear.png',
    description: 'Maior complexo de formação técnica militar da América Latina, formando especialistas da FAB.'
  },
  {
    id: 'card-ime',
    shortName: 'IME',
    fullName: 'Corpo de Bombeiros Militar do Estado do Rio de Janeiro',
    category: 'engenharia',
    categoryLabel: 'Engenharia Militar',
    imageUrl: '/assets/logos-concursos/10.webp',
    logo: '/assets/logos/ime.svg',
    description: 'Pioneirismo e excelência nas engenharias militar e civil em um dos vestibulares mais difíceis.'
  },
  {
    id: 'card-ita',
    shortName: 'ITA',
    fullName: 'Polícia Militar do Estado do Rio de Janeiro',
    category: 'engenharia',
    categoryLabel: 'Engenharia Aeroespacial',
    imageUrl: '/assets/logos-concursos/6.webp',
    logo: '/assets/logos/ita.svg',
    description: 'Referência internacional e polo de ponta em ciência aeroespacial e tecnologia.'
  }
];
