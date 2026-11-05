// ====================================================================
// TURMAS DE CONCURSOS PÚBLICOS — FONTE OFICIAL DE DADOS
// Arquivo isolado e independente de turmas militares
// ====================================================================

import type { ConcursoValoresInfo } from './concursosData';

export interface TurmaConcursoAuloes {
  encontros: string;
  horarioOuDia?: string;
  materias?: string[];
}

export interface TurmaConcursoSimulados {
  operacaoDesempenho?: string;
  detalhes?: string[];
}

export interface TurmaConcursoCargoInfo {
  cargo: string;
  requisito?: string;
}

export interface TurmaConcurso {
  id: string;
  slug?: string; // Slug amigável para rota dedicada (ex: 'guardas-municipais-rj')
  concursoId: string; // Vínculo com o concurso (inss, prf, pcerj, transpetro, etc.)
  categoria: 'Nossa turma';
  titulo: string;
  subtitulo?: string;
  imagem?: string;
  bannerImage?: string;
  linkMatricula?: string;
  modalidade?: string;
  formato?: string;
  periodo: string;
  turnos?: string; // Ex: 'Noite / Sábado'
  cargaNoite?: string;
  cargaSabado?: string;
  cargaTotal?: string; // Ex: '50 encontros = 150 horas' ou '72 horas'
  frequencia?: string;
  horario: string; // Ex: '18h45 às 21h45 (noite) · 08h40 às 17h10 (sábado)'
  horarioRotulo?: string; // Ex: 'Horário em 2026' ou 'Horário'
  bonus?: string;
  paraQuemE?: string;
  foco?: string;
  comboMulti?: string;
  comboAprov?: string;
  semCombo?: string;
  cargoInfo?: TurmaConcursoCargoInfo;
  materiasPresenciais?: string[];
  materias?: string[];
  conteudo?: string;
  conhecimentosBasicos?: string[];
  conhecimentosEspecificos?: string[];
  disciplinasBasicos?: string[];
  areasAtendidas?: string[];
  naoTrabalhadas?: string[];
  naoTrabalhamos?: string[];
  simulados?: TurmaConcursoSimulados;
  auloesEstrategicos?: TurmaConcursoAuloes;
  observacaoCarga?: string;
  valoresInfo?: ConcursoValoresInfo;
}

// 1. INSS – Técnico do Seguro Social – Outubro/26
export const TURMA_INSS_CONCURSO: TurmaConcurso = {
  id: 'turma-inss-outubro-26',
  slug: 'inss-tecnico-seguro-social',
  concursoId: 'inss',
  categoria: 'Nossa turma',
  titulo: 'INSS – Técnico do Seguro Social – Outubro/26',
  bannerImage: '/assets/logos-concursos/logo-inss.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Regular Presencial',
  periodo: '13/10/26 a 30/06/27',
  turnos: 'Noite / Sábado',
  cargaNoite: '66 encontros = 198 horas',
  cargaSabado: '22 encontros = 176 horas',
  frequencia: 'De 1 a 5 vezes por semana',
  horario: '18h45 às 21h45 (noite) · 08h40 às 17h10 (sábado)',
  bonus: '1 mês grátis ao contratar',
  materiasPresenciais: [
    'Português',
    'Legislação Previdenciária',
    'Informática',
    'Lei 8.112/90',
    'Direito Administrativo',
    'Direito Constitucional',
    'RLM',
    'Redação Oficial',
    'Ética'
  ],
  simulados: {
    operacaoDesempenho: 'Operação Desempenho: 4 simulados, modelo INSS'
  },
  auloesEstrategicos: {
    encontros: '9 encontros = 48 horas, aos domingos',
    materias: [
      'Português',
      'RLM / Matemática',
      'Constitucional',
      'Administrativo',
      'Previdenciário',
      'Informática'
    ]
  }
};

// 2. PRF – Outubro/26
export const TURMA_PRF_CONCURSO: TurmaConcurso = {
  id: 'turma-prf-outubro-26',
  slug: 'prf-agente-federal',
  concursoId: 'prf-agente-federal',
  categoria: 'Nossa turma',
  titulo: 'Turma PRF – Outubro/26',
  bannerImage: '/assets/logos-concursos/prf-logo.png',
  modalidade: 'Presencial',
  periodo: '13/10/26 a 30/06/27',
  turnos: 'Noite / Sábado',
  cargaNoite: '66 encontros = 198 horas',
  cargaSabado: '22 encontros = 176 horas',
  frequencia: 'De 1 a 5 vezes por semana',
  formato: 'Turma fechada, em módulos, com duração de 9 meses',
  horario: '18h45 às 21h45 (noite) · 08h40 às 17h10 (sábado)',
  horarioRotulo: 'Horário em 2026',
  bonus: 'Ao contratar, 1 mês grátis',
  materias: [
    'Português',
    'RLM',
    'Informática',
    'Direito Constitucional',
    'Direito Administrativo',
    'Lei 8.112/90',
    'Direito Penal',
    'Processo Penal',
    'CTB',
    'Física',
    'Língua Estrangeira',
    'Direitos Humanos',
    'Geopolítica'
  ],
  naoTrabalhadas: [
    'Legislação Especial',
    'Ética e Cidadania',
    'Redação Oficial'
  ],
  simulados: {
    operacaoDesempenho: 'Operação Desempenho: 4 simulados, modelo PRF'
  },
  auloesEstrategicos: {
    encontros: '9 encontros = 48 horas, aos domingos',
    materias: [
      'Português',
      'RLM / Matemática',
      'CTB',
      'Constitucional',
      'Administrativo',
      'Penal',
      'Processo Penal',
      'Informática'
    ]
  }
};

// 3. PCERJ – Investigador e Inspetor de Polícia – Outubro/26
export const TURMA_PCERJ_CONCURSO: TurmaConcurso = {
  id: 'turma-pcerj-outubro-26',
  slug: 'pcerj-investigador-inspetor',
  concursoId: 'pcerj',
  categoria: 'Nossa turma',
  titulo: 'PCERJ – Investigador e Inspetor de Polícia – Outubro/26',
  bannerImage: '/assets/logos-concursos/logo-pcerj.png',
  modalidade: 'Presencial',
  formato: 'Turma Regular Presencial',
  periodo: '13/10/26 a 30/06/27',
  turnos: 'Noite / Sábado',
  cargaNoite: '66 encontros = 198 horas',
  cargaSabado: '22 encontros = 176 horas',
  frequencia: 'De 2 a 5 vezes por semana',
  horario: '18h45 às 21h45 (noite) · 08h40 às 17h10 (sábado)',
  bonus: '1 mês grátis ao contratar',
  cargoInfo: {
    cargo: 'Investigador Policial',
    requisito: 'Escolaridade exigida: ensino superior completo e carteira de habilitação'
  },
  materias: [
    'Língua Portuguesa',
    'Direito Penal',
    'Processo Penal',
    'Direito Administrativo',
    'Direito Constitucional',
    'Informática',
    'Leis Penais'
  ],
  naoTrabalhamos: [
    'Estatuto'
  ],
  simulados: {
    operacaoDesempenho: 'Operação Desempenho: 4 simulados, modelo PCERJ'
  },
  auloesEstrategicos: {
    encontros: '9 encontros = 48 horas, aos domingos',
    materias: [
      'Língua Portuguesa',
      'Penal',
      'Processo Penal',
      'Administrativo',
      'Constitucional',
      'Informática'
    ]
  }
};

