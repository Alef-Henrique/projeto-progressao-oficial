export interface InformacoesPrincipais {
  periodo: string;
  carga: string;
  duracao?: string;
  cadaCiclo?: string;
  entradaContinua?: string;
  frequencia: string;
  formato?: string;
  horario?: string;
  bonus: string;
}

export interface CicloEstrategico {
  nome: string;
  fase: string;
  itens: string[];
  conclusao: string;
}

export interface ModuloItem {
  nome: string;
  disciplinas: string;
}

export interface ModulosInfo {
  titulo: string;
  subtitulo?: string;
  modulos: ModuloItem[];
}

export interface BonusInfo {
  titulo: string;
  regras: string[];
}

export interface PropostaDaTurma {
  texto: string;
  importante: string;
}

export interface FocoDaTurma {
  itens: string[];
  destaque: string;
}

export interface TurmaProDetalheData {
  id: string;
  slug: string;
  titulo: string;
  subtitulo: string;
  categoriaTag?: string;
  info: InformacoesPrincipais;
  materiasTitulo?: string;
  materiasSubtitulo?: string | false;
  materias?: string[];
  materiasBase?: string[];
  materiasPRF?: string[];
  materiasPCERJ?: string[];
  pro01Disciplinas?: string[];
  pro01Texto?: string;
  pro01Titulo?: string;
  pro02Disciplinas?: string[];
  pro02Texto?: string;
  pro02Titulo?: string;
  disciplinasEstudadas?: string[];
  naoAbordadas?: string[];
  moduloComplementar?: string;
  notaModulos?: string;
  simulados?: string;
  auloesEstrategicos?: string;
  materiasAuloes?: string[];
  propostaDaTurma?: PropostaDaTurma;
  paraQuemETitulo?: string;
  paraQuemE?: string[];
  focoDaTurma?: FocoDaTurma;
  entradaContinuaTexto?: string;
  ciclos?: CicloEstrategico[];
  modulosInfo?: ModulosInfo;
  bonusInfo?: BonusInfo;
  diferenciais?: string[];
  textoFinal?: string;
}

