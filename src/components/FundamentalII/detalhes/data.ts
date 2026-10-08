export interface HorarioInfo {
  texto: string;
  intervalo: string;
  turnoManha: string;
  turnoTarde: string;
}

export interface MonitoriaInfo {
  frequencia?: string;
  disciplinas?: string;
  turnoManha: string;
  turnoTarde: string;
}

export interface DisciplinaGrade {
  disciplina: string;
  tempos: string;
  observacao?: string;
}

export interface TurmaFundamentalIIDetalhe {
  id: string;
  ano: string;
  titulo: string;
  periodo: string;
  cargaHoraria: string;
  horarios: HorarioInfo;
  monitorias: MonitoriaInfo;
  seguroEscolar: string;
  propostaPedagogica: string[];
  composicaoGrade: DisciplinaGrade[];
  slug: string;
}

export const FUNDAMENTAL_II_DETALHES_DATA: Record<string, TurmaFundamentalIIDetalhe> = {
  '6-ano': {
    id: '6-ano',
    ano: '6º Ano',
    titulo: '6º ANO · ENSINO FUNDAMENTAL II',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '25 tempos semanais = 5T diários',
    horarios: {
      texto: '7h50 às 12h30 · 13h às 17h40',
      intervalo: 'c/ meia hora de intervalo',
      turnoManha: '7h50 às 12h30',
      turnoTarde: '13h às 17h40'
    },
    monitorias: {
      frequencia: 'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Língua Portuguesa',
      disciplinas: 'Matemática e Língua Portuguesa',
      turnoManha: '14h às 15h30',
      turnoTarde: '10h às 11h30'
    },
    seguroEscolar: 'Os alunos do Colégio Progressão recebem seguro escolar, com cobertura de acidentes dentro e fora da escola, atendimento hospitalar, proteção 24h, entre outros benefícios.',
    propostaPedagogica: [
      'Base pedagógica forte de ensino de competição, tendo no planejamento abordagem de conteúdo dos editais de concursos, desse nível de escolaridade: Colégio Militar, Pedro II, CAP/UERJ e Newton Braga;',
      'Durante o ano letivo os alunos terão palestras sobre carreira militar e profissões, além de outros temas importantes;',
      'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Língua Portuguesa;',
      'Além das disciplinas curriculares, os alunos terão Oficina Maker;',
      'As avaliações são trimestrais, compostas de testes, simulados, provas e atividades avaliativas, que incluem projetos pedagógicos. Essas avaliações são feitas no horário de aula, os calendários são enviados por trimestre contendo todas as atividades do período;',
      'Os alunos terão seguro escolar pela seguradora Porto Seguro, tendo os seguintes direitos:',
      'A média é 6,0 e a recuperação é paralela, todo trimestre é aplicada a prova de recuperação, sempre no contra turno.'
    ],
    composicaoGrade: [
      { disciplina: 'Matemática', tempos: '5 Tempos' },
      { disciplina: 'Educação financeira', tempos: '1 Tempo' },
      { disciplina: 'Inglês', tempos: '3 Tempos' },
      { disciplina: 'Redação/Literatura', tempos: '2 Tempos' },
      { disciplina: 'Língua Portuguesa', tempos: '4 Tempos' },
      { disciplina: 'Geografia', tempos: '2 Tempos' },
      { disciplina: 'História', tempos: '2 Tempos' },
      { disciplina: 'Ciências', tempos: '2 Tempos' },
      { disciplina: 'Projeto de vida: Sócio emocional', tempos: '1 Tempo' },
      { disciplina: 'Arte', tempos: '2 Tempos' },
      { disciplina: 'Educação Física', tempos: '1 Tempo' },
      { disciplina: 'Oficina Maker (tempo extra)', tempos: '1 Tempo' }
    ],
    slug: '6-ano'
  },

  '7-ano': {
    id: '7-ano',
    ano: '7º Ano',
    titulo: '7º ANO · ENSINO FUNDAMENTAL II',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '25 tempos semanais = 5T diários',
    horarios: {
      texto: '7h50 às 12h30 · 13h às 17h40',
      intervalo: 'c/ meia hora de intervalo',
      turnoManha: '7h50 às 12h30',
      turnoTarde: '13h às 17h40'
    },
    monitorias: {
      frequencia: 'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Língua Portuguesa',
      disciplinas: 'Matemática e Língua Portuguesa',
      turnoManha: '14h às 15h30',
      turnoTarde: '10h às 11h30'
    },
    seguroEscolar: 'Os alunos do Colégio Progressão recebem seguro escolar, com cobertura de acidentes dentro e fora da escola, atendimento hospitalar, proteção 24h, entre outros benefícios.',
    propostaPedagogica: [
      'Base pedagógica forte de ensino de competição, tendo no planejamento abordagem de conteúdo dos editais de concursos, desse nível de escolaridade: Colégio Militar, Pedro II, CAP/UERJ e Newton Braga;',
      'Durante o ano letivo os alunos terão palestras sobre carreira militar e profissões, além de outros temas importantes;',
      'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Língua Portuguesa;',
      'Além das disciplinas curriculares, os alunos terão Oficina Maker;',
      'As avaliações são trimestrais, compostas de testes, simulados, provas e atividades avaliativas, que incluem projetos pedagógicos. Essas avaliações são feitas no horário de aula, os calendários são enviados por trimestre contendo todas as atividades do período;',
      'Os alunos terão seguro escolar pela seguradora Porto Seguro, tendo os seguintes direitos:',
      'A média é 6,0 e a recuperação é paralela, todo trimestre é aplicada a prova de recuperação, sempre no contra turno.'
    ],
    composicaoGrade: [
      { disciplina: 'Matemática', tempos: '5 Tempos' },
      { disciplina: 'Educação financeira', tempos: '1 Tempo' },
      { disciplina: 'Inglês', tempos: '3 Tempos' },
      { disciplina: 'Redação/Literatura', tempos: '2 Tempos' },
      { disciplina: 'Língua Portuguesa', tempos: '4 Tempos' },
      { disciplina: 'Geografia', tempos: '2 Tempos' },
      { disciplina: 'História', tempos: '2 Tempos' },
      { disciplina: 'Ciências', tempos: '2 Tempos' },
      { disciplina: 'Projeto de vida: Sócio emocional', tempos: '1 Tempo' },
      { disciplina: 'Arte', tempos: '2 Tempos' },
      { disciplina: 'Educação Física', tempos: '1 Tempo' },
      { disciplina: 'Oficina Maker (tempo extra)', tempos: '1 Tempo' }
    ],
    slug: '7-ano'
  },

  '8-ano': {
    id: '8-ano',
    ano: '8º Ano',
    titulo: '8º ANO · ENSINO FUNDAMENTAL II',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '25 tempos semanais = 5T diários',
    horarios: {
      texto: '7h50 às 12h30 · 13h às 17h40',
      intervalo: 'c/ meia hora de intervalo',
      turnoManha: '7h50 às 12h30',
      turnoTarde: '13h às 17h40'
    },
    monitorias: {
      frequencia: 'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física',
      disciplinas: 'Matemática e Física',
      turnoManha: '14h às 15h30',
      turnoTarde: '10h às 11h30'
    },
    seguroEscolar: 'Os alunos do Colégio Progressão recebem seguro escolar, com cobertura de acidentes dentro e fora da escola, atendimento hospitalar, proteção 24h, entre outros benefícios.',
    propostaPedagogica: [
      'Base forte de ensino de competição, preparando o aluno para o 9º ano forte, tendo no planejamento conteúdos dos editais de concursos desse nível de escolaridade: Colégio Militar, Pedro II, CAP/UERJ e Newton Braga;',
      'Durante o ano letivo os alunos terão palestras sobre carreira militar e profissões, além de outros temas importantes;',
      'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física;',
      'As avaliações são trimestrais, compostas de testes, simulados, provas e atividades avaliativas, que incluem projetos pedagógicos. Essas avaliações são feitas no horário de aula, os calendários são enviados por trimestre contendo todas as atividades do período;',
      'A média é 6,0 e a recuperação é paralela, todo trimestre é aplicada a prova de recuperação, sempre no contra turno.'
    ],
    composicaoGrade: [
      { disciplina: 'Matemática (dividida nas 3 frentes)', tempos: '6 Tempos' },
      { disciplina: 'Educação financeira', tempos: '1 Tempo' },
      { disciplina: 'Inglês', tempos: '3 Tempos' },
      { disciplina: 'Redação/Literatura', tempos: '2 Tempos' },
      { disciplina: 'Língua Portuguesa', tempos: '4 Tempos' },
      { disciplina: 'Geografia', tempos: '2 Tempos' },
      { disciplina: 'História', tempos: '2 Tempos' },
      { disciplina: 'Ciências: Física e Química', tempos: '2 Tempos' },
      { disciplina: 'Projeto de vida: Sócio emocional', tempos: '2 Tempos' },
      { disciplina: 'Arte', tempos: '1 Tempo' },
      { 
        disciplina: 'Educação Física no Centro Esporte', 
        tempos: 'Realizada 1 ou 2 vezes por mês no contra turno (existe uma agenda mensal)',
        observacao: 'Alunos do turno manhã: 13h20 às 16h · Alunos do turno da tarde: 9h às 11h20'
      }
    ],
    slug: '8-ano'
  },

  '9-ano': {
    id: '9-ano',
    ano: '9º Ano',
    titulo: '9º ANO · ENSINO FUNDAMENTAL II',
    periodo: '02/02/27 a 17/12/27',
    cargaHoraria: '30 tempos semanais = 6T diários',
    horarios: {
      texto: '7h às 12h20 · 13h às 18h',
      intervalo: 'c/ 20 minutos de intervalo',
      turnoManha: '7h às 12h20',
      turnoTarde: '13h às 18h'
    },
    monitorias: {
      frequencia: 'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física',
      disciplinas: 'Matemática e Física',
      turnoManha: '14h às 15h30',
      turnoTarde: '10h às 11h30'
    },
    seguroEscolar: 'Os alunos do Colégio Progressão recebem seguro escolar, com cobertura de acidentes dentro e fora da escola, atendimento hospitalar, proteção 24h, entre outros benefícios.',
    propostaPedagogica: [
      'Base forte de ensino de competição, tendo no planejamento conteúdo dos editais de concursos militares Colégio Naval e EPCAR, abrangendo também as Escolas Técnicas e ENEM como treinamento vestibular. Durante o ano letivo os alunos terão palestras sobre carreira militar e profissões, além de outros temas importantes;',
      'Monitoria no contra turno 2 vezes por semana, GRATUITAMENTE: Matemática e Física;',
      'As avaliações são trimestrais, compostas de testes, simulados, provas e atividades avaliativas, que incluem projetos pedagógicos. Essas avaliações são feitas no horário de aula, os calendários são enviados por trimestre contendo todas as atividades do período;',
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
    slug: '9-ano'
  }
};