// 4. PRF – Agente Administrativo – Outubro/26
export const TURMA_PRF_ADMINISTRATIVO_CONCURSO: TurmaConcurso = {
  id: 'turma-prf-agente-adm-outubro-26',
  slug: 'prf-agente-administrativo',
  concursoId: 'prf-administrativo',
  categoria: 'Nossa turma',
  titulo: 'PRF – Agente Administrativo – Outubro/26',
  bannerImage: '/assets/logos-concursos/prf-logo.png',
  modalidade: 'Presencial',
  periodo: '13/10/26 a 30/06/27 (9 meses)',
  turnos: 'Noite / Sábado',
  cargaNoite: '66 encontros = 198 horas',
  cargaSabado: '18 encontros = 144 horas',
  frequencia: 'De 1 a 5 vezes por semana',
  formato: 'Turma fechada, em módulos',
  horario: '18h45 às 21h45 (noite) · 08h40 às 17h10 (sábado)',
  bonus: '1 mês grátis ao contratar',
  materias: [
    'Língua Portuguesa',
    'Ética e Conduta Pública',
    'Raciocínio Lógico',
    'Noções de Direito Constitucional',
    'Noções de Direito Administrativo',
    'Noções de Informática',
    'Noções de Administração'
  ],
  naoTrabalhadas: [
    'Noções de Arquivologia',
    'Legislação relativa à PRF'
  ],
  simulados: {
    operacaoDesempenho: 'Operação Desempenho: 4 simulados, modelo PRF Agente Adm'
  },
  auloesEstrategicos: {
    encontros: '8 encontros = 48 horas, aos domingos',
    materias: [
      'Português',
      'RLM / Matemática',
      'Constitucional',
      'Administrativo',
      'Administração',
      'Informática'
    ]
  }
};

// 5. Transpetro – Administração
export const TURMA_TRANSPETRO_ADMINISTRACAO_CONCURSO: TurmaConcurso = {
  id: 'turma-transpetro-administracao',
  slug: 'transpetro-administracao',
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Transpetro – Administração',
  subtitulo: 'Administração e Controle · Ênfase 1 do Edital 3',
  bannerImage: '/assets/logos-concursos/transpetro-logo.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Regular Presencial',
  periodo: '08/09 a 27/11/26',
  turnos: 'Noite / Sábado',
  cargaTotal: '50 encontros = 150 horas',
  frequencia: 'De 3 a 5 vezes por semana',
  horario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
  conhecimentosBasicos: [
    'Língua Portuguesa',
    'Matemática'
  ],
  conhecimentosEspecificos: [
    'Administração',
    'Legislação',
    'Finanças',
    'Logística',
    'Contabilidade',
    'Noções de Informática'
  ]
};

// 6. Transpetro – Auxiliar do Mar
export const TURMA_TRANSPETRO_AUXILIAR_MAR_CONCURSO: TurmaConcurso = {
  id: 'turma-transpetro-auxiliar-mar',
  slug: 'transpetro-auxiliar-mar',
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Transpetro – Auxiliar do Mar',
  subtitulo: 'Edital 1',
  bannerImage: '/assets/logos-concursos/transpetro-logo.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Regular Presencial',
  periodo: '08/09 a 16/10',
  turnos: 'Noite / Sábado',
  cargaTotal: '72 horas, 2 vezes por semana',
  frequencia: '2 vezes por semana',
  horario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
  areasAtendidas: [
    'Auxiliar de Saúde',
    'Condutor Bombeador',
    'Condutor Mecânico',
    'Cozinheiro',
    'Eletricista',
    'Moço de Convés',
    'Moço de Máquinas',
    'Taifeiro'
  ],
  disciplinasBasicos: [
    'Língua Portuguesa',
    'Inglês Técnico (só Condutor Mecânico, Condutor Bombeador e Eletricista)'
  ]
};

// 7. Transpetro – Oficial do Mar
export const TURMA_TRANSPETRO_OFICIAL_MAR_CONCURSO: TurmaConcurso = {
  id: 'turma-transpetro-oficial-mar',
  slug: 'transpetro-oficial-mar',
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Transpetro – Oficial do Mar',
  subtitulo: 'Edital 2',
  bannerImage: '/assets/logos-concursos/transpetro-logo.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Regular Presencial',
  periodo: '08/09 a 16/10',
  turnos: 'Noite / Sábado',
  cargaTotal: '72 horas, de 2 a 3 vezes por semana',
  frequencia: 'De 2 a 3 vezes por semana',
  horario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
  areasAtendidas: [
    'Segundo Oficial de Máquinas',
    'Segundo Oficial de Náutica'
  ],
  disciplinasBasicos: [
    'Língua Portuguesa',
    'Língua Inglesa'
  ]
};

// 8. Transpetro – Médio Terra
export const TURMA_TRANSPETRO_MEDIO_TERRA_CONCURSO: TurmaConcurso = {
  id: 'turma-transpetro-medio-terra',
  slug: 'transpetro-medio-terra',
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Transpetro – Médio Terra',
  subtitulo: 'Edital 3',
  bannerImage: '/assets/logos-concursos/transpetro-logo.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Regular Presencial',
  periodo: '08/09 a 16/10',
  turnos: 'Noite / Sábado',
  cargaTotal: '72 horas, de 2 a 3 vezes por semana',
  frequencia: 'De 2 a 3 vezes por semana',
  horario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
  areasAtendidas: [
    'Administração e Controle',
    'Ambiental',
    'Contabilidade',
    'Dutos e Terminais',
    'Enfermagem do Trabalho',
    'Faixa de Dutos',
    'Inspeção de Equipamentos e Instalações',
    'Manutenção Elétrica, Eletrônica, Instrumentação e Mecânica',
    'Monitoramento Logístico',
    'Naval',
    'Montagem de Edificações',
    'Montagem Mecânica',
    'Química do Petróleo',
    'Segurança',
    'Suprimento de Bens e Serviços'
  ],
  disciplinasBasicos: [
    'Língua Portuguesa',
    'Matemática'
  ]
};

