export interface TurmaMilitarCiclo {
  nome: string;
  periodo: string;
  encontros: number;
  frequencia?: string;
  foco?: string;
  observacao?: string;
  etapasTexto?: string;
  etapas?: {
    nome: string;
    periodo: string;
    encontros?: string;
    foco?: string;
    destaque?: boolean;
    descricao?: string;
  }[];
  conteudoIntrodutorio?: {
    periodo: string;
    encontros: string;
  };
  aprofundamentoI?: {
    periodo: string;
    encontros: string;
  };
  materias: {
    nome: string;
    destaque?: string;
  }[];
}

export interface TurmaMilitarRecesso {
  titulo: string;
  periodo: string;
  descricao?: string;
}

export interface TurmaMilitarCombo {
  nome: string;
  destaque?: boolean;
  tag?: string;
  descricao?: string;
  itens: string[];
  destaqueAceleradorVest?: boolean;
}

export interface TurmaMilitarTurnoCard {
  turno: string;
  horario: string;
  temposExtras: string;
}

export interface TurmaMilitarSimuladoModelo {
  nome: string;
  dias: string;
  horario: string;
}

export interface TurmaMilitarLinhaDoTempoEtapa {
  data: string;
  titulo: string;
  descricao?: string;
}

export interface TurmaMilitar {
  id: string;
  preparatorioIds: string[]; // Ex: ['colegio-naval', 'epcar'] ou ['afa', 'efomm', 'espcex']
  titulo: string;
  subtitulo: string;
  categoriaTag?: string;
  heroTexto?: string;
  heroAvisoTurnos?: string;
  foco: string;
  periodo: string;
  frequencia?: string;
  turno: string;
  horario: string;
  cargaTotal: string;
  cargaObservacao?: string;
  turnosESelecao?: {
    titulo: string;
    cards: TurmaMilitarTurnoCard[];
    observacaoGeral: string;
  };
  visaoGeral: {
    duracao: string;
    cargaHoraria: {
      total: string;
      distribuicao?: {
        ciclo: string;
        encontros: string;
      }[];
    };
    concursos?: string[];
    frequencia?: string;
    turnoEHorario: string;
    temposExtras: {
      horario: string;
      observacao: string;
      aviso: string;
    };
  };
  ciclo1: TurmaMilitarCiclo;
  recesso1: TurmaMilitarRecesso;
  ciclo2: TurmaMilitarCiclo;
  recessosCiclo2: TurmaMilitarRecesso[];
  aprofundamento2?: {
    titulo: string;
    periodo: string;
    encontros: string;
    frequencia: string;
    objetivo: string;
    abrangencia: string;
  };
  linhaDoTempo?: TurmaMilitarLinhaDoTempoEtapa[];
  materialDidatico: {
    titulo: string;
    entregaPrevista: string;
    observacao: string;
  };
  combos: TurmaMilitarCombo[];
  simulados?: {
    titulo: string;
    modelos?: TurmaMilitarSimuladoModelo[];
    modeloEpcar?: {
      nome: string;
      dia: string;
      horario: string;
    };
    modeloCn?: {
      nome: string;
      dia: string;
      dia1: string;
      dia2: string;
    };
    avisos: string[];
    avisoInscricaoDestaque: string;
  };
  monitoriaRedacao?: {
    titulo: string;
    quantidade: string;
    beneficios: string[];
    periodo: string;
    calendarioAviso: string;
    avisoInconsistencia: string;
  };
  plantaoVespera?: {
    titulo: string;
    descricao: string;
    horario: string;
    formato: string;
    datas: string;
    material: string;
  };
  cta: {
    titulo: string;
    texto: string;
    botaoTexto: string;
  };
}

// Compatibilidade de tipo para componentes militares
export type TurmaDetalhes = TurmaMilitar;

