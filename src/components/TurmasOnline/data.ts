export interface BlocoComoFunciona {
  titulo: string;
  texto: string;
}

export interface GrupoMaterias {
  titulo: string;
  materias: string[];
}

export interface TurmaOnlineData {
  id: string;
  tipo: string;
  nome: string;
  subtitulo: string;
  periodo: string;
  carga: string;
  frequencia?: string;
  horario: string;
  edital?: string;
  materias?: string[];
  gruposMaterias?: GrupoMaterias[];
  conteudo?: string;
  material?: string;
  combos: string;
}

export interface ComoFuncionaData {
  titulo: string;
  subtitulo: string;
  textoGeral: string;
  blocos: BlocoComoFunciona[];
  combosTitulo: string;
  combos: string[];
}

export const COMO_FUNCIONA_ONLINE: ComoFuncionaData = {
  titulo: 'Como funciona',
  subtitulo: 'Como funcionam as turmas online',
  textoGeral: 'Valem para todas as turmas online ao vivo abaixo.',
  blocos: [
    {
      titulo: 'Formato',
      texto: 'Aulas ao vivo, na estrutura do Progressão Online (plataforma de acesso), transmitidas pelo YouTube'
    },
    {
      titulo: 'Aula perdida',
      texto: 'O aluno acessa a gravação na plataforma a partir de 24h depois do encerramento da aula'
    },
    {
      titulo: 'Material',
      texto: 'PDF de uso em sala incluso. Quando indicado, os PDFs e os vídeos curtos são enviados pelo curso via WhatsApp'
    },
    {
      titulo: 'Combos',
      texto: 'Contratados separadamente, para turbinar a aprendizagem'
    }
  ],
  combosTitulo: 'Combos das turmas online',
  combos: [
    'Curso completo: somente a turma',
    'Combo 1: curso completo + OPA',
    'Combo 2: curso completo + 1 simulado por mês (4 durante o curso), com correção online gravada',
    'Combo 3: curso completo + OPA + 1 simulado por mês (4 durante o curso), com correção online gravada + 1 mês grátis de Mentoria de Língua Portuguesa (não consta no GM São Gonçalo)'
  ]
};