// 9. PMERJ – Soldado da Polícia Militar
export const TURMA_PMERJ_CONCURSO: TurmaConcurso = {
  id: 'turma-pmerj-2026',
  slug: 'pmerj-soldado',
  concursoId: 'pmerj',
  categoria: 'Nossa turma',
  titulo: 'PMERJ – Soldado Policial Militar',
  subtitulo: 'Soldado Policial Militar do Estado do Rio de Janeiro (Banca FGV)',
  bannerImage: '/assets/logos-concursos/logo-pmerj.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Regular Presencial',
  periodo: '10/02/2026 a 18/12/2026',
  turnos: 'Noite / Sábado',
  cargaTotal: '180 encontros',
  frequencia: 'Noite: 4 noites por semana | Sábado: 1 encontro integral semanal',
  horario: '18h30 às 21h45 (noite) · 08h30 às 16h30 (sábado)',
  bonus: 'Oficina de redação discursiva inclusa',
  materias: [
    'Língua Portuguesa e Interpretação de Textos',
    'Matemática Básica e Raciocínio Lógico',
    'Noções de Direitos Humanos',
    'Direito Administrativo',
    'Direito Constitucional',
    'Direito Penal e Processual Penal',
    'Legislação Aplicada à PMERJ'
  ],
  simulados: {
    operacaoDesempenho: 'Simulados ranqueados no modelo da banca FGV'
  }
};

// 10. Guarda Municipal de São Gonçalo
export const TURMA_GM_SAO_GONCALO_CONCURSO: TurmaConcurso = {
  id: 'turma-gm-sao-goncalo',
  slug: 'guarda-municipal-sao-goncalo',
  concursoId: 'gm-sao-goncalo',
  categoria: 'Nossa turma',
  titulo: 'Guarda Municipal de São Gonçalo',
  subtitulo: 'Banca SELECON · 100 Vagas Imediatas',
  bannerImage: '/assets/logos-concursos/logo-guarda-saogoncalo.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Regular Presencial',
  periodo: '01/09/2026 a 22/01/2027',
  turnos: 'Noite / Sábado',
  cargaTotal: '72 encontros = 216 horas',
  frequencia: '3 a 4 encontros semanais',
  horario: '18h45 às 21h45 (noite) · 08h30 às 16h30 (sábado)',
  materias: [
    'Língua Portuguesa',
    'Noções de Direito Constitucional',
    'Noções de Direito Penal e Processual Penal',
    'Legislação de Trânsito (CTB)',
    'Legislação Municipal e Estatuto da GM-SG',
    'Informática Básica'
  ],
  simulados: {
    operacaoDesempenho: 'Simulados cronometrados de 80 questões no padrão SELECON'
  }
};

// 11. Guarda Municipal de São Gonçalo – Intensivo
export const TURMA_GM_SAO_GONCALO_INTENSIVO_CONCURSO: TurmaConcurso = {
  id: 'turma-gm-sao-goncalo-intensivo',
  slug: 'guarda-municipal-sao-goncalo-intensivo',
  concursoId: 'gm-sao-goncalo',
  categoria: 'Nossa turma',
  titulo: 'Turma GM São Gonçalo – Intensivo (17/10/26 a 23/01/27)',
  subtitulo: 'Segunda turma presencial, com menos encontros e dias mais longos. Disciplinas conforme o Edital nº 001/PMSG/2026.',
  bannerImage: '/assets/logos-concursos/logo-guarda-saogoncalo.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Intensiva de Sábado',
  periodo: '17/10/26 a 23/01/27',
  turnos: 'Sábado (Intensivo)',
  cargaTotal: '11 encontros = 100 horas',
  frequencia: 'Sábados (1 encontro semanal intensivo)',
  horario: '08h00 às 17h10. O material indica "Noturno", mas o horário e as datas (sábados) sugerem turma de sábado. Confirmar',
  materias: [
    'Língua Portuguesa',
    'Direito Constitucional',
    'Direito Penal',
    'Direito Processual Penal',
    'Direito Administrativo',
    'Leis Extravagantes',
    'Conhecimentos Específicos',
    'Informática'
  ],
  conteudo: 'Mesmo programa da turma noturna: leis extravagantes (Hediondos, Abuso de Autoridade, Tortura, ECA, Desarmamento, Crimes Ambientais, Maria da Penha, Drogas, Organizações Criminosas, CTB) e conhecimentos específicos (SUSP, Estatuto Geral das Guardas, estatutos municipais de São Gonçalo)'
};

// 12. Top Master – Soldado PMERJ 2026/2027
export const TURMA_TOP_MASTER_PMERJ_CONCURSO: TurmaConcurso = {
  id: 'turma-top-master-pmerj',
  slug: 'top-master-pmerj',
  concursoId: 'pmerj',
  categoria: 'Nossa turma',
  titulo: 'Top Master – Soldado PMERJ 2026/2027',
  subtitulo: 'Preparação avançada: aprofundamento dos conteúdos e treino por meio de exercícios, simulados e estratégias de prova.',
  bannerImage: '/assets/logos-concursos/logo-pmerj.jpg',
  modalidade: 'Presencial',
  formato: 'Turma Avançada (Top Master)',
  periodo: '13/10/26 a 26/02/27',
  cargaTotal: '50 encontros = 150 horas',
  horario: '18h45 às 21h45',
  bonus: 'Ao contratar, 1 mês adicional gratuito',
  paraQuemE: 'Alunos que já têm base e querem avançar. Recomenda-se ter acompanhado a turma regular TOP – PMERJ por cerca de dois períodos, pois as aulas aprofundam e não explicam o conteúdo básico desde o início',
  foco: 'Consolidar o aprendizado, resolver questões, fortalecer o raciocínio e melhorar o desempenho',
  materias: [
    'Língua Portuguesa',
    'Redação',
    'Matemática',
    'Direitos Humanos',
    'Direito Administrativo',
    'Legislação Aplicada à PMERJ',
    'Direito Penal',
    'Direito Processual Penal'
  ],
  comboMulti: 'Turma + OPA + Operação Desempenho + Aulões Estratégicos Prog + Bônus Progressão Online',
  comboAprov: 'Turma + Operação Desempenho',
  semCombo: 'Somente a turma presencial',
  simulados: {
    operacaoDesempenho: '4 simulados, modelo PMERJ'
  },
  auloesEstrategicos: {
    encontros: '4 encontros = 24 horas, aos domingos'
  }
};