// 1. TURMA CN / EPCAR 2027
export const TURMA_CN_EPCAR_2027: TurmaMilitar = {
  id: 'cn-epcar-2027-tarde',
  preparatorioIds: ['colegio-naval', 'epcar'],
  titulo: 'Pré-Militar CN/EPCAR 2027 — Tarde',
  subtitulo: 'Preparação completa para estudantes que buscam ingresso no Colégio Naval ou na EPCAR.',
  foco: 'Colégio Naval e EPCAR 2027',
  periodo: '13/10/2026 a 12/11/2027',
  turno: 'Tarde',
  horario: '13h20 às 16h35',
  cargaTotal: '196 encontros',
  visaoGeral: {
    duracao: '13/10/2026 a 12/11/2027',
    cargaHoraria: {
      total: '196 encontros',
      distribuicao: [
        { ciclo: '1º Ciclo', encontros: '28 encontros' },
        { ciclo: '2º Ciclo', encontros: '126 encontros' },
        { ciclo: 'Aprofundamento Final', encontros: '42 encontros' }
      ]
    },
    turnoEHorario: 'Tarde, das 13h20 às 16h35.',
    temposExtras: {
      horario: 'Das 16h35 às 18h35.',
      observacao: 'No 2º ciclo, os tempos extras também poderão ocorrer aos sábados.',
      aviso: 'Os tempos extras podem ser oferecidos parcialmente ou não ser oferecidos, a critério da coordenação.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo',
    periodo: '13/10/2026 a 17/12/2026',
    encontros: 28,
    frequencia: '3 a 4 vezes por semana',
    conteudoIntrodutorio: {
      periodo: '13/10/2026 a 06/11/2026',
      encontros: '10 encontros, realizados de 3 a 4 vezes por semana.'
    },
    aprofundamentoI: {
      periodo: '09/11/2026 a 17/12/2026',
      encontros: '18 encontros, realizados de 3 a 4 vezes por semana.'
    },
    materias: [
      { nome: 'Português' },
      { nome: 'Matemática' },
      { nome: 'Inglês' },
      { nome: 'Física', destaque: 'Eventualmente' }
    ]
  },
  recesso1: {
    titulo: 'Recesso 1',
    periodo: '18/12/2026 a 12/01/2027',
    descricao: 'Período de pausa pedagógica de fim de ano antes do início do 2º Ciclo.'
  },
  ciclo2: {
    nome: '2º Ciclo',
    periodo: '13/01/2027 a 23/07/2027',
    encontros: 126,
    frequencia: '5 vezes por semana',
    conteudoIntrodutorio: {
      periodo: '13/01/2027 a 04/02/2027',
      encontros: '17 encontros.'
    },
    aprofundamentoI: {
      periodo: '15/02/2027 a 23/07/2027',
      encontros: '109 encontros.'
    },
    materias: [
      { nome: 'Português' },
      { nome: 'Matemática' },
      { nome: 'Física' },
      { nome: 'História' },
      { nome: 'Geografia' },
      { nome: 'Biologia' },
      { nome: 'Redação' }
    ]
  },
  recessosCiclo2: [
    {
      titulo: '1º Recesso',
      periodo: '05/02/2027 a 11/02/2027'
    },
    {
      titulo: '2º Recesso',
      periodo: '26/07/2027 a 30/07/2027'
    }
  ],
  aprofundamento2: {
    titulo: 'Aprofundamento II',
    periodo: '02/08/2027 a 12/11/2027',
    encontros: '42 encontros',
    frequencia: 'Realizado de 3 a 4 vezes por semana.',
    objetivo: 'Revisão e aprofundamento intensivo dos conteúdos previstos nos editais do Colégio Naval e EPCAR.',
    abrangencia: 'Também poderá contemplar outros concursos de nível e conteúdo semelhantes, como escolas técnicas em geral.'
  },
  materialDidatico: {
    titulo: 'Material Didático',
    entregaPrevista: 'Janeiro de 2027',
    observacao: 'Até a entrega do material didático, os conteúdos serão disponibilizados em folhas impressas, cobradas à parte.'
  },
  combos: [
    {
      nome: 'COMBO MULTI',
      destaque: true,
      tag: 'Mais Completo',
      itens: [
        'Plantão de Aprovação',
        'Simulados',
        'Monitoria de Redação'
      ]
    },
    {
      nome: 'COMBO APROV',
      destaque: false,
      itens: [
        'Simulados'
      ]
    },
    {
      nome: 'SEM COMBO',
      destaque: false,
      itens: [
        'Somente a turma'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Presenciais + Online',
    modeloEpcar: {
      nome: 'Modelo EPCAR',
      dia: 'Aos sábados',
      horario: '08h30 às 13h50'
    },
    modeloCn: {
      nome: 'Modelo CN',
      dia: 'Sábado e domingo',
      dia1: '1º dia: 08h30 às 13h30',
      dia2: '2º dia: 08h30 às 12h30'
    },
    avisos: [
      'Datas ainda serão definidas pela coordenação pedagógica.',
      'O gabarito presencial será disponibilizado nos grupos de WhatsApp da turma.',
      'Os simulados presenciais fazem parte do Combo Multi.'
    ],
    avisoInscricaoDestaque: 'A participação nos simulados presenciais depende da confirmação de presença no momento da inscrição, respeitando o prazo estabelecido pela coordenação.'
  },
  monitoriaRedacao: {
    titulo: 'Monitoria de Redação',
    quantidade: '15 redações avulsas, além da redação realizada em sala de aula.',
    beneficios: [
      'Feedback escrito individualizado',
      'Avaliação criteriosa por especialistas',
      'Prazo de até 7 dias úteis para correção'
    ],
    periodo: '22/02/2027 a 04/06/2027',
    calendarioAviso: 'O calendário de temas, entrega e correção será divulgado pela coordenação.',
    avisoInconsistencia: 'Ano do calendário de temas: confirmar com a coordenação.'
  },
  plantaoVespera: {
    titulo: 'Plantão de Véspera',
    descricao: 'Aulão especial com dicas e macetes para CN/EPCAR.',
    horario: '08h00 às 13h20',
    formato: 'Aulas organizadas em períodos de 50 minutos.',
    datas: 'A definir pela coordenação.',
    material: 'Incluso no módulo.'
  },
  linhaDoTempo: [
    {
      data: '13/10/26',
      titulo: 'Início da turma',
      descricao: 'Abertura das aulas da turma Pré-Militar CN/EPCAR'
    },
    {
      data: '13/10/26 → 17/12/26',
      titulo: '1º Ciclo',
      descricao: 'Conteúdo Introdutório e Aprofundamento I (28 encontros)'
    },
    {
      data: '18/12/26 → 12/01/27',
      titulo: 'Recesso 1',
      descricao: 'Pausa pedagógica de fim de ano'
    },
    {
      data: '13/01/27 → 23/07/27',
      titulo: '2º Ciclo',
      descricao: 'Foco nos concursos Colégio Naval e EPCAR (126 encontros)'
    },
    {
      data: '26/07/27 → 30/07/27',
      titulo: 'Recesso 2',
      descricao: 'Pausa programada antes da reta final'
    },
    {
      data: '02/08/27 → 12/11/27',
      titulo: 'Aprofundamento II',
      descricao: 'Revisão e aprofundamento intensivo final (42 encontros)'
    }
  ],
  cta: {
    titulo: 'Prepare-se para conquistar sua aprovação.',
    texto: 'Tenha uma preparação estruturada para os concursos CN e EPCAR 2027, com acompanhamento, aulas, simulados e recursos complementares.',
    botaoTexto: 'QUERO ME INSCREVER'
  }
};

// 2. TURMA TSM 2027 – PRÉ-MILITAR (AFA / EFOMM / EsPCEx)
export const TURMA_TSM_2027: TurmaMilitar = {
  id: 'tsm-2027-pre-militar',
  preparatorioIds: ['afa', 'efomm', 'espcex'],
  titulo: 'TSM 2027 – Pré-Militar (AFA / EFOMM / EsPCEx)',
  subtitulo: 'Para quem quer ingressar na AFA, na EFOMM ou na EsPCEx.',
  heroTexto: 'Para quem quer ingressar na AFA, na EFOMM ou na EsPCEx.',
  heroAvisoTurnos: 'Turmas de manhã e de tarde, com o mesmo calendário.',
  foco: 'AFA, EFOMM e EsPCEx 2027',
  periodo: '13/10/2026 a 17/09/2027',
  turno: 'Manhã e Tarde',
  horario: 'Manhã: 08h15 às 11h30 | Tarde: 13h20 às 16h35',
  cargaTotal: '231 encontros*',
  cargaObservacao: '*Carga total sujeita à confirmação da coordenação.',
  turnosESelecao: {
    titulo: 'Escolha seu turno',
    cards: [
      {
        turno: 'MANHÃ',
        horario: '08h15 às 11h30',
        temposExtras: '07h45 às 08h15 e 11h30 às 12h30'
      },
      {
        turno: 'TARDE',
        horario: '13h20 às 16h35',
        temposExtras: '16h35 às 18h35'
      }
    ],
    observacaoGeral: 'Tempos extras: No 2º ciclo, também poderão ocorrer aos sábados. Os tempos extras podem ser oferecidos parcialmente ou não ser oferecidos, a critério da coordenação.'
  },
  visaoGeral: {
    duracao: '13/10/2026 a 17/09/2027',
    cargaHoraria: {
      total: '231 encontros*',
      distribuicao: [
        { ciclo: '1º Ciclo', encontros: '28 encontros' },
        { ciclo: '2º Ciclo', encontros: '191 encontros' }
      ]
    },
    concursos: ['AFA', 'EFOMM', 'EsPCEx'],
    frequencia: 'No 2º ciclo, aulas realizadas 5 vezes por semana.',
    turnoEHorario: 'Manhã (08h15 às 11h30) e Tarde (13h20 às 16h35)',
    temposExtras: {
      horario: 'Manhã (07h45 às 08h15 e 11h30 às 12h30) | Tarde (16h35 às 18h35)',
      observacao: 'No 2º ciclo, também poderão ocorrer aos sábados.',
      aviso: 'Os tempos extras podem ser oferecidos parcialmente ou não ser oferecidos, a critério da coordenação.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo',
    periodo: '13/10/2026 a 17/12/2026',
    encontros: 28,
    frequencia: '3 a 4 vezes por semana',
    conteudoIntrodutorio: {
      periodo: '13/10/2026 a 06/11/2026',
      encontros: '10 encontros, realizados de 3 a 4 vezes por semana.'
    },
    aprofundamentoI: {
      periodo: '09/11/2026 a 17/12/2026',
      encontros: '18 encontros, realizados de 3 a 4 vezes por semana.'
    },
    materias: [
      { nome: 'Português' },
      { nome: 'Matemática' },
      { nome: 'Inglês' },
      { nome: 'Física', destaque: 'Eventualmente' }
    ]
  },
  recesso1: {
    titulo: 'Recesso 1',
    periodo: '18/12/2026 a 12/01/2027',
    descricao: 'Período de recesso de fim de ano antes da retomada das atividades.'
  },
  ciclo2: {
    nome: '2º Ciclo',
    periodo: '13/01/2027 a 17/09/2027',
    encontros: 191,
    frequencia: '5 vezes por semana',
    conteudoIntrodutorio: {
      periodo: '13/01/2027 a 04/02/2027',
      encontros: '17 encontros.'
    },
    aprofundamentoI: {
      periodo: '15/02/2027 a 17/09/2027',
      encontros: '138 encontros.'
    },
    materias: [
      { nome: 'Português' },
      { nome: 'Matemática' },
      { nome: 'Física' },
      { nome: 'Química' },
      { nome: 'Inglês' },
      { nome: 'História' },
      { nome: 'Geografia' },
      { nome: 'Literatura' },
      { nome: 'Redação' }
    ]
  },
  recessosCiclo2: [
    {
      titulo: 'Recesso 1',
      periodo: '05/02/2027 a 11/02/2027'
    },
    {
      titulo: 'Recesso 2',
      periodo: '20/09/2027 a 24/09/2027'
    }
  ],
  materialDidatico: {
    titulo: 'Material Didático',
    entregaPrevista: 'Janeiro de 2027',
    observacao: 'Até a entrega do material didático, os conteúdos serão disponibilizados em folhas impressas, cobradas à parte.'
  },
  combos: [
    {
      nome: 'COMBO MULTI',
      destaque: true,
      tag: 'Mais Completo',
      itens: [
        'Plantão de Aprovação',
        'Simulados',
        'Monitoria de Redação'
      ]
    },
    {
      nome: 'COMBO APROV',
      destaque: false,
      itens: [
        'Simulados'
      ]
    },
    {
      nome: 'SEM COMBO',
      destaque: false,
      itens: [
        'Somente a turma'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Presenciais + Online',
    modelos: [
      {
        nome: 'MODELO AFA',
        dias: 'Aos sábados',
        horario: '08h30 às 13h50'
      },
      {
        nome: 'MODELO EFOMM',
        dias: 'Sábado e domingo',
        horario: '08h30 às 12h30 nos dois dias'
      },
      {
        nome: 'MODELO EsPCEx',
        dias: 'Sábado e domingo',
        horario: '08h30 às 13h00 nos dois dias'
      }
    ],
    avisos: [
      'Datas ainda serão definidas pela coordenação pedagógica.',
      'O gabarito presencial será disponibilizado nos grupos de WhatsApp da turma.',
      'Os simulados presenciais fazem parte do Combo Multi.'
    ],
    avisoInscricaoDestaque: 'A participação nos simulados presenciais depende da confirmação de presença no momento da inscrição, dentro do prazo estabelecido pela coordenação.'
  },
  monitoriaRedacao: {
    titulo: 'Monitoria de Redação',
    quantidade: '15 redações avulsas, além da redação realizada em sala de aula.',
    beneficios: [
      'Feedback escrito',
      'Avaliação por especialistas',
      'Prazo de até 7 dias úteis para correção'
    ],
    periodo: '15/03/2027 a 27/08/2027',
    calendarioAviso: 'O calendário de temas, entrega e correção será divulgado pela coordenação.',
    avisoInconsistencia: 'Ano do calendário de temas: confirmar com a coordenação.'
  },
  plantaoVespera: {
    titulo: 'Plantão de Véspera',
    descricao: 'Aulão especial com dicas e macetes para AFA e EsPCEx.',
    horario: '08h00 às 13h20',
    formato: 'Aulas organizadas em períodos de 50 minutos.',
    datas: 'A definir',
    material: 'Incluso'
  },
  linhaDoTempo: [
    {
      data: '13/10/26',
      titulo: 'Início da turma',
      descricao: 'Abertura das aulas do TSM 2027'
    },
    {
      data: '13/10/26 → 17/12/26',
      titulo: '1º Ciclo',
      descricao: 'Conteúdo Introdutório e Aprofundamento I (28 encontros)'
    },
    {
      data: '18/12/26 → 12/01/27',
      titulo: 'Recesso',
      descricao: 'Pausa pedagógica de fim de ano'
    },
    {
      data: '13/01/27 → 17/09/27',
      titulo: '2º Ciclo',
      descricao: 'Foco total AFA, EFOMM e EsPCEx (191 encontros)'
    },
    {
      data: '20/09/27 → 24/09/27',
      titulo: 'Recesso',
      descricao: 'Recesso programado'
    }
  ],
  cta: {
    titulo: 'Prepare-se para AFA, EFOMM e EsPCEx.',
    texto: 'Uma preparação estruturada para quem busca uma vaga nas principais escolas e carreiras militares.',
    botaoTexto: 'QUERO ME INSCREVER'
  }
};

// 3. TURMA TMOS 2027 – TURMA MILITAR OPERAÇÃO SARGENTO (EEAR / ESA)
export const TURMA_TMOS_2027: TurmaMilitar = {
  id: 'tmos-2027-operacao-sargento',
  preparatorioIds: ['eear', 'esa'],
  titulo: 'TMOS 2027 – Turma Militar Operação Sargento',
  subtitulo: 'Preparação para os concursos da EEAR e da ESA.',
  heroTexto: 'Preparação para os concursos da EEAR e da ESA.',
  heroAvisoTurnos: 'Turmas de manhã e de tarde, com o mesmo calendário.',
  foco: 'EEAR e ESA 2027',
  periodo: '13/10/2026 a 19/11/2027',
  turno: 'Manhã e Tarde',
  horario: 'Manhã: 08h15 às 11h30 | Tarde: 13h20 às 16h35',
  cargaTotal: '222 encontros',
  turnosESelecao: {
    titulo: 'Escolha seu turno',
    cards: [
      {
        turno: 'MANHÃ',
        horario: '08h15 às 11h30',
        temposExtras: '07h45 às 08h15 e 11h30 às 12h30'
      },
      {
        turno: 'TARDE',
        horario: '13h20 às 16h35',
        temposExtras: '16h35 às 18h35'
      }
    ],
    observacaoGeral: 'No 2º ciclo, os tempos extras também poderão ocorrer aos sábados. Os tempos extras podem ser oferecidos parcialmente ou não ser oferecidos, a critério da coordenação.'
  },
  visaoGeral: {
    duracao: '13/10/2026 a 19/11/2027',
    cargaHoraria: {
      total: '222 encontros',
      distribuicao: [
        { ciclo: '1º Ciclo', encontros: '28 encontros' },
        { ciclo: '2º Ciclo', encontros: '194 encontros' }
      ]
    },
    concursos: ['EEAR', 'ESA'],
    frequencia: 'No 2º ciclo: 5 vezes por semana',
    turnoEHorario: 'Manhã (08h15 às 11h30) e Tarde (13h20 às 16h35)',
    temposExtras: {
      horario: 'Manhã (07h45 às 08h15 e 11h30 às 12h30) | Tarde (16h35 às 18h35)',
      observacao: 'No 2º ciclo, também poderão ocorrer aos sábados.',
      aviso: 'Os tempos extras podem ser oferecidos parcialmente ou não ser oferecidos, a critério da coordenação.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo',
    periodo: '13/10/2026 a 17/12/2026',
    encontros: 28,
    frequencia: '3 a 4 vezes por semana',
    conteudoIntrodutorio: {
      periodo: '13/10/2026 a 06/11/2026',
      encontros: '10 encontros. Realizados de 3 a 4 vezes por semana.'
    },
    aprofundamentoI: {
      periodo: '09/11/2026 a 17/12/2026',
      encontros: '18 encontros. Realizados de 3 a 4 vezes por semana.'
    },
    materias: [
      { nome: 'Português' },
      { nome: 'Matemática' },
      { nome: 'Inglês' },
      { nome: 'Física', destaque: 'Eventualmente' }
    ]
  },
  recesso1: {
    titulo: 'Recesso',
    periodo: '18/12/2026 a 12/01/2027',
    descricao: 'Pausa pedagógica de fim de ano.'
  },
  ciclo2: {
    nome: '2º Ciclo',
    periodo: '13/01/2027 a 19/11/2027',
    encontros: 194,
    frequencia: '5 vezes por semana',
    etapasTexto: 'O ciclo será dividido em três etapas:',
    etapas: [
      {
        nome: 'Conteúdo Introdutório',
        periodo: '13/01/2027 a 04/02/2027',
        encontros: '17 encontros',
        descricao: 'Base inicial e nivelamento das disciplinas.'
      },
      {
        nome: 'Aprofundamento I',
        periodo: '15/02/2027 a 23/07/2027',
        encontros: '108 encontros',
        foco: 'EEAR 2027 e ESA 2027',
        descricao: 'Preparação voltada aos concursos da EEAR 2027 e ESA 2027.'
      },
      {
        nome: 'Aprofundamento II',
        periodo: '09/08/2027 a 19/11/2027',
        foco: 'Concurso EEAR — novembro de 2027',
        destaque: true,
        descricao: 'Fase final de preparação específica voltada ao concurso EEAR.'
      }
    ],
    conteudoIntrodutorio: {
      periodo: '13/01/2027 a 04/02/2027',
      encontros: '17 encontros.'
    },
    aprofundamentoI: {
      periodo: '15/02/2027 a 23/07/2027',
      encontros: '108 encontros (Preparação voltada aos concursos EEAR 2027 e ESA 2027).'
    },
    materias: [
      { nome: 'Português' },
      { nome: 'Redação' },
      { nome: 'Matemática' },
      { nome: 'Física' },
      { nome: 'Inglês' },
      { nome: 'História' },
      { nome: 'Geografia' },
      { nome: 'Literatura' }
    ]
  },
  recessosCiclo2: [
    {
      titulo: 'Recesso 1',
      periodo: '05/02/2027 a 11/02/2027'
    },
    {
      titulo: 'Recesso 2',
      periodo: '26/07/2027 a 06/08/2027'
    }
  ],
  materialDidatico: {
    titulo: 'Material Didático',
    entregaPrevista: 'Janeiro de 2027',
    observacao: 'Até a entrega do material didático, os conteúdos serão disponibilizados em folhas impressas, cobradas à parte.'
  },
  combos: [
    {
      nome: 'COMBO MULTI',
      destaque: true,
      tag: 'Mais Completo',
      itens: [
        'Plantão de Aprovação',
        'Simulados',
        'Monitoria de Redação'
      ]
    },
    {
      nome: 'COMBO APROV',
      destaque: false,
      itens: [
        'Simulados'
      ]
    },
    {
      nome: 'SEM COMBO',
      destaque: false,
      itens: [
        'Somente a turma'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Presenciais + Online',
    modelos: [
      {
        nome: 'MODELO ESA',
        dias: 'Aos sábados',
        horario: '08h30 às 12h30'
      },
      {
        nome: 'MODELO EEAR',
        dias: 'Aos sábados',
        horario: '08h30 às 12h50'
      }
    ],
    avisos: [
      'Datas ainda serão definidas.',
      'O gabarito presencial será disponibilizado nos grupos de WhatsApp da turma.',
      'Os simulados presenciais fazem parte do Combo Multi.'
    ],
    avisoInscricaoDestaque: 'O aluno somente participará do simulado presencial se confirmar presença no momento da inscrição, dentro do prazo determinado pela coordenação.'
  },
  monitoriaRedacao: {
    titulo: 'Monitoria de Redação',
    quantidade: '15 redações avulsas, além da redação realizada em sala de aula.',
    beneficios: [
      'Feedback escrito',
      'Avaliação dos especialistas',
      'Prazo de até 7 dias úteis para correção'
    ],
    periodo: '15/03/2027 a 09/07/2027',
    calendarioAviso: 'O calendário de temas, entrega e correção será divulgado pela coordenação.',
    avisoInconsistencia: 'Ano do calendário de temas: confirmar com a coordenação.'
  },
  plantaoVespera: {
    titulo: 'Plantão de Véspera',
    descricao: 'Aulão especial com dicas e macetes para EEAR e ESA.',
    horario: '08h00 às 13h20',
    formato: 'Aulas organizadas em períodos de 50 minutos.',
    datas: 'A definir',
    material: 'Incluso'
  },
  linhaDoTempo: [
    {
      data: '13/10/2026',
      titulo: 'Início da turma',
      descricao: 'Abertura das aulas da turma TMOS 2027'
    },
    {
      data: '13/10/2026 → 17/12/2026',
      titulo: '1º Ciclo',
      descricao: 'Conteúdo Introdutório e Aprofundamento I (28 encontros)'
    },
    {
      data: '18/12/2026 → 12/01/2027',
      titulo: 'Recesso',
      descricao: 'Pausa pedagógica de fim de ano'
    },
    {
      data: '13/01/2027 → 04/02/2027',
      titulo: 'Conteúdo Introdutório — 2º Ciclo',
      descricao: 'Nivelamento e introdução às disciplinas avançadas (17 encontros)'
    },
    {
      data: '05/02/2027 → 11/02/2027',
      titulo: 'Recesso',
      descricao: '1º Recesso do 2º Ciclo'
    },
    {
      data: '15/02/2027 → 23/07/2027',
      titulo: 'Aprofundamento I',
      descricao: 'Preparação voltada aos concursos EEAR 2027 e ESA 2027 (108 encontros)'
    },
    {
      data: '26/07/2027 → 06/08/2027',
      titulo: 'Recesso',
      descricao: '2º Recesso do 2º Ciclo'
    },
    {
      data: '09/08/2027 → 19/11/2027',
      titulo: 'Aprofundamento II',
      descricao: 'Fase final de preparação específica voltada ao concurso EEAR (novembro/2027)'
    }
  ],
  cta: {
    titulo: 'Prepare-se para EEAR e ESA.',
    texto: 'Uma preparação estruturada para quem busca uma carreira militar e quer chegar mais preparado aos concursos.',
    botaoTexto: 'QUERO ME INSCREVER'
  }
};

// Array Oficial de Turmas Militares
export const TURMAS_MILITARES: TurmaMilitar[] = [
  TURMA_CN_EPCAR_2027,
  TURMA_TSM_2027,
  TURMA_TMOS_2027
];

// Helper para obter turma militar vinculada ao preparatório
export function getTurmaMilitarForPreparatory(preparatoryId: string): TurmaMilitar | undefined {
  return TURMAS_MILITARES.find(turma => turma.preparatorioIds.includes(preparatoryId));
}

// Alias de retrocompatibilidade
export const getTurmaForPreparatory = getTurmaMilitarForPreparatory;