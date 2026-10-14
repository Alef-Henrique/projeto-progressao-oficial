import { CourseData, SchoolSegmentData, TeacherMember, TestimonialItem, StructureItem, FaqItem } from '../types';

export const COURSES_DATA: Record<string, CourseData> = {
  'preparatorio-militar': {
    id: 'preparatorio-militar',
    slug: '/cursos/preparatorio-militar',
    title: 'Preparatório Militar',
    subtitle: 'Preparação de alta intensidade e disciplina para as escolas e academias militares mais disputadas do Brasil.',
    badge: 'Carreiras Militares',
    iconName: 'Shield',
    image: '/assets/emerson-moura-esa.jpg',
    classFormat: 'Presencial | Manhã, Tarde ou Noite',
    description: 'Turmas intensivas para EsPCEx, AFA, Colégio Naval, EPCAr, ESA, EEAr e Colégios Militares.',
    detailedText: 'O curso preparatório militar do Progressão Caxias foca no desenvolvimento da base teórica densa em exatas e linguagens, combinada com resolução exaustiva de provas anteriores, treinamento de velocidade e simulados regulares nos moldes oficiais de cada força armada.',
    targetAudience: [
      'Jovens que sonham em ingressar como Oficiais ou Sargentos das Forças Armadas',
      'Estudantes em busca de estabilidade, carreira de liderança e honra militar',
      'Alunos do Ensino Fundamental e Médio que desejam entrar em colégios militares'
    ],
    disciplines: [
      'Matemática Aprofundada (Álgebra, Geometria, Trigonometria e Cálculo preparatório)',
      'Física Teórica e Aplicada (Mecânica, Termologia, Óptica, Eletromagnetismo)',
      'Química Geral, Físico-Química e Química Orgânica',
      'Língua Portuguesa, Gramática Normativa e Literatura',
      'Redação Padrão Militar com critérios de correção estritos',
      'Língua Inglesa voltada para interpretação técnica e gramática',
      'História do Brasil e Geografia do Brasil'
    ],
    disciplinas: [
      'Matemática Aprofundada',
      'Física Teórica e Aplicada',
      'Química Geral',
      'Língua Portuguesa e Gramática',
      'Redação Padrão Militar',
      'Inglês e Conhecimentos Gerais'
    ],
    differentials: [
      'Apostilas direcionadas com histórico de questões das bancas militares',
      'Simulados ranqueados nos mesmos moldes de tempo e regras das provas oficiais',
      'Plantão de dúvidas individualizado com professores especializados',
      'Orientação motivacional e disciplina de estudos voltada ao meio militar'
    ],
    methodology: 'Ciclo constante de aprendizagem conceitual, fixação por listas temáticas, simulados oficiais e monitoria de dúvidas.',
    methodologySummary: 'Ciclo constante de aprendizagem conceitual, fixação por listas temáticas, simulados oficiais e monitoria de dúvidas.',
    simuladosFrequency: 'Simulados quinzenais cronometrados aos sábados nos horários padrão das bancas.',
    simuladosInfo: 'Simulados quinzenais cronometrados reproduzindo cartão de respostas e regras oficiais das bancas.',
    resultsPlaceholder: '[NÚMERO DE APROVAÇÕES MILITARES]',
    testimonialsPlaceholder: '[DEPOIMENTO DO ALUNO APROVADO - Relato sobre a jornada de estudos para a carreira militar no Progressão Caxias.]',
    concursosAtendidos: [
      'EsPCEx (Escola Preparatória de Cadetes do Exército)',
      'AFA (Academia da Força Aérea)',
      'Colégio Naval & EPCAr',
      'ESA (Escola de Sargentos das Armas)',
      'EEAr (Escola de Especialistas de Aeronáutica)',
      'EFOMM (Escola de Formação de Oficiais da Marinha Mercante)'
    ],
    faqs: [
      {
        question: 'A partir de qual idade o aluno pode iniciar o preparatório militar?',
        answer: 'Temos turmas para o público que prestará Colégio Naval/EPCAr (a partir de 14 anos) e para turmas de nível médio como ESA, EsPCEx e EEAr (a partir de 16/17 anos). Consulte nossa secretaria para o enquadramento por edital.'
      },
      {
        question: 'O curso oferece simulados nos moldes das bancas militares?',
        answer: 'Sim. Os simulados reproduzem folha de respostas oficial, pontuação com nota de corte e controle rígido de tempo de prova.'
      },
      {
        question: 'Há orientação para as demais etapas do concurso (TAF e inspeção de saúde)?',
        answer: 'Sim, realizamos palestras explicativas e orientações pontuais sobre as fases subsequentes de cada concurso militar.'
      }
    ]
  },
  'enem': {
    id: 'enem',
    slug: '/cursos/enem',
    title: 'ENEM',
    subtitle: 'Estratégia focada na Teoria de Resposta ao Item (TRI), Redação Nota 1000 e domínio das 4 áreas do conhecimento.',
    badge: 'Exame Nacional',
    iconName: 'GraduationCap',
    image: '/assets/vestibular.webp',
    classFormat: 'Presencial | Manhã, Tarde ou Noite',
    description: 'Treinamento completo para conquistar nota máxima no ENEM e garantir vaga no SISU, PROUNI ou FIES.',
    detailedText: 'O Exame Nacional do Ensino Médio exige mais do que saber a matéria: exige interpretação ágil, resistência física e psicológica para 5 horas de prova e estratégia de pontuação através da TRI. O Progressão Caxias trabalha cada competência exigida pela matriz do ENEM.',
    targetAudience: [
      'Estudantes que buscam os cursos mais concorridos (Medicina, Direito, Engenharias, Odontologia)',
      'Alunos do 3º ano do Ensino Médio ou já formados em busca de aprovação federal',
      'Candidatos que necessitam elevar a nota de Redação e Matemática'
    ],
    disciplines: [
      'Linguagens, Códigos e suas Tecnologias (Interpretação, Artes, Literatura e Inglês/Espanhol)',
      'Ciências Humanas e suas Tecnologias (História, Geografia, Filosofia e Sociologia)',
      'Ciências da Natureza e suas Tecnologias (Biologia, Física e Química com ênfase prática)',
      'Matemática e suas Tecnologias (Modelagem de problemas e raciocínio lógico-quantitativo)',
      'Laboratório Semanal de Redação com correções detalhadas por competência do INEP'
    ],
    disciplinas: [
      'Linguagens e Códigos',
      'Ciências Humanas',
      'Ciências da Natureza',
      'Matemática e Suas Tecnologias',
      'Redação Nota 1000',
      'Interpretação e Atualidades'
    ],
    differentials: [
      'Correção de redação individualizada seguindo as 5 competências oficiais da banca examinadora',
      'Plataforma de exercícios com questões categorizadas por habilidades da matriz de referência',
      'Simulados com cálculo estimado de TRI para entender o ganho real de proficiência',
      'Aulas de revisão estratégica no período pré-prova'
    ],
    methodology: 'Aulas teóricas dinâmicas, listas semanais focadas nas competências do exame e oficinas intensivas de redação.',
    methodologySummary: 'Aulas teóricas dinâmicas, listas semanais focadas nas competências do exame e oficinas de redação.',
    simuladosFrequency: 'Simulados mensais em dois domingos consecutivos nos mesmos horários de aplicação do ENEM.',
    simuladosInfo: 'Simulados oficiais com cálculo estimado de TRI e folha de redação nos moldes do INEP.',
    resultsPlaceholder: '[NÚMERO DE APROVAÇÕES NO ENEM]',
    testimonialsPlaceholder: '[DEPOIMENTO DO ALUNO APROVADO - Relato sobre como a preparação para o ENEM no Progressão Caxias garantiu a vaga no SISU.]',
    concursosAtendidos: [
      'SISU (Universidades Federais e Estaduais de todo o Brasil)',
      'PROUNI (Bolsas integrais e parciais em faculdades privadas)',
      'FIES (Financiamento estudantil governamental)',
      'Universidades em Portugal conveniadas com a nota do ENEM'
    ],
    faqs: [
      {
        question: 'Quantas redações o aluno pode produzir e enviar para correção por mês?',
        answer: 'O aluno tem direito a envios regulares semanais de redações, recebendo devolutiva comentada detalhando pontos a aprimorar em cada competência.'
      },
      {
        question: 'O cálculo dos simulados utiliza a TRI do ENEM?',
        answer: 'Sim, nossos simulados ENEM possuem ponderação estatística para que o estudante compreenda a coerência pedagógica do seu padrão de acertos.'
      }
    ]
  },
  'pre-vestibular': {
    id: 'pre-vestibular',
    slug: '/cursos/pre-vestibular',
    title: 'Pré-Vestibular & ENEM',
    subtitle: 'Preparação integrada para o ENEM (foco em TRI e Redação Nota 1000) e os vestibulares mais concorridos (UERJ, Medicina, UFRJ e federais).',
    badge: 'ENEM & Vestibulares Tradicionais',
    iconName: 'BookOpen',
    image: '/assets/vestibular.webp',
    classFormat: 'Presencial e Online | Manhã, Tarde ou Noite',
    description: 'Treinamento completo combinando a inteligência analítica do ENEM com o aprofundamento das provas discursivas da UERJ e vestibulares de Medicina.',
    detailedText: 'No Progressão Caxias, a preparação para o ENEM e para os Vestibulares Estaduais (como UERJ) ocorre de maneira integrada e estratégica. O aluno desenvolve rapidez de resolução e coerência pedagógica para a TRI do ENEM, domina o laboratório semanal de Redação Nota 1000, e simultaneamente se aprofunda nas obras literárias obrigatórias e na fundamentação de questões discursivas para cursos de alta nota de corte.',
    targetAudience: [
      'Estudantes que buscam os cursos mais concorridos (Medicina, Direito, Engenharias e Odontologia)',
      'Candidatos ao ENEM com foco em vagas federais via SISU, bolsas PROUNI e FIES',
      'Vestibulandos que prestarão UERJ (Exame de Qualificação e Discursivo) e vestibulares estaduais',
      'Alunos do 3º ano do Ensino Médio ou já formados em busca de aprovação com excelência'
    ],
    disciplines: [
      'Linguagens, Códigos e Análise das Obras Literárias Obrigatórias (ENEM e UERJ)',
      'Ciências da Natureza: Física, Química e Biologia com resolução de questões discursivas',
      'Ciências Humanas: História, Geografia, Filosofia e Sociologia com pensamento crítico',
      'Matemática e suas Tecnologias: Modelagem de problemas e desenvolvimento formal discursivo',
      'Laboratório Semanal de Redação com correções individuais pelas 5 competências do INEP e banca UERJ',
      'Plantões de Resolução de Provas Anteriores e Oficinas de Estratégia de Prova'
    ],
    disciplinas: [
      'Linguagens & Literatura',
      'Redação Nota 1000',
      'Ciências da Natureza',
      'Ciências Humanas',
      'Matemática & TRI',
      'Provas Discursivas'
    ],
    differentials: [
      'Laboratório Semanal de Redação com correção individualizada nos critérios INEP e banca UERJ',
      'Treinamento específico em Teoria de Resposta ao Item (TRI) e gerenciamento de tempo de prova',
      'Estudo aprofundado das obras literárias oficiais exigidas no edital da UERJ',
      'Treinamento técnico de respostas discursivas para pontuação máxima no espelho da banca',
      'Simulados duplos oficiais: calendário modelo ENEM e calendário modelo UERJ',
      'Professores especialistas nas bancas mais concorridas do Rio de Janeiro'
    ],
    methodology: 'Metodologia integrada: teoria sólida, oficinas semanais de redação, análise de obras literárias e simulados diagnósticos frequentes.',
    methodologySummary: 'Metodologia integrada: teoria sólida, oficinas semanais de redação, análise de obras literárias e simulados diagnósticos frequentes.',
    simuladosFrequency: 'Simulados mensais modelo ENEM (em 2 domingos consecutivos) e simulados específicos UERJ (Qualificação e Discursivo).',
    simuladosInfo: 'Simulados oficiais com cálculo estimado de TRI do ENEM e cadernos no formato exato da banca UERJ.',
    resultsPlaceholder: '[NÚMERO DE APROVAÇÕES NO ENEM E UERJ]',
    testimonialsPlaceholder: '[DEPOIMENTO DO ALUNO APROVADO - Relato sobre a aprovação em universidade pública através do Pré-Vestibular & ENEM do Progressão Caxias.]',
    concursosAtendidos: [
      'ENEM / SISU (Universidades Federais em todo o Brasil)',
      'UERJ (Vestibular Estadual - Qualificação e Discursivo)',
      'PROUNI e FIES (Bolsas e financiamento estudantil)',
      'Vestibulares de Medicina (Faculdades particulares renomadas e estaduais)',
      'Universidades em Portugal conveniadas com a nota do ENEM'
    ],
    faqs: [
      {
        question: 'Como funciona a preparação conjunta para o ENEM e para a UERJ?',
        answer: 'Nossa grade contempla tanto a matriz de competências e TRI do ENEM quanto os conteúdos específicos, obras literárias e formato discursivo exigidos pela UERJ, permitindo que o aluno concorra com força máxima em ambas as frentes.'
      },
      {
        question: 'Quantas redações posso produzir e enviar para correção por mês?',
        answer: 'O estudante tem direito a envios semanais de redações, com devolutiva detalhada e individualizada pontuando cada competência do ENEM e a estrutura discursiva da UERJ.'
      },
      {
        question: 'O curso analisa todos os livros cobrados na UERJ?',
        answer: 'Sim, realizamos aulas especiais e fornecemos material exclusivo de análise de enredo, personagens e contexto sociocultural para todas as obras indicadas no edital.'
      },
      {
        question: 'Os simulados do curso contam com nota calculada pela TRI?',
        answer: 'Sim, os simulados do ENEM possuem calibragem estatística para que o aluno compreenda a coerência pedagógica do seu padrão de acertos e estime sua pontuação real.'
      }
    ]
  },
  'concursos': {
    id: 'concursos',
    slug: '/cursos/concursos',
    title: 'Concursos Públicos',
    subtitle: 'Caminho sólido para a estabilidade financeira e profissional nas esferas municipal, estadual e federal.',
    badge: 'Carreiras Públicas',
    iconName: 'Award',
    image: '/assets/pmerj.jpeg',
    classFormat: 'Presencial | Noite ou Finais de Semana',
    description: 'Preparação para carreiras administrativas, policiais, tribunais e educação com professores experientes em bancas.',
    detailedText: 'Passar em um concurso público requer metodologia, domínio da legislação e estudo direcionado pelo edital. No Progressão Caxias, o aluno estuda com material atualizado e estratégias de resolução rápida das principais bancas examinadoras (FGV, Cebraspe, FCC, Instituto Selecon, IBFC, etc.).',
    targetAudience: [
      'Profissionais que buscam estabilidade definitiva e remuneração atrativa',
      'Candidatos a concursos de Prefeituras, Estado do RJ e órgãos Federais',
      'Interessados em Carreiras Policiais (PMERJ, PCERJ, PRF, PF) e Tribunais'
    ],
    disciplines: [
      'Língua Portuguesa para Concursos e Interpretação de Texto Avançada',
      'Raciocínio Lógico-Matemático e Matemática Básica para Concursos',
      'Direito Constitucional (Direitos Fundamentais, Organização do Estado)',
      'Direito Administrativo (Princípios, Atos, Licitações, Regime Jurídico)',
      'Informática Básica e Segurança da Informação para Concursos',
      'Legislações Específicas conforme editais abertos ou previstos'
    ],
    disciplinas: [
      'Português para Concursos',
      'Raciocínio Lógico-Matemático',
      'Direito Constitucional',
      'Direito Administrativo',
      'Informática para Concursos',
      'Legislação Aplicada'
    ],
    differentials: [
      'Turmas com foco em editais iminentes e lançados',
      'Aulas com resolução comentada de questões recentes das bancas',
      'Material sintético e mapas mentais para rápida memorização de leis',
      'Acompanhamento de calendário de inscrições e editais'
    ],
    methodology: 'Estudo reverso através de questões de provas anteriores, teoria sintetizada e simulados pontuais.',
    methodologySummary: 'Estudo reverso através de questões de provas anteriores, teoria sintetizada e simulados pontuais.',
    simuladosFrequency: 'Simulados quinzenais por banca examinadora com gabarito comentado.',
    simuladosInfo: 'Simulados por banca examinadora (Cebraspe, FGV, FCC, Selecon) com gabarito comentado.',
    resultsPlaceholder: '[NÚMERO DE APROVAÇÕES EM CONCURSOS]',
    testimonialsPlaceholder: '[DEPOIMENTO DO ALUNO APROVADO - Relato sobre a conquista da aprovação e posse em concurso público com o Progressão Caxias.]',
    concursosAtendidos: [
      'Carreiras Policiais (Polícia Civil, Polícia Militar, Polícia Penal)',
      'Tribunais (TJRJ, TRT, TRE, TRF)',
      'Concursos Municipais de Duque de Caxias e Baixada Fluminense',
      'Carreiras Administrativas (INSS, Correios, Bancos Públicos)'
    ],
    faqs: [
      {
        question: 'Quem nunca estudou para concurso consegue acompanhar as aulas?',
        answer: 'Sim. Nossos módulos iniciam nivelando as disciplinas de maior peso (Português, Raciocínio Lógico e Noções de Direito) para que o aluno construa uma base sólida.'
      },
      {
        question: 'O que acontece quando o edital oficial é publicado?',
        answer: 'O cronograma de aulas passa por adequação imediata para cobrir 100% dos tópicos inéditos exigidos pela banca organizadora.'
      }
    ]
  },
  'cursos-tecnicos': {
    id: 'cursos-tecnicos',
    slug: '/cursos/tecnicos',
    title: 'Cursos Técnicos & Profissionalizantes',
    subtitle: 'Qualificação profissional de rápida inserção no mercado e preparação focada para Escolas Técnicas (CEFET, IFRJ e FAETEC).',
    badge: 'Ensino Técnico & Mercado',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80',
    classFormat: 'Presencial e Online (Ao Vivo e Gravado)',
    description: 'Cursos práticos e preparatórios para as melhores escolas técnicas federais e estaduais, além de habilitações profissionais nas áreas mais demandadas pelas indústrias e empresas do Rio de Janeiro.',
    detailedText: 'O mercado de trabalho e o polo industrial de Duque de Caxias demandam profissionais capacitados com rapidez e eficiência. O Curso Progressão oferece formação técnica moderna e preparatório de alto rendimento para CEFET, IFRJ e FAETEC, combinando teoria direcionada, prática aplicada e a máxima flexibilidade entre os formatos presencial e online.',
    targetAudience: [
      'Estudantes do 9º ano que almejam aprovação no Ensino Médio Técnico (CEFET, IFRJ, FAETEC)',
      'Jovens e adultos em busca de qualificação técnica para rápida inserção no mercado de trabalho',
      'Profissionais que desejam recolocação ou evolução salarial em setores industriais e corporativos'
    ],
    disciplines: [
      'Eletrotécnica, Circuitos e Instalações Elétricas Industriais',
      'Mecânica Industrial, Desenho Técnico e Metrologia',
      'Tecnologia da Informação, Redes e Arquitetura de Sistemas',
      'Administração, Gestão de Processos e Logística Integrada',
      'Segurança do Trabalho, Higiene Ocupacional e Normas Regulamentadoras',
      'Português, Matemática e Redação com o perfil das bancas técnicas'
    ],
    disciplinas: [
      'Eletrotécnica & Automação',
      'Mecânica Industrial',
      'Informática & Redes de TI',
      'Administração & Logística',
      'Segurança do Trabalho',
      'Preparatório CEFET / IFRJ / FAETEC'
    ],
    differentials: [
      'Opções de turmas presenciais na unidade Duque de Caxias ou online com aulas ao vivo e gravadas',
      'Material didático atualizado com as exigências técnicas reais do mercado e das bancas',
      'Professores engenheiros, tecnólogos e especialistas com vivência prática de mercado',
      'Simulados cronometrados nos moldes das principais provas de seleção técnica do estado',
      'Plataforma digital integrada com acesso 24 horas a videoaulas e monitorias'
    ],
    methodology: 'Metodologia prática e contextualizada, unindo teoria sólida, resolução intensiva de exercícios de concursos técnicos e aplicações reais da profissão.',
    methodologySummary: 'Metodologia prática e contextualizada, unindo teoria sólida, resolução intensiva de exercícios de concursos técnicos e aplicações reais da profissão.',
    simuladosFrequency: 'Simulados mensais no padrão CEFET/IFRJ/FAETEC e provas práticas comentadas pelos docentes.',
    simuladosInfo: 'Simulados com questões oficiais de vestibulares técnicos e casos práticos de avaliação profissional.',
    resultsPlaceholder: '[ALTO ÍNDICE DE APROVAÇÃO EM ESCOLAS TÉCNICAS]',
    testimonialsPlaceholder: '[DEPOIMENTO DO ALUNO APROVADO - Relato sobre a conquista da vaga em escola técnica pública ou no mercado de trabalho.]',
    concursosAtendidos: [
      'CEFET-RJ (Centro Federal de Educação Tecnológica Celso Suckow da Fonseca)',
      'IFRJ (Instituto Federal do Rio de Janeiro - Câmpus Caxias e demais unidades)',
      'FAETEC (Escola Técnica Estadual Henrique Lage e Baixada)',
      'Colégio Pedro II (Cursos Técnicos Integrados)',
      'Processos Seletivos de Estágio e Trainee Técnico Industrial'
    ],
    faqs: [
      {
        question: 'Os cursos técnicos contam com turmas presenciais e online?',
        answer: 'Sim! Você tem total liberdade para escolher entre a modalidade presencial (com a vivência direta em sala de aula em Duque de Caxias) e a modalidade online (com transmissões ao vivo, aulas gravadas em alta definição na plataforma e suporte de dúvidas contínuo).'
      },
      {
        question: 'Qual a diferença entre o preparatório para escolas técnicas e os cursos de qualificação?',
        answer: 'O preparatório para escolas técnicas treina alunos do 9º ano para conquistarem vagas disputadas no CEFET, IFRJ e FAETEC. Já as turmas técnicas profissionalizantes capacitam diretamente jovens e adultos com conhecimentos práticos aplicados para atuação no mercado de trabalho.'
      },
      {
        question: 'Quem estuda na modalidade online tem acesso a todo o material?',
        answer: 'Com certeza. Os alunos do formato online contam com ambiente virtual completo, apostilas e cadernos de exercícios em PDF, gravação de todas as aulas para rever quando quiser e plantões com nossos professores.'
      },
      {
        question: 'É possível conciliar o curso com trabalho ou escola?',
        answer: 'Sim, oferecemos opções de turnos flexíveis (manhã, tarde, noite ou aos sábados), além da praticidade do modelo online para quem precisa estudar em seus próprios horários.'
      }
    ]
  }
};