// 13. Banco do Brasil – Escriturário (Novembro/26)
export const TURMA_BANCO_DO_BRASIL_CONCURSO: TurmaConcurso = {
  id: 'turma-banco-do-brasil',
  slug: 'banco-do-brasil',
  concursoId: 'banco-do-brasil',
  categoria: 'Nossa turma',
  titulo: 'Banco do Brasil – Escriturário',
  subtitulo: 'Banco do Brasil – Escriturário · Novembro/26',
  bannerImage: '/assets/logos-concursos/BB-logo.jpg',
  periodo: '09/11/2026 a 26/03/2027',
  modalidade: 'Presencial',
  turnos: 'Noite (18:45 às 21:45)',
  cargaTotal: '50 encontros = 150 horas',
  frequencia: 'De 1 a 5 vezes na semana',
  horario: '18:45 às 21:45',
  formato: 'Turma fechada em módulo',
  bonus: 'Ao contratar esta turma, o aluno ganha mais um mês grátis, sem nenhum custo adicional',
  paraQuemE: 'Candidatos de nível médio que desejam ingressar no Banco do Brasil com remuneração inicial de R$ 5.569,07 (com auxílio de R$ 1.946,84), jornada de 6h e rápida evolução de carreira.',
  foco: 'Preparação focada no padrão da Cesgranrio abrangendo todo o edital: Conhecimentos Bancários, Matemática Financeira, Redação, Legislação, Vendas e Informática.',
  materias: [
    'Português',
    'Redação',
    'Inglês',
    'Matemática',
    'Matemática Financeira',
    'Atualidades do Mercado Financeiro',
    'Conhecimentos Bancários',
    'Ética e LGPD',
    'Leis',
    'Informática',
    'Estratégia Empresarial',
    'Técnicas de Vendas',
    'Estatuto da Pessoa com Deficiência e CDC'
  ],
  materiasPresenciais: [
    'Português',
    'Redação',
    'Inglês',
    'Matemática',
    'Matemática Financeira',
    'Atualidades do Mercado Financeiro',
    'Conhecimentos Bancários',
    'Ética e LGPD',
    'Leis',
    'Informática',
    'Estratégia Empresarial',
    'Técnicas de Vendas',
    'Estatuto da Pessoa com Deficiência e CDC'
  ],
  simulados: {
    operacaoDesempenho: 'Simulados com correção detalhada e ranking de desempenho no perfil Cesgranrio'
  },
  valoresInfo: {
    titulo: 'Valores',
    subtitulo: 'Condições de investimento promocionais por lote com vagas limitadas',
    aVista: '5% de desconto',
    cartaoCredito: 'parcelado em até 10 cotas',
    boletoBancario: 'parcelado em até 07 cotas (valores promocionais por lote, abaixo)',
    lotes: [
      {
        lote: '1º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 236,01',
        destaque: 'Melhor Condição'
      },
      {
        lote: '2º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 246,05'
      },
      {
        lote: '3º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 256,10'
      }
    ]
  }
};

// 14. Guarda Municipal de Maricá – Novembro/26
export const TURMA_GM_MARICA_CONCURSO: TurmaConcurso = {
  id: 'turma-gm-marica-novembro-26',
  slug: 'guarda-municipal-marica',
  concursoId: 'guarda-marica',
  categoria: 'Nossa turma',
  titulo: 'Guarda Municipal de Maricá - Novembro/2026',
  subtitulo: 'Edital previsto para abril/2026 · Banca COSEAC/UFF · Mais de 800 vagas · Até R$ 5.000',
  bannerImage: '/assets/logos-concursos/logo-marica.png',
  modalidade: 'Presencial',
  formato: 'Turma fechada em módulo',
  periodo: '09/11/2026 a 26/03/2027',
  turnos: 'Noite',
  cargaTotal: '50 encontros = 150 horas',
  frequencia: 'De 1 a 5 vezes na semana',
  horario: '18:45 às 21:45',
  horarioRotulo: 'Horário',
  bonus: 'Ao contratar esta turma, o aluno ganha mais um mês grátis, sem nenhum custo adicional',
  paraQuemE: 'Candidatos com Ensino Médio completo e CNH categoria "A" ou "B" (18 a 35 anos) que desejam estabilidade e remuneração de até R$ 5.000 na Guarda Municipal de Maricá.',
  foco: 'Preparação completa para o edital previsto para abril/2026 com foco na banca COSEAC/UFF e simulados com resolução comentada.',
  cargoInfo: {
    cargo: 'Guarda Municipal (Mais de 800 vagas · Remuneração de até R$ 5.000)',
    requisito: 'Ensino Médio completo + CNH categoria "A" ou "B" (comprovados na nomeação) · Idade de 18 a 35 anos'
  },
  materiasPresenciais: [
    'Língua Portuguesa',
    'Raciocínio Lógico-Matemático',
    'Informática',
    'Direito Constitucional',
    'Direito Administrativo',
    'Direito Penal',
    'Direito Processual Penal',
    'Direitos Humanos',
    'Legislação Específica'
  ],
  materias: [
    'Língua Portuguesa',
    'Raciocínio Lógico-Matemático',
    'Informática',
    'Direito Constitucional',
    'Direito Administrativo',
    'Direito Penal',
    'Direito Processual Penal',
    'Direitos Humanos',
    'Legislação Específica'
  ],
  conhecimentosBasicos: [
    'Língua Portuguesa',
    'Raciocínio Lógico-Matemático',
    'Informática'
  ],
  conhecimentosEspecificos: [
    'Direito Constitucional',
    'Direito Administrativo',
    'Direito Penal',
    'Direito Processual Penal',
    'Direitos Humanos',
    'Legislação Específica'
  ],
  simulados: {
    operacaoDesempenho: 'Simulados com correção detalhada e ranking de desempenho no perfil da banca COSEAC/UFF'
  },
  valoresInfo: {
    titulo: 'Valores',
    subtitulo: 'Condições de investimento promocionais por lote com vagas limitadas',
    aVista: '5% de desconto',
    cartaoCredito: 'parcelado em até 10 cotas',
    boletoBancario: 'parcelado em até 07 cotas (valores promocionais por lote, abaixo)',
    lotes: [
      {
        lote: '1º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 236,01',
        destaque: 'Melhor Condição'
      },
      {
        lote: '2º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 246,05'
      },
      {
        lote: '3º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 256,10'
      }
    ]
  }
};

// 15. CBMERJ – Soldado Temporário – Novembro/26
export const TURMA_CBMERJ_SOLDADO_CONCURSO: TurmaConcurso = {
  id: 'turma-cbmerj-soldado-novembro-26',
  slug: 'cbmerj-soldado-temporario',
  concursoId: 'cbmerj-soldado-temporario',
  categoria: 'Nossa turma',
  titulo: 'CBMERJ – Soldado Temporário · Novembro/2026',
  subtitulo: 'Banca Instituto AOCP · 1.500 vagas autorizadas · Idade 18 a 25 anos',
  bannerImage: '/assets/logos-concursos/Brasão_CBM_RJ.png',
  modalidade: 'Presencial',
  formato: 'Turma fechada em módulo',
  periodo: '09/11/2026 a 26/03/2027',
  turnos: 'Noite',
  cargaTotal: '50 encontros = 150 horas',
  frequencia: 'De 1 a 5 vezes na semana',
  horario: '18:45 às 21:45',
  horarioRotulo: 'Horário',
  bonus: 'Ao contratar esta turma, o aluno ganha mais um mês grátis, sem nenhum custo adicional',
  paraQuemE: 'Candidatos com Ensino Médio completo e CNH categoria "B" (18 a 25 anos) que desejam ingressar nas fileiras do Corpo de Bombeiros Militar do Estado do Rio de Janeiro.',
  foco: 'Preparação focada nas disciplinas do Instituto AOCP (Língua Portuguesa, Matemática e Raciocínio Lógico) com simulados e resolução intensiva de questões de bancas anteriores.',
  cargoInfo: {
    cargo: 'Soldado Temporário CBMERJ (1.500 vagas autorizadas)',
    requisito: 'Ensino Médio completo + CNH categoria "B" (comprovados na nomeação) · Idade de 18 a 25 anos'
  },
  materiasPresenciais: [
    'Língua Portuguesa',
    'Matemática',
    'Raciocínio Lógico'
  ],
  materias: [
    'Língua Portuguesa',
    'Matemática',
    'Raciocínio Lógico'
  ],
  conhecimentosBasicos: [
    'Língua Portuguesa',
    'Matemática',
    'Raciocínio Lógico'
  ],
  simulados: {
    operacaoDesempenho: 'Simulados comentados no padrão de questões da banca Instituto AOCP'
  },
  valoresInfo: {
    titulo: 'Valores',
    subtitulo: 'Condições de investimento promocionais por lote com vagas limitadas para o CBMERJ',
    aVista: '5% de desconto',
    cartaoCredito: 'parcelado em até 10 cotas',
    boletoBancario: 'parcelado em até 07 cotas (valores promocionais por lote, abaixo)',
    lotes: [
      {
        lote: '1º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 236,01',
        destaque: 'Melhor Condição'
      },
      {
        lote: '2º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 246,05'
      },
      {
        lote: '3º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 256,10'
      }
    ]
  }
};

