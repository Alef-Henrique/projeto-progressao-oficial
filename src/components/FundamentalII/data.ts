export interface TurmaFundamentalII {
  id: string;
  ano: string;
  titulo: string;
  subtitulo?: string;
  periodo: string;
  cargaHoraria: string;
  horarios: string;
  monitorias: string;
  seguroEscolar: string;
  propostaResumo?: string;
  slug: string;
}

export const TURMAS_FUNDAMENTAL_II: TurmaFundamentalII[] = [
  {
    id: '6-ano',
    ano: '6º Ano',
    titulo: '6º ANO · ENSINO FUNDAMENTAL II',
    subtitulo: 'Base pedagógica forte de ensino de competição',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '25 tempos semanais = 5T diários',
    horarios: '7h50 às 12h30 · 13h às 17h40 (c/ meia hora de intervalo)',
    monitorias: 'Contraturno 2x na semana: Manhã (14h às 15h30) · Tarde (10h às 11h30)',
    seguroEscolar: 'Seguro escolar com proteção 24h, cobertura hospitalar e acidentes pela Porto Seguro.',
    propostaResumo: 'Abordagem de conteúdo dos editais de concursos: Colégio Militar, Pedro II, CAP/UERJ e Newton Braga.',
    slug: '6-ano'
  },
  {
    id: '7-ano',
    ano: '7º Ano',
    titulo: '7º ANO · ENSINO FUNDAMENTAL II',
    subtitulo: 'Base pedagógica forte de ensino de competição',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '25 tempos semanais = 5T diários',
    horarios: '7h50 às 12h30 · 13h às 17h40 (c/ meia hora de intervalo)',
    monitorias: 'Contraturno 2x na semana: Manhã (14h às 15h30) · Tarde (10h às 11h30)',
    seguroEscolar: 'Seguro escolar com proteção 24h, cobertura hospitalar e acidentes pela Porto Seguro.',
    propostaResumo: 'Abordagem de conteúdo dos editais de concursos: Colégio Militar, Pedro II, CAP/UERJ e Newton Braga.',
    slug: '7-ano'
  },
  {
    id: '8-ano',
    ano: '8º Ano',
    titulo: '8º ANO · ENSINO FUNDAMENTAL II',
    subtitulo: 'Preparando o aluno para o 9º ano forte',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '25 tempos semanais = 5T diários',
    horarios: '7h50 às 12h30 · 13h às 17h40 (c/ meia hora de intervalo)',
    monitorias: 'Contraturno 2x na semana (Matemática e Física): Manhã (14h às 15h30) · Tarde (10h às 11h30)',
    seguroEscolar: 'Seguro escolar com proteção 24h, cobertura hospitalar e acidentes pela Porto Seguro.',
    propostaResumo: 'Base forte de competição: Colégio Militar, Pedro II, CAP/UERJ e Newton Braga.',
    slug: '8-ano'
  },
  {
    id: '9-ano',
    ano: '9º Ano',
    titulo: '9º ANO · ENSINO FUNDAMENTAL II',
    subtitulo: 'Alta performance, concursos militares e escolas técnicas',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '30 tempos semanais = 6T diários',
    horarios: '7h às 12h20 · 13h às 18h (c/ 20 minutos de intervalo)',
    monitorias: 'Contraturno 2x na semana (Matemática e Física): Manhã (14h às 15h30) · Tarde (10h às 11h30)',
    seguroEscolar: 'Seguro escolar com proteção 24h, cobertura hospitalar e acidentes pela Porto Seguro.',
    propostaResumo: 'Editais de concursos militares (Colégio Naval e EPCAR), Escolas Técnicas e ENEM.',
    slug: '9-ano'
  }
];
