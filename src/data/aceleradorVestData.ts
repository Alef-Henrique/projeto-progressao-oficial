export interface AceleradorRecursoSecao {
  titulo: string;
  descricao?: string;
  itens?: string[];
  destaque?: boolean;
}

export interface AceleradorProduto {
  id: string;
  categoria: string;
  titulo: string;
  subtitulo: string;
  descricaoCurta: string;
  resumo: string;
  badge?: string;
  tagline?: string;
  recursos: AceleradorRecursoSecao[];
  destaqueEspecial?: {
    titulo: string;
    subtitulo?: string;
    descricao: string;
    itens?: string[];
  };
}

export const PRODUTOS_ACELERADOR_VEST: AceleradorProduto[] = [
  // CARD 1 — PROGNITRO · ACELERA ENEM
  {
    id: 'prognitro',
    categoria: 'Acelerador Vest',
    titulo: 'ProgNitro · Acelera ENEM',
    subtitulo: 'Plataforma de estudos adaptativa',
    descricaoCurta: 'Plataforma de estudos adaptativa',
    resumo: 'Uma jornada de estudos personalizada que combina conteúdo e tecnologia de acordo com o desempenho, interesses e necessidades do aluno.',
    badge: 'Inteligência Adaptativa',
    recursos: [
      {
        titulo: 'Jornada personalizada',
        descricao: 'Combina conteúdo e tecnologia em uma jornada focada nos interesses e nas necessidades de cada aluno.'
      },
      {
        titulo: 'Recomendações inteligentes',
        descricao: 'Recomenda conteúdos com base no perfil individual:',
        itens: [
          'No desempenho nos simulados',
          'Nos interesses do aluno',
          'Nas preferências de estudo',
          'Nos projetos de vida e carreiras pretendidas'
        ]
      },
      {
        titulo: 'Estrutura do Programa',
        descricao: 'O programa possui 8 ciclos estruturados:',
        itens: [
          '8 ciclos ao longo do ano',
          'Cada ciclo é composto por 3 módulos e 1 desafio',
          'Os ciclos são realizados de forma digital e remota',
          'Acompanhamento contínuo seguindo o calendário apresentado'
        ]
      }
    ]
  },

  // CARD 2 — PROGPROVAS
  {
    id: 'progprovas',
    categoria: 'Acelerador Vest',
    titulo: 'ProgProvas',
    subtitulo: 'Listas de exercícios e simulados de outras bancas',
    descricaoCurta: 'Listas de exercícios e simulados de outras bancas',
    resumo: 'Exercícios e simulados em diferentes formatos para ampliar a preparação do aluno.',
    badge: 'Treinamento Intensivo',
    recursos: [
      {
        titulo: 'Listas variadas',
        descricao: 'Gera listas de exercícios em diferentes formatos para desenvolver versatilidade na resolução:',
        itens: [
          'Dissertativas',
          'Objetivas',
          'Verdadeiro ou falso',
          'Somatórias'
        ]
      },
      {
        titulo: 'Simulados de outras bancas',
        descricao: 'Inclui simulados direcionados para outras bancas tradicionais:',
        itens: [
          'Preparação focada para a UERJ',
          '2 simulados presenciais específicos serão realizados'
        ]
      },
      {
        titulo: 'Formato e Correção',
        descricao: 'Metodologia flexível e ágil para o seu ritmo:',
        itens: [
          'As listas são digitais e remotas, seguindo o calendário',
          'As questões objetivas possuem correção automática instantânea'
        ]
      }
    ]
  },

  // CARD 3 — PROGFIT
  {
    id: 'progfit',
    categoria: 'Acelerador Vest',
    titulo: 'ProgFit',
    subtitulo: 'Avaliação complementar que simula o ENEM',
    descricaoCurta: 'Avaliação complementar que simula o ENEM',
    resumo: 'Avaliações personalizadas para acompanhar o desempenho do aluno utilizando a TRI, modelo de correção utilizado pelo ENEM.',
    badge: 'Métrica TRI Oficial',
    recursos: [
      {
        titulo: 'Ciclos de Avaliação',
        descricao: 'Organização pedagógica dividida em ciclos avaliativos:',
        itens: [
          '4 ciclos ao longo do ano',
          'Cada ciclo possui 60 questões',
          'As avaliações são digitais e remotas',
          'Conteúdo personalizado de acordo com o plano de curso da turma'
        ]
      },
      {
        titulo: 'Correção pela TRI',
        descricao: 'Utiliza a Teoria de Resposta ao Item (TRI):',
        itens: [
          'TRI — Teoria de Resposta ao Item',
          'Modelo de correção oficial utilizado pelo ENEM',
          'Avalia a coerência pedagógica dos acertos do candidato'
        ]
      },
      {
        titulo: 'Devolutivas Estratégicas',
        descricao: 'As devolutivas são focadas nos itens que mais pesam no desenvolvimento e na nota do aluno.'
      },
      {
        titulo: 'Integração com ProgNitro',
        descricao: 'O resultado do ProgFit se integra ao ProgNitro para recomendar trilhas de estudo personalizadas automaticamente.'
      }
    ]
  },

  // CARD 4 — PROGRED
  {
    id: 'progred',
    categoria: 'Acelerador Vest',
    titulo: 'ProgRed',
    subtitulo: 'Plataforma de redação com corretor inteligente',
    descricaoCurta: 'Plataforma de redação com corretor inteligente',
    resumo: 'Uma plataforma voltada ao desenvolvimento da redação do ENEM, com correção, repertório e propostas de produção textual.',
    badge: 'Redação Nota 1000',
    recursos: [
      {
        titulo: 'Ciclos temáticos',
        descricao: '8 ciclos temáticos baseados nos principais assuntos e eixos do ENEM:',
        itens: [
          '8 ciclos temáticos com temas recorrentes e tendências',
          'As redações são corrigidas pela plataforma seguindo os critérios da banca do ENEM',
          'A devolutiva é imediata para agilizar o aprendizado'
        ]
      },
      {
        titulo: 'Conteúdo complementar',
        descricao: 'Para cada eixo temático, o aluno recebe um kit completo de repertório:',
        itens: [
          '1 vídeo explicativo exclusivo',
          'Repertórios socioculturais validados',
          'Livros, séries, filmes e artigos recomendados',
          'Propostas completas de produção de redação'
        ]
      },
      {
        titulo: 'Simulados ENEM',
        descricao: 'Prática real com tempo controlado:',
        itens: [
          '4 simulados ENEM ao longo da preparação',
          'Cada simulado possui 1 redação completa',
          'Os simulados são presenciais conforme o calendário'
        ]
      }
    ]
  },

  // CARD 5 — PROGRED TURBINADO
  {
    id: 'progred-turbinado',
    categoria: 'Acelerador Vest',
    titulo: 'ProgRed Turbinado',
    subtitulo: 'Pacote adicional de redação',
    descricaoCurta: 'Pacote adicional de redação',
    resumo: 'Mais oportunidades de produção textual e comparação de desempenho para potencializar a preparação para o ENEM.',
    badge: 'Intensivo Avançado',
    recursos: [
      {
        titulo: 'Produções textuais intensivas',
        descricao: 'Volume ampliado de treino com acompanhamento minucioso:',
        itens: [
          '24 produções textuais por ano',
          'Distribuídas em 8 eixos temáticos fundamentais',
          'As produções contam com correção especializada dos nossos mestres'
        ]
      },
      {
        titulo: 'Simulados nacionais',
        descricao: 'Benchmarking em escala nacional para calibrar sua colocação:',
        itens: [
          'A cada eixo temático, o aluno participa de 1 simulado nacional',
          'Permite comparar seu desempenho com estudantes de todo o Brasil'
        ]
      }
    ]
  },

  // CARD 6 — SIMULADOS ACELERA ENEM
  {
    id: 'simulados-acelera-enem',
    categoria: 'Combo Aprov',
    titulo: 'Simulados Acelera ENEM',
    subtitulo: 'Combo Aprov',
    descricaoCurta: 'Simulados presenciais para uma preparação mais próxima da prova oficial.',
    resumo: 'Simulados completos com TRI, redação, devolutivas personalizadas e simulador SISU.',
    badge: 'Experiência Real',
    recursos: [
      {
        titulo: 'Quantidade e Formato',
        descricao: 'Simulação presencial em escala real de prova:',
        itens: [
          '4 simulados presenciais ao longo do ano',
          'Realizados em dias específicos conforme o calendário oficial'
        ]
      },
      {
        titulo: 'Estrutura da Prova',
        descricao: 'Modelo idêntico ao exame nacional:',
        itens: [
          'Cada simulado possui 180 questões + 1 redação',
          'Questões alinhadas às tendências e matrizes de referência da prova oficial'
        ]
      },
      {
        titulo: 'Devolutivas Personalizadas',
        descricao: 'Diagnóstico pós-simulado detalhado para evolução contínua:',
        itens: [
          'Mapeamento de pontos fortes',
          'Mapeamento de pontos a melhorar',
          'Recomendações personalizadas de estudo',
          'Vídeos relacionados às 5 competências da redação'
        ]
      },
      {
        titulo: 'Correção TRI e Videorresoluções',
        descricao: 'Precisão máxima na sua pontuação:',
        itens: [
          'Correção pela TRI — Teoria de Resposta ao Item',
          'Videorresolução comentada de todas as questões'
        ]
      }
    ],
    destaqueEspecial: {
      titulo: 'Simulador SISU',
      subtitulo: 'Ferramenta Estratégica de Aprovação',
      descricao: 'Ferramenta que simula possibilidades de aprovação considerando as notas obtidas pelo estudante:',
      itens: [
        'Simulação precisa com as universidades desejadas',
        'Simulação para as carreiras e cursos pretendidos',
        'Integração direta com a plataforma ProgNitro para traçar novas metas'
      ]
    }
  }
];