// 16. Detran/RJ – Três Turmas Unificadas em 1 Card (Novembro/26)
export const TURMA_DETRAN_RJ_CONCURSO: TurmaConcurso = {
  id: 'turma-detran-rj-novembro-26',
  slug: 'detran-rj',
  concursoId: 'detran-rj',
  categoria: 'Nossa turma',
  titulo: 'Detran/RJ – 3 Turmas (Trânsito, Identificação Civil e Administrativo)',
  subtitulo: 'Novembro/2026 a Março/2027 · 3 Cargos de Nível Médio · Carga de 150h',
  bannerImage: '/assets/logos-concursos/logo-detran.png',
  modalidade: 'Presencial',
  formato: 'Turma fechada em módulo',
  periodo: '09/11/2026 a 26/03/2027',
  turnos: 'Noite',
  cargaTotal: '50 encontros = 150 horas',
  frequencia: 'De 1 a 5 vezes na semana',
  horario: '18:45 às 21:45 (Trânsito 430) · 18:30 às 21:45 (Identificação Civil 222 e Adm 112)',
  horarioRotulo: 'Horários por Cargo',
  bonus: 'Ao contratar esta turma, o aluno ganha mais um mês grátis, sem nenhum custo adicional',
  paraQuemE: 'Candidatos com Ensino Médio completo que desejam conquistar estabilidade pública em um dos 3 cargos do Detran/RJ (Trânsito, Identificação Civil ou Administrativo).',
  foco: 'Preparação intensiva de 50 encontros cobrindo todo o edital (50 questões) com simulados ranqueados e resolução direcionada de questões.',
  cargoInfo: {
    cargo: 'Assistente Técnico de Trânsito (430), Identificação Civil (222) e Administrativo (112)',
    requisito: 'Ensino Médio completo · Último concurso: 800 vagas'
  },
  areasAtendidas: [
    'Detran/RJ – Assistente Técnico de Trânsito (430) | Horário: 18:45 às 21:45',
    'Detran/RJ – Assistente Técnico de Identificação Civil (222) | Horário: 18:30 às 21:45',
    'Detran/RJ – Assistente Técnico Administrativo (112) | Horário: 18:30 às 21:45'
  ],
  materiasPresenciais: [
    'Língua Portuguesa (10 questões)',
    'Língua Estrangeira – inglês ou espanhol (05 questões)',
    'Legislação de Trânsito (10 questões)',
    'Noções de Informática (05 questões)',
    'Conhecimentos Específicos (20 questões)'
  ],
  materias: [
    'Língua Portuguesa (10 questões)',
    'Língua Estrangeira – inglês ou espanhol (05 questões)',
    'Legislação de Trânsito (10 questões)',
    'Noções de Informática (05 questões)',
    'Conhecimentos Específicos (20 questões)'
  ],
  conhecimentosBasicos: [
    'Língua Portuguesa (10 questões)',
    'Língua Estrangeira – inglês ou espanhol (05 questões)',
    'Legislação de Trânsito (10 questões)',
    'Noções de Informática (05 questões)',
    'Conhecimentos Específicos (20 questões)'
  ],
  simulados: {
    operacaoDesempenho: 'Simulados de 50 questões no modelo de prova do concurso Detran/RJ com correção detalhada'
  },
  valoresInfo: {
    titulo: 'Valores',
    subtitulo: 'Condições de investimento promocionais por lote com vagas limitadas para o Detran/RJ',
    aVista: '5% de desconto',
    cartaoCredito: 'parcelado em até 10 cotas',
    boletoBancario: 'parcelado em até 07 cotas (valores promocionais por lote, abaixo)',
    lotes: [
      {
        lote: '1º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 236,01',
        destaque: 'Melhor Condição'
      },
      {
        lote: '2º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 246,05'
      },
      {
        lote: '3º lote – valor promocional',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 cotas de R$ 256,10'
      }
    ]
  }
};

