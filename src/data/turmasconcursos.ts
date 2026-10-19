
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
  concursoId: string; // Vínculo com o concurso (inss, prf, pcerj, transpetro, etc.)
  categoria: 'Nossa turma';
  titulo: string;
  subtitulo?: string;
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
}

// 1. INSS – Técnico do Seguro Social – Outubro/26
export const TURMA_INSS_CONCURSO: TurmaConcurso = {
  id: 'turma-inss-outubro-26',
  concursoId: 'inss',
  categoria: 'Nossa turma',
  titulo: 'INSS – Técnico do Seguro Social – Outubro/26',
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
  concursoId: 'prf-agente-federal',
  categoria: 'Nossa turma',
  titulo: 'Turma PRF – Outubro/26',
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
  concursoId: 'pcerj',
  categoria: 'Nossa turma',
  titulo: 'PCERJ – Investigador e Inspetor de Polícia – Outubro/26',
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
  concursoId: 'prf-administrativo',
  categoria: 'Nossa turma',
  titulo: 'PRF – Agente Administrativo – Outubro/26',
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
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Transpetro – Administração',
  subtitulo: 'Administração e Controle · Ênfase 1 do Edital 3',
  periodo: '08/09 a 27/11/26',
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
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Transpetro – Auxiliar do Mar',
  subtitulo: 'Edital 1',
  periodo: '08/09 a 16/10',
  cargaTotal: '72 horas, 2 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
  frequencia: '2 vezes por semana',
  horario: '18h45 às 21h45, com 15 minutos de intervalo (noite) · 08h00 às 17h10 (sábado)',
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
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Transpetro – Oficial do Mar',
  subtitulo: 'Edital 2',
  periodo: '08/09 a 16/10',
  cargaTotal: '72 horas, de 2 a 3 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
  frequencia: 'De 2 a 3 vezes por semana',
  horario: '18h45 às 21h45, com 15 minutos de intervalo (noite) · 08h00 às 17h10 (sábado)',
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
  concursoId: 'transpetro',
  categoria: 'Nossa turma',
  titulo: 'Transpetro – Médio Terra',
  subtitulo: 'Edital 3',
  periodo: '08/09 a 16/10',
  cargaTotal: '72 horas, de 2 a 3 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
  frequencia: 'De 2 a 3 vezes por semana',
  horario: '18h45 às 21h45, com 15 minutos de intervalo (noite) · 08h00 às 17h10 (sábado)',
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
  concursoId: 'pmerj',
  categoria: 'Nossa turma',
  titulo: 'PMERJ – Soldado Policial Militar',
  subtitulo: 'Soldado Policial Militar do Estado do Rio de Janeiro (Banca FGV)',
  periodo: '10/02/2026 a 18/12/2026',
  turnos: 'Noite / Sábado',
  cargaTotal: '180 encontros',
  frequencia: 'Noite: 4 noites por semana | Sábado: 1 encontro integral semanal',
  horario: '18h30 às 21h45 (noite) · 08h30 às 16h30 (sábado)',
  bonus: '',
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
  concursoId: 'gm-sao-goncalo',
  categoria: 'Nossa turma',
  titulo: 'Guarda Municipal de São Gonçalo',
  subtitulo: 'Banca SELECON · 100 Vagas Imediatas',
  periodo: '13/10/2026 a 22/01/2027',
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
  concursoId: 'gm-sao-goncalo',
  categoria: 'Nossa turma',
  titulo: 'Turma GM São Gonçalo – Intensivo (17/10/26 a 23/01/27)',
  subtitulo: 'Segunda turma presencial, com menos encontros e dias mais longos. Disciplinas conforme o Edital nº 001/PMSG/2026.',
  modalidade: 'Presencial',
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
  concursoId: 'pmerj',
  categoria: 'Nossa turma',
  titulo: 'Top Master – Soldado PMERJ 2026/2027',
  subtitulo: 'Preparação avançada: aprofundamento dos conteúdos e treino por meio de exercícios, simulados e estratégias de prova.',
  periodo: '13/10/26 a 26/02/27',
  modalidade: 'Presencial',
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

// Array Oficial de Turmas de Concursos Públicos
export const TURMAS_CONCURSOS: TurmaConcurso[] = [
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
  if ((turmaConcursoId === 'prf' || turmaConcursoId === 'prf-agente-federal') &&
      (searchId === 'prf' || searchId === 'prf-agente-federal')) {
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