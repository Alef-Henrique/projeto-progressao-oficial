export interface ConcursoMilitarEtapa {
  titulo: string;
  descricao: string;
}

export interface ConcursoMilitarDiferencial {
  titulo: string;
  descricao: string;
}

export interface ConcursoMilitarPreparacao {
  modalidades: string[];
}

export interface MilitaryPreparatory {
  id: string;
  nome: string;
  subtitulo?: string;
  imagem: string;
  orgao: string;
  orgaoLabel?: string;
  instituicao?: string;
  concurso?: string;
  edital: string;
  ultimoEdital?: string;
  banca?: string;
  dataPublicacao: string;
  status: string; // Ex: 'INSCRIÇÕES ABERTAS', 'AGUARDANDO NOVO EDITAL', 'INSCRIÇÕES ENCERRADAS'
  statusTipo?: 'aberto' | 'previsto' | 'encerrado';
  inscricoes: {
    inicio: string;
    fim: string;
  };
  dataProva: string;
  vagas: string;
  escolaridade: string;
  idade: string;
  ultimoEditalLabel?: string;
  nacionalidade?: string;
  sexo?: string;
  duracao: string;
  regime?: string;
  areas?: string;
  areasLabel?: string;
  carreiras?: string;
  carreirasLabel?: string;
  cargoAposFormacao?: string;
  atuacaoProfissional?: string;
  remuneracaoCard: string;
  remuneracaoCardLabel: string;
  remuneracaoModalLabel?: string;
  remuneracaoFormacao: string;
  remuneracaoFormado: string;
  beneficios: string[];
  disciplinas: string[];
  etapasResumo?: string;
  etapas: ConcursoMilitarEtapa[];
  sobre: string;
  diferenciais: ConcursoMilitarDiferencial[];
  preparacao: ConcursoMilitarPreparacao;
  fonte?: string;
}

export type ConcursoMilitar = MilitaryPreparatory;