// 17. Guardas Municipais do Estado do Rio de Janeiro (Preparação Unificada)
export const TURMA_GUARDAS_MUNICIPAIS_RJ_CONCURSO: TurmaConcurso = {
  id: 'turma-guardas-municipais-rj',
  slug: 'guardas-municipais-rj',
  concursoId: 'guardas-municipais-rj',
  categoria: 'Nossa turma',
  titulo: 'Guardas Municipais do Estado do Rio de Janeiro',
  subtitulo: '16/11/2026 a 30/05/2027 · Preparação Geral Unificada (São Gonçalo, Queimados, Maricá, Petrópolis e mais) · 180h',
  bannerImage: '/assets/logos-concursos/BRASAO_GMRIO.png',
  modalidade: 'Presencial',
  formato: 'Turma fechada em módulo',
  periodo: '16/11/2026 a 30/05/2027',
  turnos: 'Noturno',
  cargaTotal: '60 encontros = 180 horas',
  frequencia: '3 vezes na semana (podendo variar devido a imprevistos/agendas)',
  horario: '18h45 às 21h45 (com 15 min de intervalo)',
  horarioRotulo: 'Horário Previsto',
  bonus: 'Material Didático (PDF) de uso em sala incluso · 1 mês grátis sem custo adicional',
  paraQuemE: 'Candidatos com Ensino Médio completo (18 a 35 anos) que buscam estabilidade no serviço público municipal com remunerações de R$ 2.800 a R$ 5.100.',
  foco: 'Preparação unificada de alto rendimento baseada nos últimos editais das Guardas Municipais do RJ (São Gonçalo, Queimados, Maricá, Petrópolis, Cordeiro, Saquarema e Resende).',
  cargoInfo: {
    cargo: 'Guarda Civil Municipal (1.600+ vagas previstas no Estado do RJ)',
    requisito: 'Ensino Médio completo · Faixa etária comum de 18 a 35 anos'
  },
  areasAtendidas: [
    'São Gonçalo (Banca Selecon – 100 vagas imediatas + 1.000 em cadastro reserva)',
    'Queimados (Banca IAN – Edital previsto para setembro/2026)',
    'Maricá (Novo concurso com expectativa de até 400 vagas em andamento)',
    'Petrópolis (Anúncio prévio contemplando 110 vagas)',
    'Cordeiro (Concurso com escolha de banca em andamento)',
    'Saquarema e Resende (Editais municipais previstos 2026/2027)'
  ],
  materiasPresenciais: [
    'Língua Portuguesa (Núcleo Básico)',
    'Raciocínio Lógico-Matemático (Núcleo Básico)',
    'Informática (Núcleo Básico)',
    'Direito Constitucional (Núcleo Jurídico)',
    'Direito Penal (Núcleo Jurídico)',
    'Estatuto Geral das Guardas Municipais (Lei 13.022/14)',
    'Estatuto da Criança e do Adolescente (ECA)',
    'Estatuto do Idoso',
    'Lei Maria da Penha',
    'Abuso de Autoridade (Lei nº 13.869/2019)'
  ],
  materias: [
    'Língua Portuguesa (Núcleo Básico)',
    'Raciocínio Lógico-Matemático (Núcleo Básico)',
    'Informática (Núcleo Básico)',
    'Direito Constitucional (Núcleo Jurídico)',
    'Direito Penal (Núcleo Jurídico)',
    'Estatuto Geral das Guardas Municipais (Lei 13.022/14)',
    'Estatuto da Criança e do Adolescente (ECA)',
    'Estatuto do Idoso',
    'Lei Maria da Penha',
    'Abuso de Autoridade (Lei nº 13.869/2019)'
  ],
  conhecimentosBasicos: [
    'Língua Portuguesa',
    'Raciocínio Lógico-Matemático',
    'Informática'
  ],
  conhecimentosEspecificos: [
    'Direito Constitucional',
    'Direito Penal',
    'Estatuto Geral das Guardas Municipais (Lei 13.022/14)',
    'Estatuto da Criança e do Adolescente (ECA)',
    'Estatuto do Idoso',
    'Lei Maria da Penha',
    'Abuso de Autoridade (Lei nº 13.869/2019)'
  ],
  semCombo: 'Curso Regular sem combos: R$ 1.790,00 (10% de desconto à vista R$ 1.611,00)',
  comboMulti: 'Disponível para aquisição separada com módulos especiais para turbinar a aprendizagem',
  simulados: {
    operacaoDesempenho: 'Simulados ranqueados cronometrados nos padrões Selecon, IAN e bancas do RJ'
  },
  valoresInfo: {
    titulo: 'Valores',
    subtitulo: 'Curso sem combos: R$ 1.790,00 · Preparação completa para Guardas Municipais do RJ',
    aVista: '10% de desconto: R$ 1.611,00',
    cartaoCredito: 'parcelado em até 10 vezes de R$ 161,10 sem juros',
    boletoBancario: 'sinal de R$ 99,00 + 7 parcelas de R$ 241,57',
    lotes: [
      {
        lote: 'Curso Regular (sem combos)',
        sinal: 'R$ 99,00',
        cotasBoleto: '07 parcelas de R$ 241,57',
        destaque: '10x R$ 161,10 sem juros'
      }
    ]
  }
};
// 18. Petrobras – Nível Médio (Conhecimentos Básicos - Cesgranrio)
export const TURMA_PETROBRAS_NIVEL_MEDIO_CONCURSO: TurmaConcurso = {
  id: 'turma-petrobras-nivel-medio',
  slug: 'petrobras-nivel-medio',
  concursoId: 'petrobras-nivel-medio',
  categoria: 'Nossa turma',
  titulo: 'Petrobras – Nível Médio',
  subtitulo: '16/11/2026 a 28/04/2027 · Conhecimentos Básicos (Língua Portuguesa e Matemática) · Cesgranrio · 60h',
  bannerImage: '/assets/logos-concursos/logo-petrobras.png',
  modalidade: 'Presencial',
  formato: 'Turma fechada em módulo',
  periodo: '16/11/2026 a 28/04/2027',
  turnos: 'Noturno',
  cargaTotal: '20 encontros = 60 horas',
  frequencia: '2 a 3 vezes na semana',
  horario: '18h45 às 21h45 (com 15 min de intervalo)',
  horarioRotulo: 'Horário Previsto',
  bonus: 'Foco na banca Cesgranrio · Remuneração de R$ 5.563,90',
  paraQuemE: 'Candidatos com curso técnico de nível médio nas áreas exigidas no edital que buscam carreira na Petrobras com remuneração inicial de R$ 5.563,90.',
  foco: 'Preparação focada no padrão da banca Cesgranrio em Conhecimentos Básicos (Língua Portuguesa e Matemática).',
  cargoInfo: {
    cargo: 'Profissional Petrobras de Nível Técnico Júnior (Nível Médio/Técnico)',
    requisito: 'Curso técnico de nível médio em uma das áreas exigidas no edital'
  },
  materiasPresenciais: [
    'Língua Portuguesa (Cesgranrio)',
    'Matemática (Cesgranrio)'
  ],
  materias: [
    'Língua Portuguesa',
    'Matemática'
  ],
  semCombo: 'Valor do curso: R$ 649,90 (10% de desconto à vista R$ 584,91 ou 10x de R$ 58,49 sem juros)',
  valoresInfo: {
    titulo: 'Valores',
    subtitulo: 'Valor do curso: R$ 649,90 · Conhecimentos Básicos Petrobras',
    aVista: '10% de desconto: R$ 584,91',
    cartaoCredito: 'parcelado em até 10 vezes de R$ 58,49 sem juros',
    boletoBancario: 'condição facilitada no carnê/boleto',
    lotes: [
      {
        lote: 'Curso Presencial Noturno',
        sinal: 'Consulte a secretaria',
        cotasBoleto: 'Parcelamento facilitado',
        destaque: '10x R$ 58,49 sem juros'
      }
    ]
  }
};

