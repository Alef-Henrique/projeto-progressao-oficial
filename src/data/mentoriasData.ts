export interface MentoriaRecurso {
  titulo: string;
  descricao: string;
  detalhe?: string;
}

export interface MentoriaCronogramaDia {
  dia: string;
  titulo: string;
  descricao: string;
  horarioLimite?: string;
  destaque?: boolean;
}

export interface MentoriaOpcaoCombo {
  nome: string;
  destaque?: boolean;
  tag?: string;
  itens: string[];
}

export interface MentoriaComboMultiDetalhes {
  titulo: string;
  plantaoVespera: {
    titulo: string;
    descricao: string;
    horario: string;
    material: string;
    datas: string;
  };
  simulados: {
    titulo: string;
    formato: string;
    gabarito: string;
    correcao: string;
    avisoInscricao: string;
  };
  opa: {
    titulo: string;
    descricao: string;
  };
}

export interface MentoriaDetalhes {
  id: string;
  titulo: string;
  subtitulo: string;
  descricaoHero: string;
  badge: string;
  foco: string;
  resumoCard: {
    tipo: string;
    carga: string;
    encontros?: string;
    periodo?: string;
  };
  infoPrincipais: {
    carga: string;
    frequencia: {
      aulas: string;
      pdf: string;
      videos: string;
      observacao: string;
    };
    horario: {
      aula: string;
      intervalo: string;
      envioPdf: string;
      envioVideos?: string;
      observacaoDivergencia?: string;
    };
    periodo?: {
      datas: string;
      observacaoConflito?: string;
    };
  };
  recursos: MentoriaRecurso[];
  cronogramaSemanal: MentoriaCronogramaDia[];
  comboMultiDetalhes?: MentoriaComboMultiDetalhes;
  opcoesCombos: MentoriaOpcaoCombo[];
  cta: {
    titulo: string;
    texto: string;
    botaoTexto: string;
  };
}