export const SCHOOL_SEGMENTS_DATA: Record<string, SchoolSegmentData> = {
  'educacao-infantil': {
    id: 'educacao-infantil',
    slug: '/colegio/educacao-infantil',
    title: 'Educação Infantil',
    ageRange: '[FAIXA ETÁRIA ATENDIDA]',
    badge: 'Primeira Infância',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    summary: 'Acolhimento, estímulo à curiosidade natural, desenvolvimento socioemocional e início da alfabetização lúdica em ambiente seguro.',
    pedagogicalProposal: 'Na Educação Infantil do Progressão Caxias, cada criança é compreendida em sua singularidade. Valorizamos o brincar como principal linguagem de descoberta do mundo, estimulando autonomia, empatia, coordenação motora e habilidades expressivas.',
    developmentGoals: [
      'Desenvolvimento da motricidade fina e ampla através de brincadeiras direcionadas',
      'Estímulo ao vocabulário, oralidade e início do letramento de forma afetiva',
      'Socialização, respeito ao coletivo e inteligência socioemocional',
      'Contato com manifestações artísticas, musicais e consciência corporal'
    ],
    activities: [
      'Atividades psicomotoras e recreação supervisionada',
      'Contação de histórias e cantinho da leitura lúdica',
      'Expressão plástica, pintura, modelagem e música',
      'Iniciação ao raciocínio lógico através de jogos pedagógicos'
    ],
    methodologyPoints: [
      'Ambiente acolhedor com acompanhamento próximo de professores e auxiliares',
      'Rotinas estruturadas que trazem segurança emocional aos pequenos',
      'Comunicação transparente e contínua com os pais e responsáveis'
    ],
    differentials: [
      'Espaços adaptados e seguros com áreas recreativas protegidas',
      'Equipe pedagógica especializada em desenvolvimento infantil',
      'Estímulo ao gosto pelo aprendizado desde os primeiros anos de vida'
    ],
    faqs: [
      {
        question: 'Quais os horários dos turnos da Educação Infantil?',
        answer: 'Oferecemos turnos matutino e vespertino com opções de horário estendido conforme as necessidades das famílias. Consulte a secretaria.'
      },
      {
        question: 'Como é feita a adaptação da criança nos primeiros dias?',
        answer: 'Realizamos um processo gradual e humanizado de adaptação, com horários progressivos e presença dos pais para garantir segurança e conforto emocional.'
      }
    ]
  },
  'fundamental-1': {
    id: 'fundamental-1',
    slug: '/colegio/fundamental-1',
    title: 'Ensino Fundamental I',
    ageRange: '1º ao 5º Ano',
    badge: 'Anos Iniciais (1º ao 5º Ano)',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    summary: 'Consolidação da alfabetização, raciocínio lógico-matemático, formação de hábitos de estudo e curiosidade pelo aprendizado.',
    pedagogicalProposal: 'No Ensino Fundamental I do Progressão Caxias, alinhamos o rigor acadêmico com acolhimento afetivo. O estudante desenvolve leitura fluente, raciocínio lógico e habilidades de convivência em um ambiente estimulante e seguro.',
    developmentGoals: [
      'Alfabetização consolidada, leitura crítica e redação inicial coesa',
      'Compreensão de operações fundamentais e resolução de desafios cotidianos',
      'Iniciação à pesquisa e projetos de ciências interdisciplinares',
      'Formação de disciplina pessoal, organização e rotina diária de estudos'
    ],
    activities: [
      'Projetos interdisciplinares e feiras de ciências escolares',
      'Oficinas de leitura lúdica e desafios matemáticos',
      'Aulas com recursos multimídia e jogos pedagógicos',
      'Atividades de recreação dirigida e integração social'
    ],
    methodologyPoints: [
      'Acompanhamento próximo com avaliações diagnósticas periódicas',
      'Plantões de reforço pedagógico contínuo para sanar dúvidas',
      'Transição suave e acolhedora da Educação Infantil'
    ],
    differentials: [
      'Professores alfabetizadores experientes e dedicados',
      'Apoio individualizado para o ritmo de cada criança',
      'Comunicação transparente e constante com a família'
    ],
    faqs: [
      {
        question: 'O colégio oferece apoio pedagógico para alunos com dificuldades?',
        answer: 'Sim, realizamos avaliações contínuas e oferecemos horários de apoio e reforço escolar para garantir que nenhum aluno fique para trás.'
      },
      {
        question: 'Como os pais acompanham o desempenho do estudante?',
        answer: 'Através de reuniões periódicas de responsáveis, boletins informativos e contato direto com a coordenação pedagógica.'
      },
      {
        question: 'Qual é o horário das aulas do Fundamental I?',
        answer: 'As turmas de Fundamental I funcionam no turno regular (matutino e vespertino), com opções de apoio pedagógico e atividades extracurriculares no contraturno.'
      }
    ]
  },
  'ensino-fundamental': {
    id: 'ensino-fundamental',
    slug: '/colegio/fundamental-1',
    title: 'Ensino Fundamental I',
    ageRange: '1º ao 5º Ano',
    badge: 'Anos Iniciais (1º ao 5º Ano)',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    summary: 'Consolidação da alfabetização, raciocínio lógico-matemático, formação de hábitos de estudo e curiosidade pelo aprendizado.',
    pedagogicalProposal: 'No Ensino Fundamental I do Progressão Caxias, alinhamos o rigor acadêmico com acolhimento afetivo. O estudante desenvolve leitura fluente, raciocínio lógico e habilidades de convivência em um ambiente estimulante e seguro.',
    developmentGoals: [
      'Alfabetização consolidada, leitura crítica e redação inicial coesa',
      'Compreensão de operações fundamentais e resolução de desafios cotidianos',
      'Iniciação à pesquisa e projetos de ciências interdisciplinares',
      'Formação de disciplina pessoal, organização e rotina diária de estudos'
    ],
    activities: [
      'Projetos interdisciplinares e feiras de ciências escolares',
      'Oficinas de leitura lúdica e desafios matemáticos',
      'Aulas com recursos multimídia e jogos pedagógicos',
      'Atividades de recreação dirigida e integração social'
    ],
    methodologyPoints: [
      'Acompanhamento próximo com avaliações diagnósticas periódicas',
      'Plantões de reforço pedagógico contínuo para sanar dúvidas',
      'Transição suave e acolhedora da Educação Infantil'
    ],
    differentials: [
      'Professores alfabetizadores experientes e dedicados',
      'Apoio individualizado para o ritmo de cada criança',
      'Comunicação transparente e constante com a família'
    ],
    faqs: [
      {
        question: 'O colégio oferece apoio pedagógico para alunos com dificuldades?',
        answer: 'Sim, realizamos avaliações contínuas e oferecemos horários de apoio e reforço escolar para garantir que nenhum aluno fique para trás.'
      },
      {
        question: 'Como os pais acompanham o desempenho do estudante?',
        answer: 'Através de reuniões periódicas de responsáveis, boletins informativos e contato direto com a coordenação pedagógica.'
      }
    ]
  },
  'fundamental-2': {
    id: 'fundamental-2',
    slug: '/colegio/fundamental-2',
    title: 'Ensino Fundamental II',
    ageRange: '6º ao 9º Ano',
    badge: 'Anos Finais (6º ao 9º Ano)',
    image: '/assets/fundamental.jpeg',
    summary: 'Aprofundamento científico e humanista, maior autonomia nos estudos e preparação estratégica para escolas técnicas e colégios militares.',
    pedagogicalProposal: 'No Ensino Fundamental II do Colégio Progressão Caxias, os estudantes vivenciam a maturidade acadêmica com professores especialistas em cada disciplina, laboratório prático e base sólida voltada para os concursos do CEFET, IFRJ, FAETEC e Colégios Militares.',
    developmentGoals: [
      'Aprofundamento rigoroso em Matemática, Ciências, História, Geografia e Linguagens',
      'Desenvolvimento do pensamento crítico, interpretação aprofundada e argumentação',
      'Preparação estratégica para as provas de ingresso em escolas técnicas e militares',
      'Autonomia de estudos, responsabilidade pessoal e gestão eficiente do tempo'
    ],
    activities: [
      'Simulados periódicos no estilo das principais bancas de vestibulinho',
      'Oficinas regulares de Redação com correções individuais detalhadas',
      'Projetos experimentais de ciências e feiras interdisciplinares',
      'Plantões semanais de dúvidas no contraturno'
    ],
    methodologyPoints: [
      'Corpo docente especialista com professores para cada área do conhecimento',
      'Material didático atualizado e contextualizado com os grandes exames',
      'Apoio socioemocional focado na transição para a adolescência'
    ],
    differentials: [
      'Base sólida para aprovações no CEFET, IFRJ, FAETEC e EPCAR/CMRJ',
      'Relatórios individuais de desempenho para acompanhamento familiar',
      'Ambiente que estimula o companheirismo, a ética e o alto desempenho'
    ],
    faqs: [
      {
        question: 'Quais anos compõem o Ensino Fundamental II?',
        answer: 'O Fundamental II atende do 6º ao 9º ano, com turmas no turno da manhã e atividades complementares no contraturno.'
      },
      {
        question: 'Existe foco especial nos concursos de escolas técnicas no 9º ano?',
        answer: 'Sim! O currículo do 9º ano é direcionado para as matrizes de referência do CEFET-RJ, IFRJ, FAETEC e colégios militares, com simulados e materiais específicos.'
      },
      {
        question: 'Como funciona o apoio para alunos que ingressam vindos de outras escolas?',
        answer: 'Realizamos avaliação diagnóstica de entrada e oferecemos nivelamento inicial nas disciplinas de Matemática e Língua Portuguesa para garantir que o aluno acompanhe com segurança o ritmo da turma.'
      }
    ]
  },
  'ensino-medio': {
    id: 'ensino-medio',
    slug: '/colegio/ensino-medio',
    title: 'Ensino Médio',
    ageRange: '1º, 2º e 3º Anos',
    badge: 'Preparação Acadêmica e de Vida',
    image: '/assets/page-ensino-medio.jpg',
    summary: 'Aprofundamento científico, formação humana sólida e conexão direta com a preparação para ENEM, UERJ e carreiras militares.',
    pedagogicalProposal: 'No Ensino Médio do Colégio Progressão Caxias, a excelência escolar converge com a preparação para os grandes vestibulares e concursos. O aluno vivencia uma rotina madura de aprendizado, com professores altamente qualificados, simulados frequentes e orientação para escolhas profissionais.',
    developmentGoals: [
      'Consolidação do repertório cultural e preparação de alto nível para vestibulares',
      'Produção textual madura capaz de alcançar notas de destaque nas bancas examinadoras',
      'Pensamento crítico, argumentação fundamentada e postura cidadã responsável',
      'Autogestão do tempo de estudo e foco na superação de metas individuais'
    ],
    activities: [
      'Simulados frequentes nos modelos oficiais do ENEM e UERJ',
      'Oficinas de redação com correção rigorosa baseada em critérios reais',
      'Aulas de campo, debates geopolíticos e palestras de orientação vocacional',
      'Maratonas de exercícios e aulões temáticos de revisão'
    ],
    methodologyPoints: [
      'Integração natural entre o currículo escolar do Ensino Médio e os cursos preparatórios da instituição',
      'Acompanhamento individual de notas e histórico de rendimento nos simulados',
      'Ambiente que valoriza a dedicação, o respeito mútuo e a busca constante pela superação'
    ],
    differentials: [
      'Corpo docente experiente tanto na educação básica quanto em cursos preparatórios renomados',
      'Material didático atualizado com as matrizes mais recentes das grandes universidades',
      'Histórico de aprovações que comprova a consistência do método'
    ],
    faqs: [
      {
        question: 'O aluno do Ensino Médio já tem acesso aos simulados de vestibular?',
        answer: 'Sim, a aplicação de simulados oficiais faz parte da grade pedagógica desde o 1º ano, aumentando progressivamente a intensidade até o 3º ano (terceirão).'
      },
      {
        question: 'Há orientação vocacional e apoio para a escolha da carreira?',
        answer: 'Sim, realizamos encontros de orientação vocacional, apresentação de profissões e apoio individualizado para o planejamento do futuro acadêmico.'
      }
    ]
  }
};

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'APRENDA',
    subtitle: 'Compreensão Profunda da Teoria',
    description: 'Aulas estruturadas com professores experientes que dominam o conteúdo e a forma como cada banca cobra a matéria. Didática clara, sem atalhos superficiais.',
    bulletPoints: [
      'Exposição conceitual rigorosa e contextualizada',
      'Material teórico sintético e direto ao ponto',
      'Foco nas competências fundamentais de cada disciplina'
    ]
  },
  {
    step: '02',
    title: 'PRATIQUE',
    subtitle: 'Fixação por Resolução Ativa',
    description: 'Quem estuda para aprovação precisa fazer exercícios todos os dias. Nossos cadernos de questões são organizados por nível de dificuldade para consolidar o aprendizado.',
    bulletPoints: [
      'Listas de exercícios temáticas e progressivas',
      'Resolução guiada de questões clássicas e desafiadoras',
      'Fixação de fórmulas, conceitos e modelos de resposta'
    ]
  },
  {
    step: '03',
    title: 'TESTE',
    subtitle: 'Simulados nos Moldes Oficiais',
    description: 'O dia da prova não pode ser uma surpresa. Nossos simulados reproduzem com fidelidade o número de questões, controle de tempo, folha de respostas e o desgaste psicológico real.',
    bulletPoints: [
      'Tempo de prova rigorosamente cronometrado',
      'Critérios de correção idênticos aos das bancas',
      'Treinamento de estratégia de prova e gestão emocional'
    ]
  },
  {
    step: '04',
    title: 'EVOLUA',
    subtitle: 'Diagnóstico e Correção de Rotas',
    description: 'Errar nos simulados é a oportunidade de acertar na prova oficial. Analisamos os resultados dos alunos para identificar lacunas de conteúdo e corrigir vícios de estudo.',
    bulletPoints: [
      'Plantões de dúvidas e atendimento pedagógico',
      'Revisão orientada dos pontos fracos diagnosticados',
      'Acompanhamento do ganho de proficiência'
    ]
  },
  {
    step: '05',
    title: 'CONQUISTE',
    subtitle: 'Aprovação e Alcance do Objetivo',
    description: 'O resultado de um método sério e disciplinado: o aluno chega ao dia da prova seguro, preparado tecnicamente e pronto para conquistar o seu lugar na lista de aprovados.',
    bulletPoints: [
      'Confiança consolidada por meses de preparação séria',
      'Repertório completo para responder qualquer exigência do edital',
      'Aprovação e início de uma nova trajetória profissional'
    ]
  }
];

