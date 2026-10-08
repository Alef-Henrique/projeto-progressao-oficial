
export interface HorarioMedioInfo {
  texto: string;
  intervalo: string;
  turnos?: { label: string; horario: string }[];
}

export interface MonitoriaMedioInfo {
  horario: string;
  frequencia: string;
  turnos?: { label: string; horario: string }[];
}

export interface DisciplinaGradeMedio {
  disciplina: string;
  tempos: string;
  observacao?: string;
}

export interface TurmaEnsinoMedioDetalhe {
  id: string;
  serie: string;
  modalidade?: string;
  titulo: string;
  periodo: string;
  cargaHoraria: string;
  horarios: HorarioMedioInfo;
  monitorias: MonitoriaMedioInfo;
  seguroEscolar: string;
  propostaPedagogica: string[];
  composicaoGrade: DisciplinaGradeMedio[];
  slug: string;
}

export const ENSINO_MEDIO_DETALHES_DATA: Record<string, TurmaEnsinoMedioDetalhe> = {
  '1-serie': {
    id: '1-serie',
    serie: '1ª Série',
    titulo: '1ª SÉRIE · ENSINO MÉDIO',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '30 tempos semanais = 6T diários',
    horarios: {
      texto: '7h às 12h20 · 13h às 18h',
      intervalo: 'c/ 20 minutos de intervalo',
      turnos: [
        { label: 'Turno da Manhã', horario: '7h às 12h20' },
        { label: 'Turno da Tarde', horario: '13h às 18h' }
      ]
    },
    monitorias: {
      horario: 'Manhã: 14h às 15h30 · Tarde: 10h às 11h30',
      frequencia: 'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física.',
      turnos: [
        { label: 'Alunos do turno manhã', horario: '14h às 15h30' },
        { label: 'Alunos do turno da tarde', horario: '10h às 11h30' }
      ]
    },
    seguroEscolar: 'Os alunos do Colégio Progressão recebem seguro escolar, com cobertura de acidentes dentro e fora da escola, atendimento hospitalar, proteção 24h, entre outros benefícios.',
    propostaPedagogica: [
      'Base forte de ensino de competição, tendo no planejamento conteúdo dos editais de concursos militares Colégio Naval e EPCAR, abrangendo também as Escolas Técnicas e ENEM como treinamento vestibular.',
      'Durante o ano letivo os alunos terão palestras sobre carreira militar e profissões, além de outros temas importantes.',
      'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física.',
      'As avaliações são trimestrais, compostas de testes, simulados, provas e atividades avaliativas, que incluem projetos pedagógicos.',
      'Essas avaliações são feitas no horário de aula, os calendários são enviados por trimestre contendo todas as atividades do período.',
      'A média é 6,0 e a recuperação é paralela, todo trimestre é aplicada a prova de recuperação, sempre no contra turno.'
    ],
    composicaoGrade: [
      { disciplina: 'Matemática (dividida nas 3 frentes)', tempos: '9 Tempos' },
      { disciplina: 'Inglês', tempos: '2 Tempos' },
      { disciplina: 'Língua Portuguesa', tempos: '3 Tempos' },
      { disciplina: 'Redação', tempos: '2 Tempos' },
      { disciplina: 'Estudo dirigido de Língua Portuguesa', tempos: '2 Tempos' },
      { disciplina: 'Geografia', tempos: '2 Tempos' },
      { disciplina: 'História', tempos: '2 Tempos' },
      { disciplina: 'Física', tempos: '2 Tempos' },
      { disciplina: 'Química', tempos: '2 Tempos' },
      { disciplina: 'Biologia', tempos: '2 Tempos' },
      { disciplina: 'Projeto de vida: Sócio emocional', tempos: '1 Tempo' },
      { 
        disciplina: 'Educação Física no Centro Esporte', 
        tempos: 'Realizada 1 ou 2 vezes por mês no contra turno (existe uma agenda mensal)',
        observacao: 'Alunos do turno manhã: 13h20 às 16h · Alunos do turno da tarde: 9h às 11h20'
      }
    ],
    slug: '1-serie'
  },

  '2-serie-militar': {
    id: '2-serie-militar',
    serie: '2ª Série',
    modalidade: 'Militar',
    titulo: '2ª SÉRIE · MILITAR · ENSINO MÉDIO',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '30 tempos semanais = 6T diários',
    horarios: {
      texto: '7h às 12h20',
      intervalo: 'c/ 20 minutos de intervalo',
      turnos: [
        { label: 'Turno Único (Manhã)', horario: '7h às 12h20' }
      ]
    },
    monitorias: {
      horario: '14h às 15h30',
      frequencia: 'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física.',
      turnos: [
        { label: 'Horário no Contraturno', horario: '14h às 15h30' }
      ]
    },
    seguroEscolar: 'Os alunos do Colégio Progressão recebem seguro escolar, com cobertura de acidentes dentro e fora da escola, atendimento hospitalar, proteção 24h, entre outros benefícios.',
    propostaPedagogica: [
      'Base pedagógica voltada para os concursos militares: EAM / ESA / ESPCEX / EEAR',
      'Proporcionando ao aluno a realização desses concursos, conteúdo trabalhado em 2 anos (2ª e 3ª séries).',
      'Durante o ano letivo os alunos terão palestras sobre carreira militar e profissões, além de outros temas importantes.',
      'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física.',
      'As avaliações são trimestrais, compostas de testes, simulados, provas e atividades avaliativas, que incluem projetos pedagógicos.',
      'A média é 6,0 e a recuperação é paralela, todo trimestre é aplicada a prova de recuperação, sempre no contra turno.'
    ],
    composicaoGrade: [
      { disciplina: 'Matemática I/II/III', tempos: '6 Tempos' },
      { disciplina: 'Inglês', tempos: '3 Tempos' },
      { disciplina: 'Língua Portuguesa', tempos: '3 Tempos' },
      { disciplina: 'Literatura', tempos: '2 Tempos' },
      { disciplina: 'Redação', tempos: '2 Tempos' },
      { disciplina: 'Geografia', tempos: '2 Tempos' },
      { disciplina: 'História', tempos: '3 Tempos' },
      { disciplina: 'Física', tempos: '4 Tempos' },
      { disciplina: 'Química', tempos: '3 Tempos' },
      { disciplina: 'Biologia', tempos: '3 Tempos' },
      { 
        disciplina: 'Educação Física no Centro Esporte', 
        tempos: 'Realizada 1 ou 2 vezes por mês no contra turno (existe uma agenda mensal)',
        observacao: 'Horário: 13h20 às 16h'
      }
    ],
    slug: '2-serie-militar'
  },

  '2-serie-vestibular': {
    id: '2-serie-vestibular',
    serie: '2ª Série',
    modalidade: 'Vestibular',
    titulo: '2ª SÉRIE · VESTIBULAR · ENSINO MÉDIO',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '31 tempos semanais = 6T diários e 1T a mais em 1 dia',
    horarios: {
      texto: '7h às 12h20 · 1 dia na semana saída 13h',
      intervalo: 'c/ 20 minutos de intervalo',
      turnos: [
        { label: 'Horário Padrão', horario: '7h às 12h20' },
        { label: '1 dia na semana', horario: 'Saída às 13h' }
      ]
    },
    monitorias: {
      horario: '14h às 15h30',
      frequencia: 'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física.',
      turnos: [
        { label: 'Horário no Contraturno', horario: '14h às 15h30' }
      ]
    },
    seguroEscolar: 'Os alunos do Colégio Progressão recebem seguro escolar, com cobertura de acidentes dentro e fora da escola, atendimento hospitalar, proteção 24h, entre outros benefícios.',
    propostaPedagogica: [
      'Base pedagógica voltada para o ENEM e VESTIBULARES, proporcionando ao aluno a realização desses concursos, conteúdo trabalhado em 2 anos (2ª e 3ª séries).',
      'Durante o ano letivo os alunos terão palestras sobre carreira e profissões, além de outros temas importantes.',
      'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física.',
      'As avaliações são trimestrais, compostas de testes, simulados, provas e atividades avaliativas, que incluem projetos pedagógicos.',
      'A média é 6,0 e a recuperação é paralela, todo trimestre é aplicada a prova de recuperação, sempre no contra turno.'
    ],
    composicaoGrade: [
      { disciplina: 'Matemática I/II/III', tempos: '6 Tempos' },
      { disciplina: 'Inglês', tempos: '2 Tempos' },
      { disciplina: 'Língua Portuguesa', tempos: '3 Tempos' },
      { disciplina: 'Literatura', tempos: '2 Tempos' },
      { disciplina: 'Redação', tempos: '2 Tempos' },
      { disciplina: 'Filosofia/Sociologia', tempos: '1 Tempo' },
      { disciplina: 'Geografia', tempos: '2 Tempos' },
      { disciplina: 'História', tempos: '3 Tempos' },
      { disciplina: 'Física', tempos: '3 Tempos' },
      { disciplina: 'Química', tempos: '3 Tempos' },
      { disciplina: 'Biologia', tempos: '2 Tempos' },
      { 
        disciplina: 'Educação Física no Centro Esporte', 
        tempos: 'Realizada 1 ou 2 vezes por mês no contra turno (existe uma agenda mensal)',
        observacao: 'Horário: 13h20 às 16h'
      }
    ],
    slug: '2-serie-vestibular'
  },

  '3-serie-militar': {
    id: '3-serie-militar',
    serie: '3ª Série',
    modalidade: 'Militar',
    titulo: '3ª SÉRIE · MILITAR · ENSINO MÉDIO',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '30 tempos semanais = 7T diários',
    horarios: {
      texto: '7h às 12h20',
      intervalo: 'c/ 20 minutos de intervalo',
      turnos: [
        { label: 'Turno Único (Manhã)', horario: '7h às 12h20' }
      ]
    },
    monitorias: {
      horario: '14h às 15h30',
      frequencia: 'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física.',
      turnos: [
        { label: 'Horário no Contraturno', horario: '14h às 15h30' }
      ]
    },
    seguroEscolar: 'Os alunos do Colégio Progressão recebem seguro escolar, com cobertura de acidentes dentro e fora da escola, proteção 24h, entre outros benefícios.',
    propostaPedagogica: [
      'Base pedagógica voltada para os concursos militares: EAM / ESA / ESPCEX / EEAR',
      'Proporcionando ao aluno a realização desses concursos, conteúdo trabalhado em 2 anos (2ª e 3ª séries).',
      'Durante o ano letivo os alunos terão palestras sobre carreira militar e profissões, além de outros temas importantes.',
      'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física.',
      'As avaliações são trimestrais, compostas de testes, simulados, provas e atividades avaliativas, que incluem projetos pedagógicos.',
      'A média é 6,0 e a recuperação é paralela, todo trimestre é aplicada a prova de recuperação, sempre no contra turno.'
    ],
    composicaoGrade: [
      { disciplina: 'Matemática I/II/III', tempos: '6 Tempos' },
      { disciplina: 'Inglês', tempos: '3 Tempos' },
      { disciplina: 'Língua Portuguesa', tempos: '3 Tempos' },
      { disciplina: 'Literatura', tempos: '2 Tempos' },
      { disciplina: 'Redação', tempos: '2 Tempos' },
      { disciplina: 'Geografia', tempos: '2 Tempos' },
      { disciplina: 'História', tempos: '3 Tempos' },
      { disciplina: 'Física', tempos: '4 Tempos' },
      { disciplina: 'Química', tempos: '3 Tempos' },
      { disciplina: 'Biologia', tempos: '3 Tempos' },
      { 
        disciplina: 'Educação Física no Centro Esporte', 
        tempos: 'Realizada 1 ou 2 vezes por mês no contra turno (existe uma agenda mensal)',
        observacao: 'Horário: 13h20 às 16h'
      }
    ],
    slug: '3-serie-militar'
  }
};