export const TURMAS_ONLINE_DATA: TurmaOnlineData[] = [
  // TURMA 1
  {
    id: 'pcerj-online',
    tipo: 'Turma online',
    nome: 'PCERJ Online – Investigador e Inspetor',
    subtitulo: 'Curso on-line ao vivo',
    periodo: '19/10/26 a 28/05/27',
    carga: '66 encontros = 165 horas',
    frequencia: '3 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
    horario: '18h45 às 21h30, com 15 minutos de intervalo (noturno)',
    materias: [
      'Língua Portuguesa',
      'Informática',
      'Direitos Humanos',
      'Direito Penal',
      'Direito Processual Penal',
      'Leis Penais'
    ],
    material: 'PDF incluso, enviado pelo curso via WhatsApp',
    combos: 'Curso completo, Combo 1, Combo 2 e Combo 3'
  },

  // TURMA 2
  {
    id: 'pmerj-online',
    tipo: 'Turma online',
    nome: 'PMERJ Online – Soldado',
    subtitulo: 'Curso on-line ao vivo',
    periodo: '19/10/26 a 26/03/27',
    carga: '50 encontros = 125 horas',
    frequencia: '3 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
    horario: '18h45 às 21h30, com 15 minutos de intervalo (noturno)',
    materias: [
      'Língua Portuguesa',
      'Matemática',
      'Direitos Humanos',
      'Direito Penal',
      'Direito Processual Penal'
    ],
    material: 'PDF de uso em sala incluso',
    combos: 'Curso completo, Combo 1, Combo 2 e Combo 3'
  },

  // TURMA 3
  {
    id: 'prf-online-agente-administrativo',
    tipo: 'Turma online',
    nome: 'PRF Online – Agente Administrativo',
    subtitulo: 'Curso on-line ao vivo',
    periodo: '19/10/26 a 28/05/27',
    carga: '66 encontros = 165 horas. O item de periodicidade do material cita 125 horas, então vale confirmar',
    frequencia: '2 a 4 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
    horario: '18h45 às 21h30, com 15 minutos de intervalo (noturno)',
    materias: [
      'Língua Portuguesa',
      'Ética e Conduta Pública',
      'Raciocínio Lógico',
      'Noções de Direito Constitucional',
      'Noções de Direito Administrativo',
      'Noções de Informática',
      'Noções de Administração',
      'Noções de Arquivologia',
      'Legislação relativa à PRF'
    ],
    material: 'PDF de uso em sala incluso. PDFs e vídeos curtos enviados via WhatsApp',
    combos: 'Curso completo, Combo 1, Combo 2 e Combo 3'
  },

  // TURMA 4
  {
    id: 'inss-online-tecnico',
    tipo: 'Turma online',
    nome: 'INSS Online – Técnico do Seguro Social',
    subtitulo: 'Curso on-line ao vivo',
    periodo: '19/10/26 a 28/05/27',
    carga: '66 encontros = 165 horas',
    frequencia: '2 a 4 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
    horario: '18h45 às 21h30, com 15 minutos de intervalo (noturno)',
    materias: [
      'Língua Portuguesa',
      'Legislação Previdenciária',
      'Ética',
      'Raciocínio Lógico',
      'Direito Constitucional',
      'Direito Administrativo',
      'Informática',
      'Redação Oficial'
    ],
    material: 'PDF de uso em sala incluso',
    combos: 'Curso completo, Combo 1, Combo 2 e Combo 3'
  },

  // TURMA 5
  {
    id: 'bb-online-escriturario',
    tipo: 'Turma online',
    nome: 'BB Online – Escriturário',
    subtitulo: 'Banco do Brasil, agente comercial e agente de tecnologia. Curso on-line ao vivo',
    periodo: 'Não informado no material',
    carga: '125 horas',
    frequencia: '3 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
    horario: '18h45 às 21h30, com 15 minutos de intervalo (noturno)',
    gruposMaterias: [
      {
        titulo: 'Conhecimentos básicos',
        materias: [
          'Língua Portuguesa',
          'Matemática',
          'Língua Inglesa',
          'Atualidades do mercado financeiro'
        ]
      },
      {
        titulo: 'Agente Comercial',
        materias: [
          'Vendas e Negociação',
          'Conhecimentos de Informática',
          'Conhecimentos Bancários',
          'Matemática Financeira'
        ]
      },
      {
        titulo: 'Agente de Tecnologia',
        materias: [
          'Tecnologia da Informação',
          'Probabilidade e Estatística',
          'Conhecimentos Bancários'
        ]
      }
    ],
    material: 'PDF de uso em sala incluso. PDFs e vídeos curtos enviados via WhatsApp',
    combos: 'Curso completo, Combo 1, Combo 2 e Combo 3'
  },

  // TURMA 6
  {
    id: 'gm-sao-goncalo-online',
    tipo: 'Turma online',
    nome: 'GM São Gonçalo Online – Guarda Municipal',
    subtitulo: 'Curso on-line ao vivo. Banca Instituto SELECON, prova em 24/01/27',
    periodo: '13/10/26 a 22/01/27',
    carga: '50 encontros = 125 horas',
    horario: '18h45 às 21h30, com 15 minutos de intervalo (noturno)',
    edital: 'Nº 001/PMSG/2026 (o material cita publicação em 23/09 e em 24/09; confirmar)',
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
    conteudo: 'Mesmo programa da turma presencial: leis extravagantes (Hediondos, Abuso de Autoridade, Tortura, ECA, Desarmamento, Crimes Ambientais, Maria da Penha, Drogas, Organizações Criminosas, CTB) e conhecimentos específicos (SUSP, Estatuto Geral das Guardas, estatutos municipais de São Gonçalo)',
    combos: 'O material traz somente o curso completo'
  }
];

export const TEXTO_FINAL_ONLINE = 'As provas e os dados dos concursos de cada turma estão nas seções acima. O PMERJ, o PCERJ, o PRF Agente Administrativo, o INSS e o GM São Gonçalo têm também turma presencial.';