// 19. Petrobras – Suprimentos de Bens e Serviços (Ênfase em Administração)
export const TURMA_PETROBRAS_SUPRIMENTOS_CONCURSO: TurmaConcurso = {
  id: 'turma-petrobras-suprimentos-administracao',
  slug: 'petrobras-suprimentos-administracao',
  concursoId: 'petrobras-suprimentos-administracao',
  categoria: 'Nossa turma',
  titulo: 'Petrobras – Suprimentos de Bens e Serviços',
  subtitulo: '16/11/2026 a 28/04/2027 · Ênfase em Administração · 6 disciplinas · Cesgranrio · 180h',
  bannerImage: '/assets/logos-concursos/logo-petrobras.png',
  modalidade: 'Presencial',
  formato: 'Turma fechada em módulo',
  periodo: '16/11/2026 a 28/04/2027',
  turnos: 'Noturno',
  cargaTotal: '60 encontros = 180 horas',
  frequencia: '3 a 4 vezes na semana',
  horario: '18h45 às 21h45 (com 15 min de intervalo)',
  horarioRotulo: 'Horário Previsto',
  bonus: 'Foco na banca Cesgranrio · Remuneração de R$ 5.563,90',
  paraQuemE: 'Candidatos com curso técnico de nível médio nas áreas de Administração, Comércio, Contabilidade, Finanças, Logística ou áreas afins que buscam carreira na Petrobras.',
  foco: 'Preparação completa para a área de Suprimentos: Conhecimentos Básicos e Específicos no estilo Cesgranrio.',
  cargoInfo: {
    cargo: 'Profissional Petrobras de Nível Técnico Júnior – Suprimentos de Bens e Serviços / Administração',
    requisito: 'Curso técnico em Administração, Comércio, Contabilidade, Finanças, Informática, Logística ou Suprimento'
  },
  materiasPresenciais: [
    'Língua Portuguesa',
    'Matemática',
    'Noções de Administração',
    'Conceitos de Logística e Gerenciamento da Cadeia de Suprimentos',
    'Legislação',
    'Noções de Contabilidade'
  ],
  materias: [
    'Língua Portuguesa',
    'Matemática',
    'Noções de Administração',
    'Conceitos de Logística e Gerenciamento da Cadeia de Suprimentos',
    'Legislação',
    'Noções de Contabilidade'
  ],
  semCombo: 'Valor do curso: R$ 1.799,30 (10% de desconto à vista R$ 1.619,37 ou 10x de R$ 179,93 sem juros)',
  valoresInfo: {
    titulo: 'Valores',
    subtitulo: 'Valor do curso: R$ 1.799,30 · Petrobras Suprimentos / Administração',
    aVista: '10% de desconto: R$ 1.619,37',
    cartaoCredito: 'parcelado em até 10 vezes de R$ 179,93 sem juros',
    boletoBancario: 'condição facilitada na secretaria',
    lotes: [
      {
        lote: 'Curso Presencial Noturno',
        sinal: 'Consulte a secretaria',
        cotasBoleto: 'Parcelamento facilitado',
        destaque: '10x R$ 179,93 sem juros'
      }
    ]
  }
};

// 20. Sabadão Transpetro – Aulões de Reta Final
export const TURMA_SABADAO_TRANSPETRO_CONCURSO: TurmaConcurso = {
  id: 'turma-sabadao-transpetro',
  slug: 'sabadao-transpetro',
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Sabadão Transpetro – Aulões de Reta Final',
  subtitulo: 'Sábado, 05 de Dezembro · Das 8h às 17h30 · Véspera da Prova · Cesgranrio · A partir de R$ 20,00',
  bannerImage: '/assets/logos-concursos/transpetro-logo.jpg',
  modalidade: 'Presencial',
  formato: 'Aulões de Véspera (Avulsos ou Blocos)',
  periodo: '05 de Dezembro (Sábado)',
  turnos: 'Manhã e Tarde (08h às 17h30)',
  cargaTotal: '8 horas de revisão intensiva',
  frequencia: 'Sábado de véspera da prova',
  horario: '08h00 às 17h30',
  horarioRotulo: 'Horário dos Aulões',
  bonus: 'Revisão intensiva na véspera com os professores especialistas na Cesgranrio',
  paraQuemE: 'Candidatos aos cargos de Médio Terra, Superior Terra e Administração e Controle da Transpetro que desejam revisar os pontos mais cobrados na véspera da prova.',
  foco: 'Revisão direcionada no padrão Cesgranrio para a prova do dia 06/12.',
  cargoInfo: {
    cargo: 'Médio Terra · Superior Terra · Administração e Controle',
    requisito: 'Candidatos inscritos no concurso Transpetro'
  },
  materiasPresenciais: [
    'Língua Portuguesa',
    'Matemática',
    'Língua Inglesa',
    'Administração',
    'Contabilidade e Logística'
  ],
  materias: [
    'Língua Portuguesa',
    'Matemática',
    'Língua Inglesa',
    'Administração',
    'Contabilidade e Logística'
  ],
  semCombo: 'A partir de R$ 20,00 por aula (Blocos R$ 40,00 / Dia Completo R$ 64,00 com 20% OFF)',
  valoresInfo: {
    titulo: 'Investimento Sabadão Transpetro',
    subtitulo: 'Aulas avulsas ou blocos com até 20% de desconto',
    aVista: 'Aula Avulsa R$ 20,00 | Bloco R$ 40,00 | Dia Completo R$ 64,00',
    cartaoCredito: 'Cartão de crédito, Pix ou dinheiro na secretaria',
    boletoBancario: 'Condições facilitadas na secretaria',
    lotes: [
      {
        lote: 'Aula Avulsa (2 horas)',
        sinal: 'R$ 20,00',
        cotasBoleto: 'Pagamento único',
        destaque: 'R$ 20,00 por aula'
      },
      {
        lote: 'Blocos 1 + 2 (Dia Completo)',
        sinal: 'R$ 64,00',
        cotasBoleto: 'Pagamento único com 20% OFF',
        destaque: 'R$ 64,00 (20% OFF)'
      }
    ]
  }
};


