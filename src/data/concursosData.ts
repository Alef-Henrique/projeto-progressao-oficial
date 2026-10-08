export type ConcursoCategory = 'Todos' | 'Segurança Pública' | 'Administrativo' | 'Área Federal' | 'Estatais' | 'Trânsito';

export interface ConcursoRequisito {
  titulo: string;
  descricao: string;
}

export interface ConcursoEtapa {
  numero: string;
  titulo: string;
  descricao: string;
}

export interface ConcursoDiferencial {
  titulo: string;
  descricao: string;
}

export interface ConcursoCargoDetalhe {
  cargo: string;
  escolaridade: string;
  remuneracao: string;
  atribuicao: string;
}

export interface ConcursoInscricoesBloco {
  periodo: string;
  taxa: string;
  pagamentoAte: string;
  situacao: string;
}

export interface ConcursoProvaObjetivaBloco {
  data: string;
  duracao: string;
  totalQuestoes: string;
  distribuicao: { materia: string; quantidade: string }[];
  criterioEliminacao: string;
}

export interface ConcursoTurmaInfo {
  nome: string;
  subtitulo?: string;
  edital?: string;
  periodo?: string;
  carga?: string;
  frequencia?: string;
  horario?: string;
  areasAtendidas?: string[];
  conhecimentosBasicos?: string[];
  conhecimentosEspecificos?: string[];
}

export interface ConcursoPublico {
  id: string;
  nome: string;
  nomeCompleto: string;
  descricaoCurta: string;
  categoria: ConcursoCategory[];
  imagem: string;
  escolaridade: string;
  destaqueEscolaridade: 'Nível Médio' | 'Nível Superior' | 'Nível Médio / Superior' | 'Nível Técnico / Superior';
  remuneracaoInicial: string;
  remuneracaoFinal: string;
  remuneracaoResumo: string;
  jornada?: string;
  idade?: string;
  nacionalidade?: string;
  sexo?: string;
  orgao: string;
  instituicao?: string;
  banca?: string;
  ultimoEdital?: string;
  ultimoEditalLabel?: string;
  vagas?: string;
  previsaoProva?: string;
  dataProva?: string;
  situacao?: string;
  statusTipo?: 'aberto' | 'previsto' | 'encerrado';
  requisitoAdicional?: string;
  atribuicoes?: string | string[];
  disciplinasTitulo?: string;
  disciplinas?: string[];
  cargo: string;
  cargoLabel?: string;
  sobre: string;
  requisitos: ConcursoRequisito[];
  etapas: ConcursoEtapa[];
  diferenciais: ConcursoDiferencial[];
  perfil: string[];
  cargosMultiplos?: ConcursoCargoDetalhe[];
  observacao?: string;
  fonte: string;
  tagCard?: string;
  inscricoesBloco?: ConcursoInscricoesBloco;
  provaObjetivaBloco?: ConcursoProvaObjetivaBloco;
  regime?: string;
  areasAtuacao?: string;
  beneficios?: string;
  inscricoesPeriodo?: string;
  turmasPreparatorias?: ConcursoTurmaInfo[];
}