export const TURMAS_PRO_DETALHES_DATA: Record<string, TurmaProDetalheData> = {
  // 1. Pro Sócio Concurseiro (Tradicional)
  'pro-socio-concurseiro': {
    id: 'pro-socio-concurseiro',
    slug: 'pro-socio-concurseiro',
    titulo: 'Pro Sócio Concurseiro (Tradicional)',
    subtitulo: 'Outubro/26 · turma geral',
    categoriaTag: 'Sem concurso específico',
    info: {
      periodo: '13/10/26 a 30/06/27 (9 meses)',
      carga: '66 encontros = 198 horas',
      frequencia: 'De 1 a 5 vezes por semana',
      formato: 'Turma fechada, em módulo',
      horario: '18h45 às 21h45',
      bonus: '3 meses grátis ao contratar'
    },
    materias: [
      'Português',
      'Redação',
      'Direito Administrativo',
      'Direito Constitucional',
      'RLM',
      'Informática',
      'Ética',
      'Lei 8.112/90',
      'Redação Oficial'
    ],
    moduloComplementar: 'Carga horária reservada às matérias específicas dos editais vigentes no momento.',
    simulados: 'Operação Desempenho: 4 simulados, modelos PRF, INSS e PCERJ; o aluno Pro também participa dos demais modelos.',
    auloesEstrategicos: '8 encontros = 48 horas, aos domingos; o aluno Pro também participa dos aulões das demais turmas.',
    materiasAuloes: [
      'Português',
      'RLM / Matemática',
      'Constitucional',
      'Administrativo',
      'Penal',
      'Processo Penal',
      'Informática'
    ],
    diferenciais: [
      'Maior carga horária do mercado: cobertura completa dos conteúdos, mais tempo para revisões e exercícios e preparação aprofundada e intensiva.',
      'Professores especialistas: a maioria já foi concurseira e hoje trabalha em emprego público, com dicas, estratégias e suporte para dúvidas.',
      'Melhor custo-benefício com 3 meses gratuitos.',
      'Passe livre: o aluno escolhe livremente as turmas e os turnos que quer frequentar.',
      'Preço acessível e pagamento facilitado.',
      'Histórico de sucesso: mais de 30 mil alunos aprovados em diversos concursos, com depoimentos reais de ex-alunos.'
    ],
    textoFinal: 'Única turma que reúne as principais matérias dos concursos, com possibilidade de matéria específica à escolha dos alunos.'
  },

  // 2. Pro Carreiras Policiais · Ciclo 01
  'pro-carreiras-policiais-ciclo-01': {
    id: 'pro-carreiras-policiais-ciclo-01',
    slug: 'pro-carreiras-policiais-ciclo-01',
    titulo: 'Pro Carreiras Policiais · Ciclo 01',
    subtitulo: 'Outubro/26 · carreiras policiais de nível superior',
    categoriaTag: 'Carreiras Policiais',
    info: {
      periodo: '13/10/26 a 30/06/27',
      carga: '66 encontros = 198 horas',
      duracao: '9 meses de formação + 3 meses de bônus = 12 meses',
      entradaContinua: 'Nova turma a cada 2 meses (modelo modular)',
      frequencia: 'De 2 a 3 vezes por semana',
      horario: '18h45 às 21h45, presencial',
      bonus: '3 meses grátis ao contratar'
    },
    materiasBase: [
      'Português',
      'RLM',
      'Informática',
      'Direito Constitucional',
      'Direito Administrativo',
      'Lei 8.112/90',
      'Direito Penal',
      'Processo Penal'
    ],
    materiasPRF: [
      'CTB',
      'Física',
      'Língua Estrangeira',
      'Direitos Humanos',
      'Redação',
      'Geopolítica'
    ],
    materiasPCERJ: [
      'Leis Penais'
    ],
    naoAbordadas: [
      'Estatuto PCERJ',
      'Ética e Cidadania',
      'Redação Oficial'
    ],
    simulados: 'Operação Desempenho: 4 simulados, modelos PRF, INSS e PCERJ; o aluno Pro também participa dos demais modelos.',
    auloesEstrategicos: '8 encontros = 48 horas, aos domingos; o aluno Pro também participa dos aulões das demais turmas.',
    materiasAuloes: [
      'Português',
      'RLM / Matemática',
      'Constitucional',
      'Administrativo',
      'Penal',
      'Processo Penal',
      'Informática'
    ],
    paraQuemE: [
      'Quem quer iniciar a preparação policial de forma estruturada',
      'Quem já estuda, mas precisa de método',
      'Quem busca concursos policiais de nível superior'
    ],
    diferenciais: [
      'Formação direcionada para bancas policiais: a preparação segue os editais dos principais concursos policiais de nível superior, com leitura inteligente da lei seca e treino no perfil das bancas.',
      'Metodologia modular com evolução contínua: a cada 2 meses começa um novo ciclo de disciplinas, com entrada contínua sem prejuízo pedagógico, revisão natural e jornada clara até a formação completa.',
      'Passe Livre (imersão total): o aluno pode frequentar qualquer turma e horário disponível. Não incluem esse benefício os aulões especiais, eventos, projetos estratégicos e plantões.',
      'Ambiente de alta performance: rotina estruturada, cultura de foco, professores especialistas e acompanhamento constante.',
      'Plano de ataque pós-edital: reorganização do cronograma, priorização de matérias, intensivos direcionados e simulados focados no edital aberto.'
    ]
  },

  // 3. Pro Carreiras Policiais Turbo (Ciclo 01 e Ciclo 02)
  'pro-carreiras-policiais-turbo': {
    id: 'pro-carreiras-policiais-turbo',
    slug: 'pro-carreiras-policiais-turbo',
    titulo: 'Pro Carreiras Policiais Turbo (Ciclo 01 e Ciclo 02)',
    subtitulo: 'Outubro/26 · 18 meses',
    categoriaTag: 'Carreiras Policiais Turbo',
    info: {
      periodo: '13/10/26 a 31/03/28',
      carga: '132 encontros = 396 horas',
      duracao: '18 meses de aula + 2 meses grátis',
      cadaCiclo: '9 meses, 66 encontros = 198 horas, de 2 a 3 vezes por semana',
      entradaContinua: 'Nova turma a cada 2 meses (modelo modular)',
      frequencia: 'De 2 a 3 vezes por semana',
      horario: '18h45 às 21h45, presencial',
      bonus: '2 meses grátis ao contratar'
    },
    materiasBase: [
      'Português',
      'RLM',
      'Informática',
      'Direito Constitucional',
      'Direito Administrativo',
      'Lei 8.112/90',
      'Direito Penal',
      'Processo Penal'
    ],
    materiasPRF: [
      'CTB',
      'Física',
      'Língua Estrangeira',
      'Direitos Humanos',
      'Redação',
      'Geopolítica'
    ],
    materiasPCERJ: [
      'Leis Penais'
    ],
    naoAbordadas: [
      'Estatuto PCERJ',
      'Ética e Cidadania',
      'Redação Oficial'
    ],
    simulados: 'Operação Desempenho: 8 simulados, modelos PRF, INSS e PCERJ; o aluno Pro também participa dos demais modelos.',
    auloesEstrategicos: '9 encontros = 54 horas, aos domingos; o aluno Pro também participa dos aulões das demais turmas.',
    materiasAuloes: [
      'Português',
      'RLM / Matemática',
      'Constitucional',
      'Administrativo',
      'Penal',
      'Processo Penal',
      'Informática'
    ],
    paraQuemE: [
      'Candidatos a carreiras policiais de nível superior (PRF, PF, PCERJ, Polícia Penal e concursos correlatos)',
      'Iniciantes que precisam construir uma base sólida',
      'Quem já estudou, mas não conseguiu organização e constância',
      'Quem trabalha durante o dia e precisa de preparação estruturada à noite',
      'Quem busca formação de médio prazo (18 meses), com planejamento até o pós-edital',
      'Quem quer ambiente presencial, com disciplina, acompanhamento e alta performance'
    ],
    ciclos: [
      {
        nome: 'Ciclo 01 · Base Estratégica',
        fase: 'fase de estruturação',
        itens: [
          'Construção sólida dos fundamentos das disciplinas policiais',
          'Foco nos temas mais cobrados pelas bancas policiais',
          'Organização mental do conteúdo (estrutura da lei, mapas mentais e leitura estratégica)',
          'Correção de vícios de estudo e alinhamento metodológico',
          'Formação de rotina e disciplina de alto rendimento'
        ],
        conclusao: 'O aluno sai da dispersão e entra em um modelo estratégico de preparação.'
      },
      {
        nome: 'Ciclo 02 · Aprofundamento e Domínio',
        fase: 'fase de maturidade',
        itens: [
          'Aprofundamento nos pontos de maior incidência em prova',
          'Resolução massiva de questões no padrão das principais bancas',
          'Interpretação avançada de enunciados complexos',
          'Consolidação da legislação seca, com foco em pegadinhas de prova',
          'Simulados internos para medir evolução e competitividade'
        ],
        conclusao: 'O aluno deixa de ser estudante e passa a agir como concorrente direto por vaga.'
      }
    ],
    diferenciais: [
      'Formação direcionada para bancas policiais: a preparação segue os editais dos principais concursos policiais de nível superior, com leitura inteligente da lei seca e treino no perfil das bancas.',
      'Metodologia modular com evolução contínua: a cada 2 meses começa um novo ciclo de disciplinas, com entrada contínua sem prejuízo pedagógico, revisão natural e jornada clara até a formação completa.',
      'Passe Livre (imersão total): o aluno pode frequentar qualquer turma e horário disponível. Não incluem esse benefício os aulões especiais, eventos, projetos estratégicos e plantões.',
      'Ambiente de alta performance: rotina estruturada, cultura de foco, professores especialistas e acompanhamento constante.',
      'Plano de ataque pós-edital: reorganização do cronograma, priorização de matérias, intensivos direcionados e simulados focados no edital aberto.'
    ]
  },

  // 4. Pro Turbo · Pro 01 + Pro 02
  'pro-turbo-pro01-pro02': {
    id: 'pro-turbo-pro01-pro02',
    slug: 'pro-turbo-pro01-pro02',
    titulo: 'Pro Turbo · Pro 01 + Pro 02',
    subtitulo: 'Outubro/26 · Pro 01 (Regular) + Pro 02 (Exercícios)',
    categoriaTag: 'Sem concurso específico',
    info: {
      periodo: '13/10/26 a 31/03/28',
      carga: '132 encontros = 396 horas',
      duracao: '18 meses de aula + 2 meses grátis',
      cadaCiclo: '9 meses, 66 encontros = 198 horas',
      frequencia: 'De 1 a 5 vezes por semana',
      horario: '18h45 às 21h45',
      bonus: '2 meses grátis ao contratar'
    },
    pro01Disciplinas: [
      'Português',
      'Redação',
      'Direito Administrativo',
      'Direito Constitucional',
      'RLM',
      'Informática',
      'Ética',
      'Lei 8.112/90',
      'Redação Oficial'
    ],
    pro02Disciplinas: [
      'Direito Penal',
      'Processo Penal',
      'Leis Extravagantes',
      'Administração Geral e Pública',
      'AFO',
      'Contabilidade Geral',
      'Direito Tributário',
      'Direito Previdenciário',
      'Arquivologia'
    ],
    moduloComplementar: 'Carga horária reservada às matérias específicas dos editais vigentes no momento.',
    notaModulos: 'Os módulos são rotativos: o aluno pode iniciar tanto pelo Pro 01 quanto pelo Pro 02.',
    simulados: 'Operação Desempenho: 8 simulados, modelos PRF, INSS e PCERJ; o aluno Pro também participa dos demais modelos.',
    auloesEstrategicos: '9 encontros = 54 horas, aos domingos; o aluno Pro também participa dos aulões das demais turmas.',
    materiasAuloes: [
      'Português',
      'RLM / Matemática',
      'Constitucional',
      'Administrativo',
      'Penal',
      'Processo Penal',
      'Informática'
    ],
    modulosInfo: {
      titulo: 'Módulos',
      subtitulo: '2 meses cada, três disciplinas por módulo; mesma estrutura nos dois ciclos',
      modulos: [
        {
          nome: '1º módulo',
          disciplinas: 'Língua Portuguesa, Informática e Ética'
        },
        {
          nome: '2º módulo',
          disciplinas: 'Direito Constitucional, Direito Administrativo e Redação Oficial'
        },
        {
          nome: '3º módulo',
          disciplinas: 'Raciocínio Lógico-Matemático, Redação e Lei 8.112/90'
        }
      ]
    },
    bonusInfo: {
      titulo: 'Bônus de 2 meses grátis',
      regras: [
        'O aluno continua estudando em qualquer turma do Progressão, no horário e turno que escolher',
        'Os 2 meses devem ser usados logo após o término do contrato da turma, nos dois meses seguintes à conclusão do curso',
        'Não são prorrogáveis'
      ]
    },
    textoFinal: 'Única turma que reúne as principais matérias dos concursos, com possibilidade de matéria específica à escolha dos alunos.'
  },

  // 5. SUPER PRÓ CARREIRAS POLICIAIS (CICLO 01 E CICLO 02)
  'super-pro-carreiras-policiais-ciclo01-ciclo02': {
    id: 'super-pro-carreiras-policiais-ciclo01-ciclo02',
    slug: 'super-pro-carreiras-policiais-ciclo01-ciclo02',
    titulo: 'SUPER PRÓ CARREIRAS POLICIAIS (CICLO 01 E CICLO 02)',
    subtitulo: 'Novembro/26 · 18 meses',
    categoriaTag: 'Carreiras Policiais Turbo',
    info: {
      periodo: '09/11/26 a 28/04/28',
      carga: '132 encontros = 396 horas',
      duracao: '18 meses de aula + 2 meses grátis',
      cadaCiclo: '9 meses, 66 encontros = 198 horas, de 2 a 3 vezes por semana',
      entradaContinua: 'Nova turma a cada 2 meses (modelo modular)',
      frequencia: 'De 2 a 3 vezes por semana',
      horario: '18h45 às 21h45, presencial',
      bonus: '2 meses grátis ao contratar'
    },
    materiasBase: [
      'Português',
      'RLM',
      'Informática',
      'Direito Constitucional',
      'Direito Administrativo',
      'Lei 8.112/90',
      'Direito Penal',
      'Processo Penal'
    ],
    materiasPRF: [
      'CTB',
      'Física',
      'Língua Estrangeira',
      'Direitos Humanos',
      'Redação',
      'Geopolítica'
    ],
    materiasPCERJ: [
      'Leis Penais'
    ],
    naoAbordadas: [
      'Estatuto PCERJ',
      'Ética e Cidadania',
      'Redação Oficial'
    ],
    simulados: 'Operação Desempenho: 8 simulados, modelos PRF, INSS e PCERJ; o aluno Pro também participa dos demais modelos.',
    auloesEstrategicos: '9 encontros = 54 horas, aos domingos; o aluno Pro também participa dos aulões das demais turmas.',
    materiasAuloes: [
      'Português',
      'RLM / Matemática',
      'Constitucional',
      'Administrativo',
      'Penal',
      'Processo Penal',
      'Informática'
    ],
    paraQuemE: [
      'Candidatos a carreiras policiais de nível superior (PRF, PF, PCERJ, Polícia Penal e concursos correlatos)',
      'Iniciantes que precisam construir uma base sólida',
      'Quem já estudou, mas não conseguiu organização e constância',
      'Quem trabalha durante o dia e precisa de preparação estruturada à noite',
      'Quem busca formação de médio prazo (18 meses), com planejamento até o pós-edital',
      'Quem quer ambiente presencial, com disciplina, acompanhamento e alta performance'
    ],
    ciclos: [
      {
        nome: 'Ciclo 01 · Base Estratégica',
        fase: 'fase de estruturação',
        itens: [
          'Construção sólida dos fundamentos das disciplinas policiais',
          'Foco nos temas mais cobrados pelas bancas policiais',
          'Organização mental do conteúdo (estrutura da lei, mapas mentais e leitura estratégica)',
          'Correção de vícios de estudo e alinhamento metodológico',
          'Formação de rotina e disciplina de alto rendimento'
        ],
        conclusao: 'O aluno sai da dispersão e entra em um modelo estratégico de preparação.'
      },
      {
        nome: 'Ciclo 02 · Aprofundamento e Domínio',
        fase: 'fase de maturidade',
        itens: [
          'Aprofundamento nos pontos de maior incidência em prova',
          'Resolução massiva de questões no padrão das principais bancas',
          'Interpretação avançada de enunciados complexos',
          'Consolidação da legislação seca, com foco em pegadinhas de prova',
          'Simulados internos para medir evolução e competitividade'
        ],
        conclusao: 'O aluno deixa de ser estudante e passa a agir como concorrente direto por vaga.'
      }
    ],
    diferenciais: [
      'Formação direcionada para bancas policiais: a preparação segue os editais dos principais concursos policiais de nível superior, com leitura inteligente da lei seca e treino no perfil das bancas.',
      'Metodologia modular com evolução contínua: a cada 2 meses começa um novo ciclo de disciplinas, com entrada contínua sem prejuízo pedagógico, revisão natural e jornada clara até a formação completa.',
      'Passe Livre (imersão total): o aluno pode frequentar qualquer turma e horário disponível. Não incluem esse benefício os aulões especiais, eventos, projetos estratégicos e plantões.',
      'Ambiente de alta performance: rotina estruturada, cultura de foco, professores especialistas e acompanhamento constante.',
      'Plano de ataque pós-edital: reorganização do cronograma, priorização de matérias, intensivos direcionados e simulados focados no edital aberto.'
    ]
  },

  // 6. Super Pró (Pró 01 + Pró 02)
  'super-pro-pro01-pro02': {
    id: 'super-pro-pro01-pro02',
    slug: 'super-pro-pro01-pro02',
    titulo: 'Super Pró (Pró 01 + Pró 02)',
    subtitulo: 'Novembro/26 · 09/11/26 a 28/04/28 · 18 meses de aula + 2 meses grátis',
    categoriaTag: 'Sem concurso específico',
    info: {
      periodo: '09/11/26 a 28/04/28',
      carga: '132 encontros = 396 horas',
      duracao: '18 meses de aula + 2 meses grátis',
      cadaCiclo: '9 meses, 66 encontros = 198 horas',
      frequencia: 'De 1 a 5 vezes por semana',
      horario: '18h45 às 21h45',
      bonus: '2 meses grátis ao contratar'
    },
    pro01Texto: 'Base e Fundamentos: construção de base sólida, ritmo de estudo e consolidação das matérias mais cobradas',
    pro02Texto: 'Aplicação e Desempenho: aprofundamento, resolução intensiva de questões e tópicos avançados',
    moduloComplementar: 'Carga horária reservada às matérias específicas dos editais vigentes no momento.',
    notaModulos: 'Os módulos são rotativos: o aluno pode iniciar tanto pelo Pró 01 quanto pelo Pró 02.',
    simulados: 'Operação Desempenho: 8 simulados, modelos PRF, INSS e PCERJ; o aluno Pro também participa dos demais modelos.',
    auloesEstrategicos: '9 encontros = 54 horas, aos domingos; o aluno Pro também participa dos aulões das demais turmas.',
    materiasAuloes: [
      'Português',
      'RLM / Matemática',
      'Constitucional',
      'Administrativo',
      'Penal',
      'Processo Penal',
      'Informática'
    ],
    modulosInfo: {
      titulo: 'Módulos',
      subtitulo: '2 meses cada, três disciplinas por módulo; mesma estrutura nos dois ciclos',
      modulos: [
        {
          nome: '1º módulo',
          disciplinas: 'Língua Portuguesa, Informática e Ética'
        },
        {
          nome: '2º módulo',
          disciplinas: 'Direito Constitucional, Direito Administrativo e Redação Oficial'
        },
        {
          nome: '3º módulo',
          disciplinas: 'Raciocínio Lógico-Matemático, Redação e Lei 8.112/90'
        }
      ]
    },
    bonusInfo: {
      titulo: 'Bônus de 2 meses grátis',
      regras: [
        'O aluno continua estudando em qualquer turma do Progressão, no horário e turno que escolher',
        'Os 2 meses devem ser usados logo após o término do contrato da turma, nos dois meses seguintes à conclusão do curso',
        'Não são prorrogáveis'
      ]
    },
    paraQuemETitulo: 'Público-alvo',
    paraQuemE: [
      'Alunos que estão iniciando ou retornando aos estudos',
      'Alunos que precisam construir uma base sólida e desenvolver ritmo de estudo',
      'Alunos que já possuem base e querem aprofundar, treinar questões e melhorar o desempenho'
    ],
    diferenciais: [
      'Passe Livre Pro: acesso a qualquer turma e horário disponível no curso',
      'Continuidade progressiva: ao concluir a Pro 01, o aluno avança para a Pro 02 sem necessidade de refazer as matérias básicas',
      'Treinamento avançado: questões de banca, simulados e resolução comentada',
      'Mentoria estratégica: plano de ataque por edital e direcionamento para prova'
    ],
    textoFinal: 'Única turma que reúne as principais matérias dos concursos, com possibilidade de matéria específica à escolha dos alunos.'
  },

  // 7. Pro Sócio Ciclo 02 · Exercícios
  'pro-socio-ciclo-02-exercicios': {
    id: 'pro-socio-ciclo-02-exercicios',
    slug: 'pro-socio-ciclo-02-exercicios',
    titulo: 'Pro Sócio Ciclo 02 · Exercícios',
    subtitulo: 'Turma de treino para quem já estudou a teoria',
    categoriaTag: 'Nossa turma',
    info: {
      periodo: '09/11/26 a 30/07/27',
      carga: '66 encontros = 198 horas',
      duracao: '9 meses de formação + 3 meses de bônus = 12 meses',
      entradaContinua: 'Nova turma a cada 2 meses (modelo modular)',
      frequencia: 'De 2 a 3 vezes por semana',
      horario: '18h45 às 21h45, presencial',
      bonus: '3 meses grátis ao contratar'
    },
    materiasTitulo: 'Matérias',
    materiasSubtitulo: false,
    materias: [
      'Português',
      'RLM',
      'Informática',
      'Direito Constitucional',
      'Direito Administrativo',
      'Lei 8.112/90',
      'Direito Penal',
      'Processo Penal'
    ],
    propostaDaTurma: {
      texto: 'Uma turma para quem já estudou a teoria e agora precisa treinar para a prova. O foco não é só assistir às aulas, e sim resolver questões, identificar padrões das bancas, corrigir erros, desenvolver estratégia e transformar conhecimento em acerto. A preparação é direcionada para concursos policiais de nível superior.',
      importante: 'É recomendável que o aluno já tenha feito pelo menos uma turma de teoria das disciplinas trabalhadas. Não é uma turma para começar a teoria do zero. A teoria é o ponto de partida, o exercício é o treinamento, a correção é o aprendizado, a estratégia é o diferencial e a prova é o objetivo.'
    },
    paraQuemETitulo: 'Para quem é',
    paraQuemE: [
      'Quem já estudou ou está estudando a teoria',
      'Quem quer transformar conhecimento em desempenho',
      'Quem precisa aumentar o número de questões resolvidas',
      'Quem quer entender como as bancas cobram os conteúdos',
      'Quem precisa identificar e corrigir seus pontos fracos',
      'Quem quer desenvolver velocidade e estratégia de prova',
      'Quem busca preparação direcionada para concursos policiais de nível superior'
    ],
    focoDaTurma: {
      itens: [
        'Resolução intensiva de questões das principais bancas',
        'Análise do perfil das bancas e dos assuntos mais cobrados',
        'Interpretação de questões e aplicação da lei seca',
        'Análise dos erros',
        'Questões de diferentes níveis de dificuldade',
        'Estratégia de resolução e gerenciamento de tempo',
        'Revisão direcionada e treinamento contínuo'
      ],
      destaque: 'O aluno aprende por que errou, como a banca construiu a questão e qual estratégia usar para resolvê-la.'
    },
    entradaContinuaTexto: 'A metodologia segue em ciclos modulares, com uma nova turma a cada dois meses. Isso permite entrada contínua, evolução por etapas, reforço dos conteúdos, revisão constante, contato recorrente com questões e preparação progressiva até a prova.',
    textoFinal: 'Foco prático em questões para consolidar o aprendizado e acelerar a aprovação.'
  }
};