// 21. Semana Transpetro – Aulões de Reta Final
export const TURMA_SEMANA_TRANSPETRO_CONCURSO: TurmaConcurso = {
  id: 'turma-semana-transpetro',
  slug: 'semana-transpetro',
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Semana Transpetro – Aulões de Reta Final',
  subtitulo: 'De 30/11 a 04/12 · Noites das 18h45 às 21h45 · Reta Final Cesgranrio · A partir de R$ 25,00',
  bannerImage: '/assets/logos-concursos/transpetro-logo.jpg',
  modalidade: 'Presencial',
  formato: 'Aulões Noturnos de Reta Final (Avulsos ou Combos)',
  periodo: '30/11 a 04/12 (Segunda a Sexta)',
  turnos: 'Noite (18h45 às 21h45)',
  cargaTotal: '3h a 15h de revisão intensiva',
  frequencia: 'Uma aula por noite na semana da prova',
  horario: '18h45 às 21h45',
  horarioRotulo: 'Horário dos Aulões Noturnos',
  bonus: 'Revisão intensiva noite a noite na semana da prova com professores especialistas na Cesgranrio',
  paraQuemE: 'Candidatos aos cargos de Médio Terra, Superior Terra e Administração e Controle da Transpetro que desejam revisar disciplinas específicas no turno da noite.',
  foco: 'Revisão noturna focada na banca Fundação Cesgranrio para a prova do dia 06/12.',
  cargoInfo: {
    cargo: 'Médio Terra · Superior Terra · Administração e Controle',
    requisito: 'Candidatos inscritos no concurso Transpetro'
  },
  materiasPresenciais: [
    'Língua Portuguesa',
    'Administração',
    'Matemática',
    'Língua Inglesa',
    'Contabilidade e Logística'
  ],
  materias: [
    'Língua Portuguesa',
    'Administração',
    'Matemática',
    'Língua Inglesa',
    'Contabilidade e Logística'
  ],
  semCombo: 'A partir de R$ 25,00 por aula (Combo 1 R$ 55,00 / Combo 2 R$ 75,00)',
  valoresInfo: {
    titulo: 'Investimento Semana Transpetro',
    subtitulo: 'Aulas avulsas ou combos com desconto',
    aVista: 'Aula Avulsa R$ 25,00 | Combo 1 R$ 55,00 | Combo 2 R$ 75,00',
    cartaoCredito: 'Cartão de crédito, Pix ou dinheiro na secretaria',
    boletoBancario: 'Condições facilitadas na secretaria',
    lotes: [
      {
        lote: 'Aula Avulsa (3 horas)',
        sinal: 'R$ 25,00',
        cotasBoleto: 'Pagamento único',
        destaque: 'R$ 25,00 por aula'
      },
      {
        lote: 'Combo 1 (2 aulas)',
        sinal: 'R$ 55,00',
        cotasBoleto: 'Pagamento único',
        destaque: 'R$ 55,00'
      },
      {
        lote: 'Combo 2 (4 aulas)',
        sinal: 'R$ 75,00',
        cotasBoleto: 'Pagamento único com desconto',
        destaque: 'R$ 75,00'
      }
    ]
  }
};
// Array Oficial de Turmas de Concursos Públicos
export const TURMAS_CONCURSOS: TurmaConcurso[] = [
  TURMA_GUARDAS_MUNICIPAIS_RJ_CONCURSO,
  TURMA_PETROBRAS_NIVEL_MEDIO_CONCURSO,
  TURMA_PETROBRAS_SUPRIMENTOS_CONCURSO,
  TURMA_SABADAO_TRANSPETRO_CONCURSO,
  TURMA_SEMANA_TRANSPETRO_CONCURSO,
  TURMA_DETRAN_RJ_CONCURSO,
  TURMA_CBMERJ_SOLDADO_CONCURSO,
  TURMA_GM_MARICA_CONCURSO,
  TURMA_BANCO_DO_BRASIL_CONCURSO,
  TURMA_INSS_CONCURSO,
  TURMA_PRF_CONCURSO,
  TURMA_PCERJ_CONCURSO,
  TURMA_PRF_ADMINISTRATIVO_CONCURSO,
  TURMA_TRANSPETRO_ADMINISTRACAO_CONCURSO,
  TURMA_TRANSPETRO_AUXILIAR_MAR_CONCURSO,
  TURMA_TRANSPETRO_OFICIAL_MAR_CONCURSO,
  TURMA_TRANSPETRO_MEDIO_TERRA_CONCURSO,
  TURMA_PMERJ_CONCURSO,
  TURMA_GM_SAO_GONCALO_CONCURSO,
  TURMA_GM_SAO_GONCALO_INTENSIVO_CONCURSO,
  TURMA_TOP_MASTER_PMERJ_CONCURSO
];

function matchesConcursoId(turmaConcursoId: string, searchId: string): boolean {
  if (turmaConcursoId === searchId) return true;
    if ((turmaConcursoId === 'semana-transpetro' || turmaConcursoId === 'transpetro') &&
      (searchId === 'semana-transpetro' || searchId === 'transpetro')) {
    return true;
  }
    if ((turmaConcursoId === 'sabadao-transpetro' || turmaConcursoId === 'transpetro') &&
      (searchId === 'sabadao-transpetro' || searchId === 'transpetro')) {
    return true;
  }
    if ((turmaConcursoId === 'petrobras-suprimentos-administracao' || turmaConcursoId === 'petrobras-suprimentos') &&
      (searchId === 'petrobras-suprimentos-administracao' || searchId === 'petrobras-suprimentos')) {
    return true;
  }

    if ((turmaConcursoId === 'petrobras-nivel-medio' || turmaConcursoId === 'petrobras') &&
      (searchId === 'petrobras-nivel-medio' || searchId === 'petrobras')) {
    return true;
  }
  
  if ((turmaConcursoId === 'guardas-municipais-rj' || turmaConcursoId === 'gm-rj') &&
      (searchId === 'guardas-municipais-rj' || searchId === 'gm-rj')) {
    return true;
  }
  if ((turmaConcursoId === 'detran-rj' || turmaConcursoId === 'detran') &&
      (searchId === 'detran-rj' || searchId === 'detran')) {
    return true;
  }
  if ((turmaConcursoId === 'prf' || turmaConcursoId === 'prf-agente-federal') &&
      (searchId === 'prf' || searchId === 'prf-agente-federal')) {
    return true;
  }
  if ((turmaConcursoId === 'guarda-marica' || turmaConcursoId === 'gm-marica') &&
      (searchId === 'guarda-marica' || searchId === 'gm-marica')) {
    return true;
  }
  if ((turmaConcursoId === 'cbmerj-soldado-temporario' || turmaConcursoId === 'cbmerj') &&
      (searchId === 'cbmerj-soldado-temporario' || searchId === 'cbmerj')) {
    return true;
  }
  return false;
}

// Helper para obter turma pelo ID do concurso
export function getTurmaConcursoPorId(concursoId: string): TurmaConcurso | undefined {
  return TURMAS_CONCURSOS.find(turma => matchesConcursoId(turma.concursoId, concursoId));
}

// Helper para obter todas as turmas de um concurso
export function getTurmasConcursoPorId(concursoId: string): TurmaConcurso[] {
  return TURMAS_CONCURSOS.filter(turma => matchesConcursoId(turma.concursoId, concursoId));
}

// Alias de retrocompatibilidade
export const getTurmaForConcurso = getTurmaConcursoPorId;

// Helper para obter turma pelo slug ou ID da URL (ex: 'guardas-municipais-rj')
export function getTurmaBySlug(slug: string): TurmaConcurso | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().replace(/^\/turmas\/?/, '').replace(/\/$/, '').trim();

  // 1. Busca exata por slug
  const bySlug = TURMAS_CONCURSOS.find(t => t.slug === clean);
  if (bySlug) return bySlug;

  // 2. Busca exata por id ou sem prefixo 'turma-'
  const byId = TURMAS_CONCURSOS.find(t => t.id === clean || t.id === `turma-${clean}` || t.id.replace(/^turma-/, '') === clean);
  if (byId) return byId;

  // 3. Busca por concursoId
  const byConcurso = TURMAS_CONCURSOS.find(t => matchesConcursoId(t.concursoId, clean));
  if (byConcurso) return byConcurso;

  // 4. Busca flexível aproximada
  return TURMAS_CONCURSOS.find(t => {
    if (t.slug && (clean.includes(t.slug) || t.slug.includes(clean))) return true;
    if (t.id && clean.includes(t.id)) return true;
    return false;
  });
}