export interface DifferentialItem {
  id: string;
  pilarNumber: string;
  icon: string;
  title: string;
  description: string;
  steps?: string[];
}

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: 'pilar-01',
    pilarNumber: '01',
    icon: 'GraduationCap',
    title: 'Professores Preparados',
    description: 'Corpo docente experiente, especializado nas exigências das principais bancas militares, vestibulares e concursos.'
  },
  {
    id: 'pilar-02',
    pilarNumber: '02',
    icon: 'BookOpen',
    title: 'Material Didático Exclusivo',
    description: 'Apostilas direcionadas, constantemente atualizadas, com teoria concisa e vasta bateria de questões selecionadas.'
  },
  {
    id: 'pilar-03',
    pilarNumber: '03',
    icon: 'ClipboardCheck',
    title: 'Simulados Oficiais',
    description: 'Provas cronometradas seguindo fielmente as regras, tempos e padrões das bancas organizadoras.'
  },
  {
    id: 'pilar-04',
    pilarNumber: '04',
    icon: 'UserCheck',
    title: 'Acompanhamento Próximo',
    description: 'Monitoramento pedagógico individualizado para apoiar o aluno em suas dificuldades e potencializar seu rendimento.'
  },
  {
    id: 'pilar-05',
    pilarNumber: '05',
    icon: 'TrendingUp',
    title: 'Metodologia Comprovada',
    description: 'Ciclo sistemático de 5 etapas (Aprenda, Pratique, Teste, Evolua, Conquiste) voltado à retenção de longo prazo.',
    steps: ['Aprenda', 'Pratique', 'Teste', 'Evolua', 'Conquiste']
  },
  {
    id: 'pilar-06',
    pilarNumber: '06',
    icon: 'Target',
    title: 'Foco em Resultados',
    description: 'Ambiente institucional sério, disciplinado e estimulante, desenhado para transformar dedicação em aprovação.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    studentName: 'Lucas Almeida',
    course: 'Carreiras Militares - Turma ESA',
    year: '2024',
    approval: 'Aprovado ESA',
    testimonial: 'A preparação no Progressão foi fundamental para a minha aprovação na ESA. Aqui encontrei professores comprometidos, um ambiente disciplinado e todo o suporte que eu precisava para evoluir nos estudos.',
    avatarText: 'LA'
  },
  {
    id: 'test-2',
    studentName: 'Mariana Costa',
    course: 'Extensivo ENEM e Vestibulares',
    year: '2024',
    approval: 'Aprovada no ENEM (Medicina)',
    testimonial: 'Graças ao acompanhamento individualizado, aos simulados semanais e ao foco rigoroso na redação nota 1000, consegui minha aprovação. O Progressão me mostrou que método e disciplina levam ao topo.',
    avatarText: 'MC'
  },
  {
    id: 'test-3',
    studentName: 'Gabriel Santos',
    course: 'Carreiras Militares - EsPCEx',
    year: '2024',
    approval: 'Aprovado EsPCEx',
    testimonial: 'Os simulados cronometrados e a bateria intensiva de exercícios das bancas anteriores me deram a segurança necessária para enfrentar a prova oficial com total calma e foco na vaga.',
    avatarText: 'GS'
  },
  {
    id: 'test-4',
    studentName: 'Beatriz Lima',
    course: 'Preparatório Colégio Naval e EPCAR',
    year: '2024',
    approval: 'Aprovada Colégio Naval',
    testimonial: 'O suporte dos professores e o plantão de dúvidas foram essenciais para destravar conteúdos difíceis de exatas. O material didático é direto ao ponto e focado 100% no edital.',
    avatarText: 'BL'
  },
  {
    id: 'test-5',
    studentName: 'Matheus Ribeiro',
    course: 'Carreiras Militares - EEAR',
    year: '2023',
    approval: 'Aprovado EEAR - Especialista',
    testimonial: 'Estudar no Progressão mudou a minha perspectiva. A disciplina diária e a cobrança saudável da coordenação me mantiveram focado do início do ano até o dia da convocação.',
    avatarText: 'MR'
  },
  {
    id: 'test-6',
    studentName: 'Juliana Fernandes',
    course: 'Pré-Vestibular UERJ & Federais',
    year: '2023',
    approval: '1º Lugar Direito UERJ',
    testimonial: 'O padrão dos professores de humanidades e redação é espetacular. As análises de obras literárias e os testes de banca fizeram toda a diferença para conquistar o primeiro lugar.',
    avatarText: 'JF'
  }
];

