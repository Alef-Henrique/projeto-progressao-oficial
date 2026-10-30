export interface TurmaCiclo {
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

export interface TurmaRecesso {
  titulo: string;
  periodo: string;
  descricao?: string;
}

export interface TurmaCombo {
  nome: string;
  destaque?: boolean;
  tag?: string;
  descricao?: string;
  itens: string[];
  destaqueAceleradorVest?: {
    titulo: string;
    texto: string;
    botaoTexto: string;
  };
}

export interface TurmaTurnoCard {
  turno: string;
  horario: string;
  temposExtras: string;
}

export interface TurmaSimuladoModelo {
  nome: string;
  dias: string;
  horario: string;
}

export interface TurmaLinhaDoTempoEtapa {
  data: string;
  titulo: string;
  descricao?: string;
}

export interface TurmaDetalhes {
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
  conhecimentosBasicos?: string[];
  conhecimentosEspecificos?: string[];
  turnosESelecao?: {
    titulo: string;
    cards: TurmaTurnoCard[];
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
  ciclo1: TurmaCiclo;
  recesso1: TurmaRecesso;
  ciclo2: TurmaCiclo;
  recessosCiclo2: TurmaRecesso[];
  aprofundamento2?: {
    titulo: string;
    periodo: string;
    encontros: string;
    frequencia: string;
    objetivo: string;
    abrangencia: string;
  };
  linhaDoTempo?: TurmaLinhaDoTempoEtapa[];
  materialDidatico: {
    titulo: string;
    entregaPrevista: string;
    observacao: string;
  };
  combos: TurmaCombo[];
  simulados?: {
    titulo: string;
    modelos?: TurmaSimuladoModelo[];
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

export const TURMAS_MILITARES: TurmaDetalhes[] = [
  // 1. TURMA CN / EPCAR 2027
  {
    id: 'cn-epcar-2027-tarde',
    preparatorioIds: ['colegio-naval', 'epcar'],
    titulo: 'Pré-Militar CN/EPCAR 2027 — Tarde',
    subtitulo: 'Preparação completa para estudantes que buscam ingresso no Colégio Naval ou na EPCAR.',
    foco: 'Colégio Naval e EPCAR 2027',
    periodo: '09/11/2026 a 12/11/2027',
    turno: 'Tarde',
    horario: '13h20 às 16h35',
    cargaTotal: '196 encontros',
    visaoGeral: {
      duracao: '09/11/2026 a 12/11/2027',
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
      periodo: '09/11/2026 a 17/12/2026',
      encontros: 28,
      frequencia: '3 a 4 vezes por semana',
      conteudoIntrodutorio: {
        periodo: '13/10/2026 a 06/11/2026',
        encontros: '10 encontros, realizados de 3 a 4 vezes por semana.'
      },
      aprofundamentoI: {
        periodo: '09/11/2026',
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
        data: '09/11/26',
        titulo: 'Início da turma',
        descricao: 'Abertura das aulas da turma Pré-Militar CN/EPCAR'
      },
      {
        data: '09/11/26 → 17/12/26',
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
  },

  // 2. TURMA TSM 2027 – PRÉ-MILITAR (AFA / EFOMM / EsPCEx)
  {
    id: 'tsm-2027-pre-militar',
    preparatorioIds: ['afa', 'efomm', 'espcex'],
    titulo: 'TSM 2027 – Pré-Militar (AFA / EFOMM / EsPCEx)',
    subtitulo: 'Para quem quer ingressar na AFA, na EFOMM ou na EsPCEx.',
    heroTexto: 'Para quem quer ingressar na AFA, na EFOMM ou na EsPCEx.',
    heroAvisoTurnos: 'Turmas de manhã e de tarde, com o mesmo calendário.',
    foco: 'AFA, EFOMM e EsPCEx 2027',
    periodo: '09/11/2026 a 17/09/2027',
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
      duracao: '09/11/2026 a 17/09/2027',
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
      periodo: '09/11/2026 a 17/12/2026',
      encontros: 28,
      frequencia: '3 a 4 vezes por semana',
      conteudoIntrodutorio: {
        periodo: '09/11/2026',
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
  },

  // 3. TURMA TMOS 2027 – TURMA MILITAR OPERAÇÃO SARGENTO (EEAR / ESA)
  {
    id: 'tmos-2027-operacao-sargento',
    preparatorioIds: ['eear', 'esa'],
    titulo: 'TMOS 2027 – Turma Militar Operação Sargento',
    subtitulo: 'Preparação para os concursos da EEAR e da ESA.',
    heroTexto: 'Preparação para os concursos da EEAR e da ESA.',
    heroAvisoTurnos: 'Turmas de manhã e de tarde, com o mesmo calendário.',
    foco: 'EEAR e ESA 2027',
    periodo: '09/11/2026 a 19/11/2027',
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
      duracao: '09/11/2026 a 19/11/2027',
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
      periodo: '09/11/2026 a 17/12/2026',
      encontros: 28,
      frequencia: '3 a 4 vezes por semana',
      conteudoIntrodutorio: {
        periodo: '09/11/2026',
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
  }
];

// Utilitário para buscar turma vinculada a um preparatório militar
export function getTurmaForPreparatory(preparatoryId: string): TurmaDetalhes | undefined {
  return TURMAS_MILITARES.find(turma => turma.preparatorioIds.includes(preparatoryId));
}

// 4. TURMA PRÉ-VESTIBULAR 2027 — PRÉ VEST
export const TURMA_PRE_VESTIBULAR_2027: TurmaDetalhes = {
  id: 'pre-vestibular-2027',
  preparatorioIds: ['enem', 'uerj', 'pre-vestibular'],
  titulo: 'Pré-Vestibular 2027',
  subtitulo: 'Pré Vest',
  heroTexto: 'Preparação para os vestibulares da UERJ e para o ENEM 2027.',
  heroAvisoTurnos: 'Turmas de manhã e de tarde, com o mesmo calendário.',
  foco: 'UERJ e ENEM 2027',
  periodo: '13/10/2026 a 26/11/2027',
  turno: 'Manhã e Tarde',
  horario: '08h15 às 11h30 / 13h20 às 16h35',
  cargaTotal: '229 encontros',
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
    observacaoGeral: 'Manhã e tarde seguem o mesmo calendário. No 2º ciclo, os tempos extras também poderão ocorrer aos sábados. Os tempos extras podem ser oferecidos parcialmente ou não ser oferecidos, a critério da coordenação.'
  },
  visaoGeral: {
    duracao: '13/10/2026 a 26/11/2027',
    cargaHoraria: {
      total: '229 encontros',
      distribuicao: [
        { ciclo: '1º ciclo', encontros: '28 encontros no 1º ciclo' },
        { ciclo: '2º ciclo', encontros: '201 encontros no 2º ciclo' }
      ]
    },
    concursos: ['UERJ 2027', 'ENEM 2027'],
    frequencia: 'No 2º ciclo: 5 vezes por semana',
    turnoEHorario: 'Manhã (08h15 às 11h30) e Tarde (13h20 às 16h35)',
    temposExtras: {
      horario: 'Manhã: 07h45 às 08h15 e 11h30 às 12h30 | Tarde: 16h35 às 18h35',
      observacao: 'No 2º ciclo, os tempos extras também poderão ocorrer aos sábados.',
      aviso: 'Os tempos extras podem ser oferecidos parcialmente ou não ser oferecidos, a critério da coordenação.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo',
    periodo: '13/10/2026 a 17/12/2026',
    encontros: 28,
    observacao: 'Na turma da manhã, o 1º ciclo é chamado de: Fase EMAER. (Essa nomenclatura não se aplica à turma da tarde).',
    conteudoIntrodutorio: {
      periodo: '13/10/2026 a 06/11/2026',
      encontros: '10 encontros (de 3 a 4 vezes por semana)'
    },
    aprofundamentoI: {
      periodo: '09/11/2026 a 17/12/2026',
      encontros: '18 encontros (de 3 a 4 vezes por semana)'
    },
    materias: [
      { nome: 'Português' },
      { nome: 'Matemática' },
      { nome: 'Inglês' },
      { nome: 'Física', destaque: 'eventualmente' }
    ]
  },
  recesso1: {
    titulo: 'Recesso 1',
    periodo: '18/12/2026 a 12/01/2027',
    descricao: 'Pausa pedagógica programada de fim de ano.'
  },
  ciclo2: {
    nome: '2º Ciclo',
    periodo: '13/01/2027 a 27/11/2027',
    encontros: 201,
    frequencia: 'Aulas realizadas 5 vezes por semana',
    foco: 'UERJ 2027 e ENEM 2027',
    etapasTexto: 'Sequência de Etapas do 2º Ciclo:',
    etapas: [
      {
        nome: 'Conteúdo Introdutório',
        periodo: '13/01/2027 a 04/02/2027',
        encontros: '17 encontros'
      },
      {
        nome: 'Aprofundamento I',
        periodo: '15/02/2027 a 05/03/2027',
        encontros: '15 encontros'
      },
      {
        nome: 'Desenvolvimento e Aprofundamento',
        periodo: '08/03/2027 a 09/04/2027',
        encontros: '24 encontros'
      },
      {
        nome: 'Desenvolvimento e Aprofundamento II',
        periodo: '12/04/2027 a 07/05/2027',
        encontros: '17 encontros'
      },
      {
        nome: 'Desenvolvimento e Aprofundamento III',
        periodo: '10/05/2027 a 04/06/2027',
        encontros: '18 encontros'
      },
      {
        nome: 'Desenvolvimento e Aprofundamento IV',
        periodo: '07/06/2027 a 27/11/2027',
        encontros: '110 encontros',
        destaque: true,
        descricao: 'Etapa mais longa da preparação para os vestibulares.'
      }
    ],
    materias: [
      { nome: 'Português' },
      { nome: 'Matemática' },
      { nome: 'Física' },
      { nome: 'Química' },
      { nome: 'História' },
      { nome: 'Geografia' },
      { nome: 'Biologia' },
      { nome: 'Literatura' },
      { nome: 'Redação' },
      { nome: 'Sociologia' },
      { nome: 'Filosofia' }
    ]
  },
  recessosCiclo2: [
    {
      titulo: 'Recesso 2',
      periodo: '05/02/2027 a 11/02/2027',
      descricao: 'Recesso pedagógico no 2º Ciclo.'
    }
  ],
  materialDidatico: {
    titulo: 'Material Didático',
    entregaPrevista: 'Janeiro de 2027',
    observacao: 'Até a entrega do material didático, os conteúdos serão disponibilizados em folhas impressas, cobradas à parte.'
  },
  combos: [
    {
      nome: 'Combo Multi',
      destaque: true,
      tag: 'Mais Completo',
      itens: [
        'Inclui o Pacote Acelerador Vest',
        'ProgNitro',
        'ProgFit',
        'ProgProvas',
        'ProgRed',
        'Acelera ENEM',
        'ProgRed Turbinado'
      ],
      destaqueAceleradorVest: {
        titulo: 'Quer potencializar sua preparação?',
        texto: 'O Combo Multi reúne os principais recursos do Acelerador Vest para complementar sua preparação.',
        botaoTexto: 'Conhecer o Acelerador Vest'
      }
    },
    {
      nome: 'Combo Aprov',
      destaque: false,
      itens: [
        'Simulados Acelera ENEM',
        'Modelo: ENEM'
      ]
    },
    {
      nome: 'Sem combo',
      destaque: false,
      descricao: 'Somente a turma',
      itens: [
        'Somente a turma'
      ]
    }
  ],
  linhaDoTempo: [
    {
      data: '13/10/2026',
      titulo: 'Início da turma',
      descricao: 'Início das aulas do Pré-Vestibular 2027'
    },
    {
      data: '13/10/2026 → 17/12/2026',
      titulo: '1º Ciclo',
      descricao: '28 encontros (13/10/2026 a 17/12/2026)'
    },
    {
      data: '18/12/2026 → 12/01/2027',
      titulo: 'Recesso 1',
      descricao: '18/12/2026 a 12/01/2027'
    },
    {
      data: '13/01/2027 → 04/02/2027',
      titulo: 'Conteúdo Introdutório — 2º Ciclo',
      descricao: '17 encontros'
    },
    {
      data: '05/02/2027 → 11/02/2027',
      titulo: 'Recesso 2',
      descricao: '05/02/2027 a 11/02/2027'
    },
    {
      data: '15/02/2027 → 05/03/2027',
      titulo: 'Aprofundamento I',
      descricao: '15 encontros'
    },
    {
      data: '08/03/2027 → 09/04/2027',
      titulo: 'Desenvolvimento e Aprofundamento',
      descricao: '24 encontros'
    },
    {
      data: '12/04/2027 → 07/05/2027',
      titulo: 'Desenvolvimento e Aprofundamento II',
      descricao: '17 encontros'
    },
    {
      data: '10/05/2027 → 04/06/2027',
      titulo: 'Desenvolvimento e Aprofundamento III',
      descricao: '18 encontros'
    },
    {
      data: '07/06/2027 → 27/11/2027',
      titulo: 'Desenvolvimento e Aprofundamento IV',
      descricao: '110 encontros (etapa mais longa da preparação)'
    }
  ],
  cta: {
    titulo: 'Prepare-se para o ENEM e a UERJ 2027.',
    texto: 'Uma preparação completa para quem busca uma vaga na universidade e quer chegar mais preparado aos principais vestibulares.',
    botaoTexto: 'QUERO ME INSCREVER'
  }
};

// Array de turmas Pré-Vestibular
export const TURMAS_VESTIBULAR: TurmaDetalhes[] = [
  TURMA_PRE_VESTIBULAR_2027
];

// ====================================================================
// 5. TURMAS PARA CONCURSOS PÚBLICOS
// ====================================================================

// 5.1 TURMA PMERJ — SOLDADO DA POLÍCIA MILITAR DO RJ
export const TURMA_PMERJ: TurmaDetalhes = {
  id: 'turma-pmerj-2026',
  preparatorioIds: ['pmerj'],
  titulo: 'Turma PMERJ — Soldado da Polícia Militar',
  subtitulo: 'Soldado Policial Militar do Estado do Rio de Janeiro (Banca FGV)',
  heroTexto: 'Preparação presencial de alto rendimento para o concurso de Soldado da Polícia Militar do RJ, com foco total no padrão da banca FGV.',
  heroAvisoTurnos: 'Turmas confirmadas nos turnos Noite (durante a semana) e Sábado Integral.',
  foco: 'PMERJ — Soldado Policial Militar',
  periodo: '10/02/2026 a 18/12/2026',
  turno: 'Noite e Sábado Integral',
  horario: '18h30 às 21h45 (Noite) / 08h30 às 16h30 (Sábado)',
  cargaTotal: '180 encontros',
  turnosESelecao: {
    titulo: 'Escolha o melhor formato para a sua rotina',
    cards: [
      {
        turno: 'NOITE',
        horario: '18h30 às 21h45 (segunda a quinta)',
        temposExtras: 'Plantões às sextas e simulados ranqueados aos domingos'
      },
      {
        turno: 'SÁBADO INTEGRAL',
        horario: '08h30 às 16h30 (manhã e tarde)',
        temposExtras: 'Acesso total à plataforma digital e monitorias semanais'
      }
    ],
    observacaoGeral: 'Ambos os turnos cumprem 100% da grade curricular exigida pelo edital de Soldado da PMERJ.'
  },
  visaoGeral: {
    duracao: '10/02/2026 a 18/12/2026',
    cargaHoraria: {
      total: '180 encontros',
      distribuicao: [
        { ciclo: '1º Ciclo (Base Teórica & Disciplinas Jurídicas)', encontros: '70 encontros' },
        { ciclo: '2º Ciclo (Treinamento por Bancas & Resolução FGV)', encontros: '80 encontros' },
        { ciclo: 'Aprofundamento, Reta Final & TAF', encontros: '30 encontros' }
      ]
    },
    concursos: ['PMERJ — Soldado Policial Militar'],
    frequencia: 'Noite: 4 noites por semana | Sábado: 1 encontro integral semanal',
    turnoEHorario: 'Noite (18h30 às 21h45) ou Sábado (08h30 às 16h30)',
    temposExtras: {
      horario: 'Sextas-feiras: 18h30 às 20h30 | Domingos de Simulado: 08h30 às 13h00',
      observacao: 'Plantões de dúvidas jurídicas, oficina de redação discursiva e simulados no formato oficial.',
      aviso: 'Os tempos extras e simulados são fortemente recomendados pela coordenação pedagógica.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo — Fundamentos Teóricos e Estrutura da PMERJ',
    periodo: '10/02/2026 a 19/06/2026',
    encontros: 70,
    frequencia: '3 a 4 encontros semanais',
    materias: [
      { nome: 'Língua Portuguesa e Interpretação de Textos' },
      { nome: 'Matemática Básica e Raciocínio Lógico' },
      { nome: 'Noções de Direitos Humanos' },
      { nome: 'Direito Administrativo e Princípios Constitucionais' },
      { nome: 'Direito Constitucional Aplicado à Segurança Pública' },
      { nome: 'Direito Penal e Direito Processual Penal Militar/Comum' },
      { nome: 'Legislação Específica da PMERJ e Estatuto dos Militares' }
    ]
  },
  recesso1: {
    titulo: 'Recesso Pedagógico de Julho',
    periodo: '20/06/2026 a 05/07/2026',
    descricao: 'Pausa programada para consolidação dos conteúdos antes do 2º ciclo.'
  },
  ciclo2: {
    nome: '2º Ciclo — Treinamento Intensivo FGV & Redação Discursiva',
    periodo: '06/07/2026 a 18/12/2026',
    encontros: 80,
    frequencia: '4 encontros por semana',
    materias: [
      { nome: 'Bateria de Questões da Fundação Getulio Vargas (FGV)' },
      { nome: 'Oficina de Redação Discursiva com Correção Individual' },
      { nome: 'Legislação de Trânsito e Crimes Militares' },
      { nome: 'Simulações Reais de Prova com Tempo Cronometrado' },
      { nome: 'Orientações Preparatórias para o TAF (Aptidão Física)' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Coleção Preparatória PMERJ Soldado Progressão',
    entregaPrevista: 'Módulos entregues no primeiro dia de aula com atualizações digitais',
    observacao: 'Material autoral e atualizado conforme as diretrizes do edital da PMERJ (FGV), com teoria esquematizada e mais de 2.000 questões gabaritadas.'
  },
  combos: [
    {
      nome: 'Combo PMERJ Presencial + Acesso Total Digital',
      destaque: true,
      tag: 'MAIS PROCURADO',
      itens: [
        'Aulas presenciais na unidade Duque de Caxias com professores especialistas',
        'Acesso à plataforma online com videoaulas de reforço e revisão',
        'Banco de questões policiais resolvidas em vídeo',
        'Oficina de redação discursiva com correções individuais personalizadas'
      ]
    },
    {
      nome: 'Módulo TAF & Perfil Psicológico Militar',
      destaque: false,
      tag: 'PREPARAÇÃO INTEGRAL',
      itens: [
        'Orientações técnicas de educadores físicos para corrida, flexão e abdominal',
        'Cronograma de evolução do condicionamento físico para o TAF da PMERJ',
        'Palestra preparatória sobre a avaliação psicológica e perfil da corporação'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Ranqueados Oficiais Padrão PMERJ (FGV)',
    avisos: [
      'Simulados realizados aos domingos com caderno impresso no padrão oficial da FGV',
      'Folha de respostas com leitura óptica e gabarito preliminar liberado no mesmo dia',
      'Relatório de diagnóstico de erros para direcionamento estratégico dos estudos'
    ],
    avisoInscricaoDestaque: 'Todos os simulados oficiais estão incluídos para alunos matriculados na turma.'
  },
  cta: {
    titulo: 'Conquiste a sua farda de Soldado na Polícia Militar do RJ.',
    texto: 'O Curso Progressão é referência histórica na aprovação de novos policiais no Rio de Janeiro. Vagas presenciais limitadas.',
    botaoTexto: 'GARANTIR MINHA VAGA NA TURMA PMERJ'
  }
};

// 5.2 TURMA PCERJ — POLÍCIA CIVIL DO ESTADO DO RIO DE JANEIRO
export const TURMA_PCERJ: TurmaDetalhes = {
  id: 'turma-pcerj-2026',
  preparatorioIds: ['pcerj'],
  titulo: 'Turma PCERJ — Polícia Civil do RJ',
  subtitulo: 'Inspetor de Polícia, Investigador e Carreiras Policiais Civis',
  heroTexto: 'Preparação jurídica e operacional aprofundada para os concursos da Polícia Civil do Estado do Rio de Janeiro, com foco rigoroso em investigação criminal e direito aplicado.',
  heroAvisoTurnos: 'Turmas nos turnos Noite (durante a semana) e Sábado Integral.',
  foco: 'PCERJ — Inspetor de Polícia e Investigador',
  periodo: '10/02/2026 a 18/12/2026',
  turno: 'Noite e Sábado Integral',
  horario: '18h30 às 21h45 (Noite) / 08h30 às 16h30 (Sábado)',
  cargaTotal: '180 encontros',
  turnosESelecao: {
    titulo: 'Escolha seu formato de preparação',
    cards: [
      {
        turno: 'NOITE',
        horario: '18h30 às 21h45 (segunda a quinta)',
        temposExtras: 'Plantões de peças e direito penal às sextas-feiras'
      },
      {
        turno: 'SÁBADO INTEGRAL',
        horario: '08h30 às 16h30 (manhã e tarde)',
        temposExtras: 'Acesso total à plataforma digital e monitorias temáticas'
      }
    ],
    observacaoGeral: 'Conteúdo pedagógico direcionado para os cargos de nível superior da PCERJ (Inspetor de Polícia) e nível médio/superior (Investigador).'
  },
  visaoGeral: {
    duracao: '10/02/2026 a 18/12/2026',
    cargaHoraria: {
      total: '180 encontros',
      distribuicao: [
        { ciclo: '1º Ciclo (Doutrina Jurídica & Matérias Básicas)', encontros: '75 encontros' },
        { ciclo: '2º Ciclo (Legislação Extravagante & Resolução FGV)', encontros: '75 encontros' },
        { ciclo: 'Reta Final & Prática Policial Investigativa)', encontros: '30 encontros' }
      ]
    },
    concursos: ['PCERJ — Inspetor de Polícia', 'PCERJ — Investigador Policial', 'PCERJ — Perito e Delegado (Módulos Jurídicos)'],
    frequencia: 'Noite: 4 noites por semana | Sábado: 1 encontro integral semanal',
    turnoEHorario: 'Noite (18h30 às 21h45) ou Sábado (08h30 às 16h30)',
    temposExtras: {
      horario: 'Sextas-feiras: 18h30 às 20h30 | Domingos de Simulado: 08h30 às 13h00',
      observacao: 'Plantões de resolução de casos concretos, inquérito policial e leis especiais penais.',
      aviso: 'Simulados ranqueados com espelho detalhado de correção.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo — Doutrina Jurídica e Investigação Criminal',
    periodo: '10/02/2026 a 19/06/2026',
    encontros: 75,
    frequencia: '3 a 4 encontros semanais',
    materias: [
      { nome: 'Língua Portuguesa, Interpretação e Redação Oficial' },
      { nome: 'Direito Penal (Parte Geral e Parte Especial)' },
      { nome: 'Direito Processual Penal e Procedimentos Policiais' },
      { nome: 'Direito Constitucional e Direitos Fundamentais' },
      { nome: 'Direito Administrativo e Regime dos Servidores Civis do RJ' },
      { nome: 'Legislação Específica da PCERJ e Estatuto da Polícia Civil' }
    ]
  },
  recesso1: {
    titulo: 'Recesso Pedagógico de Julho',
    periodo: '20/06/2026 a 05/07/2026',
    descricao: 'Pausa programada para consolidação dos conteúdos antes do 2º ciclo.'
  },
  ciclo2: {
    nome: '2º Ciclo — Legislação Extravagante, Jurisprudência & Bancas',
    periodo: '06/07/2026 a 18/12/2026',
    encontros: 75,
    frequencia: '4 encontros por semana',
    materias: [
      { nome: 'Leis Penais Extravagantes (Drogas, Armas, Organizações Criminosas, Hediondos)' },
      { nome: 'Resolução Intensiva de Provas Anteriores da FGV e Bancas de Polícia Civil' },
      { nome: 'Oficina de Redação Discursiva e Peças Investigativas' },
      { nome: 'Noções Básicas de Criminalística e Medicina Legal' },
      { nome: 'Treinamento Prático para o TAF da Polícia Civil' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Coleção Preparatória PCERJ Progressão',
    entregaPrevista: 'Entregue na aula inaugural com material digital complementar',
    observacao: 'Elaborado por delegados, defensores e professores especialistas em concursos policiais civis, com doutrina resumida e jurisprudência dos tribunais superiores.'
  },
  combos: [
    {
      nome: 'Combo PCERJ Presencial + Digital Completo',
      destaque: true,
      tag: 'CARREIRA POLICIAL',
      itens: [
        'Aulas presenciais com corpo docente especialista em carreiras jurídicas policiais',
        'Acesso irrestrito à plataforma online com videoaulas e resumos em PDF',
        'Oficinas de redação discursiva com devolutivas individuais',
        'Simulados temáticos e ranqueados no modelo oficial'
      ]
    },
    {
      nome: 'Módulo TAF & Capacidade Física PCERJ',
      destaque: false,
      tag: 'ETAPA ELIMINATÓRIA',
      itens: [
        'Orientação técnica sobre os índices oficiais do edital da PCERJ',
        'Planejamento de treino para teste de corrida, barra e abdominais',
        'Acompanhamento e simulado de TAF presencial'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Oficiais Padrão PCERJ (FGV)',
    avisos: [
      'Provas elaboradas rigorosamente de acordo com os editais anteriores da FGV para a PCERJ',
      'Correção detalhada de questões comentadas pelos professores',
      'Ranking comparativo entre os alunos do preparatório'
    ],
    avisoInscricaoDestaque: 'Inclusos no plano regular da turma.'
  },
  cta: {
    titulo: 'Seja Inspetor ou Investigador da Polícia Civil do RJ.',
    texto: 'Salários iniciais atrativos, estabilidade estatutária e a honra de servir na investigação policial fluminense.',
    botaoTexto: 'GARANTIR MINHA VAGA NA TURMA PCERJ'
  }
};

// 5.3 TURMA INSS — TÉCNICO DO SEGURO SOCIAL
export const TURMA_INSS: TurmaDetalhes = {
  id: 'turma-inss-2026',
  preparatorioIds: ['inss'],
  titulo: 'Turma INSS — Técnico do Seguro Social',
  subtitulo: 'Instituto Nacional do Seguro Social (Banca Cebraspe / Certo ou Errado)',
  heroTexto: 'Preparação cirúrgica para o cargo de Técnico do Seguro Social, com carga horária expressiva em Direito Previdenciário e domínio absoluto da metodologia Cebraspe.',
  heroAvisoTurnos: 'Turmas abertas nos turnos Manhã e Noite.',
  foco: 'INSS — Técnico do Seguro Social',
  periodo: '03/03/2026 a 27/11/2026',
  turno: 'Manhã e Noite',
  horario: '08h30 às 11h45 (Manhã) / 18h30 às 21h45 (Noite)',
  cargaTotal: '160 encontros',
  turnosESelecao: {
    titulo: 'Escolha seu turno de estudo',
    cards: [
      {
        turno: 'MANHÃ',
        horario: '08h30 às 11h45 (segunda a quinta)',
        temposExtras: '11h45 às 12h45 (plantão de dúvidas e exercícios de Previdenciário)'
      },
      {
        turno: 'NOITE',
        horario: '18h30 às 21h45 (segunda a quinta)',
        temposExtras: 'Plantões aos sábados pela manhã e maratonas de itens Cebraspe'
      }
    ],
    observacaoGeral: 'Ambos os turnos contam com corpo docente especializado no concurso do INSS e na banca Cebraspe.'
  },
  visaoGeral: {
    duracao: '03/03/2026 a 27/11/2026',
    cargaHoraria: {
      total: '160 encontros',
      distribuicao: [
        { ciclo: '1º Ciclo (Núcleo Previdenciário & Básico)', encontros: '80 encontros' },
        { ciclo: '2º Ciclo (Aprofundamento Cebraspe & Instruções Normativas)', encontros: '60 encontros' },
        { ciclo: 'Reta Final & Treinamento de 120 Itens', encontros: '20 encontros' }
      ]
    },
    concursos: ['INSS — Técnico do Seguro Social'],
    frequencia: '4 encontros presenciais por semana',
    turnoEHorario: 'Manhã (08h30 às 11h45) ou Noite (18h30 às 21h45)',
    temposExtras: {
      horario: 'Sábados das 09h00 às 12h30',
      observacao: 'Rodadas de testes de 120 itens no modelo Cebraspe (Certo/Errado) com correção comentada.',
      aviso: 'Participação inclusa para alunos matriculados.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo — Direito Previdenciário & Núcleo Básico',
    periodo: '03/03/2026 a 17/07/2026',
    encontros: 80,
    frequencia: '4 encontros semanais',
    materias: [
      { nome: 'Direito Previdenciário (Seguridade Social, Custeio e Benefícios do RGPS)' },
      { nome: 'Língua Portuguesa e Redação Oficial' },
      { nome: 'Ética no Serviço Público (Decreto 1.171/94 e Código de Ética do INSS)' },
      { nome: 'Direito Constitucional (Direitos Fundamentais e Organização do Estado)' },
      { nome: 'Direito Administrativo e Lei 8.112/90 (Estatuto dos Servidores Federais)' },
      { nome: 'Noções de Informática' },
      { nome: 'Raciocínio Lógico-Matemático' }
    ]
  },
  recesso1: {
    titulo: 'Pausa de Inverno',
    periodo: '18/07/2026 a 02/08/2026',
    descricao: 'Pausa pedagógica de duas semanas no recesso de meio de ano.'
  },
  ciclo2: {
    nome: '2º Ciclo — Metodologia Cebraspe & Treinamento Exaustivo',
    periodo: '03/08/2026 a 27/11/2026',
    encontros: 60,
    frequencia: '4 encontros semanais',
    materias: [
      { nome: 'Metodologia Cebraspe: Como pontuar alto no modelo Certo/Errado' },
      { nome: 'Instruções Normativas do INSS e Jurisprudência Previdenciária Atualizada' },
      { nome: 'Resolução de mais de 1.500 Questões Cebraspe dos Últimos Concursos' },
      { nome: 'Simulados de 120 Itens com Fator de Correção (Uma Errada Anula Uma Certa)' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Coleção Didática Especializada INSS Progressão',
    entregaPrevista: 'Apostilas entregues na primeira semana de aula',
    observacao: 'Foco minucioso na disciplina de Seguridade Social (mais de 70 questões na prova), com legislação esquematizada e tabelas comparativas de benefícios.'
  },
  combos: [
    {
      nome: 'Combo INSS Federal Completo',
      destaque: true,
      tag: 'FOCO CEBRASPE',
      itens: [
        'Aulas presenciais com especialistas em Direito Previdenciário e Cebraspe',
        'Material impresso exclusivo e resumos esquematizados em PDF',
        'Simulados periódicos no formato Certo/Errado com ranking geral',
        'Acesso à plataforma digital com videoaulas de reforço'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Ranqueados Padrão Cebraspe (120 Itens)',
    avisos: [
      'Provas simuladas de 120 itens com a regra de 1 questão errada anula 1 certa',
      'Treinamento prático de gerenciamento de tempo e controle emocional',
      'Relatório de erros por matéria com indicação dos pontos a revisar'
    ],
    avisoInscricaoDestaque: 'Simulados periódicos inclusos na mensalidade regular.'
  },
  cta: {
    titulo: 'Conquiste a estabilidade federal no concurso do INSS.',
    texto: 'Remuneração inicial de R$ 5.905,79+ e estabilidade estatutária federal pela Lei 8.112/90.',
    botaoTexto: 'GARANTIR MINHA VAGA NA TURMA INSS'
  }
};

// 5.4 TURMA PRF — POLÍCIA RODOVIÁRIA FEDERAL
export const TURMA_PRF: TurmaDetalhes = {
  id: 'turma-prf-2026',
  preparatorioIds: ['prf-administrativo', 'prf-agente-federal', 'prf'],
  titulo: 'Turma PRF — Polícia Rodoviária Federal',
  subtitulo: 'Policial Rodoviário Federal e Agente Administrativo da PRF',
  heroTexto: 'Preparatório de excelência e alta performance para as carreiras da PRF, abrangendo o edital policial de nível superior e administrativo de nível médio.',
  heroAvisoTurnos: 'Turmas nos turnos Noite (durante a semana) e Sábado Integral.',
  foco: 'PRF — Policial Rodoviário Federal e Agente Administrativo',
  periodo: '03/03/2026 a 27/11/2026',
  turno: 'Noite e Sábado Integral',
  horario: '18h30 às 21h45 (Noite) / 08h30 às 16h30 (Sábado)',
  cargaTotal: '170 encontros',
  turnosESelecao: {
    titulo: 'Escolha seu formato de preparação',
    cards: [
      {
        turno: 'NOITE',
        horario: '18h30 às 21h45 (segunda a quinta)',
        temposExtras: 'Plantões de Trânsito (CTB) e Física às sextas'
      },
      {
        turno: 'SÁBADO INTEGRAL',
        horario: '08h30 às 16h30 (manhã e tarde)',
        temposExtras: 'Acesso total à plataforma digital e monitorias semanais'
      }
    ],
    observacaoGeral: 'Preparação abrangente com módulo exclusivo de Legislação de Trânsito (CTB e Resoluções CONTRAN).'
  },
  visaoGeral: {
    duracao: '03/03/2026 a 27/11/2026',
    cargaHoraria: {
      total: '170 encontros',
      distribuicao: [
        { ciclo: '1º Ciclo (Núcleo Básico & Legislação de Trânsito)', encontros: '80 encontros' },
        { ciclo: '2º Ciclo (Direito Aplicado, Física & Resolução Cebraspe)', encontros: '70 encontros' },
        { ciclo: 'Reta Final & Simulações de Prova', encontros: '20 encontros' }
      ]
    },
    concursos: ['PRF — Policial Rodoviário Federal', 'PRF — Agente Administrativo'],
    frequencia: 'Noite: 4 noites por semana | Sábado: 1 encontro integral semanal',
    turnoEHorario: 'Noite (18h30 às 21h45) ou Sábado (08h30 às 16h30)',
    temposExtras: {
      horario: 'Sextas-feiras e Sábados',
      observacao: 'Plantões de Legislação de Trânsito, redação discursiva e simulados ranqueados no modelo Cebraspe.',
      aviso: 'Simulados de 120 itens com régua oficial de pontuação.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo — Legislação de Trânsito & Disciplinas Gerais',
    periodo: '03/03/2026 a 17/07/2026',
    encontros: 80,
    frequencia: '4 encontros semanais',
    materias: [
      { nome: 'Legislação de Trânsito (Código de Trânsito Brasileiro e Resoluções CONTRAN)' },
      { nome: 'Língua Portuguesa e Redação Oficial' },
      { nome: 'Direito Constitucional e Direitos Humanos' },
      { nome: 'Direito Administrativo e Lei 8.112/90' },
      { nome: 'Direito Penal e Direito Processual Penal' },
      { nome: 'Raciocínio Lógico-Matemático e Informática' },
      { nome: 'Noções de Física Mecânica Aplicada a Acidentes' }
    ]
  },
  recesso1: {
    titulo: 'Pausa de Inverno',
    periodo: '18/07/2026 a 02/08/2026',
    descricao: 'Pausa pedagógica de duas semanas no meio do ano.'
  },
  ciclo2: {
    nome: '2º Ciclo — Geopolítica, Resolução Cebraspe & Redação',
    periodo: '03/08/2026 a 27/11/2026',
    encontros: 70,
    frequencia: '4 encontros semanais',
    materias: [
      { nome: 'Geopolítica Brasileira e Atualidades de Fronteiras' },
      { nome: 'Leis Penais Especiais e Estatuto do Desarmamento' },
      { nome: 'Oficina de Redação Discursiva Cebraspe com Correção Individual' },
      { nome: 'Maratona de Questões Cebraspe dos Últimos Concursos da PRF' },
      { nome: 'Orientações Técnicas para o TAF da PRF' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Material Didático Especializado PRF Progressão',
    entregaPrevista: 'Entregue nas primeiras semanas de aula',
    observacao: 'Inclui compêndio completo e esquematizado do CTB, resoluções obrigatórias do CONTRAN e mais de 2.200 questões Cebraspe.'
  },
  combos: [
    {
      nome: 'Combo PRF Completo (Presencial + Digital + TAF)',
      destaque: true,
      tag: 'CARREIRA FEDERAL',
      itens: [
        'Aulas presenciais com corpo docente especializado na banca Cebraspe',
        'Oficina de redação discursiva com devolutivas individuais',
        'Plataforma online com videoaulas e simulados digitais',
        'Orientações preparatórias para o TAF'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Ranqueados Padrão Cebraspe PRF',
    avisos: [
      'Simulados de 120 itens com a metodologia Cebraspe (uma errada anula uma certa)',
      'Caderno de redação discursiva com tema inédito de segurança viária',
      'Classificação geral dos alunos do preparatório'
    ],
    avisoInscricaoDestaque: 'Inclusos no plano regular da turma.'
  },
  cta: {
    titulo: 'Prepare-se para ingressar na Polícia Rodoviária Federal.',
    texto: 'Salários de até R$ 12.253,84 a R$ 18.000,00+ com estabilidade federal e prestígio nacional.',
    botaoTexto: 'GARANTIR MINHA VAGA NA TURMA PRF'
  }
};

// 5.5 TURMAS TRANSPETRO 2026 (SEPARADAS POR EDITAL E ÁREA)

// 5.5.1 TURMA TRANSPETRO — ADMINISTRAÇÃO E CONTROLE (EDITAL 3)
export const TURMA_TRANSPETRO_ADMINISTRACAO: TurmaDetalhes = {
  id: 'turma-transpetro-administracao-2026',
  preparatorioIds: ['transpetro'],
  categoriaTag: 'Nossa turma',
  titulo: 'Transpetro – Administração',
  subtitulo: 'Administração e Controle · Ênfase 1 do Edital 3',
  heroTexto: 'Preparação completa para o cargo de Administração e Controle (Ênfase 1 do Edital 3), com turma própria de conhecimentos específicos: Administração, Legislação, Finanças, Logística, Contabilidade e Informática.',
  heroAvisoTurnos: 'Turnos Noite (18h45 às 21h45) e Sábado (08h00 às 17h10).',
  foco: 'Administração e Controle · Ênfase 1 do Edital 3',
  periodo: '08/09 a 27/11/26',
  frequencia: 'De 3 a 5 vezes por semana',
  turno: 'Noite e Sábado',
  horario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
  cargaTotal: '50 encontros = 150 horas',
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
  ],
  turnosESelecao: {
    titulo: 'Turnos e Frequência',
    cards: [
      {
        turno: 'NOITE',
        horario: '18h45 às 21h45 (De 3 a 5 vezes por semana)',
        temposExtras: 'Simulados ranqueados no modelo Fundação Cesgranrio'
      },
      {
        turno: 'SÁBADO',
        horario: '08h00 às 17h10 (aulas e maratonas temáticas)',
        temposExtras: 'Aprofundamento de Conhecimentos Específicos'
      }
    ],
    observacaoGeral: '50 encontros = 150 horas. Frequência de 3 a 5 vezes por semana.'
  },
  visaoGeral: {
    duracao: '08/09 a 27/11/26 (Até a prova de 29/11)',
    cargaHoraria: {
      total: '50 encontros = 150 horas',
      distribuicao: [
        { ciclo: 'Conhecimentos Básicos (Português & Matemática)', encontros: '20 encontros' },
        { ciclo: 'Conhecimentos Específicos (Administração, Legislação, Finanças, Logística, Contabilidade, Informática)', encontros: '25 encontros' },
        { ciclo: 'Reta Final & Resolução Cesgranrio', encontros: '5 encontros' }
      ]
    },
    concursos: ['Transpetro – Administração e Controle (Ênfase 1 Edital 3)'],
    frequencia: 'De 3 a 5 vezes por semana',
    turnoEHorario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
    temposExtras: {
      horario: 'Sábados das 08h00 às 17h10',
      observacao: 'Plantão de dúvidas e baterias de questões da Fundação Cesgranrio.',
      aviso: 'Participação inclusa para alunos matriculados.'
    }
  },
  ciclo1: {
    nome: '1º Ciclo — Conhecimentos Básicos',
    periodo: '08/09 a 16/10/2026',
    encontros: 25,
    frequencia: '3 a 5 vezes por semana',
    materias: [
      { nome: 'Língua Portuguesa (Fundação Cesgranrio)' },
      { nome: 'Matemática' }
    ]
  },
  recesso1: {
    titulo: 'Sem Recesso',
    periodo: 'Ritmo contínuo pós-edital',
    descricao: 'Cronograma acelerado para maximizar a retenção até 27/11.'
  },
  ciclo2: {
    nome: '2º Ciclo — Conhecimentos Específicos (Turma Própria)',
    periodo: '17/10 a 27/11/2026',
    encontros: 25,
    frequencia: '3 a 5 vezes por semana',
    materias: [
      { nome: 'Administração' },
      { nome: 'Legislação' },
      { nome: 'Finanças' },
      { nome: 'Logística' },
      { nome: 'Contabilidade' },
      { nome: 'Noções de Informática' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Apostilas Específicas Transpetro Administração Cesgranrio',
    entregaPrevista: 'Entregues na primeira semana de aula',
    observacao: 'Foco exclusivo na Ênfase 1 do Edital 3 com teoria esquematizada e mais de 1.000 questões Cesgranrio.'
  },
  combos: [
    {
      nome: 'Combo Transpetro Administração Completo (150h)',
      destaque: true,
      tag: 'TURMA PRÓPRIA',
      itens: [
        '50 encontros (150h) com corpo docente especializado',
        'Língua Portuguesa e Matemática completas',
        'Módulo Específico: Administração, Legislação, Finanças, Logística, Contabilidade e Informática',
        'Simulados ranqueados no modelo Cesgranrio'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Cronometrados Fundação Cesgranrio',
    avisos: [
      'Simulados no formato real da prova de 29/11',
      'Correção comentada item por item pelos professores',
      'Diagnóstico de desempenho individual'
    ],
    avisoInscricaoDestaque: 'Inclusos no plano regular da turma.'
  },
  cta: {
    titulo: 'Conquiste sua vaga na Transpetro — Salário de R$ 6.539,54.',
    texto: '75 vagas (5 imediatas + 70 CR). Inscrições de 12/08 a 14/09 e prova em 29/11. Garanta sua vaga no Progressão Caxias!',
    botaoTexto: 'GARANTIR VAGA EM ADMINISTRAÇÃO'
  }
};

// 5.5.2 TURMA TRANSPETRO — AUXILIAR DO MAR (EDITAL 1)
export const TURMA_TRANSPETRO_AUXILIAR_MAR: TurmaDetalhes = {
  id: 'turma-transpetro-auxiliar-mar-2026',
  preparatorioIds: ['transpetro'],
  titulo: 'Turma Transpetro – Auxiliar do Mar',
  subtitulo: 'Edital 1 · Quadro de Mar',
  heroTexto: 'Preparação direcionada para as especialidades do Edital 1 do Quadro de Mar da Transpetro, com foco absoluto nas matérias básicas exigidas pela Fundação Cesgranrio.',
  heroAvisoTurnos: 'Turnos Noite (18h45 às 21h45) e Sábado (08h00 às 17h10).',
  foco: 'Transpetro – Auxiliar do Mar (Edital 1)',
  periodo: '08/09 a 16/10',
  turno: 'Noite e Sábado',
  horario: '18h45 às 21h45, com 15 min de intervalo (noite) · 08h00 às 17h10 (sábado)',
  cargaTotal: '72 horas, 2 vezes por semana',
  cargaObservacao: 'A carga pode variar por imprevistos ou pela agenda dos professores.',
  turnosESelecao: {
    titulo: 'Turnos e Funcionamento',
    cards: [
      {
        turno: 'NOITE',
        horario: '18h45 às 21h45, com 15 minutos de intervalo (2x por semana)',
        temposExtras: 'Aulões de resolução de provas da Cesgranrio'
      },
      {
        turno: 'SÁBADO',
        horario: '08h00 às 17h10 (plantões e módulos intensivos)',
        temposExtras: 'Módulos direcionados por especialidade'
      }
    ],
    observacaoGeral: '72 horas, 2 vezes por semana. Período: 08/09 a 16/10.'
  },
  visaoGeral: {
    duracao: '08/09 a 16/10',
    cargaHoraria: {
      total: '72 horas',
      distribuicao: [
        { ciclo: 'Língua Portuguesa Cesgranrio', encontros: '36 horas' },
        { ciclo: 'Inglês Técnico & Resolução de Questões', encontros: '36 horas' }
      ]
    },
    concursos: [
      'Auxiliar de Saúde',
      'Condutor Bombeador',
      'Condutor Mecânico',
      'Cozinheiro',
      'Eletricista',
      'Moço de Convés',
      'Moço de Máquinas',
      'Taifeiro'
    ],
    frequencia: '2 vezes por semana (pode variar por imprevistos ou agenda dos professores)',
    turnoEHorario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
    temposExtras: {
      horario: 'Sábados e noites extras',
      observacao: 'Carga de 72h pode variar por imprevistos ou pela agenda dos professores.',
      aviso: 'Participação inclusa para alunos matriculados.'
    }
  },
  ciclo1: {
    nome: 'Ciclo Intensivo — Disciplinas Básicas do Edital 1',
    periodo: '08/09 a 16/10',
    encontros: 24,
    frequencia: '2 vezes por semana',
    materias: [
      { nome: 'Língua Portuguesa' },
      { nome: 'Inglês Técnico', destaque: 'só Condutor Mecânico, Condutor Bombeador e Eletricista' }
    ]
  },
  recesso1: {
    titulo: 'Sem Recesso',
    periodo: 'Ritmo contínuo pós-edital',
    descricao: 'Aulas intensivas até 16/10.'
  },
  ciclo2: {
    nome: 'Reta Final & Provas Anteriores',
    periodo: 'Simulações e Exercícios',
    encontros: 10,
    frequencia: 'Aulões de reforço',
    materias: [
      { nome: 'Provas Anteriores Cesgranrio (Marinha Mercante e Estatais)' },
      { nome: 'Gramática e Interpretação Aplicada' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Apostila Transpetro Auxiliar do Mar',
    entregaPrevista: 'Entregue na primeira semana de aula',
    observacao: 'Atende Auxiliar de Saúde, Condutor Bombeador, Condutor Mecânico, Cozinheiro, Eletricista, Moço de Convés, Moço de Máquinas e Taifeiro.'
  },
  combos: [
    {
      nome: 'Combo Transpetro Auxiliar do Mar (72h)',
      destaque: true,
      tag: 'EDITAL 1',
      itens: [
        '72 horas de aulas presenciais focadas',
        'Língua Portuguesa e Inglês Técnico',
        'Simulados cronometrados no formato Cesgranrio',
        'Material didático atualizado pós-edital'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Cronometrados Fundação Cesgranrio',
    avisos: [
      'Simulados cronometrados com foco na prova de 29/11',
      'Gabaritos comentados questão por questão',
      'Análise de rendimento individual'
    ],
    avisoInscricaoDestaque: 'Inclusos no pacote da turma.'
  },
  cta: {
    titulo: 'Ingresse no Quadro de Mar da Transpetro.',
    texto: 'Edital 1 publicado com prova em 29/11. Garanta sua preparação com a melhor equipe do Rio de Janeiro!',
    botaoTexto: 'GARANTIR VAGA EM AUXILIAR DO MAR'
  }
};

// 5.5.3 TURMA TRANSPETRO — OFICIAL DO MAR (EDITAL 2)
export const TURMA_TRANSPETRO_OFICIAL_MAR: TurmaDetalhes = {
  id: 'turma-transpetro-oficial-mar-2026',
  preparatorioIds: ['transpetro'],
  titulo: 'Turma Transpetro – Oficial do Mar',
  subtitulo: 'Edital 2 · Quadro de Mar',
  heroTexto: 'Preparação para Segundo Oficial de Máquinas e Segundo Oficial de Náutica com ênfase nas disciplinas básicas do Edital 2 sob organização da Fundação Cesgranrio.',
  heroAvisoTurnos: 'Turnos Noite (18h45 às 21h45) e Sábado (08h00 às 17h10).',
  foco: 'Transpetro – Oficial do Mar (Edital 2)',
  periodo: '08/09 a 16/10',
  turno: 'Noite e Sábado',
  horario: '18h45 às 21h45, com 15 min de intervalo (noite) · 08h00 às 17h10 (sábado)',
  cargaTotal: '72 horas, de 2 a 3 vezes por semana',
  cargaObservacao: 'A carga pode variar por imprevistos ou pela agenda dos professores.',
  turnosESelecao: {
    titulo: 'Turnos e Aulas',
    cards: [
      {
        turno: 'NOITE',
        horario: '18h45 às 21h45, com 15 minutos de intervalo (2 a 3x por semana)',
        temposExtras: 'Resolução de questões de Português e Inglês'
      },
      {
        turno: 'SÁBADO',
        horario: '08h00 às 17h10 (módulos integrais)',
        temposExtras: 'Simulados oficiais Cesgranrio'
      }
    ],
    observacaoGeral: '72 horas, de 2 a 3 vezes por semana. Período: 08/09 a 16/10.'
  },
  visaoGeral: {
    duracao: '08/09 a 16/10',
    cargaHoraria: {
      total: '72 horas',
      distribuicao: [
        { ciclo: 'Língua Portuguesa Cesgranrio', encontros: '36 horas' },
        { ciclo: 'Língua Inglesa para Oficiais', encontros: '36 horas' }
      ]
    },
    concursos: [
      'Segundo Oficial de Máquinas',
      'Segundo Oficial de Náutica'
    ],
    frequencia: 'De 2 a 3 vezes por semana (pode variar por imprevistos ou agenda dos professores)',
    turnoEHorario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
    temposExtras: {
      horario: 'Sábados e noites extras',
      observacao: 'Carga de 72h pode variar por imprevistos ou pela agenda dos professores.',
      aviso: 'Participação inclusa para alunos matriculados.'
    }
  },
  ciclo1: {
    nome: 'Ciclo Básico — Disciplinas do Edital 2',
    periodo: '08/09 a 16/10',
    encontros: 24,
    frequencia: '2 a 3 vezes por semana',
    materias: [
      { nome: 'Língua Portuguesa' },
      { nome: 'Inglês' }
    ]
  },
  recesso1: {
    titulo: 'Sem Recesso',
    periodo: 'Ritmo contínuo pós-edital',
    descricao: 'Aulas intensivas até 16/10.'
  },
  ciclo2: {
    nome: 'Revisão Cesgranrio & Provas Oficiais',
    periodo: 'Simulação e Treinamento',
    encontros: 10,
    frequencia: 'Aulões de resolução rápida',
    materias: [
      { nome: 'Interpretação e Gramática Cesgranrio' },
      { nome: 'Vocabulário Marítimo e Interpretação em Inglês' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Apostila Transpetro Oficial do Mar',
    entregaPrevista: 'Entregue na primeira semana de aula',
    observacao: 'Foco exclusivo para Segundo Oficial de Máquinas e Segundo Oficial de Náutica.'
  },
  combos: [
    {
      nome: 'Combo Transpetro Oficial do Mar (72h)',
      destaque: true,
      tag: 'EDITAL 2',
      itens: [
        '72 horas de aulas presenciais',
        'Língua Portuguesa e Inglês focados na banca Cesgranrio',
        'Simulados cronometrados periódicos',
        'Material didático atualizado'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Cronometrados Fundação Cesgranrio',
    avisos: [
      'Simulados com o nível de exigência da Cesgranrio para Oficiais',
      'Correção comentada detalhada',
      'Controle estatístico de pontuação'
    ],
    avisoInscricaoDestaque: 'Inclusos no plano regular da turma.'
  },
  cta: {
    titulo: 'Torne-se Segundo Oficial na Transpetro.',
    texto: 'Remunerações de até R$ 15.034,81 com plano de carreira marítimo de prestígio.',
    botaoTexto: 'GARANTIR VAGA EM OFICIAL DO MAR'
  }
};

// 5.5.4 TURMA TRANSPETRO — MÉDIO TERRA (EDITAL 3)
export const TURMA_TRANSPETRO_MEDIO_TERRA: TurmaDetalhes = {
  id: 'turma-transpetro-medio-terra-2026',
  preparatorioIds: ['transpetro'],
  titulo: 'Turma Transpetro – Médio Terra',
  subtitulo: 'Edital 3 · Quadro de Terra',
  heroTexto: 'Preparação para as 12 especialidades de nível médio e técnico do Quadro de Terra da Transpetro, cobrindo com precisão as matérias básicas de Língua Portuguesa e Matemática.',
  heroAvisoTurnos: 'Turnos Noite (18h45 às 21h45) e Sábado (08h00 às 17h10).',
  foco: 'Transpetro – Médio Terra (Edital 3)',
  periodo: '08/09 a 16/10',
  turno: 'Noite e Sábado',
  horario: '18h45 às 21h45, com 15 min de intervalo (noite) · 08h00 às 17h10 (sábado)',
  cargaTotal: '72 horas, 2 vezes por semana',
  cargaObservacao: 'A carga pode variar por imprevistos ou pela agenda dos professores.',
  turnosESelecao: {
    titulo: 'Turnos e Aulas',
    cards: [
      {
        turno: 'NOITE',
        horario: '18h45 às 21h45, com 15 minutos de intervalo (2x por semana)',
        temposExtras: 'Resolução de questões de Português e Matemática'
      },
      {
        turno: 'SÁBADO',
        horario: '08h00 às 17h10 (plantões e módulos intensivos)',
        temposExtras: 'Simulados de prova inteira'
      }
    ],
    observacaoGeral: '72 horas, 2 vezes por semana. Período: 08/09 a 16/10.'
  },
  visaoGeral: {
    duracao: '08/09 a 16/10',
    cargaHoraria: {
      total: '72 horas',
      distribuicao: [
        { ciclo: 'Língua Portuguesa Cesgranrio', encontros: '36 horas' },
        { ciclo: 'Matemática e Raciocínio Lógico Cesgranrio', encontros: '36 horas' }
      ]
    },
    concursos: [
      'Administração',
      'Ambiental',
      'Dutos',
      'Elétrica',
      'Faixa de Dutos',
      'Inspeção de Equipamentos e Instalações',
      'Instrumentação',
      'Manutenção (Caldeiraria, Mecânica)',
      'Operação',
      'Química',
      'Segurança',
      'Telecomunicações'
    ],
    frequencia: '2 vezes por semana (pode variar por imprevistos ou agenda dos professores)',
    turnoEHorario: '18h45 às 21h45 (noite) · 08h00 às 17h10 (sábado)',
    temposExtras: {
      horario: 'Sábados e noites extras',
      observacao: 'Carga de 72h pode variar por imprevistos ou pela agenda dos professores.',
      aviso: 'Participação inclusa para alunos matriculados.'
    }
  },
  ciclo1: {
    nome: 'Ciclo Básico Comum — Disciplinas do Edital 3',
    periodo: '08/09 a 16/10',
    encontros: 24,
    frequencia: '2 vezes por semana',
    materias: [
      { nome: 'Língua Portuguesa' },
      { nome: 'Matemática' }
    ]
  },
  recesso1: {
    titulo: 'Sem Recesso',
    periodo: 'Ritmo contínuo pós-edital',
    descricao: 'Aulas intensivas até 16/10.'
  },
  ciclo2: {
    nome: 'Maratona de Questões Cesgranrio',
    periodo: 'Simulação Real de Prova',
    encontros: 10,
    frequencia: 'Aulões de resolução exaustiva',
    materias: [
      { nome: 'Pegadinhas e Padrões da Banca Cesgranrio' },
      { nome: 'Matemática Financeira e Raciocínio Aplicado' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Apostila Transpetro Médio Terra',
    entregaPrevista: 'Entregue na primeira semana de aula',
    observacao: 'Atende todas as 12 áreas técnicas e operacionais do Edital 3 do Quadro de Terra.'
  },
  combos: [
    {
      nome: 'Combo Transpetro Médio Terra (72h)',
      destaque: true,
      tag: 'EDITAL 3',
      itens: [
        '72 horas de aulas presenciais',
        'Língua Portuguesa e Matemática completas',
        'Atende as 12 especialidades de terra',
        'Simulados no formato oficial da prova de 29/11'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Cronometrados Fundação Cesgranrio',
    avisos: [
      'Simulados presenciais no mesmo padrão da prova de 29/11',
      'Correção comentada detalhando a metodologia Cesgranrio',
      'Ranking geral dos alunos'
    ],
    avisoInscricaoDestaque: 'Inclusos no pacote da turma.'
  },
  cta: {
    titulo: 'Ingresse no Quadro de Terra da Transpetro.',
    texto: '12 especialidades com estabilidade CLT e benefícios corporativos Petrobras.',
    botaoTexto: 'GARANTIR VAGA EM MÉDIO TERRA'
  }
};

// 5.6 TURMA GUARDA MUNICIPAL DE SÃO GONÇALO — SELECON
export const TURMA_GM_SAO_GONCALO: TurmaDetalhes = {
  id: 'turma-gm-sao-goncalo-2026',
  preparatorioIds: ['gm-sao-goncalo'],
  titulo: 'Turma Guarda Municipal de São Gonçalo',
  subtitulo: 'Edital Aberto • Prova em 24/01/2027 • Instituto SELECON',
  heroTexto: 'Preparação focada nas 80 questões do edital da Guarda Municipal de São Gonçalo (100 vagas imediatas + 500 CR) com metodologia direcionada à banca Instituto SELECON.',
  heroAvisoTurnos: 'Turmas Noite e Sábado com simulados periódicos.',
  foco: 'Guarda Municipal de São Gonçalo (Banca SELECON)',
  periodo: '01/10/2026 a 22/01/2027',
  turno: 'Noite e Sábado',
  horario: '18h30 às 21h45 (Noite) / 08h30 às 16h30 (Sábado)',
  cargaTotal: '110 encontros',
  turnosESelecao: {
    titulo: 'Turnos Disponíveis',
    cards: [
      {
        turno: 'NOITE',
        horario: '18h30 às 21h45 (segunda a quinta)',
        temposExtras: 'Simulados temáticos aos sábados'
      },
      {
        turno: 'SÁBADO',
        horario: '08h30 às 16h30 (manhã e tarde)',
        temposExtras: 'Acesso total à plataforma digital de videoaulas'
      }
    ],
    observacaoGeral: 'Preparação estritamente alinhada com as 5 matérias da Prova Objetiva de 24/01/2027.'
  },
  visaoGeral: {
    duracao: '01/10/2026 a 22/01/2027',
    cargaHoraria: {
      total: '110 encontros',
      distribuicao: [
        { ciclo: '1º Ciclo (Conteúdo Programático Completo)', encontros: '70 encontros' },
        { ciclo: '2º Ciclo (Maratona de Questões SELECON)', encontros: '30 encontros' },
        { ciclo: 'Reta Final & Revisão de Véspera', encontros: '10 encontros' }
      ]
    },
    concursos: ['Guarda Municipal de São Gonçalo Nível II'],
    frequencia: 'Noite: 4 encontros semanais | Sábado: 1 encontro integral semanal',
    turnoEHorario: 'Noite (18h30 às 21h45) ou Sábado (08h30 às 16h30)',
    temposExtras: {
      horario: 'Sábados das 09h00 às 13h00',
      observacao: 'Simulados oficiais de 80 questões e 4 horas de duração com ranking geral.',
      aviso: 'Participação inclusa para alunos matriculados.'
    }
  },
  ciclo1: {
    nome: 'Ciclo Intensivo — Disciplinas Oficiais do Edital',
    periodo: '01/10/2026 a 22/01/2027',
    encontros: 110,
    frequencia: '4 encontros por semana ou sábado integral',
    materias: [
      { nome: 'Língua Portuguesa (15 questões na prova)' },
      { nome: 'Noções de Direito (20 questões na prova)' },
      { nome: 'Legislação Extravagante (15 questões na prova)' },
      { nome: 'Conhecimentos Específicos e Segurança Pública (20 questões na prova)' },
      { nome: 'Noções de Informática (10 questões na prova)' }
    ]
  },
  recesso1: {
    titulo: 'Pausa de Fim de Ano',
    periodo: '24/12/2026 a 01/01/2027',
    descricao: 'Pausa para as festas de fim de ano, retomando em ritmo acelerado em janeiro.'
  },
  ciclo2: {
    nome: 'Super Reta Final — Simulados e Resolução SELECON',
    periodo: '02/01/2027 a 22/01/2027',
    encontros: 20,
    frequencia: 'Aulas intensivas diárias',
    materias: [
      { nome: 'Resolução das Últimas Provas Aplicadas pelo Instituto SELECON' },
      { nome: 'Aulão de Véspera com Apostas das 5 Disciplinas' },
      { nome: 'Orientações Preliminares para o TAF de Fevereiro/2027' }
    ]
  },
  recessosCiclo2: [],
  materialDidatico: {
    titulo: 'Apostila Direcionada Guarda Municipal de São Gonçalo',
    entregaPrevista: 'Entregue na primeira semana de aula',
    observacao: 'Conteúdo organizado rigorosamente de acordo com as 80 questões do edital da SELECON.'
  },
  combos: [
    {
      nome: 'Combo Intensivo GM São Gonçalo',
      destaque: true,
      tag: 'EDITAL ABERTO',
      itens: [
        'Aulas presenciais cobrindo 100% do edital',
        'Simulados cronometrados de 80 questões no padrão SELECON',
        'Material didático impresso completo',
        'Aulão de véspera incluso'
      ]
    }
  ],
  simulados: {
    titulo: 'Simulados Cronometrados 80 Questões (Banca SELECON)',
    avisos: [
      'Simulados com duração de 4 horas reproduzindo o ambiente real da prova de 24/01/2027',
      'Correção comentada das disciplinas de maior peso (Direito e Específicas)',
      'Controle de corte eliminatório (mínimo de 50% de acertos)'
    ],
    avisoInscricaoDestaque: 'Inclusos no pacote da turma.'
  },
  cta: {
    titulo: 'Conquiste uma das 100 vagas imediatas na Guarda Municipal de São Gonçalo.',
    texto: 'Prova em 24/01/2027. Comece hoje mesmo sua preparação de alto nível no Progressão.',
    botaoTexto: 'GARANTIR MINHA VAGA NA TURMA GM'
  }
};



// Array de turmas de Concursos Públicos
export const TURMAS_CONCURSOS: TurmaDetalhes[] = [

  TURMA_PMERJ,
  TURMA_PCERJ,
  TURMA_INSS,
  TURMA_TRANSPETRO_ADMINISTRACAO,
  TURMA_TRANSPETRO_AUXILIAR_MAR,
  TURMA_TRANSPETRO_OFICIAL_MAR,
  TURMA_TRANSPETRO_MEDIO_TERRA,
  TURMA_PRF,
  TURMA_GM_SAO_GONCALO
];

// Utilitário para buscar turma vinculada a um concurso público
export function getTurmaForConcurso(concursoId: string): TurmaDetalhes | undefined {
  return TURMAS_CONCURSOS.find(turma => turma.preparatorioIds.includes(concursoId));
}