export const MILITARY_PREPARATORIES: MilitaryPreparatory[] = [
  {
    id: 'rm2',
    nome: 'Mentoria de Português RM2',
    imagem: '/assets/capas-militar/rm2-img.png',
    orgao: 'Marinha do Brasil (Distritos Navais em todo o Brasil)',
    edital: 'Processo Seletivo para o Serviço Militar Voluntário (SMV-OF)',
    dataPublicacao: '[INFORMAR DATA DE PUBLICAÇÃO]',
    status: 'AGUARDANDO NOVO EDITAL',
    statusTipo: 'previsto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: 'Aguardando novo edital',
    vagas: 'Aguardando novo edital',
    escolaridade: 'Nível Superior completo (Bacharelado ou Licenciatura nas áreas do edital)',
    idade: 'Ter entre 18 e 40 anos até 31 de dezembro do ano de incorporação',
    nacionalidade: 'Brasileiro nato ou naturalizado',
    sexo: 'Masculino e Feminino (ambos concorrem em igualdade de condições)',
    duracao: 'Até 8 anos de serviço ativo como Oficial Temporário da Marinha',
    regime: 'Dedicação Exclusiva / Serviço Militar Voluntário',
    remuneracaoCard: 'R$ 9.070,00 a R$ 10.500,00',
    remuneracaoCardLabel: 'Remuneração inicial como Oficial:',
    remuneracaoFormacao: 'Remuneração integral desde o início do Estágio de Adaptação (posto de Guarda-Marinha / 2º Tenente), com soldo e adicionais militares.',
    remuneracaoFormado: 'Após a formação inicial, o Oficial RM2 atua como Segundo-Tenente (remuneração bruta inicial de aprox. R$ 9.070,00 a R$ 10.500,00), podendo ser promovido a Primeiro-Tenente com remuneração superior a R$ 11.000,00 brutos.',
    beneficios: [
      'Ingresso direto como Oficial das Forças Armadas com alta relevância e liderança',
      'Assistência médico-hospitalar e odontológica da Marinha do Brasil para o oficial e dependentes',
      'Excelente remuneração inicial para recém-formados ou profissionais experientes de nível superior',
      'Atuação técnica na sua área de graduação em organizações e projetos estratégicos da Marinha',
      'Alimentação, instalações militares e suporte logístico completos durante o expediente militar'
    ],
    disciplinas: [
      'Língua Portuguesa (50% do total da prova - critério supremo de desempate e aprovação)',
      'Interpretação e Compreensão Textual nos padrões da banca da Marinha',
      'Gramática Normativa, Morfossintaxe, Concordância, Regência, Crase e Pontuação',
      'Formação Militar-Naval (Tradições da Marinha, Legislação Militar e História Marítima)'
    ],
    etapas: [
      {
        titulo: '1ª Etapa - Prova Objetiva',
        descricao: '50 questões (25 de Língua Portuguesa e 25 de Formação Militar-Naval), de caráter eliminatório e classificatório.'
      },
      {
        titulo: '2ª Etapa - Verificação de Dados Biográficos (VDB) e Documental (VD)',
        descricao: 'Conferência de certidões, antecedentes criminais e comprovação dos diplomas e requisitos de formação.'
      },
      {
        titulo: '3ª Etapa - Inspeção de Saúde (IS)',
        descricao: 'Exames laboratoriais, radiológicos e clínicos eliminatórios segundo os padrões da Diretoria de Saúde da Marinha.'
      },
      {
        titulo: '4ª Etapa - Teste de Aptidão Física (TAF)',
        descricao: 'Provas práticas de natação e corrida contínua com índices adequados por sexo e faixa etária.'
      },
      {
        titulo: '5ª Etapa - Prova de Títulos (PT)',
        descricao: 'Pontuação classificatória para pós-graduação, mestrado, doutorado e experiência profissional comprovada.'
      },
      {
        titulo: '6ª Etapa - Estágio de Adaptação e Serviço (EAS/EST)',
        descricao: 'Instrução militar e marinheira inicial e posterior lotação nas organizações da Marinha do Brasil.'
      }
    ],
    sobre: 'O concurso RM2 (Serviço Militar Voluntário para Oficiais Temporários) da Marinha do Brasil é uma das melhores oportunidades para profissionais com diploma de nível superior atuarem como Oficiais das Forças Armadas por até 8 anos. A prova objetiva tem como diferencial decisivo a disciplina de Língua Portuguesa, que responde por 50% de todo o exame e representa o principal critério de desempate. O Progressão Caxias oferece preparação cirúrgica com foco nos modelos de cobrança da banca naval.',
    diferenciais: [
      {
        titulo: 'Formação',
        descricao: 'Estágio de instrução e adaptação militar-naval com formação cívica e de liderança de oficiais.'
      },
      {
        titulo: 'Plano de carreira',
        descricao: 'Ingresso como Guarda-Marinha / 2º Tenente e promoção regular a 1º Tenente conforme tempo e merecimento.'
      },
      {
        titulo: 'Progressão',
        descricao: 'Evolução remuneratória contínua amparada pela Lei de Remuneração das Forças Armadas.'
      },
      {
        titulo: 'Benefícios',
        descricao: 'Plano de assistência à saúde em hospitais navais de ponta, policlínicas e farmácias conveniadas.'
      },
      {
        titulo: 'Desenvolvimento profissional',
        descricao: 'Experiência militar que agrega autoridade, pontualidade, liderança e peso ímpar ao currículo.'
      },
      {
        titulo: 'Possibilidades de carreira',
        descricao: 'Atuação em capitanias, distritos, hospitais navais, arsenais e diretorias especializadas.'
      }
    ],
    preparacao: {
      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Edital oficial do Serviço Militar Voluntário (SMV-OF / Marinha do Brasil) e Lei 13.954/2019.'
  },
  {
    id: 'esa',
    nome: 'ESA',
    subtitulo: 'Escola de Sargentos das Armas',
    imagem: '/assets/capas-militar/esa-sargentos.png',
    orgao: 'Exército Brasileiro.',
    instituicao: 'Escola de Sargentos das Armas(ESA).',
    concurso: 'Curso de Formação e Graduação de Sargentos (CFGS) — ingresso em 2027.',
    edital: '2026, para ingresso em 2027.',
    ultimoEdital: '2026, para ingresso em 2027.',
    banca: 'Comissão própria do Exército Brasileiro.',
    dataPublicacao: '[INFORMAR DATA DE PUBLICAÇÃO]',
    status: 'AGUARDANDO NOVO EDITAL',
    statusTipo: 'previsto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: 'Aguardando novo edital',
    vagas: '1.100 vagas.',
    escolaridade: 'Ensino Médio completo ou cursando a 3ª série, conforme a área e o edital. Para Saúde, exige-se também curso técnico de Enfermagem e registro no COREN.',
    idade: 'Área Geral: 17 a 24 anos; Música e Saúde: 17 a 26 anos, conforme os limites do edital.',
    nacionalidade: 'Brasileiro nato ou naturalizado',
    sexo: 'Masculino e Feminino (ambos concorrem conforme especialidade do edital)',
    duracao: 'Formação prevista de março de 2027 a dezembro de 2028.',
    regime: 'Internato Militar / Dedicação Exclusiva',
    areas: 'Geral (Combatente, Logística e Aviação), Música e Saúde.',
    cargoAposFormacao: 'Terceiro-Sargento do Exército Brasileiro, após conclusão do curso e cumprimento das regras militares.',
    remuneracaoCard: 'Cerca de R$ 3.825,00 mensais',
    remuneracaoCardLabel: 'Remuneração após formado (3º Sargento):',
    remuneracaoFormacao: 'Aprox. R$ 1.199,00 a R$ 1.414,00 mensais durante os 2 anos de formação como Aluno do CFGS, além de alojamento, alimentação balanceada, fardamento completo e assistência médico-hospitalar e odontológica.',
    remuneracaoFormado: 'Cerca de 3.825 mensais após a formação,como 3º sargento; confirmar o calor vigente antes da publicação.',
    beneficios: [
      'Durante a formação, assistência e estrutura militar conforme as normas do Exército'
    ],
    disciplinas: [
      'Matemática (Álgebra, Geometria Plana e Espacial, Trigonometria, Funções, Matrizes e Probabilidade)',
      'Língua Portuguesa (Gramática Normativa, Morfologia, Sintaxe do Período, Ortografia e Interpretação Textual)',
      'Redação (Texto Dissertativo-Argumentativo nos critérios específicos do Exército Brasileiro)',
      'História do Brasil (Períodos Colonial, Monárquico e Republicano)',
      'Geografia do Brasil (Geomorfologia, Climas, Bacias Hidrográficas, Urbanização e Geopolítica)',
      'Língua Inglesa (Compreensão Textual, Vocabulário Contextual e Estruturas Gramaticais)'
    ],
    etapasResumo: 'Exame intelectual, inspeção de saúde, exame de aptidão física, avaliação psicológica e verificação dos requisitos documentais, conforme o edital.',
    etapas: [
      {
        titulo: '1ª Etapa - Exame Intelectual',
        descricao: 'Provas objetivas das disciplinas exigidas e redação dissertativa-argumentativa eliminatória.'
      },
      {
        titulo: '2ª Etapa - Inspeção de Saúde',
        descricao: 'Avaliação médica, odontológica e exames laboratoriais eliminatórios realizados por junta militar.'
      },
      {
        titulo: '3ª Etapa - Exame de Aptidão Física',
        descricao: 'Testes de capacidade física com corrida, flexão de braços e abdominais conforme os índices do edital.'
      },
      {
        titulo: '4ª Etapa - Avaliação Psicológica',
        descricao: 'Avaliação vocacional e de adequação ao perfil exigido para a carreira militar do Exército.'
      },
      {
        titulo: '5ª Etapa - Verificação dos Requisitos Documentais',
        descricao: 'Conferência detalhada e comprovação de todos os requisitos documentais exigidos, conforme o edital.'
      }
    ],
    sobre: 'A Escola de Sargentos das Armas (ESA) é o estabelecimento de ensino do Exército Brasileiro responsável pela formação e graduação dos Sargentos Combatentes de Carreira das Armas de Infantaria, Cavalaria, Artilharia, Engenharia e Comunicações, bem como do Quadro de Material Bélico, Intendência, Saúde e Música. O curso tem duração de 2 anos em regime de internato e confere diploma de graduação de nível superior (Tecnólogo) registrado e reconhecido pelo MEC.',
    diferenciais: [
      {
        titulo: 'Benefícios',
        descricao: 'Durante a formação, assistência e estrutura militar conforme as normas do Exército.'
      }
    ],
    preparacao: {
      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Edital do Concurso de Admissão aos Cursos de Formação e Graduação de Sargentos (ESA / Exército Brasileiro) e Lei 13.954/2019.'
  },
  {
    id: 'eear',
    nome: 'EEAr',
    subtitulo: 'Escola de Especialistas de Aeronáutica',
    imagem: '/assets/capas-militar/concurso-aeronautica.png',
    orgao: 'Força Aérea Brasileira (FAB).',
    instituicao: 'Escola de Especialistas de Aeronáutica (EEAR), em Guaratinguetá–SP.',
    concurso: 'Exame de Admissão ao Curso de Formação de Sargentos (CFS).',
    edital: 'CFS 2/2027, publicado em 2026.',
    ultimoEdital: 'CFS 2/2027, publicado em 2026.',
    ultimoEditalLabel: 'Último edital consultado',
    banca: 'Força Aérea Brasileira, por meio da EEAR e dos órgãos responsáveis pelo processo seletivo.',
    dataPublicacao: 'Aguardando novo edital',
    status: 'INSCRIÇÕES ABERTAS',
    statusTipo: 'aberto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: '[INFORMAR DATA DA PROVA]',
    vagas: 'Consultar o edital específico do CFS 2/2027 para confirmar o total.',
    escolaridade: 'Ensino Médio completo.',
    idade: 'Em regra, mínimo de 17 anos e não completar 25 anos até 31 de dezembro do ano da matrícula, conforme o edital.',
    duracao: '2 anos, em regime de internato.',
    cargoAposFormacao: 'Terceiro-Sargento da Aeronáutica, conforme conclusão do curso e regras de promoção.',
    remuneracaoCard: 'Conforme legislação militar',
    remuneracaoCardLabel: 'Remuneração durante a formação:',
    remuneracaoModalLabel: 'Remuneração',
    remuneracaoFormacao: 'Durante a formação, o aluno recebe remuneração militar conforme a legislação vigente. O valor atualizado deve ser confirmado antes da publicação.',
    remuneracaoFormado: 'Durante a formação, o aluno recebe remuneração militar conforme a legislação vigente. O valor atualizado deve ser confirmado antes da publicação.',
    beneficios: [
      'Formação gratuita, alojamento, alimentação, uniformes e assistência à saúde, conforme as regras da instituição.'
    ],
    disciplinas: [
      'Língua Portuguesa (Gramática Geral, Sintaxe, Pontuação, Ortografia e Interpretação Textual)',
      'Língua Inglesa (Interpretação e Gramática nos níveis Básico ou Intermediário conforme a especialidade)',
      'Matemática (Álgebra, Geometria Plana, Espacial e Analítica, Trigonometria e Estatística)',
      'Física (Cinemática, Dinâmica, Termologia, Óptica, Ondulatória, Eletricidade e Magnetismo)'
    ],
    etapas: [
      {
        titulo: '1ª Etapa - Provas Escritas',
        descricao: 'Língua Portuguesa, Língua Inglesa, Matemática e Física, de caráter eliminatório e classificatório.'
      },
      {
        titulo: '2ª Etapa - Inspeção de Saúde (INSPSAU)',
        descricao: 'Avaliação médica abrangente realizada por Junta de Saúde da Aeronáutica.'
      },
      {
        titulo: '3ª Etapa - Exame de Aptidão Psicológica (EAP)',
        descricao: 'Verificação da compatibilidade psicológica e vocacional para o serviço na Força Aérea.'
      },
      {
        titulo: '4ª Etapa - Teste de Avaliação do Condicionamento Físico (TACF)',
        descricao: 'Flexão de braços, exercícios abdominais e corrida contínua de 12 minutos.'
      },
      {
        titulo: '5ª Etapa - Procedimento de Heteroidentificação e Validação Documental',
        descricao: 'Comprovação de requisitos legais, declarações e conferência de diplomas.'
      },
      {
        titulo: '6ª Etapa - Matrícula e Início do Curso (CFS)',
        descricao: 'Ingresso no Berço dos Especialistas em Guaratinguetá/SP com início da vida militar.'
      }
    ],
    sobre: 'A Escola de Especialistas de Aeronáutica (EEAr), carinhosamente chamada de "Berço dos Especialistas", localiza-se em Guaratinguetá (SP) e é responsável por formar os militares técnicos essenciais para o controle do espaço aéreo brasileiro (BCT), manutenção das aeronaves de caça e transporte, sistemas de radares, comunicações, meteorologia e suprimento da Força Aérea Brasileira.',
    diferenciais: [
      {
        titulo: 'Formação',
        descricao: 'Curso de Formação de Sargentos (CFS) com tecnologia aeronáutica de ponta e simuladores reais.'
      },
      {
        titulo: 'Plano de carreira',
        descricao: 'Progressão a 3º Sargento, 2º Sargento, 1º Sargento, Suboficial e Oficialato pelo EAOF.'
      },
      {
        titulo: 'Progressão',
        descricao: 'Soldos progressivos, gratificações por tempo de serviço e adicionais de especialização técnica.'
      },
      {
        titulo: 'Benefícios',
        descricao: 'Atendimento integral pelo SISAU em hospitais da Aeronáutica em todo o Brasil.'
      },
      {
        titulo: 'Desenvolvimento profissional',
        descricao: 'Capacitações contínuas em tecnologias aeronáuticas e controle de tráfego aéreo com padrão militar.'
      },
      {
        titulo: 'Possibilidades de carreira',
        descricao: 'Atuação em bases aéreas, esquadrões de voo, aeródromos e centros de controle (CINDACTA).'
      }
    ],
    preparacao: {
      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Instruções Específicas para o Exame de Admissão ao CFS (EEAr / Comando da Aeronáutica) e Lei 13.954/2019.'
  },
  {
    id: 'eags',
    nome: 'Mentoria de Português EAGS',
    subtitulo: 'Estágio de Adaptação à Graduação de Sargentos',
    imagem: '/assets/capas-militar/Concurso-eags.jpg',
    orgao: 'Força Aérea Brasileira - FAB (EEAr - Guaratinguetá/SP)',
    edital: 'Exame de Admissão ao Estágio de Adaptação à Graduação de Sargentos da Aeronáutica',
    dataPublicacao: '[INFORMAR DATA DE PUBLICAÇÃO]',
    status: 'AGUARDANDO NOVO EDITAL',
    statusTipo: 'previsto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: 'Aguardando novo edital',
    vagas: 'Aguardando novo edital',
    escolaridade: 'Ensino Médio e Curso Técnico de Nível Médio na especialidade de edital (Administração, Enfermagem, Eletrônica, Informática, Eletricidade, etc.)',
    idade: 'Ter entre 17 e 24 anos de idade até 31 de dezembro do ano da matrícula',
    nacionalidade: 'Brasileiro nato',
    sexo: 'Masculino e Feminino (ambos concorrem conforme especialidade técnica)',
    duracao: 'Apenas 1 ano (12 meses) de estágio militar na EEAr',
    regime: 'Internato Militar na EEAr em Guaratinguetá/SP',
    remuneracaoCard: 'Cerca de R$ 3.825,00 mensais',
    remuneracaoCardLabel: 'Remuneração após formado (3º Sargento):',
    remuneracaoFormacao: 'Aprox. R$ 1.199,00 a R$ 1.414,00 mensais durante apenas 1 ano de adaptação e formação na EEAr, com todas as despesas de alojamento, farda e alimentação custeadas pela FAB.',
    remuneracaoFormado: 'Cerca de 3.825 mensais após a formação,como 3º sargento; confirmar o calor vigente antes da publicação.',
    beneficios: [
      'Duração de apenas 1 ano de estágio na EEAr (tempo de formação reduzido pela metade)',
      'Aproveitamento direto do diploma do seu curso técnico na carreira militar das Forças Armadas',
      'Língua Portuguesa é o critério decisivo de desempate e aprovação entre os técnicos concorrentes',
      'Estabilidade na carreira militar pública federal da Aeronáutica',
      'Plano de carreira e vencimentos idênticos aos dos sargentos de carreira do CFS',
      'Assistência médico-hospitalar e odontológica gratuita pelo SISAU'
    ],
    disciplinas: [
      'Língua Portuguesa Intensiva (Foco Total da Mentoria: Interpretação de Texto, Ortografia Oficial, Morfologia, Análise Sintática, Regência e Concordância)',
      'Conhecimentos Especializados (Específicos da área técnica do edital: Administração, Enfermagem, Eletrônica, Eletricidade, Informática, Música, Obras, etc.)'
    ],
    etapas: [
      {
        titulo: '1ª Etapa - Provas Escritas',
        descricao: 'Língua Portuguesa e Conhecimentos Especializados da área técnica.'
      },
      {
        titulo: '2ª Etapa - Inspeção de Saúde (INSPSAU)',
        descricao: 'Avaliação médica realizada por Junta de Saúde da Aeronáutica.'
      },
      {
        titulo: '3ª Etapa - Exame de Aptidão Psicológica (EAP)',
        descricao: 'Avaliação do perfil de aptidão e adequação à vida militar.'
      },
      {
        titulo: '4ª Etapa - Teste de Avaliação do Condicionamento Físico (TACF)',
        descricao: 'Exercícios físicos padronizados para verificação da higidez física.'
      },
      {
        titulo: '5ª Etapa - Prova Prática do Grau (PPG)',
        descricao: 'Exame prático na bancada/laboratório para comprovação das competências técnicas do curso.'
      },
      {
        titulo: '6ª Etapa - Matrícula e Início do Estágio',
        descricao: 'Adaptação e formação na EEAr por 1 ano até a formatura como Terceiro-Sargento.'
      }
    ],
    sobre: 'O EAGS é a porta de entrada mais rápida para se tornar Sargento de Carreira da Aeronáutica para quem já concluiu ou está concluindo o Ensino Técnico. A prova é composta exclusivamente por Língua Portuguesa e Conhecimentos da especialidade técnica. Como todos os candidatos dominam sua área técnica, a nota da prova de Língua Portuguesa é o verdadeiro divisor de águas que define a aprovação. Nossa mentoria foca nos detalhes gramaticais e na banca da Aeronáutica.',
    diferenciais: [
      {
        titulo: 'Formação',
        descricao: 'Estágio de Adaptação à Graduação de Sargentos em período otimizado de 1 ano.'
      },
      {
        titulo: 'Plano de carreira',
        descricao: 'Plano idêntico aos sargentos da ativa, progredindo até Suboficial e Oficial Especialista pelo EAOF.'
      },
      {
        titulo: 'Progressão',
        descricao: 'Estabilidade definitiva com soldos progressivos e adicionais de especialização.'
      },
      {
        titulo: 'Benefícios',
        descricao: 'Atendimento de saúde no SISAU e previdência militar estruturada.'
      },
      {
        titulo: 'Desenvolvimento profissional',
        descricao: 'Aplicação diária da profissão técnica em aeronaves, sistemas de radar e hospitais da FAB.'
      },
      {
        titulo: 'Possibilidades de carreira',
        descricao: 'Transferências e atuação técnica em todas as regiões do Brasil.'
      }
    ],
    preparacao: {

      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Instruções Específicas para o Exame de Admissão ao EAGS (Comando da Aeronáutica) e Lei 13.954/2019.'
  },
  {
    id: 'afa',
    nome: 'AFA',
    subtitulo: 'Academia da Força Aérea',
    imagem: '/assets/capas-militar/concurso-afa.jpg',
    orgao: 'Força Aérea Brasileira (FAB).',
    instituicao: 'Academia da Força Aérea (AFA), em Pirassununga–SP.',
    concurso: 'Exame de Admissão aos Cursos de Formação de Oficiais da Aeronáutica (EA CFOAV/INT/INF 2027).',
    edital: 'Instruções Específicas para o Exame de Admissão aos CFO da AFA',
    ultimoEdital: '2026, para ingresso em 2027, publicado em abril de 2026.',
    banca: 'Força Aérea Brasileira, por meio dos órgãos responsáveis pelo processo seletivo.',
    dataPublicacao: '[INFORMAR DATA DE PUBLICAÇÃO]',
    status: 'AGUARDANDO NOVO EDITAL',
    statusTipo: 'previsto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: 'Aguardando novo edital',
    vagas: '55 vagas para as três carreiras.',
    escolaridade: 'Ensino Médio concluído até a matrícula.',
    idade: 'Não ter menos de 17 anos nem completar 23 anos até 31 de dezembro do ano da matrícula.',
    duracao: '4 anos, em regime de internato.',
    carreirasLabel: 'Carreiras',
    carreiras: 'Oficial Aviador (CFOAV), Oficial Intendente (CFOINT) e Oficial de Infantaria (CFOINF).',
    remuneracaoCard: 'Conforme legislação militar',
    remuneracaoCardLabel: 'Remuneração durante a formação:',
    remuneracaoModalLabel: 'Remuneração',
    remuneracaoFormacao: 'Durante a formação, o aluno recebe remuneração como cadete, conforme a legislação militar vigente. O valor atualizado deve ser confirmado antes da publicação.',
    remuneracaoFormado: 'Durante a formação, o aluno recebe remuneração como cadete, conforme a legislação militar vigente. O valor atualizado deve ser confirmado antes da publicação.',
    beneficios: [
      'Alimentação, alojamento, fardamento e assistência à saúde, conforme as regras da instituição.'
    ],
    disciplinas: [
      'Matemática (Cálculo Preparatório, Geometria Analítica, Funções, Polinômios, Matrizes, Trigonometria e Probabilidade)',
      'Física (Mecânica Clássica, Termodinâmica, Ondulatória, Óptica Geométrica e Eletromagnetismo)',
      'Língua Portuguesa (Gramática Normativa, Morfossintaxe, Estilística e Interpretação Textual)',
      'Língua Inglesa (Gramática Avançada e Compreensão e Interpretação Textual)',
      'Redação (Texto Dissertativo-Argumentativo com critérios rigorosos da Força Aérea)'
    ],
    etapasResumo: 'Provas escritas, inspeção de saúde, avaliação psicológica, teste físico e validação documental. Para Aviadores, há também o Teste de Aptidão à Pilotagem Militar (TAPMIL).',
    etapas: [
      {
        titulo: 'Provas Escritas',
        descricao: 'Provas de Língua Portuguesa, Língua Inglesa, Matemática, Física e Redação eliminatória e classificatória.'
      },
      {
        titulo: 'Inspeção de Saúde',
        descricao: 'Avaliação médica, odontológica e exames laboratoriais realizados por Junta de Saúde da Aeronáutica.'
      },
      {
        titulo: 'Avaliação Psicológica',
        descricao: 'Exame vocacional e avaliação de adequação ao perfil psicológico exigido para a carreira militar aeronáutica.'
      },
      {
        titulo: 'Teste Físico',
        descricao: 'Avaliação do condicionamento físico com corrida, flexão de braços e abdominais conforme os índices do edital.'
      },
      {
        titulo: 'Validação Documental',
        descricao: 'Conferência detalhada e comprovação de todos os requisitos documentais exigidos para a matrícula.'
      },
      {
        titulo: 'Teste de Aptidão à Pilotagem Militar (TAPMIL)',
        descricao: 'Exclusivo para candidatos ao Curso de Formação de Oficiais Aviadores, realizado em simuladores e com avaliação de reflexos e coordenação motora.'
      }
    ],
    sobre: 'A Academia da Força Aérea (AFA), sediada em Pirassununga/SP, é o estabelecimento de ensino superior da Aeronáutica responsável pela formação dos líderes da Força Aérea Brasileira. Prepara os Cadetes nos Cursos de Oficiais Aviadores (CFOAV), Oficiais Intendentes (CFOINT) e Oficiais de Infantaria da Aeronáutica (CFOINF), oferecendo dupla diplomação de ensino superior e carreira militar de destaque.',
    diferenciais: [
      {
        titulo: 'Formação',
        descricao: 'Bacharelado duplo de nível superior (Ciências Militares e Administração Pública / Ciências Aeronáuticas).'
      },
      {
        titulo: 'Plano de carreira',
        descricao: 'Carreira de Oficialato permanente na Força Aérea Brasileira com possibilidade de ascensão até Brigadeiro.'
      },
      {
        titulo: 'Progressão',
        descricao: 'Estabilidade militar plena garantida por lei e remunerações progressivas ao longo de toda a carreira.'
      },
      {
        titulo: 'Benefícios',
        descricao: 'Alimentação, alojamento, fardamento e assistência à saúde, conforme as regras da instituição.'
      },
      {
        titulo: 'Desenvolvimento profissional',
        descricao: 'Instrução em simuladores de voo modernos, treinamento de liderança operacional e vivência aeronáutica integral.'
      },
      {
        titulo: 'Possibilidades de carreira',
        descricao: 'Atuação como piloto de caça, transporte ou asas rotativas, gestão logística ou comando de tropas de elite da Aeronáutica.'
      }
    ],
    preparacao: {

      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Instruções Específicas do Exame de Admissão aos CFO da Academia da Força Aérea (AFA) - FAB.'
  },
  {
    id: 'efomm',
    nome: 'EFOMM',
    subtitulo: 'Escola de Formação de Oficiais da Marinha Mercante',
    imagem: '/assets/capas-militar/efomm.jpg',
    orgaoLabel: 'Órgão responsável',
    orgao: 'Marinha do Brasil.',
    instituicao: 'Escola de Formação de Oficiais da Marinha Mercante (EFOMM), com formação no CIAGA (Rio de Janeiro–RJ) e no CIABA (Belém–PA).',
    concurso: 'Processo Seletivo EFOMM 2027.',
    edital: 'Edital do Processo Seletivo de Admissão à EFOMM (CIAGA e CIABA)',
    ultimoEdital: 'Publicado em maio de 2026.',
    banca: 'Marinha do Brasil, por meio dos Centros de Instrução e do Serviço de Seleção do Pessoal da Marinha.',
    dataPublicacao: '[INFORMAR DATA DE PUBLICAÇÃO]',
    status: 'AGUARDANDO NOVO EDITAL',
    statusTipo: 'previsto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: 'Aguardando novo edital',
    vagas: '368 vagas no total.',
    escolaridade: 'Ensino Médio completo até a data exigida para matrícula.',
    idade: 'Mínimo de 17 e máximo de 23 anos em 1º de janeiro do ano de realização do curso, conforme o edital.',
    duracao: '3 anos e meio, aproximadamente, incluindo período acadêmico e estágio embarcado.',
    areasLabel: 'Áreas de formação',
    areas: 'Náutica e Máquinas.',
    atuacaoProfissional: 'Formação de oficiais da Marinha Mercante para trabalhar em navios mercantes, plataformas e outras atividades do setor marítimo.',
    remuneracaoCard: 'Conforme legislação militar',
    remuneracaoCardLabel: 'Remuneração durante a formação:',
    remuneracaoModalLabel: 'Remuneração durante a formação',
    remuneracaoFormacao: 'O aluno recebe remuneração mensal conforme a legislação militar vigente; confirmar o valor atualizado antes da publicação.',
    remuneracaoFormado: 'O aluno recebe remuneração mensal conforme a legislação militar vigente; confirmar o valor atualizado antes da publicação.',
    beneficios: [
      'Ensino gratuito, alojamento, alimentação, uniformes e assistência médica e odontológica, entre outros.'
    ],
    disciplinas: [
      'Matemática (Álgebra, Geometria Plana e Espacial, Geometria Analítica, Funções, Trigonometria e Matrizes)',
      'Física (Mecânica, Hidrostática, Termologia, Óptica, Ondas, Eletricidade e Eletromagnetismo)',
      'Língua Portuguesa e Redação (Gramática Aplicada, Interpretação Textual e Dissertação Argumentativa)',
      'Língua Inglesa (Vocabulário Geral e Náutico, Gramática e Interpretação Textual)',
      'Química (Química Geral, Físico-Química e Química Inorgânica)'
    ],
    etapasResumo: 'Provas escritas, inspeção de saúde, teste de suficiência física, avaliação documental e período de adaptação, conforme o edital.',
    etapas: [
      {
        titulo: 'Provas Escritas',
        descricao: 'Provas eliminatórias e classificatórias de Português, Redação, Inglês, Matemática e Física.'
      },
      {
        titulo: 'Inspeção de Saúde',
        descricao: 'Exames médicos, laboratoriais e oftalmológicos rigorosos conforme as normas da Marinha do Brasil.'
      },
      {
        titulo: 'Teste de Suficiência Física',
        descricao: 'Provas práticas eliminatórias de corrida e natação com índices previstos em edital.'
      },
      {
        titulo: 'Avaliação Documental',
        descricao: 'Conferência detalhada e comprovação de todos os requisitos documentais exigidos para o ingresso.'
      },
      {
        titulo: 'Período de Adaptação',
        descricao: 'Apresentação no CIAGA (RJ) ou CIABA (PA) para período de adaptação às rotinas e matrícula no curso de formação.'
      }
    ],
    sobre: 'A Escola de Formação de Oficiais da Marinha Mercante (EFOMM), administrada pela Marinha do Brasil por meio do CIAGA (Rio de Janeiro/RJ) e do CIABA (Belém/PA), forma os Oficiais de Náutica (Comandantes) e Oficiais de Máquinas que operam navios mercantes, petroleiros, embarcações offshore e cruzeiros pelo mundo. Forma profissionais de padrão internacional com uma das carreiras mais bem remuneradas do país.',
    diferenciais: [
      {
        titulo: 'Formação',
        descricao: 'Bacharelado em Ciências Náuticas com certificação marítima internacional reconhecida pela IMO.'
      },
      {
        titulo: 'Plano de carreira',
        descricao: 'Rápida evolução a Capitão de Longo Curso (Comandante) ou Chefe de Máquinas nas maiores companhias do mundo.'
      },
      {
        titulo: 'Progressão',
        descricao: 'Salários iniciais superiores a R$ 10.000,00 com potencial acima de R$ 25.000,00 no auge da carreira embarcada.'
      },
      {
        titulo: 'Benefícios',
        descricao: 'Ensino gratuito, alojamento, alimentação, uniformes e assistência médica e odontológica, entre outros.'
      },
      {
        titulo: 'Desenvolvimento profissional',
        descricao: 'Instrução em simuladores de passadiço e praça de máquinas de última geração e viagens de instrução oceânicas.'
      },
      {
        titulo: 'Possibilidades de carreira',
        descricao: 'Atuação em petroleiros, navios de carga geral, navios gaseiros, rebocadores de apoio offshore e navios de turismo internacional.'
      }
    ],
    preparacao: {

      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Edital Oficial do Processo Seletivo às Escolas de Formação de Oficiais da Marinha Mercante (EFOMM) - CIAGA/CIABA.'
  },
  {
    id: 'espcex',
    nome: 'EsPCEx',
    subtitulo: 'Escola Preparatória de Cadetes do Exército',
    imagem: '/assets/capas-militar/espcex.jpg',
    orgao: 'Exército Brasileiro.',
    instituicao: 'Escola Preparatória de Cadetes do Exército (EsPCEx), localizada em Campinas–SP.',
    concurso: 'Concurso de Admissão à EsPCEx 2026/2027.',
    edital: 'Concurso de Admissão à EsPCEx / Linha de Ensino Militar Bélico do Exército Brasileiro',
    ultimoEdital: 'Publicado em 22 de abril de 2026.',
    banca: 'Exército Brasileiro, por meio da EsPCEx e dos órgãos responsáveis pelo concurso.',
    dataPublicacao: '[INFORMAR DATA DE PUBLICAÇÃO]',
    status: 'INSCRIÇÕES ABERTAS',
    statusTipo: 'aberto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: 'Aguardando novo edital',
    vagas: '440, sendo 400 para candidatos do sexo masculino e 40 para o feminino.',
    escolaridade: 'Ensino Médio concluído ou em conclusão no ano da inscrição, conforme o edital.',
    idade: 'Ter entre 17 e 22 anos, completados até 31 de dezembro do ano da matrícula.',
    duracao: '5 anos, sendo 1 ano na EsPCEx e 4 anos na Academia Militar das Agulhas Negras (AMAN), em regime de formação militar.',
    carreirasLabel: 'Carreira',
    carreiras: 'Formação de oficiais combatentes do Exército, nas áreas de Infantaria, Cavalaria, Artilharia, Engenharia, Comunicações, Material Bélico e Intendência, conforme a escolha e as regras de classificação.',
    remuneracaoCard: 'Conforme legislação militar',
    remuneracaoCardLabel: 'Remuneração durante a formação:',
    remuneracaoModalLabel: 'Remuneração',
    remuneracaoFormacao: 'Durante a formação, o aluno recebe remuneração militar. Após a conclusão da formação, o militar é declarado Aspirante a Oficial; a remuneração depende da graduação e das normas vigentes.',
    remuneracaoFormado: 'Durante a formação, o aluno recebe remuneração militar. Após a conclusão da formação, o militar é declarado Aspirante a Oficial; a remuneração depende da graduação e das normas vigentes.',
    beneficios: [
      'Formação gratuita, alojamento, alimentação, uniformes e assistência à saúde, conforme as normas militares.'
    ],
    disciplinas: [
      'Matemática (Álgebra, Geometria Plana/Espacial/Analítica, Funções, Trigonometria, Polinômios, Matrizes e Probabilidade)',
      'Física (Mecânica Clássica, Termologia, Óptica, Ondas, Gravitação, Eletricidade e Eletromagnetismo)',
      'Química (Química Geral, Atomística, Estequiometria, Físico-Química, Soluções, Termoquímica e Química Orgânica)',
      'Língua Portuguesa e Literatura (Morfossintaxe, Regência, Crase, Pontuação, Teoria Literária e Escolas Nacionais)',
      'Redação (Texto Dissertativo-Argumentativo com Critérios Exclusivos do Exército Brasileiro)',
      'História (História Geral da Antiguidade à Contemporaneidade e História Completa do Brasil)',
      'Geografia (Geografia Geral Física e Econômica e Geografia Humana, Regional e Geopolítica do Brasil)',
      'Língua Inglesa (Interpretação Textual, Gramática Aplicada e Domínio de Vocabulário)'
    ],
    etapas: [
      {
        titulo: '1ª Etapa - Exame Intelectual (EI)',
        descricao: 'Dois dias de provas de alto rigor acadêmico com Matemática, Física, Química, Português, Redação, História, Geografia e Inglês.'
      },
      {
        titulo: '2ª Etapa - Inspeção de Saúde (IS)',
        descricao: 'Exames laboratoriais, radiológicos, oftalmológicos, toxicológicos e clínicos minuciosos.'
      },
      {
        titulo: '3ª Etapa - Exame de Aptidão Física (EAF)',
        descricao: 'Flexão na barra fixa, flexão de braços sobre o solo, abdominal supra e corrida de 12 minutos.'
      },
      {
        titulo: '4ª Etapa - Avaliação Psicológica (AP)',
        descricao: 'Avaliação vocacional, liderança e capacidade de suportar situações de estresse operacional.'
      },
      {
        titulo: '5ª Etapa - Comprovação dos Requisitos e Matrícula',
        descricao: 'Conferência documental e incorporação à EsPCEx em Campinas/SP.'
      }
    ],
    sobre: 'A Escola Preparatória de Cadetes do Exército (EsPCEx) é a instituição de ensino militar sediada em Campinas (SP) responsável pela seleção e pelo primeiro ano de formação do futuro Oficial de Carreira das Armas de Infantaria, Cavalaria, Artilharia, Engenharia, Comunicações, Material Bélico e Intendência do Exército Brasileiro. Os quatro anos seguintes são cursados na prestigiosa Academia Militar das Agulhas Negras (AMAN), em Resende (RJ), concluindo com o título de Bacharel em Ciências Militares.',
    diferenciais: [
      {
        titulo: 'Formação',
        descricao: 'Bacharelado em Ciências Militares cursado na histórica Academia Militar das Agulhas Negras.'
      },
      {
        titulo: 'Plano de carreira',
        descricao: 'Carreira de Oficial Combatente: Tenente, Capitão, Major, Tenente-Coronel, Coronel e General de Exército.'
      },
      {
        titulo: 'Progressão',
        descricao: 'Remuneração que ultrapassa R$ 15.000,00 nos postos intermediários e R$ 25.000,00 no generalato.'
      },
      {
        titulo: 'Benefícios',
        descricao: 'Formação gratuita, alojamento, alimentação, uniformes e assistência à saúde, conforme as normas militares.'
      },
      {
        titulo: 'Desenvolvimento profissional',
        descricao: 'Cursos de Estado-Maior, missões de defesa de fronteira e cooperação internacional na ONU.'
      },
      {
        titulo: 'Possibilidades de carreira',
        descricao: 'Comando de regimentos, batalhões, diretorias e missões estratégicas no Brasil e no exterior.'
      }
    ],
    preparacao: {

      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Edital do Concurso de Admissão à EsPCEx (Exército Brasileiro) e Tabela de Soldos Militares (Lei 13.954/2019).'
  },
  {
    id: 'colegio-naval',
    nome: 'Colégio Naval',
    subtitulo: 'Escola de Formação de Aspirantes da Marinha',
    imagem: '/assets/capas-militar/colegio-naval.jpeg',
    orgao: 'Marinha do Brasil.',
    edital: 'Concurso de Admissão ao Colégio Naval (CPACN)',
    ultimoEditalLabel: 'Último edital consultado',
    ultimoEdital: '2026.',
    banca: 'Serviço de Seleção do Pessoal da Marinha (SSPM).',
    dataPublicacao: '[INFORMAR DATA DE PUBLICAÇÃO]',
    status: 'AGUARDANDO NOVO EDITAL',
    statusTipo: 'previsto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: 'Aguardando novo edital',
    vagas: '156, sendo 142 masculinas e 14 femininas.',
    escolaridade: 'Ensino Fundamental completo ou conclusão do 9º ano, conforme o edital.',
    idade: '15 anos completos e menos de 18 anos em 30 de junho do ano de início do curso.',
    duracao: '3 anos, em regime de internato.',
    remuneracaoCard: 'R$ 1.398,30 brutos mensais',
    remuneracaoCardLabel: 'Remuneração durante a formação:',
    remuneracaoModalLabel: 'Remuneração durante a formação',
    remuneracaoFormacao: 'R$ 1.398,30 brutos mensais, conforme valor divulgado pela Marinha.',
    remuneracaoFormado: 'R$ 1.398,30 brutos mensais, conforme valor divulgado pela Marinha.',
    beneficios: [
      'Ensino gratuito, alimentação, uniformes e assistência médica e odontológica.'
    ],
    disciplinas: [
      'Matemática (Aritmética, Álgebra, Geometria Euclidiana Plana e Trigonometria Básica)',
      'Língua Portuguesa (Gramática Normativa, Morfossintaxe e Interpretação Textual)',
      'Redação (Texto Dissertativo-Argumentativo conforme critérios da banca da Marinha)',
      'Estudos Sociais (História do Brasil e Geografia do Brasil)',
      'Ciências (Física e Química do Ensino Fundamental)',
      'Língua Inglesa (Gramática Básica e Compreensão de Textos)'
    ],
    etapasResumo: 'Provas escritas, inspeção de saúde, teste físico, avaliação psicológica e verificação documental, entre outras previstas no edital.',
    etapas: [
      {
        titulo: 'Provas Escritas',
        descricao: 'Provas escritas com Matemática, Língua Portuguesa, Estudos Sociais, Ciências, Língua Inglesa e Redação eliminatória.'
      },
      {
        titulo: 'Inspeção de Saúde',
        descricao: 'Avaliação médica, odontológica e exames laboratoriais realizados pela Junta de Saúde da Marinha.'
      },
      {
        titulo: 'Teste Físico',
        descricao: 'Teste de aptidão física com provas práticas eliminatórias de natação e corrida conforme os índices do edital.'
      },
      {
        titulo: 'Avaliação Psicológica',
        descricao: 'Avaliação da aptidão vocacional e do perfil psicológico exigido para a rotina e regime militar-naval.'
      },
      {
        titulo: 'Verificação Documental',
        descricao: 'Conferência detalhada, validação de certidões, documentos escolares e comprovação dos requisitos de matrícula.'
      }
    ],
    sobre: 'O Colégio Naval (CN) é uma instituição de ensino de excelência da Marinha do Brasil, sediada em Angra dos Reis/RJ. Tem por missão preparar os alunos para o Curso de Graduação de Oficiais da Escola Naval. Os alunos cursam o Ensino Médio com padrão acadêmico e esportivo internacional, recebem remuneração mensal e garantem sua vaga para se tornarem Oficiais da Marinha do Brasil.',
    diferenciais: [
      {
        titulo: 'Formação',
        descricao: 'Ensino Médio de excelência e tradição secular da Marinha do Brasil.'
      },
      {
        titulo: 'Plano de carreira',
        descricao: 'Ingresso direto na Escola Naval para carreira de Oficial de Marinha, Fuzileiro Naval ou Intendente.'
      },
      {
        titulo: 'Progressão',
        descricao: 'Ascensão contínua na hierarquia militar-naval até o almirantado.'
      },
      {
        titulo: 'Benefícios',
        descricao: 'Ensino gratuito, alimentação, uniformes e assistência médica e odontológica.'
      }
    ],
    preparacao: {

      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Edital Oficial de Admissão ao Colégio Naval (CPACN) - Marinha do Brasil.'
  },
  {
    id: 'epcar',
    nome: 'EPCAR',
    subtitulo: 'Escola Preparatória de Cadetes do Ar',
    imagem: '/assets/capas-militar/epcar.png',
    orgao: 'Força Aérea Brasileira (FAB).',
    instituicao: 'Escola Preparatória de Cadetes do Ar (EPCAR).',
    concurso: 'Exame de Admissão ao Curso Preparatório de Cadetes do Ar (CPCAR 2027).',
    edital: 'Exame de Admissão ao CPCAR (Barbacena/MG)',
    ultimoEdital: '2026, referente ao ingresso em 2027.',
    banca: 'Força Aérea Brasileira, por meio dos órgãos responsáveis pelo processo seletivo.',
    dataPublicacao: '[INFORMAR DATA DE PUBLICAÇÃO]',
    status: 'AGUARDANDO NOVO EDITAL',
    statusTipo: 'previsto',
    inscricoes: {
      inicio: 'Aguardando novo edital',
      fim: ''
    },
    dataProva: 'Aguardando novo edital',
    vagas: '150 para candidatos de ambos os sexos.',
    escolaridade: 'Ensino Fundamental concluído até a data exigida para matrícula.',
    idade: 'Não ter menos de 14 anos nem completar 19 anos até 31 de dezembro de 2027.',
    duracao: '3 anos, em regime de internato.',
    remuneracaoCard: 'Conforme legislação militar',
    remuneracaoCardLabel: 'Remuneração durante a formação:',
    remuneracaoModalLabel: 'Remuneração',
    remuneracaoFormacao: 'O valor deve ser confirmado no edital e nas normas remuneratórias aplicáveis; não consegui confirmar um valor oficial atualizado para divulgação.',
    remuneracaoFormado: 'O valor deve ser confirmado no edital e nas normas remuneratórias aplicáveis; não consegui confirmar um valor oficial atualizado para divulgação.',
    beneficios: [
      'Ensino Médio de elite acadêmica e militar no Berço dos Aviadores da FAB',
      'Vaga direta garantida na Academia da Força Aérea (AFA/SP) sem novo vestibular',
      'Recebimento de bolsa-auxílio financeira mensal durante os 3 anos de curso',
      'Custeio integral de alojamento, fardas, alimentação de alta qualidade e material didático',
      'Assistência médico-hospitalar e odontológica do Sistema de Saúde da Aeronáutica (SISAU)',
      'Treinamento físico, liderança militar, espírito aeronáutico e convivência em internato'
    ],
    disciplinas: [
      'Língua Portuguesa (Gramática Geral, Morfologia, Sintaxe do Período, Ortografia e Interpretação Textual)',
      'Matemática (Aritmética, Álgebra, Geometria Plana, Polinômios, Frações Algébricas e Funções)',
      'Língua Inglesa (Vocabulário, Compreensão Textual e Estruturas Gramaticais Fundamentais)',
      'Redação (Texto Dissertativo-Argumentativo com temas da atualidade e critérios da FAB)'
    ],
    etapas: [
      {
        titulo: '1ª Etapa - Provas Escritas e Redação',
        descricao: 'Língua Portuguesa, Matemática, Língua Inglesa e Redação eliminatória e classificatória.'
      },
      {
        titulo: '2ª Etapa - Inspeção de Saúde (INSPSAU)',
        descricao: 'Avaliação médica e odontológica realizada por Junta Especial de Saúde da Aeronáutica.'
      },
      {
        titulo: '3ª Etapa - Exame de Aptidão Psicológica (EAP)',
        descricao: 'Avaliação vocacional e do perfil psicológico exigido para a carreira militar aeronáutica.'
      },
      {
        titulo: '4ª Etapa - Teste de Avaliação do Condicionamento Físico (TACF)',
        descricao: 'Flexão de braços, abdominais e corrida contínua de 12 minutos.'
      },
      {
        titulo: '5ª Etapa - Procedimento de Heteroidentificação e Validação Documental',
        descricao: 'Comprovação de requisitos legais, declarações e conferência de documentos escolares.'
      },
      {
        titulo: '6ª Etapa - Matrícula e Início do Curso (CPCAR)',
        descricao: 'Ingresso na "Nascente do Poder Aéreo" em Barbacena/MG e início da carreira militar.'
      }
    ],
    sobre: 'A Escola Preparatória de Cadetes do Ar (EPCAR), conhecida como a "Nascente do Poder Aéreo", é o estabelecimento de ensino da Força Aérea Brasileira localizado em Barbacena/MG. Seu objetivo é ministrar o Ensino Médio regular e preparar os futuros Cadetes para a Academia da Força Aérea (AFA), formando os futuros Oficiais da Aviação Militar do Brasil.',
    diferenciais: [
      {
        titulo: 'Formação',
        descricao: 'Ensino Médio de elite reconhecido entre as maiores notas do país no ENEM.'
      },
      {
        titulo: 'Plano de carreira',
        descricao: 'Vaga automática garantida na Academia da Força Aérea (AFA) sem vestibular concorrente.'
      },
      {
        titulo: 'Progressão',
        descricao: 'Formação e ascensão na carreira militar da Aeronáutica até o oficialato superior.'
      },
      {
        titulo: 'Benefícios',
        descricao: 'Estrutura completa com alojamentos, 4 refeições diárias, fardas e saúde integral custeados.'
      }
    ],
    preparacao: {

      modalidades: [
        'Presencial na Unidade Caxias',
        'Online — aulas ao vivo com interação em tempo real',
        'EAD — aulas gravadas online na plataforma para rever quando quiser'
      ]
    },
    fonte: 'Edital Oficial do Exame de Admissão ao CPCAR (Comando da Aeronáutica / DIRENS) e Lei 13.954/2019.'
  }
];

export interface CareerDifferential {
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export const CAREER_DIFFERENTIALS: CareerDifferential[] = [
  {
    title: 'Formação Profissional de Alto Nível',
    description: 'Cursos de graduação superior (Tecnólogo ou Bacharelado) e Ensino Médio de elite reconhecidos pelo MEC e pelas Forças Armadas.',
    detail: 'Sem custos de mensalidade e com custeio integral de material, alojamento e fardamento.',
    iconName: 'GraduationCap'
  },
  {
    title: 'Estabilidade Funcional na Carreira',
    description: 'Segurança funcional e jurídica prevista na Constituição e no Estatuto dos Militares para os quadros de carreira efetiva.',
    detail: 'Tranquilidade para planejar o futuro profissional e pessoal sem a volatilidade do mercado privado.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Plano de Carreira e Progressão Regular',
    description: 'Hierarquia bem definida com promoções periódicas por antiguidade e merecimento até os postos e graduações superiores.',
    detail: 'Previsibilidade clara de evolução salarial e responsabilidades ao longo dos anos de serviço.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Assistência Médica, Odontológica e Social',
    description: 'Acesso a hospitais, clínicas e policlínicas exclusivas das Forças Armadas para o militar e seus dependentes legais.',
    detail: 'Amparo de saúde de referência em diversas capitais e regiões militares do país.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Desenvolvimento e Especializações de Elite',
    description: 'Possibilidade de realizar cursos de extensão operacional e técnica em áreas estratégicas da defesa nacional.',
    detail: 'Aviação, Paraquedismo, Operações Especiais, Tráfego Aéreo, Cibernética e Relações Internacionais.',
    iconName: 'Award'
  },
  {
    title: 'Atuação em Diversas Áreas e Regiões',
    description: 'Mobilidade e atuação em missões humanitárias, defesa de fronteiras, cooperação internacional e operações de paz da ONU.',
    detail: 'Experiência profissional ampla e diversificada em diferentes biomas e estados brasileiros.',
    iconName: 'Compass'
  }
];