export const TEAM_MEMBERS: TeacherMember[] = [
  {
    id: 'dir-1',
    name: 'Neide Fonseca',
    role: 'Direção Geral',
    category: 'direcao',
    image: '/assets/neide-fonseca-02.jpeg',
    bio: 'Mais de 25 anos dedicados à gestão educacional e formação de líderes. À frente da direção do Progressão Caxias, coordena as diretrizes pedagógicas e a cultura de excelência e disciplina que já aprovou milhares de estudantes.',
    credentials: [
      'Mestre em Gestão Educacional - UFRJ',
      'Especialista em Avaliação e Aprendizagem - UERJ',
      '25+ anos de liderança educacional na Baixada Fluminense'
    ],
    imagePlaceholderText: 'Prof. Carlos Eduardo - Direção Geral'
  },
  {
    id: 'prof-3',
    name: 'Prof. Marcelo',
    role: 'Professor de Português',
    category: 'professores',
    image: '/assets/marcelo-portugues-02.jpg',
    bio: 'Especialista em desenvolvimento infantojuvenil e rotinas de estudo. Atua diretamente com professores, estudantes e familiares no Ensino Fundamental II e Médio para assegurar acompanhamento próximo e alto rendimento.',
    credentials: [
      'Pós-Graduação em Psicopedagogia Institucional',
      'Licenciatura Plena em Pedagogia - UERJ',
      'Supervisão de Práticas Pedagógicas e Metodologias Ativas'
    ],
    imagePlaceholderText: 'Profa. Mariana Silveira - Coordenação Colégio'
  },
  {
    id: 'prof-2',
    name: 'Prof. Maycon',
    role: 'Professor de Direito',
    category: 'professores',
    image: '/assets/maycon-direito.png',
    bio: 'Estrategista de bancas militares (ESA, EsPCEx, AFA, Colégio Naval) e vestibulares (UERJ/ENEM). Orienta o planejamento de simulados, mapeamento de editais e cronogramas de revisão intensiva dos alunos.',
    credentials: [
      'Especialista em Gestão de Bancas e Processos Seletivos',
      'Licenciatura em História - UFF',
      '18 anos em coordenação de cursos preparatórios militares'
    ],
    imagePlaceholderText: 'Prof. Roberto Antunes - Coordenação Cursos'
  },
  {
    id: 'prof-1',
    name: 'Prof. Cadu Souto',
    role: 'Professor de Português',
    category: 'professores',
    discipline: 'Português',
    image: '/assets/cadu-souto-portugues-02.JPG',
    bio: 'Referência no ensino de Português para carreiras militares e vestibulares de alta concorrência. Conhecido pela didática dinâmica, resolução ágil de questões de prova e desmistificação do raciocínio lógico.',
    credentials: [
      'Mestrado em Matemática Pura e Aplicada - UFRJ',
      'Licenciatura em Matemática - UERJ',
      'Autor de apostilas e baterias de questões para ESA e EsPCEx'
    ],
    imagePlaceholderText: 'Prof. Felipe Ramos - Matemática'
  },
  {
    id: 'prof-4',
    name: 'Prof(a). Castanheira',
    role: 'Professora de Português e Redação',
    category: 'professores',
    discipline: 'Português e Redação',
    image: '/assets/castanheira-02.jpg',
    bio: 'Especialista nas matrizes de correção do ENEM, UERJ e bancas militares. Desenvolve a escrita crítica, repertório sociocultural e precisão gramatical que garantem redações nota 1000 e aprovações consecutivas.',
    credentials: [
      'Mestre em Linguística e Literatura Brasileira - UFF',
      'Avaliadora e Corretora de Redações de Bancas Oficiais',
      'Licenciatura em Letras Vernáculas - UFRJ'
    ],
    imagePlaceholderText: 'Profa. Beatriz Lima - Português e Redação'
  },
  {
    id: 'prof-5',
    name: 'Prof. Robinho',
    role: 'Professor de Matemática',
    category: 'professores',
    discipline: 'Matemática',
    image: '/assets/Robinho.webp',
    bio: 'Abordagem prática e conceitual profunda para vestibulares de exatas e concursos militares (AFA, EFOMM, EsPCEx). Ensina estratégias de resolução rápida e aplicação de fórmulas em situações-problema.',
    credentials: [
      'Bacharelado e Licenciatura em Física - UFF',
      'Especialista em Ensino de Ciências Exatas',
      '14 anos de experiência em turmas militares de elite'
    ],
    imagePlaceholderText: 'Prof. Robinho - Matemática'
  },
  {
    id: 'prof-6',
    name: 'Prof. Renato',
    role: 'Professor de Direito',
    category: 'professores',
    image: '/assets/Renato-direito.webp',
    bio: 'Dedicada ao acolhimento individual, gestão do tempo e controle da ansiedade pré-prova. Auxilia o estudante a estruturar seu plano diário de estudos e superar bloqueios pedagógicos e emocionais.',
    credentials: [
      'Pedagoga e Especialista em Neuroaprendizagem',
      'Consultora de Rotinas de Estudos e Planejamento Pessoal',
      'Atendimento pedagógico individualizado'
    ],
    imagePlaceholderText: 'Prof. Renato - Direito'
  },
  {
    id: 'coor-1',
    name: 'Ingrid Fonseca',
    role: 'Coordenadora de Concursos Públicos',
    category: 'coordenacao',
    image: '/assets/cordenacao-02/coordenador-ingrid.png',
    bio: 'Responsável pela gestão de matrículas, emissão de documentação escolar, histórico e atendimento direto às famílias e alunos com presteza e organização.',
    credentials: [
      'Gestão de Documentação Escolar e Registros Acadêmicos',
      'Atendimento ao Aluno e Ouvidoria Institucional',
      'Especialista em Sistemas Integrados de Gestão Escolar'
    ],
    imagePlaceholderText: 'Juliana Carvalho - Secretaria'
  },
  {
    id: 'limp-1',
    name: 'Luciana, Rosângela e Tereza',
    role: 'Serviços Gerais & Higienização',
    category: 'limpeza',
    image: '/assets/tias-limpeza-luciana-rosangela-tereza.png',
    bio: 'Equipe dedicada à manutenção, sanitização rigorosa e conservação diária de todas as salas de aula, corredores e áreas de convivência do Progressão Caxias.',
    credentials: [
      'Protocolos Avançados de Limpeza e Sanitização Escolar',
      'Manutenção Contínua e Organização dos Espaços Comuns',
      'Ambientes Seguros, Acolhedores e Climatizados'
    ],
    imagePlaceholderText: 'Marta Ribeiro - Limpeza e Conservação'
  },
  {
    id: 'coor-2',
    name: 'Ana Arruda',
    role: 'Coordenadora',
    category: 'coordenacao',
    image: '/assets/cordenacao-02/coordenador-ana.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
    {
    id: 'coor-3',
    name: 'Prof. Alexandre Pinto',
    role: 'Coordenação de Concursos Públicos Online',
    category: 'coordenacao',
    image: '/assets/cordenacao-02/coordenador-Prof-Alexandre-concursos-online.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
      {
    id: 'coor-4',
    name: 'Prof. Marcelo Sampaio',
    role: 'Coordenação de Concursos Pré-Militares',
    category: 'coordenacao',
    image: '/assets/cordenacao-02/coordenador-prof-marcelo-pre-militar.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
        {
    id: 'coor-5',
    name: 'Rosilayne Letícia',
    role: 'Coordenadora',
    category: 'coordenacao',
    image: '/assets/cordenacao-02/coordenadora-rosilayne.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
      {
    id: 'coor-6',
    name: 'Lucas Matheus',
    role: 'Coordenador',
    category: 'coordenacao',
    image: '/assets/cordenacao-02/coordenador-lucas.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
        {
    id: 'sec-1',
    name: 'Bianca Diniz',
    role: 'Secretaria',
    category: 'secretaria',
    image: '/assets/secretaria/Bianca-Diniz.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
    
        {
    id: 'sec-2',
    name: 'Dilson',
    role: 'Secretaria',
    category: 'secretaria',
    image: '/assets/secretaria/Dilson.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
          {
    id: 'sec-3',
    name: 'Keila Souza',
    role: 'Secretaria',
    category: 'secretaria',
    image: '/assets/secretaria/Keila-Souza.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
          {
    id: 'sec-4',
    name: 'Livia Silva',
    role: 'Secretaria',
    category: 'secretaria',
    image: '/assets/secretaria/Livia-Silva.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },
          {
    id: 'sec-5',
    name: 'Matheus Rayzer',
    role: 'Secretaria',
    category: 'secretaria',
    image: '/assets/secretaria/Matheus-Rayzer.png',
    bio: 'Articula a proposta formativa do Ensino Fundamental e Médio, mediando a relação família-escola, desenvolvimento socioemocional e práticas curriculares inovadoras.',
    credentials: [
      'Especialista em Gestão do Ensino Básico - UFRJ',
      'Supervisão Escolar e Orientação Curricular BNCC',
      'Acompanhamento Integral da Vida Escolar'
    ],
    imagePlaceholderText: 'Profa. Camila Guimarães - Colégio'
  },

  {
    id: 'apoio-1',
    name: 'Igor',
    role: 'Apoio',
    category: 'apoio',
    image: '/assets/apoio/apoio-igor.png',
    bio: 'Garante a segurança, disciplina positiva e suporte logístico ao cotidiano escolar, auxiliando no fluxo de entrada e saída, intervalos e apoio presencial contínuo aos estudantes.',
    credentials: [
      'Mediação de Conflitos e Convivência Escolar',
      'Segurança Operacional e Primeiros Socorros no Ambiente Escolar',
      'Suporte Operacional a Professores e Estudantes'
    ],
    imagePlaceholderText: 'Marcos Vinícius - Apoio e Disciplina'
  },
    {
    id: 'apoio-2',
    name: 'Leonardo',
    role: 'Apoio',
    category: 'apoio',
    image: '/assets/apoio/leonardo-apoio.png',
    bio: 'Garante a segurança, disciplina positiva e suporte logístico ao cotidiano escolar, auxiliando no fluxo de entrada e saída, intervalos e apoio presencial contínuo aos estudantes.',
    credentials: [
      'Mediação de Conflitos e Convivência Escolar',
      'Segurança Operacional e Primeiros Socorros no Ambiente Escolar',
      'Suporte Operacional a Professores e Estudantes'
    ],
    imagePlaceholderText: 'Marcos Vinícius - Apoio e Disciplina'
  },
      {
    id: 'apoio-3',
    name: 'Celso',
    role: 'Manutenção',
    category: 'apoio',
    image: '/assets/apoio/manutencao-celso.png',
    bio: 'Garante a segurança, disciplina positiva e suporte logístico ao cotidiano escolar, auxiliando no fluxo de entrada e saída, intervalos e apoio presencial contínuo aos estudantes.',
    credentials: [
      'Mediação de Conflitos e Convivência Escolar',
      'Segurança Operacional e Primeiros Socorros no Ambiente Escolar',
      'Suporte Operacional a Professores e Estudantes'
    ],
    imagePlaceholderText: 'Marcos Vinícius - Apoio e Disciplina'
  },
        {
    id: 'apoio-4',
    name: 'Zé',
    role: 'Porteiro',
    category: 'apoio',
    image: '/assets/apoio/porteiro-ze.png',
    bio: 'Garante a segurança, disciplina positiva e suporte logístico ao cotidiano escolar, auxiliando no fluxo de entrada e saída, intervalos e apoio presencial contínuo aos estudantes.',
    credentials: [
      'Mediação de Conflitos e Convivência Escolar',
      'Segurança Operacional e Primeiros Socorros no Ambiente Escolar',
      'Suporte Operacional a Professores e Estudantes'
    ],
    imagePlaceholderText: 'Marcos Vinícius - Apoio e Disciplina'
  },
  {
    id: 'adm-1',
    name: 'Erika Franci',
    role: 'Administrativo',
    category: 'administrativo',
    image: '/assets/erika-adm.png',
    bio: 'Supervisiona a operação administrativa, infraestrutura, suprimentos e atendimento financeiro da unidade Duque de Caxias com eficiência e transparência.',
    credentials: [
      'Administração de Empresas e Finanças Corporativas',
      'Gestão de Infraestrutura e Logística Educacional',
      'Otimização de Processos e Atendimento ao Cliente'
    ],
    imagePlaceholderText: 'Erika Franci - Administrativo'
  },
    {
    id: 'coleg-1',
    name: 'Marcia Lopes',
    role: 'Coordenadora do Colégio',
    category: 'colegio',
    image: '/assets/secretaria-colegio/marcia-lopes.png',
    bio: 'Supervisiona a operação administrativa, infraestrutura, suprimentos e atendimento financeiro da unidade Duque de Caxias com eficiência e transparência.',
    credentials: [
      'Administração de Empresas e Finanças Corporativas',
      'Gestão de Infraestrutura e Logística Educacional',
      'Otimização de Processos e Atendimento ao Cliente'
    ],
    imagePlaceholderText: 'Marcia Lopes - Coordenadora do Colégio'
  },
      {
    id: 'coleg-2',
    name: 'Rodrigo Cesar',
    role: 'Secretário do Colégio',
    category: 'colegio',
    image: '/assets/secretaria-colegio/sec-Rodrigo-Cesar.png',
    bio: 'Supervisiona a operação administrativa, infraestrutura, suprimentos e atendimento financeiro da unidade Duque de Caxias com eficiência e transparência.',
    credentials: [
      'Administração de Empresas e Finanças Corporativas',
      'Gestão de Infraestrutura e Logística Educacional',
      'Otimização de Processos e Atendimento ao Cliente'
    ],
    imagePlaceholderText: 'Rodrigo Cesar - Secretário do Colégio'
  },
        {
    id: 'coleg-3',
    name: 'Vitor Hugor',
    role: 'Secretário do Colégio',
    category: 'colegio',
    image: '/assets/secretaria-colegio/sec-vitor-hugor.png',
    bio: 'Supervisiona a operação administrativa, infraestrutura, suprimentos e atendimento financeiro da unidade Duque de Caxias com eficiência e transparência.',
    credentials: [
      'Administração de Empresas e Finanças Corporativas',
      'Gestão de Infraestrutura e Logística Educacional',
      'Otimização de Processos e Atendimento ao Cliente'
    ],
    imagePlaceholderText: 'Vitor Hugor - Secretário do Colégio'
  },


];

export const STRUCTURE_ITEMS: StructureItem[] = [
  {
    id: 'str-1',
    title: 'Salas de Aula Climatizadas e Equipadas',
    category: 'salas',
    description: 'Ambientes confortáveis, com isolamento acústico adequado, iluminação projetada para longas sessões de estudo e equipamentos multimídia para projeção de aulas dinâmicas.',
    image: '/assets/sala-climatizada.JPG',
    features: ['Ar-condicionado e climatização constante', 'Carteiras ergonômicas para estudo prolongado', 'Recursos audiovisuais de alta resolução', 'Quadro panorâmico para explanação aprofundada']
  },
  {
    id: 'str-2',
    title: 'Espaço para reuniões com os responsáveis',
    category: 'estudo',
    description: 'Ambiente acolhedor e privativo para atendimento e alinhamento pedagógico constante entre coordenação, professores e famílias dos estudantes.',
    image: '/assets/sala-reuniao-paes.JPG',
    features: ['Cabines individuais com iluminação direcionada', 'Tomadas e pontos de energia para dispositivos', 'Bancadas para estudo em duplas ou trios', 'Ambiente com fiscalização de silêncio']
  },
  {
    id: 'str-3',
    title: 'Nossa fachada',
    category: 'pedagogico',
    description: 'Localização privilegiada de fácil acesso em Duque de Caxias, com estrutura moderna, recepção segura e identificação visual acolhedora.',
    image: '/assets/fachada-02.JPG',
    features: ['Atendimento com horários agendados', 'Espaço dedicado à correção de redação individualizada', 'Material de consulta e livros de referência', 'Acompanhamento de metas do estudante']
  },
  {
    id: 'str-4',
    title: 'Nossa sala para concursos',
    category: 'convivencia',
    description: 'Ambiente climatizado e planejado especialmente para turmas preparatórias de concursos públicos, com foco intensivo em alta performance e simulados.',
    image: '/assets/sala-concursos.JPG',
    features: ['Ambiente ventilado e protegido', 'Bebedouros refrigerados e banheiros higienizados', 'Ponto de alimentação e cantina', 'Monitoramento e segurança na entrada e saída']
  },
  
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: 'Quais cursos o Progressão oferece?',
    answer: 'O Progressão Caxias oferece o Colégio completo (Fundamental II ao Ensino Médio), Pré-Vestibular voltado para UERJ e ENEM, preparatórios para Carreiras Militares (ESA, EEAr, AFA, EFOMM, EsPCEx, Colégio Naval e EPCAR, além de monitorias de Português para RM2 e EAGS) e turmas para Concursos Públicos como PMERJ, INSS, PRF, PCERJ, Banco do Brasil, DETRAN, GM Maricá e Transpetro, no formato presencial ou pelo Progressão Online.'
  },
  {
    question: 'Existem simulados? Com que frequência?',
    answer: 'Sim. Aplicamos simulados periódicos, no padrão oficial das bancas e com correção pela Teoria de Resposta ao Item (TRI), para que o aluno se acostume com o formato, o tempo de prova e o nível de exigência real de cada objetivo.'
  },
  {
    question: 'Existem diferenciais específicos do colégio?',
    answer: 'Sim. O Colégio conta com professores especialistas por disciplina, plantões de dúvidas no contraturno, laboratório de redação com correção individual e itinerários formativos e orientação vocacional para o Ensino Médio.'
  },
  {
    question: 'Como funciona a matrícula?',
    answer: 'A matrícula pode ser iniciada pelo WhatsApp ou diretamente na secretaria, na Rua Bento Gonçalves, 23, Duque de Caxias. Nossa equipe orienta sobre turma, turno e documentação necessária conforme a etapa ou o curso escolhido.'
  },
  {
    question: 'Quais disciplinas são trabalhadas no curso?',
    answer: 'O conteúdo varia conforme o objetivo do aluno. No Colégio, seguimos a matriz curricular completa da Educação Básica. Nos preparatórios, o foco é direcionado por edital, cobrindo as disciplinas e competências exigidas por cada banca (militar, ENEM ou concursos).'
  },
  {
    question: 'Como posso entrar em contato?',
    answer: 'Você pode falar com a nossa secretaria pelo WhatsApp, telefone ou e-mail, ou visitar presencialmente a unidade em Duque de Caxias, de segunda a sexta, das 07h às 21h, e aos sábados, das 07h30 às 16h30.'
  },
  {
    question: 'Onde fica a instituição?',
    answer: 'O Progressão Caxias fica na Rua Bento Gonçalves, 23, Duque de Caxias, RJ.'
  }
];
