import { CourseData, SchoolSegmentData, TeacherMember, TestimonialItem, StructureItem, FaqItem } from '../types';

export const COURSES_DATA: Record<string, CourseData> = {
  'preparatorio-militar': {
    id: 'preparatorio-militar',
    slug: '/cursos/preparatorio-militar',
    title: 'Preparatório Militar',
    subtitle: 'Preparação de alta intensidade e disciplina para as escolas e academias militares mais disputadas do Brasil.',
    badge: 'Carreiras Militares',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80',
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
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
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
    title: 'Pré-Vestibular',
    subtitle: 'Preparação especializada para os vestibulares regionais e estaduais mais exigentes (UERJ, UFRJ, USP, UNICAMP e particulares).',
    badge: 'Vestibulares Tradicionais',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    classFormat: 'Presencial | Manhã, Tarde ou Noite',
    description: 'Turmas específicas para exames discursivos e vestibulares tradicionais com foco em alto rendimento.',
    detailedText: 'Os vestibulares tradicionais, como o Exame de Qualificação e Discursivo da UERJ, possuem formatos próprios de questões analíticas e obras literárias específicas. O Progressão Caxias oferece um programa desenhado para gabaritar essas provas.',
    targetAudience: [
      'Candidatos ao vestibular da UERJ e universidades públicas estaduais',
      'Vestibulandos que necessitam de treinamento em provas discursivas e obras literárias obrigatórias',
      'Estudantes com foco em carreiras de alta nota de corte'
    ],
    disciplines: [
      'Língua Portuguesa e Análise das Obras Literárias indicadas pelas bancas',
      'Física Teórica e Experimental voltada a questões discursivas',
      'Química com resolução passo a passo de problemas discursivos',
      'Biologia Celular, Genética, Fisiologia e Ecologia com foco interpretativo',
      'História Geral e do Brasil com abordagem crítica e contextual',
      'Geografia Física, Política e Geopolítica Contemporânea',
      'Matemática discursiva com rigor formal de desenvolvimento'
    ],
    disciplinas: [
      'Língua Portuguesa e Literatura',
      'Física Teórica e Discursiva',
      'Química Aplicada',
      'Biologia e Genética',
      'História e Atualidades',
      'Matemática Discursiva'
    ],
    differentials: [
      'Estudo minucioso das leituras e livros obrigatórios de cada edital',
      'Treinamento específico para justificativas discursivas e respostas concisas',
      'Plantões de resolução de provas dos últimos 15 anos',
      'Professores com décadas de experiência nas principais bancas do Rio de Janeiro'
    ],
    methodology: 'Abordagem analítica dos editais, aulas temáticas sobre livros obrigatórios e baterias de questões discursivas.',
    methodologySummary: 'Abordagem analítica dos editais, aulas temáticas sobre livros obrigatórios e baterias de questões discursivas.',
    simuladosFrequency: 'Simulados específicos por banca (ex: Simulados modelo UERJ e modelo tradicional).',
    simuladosInfo: 'Simulados no formato Exame de Qualificação e Exame Discursivo UERJ.',
    resultsPlaceholder: '[NÚMERO DE APROVAÇÕES NA UERJ / VESTIBULARES]',
    testimonialsPlaceholder: '[DEPOIMENTO DO ALUNO APROVADO - Relato sobre a aprovação em universidade pública através do Pré-Vestibular do Progressão Caxias.]',
    concursosAtendidos: [
      'UERJ (Vestibular Estadual - Exame de Qualificação e Discursivo)',
      'Vestibulares de Medicina (Faculdades particulares renomadas)',
      'Outras universidades estaduais e federais com modelos próprios'
    ],
    faqs: [
      {
        question: 'O curso trabalha os livros de literatura cobrados na UERJ?',
        answer: 'Sim, realizamos aulas especiais e fornecemos cadernos de análise literária para todas as obras indicadas no edital vigente.'
      },
      {
        question: 'Como funciona o treinamento para as provas discursivas?',
        answer: 'O aluno aprende a estruturar respostas técnicas, diretas e fundamentadas exatamente como os corretores das bancas pontuam no espelho de correção.'
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
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
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
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
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

export const DIFFERENTIALS_DATA = [
  {
    icon: 'GraduationCap',
    title: 'Professores Preparados',
    description: 'Corpo docente experiente, especialista nas exigências das principais bancas militares, vestibulares e concursos.'
  },
  {
    icon: 'BookOpen',
    title: 'Material Didático Exclusivo',
    description: 'Apostilas direcionadas, constantemente atualizadas com teoria concisa e vasta bateria de questões selecionadas.'
  },
  {
    icon: 'Clock',
    title: 'Simulados Oficiais',
    description: 'Provas cronometradas seguindo fielmente as regras, tempos e padrões das bancas organizadoras.'
  },
  {
    icon: 'UserCheck',
    title: 'Acompanhamento Próximo',
    description: 'Monitoramento pedagógico individualizado para apoiar o aluno em suas dificuldades e potencializar seu rendimento.'
  },
  {
    icon: 'TrendingUp',
    title: 'Metodologia Comprovada',
    description: 'Ciclo sistemático de 5 etapas (Aprenda, Pratique, Teste, Evolua, Conquiste) voltado à retenção de longo prazo.'
  },
  {
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
    name: '[NOME DO DIRETOR]',
    role: 'Direção Geral',
    category: 'direcao',
    bio: '[INSERIR BIOGRAFIA E TRAJETÓRIA DA DIREÇÃO - Informação institucional a ser preenchida pela equipe gestora.]',
    credentials: ['[FORMAÇÃO ACADÊMICA]', '[EXPERIÊNCIA NA ÁREA EDUCACIONAL]'],
    imagePlaceholderText: 'Direção Geral'
  },
  {
    id: 'coord-1',
    name: '[NOME DO COORDENADOR]',
    role: 'Coordenação Pedagógica - Colégio',
    category: 'coordenacao',
    bio: '[INSERIR BIOGRAFIA E TRAJETÓRIA DA COORDENAÇÃO ESCOLAR - Acompanhamento pedagógico e suporte aos estudantes e responsáveis.]',
    credentials: ['[FORMAÇÃO PEDAGÓGICA]', '[ESPECIALIZAÇÃO EM GESTÃO ESCOLAR]'],
    imagePlaceholderText: 'Coordenação Colégio'
  },
  {
    id: 'coord-2',
    name: '[NOME DO COORDENADOR]',
    role: 'Coordenação - Cursos Preparatórios',
    category: 'coordenacao',
    bio: '[INSERIR BIOGRAFIA E TRAJETÓRIA DA COORDENAÇÃO DE CURSOS - Estratégia de editais, bancas militares e vestibulares.]',
    credentials: ['[FORMAÇÃO ESPECÍFICA]', '[EXPERIÊNCIA EM BANCAS DE CONCURSO]'],
    imagePlaceholderText: 'Coordenação Cursos'
  },
  {
    id: 'prof-1',
    name: '[NOME DO PROFESSOR]',
    role: 'Professor(a) de Matemática e Raciocínio Lógico',
    category: 'professores',
    discipline: 'Matemática',
    bio: '[INSERIR BIOGRAFIA DO PROFESSOR - Formação acadêmica, especialidade em bancas e metodologia de aula.]',
    credentials: ['[LICENCIATURA/MESTRADO]', '[ANOS DE EXPERIÊNCIA EM PREPARATÓRIOS]'],
    imagePlaceholderText: 'Prof. Matemática'
  },
  {
    id: 'prof-2',
    name: '[NOME DO PROFESSOR]',
    role: 'Professor(a) de Língua Portuguesa e Redação',
    category: 'professores',
    discipline: 'Português e Redação',
    bio: '[INSERIR BIOGRAFIA DO PROFESSOR - Formação acadêmica, análise de bancas e correção de redações nota máxima.]',
    credentials: ['[LICENCIATURA EM LETRAS]', '[ESPECIALISTA EM BANCA EXAMINADORA]'],
    imagePlaceholderText: 'Prof. Português'
  },
  {
    id: 'prof-3',
    name: '[NOME DO PROFESSOR]',
    role: 'Professor(a) de Física',
    category: 'professores',
    discipline: 'Física',
    bio: '[INSERIR BIOGRAFIA DO PROFESSOR - Ensino aprofundado para carreiras militares, engenharia e vestibulares.]',
    credentials: ['[LICENCIATURA/BACHARELADO EM FÍSICA]', '[DOCÊNCIA PREPARATÓRIA]'],
    imagePlaceholderText: 'Prof. Física'
  },
  {
    id: 'ped-1',
    name: '[NOME DO PROFISSIONAL]',
    role: 'Orientação Educacional e Apoio ao Aluno',
    category: 'pedagogico',
    bio: '[INSERIR BIOGRAFIA DA EQUIPE PEDAGÓGICA - Atendimento socioemocional, rotina de estudos e suporte individual.]',
    credentials: ['[PEDAGOGIA / PSICOPEDAGOGIA]', '[ATENDIMENTO AO ESTUDANTE]'],
    imagePlaceholderText: 'Equipe Pedagógica'
  }
];

export const STRUCTURE_ITEMS: StructureItem[] = [
  {
    id: 'str-1',
    title: 'Salas de Aula Climatizadas e Equipadas',
    category: 'salas',
    description: 'Ambientes confortáveis, com isolamento acústico adequado, iluminação projetada para longas sessões de estudo e equipamentos multimídia para projeção de aulas dinâmicas.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    features: ['Ar-condicionado e climatização constante', 'Carteiras ergonômicas para estudo prolongado', 'Recursos audiovisuais de alta resolução', 'Quadro panorâmico para explanação aprofundada']
  },
  {
    id: 'str-2',
    title: 'Espaços de Estudo Individual e em Grupo',
    category: 'estudo',
    description: 'Área silenciosa com cabines individuais para foco absoluto e mesas para resolução compartilhada de questões entre colegas e monitores.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    features: ['Cabines individuais com iluminação direcionada', 'Tomadas e pontos de energia para dispositivos', 'Bancadas para estudo em duplas ou trios', 'Ambiente com fiscalização de silêncio']
  },
  {
    id: 'str-3',
    title: 'Estrutura Pedagógica e Plantão de Dúvidas',
    category: 'pedagogico',
    description: 'Salas reservadas para atendimento personalizado entre alunos e professores monitores, permitindo sanar dificuldades específicas de exercícios e redação.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    features: ['Atendimento com horários agendados', 'Espaço dedicado à correção de redação individualizada', 'Material de consulta e livros de referência', 'Acompanhamento de metas do estudante']
  },
  {
    id: 'str-4',
    title: 'Áreas de Convivência e Intervalo',
    category: 'convivencia',
    description: 'Espaço arejado e seguro para descanso entre os turnos de aula, permitindo a integração saudável e momentos de descontração necessários para a saúde mental.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    features: ['Ambiente ventilado e protegido', 'Bebedouros refrigerados e banheiros higienizados', 'Ponto de alimentação e cantina', 'Monitoramento e segurança na entrada e saída']
  }
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: 'Quais cursos o Progressão oferece?',
    answer: 'O Progressão Caxias oferece cursos preparatórios completos para Carreiras Militares (EsPCEx, AFA, ESA, EEAr, Colégio Naval), ENEM, Pré-Vestibular (UERJ e vestibulares de Medicina) e Concursos Públicos, além da estrutura escolar completa do Colégio.'
  },
  {
    question: 'Existem simulados? Com que frequência?',
    answer: 'Sim, nossos alunos são treinados geralmente 1 vez por mês. Além disso existem opções para turbinar esses simulados e terem mais simulados por mês.'
  },
  {
    question: 'Existem diferenciais específicos do colégio?',
    answer: 'Ensino integral, Tecnologia, Robótica, Preparação para vestibular, Acompanhamento pedagógico, Apoio psicológico, Atividades extracurriculares.'
  },
  {
    question: 'Como funciona a matrícula?',
    answer: 'As matrículas podem ser iniciadas pelo atendimento via WhatsApp, formulário de contato do site ou presencialmente na secretaria da instituição. Nossa equipe apresentará a grade horária, o plano pedagógico e as condições de inscrição.'
  },
  {
    question: 'Quais disciplinas são trabalhadas no curso?',
    answer: 'ESA: História, Geografia, Matemática, Inglês, Português, Literatura, Redação. EEAR: Física, Matemática, Português, Inglês. ESPCEX: História, Geografia, Matemática, Inglês, Português, Literatura, Redação, Física, Química.'
  },
  {
    question: 'Como posso entrar em contato?',
    answer: 'Você pode falar diretamente com nossa equipe através do botão de WhatsApp no site, ligar para a nossa secretaria ou preencher o formulário na página de Contato.'
  },
  {
    question: 'Onde fica a instituição?',
    answer: 'A instituição está localizada na Rua Bento Gonçalves 23, Duque de Caxias - RJ. Convidamos você a agendar uma visita para conhecer nossas instalações.'
  }
];