export const CONCURSOS_PUBLICOS_DATA: ConcursoPublico[] = [
  {
    id: 'pmerj',
    nome: 'PMERJ',
    nomeCompleto: 'Polícia Militar do Estado do Rio de Janeiro',
    descricaoCurta: 'Polícia Militar do Estado do Rio de Janeiro — Segurança ostensiva e ordem pública estadual.',
    categoria: ['Segurança Pública'],
    imagem: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Ensino Médio completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 5.233,88 (após formação) / R$ 2.956,41 (durante o curso)',
    remuneracaoFinal: 'R$ 9.800,00+',
    remuneracaoResumo: 'R$ 2.956,41 durante o curso de formação e R$ 5.233,88 após a formação, conforme o edital de 2024. Confirmar atualizações antes de publicar.',
    jornada: 'Regime de escala (conforme normas da corporação)',
    idade: 'De 18 a 32 anos, conforme os critérios do edital',
    nacionalidade: 'Brasileira (ou portuguesa com direitos civis reconhecidos)',
    sexo: 'Ambos os sexos (masculino e feminino com ampla concorrência)',
    orgao: 'Governo do Estado do Rio de Janeiro',
    instituicao: 'Polícia Militar do Estado do Rio de Janeiro (PMERJ)',
    banca: 'Fundação Getulio Vargas (FGV)',
    ultimoEdital: '2024, com retificações posteriores',
    vagas: '2.000 no concurso de Soldado de 2024',
    previsaoProva: 'Edital 2024 (FGV)',
    situacao: '2.000 vagas (Edital 2024 com retificações FGV)',
    statusTipo: 'previsto',
    tagCard: 'aguardando novo edital',
    requisitoAdicional: 'Categoria B ou superior, conforme o edital',
    atribuicoes: 'Policiamento ostensivo, prevenção de crimes, preservação da ordem pública e atendimento à população.',
    disciplinas: [
      'Língua Portuguesa',
      'Matemática Básica',
      'Noções de Direitos Humanos',
      'Direito Administrativo',
      'Direito Constitucional',
      'Direito Penal e Processual Penal',
      'Legislação específica e outras matérias previstas no edital'
    ],
    cargo: 'Soldado Policial Militar',
    sobre: 'Concurso da Polícia Militar do RJ (PMERJ) promovido pelo Governo do Estado do Rio de Janeiro. A carreira de Soldado Policial Militar é responsável pelo policiamento ostensivo, prevenção de crimes, preservação da ordem pública e atendimento direto à população.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino Médio completo com certificado devidamente reconhecido.' },
      { titulo: 'Faixa Etária', descricao: 'De 18 a 32 anos, conforme os critérios oficiais do edital.' },
      { titulo: 'Carteira de Habilitação (CNH)', descricao: 'Categoria B ou superior, conforme as exigências do edital.' },
      { titulo: 'Aptidão Física e Mental', descricao: 'Aprovação em todas as fases médicas, físicas e psicológicas.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Objetiva', descricao: 'Avaliação de conhecimentos com questões de Língua Portuguesa, Matemática Básica, Direitos Humanos, Direito Administrativo, Constitucional, Penal, Processual Penal e Legislação específica.' },
      { numero: '02', titulo: 'Prova Discursiva', descricao: 'Elaboração de redação discursiva conforme o edital da FGV.' },
      { numero: '03', titulo: 'Teste de Aptidão Física (TAF)', descricao: 'Testes de condicionamento físico para aferir aptidão ao serviço policial militar.' },
      { numero: '04', titulo: 'Avaliação Psicológica', descricao: 'Exames de perfil psicológico e aptidão comportamental para porte de arma e atividade policial.' },
      { numero: '05', titulo: 'Exames de Saúde', descricao: 'Avaliação médica, odontológica e exames laboratoriais e toxicológicos completos.' },
      { numero: '06', titulo: 'Investigação Social', descricao: 'Verificação da vida pregressa e idoneidade moral do candidato.' }
    ],
    diferenciais: [
      { titulo: 'Estabilidade Estatutária', descricao: 'Garantia de emprego público regido pelo Estatuto dos Policiais Militares do RJ.' },
      { titulo: 'Plano de Saúde Exclusivo', descricao: 'Acesso completo ao Hospital Central da Polícia Militar (HCPM) e rede de atendimento da corporação.' },
      { titulo: 'Progressão na Carreira Militar', descricao: 'Ascensão contínua nos quadros de Praças da Polícia Militar do RJ.' },
      { titulo: 'Remuneração Atrativa', descricao: 'R$ 2.956,41 durante a formação e R$ 5.233,88 após conclusão do curso de Soldado.' }
    ],
    perfil: [
      'Disciplina, prontidão e respeito à hierarquia militar',
      'Vocação para o policiamento ostensivo e atendimento à população',
      'Resistência física e autocontrole emocional sob pressão'
    ],
    observacao: 'Remuneração de R$ 2.956,41 durante o curso de formação e R$ 5.233,88 após a formação, conforme o edital de 2024. Confirmar atualizações antes de publicar.',
    fonte: 'Governo do Estado do Rio de Janeiro / PMERJ / FGV.'
  },
  {
    id: 'inss',
    nome: 'INSS',
    nomeCompleto: 'Concurso do INSS',
    descricaoCurta: 'Atendimento ao público, análise e instrução de processos, orientação sobre benefícios previdenciários e assistência social.',
    categoria: ['Administrativo', 'Área Federal'],
    imagem: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Ensino Médio completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 5.905,79',
    remuneracaoFinal: 'R$ 9.109,20+',
    remuneracaoResumo: 'R$ 5.905,79 no edital de 2022, incluindo gratificações e auxílio-alimentação previstos na época. Confirmar o valor atual antes da divulgação',
    jornada: '40 horas semanais',
    idade: 'Mínimo de 18 anos completos na data da posse no cargo público',
    nacionalidade: 'Brasileira nata, naturalizada ou portuguesa equiparada por lei',
    sexo: 'Ambos os sexos (concorrência universal sem distinção de gênero)',
    orgao: 'Instituto Nacional do Seguro Social (INSS)',
    instituicao: 'Instituto Nacional do Seguro Social (INSS)',
    cargo: 'Técnico do Seguro Social',
    banca: 'Cebraspe',
    ultimoEdital: '2022, publicado em 12 de setembro',
    vagas: '1.000 vagas imediatas, além de cadastro de reserva',
    previsaoProva: 'Último Edital 2022',
    situacao: 'O concurso de 2022 teve a validade prorrogada em 2024. Para informar um novo concurso, é preciso acompanhar as publicações oficiais',
    statusTipo: 'previsto',
    tagCard: 'aguardando novo edital',
    requisitoAdicional: 'Sem exigência de CNH; sem teste de aptidão física (TAF)',
    atribuicoes: 'Atendimento ao público, análise e instrução de processos, orientação sobre benefícios previdenciários e assistência social e atividades administrativas',
    disciplinasTitulo: 'Disciplinas',
    disciplinas: [
      'Língua Portuguesa',
      'Ética no Serviço Público',
      'Direito Constitucional',
      'Direito Administrativo',
      'Informática',
      'Raciocínio Lógico-Matemático',
      'Direito Previdenciário',
      'Seguridade Social'
    ],
    sobre: 'Concurso do INSS para o cargo de Técnico do Seguro Social, com atribuições de atendimento ao público, análise e instrução de processos, orientação sobre benefícios previdenciários e assistência social e atividades administrativas.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino Médio completo.' },
      { titulo: 'Jornada de Trabalho', descricao: '40 horas semanais.' },
      { titulo: 'Atribuições Principais', descricao: 'Atendimento ao público, análise e instrução de processos, orientação sobre benefícios previdenciários e assistência social e atividades administrativas.' }
    ],
    etapas: [
      {
        numero: '01',
        titulo: 'Etapas',
        descricao: 'Prova objetiva e curso de formação, conforme o edital.'
      }
    ],
    diferenciais: [
      { titulo: 'Estabilidade Federal (Lei 8.112/90)', descricao: 'Vínculo estatutário estável com segurança profissional no serviço público federal.' },
      { titulo: 'Remuneração Inicial Competitiva', descricao: 'R$ 5.905,79 no edital de 2022, incluindo gratificações e auxílio-alimentação previstos na época.' },
      { titulo: 'Atuação de Relevância Social', descricao: 'Atendimento ao público e orientação sobre benefícios previdenciários e assistência social.' }
    ],
    perfil: [
      'Atendimento qualificado ao público e orientação humanizada',
      'Análise e instrução técnica de processos administrativos',
      'Conhecimento das normas de Direito Previdenciário e Seguridade Social'
    ],
    observacao: 'R$ 5.905,79 no edital de 2022, incluindo gratificações e auxílio-alimentação previstos na época. Confirmar o valor atual antes da divulgação. O concurso de 2022 teve a validade prorrogada em 2024.',
    fonte: 'Instituto Nacional do Seguro Social (INSS) / Cebraspe.'
  },
  {
    id: 'prf-administrativo',
    nome: 'PRF – Agente Administrativo',
    nomeCompleto: 'Concurso de Agente Administrativo da PRF',
    descricaoCurta: 'Executar atividades administrativas e prestar apoio técnico-administrativo aos setores da PRF.',
    categoria: ['Administrativo', 'Área Federal'],
    imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Ensino Médio completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 6.638,87',
    remuneracaoFinal: 'R$ 8.500,00+',
    remuneracaoResumo: 'R$ 6.638,87, valor divulgado em 2025, incluindo auxílio-alimentação. Confirmar o valor vigente antes da publicação',
    jornada: '40 horas semanais',
    orgao: 'Ministério da Justiça e Segurança Pública',
    instituicao: 'Polícia Rodoviária Federal (PRF)',
    cargo: 'Agente Administrativo',
    banca: 'Cebraspe',
    ultimoEdital: '2014 (último concurso realizado em 2014)',
    vagas: '216 no concurso de 2014',
    previsaoProva: 'Último Edital 2014',
    situacao: 'Último concurso realizado em 2014',
    statusTipo: 'previsto',
    tagCard: 'aguardando novo edital',
    atribuicoes: 'Executar atividades administrativas e prestar apoio técnico-administrativo aos setores da PRF',
    disciplinasTitulo: 'Disciplinas do Último Edital',
    disciplinas: [
      'Língua Portuguesa',
      'Ética no Serviço Público',
      'Noções de Direito Constitucional',
      'Noções de Direito Administrativo',
      'Noções de Administração',
      'Arquivologia',
      'Informática',
      'Legislação relativa à PRF'
    ],
    sobre: 'Concurso de Agente Administrativo da PRF, órgão integrante do Ministério da Justiça e Segurança Pública e Polícia Rodoviária Federal (PRF). A carreira destina-se a candidatos com Ensino Médio completo com a missão fundamental de executar atividades administrativas e prestar apoio técnico-administrativo a todos os setores operacionais e institucionais da corporação.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino Médio completo.' },
      { titulo: 'Jornada de Trabalho', descricao: '40 horas semanais.' },
      { titulo: 'Atribuições Principais', descricao: 'Executar atividades administrativas e prestar apoio técnico-administrativo aos setores da PRF.' }
    ],
    etapas: [
      {
        numero: '01',
        titulo: 'Prova Objetiva',
        descricao: 'Prova objetiva, conforme o edital de 2014.'
      }
    ],
    diferenciais: [
      { titulo: 'Estabilidade Federal (Lei 8.112/90)', descricao: 'Vínculo estatutário estável com segurança profissional no serviço público federal.' },
      { titulo: 'Remuneração Inicial Competitiva', descricao: 'R$ 6.638,87, valor divulgado em 2025, incluindo auxílio-alimentação.' },
      { titulo: 'Atuação na Área Administrativa', descricao: 'Executar atividades administrativas e prestar apoio técnico-administrativo aos setores da PRF em ambiente corporativo.' }
    ],
    perfil: [
      'Executar atividades administrativas e rotinas corporativas com precisão',
      'Prestar apoio técnico-administrativo com presteza aos setores da corporação',
      'Organização documental, atenção a prazos e sistemas informatizados'
    ],
    observacao: 'R$ 6.638,87, valor divulgado em 2025, incluindo auxílio-alimentação. Confirmar o valor vigente antes da publicação.',
    fonte: 'Ministério da Justiça e Segurança Pública / Polícia Rodoviária Federal (PRF) / Cebraspe.'
  },
  {
    id: 'prf-agente-federal',
    nome: 'PRF – Policial Rodoviário Federal',
    nomeCompleto: 'Concurso da Polícia Rodoviária Federal',
    descricaoCurta: 'Fiscalização de trânsito nas rodovias federais, prevenção e combate à criminalidade e atendimento a acidentes.',
    categoria: ['Segurança Pública', 'Área Federal'],
    imagem: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Ensino superior completo em qualquer área, inclusive tecnólogo reconhecido pelo MEC',
    destaqueEscolaridade: 'Nível Superior',
    remuneracaoInicial: 'R$ 12.253,84',
    remuneracaoFinal: 'R$ 18.000,00+',
    remuneracaoResumo: 'R$ 12.253,84 em 2026, conforme a tabela legal vigente a partir de maio de 2026.',
    jornada: '40 horas semanais',
    idade: 'Mínimo de 18 anos; sem limite máximo específico nas regras gerais consultadas',
    nacionalidade: 'Brasileira nata ou naturalizada',
    sexo: 'Ambos os sexos (concorrência paritária)',
    orgao: 'Ministério da Justiça e Segurança Pública',
    instituicao: 'Polícia Rodoviária Federal (PRF)',
    cargo: 'Policial Rodoviário Federal',
    banca: 'Cebraspe',
    ultimoEdital: '2021',
    vagas: '1.500 no concurso de 2021',
    previsaoProva: 'Outubro/26',
    dataProva: 'Outubro/26',
    situacao: 'Previsto para 2026',
    statusTipo: 'previsto',
    tagCard: 'aguardando novo edital',
    requisitoAdicional: 'CNH, no mínimo categoria B, conforme o edital',
    atribuicoes: 'Fiscalização de trânsito nas rodovias federais, prevenção e combate à criminalidade, atendimento a acidentes e promoção da segurança viária.',
    disciplinas: [
      'Língua Portuguesa',
      'Raciocínio Lógico-Matemático',
      'Informática',
      'Noções de Física',
      'Ética no Serviço Público',
      'Geopolítica Brasileira',
      'Legislação de Trânsito (CTB)',
      'Direito Administrativo',
      'Direito Constitucional',
      'Direito Penal e Processual Penal',
      'Legislação Especial',
      'Direitos Humanos'
    ],
    sobre: 'O Concurso da Polícia Rodoviária Federal é uma das oportunidades mais prestigiadas da segurança pública da União. O Policial Rodoviário Federal atua na fiscalização de trânsito nas rodovias federais, prevenção e combate à criminalidade, atendimento a acidentes e promoção da segurança viária em todo o país.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino superior completo em qualquer área, inclusive tecnólogo reconhecido pelo MEC.' },
      { titulo: 'Idade', descricao: 'Mínimo de 18 anos; sem limite máximo específico nas regras gerais consultadas.' },
      { titulo: 'Requisito Adicional (CNH)', descricao: 'CNH, no mínimo categoria B, conforme o edital.' },
      { titulo: 'Jornada de Trabalho', descricao: '40 horas semanais.' },
      { titulo: 'Idoneidade e Saúde', descricao: 'Quitação com obrigações eleitorais e militares, sem antecedentes criminais desabonadores e aptidão nos exames de saúde e psicológico.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Objetiva e Discursiva', descricao: 'Exame de conhecimentos teóricos e prova discursiva aplicadas pela banca Cebraspe.' },
      { numero: '02', titulo: 'Teste de Aptidão Física (TAF)', descricao: 'Avaliação de condicionamento físico com testes de corrida, flexão e impulsão conforme o edital.' },
      { numero: '03', titulo: 'Avaliação de Saúde', descricao: 'Exames médicos, laboratoriais e clínicos para comprovação de higidez física.' },
      { numero: '04', titulo: 'Avaliação Psicológica', descricao: 'Verificação do perfil profissiográfico compatível com o cargo policial.' },
      { numero: '05', titulo: 'Avaliação de Títulos', descricao: 'Pontuação complementar por títulos acadêmicos e experiência relevante.' },
      { numero: '06', titulo: 'Curso de Formação Profissional', descricao: 'Treinamento intensivo da Academia Nacional da PRF com bolsa e caráter eliminatório.' }
    ],
    diferenciais: [
      { titulo: 'Remuneração Inicial de R$ 12.253,84', descricao: 'Remuneração inicial de R$ 12.253,84 em 2026, conforme a tabela legal vigente a partir de maio de 2026.' },
      { titulo: 'Atribuições de Alta Relevância', descricao: 'Fiscalização de trânsito nas rodovias federais, prevenção e combate à criminalidade, atendimento a acidentes e promoção da segurança viária.' },
      { titulo: 'Estabilidade Federal', descricao: 'Carreira de Estado regida pelo regime jurídico único federal com estabilidade e plano de progressão.' },
      { titulo: 'Atuação Nacional', descricao: 'Presença em rodovias federais de todos os estados brasileiros com moderna infraestrutura operacional.' }
    ],
    perfil: [
      'Fiscalização de trânsito nas rodovias federais',
      'Prevenção e combate à criminalidade',
      'Atendimento a acidentes e segurança viária',
      'Disciplina, preparo físico e responsabilidade'
    ],
    observacao: 'Dados de remuneração, vagas, banca (Cebraspe) e etapas em conformidade com o edital do Concurso da Polícia Rodoviária Federal.',
    fonte: 'Ministério da Justiça e Segurança Pública / Polícia Rodoviária Federal (PRF).'
  },
  {
    id: 'pcerj',
    nome: 'PCERJ – Polícia Civil',
    nomeCompleto: 'Concurso da Polícia Civil do RJ',
    descricaoCurta: 'Investigação criminal, cumprimento de diligências, coleta de informações e elaboração de procedimentos policiais.',
    categoria: ['Segurança Pública'],
    imagem: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Ensino superior, com requisitos específicos para cada cargo',
    destaqueEscolaridade: 'Nível Superior',
    remuneracaoInicial: 'Variava conforme o cargo (Inspetor: R$ 6.380,29)',
    remuneracaoFinal: 'R$ 18.000,00+',
    remuneracaoResumo: 'Variava conforme o cargo. No edital de 2021 para Inspetor de Polícia, a remuneração inicial era de R$ 6.380,29',
    orgao: 'Governo do Estado do Rio de Janeiro',
    instituicao: 'Polícia Civil do Estado do Rio de Janeiro (PCERJ)',
    cargo: 'Inspetor de Polícia (denominação do edital de 2021), Investigador, Perito Criminal, Perito Legista, Delegado e outros cargos previstos em editais específicos',
    cargoLabel: 'Principais cargos',
    banca: 'Fundação Getulio Vargas (FGV), no concurso de 2021',
    ultimoEdital: '2021, com editais para diferentes cargos policiais',
    ultimoEditalLabel: 'Último concurso',
    vagas: 'Variaram conforme o cargo e o edital de 2021',
    previsaoProva: 'Último Concurso 2021',
    situacao: '2021, com editais para diferentes cargos policiais',
    statusTipo: 'previsto',
    tagCard: 'aguardando novo edital',
    atribuicoes: 'Investigação criminal, cumprimento de diligências, coleta de informações, elaboração de procedimentos policiais e atividades periciais ou jurídicas, conforme o cargo',
    disciplinas: [
      'Língua Portuguesa',
      'Direito Penal',
      'Direito Processual Penal',
      'Direito Constitucional',
      'Direito Administrativo',
      'Legislação específica e conhecimentos especializados, conforme o cargo'
    ],
    sobre: 'Concurso da Polícia Civil do Estado do Rio de Janeiro (PCERJ), órgão do Governo do Estado do Rio de Janeiro. A instituição é responsável pelas funções de polícia judiciária e investigação criminal, incluindo o cumprimento de diligências, coleta de informações periciais e repressão a infrações penais.',
    requisitos: [
      { titulo: 'Escolaridade Exigida', descricao: 'Ensino superior, com requisitos específicos para cada cargo.' },
      { titulo: 'Principais Cargos', descricao: 'Inspetor de Polícia (denominação do edital de 2021), Investigador, Perito Criminal, Perito Legista, Delegado e outros cargos previstos em editais específicos.' },
      { titulo: 'Atribuições Principais', descricao: 'Investigação criminal, cumprimento de diligências, coleta de informações, elaboração de procedimentos policiais e atividades periciais ou jurídicas, conforme o cargo.' }
    ],
    etapas: [
      {
        numero: '01',
        titulo: 'Prova Objetiva, Prova Discursiva ou Outras Avaliações Específicas',
        descricao: 'Prova objetiva, prova discursiva ou outras avaliações específicas, conforme o cargo e o edital.'
      },
      {
        numero: '02',
        titulo: 'Exames de Saúde',
        descricao: 'Exames de saúde clínicos e laboratoriais, conforme o edital.'
      },
      {
        numero: '03',
        titulo: 'Teste de Capacidade Física',
        descricao: 'Teste de capacidade física eliminatório, conforme o edital.'
      },
      {
        numero: '04',
        titulo: 'Avaliação Psicológica',
        descricao: 'Avaliação psicológica, conforme o edital.'
      }
    ],
    diferenciais: [
      { titulo: 'Estabilidade Estatutária Estadual', descricao: 'Carreira pública de Estado regida pelo regime estatutário dos servidores civis do Estado do Rio de Janeiro.' },
      { titulo: 'Diversidade de Cargos Especializados', descricao: 'Oportunidades para Inspetor de Polícia, Investigador, Peritos e Delegado, com atuação técnica, investigativa ou jurídica.' },
      { titulo: 'Atribuições de Investigação Criminal', descricao: 'Investigação criminal, cumprimento de diligências, coleta de informações e elaboração de procedimentos policiais.' }
    ],
    perfil: [
      'Investigação criminal, cumprimento de diligências e coleta de informações',
      'Elaboração de procedimentos policiais e atividades periciais ou jurídicas',
      'Rigor técnico, atenção a detalhes e compromisso com a legalidade'
    ],
    observacao: 'Variava conforme o cargo. No edital de 2021 para Inspetor de Polícia, a remuneração inicial era de R$ 6.380,29.',
    fonte: 'Governo do Estado do Rio de Janeiro / Polícia Civil do Estado do Rio de Janeiro (PCERJ) / Fundação Getulio Vargas (FGV).'
  },
  {
    id: 'gm-sao-goncalo',
    nome: 'GM São Gonçalo — Guarda Municipal',
    nomeCompleto: 'Concurso da Guarda Municipal de São Gonçalo 2026/2027',
    descricaoCurta: 'Guarda Municipal de São Gonçalo — Segurança pública municipal, ordem urbana e proteção à comunidade gonçalense.',
    categoria: ['Segurança Pública'],
    imagem: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Ensino médio completo, com diploma reconhecido pelo MEC',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 3.172,96',
    remuneracaoFinal: 'R$ 5.000,00+',
    remuneracaoResumo: 'Salário inicial: R$ 3.172,96. Adicionais: Periculosidade de 30%, Auxílio-transporte e Gratificação de R$ 1.000,00 por porte de arma, quando aplicável. Os adicionais dependem das regras de concessão e não devem ser somados automaticamente ao vencimento.',
    jornada: 'Escala e regime estabelecidos conforme a legislação municipal e escala operacional',
    idade: 'Mínimo de 18 anos completos na investidura do cargo',
    nacionalidade: 'Brasileira nata ou naturalizada',
    sexo: 'Ambos os sexos (ampla concorrência)',
    orgao: 'Prefeitura de São Gonçalo (RJ)',
    instituicao: 'Guarda Municipal de São Gonçalo / Prefeitura de São Gonçalo (RJ)',
    cargo: 'Guarda Municipal Nível II',
    banca: 'Instituto SELECON',
    ultimoEdital: 'Edital 2026/2027',
    vagas: '100 imediatas + 500 cadastro de reserva',
    previsaoProva: 'PROVA 24/01/27',
    dataProva: '24/01/2027',
    situacao: 'Inscrições em andamento',
    statusTipo: 'aberto',
    tagCard: 'prova dia 24/01/2027',
    requisitoAdicional: 'CNH categoria AB ou superior, além dos demais requisitos do edital',
    atribuicoes: 'Segurança pública comunitária, vigilância e proteção dos bens, serviços e instalações municipais de São Gonçalo, apoio à fiscalização e trânsito, atendimento preventivo e proteção aos cidadãos.',
    disciplinas: [
      '15 — Língua Portuguesa',
      '20 — Noções de Direito',
      '15 — Legislação Extravagante',
      '20 — Conhecimentos Específicos',
      '10 — Informática'
    ],
    sobre: 'O Concurso da Guarda Municipal de São Gonçalo 2026/2027 oferece 100 vagas imediatas e 500 para cadastro de reserva para o cargo de Guarda Municipal Nível II, sob organização do Instituto SELECON. A carreira conta com remuneração inicial de R$ 3.172,96 somada a adicionais (periculosidade de 30%, auxílio-transporte e gratificação de R$ 1.000,00 por porte de arma quando aplicável). A Prova Objetiva está agendada para 24/01/2027.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino médio completo, com diploma devidamente reconhecido pelo Ministério da Educação (MEC).' },
      { titulo: 'Habilitação (CNH)', descricao: 'Possuir Carteira Nacional de Habilitação (CNH) no mínimo na categoria "AB" ou superior.' },
      { titulo: 'Idade', descricao: 'Ter idade mínima de 18 anos completos na data da investidura no cargo.' },
      { titulo: 'Aptidão Física e Mental', descricao: 'Aprovação nas etapas de TAF, exame antropométrico, avaliação médica e avaliação psicológica.' },
      { titulo: 'Idoneidade Moral', descricao: 'Aprovação na Pesquisa Social e comprovação de antecedentes idôneos.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Inscrições', descricao: 'Período de 28/09/2026 a 18/11/2026. Taxa de R$ 95,18 com pagamento até 19/11/2026.' },
      { numero: '02', titulo: 'Prova Objetiva (24/01/2027)', descricao: '80 questões (Duração de 4 horas): 15 Língua Portuguesa, 20 Noções de Direito, 15 Legislação Extravagante, 20 Conhecimentos Específicos e 10 Informática. Eliminatório se fizer menos de 50% de acertos ou zerar qualquer disciplina.' },
      { numero: '03', titulo: 'TAF e Exame Antropométrico (27 e 28/02/2027)', descricao: 'Testes de capacidade física e avaliação antropométrica dos candidatos classificados.' },
      { numero: '04', titulo: 'Avaliação Médica (10 e 11/04/2027)', descricao: 'Exames clínicos e laboratoriais para comprovação de aptidão e higidez física.' },
      { numero: '05', titulo: 'Avaliação Psicológica (02/05/2027)', descricao: 'Perfil psicológico e psicotécnico para o desempenho das atribuições e porte de arma.' },
      { numero: '06', titulo: 'Pesquisa Social', descricao: 'Investigação de vida pregressa e conduta moral no âmbito civil e criminal.' },
      { numero: '07', titulo: 'Curso de Formação e Convocação', descricao: 'Curso de formação profissional da Guarda Municipal com convocação a partir de 22/06/2027.' }
    ],
    diferenciais: [
      { titulo: '100 Vagas Imediatas + 500 CR', descricao: 'Grande oportunidade na Região Metropolitana do RJ com ampla convocação.' },
      { titulo: 'Adicionais Atrativos', descricao: 'Periculosidade de 30%, auxílio-transporte e gratificação de R$ 1.000,00 por porte de arma, quando aplicável.' },
      { titulo: 'Banca SELECON Consolidada', descricao: 'Edital com conteúdos objetivos e cronograma bem estruturado.' },
      { titulo: 'Estabilidade Municipal', descricao: 'Ingresso no regime estatutário do município de São Gonçalo.' }
    ],
    perfil: [
      'Vocação para a segurança comunitária e prevenção de delitos',
      'Condicionamento físico e preparo disciplinar',
      'Respeito aos Direitos Humanos e atendimento ao cidadão',
      'Boa capacidade de raciocínio, ética e autocontrole'
    ],
    observacao: 'Os adicionais dependem das regras de concessão e não devem ser somados automaticamente ao vencimento.',
    fonte: 'Prefeitura de São Gonçalo (RJ) / Instituto SELECON / Edital 2026/2027.',
    inscricoesBloco: {
      periodo: '28/09/2026 a 18/11/2026',
      taxa: 'R$ 95,18',
      pagamentoAte: 'Até 19/11/2026',
      situacao: 'Inscrições em andamento'
    },
    provaObjetivaBloco: {
      data: '24/01/2027',
      duracao: '4 horas',
      totalQuestoes: '80 questões',
      distribuicao: [
        { materia: 'Língua Portuguesa', quantidade: '15' },
        { materia: 'Noções de Direito', quantidade: '20' },
        { materia: 'Legislação Extravagante', quantidade: '15' },
        { materia: 'Conhecimentos Específicos', quantidade: '20' },
        { materia: 'Informática', quantidade: '10' }
      ],
      criterioEliminacao: 'Candidato com menos de 50% de acertos ou que zerar qualquer disciplina.'
    }
  },
  {
    id: 'transpetro',
    nome: 'Transpetro 2026',
    nomeCompleto: 'Concurso da Transpetro 2026',
    descricaoCurta: 'Petrobras Transporte S.A. — A prova • Administração e Controle (Ênfase 1 do Edital 3). Área com turma própria de conhecimentos específicos.',
    categoria: ['Estatais', 'Administrativo'],
    imagem: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Ensino Médio',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 6.539,54',
    remuneracaoFinal: 'R$ 15.034,81+',
    remuneracaoResumo: 'R$ 6.539,54 inicial para Administração e Controle (Ênfase 1 do Edital 3). Demais cargos técnicos e operacionais variam até R$ 15.034,81.',
    beneficios: 'Plano de saúde, previdência complementar, benefício educacional e outros previstos no acordo coletivo',
    regime: 'CLT',
    orgao: 'Petrobras Transporte S.A. (Transpetro), subsidiária da Petrobras',
    instituicao: 'Petrobras Transporte S.A. (Transpetro)',
    cargo: 'Administração e Controle (Ênfase 1 do Edital 3)',
    cargoLabel: 'Cargo / Ênfase',
    areasAtuacao: 'Administração e Controle (Edital 3), além dos quadros de Terra e Mar',
    banca: 'Fundação Cesgranrio',
    ultimoEdital: 'Publicado em 12/08/2026, com quatro editais para os quadros de Terra e Mar',
    ultimoEditalLabel: 'Edital',
    inscricoesPeriodo: 'De 12/08 a 14/09 · taxa de R$ 81,50',
    dataProva: '29/11',
    vagas: '75 (5 imediatas + 70 de cadastro reserva)',
    previsaoProva: '29/11',
    situacao: 'Inscrições: de 12/08 a 14/09 (taxa de R$ 81,50) • Prova objetiva em 29/11',
    statusTipo: 'aberto',
    tagCard: 'PROVA EM 29/11',
    atribuicoes: 'Atividades na área de Administração e Controle, atendimento e rotinas administrativas, suporte aos processos logísticos e operacionais, movimentação de documentos e gestão no âmbito da Transpetro.',
    disciplinasTitulo: 'Disciplinas Cobradas (Administração & Conhecimentos Gerais)',
    disciplinas: [
      'Língua Portuguesa',
      'Matemática',
      'Administração',
      'Legislação',
      'Finanças',
      'Logística',
      'Contabilidade',
      'Noções de Informática'
    ],
    sobre: 'A prova do Concurso da Transpetro 2026 para a área de Administração (Administração e Controle — Ênfase 1 do Edital 3) destina-se a candidatos com Nível de Ensino Médio. A seleção conta com 75 vagas (5 imediatas + 70 de cadastro de reserva), remuneração inicial de R$ 6.539,54 e inscrições realizadas de 12/08 a 14/09 com taxa de R$ 81,50. A prova objetiva está confirmada para 29/11 pela Fundação Cesgranrio. O Progressão Caxias conta com turmas especializadas tanto para Administração quanto para Auxiliar do Mar, Oficial do Mar e Médio Terra.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino Médio completo para o cargo de Administração e Controle (Ênfase 1 do Edital 3).' },
      { titulo: 'Inscrição e Taxa', descricao: 'Inscrições de 12/08 a 14/09 com taxa de R$ 81,50.' },
      { titulo: 'Idade Mínima', descricao: 'Mínimo de 18 anos completos na convocação admissional e higidez física/mental.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Objetiva (29/11)', descricao: 'Avaliação de conhecimentos básicos e específicos elaborada pela Fundação Cesgranrio com aplicação em 29/11.' },
      { numero: '02', titulo: 'Avaliação e Procedimentos Admissionais', descricao: 'Exames médicos, avaliação de higidez física e documental sob o regime da CLT.' }
    ],
    diferenciais: [
      { titulo: 'Turma Própria de Conhecimentos Específicos', descricao: 'Área com turma própria de conhecimentos específicos: Administração, Legislação, Finanças, Logística, Contabilidade e Informática.' },
      { titulo: 'Remuneração Inicial de R$ 6.539,54', descricao: 'Excelente remuneração para nível médio com pacote integral de benefícios da subsidiária Petrobras.' },
      { titulo: '75 Vagas (5 imediatas + 70 CR)', descricao: 'Amplas oportunidades para a carreira administrativa da estatal.' },
      { titulo: 'Regime CLT com Estabilidade Corporativa', descricao: 'Plano de saúde, previdência complementar e benefício educacional previstos no acordo coletivo.' }
    ],
    perfil: [
      'Aptidão para organização administrativa, processos financeiros e contábeis',
      'Domínio de Língua Portuguesa, Matemática e Noções de Informática',
      'Interesse na legislação do setor de transporte e energia',
      'Comprometimento com eficiência operacional e gestão pública/corporativa'
    ],
    observacao: 'Concurso da Transpetro 2026 com editais publicados pela Fundação Cesgranrio. Prova objetiva agendada para 29/11.',
    fonte: 'Petrobras Transporte S.A. (Transpetro) / Fundação Cesgranrio / Edital 3 — Ênfase 1',
    inscricoesBloco: {
      periodo: 'De 12/08 a 14/09',
      taxa: 'R$ 81,50',
      pagamentoAte: '14/09',
      situacao: 'Inscrições abertas de 12/08 a 14/09'
    },
    provaObjetivaBloco: {
      data: '29/11',
      duracao: '4 horas',
      totalQuestoes: 'Cesgranrio Padrão',
      distribuicao: [
        { materia: 'Língua Portuguesa', quantidade: 'Básicos' },
        { materia: 'Matemática', quantidade: 'Básicos' },
        { materia: 'Administração & Legislação', quantidade: 'Específicos' },
        { materia: 'Finanças, Logística & Contabilidade', quantidade: 'Específicos' },
        { materia: 'Noções de Informática', quantidade: 'Específicos' }
      ],
      criterioEliminacao: 'Eliminatório conforme regras do edital Cesgranrio.'
    },
    turmasPreparatorias: [
      {
        nome: 'Transpetro – Administração',
        subtitulo: 'Administração e Controle · Ênfase 1 do Edital 3',
        edital: 'Edital 3 (Ênfase 1)',
        periodo: '08/09 a 27/11/26',
        carga: '50 encontros = 150 horas',
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
      },
      {
        nome: 'Transpetro – Auxiliar do Mar',
        subtitulo: 'Edital 1',
        edital: 'Edital 1',
        periodo: '08/09 a 16/10',
        carga: '72 horas, 2 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
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
        conhecimentosBasicos: [
          'Língua Portuguesa',
          'Inglês Técnico (só Condutor Mecânico, Condutor Bombeador e Eletricista)'
        ]
      },
      {
        nome: 'Transpetro – Oficial do Mar',
        subtitulo: 'Edital 2',
        edital: 'Edital 2',
        periodo: '08/09 a 16/10',
        carga: '72 horas, de 2 a 3 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
        horario: '18h45 às 21h45, com 15 minutos de intervalo (noite) · 08h00 às 17h10 (sábado)',
        areasAtendidas: [
          'Segundo Oficial de Máquinas',
          'Segundo Oficial de Náutica'
        ],
        conhecimentosBasicos: [
          'Língua Portuguesa',
          'Inglês'
        ]
      },
      {
        nome: 'Transpetro – Médio Terra',
        subtitulo: 'Edital 3',
        edital: 'Edital 3',
        periodo: '08/09 a 16/10',
        carga: '72 horas, 2 vezes por semana (pode variar por imprevistos ou pela agenda dos professores)',
        horario: '18h45 às 21h45, com 15 minutos de intervalo (noite) · 08h00 às 17h10 (sábado)',
        areasAtendidas: [
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
        conhecimentosBasicos: [
          'Língua Portuguesa',
          'Matemática'
        ]
      }
    ]
  }
];