export const MENTORIAS_ONLINE: MentoriaDetalhes[] = [
  // 1. MENTORIA DE LÍNGUA PORTUGUESA — CONCURSOS MILITARES
  {
    id: 'mentoria-portugues-militares',
    titulo: 'Mentoria de Língua Portuguesa — Concursos Militares',
    subtitulo: 'Online, ao vivo',
    descricaoHero: 'Preparação em Língua Portuguesa para candidatos que buscam aprovação em concursos militares.',
    badge: 'Progressão Online — Ao Vivo',
    foco: 'Concursos Militares',
    resumoCard: {
      tipo: 'Online, ao vivo',
      carga: '130 horas de aula'
    },
    infoPrincipais: {
      carga: '130 horas de aula',
      frequencia: {
        aulas: '2 vezes por semana',
        pdf: '2 vezes por semana',
        videos: '1 vez por semana',
        observacao: 'A frequência pode variar em caso de imprevistos ou conforme a agenda dos professores.'
      },
      horario: {
        aula: '18h45 às 21h30',
        intervalo: '15 minutos de intervalo',
        envioPdf: 'Até as 18h'
      }
    },
    recursos: [
      {
        titulo: 'Aulas ao vivo',
        descricao: 'Com professores de larga experiência e muitas aprovações.',
        detalhe: 'As aulas possuem interação dos alunos e buscam reproduzir ao máximo o ambiente da aula presencial.'
      },
      {
        titulo: 'PDF antecipado',
        descricao: 'Conteúdo e exercícios relacionados à banca provável do concurso que o aluno pretende fazer.',
        detalhe: 'O material é entregue antes da aula.'
      },
      {
        titulo: 'Vídeos curtos',
        descricao: 'Vídeos para tirar dúvidas e reforçar os principais pontos trabalhados durante a semana.'
      },
      {
        titulo: 'Simulados',
        descricao: 'Simulados com correção ao vivo.'
      },
      {
        titulo: 'Transmissão',
        descricao: 'As aulas seguem a estrutura do Progressão Online, via YouTube.',
        detalhe: 'Os PDFs e vídeos curtos são enviados pelo WhatsApp.'
      },
      {
        titulo: 'Aula perdida',
        descricao: 'A gravação da aula fica disponível na plataforma em até 24 horas após o encerramento.'
      }
    ],
    cronogramaSemanal: [
      {
        dia: 'Segunda-feira',
        titulo: 'PDF com conteúdo e exercícios',
        descricao: 'Material didático enviado até as 18h para estudo prévio dos temas.'
      },
      {
        dia: 'Terça-feira',
        titulo: 'Aula ao vivo',
        descricao: 'Conteúdo enviado no PDF + resolução e correção minuciosa dos exercícios.'
      },
      {
        dia: 'Quarta-feira',
        titulo: 'Novo PDF',
        descricao: 'Novo conteúdo e lista de exercícios enviados até as 18h.'
      },
      {
        dia: 'Quinta-feira',
        titulo: 'Aula ao vivo',
        descricao: 'Conteúdo enviado no PDF + resolução e correção dos exercícios ao vivo.'
      },
      {
        dia: 'Sexta-feira',
        titulo: 'Vídeo(s) curto(s) do professor',
        descricao: 'Focado nas principais dúvidas da semana. Dúvidas devem ser enviadas pelos alunos até as 18h de quarta-feira.'
      },
      {
        dia: 'A cada 4 semanas',
        titulo: 'Semana do simulado',
        descricao: 'Simulado completo com correção ao vivo para aferição de desempenho.',
        destaque: true
      }
    ],
    opcoesCombos: [
      {
        nome: 'Curso completo',
        destaque: false,
        itens: [
          'Mentoria de Língua Portuguesa completa',
          'PDFs antecipados e vídeos tira-dúvidas',
          'Acesso a gravações por 24h na plataforma'
        ]
      },
      {
        nome: 'Curso + OPA',
        destaque: true,
        tag: 'Mais Procurado',
        itens: [
          'Mentoria de Língua Portuguesa',
          'OPA (Orientação e Planejamento de Aprendizagem)',
          'Consultoria individualizada de estudos'
        ]
      }
    ],
    cta: {
      titulo: 'Prepare-se com o Progressão Online.',
      texto: 'Estude com aulas ao vivo, professores experientes, materiais antecipados e acompanhamento durante sua preparação militar.',
      botaoTexto: 'QUERO CONHECER A MENTORIA'
    }
  },

  // 2. MENTORIA DE LÍNGUA PORTUGUESA — CONCURSOS PÚBLICOS
  {
    id: 'mentoria-portugues-publicos',
    titulo: 'Mentoria de Língua Portuguesa — Concursos Públicos - 09/11/26 a 26/02/27',
    subtitulo: 'Online, ao vivo',
    descricaoHero: 'Preparação completa em Língua Portuguesa para candidatos aos principais concursos públicos civis.',
    badge: 'Progressão Online — Ao Vivo',
    foco: 'Concursos Públicos',
    resumoCard: {
      tipo: 'Online, ao vivo',
      carga: '130 horas de aula'
    },
    infoPrincipais: {
      carga: '130 horas de aula',
      frequencia: {
        aulas: '2 vezes por semana',
        pdf: '2 vezes por semana',
        videos: '1 vez por semana',
        observacao: 'A frequência pode variar por imprevistos ou pela agenda dos professores.'
      },
      
      horario: {
        aula: '18h45 às 21h30',
        intervalo: '15 minutos de intervalo',
        envioPdf: 'Até as 18h'
      }
    },
    recursos: [
      {
        titulo: 'Aulas ao vivo',
        descricao: 'Com professores de larga experiência e muitas aprovações.',
        detalhe: 'Aulas com interação dos alunos e padrão de sala presencial.'
      },
      {
        titulo: 'PDF antecipado',
        descricao: 'Conteúdo e exercícios relacionados às principais bancas de concursos públicos.',
        detalhe: 'Material entregue antes do início da aula.'
      },
      {
        titulo: 'Vídeos curtos',
        descricao: 'Vídeos tira-dúvidas semanais reforçando os pontos mais cobrados.'
      },
      {
        titulo: 'Simulados',
        descricao: 'Simulados periódicos com correção ao vivo.'
      },
      {
        titulo: 'Transmissão',
        descricao: 'Estrutura Progressão Online via YouTube.',
        detalhe: 'PDFs e vídeos curtos enviados pelo WhatsApp da turma.'
      },
      {
        titulo: 'Aula perdida',
        descricao: 'Gravação disponível na plataforma em até 24 horas após o encerramento.'
      }
    ],
    cronogramaSemanal: [
      {
        dia: 'Segunda-feira',
        titulo: 'PDF com conteúdo e exercícios',
        descricao: 'Material enviado até as 18h para preparação antecipada.'
      },
      {
        dia: 'Terça-feira',
        titulo: 'Aula ao vivo',
        descricao: 'Conteúdo do PDF + correção ao vivo dos exercícios.'
      },
      {
        dia: 'Quarta-feira',
        titulo: 'Novo PDF',
        descricao: 'Conteúdo e exercícios enviados até as 18h.'
      },
      {
        dia: 'Quinta-feira',
        titulo: 'Aula ao vivo',
        descricao: 'Conteúdo do PDF + resolução dos exercícios ao vivo.'
      },
      {
        dia: 'Sexta-feira',
        titulo: 'Vídeo(s) curto(s) tira-dúvidas',
        descricao: 'Focado nas principais dúvidas da semana (enviadas até as 18h de quarta-feira).'
      },
      {
        dia: 'A cada 4 semanas',
        titulo: 'Semana do simulado',
        descricao: 'Aplicação e correção ao vivo do simulado de Língua Portuguesa.',
        destaque: true
      }
    ],
    opcoesCombos: [
      {
        nome: 'Curso completo',
        destaque: false,
        itens: [
          'Mentoria de Língua Portuguesa',
          'PDFs antecipados e vídeos tira-dúvidas',
          'Acesso a gravações por 24h na plataforma'
        ]
      },
      {
        nome: 'Curso + OPA',
        destaque: true,
        tag: 'Mais Procurado',
        itens: [
          'Mentoria de Língua Portuguesa',
          'OPA (Orientação e Planejamento de Aprendizagem)',
          'Planejamento estratégico de estudos para concursos'
        ]
      }
    ],
    cta: {
      titulo: 'Prepare-se com o Progressão Online.',
      texto: 'Estude com aulas ao vivo, professores experientes, materiais antecipados e acompanhamento durante sua preparação para concursos públicos.',
      botaoTexto: 'QUERO CONHECER A MENTORIA'
    }
  },

  // 3. MENTORIA EAGS — AERONÁUTICA
  {
    id: 'mentoria-eags-aeronautica',
    titulo: 'Mentoria EAGS — Aeronáutica',
    subtitulo: 'Mentoria de Português para o EAGS. Online, ao vivo.',
    descricaoHero: 'Preparação específica de Língua Portuguesa direcionada ao Exame de Admissão ao EAGS da Aeronáutica.',
    badge: 'Progressão Online — Ao Vivo',
    foco: 'Português para o EAGS',
    resumoCard: {
      tipo: 'Online, ao vivo',
      encontros: '46 encontros — 115 horas',
      carga: '115 horas',
      periodo: '19/10/2026 a 16/04/2027*'
    },
    infoPrincipais: {
      carga: '46 encontros — 115 horas',
      periodo: {
        datas: '19/10/2026 a 16/04/2027*',
        observacaoConflito: 'Período sujeito à confirmação da coordenação. (O material original também menciona "07 OUT a 16 ABR 2026").'
      },
      frequencia: {
        aulas: '2 a 3 vezes por semana',
        pdf: '2 vezes por semana',
        videos: '1 vez por semana',
        observacao: 'A frequência pode variar por imprevistos ou conforme a agenda dos professores.'
      },
      horario: {
        aula: '18h45 às 21h30',
        intervalo: '15 minutos de intervalo',
        envioPdf: 'Até as 18h',
        envioVideos: 'Até as 19h'
      }
    },
    recursos: [
      {
        titulo: 'Aulas ao vivo',
        descricao: 'Professores com larga experiência e muitas aprovações, com interação dos alunos.'
      },
      {
        titulo: 'PDF antecipado',
        descricao: 'Conteúdo e exercícios da banca provável do concurso, entregues antes da aula.'
      },
      {
        titulo: 'Vídeos curtos',
        descricao: 'Vídeos para tirar dúvidas específicas dos temas trabalhados.'
      },
      {
        titulo: 'Simulados com correção ao vivo',
        descricao: 'Com correção ao vivo para alunos que contratarem o Combo Multi.',
        detalhe: 'Quarta-feira: envio do simulado | Quinta-feira: correção ao vivo.'
      },
      {
        titulo: 'Transmissão',
        descricao: 'Progressão Online via YouTube.',
        detalhe: 'PDFs e vídeos enviados via WhatsApp.'
      },
      {
        titulo: 'Aula perdida',
        descricao: 'Gravação disponível na plataforma em até 24h após o encerramento.'
      }
    ],
    cronogramaSemanal: [
      {
        dia: 'Segunda-feira',
        titulo: 'PDF com conteúdo e exercícios',
        descricao: 'Envio do material até as 18h.'
      },
      {
        dia: 'Terça-feira',
        titulo: 'Aula ao vivo',
        descricao: 'Conteúdo enviado no PDF + correção detalhada.'
      },
      {
        dia: 'Quarta-feira',
        titulo: 'Novo PDF',
        descricao: 'Conteúdo e exercícios enviados até as 18h. (Nos dias de simulado: envio da prova).'
      },
      {
        dia: 'Quinta-feira',
        titulo: 'Aula ao vivo',
        descricao: 'Conteúdo enviado no PDF + correção. (Nos dias de simulado: correção ao vivo).'
      },
      {
        dia: 'Sexta-feira',
        titulo: 'Vídeo(s) curtos para dúvidas',
        descricao: 'Vídeos tira-dúvidas até as 19h. Dúvidas devem ser enviadas até as 18h de quarta-feira.'
      },
      {
        dia: 'A cada 4 semanas',
        titulo: 'Semana do simulado',
        descricao: 'Semana especial com simulado do EAGS e correção ao vivo.',
        destaque: true
      }
    ],
    comboMultiDetalhes: {
      titulo: 'Combo Multi — EAGS',
      plantaoVespera: {
        titulo: 'Plantão de véspera',
        descricao: 'Aulão motivacional com dicas relevantes.',
        horario: '08h às 13h20',
        material: 'Incluso',
        datas: 'Definidas quando a banca marcar a prova.'
      },
      simulados: {
        titulo: 'Simulados presenciais',
        formato: 'Quartas-feiras, das 08h às 12h',
        gabarito: 'Disponibilizado nos grupos de WhatsApp da turma em até 48 horas',
        correcao: 'Presencial ou online',
        avisoInscricao: 'Mesmo com o Combo Multi, o aluno precisa realizar a inscrição antes de cada simulado, dentro do prazo estabelecido pela coordenação, para controle de presença e impressão do material.'
      },
      opa: {
        titulo: 'OPA (Orientação e Planejamento de Aprendizagem)',
        descricao: 'Consultoria na qual um professor especialista auxilia no planejamento personalizado dos estudos e sugere a melhor técnica de acordo com o perfil do aluno.'
      }
    },
    opcoesCombos: [
      {
        nome: 'CURSO SEM COMBOS',
        destaque: false,
        itens: [
          'Somente a mentoria de Português para o EAGS',
          'Aulas ao vivo e materiais em PDF',
          'Gravações por 24h na plataforma'
        ]
      },
      {
        nome: 'CURSO + COMBO MULTI',
        destaque: true,
        tag: 'Mais Completo',
        itens: [
          'Mentoria de Português para o EAGS',
          'Plantão de véspera com dicas e macetes',
          'Simulados presenciais',
          'OPA (Planejamento individualizado)'
        ]
      }
    ],
    cta: {
      titulo: 'Prepare-se com o Progressão Online.',
      texto: 'Estude com aulas ao vivo, professores experientes, materiais antecipados e acompanhamento durante sua preparação para o EAGS.',
      botaoTexto: 'QUERO CONHECER A MENTORIA'
    }
  },

  // 4. MENTORIA RM2 — OFICIAL TEMPORÁRIO DA MARINHA
  {
    id: 'mentoria-rm2-marinha',
    titulo: 'Mentoria RM2 — Oficial Temporário da Marinha',
    subtitulo: 'Mentoria de Português para o RM2. Online, ao vivo.',
    descricaoHero: 'Preparação focada em Língua Portuguesa para o processo seletivo do Serviço Militar Voluntário de Oficiais Temporários da Marinha (RM2).',
    badge: 'Progressão Online — Ao Vivo',
    foco: 'Português para o RM2',
    resumoCard: {
      tipo: 'Online, ao vivo',
      encontros: '35 encontros — 87,5 horas',
      carga: '87,5 horas',
      periodo: '19/10/2026 a 19/02/2027*'
    },
    infoPrincipais: {
      carga: '35 encontros — 87,5 horas',
      periodo: {
        datas: '19/10/2026 a 19/02/2027*',
        observacaoConflito: 'Período sujeito à confirmação da coordenação. (O material original também menciona "07 OUT 2026 a 19 FEV 2027").'
      },
      frequencia: {
        aulas: '2 a 3 vezes por semana',
        pdf: '2 vezes por semana',
        videos: '1 vez por semana',
        observacao: 'A frequência pode variar por imprevistos ou pela agenda dos professores.'
      },
      horario: {
        aula: '18h45 às 21h30',
        intervalo: '15 minutos de intervalo',
        observacaoDivergencia: 'Horário sujeito à confirmação da coordenação (existe menção divergente a aulas "até as 22h").',
        envioPdf: 'Até as 18h',
        envioVideos: 'Até as 19h'
      }
    },
    recursos: [
      {
        titulo: 'Aulas ao vivo',
        descricao: 'Com professores de larga experiência e muitas aprovações, com interação dos alunos.'
      },
      {
        titulo: 'PDF antecipado',
        descricao: 'Conteúdo e exercícios da banca provável do concurso RM2.'
      },
      {
        titulo: 'Vídeos curtos',
        descricao: 'Conteúdo para tirar dúvidas dos tópicos da semana.'
      },
      {
        titulo: 'Simulados com correção ao vivo',
        descricao: 'Com correção ao vivo.',
        detalhe: 'Quarta: envio do simulado | Quinta: correção ao vivo.'
      },
      {
        titulo: 'Transmissão',
        descricao: 'Progressão Online via YouTube.',
        detalhe: 'PDFs e vídeos curtos enviados via WhatsApp.'
      },
      {
        titulo: 'Aula perdida',
        descricao: 'Gravação disponível na plataforma em até 24h.'
      }
    ],
    cronogramaSemanal: [
      {
        dia: 'Segunda-feira',
        titulo: 'PDF com conteúdo e exercícios',
        descricao: 'Envio do material até as 18h.'
      },
      {
        dia: 'Terça-feira',
        titulo: 'Aula ao vivo',
        descricao: 'Conteúdo do PDF + correção ao vivo.'
      },
      {
        dia: 'Quarta-feira',
        titulo: 'Novo PDF',
        descricao: 'Envio até as 18h. (Nos dias de simulado: envio da prova).'
      },
      {
        dia: 'Quinta-feira',
        titulo: 'Aula ao vivo',
        descricao: 'Conteúdo do PDF + correção. (Nos dias de simulado: correção ao vivo).'
      },
      {
        dia: 'Sexta-feira',
        titulo: 'Vídeo(s) curto(s) para dúvidas',
        descricao: 'Vídeos tira-dúvidas até as 19h. Dúvidas devem ser enviadas até as 18h de quarta-feira.'
      },
      {
        dia: 'A cada 4 semanas',
        titulo: 'Semana do simulado',
        descricao: 'Semana dedicada à aplicação e resolução do simulado RM2.',
        destaque: true
      }
    ],
    comboMultiDetalhes: {
      titulo: 'Combo Multi — RM2',
      plantaoVespera: {
        titulo: 'Plantão de véspera',
        descricao: 'Aulão motivacional com dicas relevantes.',
        horario: '08h às 13h20',
        material: 'Incluso',
        datas: 'Definidas quando a banca marcar a prova.'
      },
      simulados: {
        titulo: 'Simulados presenciais',
        formato: 'Quartas-feiras, das 08h às 12h',
        gabarito: 'Gabarito nos grupos de WhatsApp em até 48h',
        correcao: 'Presencial ou online',
        avisoInscricao: 'Mesmo com o Combo Multi, o aluno precisa se inscrever antes de cada simulado dentro do prazo da coordenação, para controle de presença e impressão do material.'
      },
      opa: {
        titulo: 'OPA (Orientação e Planejamento de Aprendizagem)',
        descricao: 'Consultoria para planejamento personalizado dos estudos e escolha da melhor técnica de acordo com o perfil do aluno.'
      }
    },
    opcoesCombos: [
      {
        nome: 'CURSO SEM COMBOS',
        destaque: false,
        itens: [
          'Somente a mentoria de Português para o RM2',
          'Aulas ao vivo e materiais em PDF',
          'Acesso às gravações por 24h'
        ]
      },
      {
        nome: 'CURSO + COMBO MULTI',
        destaque: true,
        tag: 'Mais Completo',
        itens: [
          'Mentoria de Português para o RM2',
          'Plantão de véspera',
          'Simulados presenciais',
          'OPA (Planejamento personalizado)'
        ]
      }
    ],
    cta: {
      titulo: 'Prepare-se com o Progressão Online.',
      texto: 'Estude com aulas ao vivo, professores experientes, materiais antecipados e acompanhamento durante sua preparação para o RM2 da Marinha.',
      botaoTexto: 'QUERO CONHECER A MENTORIA'
    }
  }
];

export const getMentoriaForPreparatory = (prepId: string): MentoriaDetalhes | undefined => {
  if (prepId === 'eags') {
    return MENTORIAS_ONLINE.find(m => m.id === 'mentoria-eags-aeronautica');
  }
  if (prepId === 'rm2') {
    return MENTORIAS_ONLINE.find(m => m.id === 'mentoria-rm2-marinha');
  }
  return undefined;
};

