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
export interface ConcursoValoresLote {
  lote: string;
  sinal: string;
  cotasBoleto: string;
  destaque?: string;
}

export interface ConcursoValoresInfo {
  titulo: string;
  subtitulo?: string;
  aVista: string;
  cartaoCredito: string;
  boletoBancario: string;
  lotes: ConcursoValoresLote[];
  observacao?: string;
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
  valoresInfo?: ConcursoValoresInfo;
}

export const CONCURSOS_PUBLICOS_DATA: ConcursoPublico[] = [
  {
    id: 'pmerj',
    nome: 'PMERJ',
    nomeCompleto: 'Polícia Militar do Estado do Rio de Janeiro',
    descricaoCurta: 'Polícia Militar do Estado do Rio de Janeiro — Segurança ostensiva e ordem pública estadual.',
    categoria: ['Segurança Pública'],
    imagem: '/assets/capas-concursos/pmerj.jpg',
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
    imagem: '/assets/capas-concursos/inss.jpg',
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
    imagem: '/assets/capas-concursos/prf-agente.jpeg',
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
    imagem: '/assets/capas-concursos/prf.avif',
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
    imagem: '/assets/capas-concursos/policia-civil.jpg',
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
    imagem: '/assets/capas-concursos/guarda.jpg',
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
    imagem: '/assets/capas-concursos/transpetro.webp',
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
  },
  {
    id: 'banco-do-brasil',
    nome: 'Banco do Brasil',
    nomeCompleto: 'Concurso Banco do Brasil – Escriturário',
    descricaoCurta: 'Carreira bancária no Banco do Brasil. Atendimento ao público, produtos financeiros, comercialização e operações bancárias.',
    categoria: ['Estatais', 'Administrativo'],
    imagem: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Ensino Médio completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 3.622,23 + R$ 1.946,84 (Benefícios) = R$ 5.569,07',
    remuneracaoFinal: 'R$ 10.500,00+',
    remuneracaoResumo: 'Remuneração inicial de R$ 3.622,23 acrescida de auxílio-alimentação/refeição de R$ 1.946,84 (totalizando R$ 5.569,07), participação nos lucros ou resultados (PLR), previdência complementar e plano de saúde.',
    jornada: '30 horas semanais (6 horas diárias)',
    idade: 'Mínimo de 18 anos completos na data da posse',
    nacionalidade: 'Brasileira ou portuguesa amparada pelo estatuto de igualdade',
    sexo: 'Ambos os sexos (ampla concorrência)',
    orgao: 'Banco do Brasil S.A.',
    instituicao: 'Banco do Brasil S.A.',
    cargo: 'Escriturário (Novembro/26)',
    banca: 'Fundação Cesgranrio',
    ultimoEdital: 'Edital nº 01/2022 – Cesgranrio',
    vagas: '6.000 vagas no último edital nacional',
    previsaoProva: 'Aguardando Novo Edital',
    situacao: 'Preparação antecipada para o novo concurso de Escriturário do Banco do Brasil',
    statusTipo: 'previsto',
    tagCard: 'aguardando novo edital',
    requisitoAdicional: 'Sem exigência de CNH; sem teste de aptidão física (TAF)',
    atribuicoes: 'Atendimento aos clientes e usuários, comercialização de produtos e serviços bancários, conferência de documentos e dados, operações de caixa e rotinas administrativas.',
    disciplinas: [
      'Português',
      'Redação',
      'Inglês',
      'Matemática',
      'Matemática Financeira',
      'Atualidades do Mercado Financeiro',
      'Conhecimentos Bancários',
      'Ética e LGPD',
      'Leis',
      'Informática',
      'Estratégia Empresarial',
      'Técnicas de Vendas',
      'Estatuto da Pessoa com Deficiência e CDC'
    ],
    sobre: 'O concurso do Banco do Brasil para o cargo de Escriturário é uma das principais e mais procuradas oportunidades do serviço público e sociedades de economia mista do país. Com jornada diferenciada de 6 horas diárias, plano de cargos e salários estruturado, participação semestral nos lucros (PLR) e forte incentivo à graduação e pós-graduação, a carreira proporciona rápida ascensão profissional e estabilidade.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Certificado de conclusão de Ensino Médio expedido por instituição reconhecida pelo MEC.' },
      { titulo: 'Idade Mínima', descricao: 'Ter idade mínima de 18 anos completos na data da contratação/posse.' },
      { titulo: 'Jornada Diferenciada', descricao: '30 horas semanais (6 horas diárias de segunda a sexta-feira).' },
      { titulo: 'Sem TAF', descricao: 'Não há cobrança de Teste de Aptidão Física (TAF) para o cargo de Escriturário.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Objetiva', descricao: 'Avaliação de múltipla escolha com questões de Conhecimentos Básicos e Conhecimentos Específicos elaboradas pela Fundação Cesgranrio.' },
      { numero: '02', titulo: 'Prova de Redação', descricao: 'Elaboração de texto em prosa do tipo dissertativo-argumentativo sobre tema contemporâneo com caráter eliminatório.' },
      { numero: '03', titulo: 'Procedimentos Admissionais e Perícia Médica', descricao: 'Avaliação médica admissional e conferência documental eliminatórias para contratação no Banco do Brasil.' }
    ],
    diferenciais: [
      { titulo: 'Jornada de 6 Horas Diárias', descricao: 'Carga de 30 horas semanais proporcionando excelente qualidade de vida e tempo para estudos.' },
      { titulo: 'Auxílio-Alimentação de R$ 1.946,84', descricao: 'Pacote de benefícios robusto que eleva a remuneração inicial para mais de R$ 5.560,00.' },
      { titulo: 'Participação nos Lucros (PLR)', descricao: 'Pagamento semestral de PLR atrelado ao atingimento de metas da instituição financeira.' },
      { titulo: 'Bônus de Matrícula Progressão', descricao: 'Ao contratar a turma presencial no Progressão Caxias, o aluno ganha mais um mês grátis sem nenhum custo adicional.' }
    ],
    perfil: [
      'Boa comunicação interpessoal e foco na excelência no atendimento ao cliente',
      'Capacidade de negociação, comercialização de produtos e consultoria financeira',
      'Afinidade com ferramentas digitais, sistemas informatizados e rotinas bancárias',
      'Ética profissional, sigilo bancário e conformidade com a LGPD e o CDC'
    ],
    observacao: 'Remuneração inicial de R$ 3.622,23 + R$ 1.946,84 de auxílio-alimentação/refeição. Mais PLR semestral, previdência complementar (Previ) e plano de saúde (Cassi).',
    fonte: 'Banco do Brasil S.A. / Fundação Cesgranrio / Edital de Escriturário.',
    turmasPreparatorias: [
      {
        nome: 'Banco do Brasil – Escriturário · Novembro/26',
        subtitulo: '09/11/2026 a 26/03/2027 · Noite (18:45 às 21:45)',
        periodo: '09/11/2026 a 26/03/2027',
        carga: '50 encontros = 150 horas',
        frequencia: 'De 1 a 5 vezes na semana',
        horario: '18:45 às 21:45',
        conhecimentosBasicos: ['Português', 'Redação', 'Inglês', 'Matemática'],
        conhecimentosEspecificos: [
          'Matemática Financeira',
          'Atualidades do Mercado Financeiro',
          'Conhecimentos Bancários',
          'Ética e LGPD',
          'Leis',
          'Informática',
          'Estratégia Empresarial',
          'Técnicas de Vendas',
          'Estatuto da Pessoa com Deficiência e CDC'
        ]
      }
    ],
    valoresInfo: {
      titulo: 'Valores',
      subtitulo: 'Condições especiais por lotes com vagas limitadas para o Banco do Brasil',
      aVista: '5% de desconto',
      cartaoCredito: 'parcelado em até 10 cotas',
      boletoBancario: 'parcelado em até 07 cotas (valores promocionais por lote, abaixo)',
      lotes: [
        {
          lote: '1º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 236,01',
          destaque: 'Melhor Condição'
        },
        {
          lote: '2º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 246,05'
        },
        {
          lote: '3º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 256,10'
        }
      ]
    }
  },


  {
    id: 'guarda-marica',
    nome: 'Guarda Municipal de Maricá',
    nomeCompleto: 'Concurso Guarda Municipal de Maricá – GM Maricá',
    descricaoCurta: 'Mais de 800 vagas previstas com remuneração de até R$ 5.000 para Guarda Municipal de Maricá (Nível Médio + CNH A ou B).',
    categoria: ['Segurança Pública'],
    imagem: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    cargo: 'Guarda Municipal',
    escolaridade: 'Nível Médio Completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'Até R$ 5.000,00',
    remuneracaoFinal: 'R$ 5.000,00+',
    remuneracaoResumo: 'Até R$ 5.000 com vencimentos básicos, adicionais de periculosidade e benefícios municipais de Maricá.',
    jornada: 'Escala de revezamento / 40h semanais',
    idade: '18 a 35 anos',
    orgao: 'Prefeitura de Maricá / Guarda Municipal',
    instituicao: 'Guarda Municipal de Maricá (GM Maricá)',
    banca: 'COSEAC/UFF – Coordenação de Seleção Acadêmica da UFF',
    ultimoEdital: 'Previsto para abril/2026',
    ultimoEditalLabel: 'Edital',
    vagas: 'Mais de 800 vagas',
    previsaoProva: 'Ainda no primeiro semestre de 2026',
    situacao: 'Edital previsto para abril/2026',
    statusTipo: 'previsto',
    tagCard: 'EDITAL PREVISTO (ABRIL/2026)',
    requisitoAdicional: 'Ensino Médio completo + CNH categoria "A" ou "B" (comprovados na nomeação) · Idade de 18 a 35 anos',
    disciplinasTitulo: 'Matérias do Concurso (GM Maricá)',
    disciplinas: [
      'Língua Portuguesa',
      'Raciocínio Lógico-Matemático',
      'Informática',
      'Direito Constitucional',
      'Direito Administrativo',
      'Direito Penal',
      'Direito Processual Penal',
      'Direitos Humanos',
      'Legislação Específica'
    ],
    sobre: 'O concurso da Guarda Municipal de Maricá (GM Maricá) é uma das maiores oportunidades da segurança pública municipal no Estado do Rio de Janeiro. Com previsão de mais de 800 vagas, edital previsto para abril/2026 organizado pela conceituada banca COSEAC/UFF e remuneração de até R$ 5.000, o cargo exige nível médio completo e CNH categoria A ou B (comprovados na nomeação), com idade de 18 a 35 anos.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino Médio completo expedido por instituição de ensino reconhecida pelo MEC.' },
      { titulo: 'Habilitação (CNH)', descricao: 'Carteira Nacional de Habilitação na categoria "A" ou "B", devidamente regularizada e comprovada no momento da nomeação.' },
      { titulo: 'Faixa Etária', descricao: 'Idade mínima de 18 anos e máxima de 35 anos.' },
      { titulo: 'Aptidão Física e Mental', descricao: 'Aprovação em Teste de Aptidão Física (TAF), exames médicos, toxicológicos e avaliação psicológica para porte de arma.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Objetiva (COSEAC/UFF)', descricao: 'Questões de Língua Portuguesa, RLM, Informática e Conhecimentos Específicos de Direito e Legislação.' },
      { numero: '02', titulo: 'Teste de Aptidão Física (TAF)', descricao: 'Avaliação de condicionamento físico geral eliminatória.' },
      { numero: '03', titulo: 'Exames Médicos e Avaliação Psicológica', descricao: 'Exames laboratoriais, avaliação médica e perfil psicológico compatível com a função armada.' },
      { numero: '04', titulo: 'Investigação Social e Curso de Formação', descricao: 'Comprovação de idoneidade moral e Curso de Formação da Guarda Municipal.' }
    ],
    diferenciais: [
      { titulo: 'Mais de 800 Vagas', descricao: 'Grande contingente de vagas para ampliação contínua da Guarda Municipal de Maricá.' },
      { titulo: 'Remuneração de até R$ 5.000', descricao: 'Pacote remuneratório atrativo com plano de cargos e valorização salarial.' },
      { titulo: 'Banca COSEAC/UFF Definida', descricao: 'Banca oficial da Universidade Federal Fluminense com edital previsto para abril/2026.' },
      { titulo: 'Bônus de Matrícula Progressão', descricao: 'Ao contratar esta turma, o aluno ganha mais um mês grátis, sem nenhum custo adicional.' }
    ],
    perfil: [
      'Vocação para segurança pública comunitária, patrulhamento preventivo e ordem urbana',
      'Disciplina, responsabilidade institucional e prontidão operacional',
      'Boa comunicação, respeito aos Direitos Humanos e atendimento ao cidadão',
      'Capacidade de trabalho em equipe e tomada de decisão sob pressão'
    ],
    observacao: 'Edital previsto para abril/2026 com prova estimada ainda no primeiro semestre de 2026 pela banca COSEAC/UFF. Mais de 800 vagas anunciadas.',
    fonte: 'Prefeitura de Maricá / COSEAC-UFF / Comunicação Oficial do Município.',
    turmasPreparatorias: [
      {
        nome: 'Guarda Municipal de Maricá - Novembro/2026',
        subtitulo: '09/11/2026 a 26/03/2027 · Noite (18:45 às 21:45)',
        periodo: '09/11/2026 a 26/03/2027',
        carga: '50 encontros = 150 horas',
        frequencia: 'De 1 a 5 vezes na semana',
        horario: '18:45 às 21:45',
        conhecimentosBasicos: [
          'Língua Portuguesa',
          'Raciocínio Lógico-Matemático',
          'Informática'
        ],
        conhecimentosEspecificos: [
          'Direito Constitucional',
          'Direito Administrativo',
          'Direito Penal',
          'Direito Processual Penal',
          'Direitos Humanos',
          'Legislação Específica'
        ]
      }
    ],
    valoresInfo: {
      titulo: 'Valores',
      subtitulo: 'Condições de investimento promocionais por lote com vagas limitadas',
      aVista: '5% de desconto',
      cartaoCredito: 'parcelado em até 10 cotas',
      boletoBancario: 'parcelado em até 07 cotas (valores promocionais por lote, abaixo)',
      lotes: [
        {
          lote: '1º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 236,01',
          destaque: 'Melhor Condição'
        },
        {
          lote: '2º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 246,05'
        },
        {
          lote: '3º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 256,10'
        }
      ]
    }
  },
  {
    id: 'cbmerj-soldado-temporario',
    nome: 'CBMERJ – Soldado Temporário',
    nomeCompleto: 'Concurso CBMERJ – Soldado Temporário (Bombeiro Militar RJ)',
    descricaoCurta: '1.500 vagas autorizadas (nível médio e superior) para o Corpo de Bombeiros Militar do Estado do Rio de Janeiro pela banca Instituto AOCP.',
    categoria: ['Segurança Pública'],
    imagem: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=80',
    cargo: 'Soldado Temporário',
    escolaridade: 'Ensino Médio',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'A definir',
    remuneracaoFinal: 'A definir',
    remuneracaoResumo: 'Remuneração a ser definida no edital oficial pelo Corpo de Bombeiros Militar do Estado do Rio de Janeiro.',
    jornada: 'Escala de serviço operacional militar (24x72h)',
    idade: '18 a 25 anos',
    orgao: 'Corpo de Bombeiros Militar do Estado do Rio de Janeiro',
    instituicao: 'CBMERJ',
    banca: 'Instituto AOCP',
    ultimoEdital: 'A ser publicado',
    ultimoEditalLabel: 'Edital',
    vagas: '1.500 (nível médio e superior)',
    previsaoProva: 'A definir',
    situacao: 'Banca definida (Instituto AOCP) · Edital previsto',
    statusTipo: 'previsto',
    tagCard: 'BANCA DEFINIDA (INSTITUTO AOCP)',
    requisitoAdicional: 'Ensino Médio completo + CNH categoria "B" (comprovados na nomeação) · Idade de 18 a 25 anos',
    disciplinasTitulo: 'Matérias do Concurso (CBMERJ)',
    disciplinas: [
      'Língua Portuguesa',
      'Matemática',
      'Raciocínio Lógico'
    ],
    sobre: 'O concurso do Corpo de Bombeiros Militar do Estado do Rio de Janeiro (CBMERJ) para a função de Soldado Temporário oferece 1.500 vagas autorizadas para os níveis médio e superior, com organização da banca Instituto AOCP. A oportunidade destina-se a candidatos com idade entre 18 e 25 anos com Ensino Médio completo e CNH na categoria "B" (comprovados na nomeação).',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino Médio completo com certificado expedido por instituição de ensino reconhecida pelo MEC.' },
      { titulo: 'Habilitação (CNH)', descricao: 'Carteira Nacional de Habilitação (CNH) válida na categoria "B", comprovada no momento da nomeação.' },
      { titulo: 'Faixa Etária', descricao: 'Idade entre 18 e 25 anos.' },
      { titulo: 'Aptidão Física e Militar', descricao: 'Aprovação no Teste de Aptidão Física (TAF) militar, inspeção de saúde e exame psicológico do CBMERJ.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Objetiva (Instituto AOCP)', descricao: 'Avaliação de múltipla escolha com foco em Língua Portuguesa, Matemática e Raciocínio Lógico.' },
      { numero: '02', titulo: 'Teste de Aptidão Física (TAF)', descricao: 'Testes de corrida, flexão, abdominal e natação no padrão operacional do Corpo de Bombeiros.' },
      { numero: '03', titulo: 'Inspeção de Saúde e Exames Toxicológicos', descricao: 'Avaliações clínicas, laboratoriais e radiológicas eliminatórias.' },
      { numero: '04', titulo: 'Curso de Formação Profissional', descricao: 'Formação técnica de salvamento, combate a incêndio e primeiros socorros nas unidades do CBMERJ.' }
    ],
    diferenciais: [
      { titulo: '1.500 Vagas Autorizadas', descricao: 'Excelente volume de vagas distribuídas no Estado do Rio de Janeiro.' },
      { titulo: 'Banca Instituto AOCP', descricao: 'Banca oficial experiente com provas estruturadas e foco nas três disciplinas essenciais.' },
      { titulo: 'Programa Direto e Objetivo', descricao: 'Preparação focada em Língua Portuguesa, Matemática e Raciocínio Lógico.' },
      { titulo: 'Bônus de Matrícula Progressão', descricao: 'Ao contratar esta turma, o aluno ganha mais um mês grátis, sem nenhum custo adicional.' }
    ],
    perfil: [
      'Vocação militar, bravura e compromisso humanitário com o salvamento de vidas',
      'Excelente resistência física e higidez mental para operações de emergência',
      'Trabalho integrado sob comando em situações de resgate e combate a sinistros'
    ],
    observacao: 'Concurso autorizado com 1.500 vagas para Soldado Temporário do CBMERJ pela banca Instituto AOCP. Data de prova e remuneração a definir no edital.',
    fonte: 'Corpo de Bombeiros Militar do Estado do Rio de Janeiro / Instituto AOCP.',
    turmasPreparatorias: [
      {
        nome: 'CBMERJ – Soldado Temporário · Novembro/2026',
        subtitulo: '09/11/2026 a 26/03/2027 · Noite (18:45 às 21:45)',
        periodo: '09/11/2026 a 26/03/2027',
        carga: '50 encontros = 150 horas',
        frequencia: 'De 1 a 5 vezes na semana',
        horario: '18:45 às 21:45',
        conhecimentosBasicos: [
          'Língua Portuguesa',
          'Matemática',
          'Raciocínio Lógico'
        ]
      }
    ],
    valoresInfo: {
      titulo: 'Valores',
      subtitulo: 'Condições de investimento promocionais por lote com vagas limitadas para o CBMERJ',
      aVista: '5% de desconto',
      cartaoCredito: 'parcelado em até 10 cotas',
      boletoBancario: 'parcelado em até 07 cotas (valores promocionais por lote, abaixo)',
      lotes: [
        {
          lote: '1º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 236,01',
          destaque: 'Melhor Condição'
        },
        {
          lote: '2º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 246,05'
        },
        {
          lote: '3º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 256,10'
        }
      ]
    }
  },
  
  {
    id: 'detran-rj',
    nome: 'Detran/RJ',
    nomeCompleto: 'Concurso Detran/RJ – Departamento de Trânsito do Estado do Rio de Janeiro',
    descricaoCurta: 'Oportunidade para nível médio no Detran/RJ com 3 cargos: Assistente Técnico de Trânsito, Identificação Civil e Administrativo.',
    categoria: ['Trânsito', 'Administrativo'],
    imagem: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    cargo: 'Assistente Técnico (3 Áreas)',
    escolaridade: 'Ensino Médio completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 1.814,01 (ref. 2013)',
    remuneracaoFinal: 'R$ 3.500,00+',
    remuneracaoResumo: 'Remuneração inicial de R$ 1.814,01 no último concurso (2013), com reajustes e benefícios previstos no novo plano de cargos e salários.',
    jornada: '40h semanais',
    orgao: 'Departamento de Trânsito do Estado do Rio de Janeiro',
    instituicao: 'Detran/RJ',
    banca: 'A definir',
    ultimoEdital: '2013',
    ultimoEditalLabel: 'Último Concurso',
    vagas: '800 (último concurso)',
    previsaoProva: 'A definir',
    situacao: 'Aguardando Novo Edital',
    statusTipo: 'previsto',
    tagCard: 'AGUARDANDO NOVO EDITAL',
    requisitoAdicional: 'Ensino Médio completo para os cargos de Trânsito, Identificação Civil e Administrativo',
    disciplinasTitulo: 'Matérias do Concurso (Detran/RJ)',
    disciplinas: [
      'Língua Portuguesa (10 questões)',
      'Língua Estrangeira – inglês ou espanhol (05 questões)',
      'Legislação de Trânsito (10 questões)',
      'Noções de Informática (05 questões)',
      'Conhecimentos Específicos (20 questões)'
    ],
    sobre: 'O concurso do Detran/RJ (Departamento de Trânsito do Estado do Rio de Janeiro) é uma das principais oportunidades de carreira pública estadual para nível médio. O último concurso contou com 800 vagas distribuídas entre Assistente Técnico de Trânsito, Identificação Civil e Administrativo. O Progressão Caxias reuniu a preparação para os três cargos em um formato exclusivo de alto rendimento.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Certificado de conclusão de Ensino Médio regular ou equivalente reconhecido pelo MEC.' },
      { titulo: 'Nacionalidade', descricao: 'Nacionalidade brasileira ou portuguesa amparada pelo estatuto de igualdade.' },
      { titulo: 'Idade Mínima', descricao: 'Ter idade mínima de 18 anos completos na data da posse.' },
      { titulo: 'Aptidão Física e Mental', descricao: 'Aptidão plena comprovada nos exames médicos oficiais de ingresso no Estado do RJ.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Objetiva (50 Questões)', descricao: 'Língua Portuguesa (10), Língua Estrangeira (05), Legislação de Trânsito (10), Noções de Informática (05) e Conhecimentos Específicos (20).' },
      { numero: '02', titulo: 'Comprovação de Requisitos e Documentação', descricao: 'Apresentação de documentos comprobatórios de escolaridade e idoneidade.' },
      { numero: '03', titulo: 'Exame Médico Admissional', descricao: 'Avaliação clínica e médica oficial para posse no cargo público.' },
      { numero: '04', titulo: 'Curso de Integração e Formação Funcional', descricao: 'Treinamento das rotinas do Detran/RJ nas áreas de Trânsito, Identificação ou Administrativo.' }
    ],
    diferenciais: [
      { titulo: '3 Cargos de Nível Médio', descricao: 'Vagas para Assistente Técnico de Trânsito, Identificação Civil e Administrativo em um só concurso.' },
      { titulo: 'Histórico de Mais de 800 Vagas', descricao: 'Grande contingente de convocações em todo o Estado do Rio de Janeiro.' },
      { titulo: '3 Turmas no Progressão em 1 Só Preparação', descricao: 'Grade adaptada com horários dedicados para cada cargo no módulo noturno.' },
      { titulo: 'Bônus de Matrícula Progressão', descricao: 'Ao contratar esta turma, o aluno ganha mais um mês grátis, sem nenhum custo adicional.' }
    ],
    perfil: [
      'Atendimento de excelência ao cidadão e compromisso com o serviço público fluminense',
      'Domínio da legislação de trânsito, normas administrativas e sistemas de identificação',
      'Organização, ética profissional e trabalho em equipe nos postos e sede do Detran/RJ'
    ],
    cargosMultiplos: [
      {
        cargo: 'Assistente Técnico de Trânsito (430)',
        escolaridade: 'Nível Médio',
        remuneracao: 'R$ 1.814,01 (ref. 2013) + benefícios',
        atribuicao: 'Execução de serviços relativos a veículos, habilitação de condutores e atendimento técnico ao público.'
      },
      {
        cargo: 'Assistente Técnico de Identificação Civil (222)',
        escolaridade: 'Nível Médio',
        remuneracao: 'R$ 1.814,01 (ref. 2013) + benefícios',
        atribuicao: 'Serviços de identificação civil, emissão de documentos de identidade, coleta biométrica e cadastro de cidadãos.'
      },
      {
        cargo: 'Assistente Técnico Administrativo (112)',
        escolaridade: 'Nível Médio',
        remuneracao: 'R$ 1.814,01 (ref. 2013) + benefícios',
        atribuicao: 'Atividades de apoio administrativo, protocolo, gestão de processos e suporte interno nas unidades do órgão.'
      }
    ],
    observacao: 'Último concurso realizado em 2013 com 800 vagas para cargos de nível médio. O Progressão oferece 3 turmas com horários dedicados: Trânsito (18:45 às 21:45), Identificação Civil (18:30 às 21:45) e Administrativo (18:30 às 21:45).',
    fonte: 'Departamento de Trânsito do Estado do Rio de Janeiro (Detran/RJ) / Edital anterior.',
    turmasPreparatorias: [
      {
        nome: 'Detran/RJ – Assistente Técnico de Trânsito (430)',
        subtitulo: '09/11/2026 a 26/03/2027 · Noite (18:45 às 21:45)',
        periodo: '09/11/2026 a 26/03/2027',
        carga: '50 encontros = 150 horas',
        frequencia: 'De 1 a 5 vezes na semana',
        horario: '18:45 às 21:45',
        conhecimentosBasicos: [
          'Língua Portuguesa (10 questões)',
          'Língua Estrangeira – inglês ou espanhol (05 questões)',
          'Legislação de Trânsito (10 questões)',
          'Noções de Informática (05 questões)',
          'Conhecimentos Específicos (20 questões)'
        ]
      },
      {
        nome: 'Detran/RJ – Assistente Técnico de Identificação Civil (222)',
        subtitulo: '09/11/2026 a 26/03/2027 · Noite (18:30 às 21:45)',
        periodo: '09/11/2026 a 26/03/2027',
        carga: '50 encontros = 150 horas',
        frequencia: 'De 1 a 5 vezes na semana',
        horario: '18:30 às 21:45',
        conhecimentosBasicos: [
          'Língua Portuguesa (10 questões)',
          'Língua Estrangeira – inglês ou espanhol (05 questões)',
          'Legislação de Trânsito (10 questões)',
          'Noções de Informática (05 questões)',
          'Conhecimentos Específicos (20 questões)'
        ]
      },
      {
        nome: 'Detran/RJ – Assistente Técnico Administrativo (112)',
        subtitulo: '09/11/2026 a 26/03/2027 · Noite (18:30 às 21:45)',
        periodo: '09/11/2026 a 26/03/2027',
        carga: '50 encontros = 150 horas',
        frequencia: 'De 1 a 5 vezes na semana',
        horario: '18:30 às 21:45',
        conhecimentosBasicos: [
          'Língua Portuguesa (10 questões)',
          'Língua Estrangeira – inglês ou espanhol (05 questões)',
          'Legislação de Trânsito (10 questões)',
          'Noções de Informática (05 questões)',
          'Conhecimentos Específicos (20 questões)'
        ]
      }
    ],
    valoresInfo: {
      titulo: 'Valores',
      subtitulo: 'Condições de investimento promocionais por lote com vagas limitadas para o Detran/RJ',
      aVista: '5% de desconto',
      cartaoCredito: 'parcelado em até 10 cotas',
      boletoBancario: 'parcelado em até 07 cotas (valores promocionais por lote, abaixo)',
      lotes: [
        {
          lote: '1º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 236,01',
          destaque: 'Melhor Condição'
        },
        {
          lote: '2º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 246,05'
        },
        {
          lote: '3º lote – valor promocional',
          sinal: 'R$ 99,00',
          cotasBoleto: '07 cotas de R$ 256,10'
        }
      ]
    }
  }

  
];
