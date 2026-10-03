export interface MilitaryPreparatory {
  id: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  image: string;
  insigniaLogo?: string;
  remuneracao: string;
  remuneracaoPosFormado?: string;
  remuneracaoSubtexto?: string;
  remuneracaoLabel: string;
  remuneracaoDetalhe: string;
  orgao: string;
  curso: string;
  escolaridade: string;
  idade: string;
  nacionalidade: string;
  sexo: string;
  remuneracaoFormacao: string;
  remuneracaoFormado: string;
  sobre: string;
  disciplinas: string[];
  disciplinasResumo: string;
  diferenciais: string[];
  fonte: string;
}

export const MILITARY_PREPARATORIES: MilitaryPreparatory[] = [
  {
    id: 'rm2',
    name: 'Monitoria de Português RM2',
    subtitle: 'Oficial da Marinha Temporário',
    shortDescription: 'Preparação focada na disciplina com maior peso (50% da prova) do concurso para Oficiais Temporários da Reserva de 2ª Classe da Marinha do Brasil.',
    image: '/assets/capas-militar/rm2-img.png',
    remuneracao: 'R$ 9.070,00 a R$ 10.500,00',
    remuneracaoLabel: 'Remuneração inicial (Segundo-Tenente):',
    remuneracaoDetalhe: 'Soldo de R$ 7.490,00 acrescido de adicionais militares de habilitação e disponibilidade (vencimento bruto inicial)',
    orgao: 'Marinha do Brasil (Distritos Navais em todo o território nacional)',
    curso: 'Estágio de Adaptação e Serviço (EAS) ou Estágio de Serviço Técnico (EST)',
    escolaridade: 'Nível Superior completo (Bacharelado ou Licenciatura nas áreas de edital)',
    idade: 'Ter entre 18 e 40 anos até a data de incorporação',
    nacionalidade: 'Brasileiro nato ou naturalizado (conforme área do edital)',
    sexo: 'Masculino e Feminino (ambos os sexos concorrem em igualdade de condições)',
    remuneracaoFormacao: 'Remuneração integral desde o início do estágio de adaptação (posto de Guarda-Marinha / 2º Tenente), com soldo e adicionais militares.',
    remuneracaoFormado: 'Após a formação inicial, o Oficial RM2 atua como Segundo-Tenente (remuneração bruta inicial de aprox. R$ 9.070,00 a R$ 10.500,00), podendo ser promovido a Primeiro-Tenente com remuneração superior a R$ 11.000,00 brutos.',
    sobre: 'O concurso RM2 (Serviço Militar Voluntário para Oficiais Temporários) da Marinha do Brasil é uma das melhores oportunidades para profissionais de nível superior atuarem como Oficiais das Forças Armadas por até 8 anos. A prova objetiva é composta por apenas 50 questões: 25 de Língua Portuguesa e 25 de Formação Militar Naval. Nossa monitoria é desenhada com foco cirúrgico na banca da Marinha, garantindo máxima pontuação em Português — que é o principal critério de classificação e desempate.',
    disciplinasResumo: 'Língua Portuguesa (50% da prova e desempate) e Formação Militar-Naval',
    disciplinas: [
      'Língua Portuguesa (Foco Total da Monitoria: Interpretação de Texto, Gramática Normativa, Morfologia, Sintaxe, Regência, Crase e Pontuação)',
      'Formação Militar-Naval (Tradições da Marinha do Brasil, Legislação Militar-Naval, Organização Básica das Forças Armadas e História Marítima)'
    ],
    diferenciais: [
      'Língua Portuguesa representa 50% de todas as questões do concurso da Marinha',
      'Ingresso direto como Oficial com prestígio e liderança militar',
      'Excelente remuneração inicial para recém-formados ou profissionais experientes',
      'Atuação técnica na sua área de formação dentro de organizações militares navais',
      'Assistência médica, odontológica e hospitalar da Marinha do Brasil para o oficial e dependentes'
    ],
    fonte: 'Edital do Serviço Militar Voluntário (SMV-OF) dos Distritos Navais da Marinha do Brasil e Tabela de Soldos Militares (Lei 13.954/2019).'
  },
  {
    id: 'esa',
    name: 'ESA',
    subtitle: 'Escola de Sargentos das Armas',
    shortDescription: 'Concurso anual de nível médio do Exército Brasileiro que forma os Sargentos de Carreira das Armas, Intendência, Material Bélico, Saúde e Música.',
    image: '/assets/capas-militar/esa-sargentos.png',
    remuneracao: 'R$ 5.049,00 a R$ 5.500,00',
    remuneracaoLabel: 'Remuneração após formado (3º Sargento):',
    remuneracaoDetalhe: 'Soldo de R$ 3.825,00 acrescido de adicional militar e adicional de habilitação militar (vencimento bruto inicial)',
    orgao: 'Exército Brasileiro (Escola de Sargentos das Armas - Três Corações/MG)',
    curso: 'Curso de Formação e Graduação de Sargentos (CFGS - Nível Superior Tecnólogo)',
    escolaridade: 'Ensino Médio completo (ou estar cursando o 3º ano no ano do concurso)',
    idade: '17 a 24 anos para área Geral; 17 a 26 anos para áreas de Saúde e Música',
    nacionalidade: 'Brasileiro nato ou naturalizado',
    sexo: 'Masculino e Feminino (ambos concorrem conforme especialidade do edital)',
    remuneracaoFormacao: 'Aprox. R$ 1.199,00 a R$ 1.414,00 mensais durante os 2 anos de formação como Aluno do CFGS, além de alojamento, alimentação balanceada, fardamento completo e assistência médico-hospitalar e odontológica.',
    remuneracaoFormado: 'Ao concluir o curso e ser promovido a Terceiro-Sargento do Exército Brasileiro, a remuneração bruta inicial fica em torno de R$ 5.049,00 a R$ 5.500,00. Na progressão da carreira (Segundo-Sargento, Primeiro-Sargento e Subtenente, com possibilidade de ascender ao oficialato pelo QAO), a remuneração ultrapassa R$ 8.000,00 a R$ 10.000,00 brutos.',
    sobre: 'A Escola de Sargentos das Armas (ESA) é o estabelecimento de ensino do Exército Brasileiro responsável pela formação e graduação dos Sargentos Combatentes de Carreira das Armas de Infantaria, Cavalaria, Artilharia, Engenharia e Comunicações, bem como do Quadro de Material Bélico, Serviço de Intendência, Saúde e Música. O curso tem duração de 2 anos em regime de internato e confere diploma de graduação de nível superior (Tecnólogo) reconhecido pelo MEC.',
    disciplinasResumo: 'Matemática, Língua Portuguesa, Redação, História e Geografia do Brasil e Língua Inglesa',
    disciplinas: [
      'Matemática (Álgebra, Geometria Plana e Espacial, Trigonometria, Funções, Matrizes, Determinantes e Probabilidade)',
      'Língua Portuguesa (Gramática Normativa, Morfologia, Sintaxe do Período, Ortografia e Interpretação Textual)',
      'Redação (Texto Dissertativo-Argumentativo nos critérios específicos do Exército Brasileiro)',
      'História do Brasil (Períodos Colonial, Monárquico e Republicano com ênfase nos fatos militares e territoriais)',
      'Geografia do Brasil (Geomorfologia, Climas, Bacias Hidrográficas, Urbanização, Agropecuária e Geopolítica)',
      'Língua Inglesa (Compreensão Textual, Vocabulário Contextual e Estruturas Gramaticais)'
    ],
    diferenciais: [
      'Estabilidade funcional e plano de carreira estruturado no Exército Brasileiro',
      'Diploma de nível superior (Tecnólogo) emitido pelo Exército e reconhecido pelo MEC',
      'Alojamento, alimentação, fardamento e assistência médica durante toda a formação',
      'Possibilidade de ascender ao oficialato através do Quadro Auxiliar de Oficiais (QAO)',
      'Oportunidades de realizar cursos de especialização de elite (Paraquedista, Ações de Comandos, Caatinga, Selva)'
    ],
    fonte: 'Edital oficial do Concurso de Admissão aos Cursos de Formação e Graduação de Sargentos (ESA/Exército Brasileiro) e Lei 13.954/2019.'
  },
  {
    id: 'eear',
    name: 'EEAr',
    subtitle: 'Escola de Especialistas de Aeronáutica',
    shortDescription: 'Maior complexo de ensino técnico-militar da América Latina, formando os Sargentos Especialistas da Força Aérea Brasileira em mais de 20 áreas.',
    image: '/assets/capas-militar/concurso-aeronautica.png',
    insigniaLogo: '/assets/logos/eear.png',
    remuneracao: 'R$ 5.049,00 a R$ 5.500,00',
    remuneracaoLabel: 'Remuneração após formado (3º Sargento):',
    remuneracaoDetalhe: 'Soldo de R$ 3.825,00 + adicionais militares de habilitação e disponibilidade (bruto inicial)',
    orgao: 'Força Aérea Brasileira - FAB (Guaratinguetá/SP)',
    curso: 'Curso de Formação de Sargentos (CFS)',
    escolaridade: 'Ensino Médio completo',
    idade: 'Ter entre 17 e 24 anos de idade até 31 de dezembro do ano da matrícula',
    nacionalidade: 'Brasileiro nato',
    sexo: 'Masculino e Feminino (conforme opção de especialidade / Controle de Tráfego Aéreo, Mecânica, Eletrônica, etc.)',
    remuneracaoFormacao: 'Aprox. R$ 1.199,00 a R$ 1.414,00 mensais como Aluno da EEAr, em regime de internato com assistência médico-hospitalar, odontológica, alimentação e alojamento gratuitos.',
    remuneracaoFormado: 'Após 2 anos de curso, o formando é promovido a Terceiro-Sargento da FAB com remuneração inicial em torno de R$ 5.049,00 a R$ 5.500,00 brutos, progredindo na hierarquia militar ao longo dos anos até Suboficial e podendo alcançar o oficialato pelo EAOF (Estágio de Adaptação ao Oficialato).',
    sobre: 'A Escola de Especialistas de Aeronáutica (EEAr), carinhosamente chamada de "Berço dos Especialistas", localiza-se em Guaratinguetá (SP) e é responsável por formar os militares técnicos essenciais para o controle do espaço aéreo brasileiro, manutenção das aeronaves de caça e transporte, sistemas de radares, comunicações e meteorologia da Força Aérea Brasileira.',
    disciplinasResumo: 'Língua Portuguesa, Língua Inglesa, Matemática e Física',
    disciplinas: [
      'Língua Portuguesa (Gramática Geral, Sintaxe, Pontuação, Ortografia e Interpretação Textual)',
      'Língua Inglesa (Interpretação e Gramática nos níveis Básico ou Intermediário segundo a especialidade)',
      'Matemática (Álgebra, Geometria Plana/Espacial/Analítica, Trigonometria e Estatística)',
      'Física (Cinemática, Dinâmica, Termologia, Óptica, Ondulatória, Eletricidade e Magnetismo)'
    ],
    diferenciais: [
      'Carreira técnica de grande valorização na aviação militar e controle de tráfego aéreo',
      'Concurso realizado semestralmente (duas chances por ano para prestar a prova)',
      'Possibilidade de ascensão até o oficialato através do Quadro de Oficiais Especialistas (EAOF)',
      'Plano de carreira com promoções regulares por antiguidade e merecimento',
      'Assistência médico-hospitalar pelo Sistema de Saúde da Aeronáutica (SISAU)'
    ],
    fonte: 'Instruções Específicas para o Exame de Admissão ao CFS (EEAr/Comando da Aeronáutica) e Lei 13.954/2019.'
  },
  {
    id: 'eags',
    name: 'Monitoria de Português EAGS',
    subtitle: 'Estágio de Adaptação à Graduação de Sargentos',
    shortDescription: 'Concurso da Aeronáutica para quem já possui curso técnico e busca ingressar diretamente como Sargento da FAB em apenas 1 ano de curso.',
    image: '/assets/capas-militar/Concurso-eags.jpg',
    remuneracao: 'R$ 5.049,00 a R$ 5.500,00',
    remuneracaoLabel: 'Remuneração após formado (3º Sargento):',
    remuneracaoDetalhe: 'Soldo de R$ 3.825,00 acrescido de adicionais militares legais (vencimento bruto inicial)',
    orgao: 'Força Aérea Brasileira - FAB (EEAr - Guaratinguetá/SP)',
    curso: 'Estágio de Adaptação à Graduação de Sargentos da Aeronáutica (EAGS)',
    escolaridade: 'Ensino Médio e Curso Técnico de Nível Médio na especialidade de edital (Administração, Enfermagem, Eletrônica, Informática, Eletricidade, etc.)',
    idade: 'Ter entre 17 e 24 anos de idade até 31 de dezembro do ano da matrícula',
    nacionalidade: 'Brasileiro nato',
    sexo: 'Masculino e Feminino (ambos concorrem conforme especialidade técnica)',
    remuneracaoFormacao: 'Aprox. R$ 1.199,00 a R$ 1.414,00 mensais durante apenas 1 ano de adaptação e formação na EEAr, com todas as despesas de alojamento, farda e alimentação custeadas pela FAB.',
    remuneracaoFormado: 'Formado como Terceiro-Sargento Especialista da Aeronáutica em apenas 12 meses de estágio, com remuneração inicial de R$ 5.049,00 a R$ 5.500,00 e início imediato da estabilidade funcional e plano de carreira.',
    sobre: 'O EAGS é a porta de entrada mais rápida para se tornar Sargento de Carreira da Aeronáutica para quem já concluiu ou está concluindo o Ensino Técnico. A prova é composta exclusivamente por Língua Portuguesa e Conhecimentos Especializados da área técnica. Como todos os candidatos dominam sua área técnica, a nota da prova de Língua Portuguesa é o verdadeiro diferencial que decide quem conquista a vaga e quem fica de fora.',
    disciplinasResumo: 'Língua Portuguesa (divisor de aprovação) e Conhecimentos Específicos do Curso Técnico',
    disciplinas: [
      'Língua Portuguesa Intensiva (Foco Principal da Monitoria: Interpretação de Texto, Ortografia Oficial, Morfologia, Análise Sintática, Regência e Concordância)',
      'Conhecimentos Especializados (Específicos da área técnica do edital: Administração, Enfermagem, Eletrônica, Eletricidade, Informática, Música, Obras, etc.)'
    ],
    diferenciais: [
      'Duração de apenas 1 ano de estágio na EEAr (tempo de formação reduzido pela metade)',
      'Aproveitamento direto do diploma do seu curso técnico na profissão militar',
      'Língua Portuguesa é o critério decisivo comum de desempate e aprovação',
      'Estabilidade na carreira militar pública federal',
      'Plano de carreira idêntico ao dos sargentos de carreira do CFS'
    ],
    fonte: 'Instruções Específicas para o Exame de Admissão ao EAGS (Comando da Aeronáutica) e Lei 13.954/2019.'
  },
  {
    id: 'afa',
    name: 'AFA',
    subtitle: 'Academia da Força Aérea',
    shortDescription: 'Formação dos Oficiais Aviadores, Intendentes e de Infantaria da Força Aérea Brasileira com diploma de nível superior reconhecido pelo MEC.',
    image: '/assets/capas-militar/concurso-afa.jpg',
    remuneracao: 'R$ 8.245,00 a R$ 10.300,00',
    remuneracaoLabel: 'Remuneração inicial (Aspirante / 2º Tenente):',
    remuneracaoDetalhe: 'Soldo de R$ 7.490,00 acrescido de adicional militar e adicional de habilitação militar (vencimento bruto inicial)',
    orgao: 'Força Aérea Brasileira - FAB (Pirassununga/SP)',
    curso: 'Curso de Formação de Oficiais de Aviação (CFOAV), Intendência (CFOINT) ou Infantaria (CFOINF)',
    escolaridade: 'Ensino Médio completo (ou estar cursando o 3º ano)',
    idade: 'Ter entre 17 e 22 anos até 31 de dezembro do ano da matrícula',
    nacionalidade: 'Brasileiro nato (requisito constitucional para Oficialato da FAB)',
    sexo: 'Masculino e Feminino (ambos os sexos concorrem conforme o quadro de oficiais)',
    remuneracaoFormacao: 'Durante os 4 anos de formação na AFA (Pirassununga/SP) em regime de internato, o cadete recebe auxílio financeiro mensal de aprox. R$ 1.575,00 a R$ 1.630,00, além de alojamento, alimentação, fardamento de gala e de voo, e assistência médica completa.',
    remuneracaoFormado: 'Ao concluir o curso na AFA, o militar é declarado Aspirante a Oficial e promovido a Segundo-Tenente da FAB com remuneração inicial de R$ 8.245,00 a R$ 10.300,00 brutos, progredindo na carreira até Coronel e Oficial-General (Brigadeiro).',
    sobre: 'A Academia da Força Aérea (AFA), sediada em Pirassununga (SP), é a instituição de ensino superior da Aeronáutica responsável por formar os Oficiais Aviadores (pilotos de caça, transporte e helicóptero), Oficiais de Intendência (gestão logística e administrativa) e Oficiais de Infantaria (operações especiais e defesa de bases). O concurso é um dos mais prestigiados e concorridos do Brasil.',
    disciplinasResumo: 'Matemática Avançada, Física Teórica/Aplicada, Língua Portuguesa, Língua Inglesa e Redação',
    disciplinas: [
      'Matemática Avançada (Cálculo Preparatório, Geometria Analítica, Funções, Polinômios, Matrizes, Determinantes, Números Complexos e Trigonometria Avançada)',
      'Física Completa (Mecânica Clássica, Termodinâmica, Ondulatória, Óptica Geométrica e Eletromagnetismo)',
      'Língua Portuguesa e Literatura Brasileira (Gramática Rigorosa, Análise Estilística, Semântica e Interpretação Textual Crítica)',
      'Língua Inglesa Avançada (Compreensão de Textos Técnicos, Vocabulário Denso e Estruturas Gramaticais Complexas)',
      'Redação (Dissertação Argumentativa Padrão Força Aérea com Avaliação Rigorosa de Norma Culta)'
    ],
    diferenciais: [
      'Formação como Piloto Militar de Caça, Transporte ou Helicóptero da FAB',
      'Diploma de Bacharelado de Nível Superior emitido pela Força Aérea Brasileira',
      'Instrução de voo em modernas aeronaves de instrução militar avançada',
      'Estabilidade e plano de carreira estruturado até os postos de Oficial-General',
      'Assistência médica e odontológica pelo Sistema de Saúde da Aeronáutica (SISAU)'
    ],
    fonte: 'Instruções Específicas do Exame de Admissão aos CFOAV/CFOINT/CFOINF (AFA) e Lei 13.954/2019.'
  },
  {
    id: 'efomm',
    name: 'EFOMM',
    subtitle: 'Escola de Formação de Oficiais da Marinha Mercante',
    shortDescription: 'Formação dos Oficiais de Náutica (Comandantes) e de Máquinas para atuação nas frotas marítimas comerciais, navios mercantes e plataformas offshore.',
    image: '/assets/capas-militar/efomm.jpg',
    remuneracao: 'R$ 10.000,00 a R$ 15.000,00+',
    remuneracaoLabel: 'Remuneração inicial após praticagem (2º Oficial):',
    remuneracaoDetalhe: 'Remuneração inicial de Segundo Oficial de Náutica ou Máquinas embarcado na frota mercante nacional e internacional',
    orgao: 'Marinha do Brasil (CIAGA - Rio de Janeiro/RJ e CIABA - Belém/PA)',
    curso: 'Curso de Bacharelado em Ciências Náuticas (Oficial de Náutica ou Oficial de Máquinas)',
    escolaridade: 'Ensino Médio completo (ou estar cursando o 3º ano no ano do processo seletivo)',
    idade: 'Ter entre 17 e 23 anos até 1º de janeiro do ano de início do curso',
    nacionalidade: 'Brasileiro nato ou naturalizado',
    sexo: 'Masculino e Feminino (ambos concorrem em igualdade de condições para Náutica e Máquinas)',
    remuneracaoFormacao: 'Durante os 3 anos de curso no CIAGA (RJ) ou CIABA (PA) em regime de internato militar, o aluno recebe auxílio financeiro mensal de aprox. R$ 1.575,00, além de uniforme completo, alojamento, 4 refeições diárias e assistência médica e odontológica gratuitas da Marinha.',
    remuneracaoFormado: 'Após 3 anos de curso acadêmico e 1 ano de estágio embarcado (praticagem), o formando é diplomado Bacharel em Ciências Náuticas e declarado Segundo Oficial de Náutica ou Máquinas, com remunerações no mercado marítimo/offshore que variam de R$ 10.000,00 a R$ 15.000,00+ mensais, além de escalas de embarque atrativas (ex: 28 dias embarcado por 28 dias de folga).',
    sobre: 'A Escola de Formação de Oficiais da Marinha Mercante (EFOMM) é o centro de formação de excelência administrado pela Marinha do Brasil nos Centros de Instrução Almirante Graça Aranha (CIAGA/RJ) e Almirante Braz de Aguiar (CIABA/PA). Forma os futuros Comandantes e Chefes de Máquinas responsáveis pelo comando de navios graneleiros, petroleiros, porta-contêineres e embarcações offshore de apoio à exploração de petróleo.',
    disciplinasResumo: 'Matemática Avançada, Física Teórica/Aplicada, Língua Portuguesa, Língua Inglesa e Redação',
    disciplinas: [
      'Matemática (Cálculo, Trigonometria, Geometria Espacial e Analítica, Matrizes, Determinantes, Binômio de Newton e Probabilidade)',
      'Física (Mecânica dos Fluidos, Estática, Hidrostática, Cinemática, Dinâmica, Eletricidade, Óptica e Termologia)',
      'Língua Portuguesa (Gramática Normativa, Morfossintaxe, Regência, Crase, Pontuação e Interpretação Textual)',
      'Língua Inglesa (Interpretação e Gramática em Nível Intermediário/Avançado - Idioma Padrão da Navegação Internacional)',
      'Redação (Texto Dissertativo-Argumentativo com Critérios Exclusivos do Edital da Marinha do Brasil)'
    ],
    diferenciais: [
      'Uma das carreiras mais bem remuneradas do país acessíveis através do Ensino Médio',
      'Diploma de Bacharel em Ciências Náuticas com validade internacional reconhecida pela IMO (Organização Marítima Internacional)',
      'Escalas de trabalho especiais com períodos prolongados de folga em terra (ex: 28x28 ou 14x14)',
      'Oportunidade de navegar em rotas internacionais por diversos continentes e oceanos',
      'Todas as despesas de moradia, uniforme e alimentação custeadas durante os anos de formação'
    ],
    fonte: 'Edital oficial do Processo Seletivo aos Cursos de Formação de Oficiais da Marinha Mercante (EFOMM - CIAGA/CIABA).'
  },
  {
    id: 'espcex',
    name: 'EsPCEx',
    subtitle: 'Escola Preparatória de Cadetes do Exército',
    shortDescription: 'A porta de entrada de nível médio para a Academia Militar das Agulhas Negras (AMAN), formando os Oficiais Combatentes de Carreira do Exército Brasileiro.',
    image: '/assets/capas-militar/espcex.jpg',
    insigniaLogo: '/assets/logos/espcex.png',
    remuneracao: 'R$ 8.245,00 a R$ 10.300,00',
    remuneracaoLabel: 'Remuneração após formado (Aspirante / 2º Tenente):',
    remuneracaoDetalhe: 'Soldo de 2º Tenente (R$ 7.490,00) + adicionais militares de habilitação e disponibilidade (bruto inicial)',
    orgao: 'Exército Brasileiro (EsPCEx em Campinas/SP e AMAN em Resende/RJ)',
    curso: 'Curso de Formação e Graduação de Oficiais de Carreira da Linha de Ensino Militar Bélico (Bacharelado em Ciências Militares)',
    escolaridade: 'Ensino Médio completo (ou concluinte do 3º ano)',
    idade: 'Ter entre 17 e 22 anos completados até 31 de dezembro do ano da matrícula',
    nacionalidade: 'Brasileiro nato (requisito constitucional para Oficialato do Exército)',
    sexo: 'Masculino e Feminino (ambos concorrem conforme armas e serviços previstos em edital)',
    remuneracaoFormacao: 'Durante o 1º ano na EsPCEx (Campinas/SP), o aluno recebe aprox. R$ 1.300,00 mensais. Do 2º ao 5º ano na AMAN (Resende/RJ), como Cadete de Carreira, a remuneração é de aprox. R$ 1.630,00, com regime de internato completo e sem qualquer custo para a família.',
    remuneracaoFormado: 'Ao concluir os 5 anos de formação e se formar na tradicional AMAN, o militar é declarado Aspirante a Oficial (soldo de R$ 7.315,00 + adicionais) e logo promovido a Segundo-Tenente (soldo de R$ 7.490,00 + adicionais), com remuneração bruta inicial de R$ 8.245,00 a R$ 10.300,00. O Oficial de Carreira progride até Capitão, Major, Tenente-Coronel, Coronel e aos postos de General de Brigada, Divisão e Exército.',
    sobre: 'A Escola Preparatória de Cadetes do Exército (EsPCEx) é a instituição de ensino militar sediada em Campinas (SP) responsável pela seleção e pelo primeiro ano de formação do futuro Oficial de Carreira das Armas de Infantaria, Cavalaria, Artilharia, Engenharia, Comunicações, Material Bélico e Intendência do Exército Brasileiro. Os 4 anos seguintes são cursados na prestigiosa Academia Militar das Agulhas Negras (AMAN), em Resende (RJ).',
    disciplinasResumo: 'Matemática, Física, Química, Língua Portuguesa, Redação, História, Geografia e Língua Inglesa',
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
    diferenciais: [
      'Única via de acesso para se tornar Oficial General do Exército Brasileiro',
      'Diploma de Bacharel em Ciências Militares de reconhecimento internacional',
      'Treinamento de liderança, estratégia, sobrevivência e gestão de tropas de elite',
      'Estabilidade absoluta na carreira militar do Exército Brasileiro',
      'Alojamento, alimentação de alto padrão, fardamento histórico e assistência de saúde'
    ],
    fonte: 'Edital do Concurso de Admissão à EsPCEx (Exército Brasileiro) e Tabela de Soldos Militares (Lei 13.954/2019).'
  },
  {
    id: 'colegio-naval',
    name: 'Colégio Naval',
    subtitle: 'Ensino Médio e Formação Militar da Marinha do Brasil',
    shortDescription: 'Tradicional instituição de Ensino Médio da Marinha em regime de internato que prepara os futuros Oficiais da prestigiosa Escola Naval.',
    image: '/assets/capas-militar/colegio-naval.jpeg',
    insigniaLogo: '/assets/logos/colegio-naval.png',
    remuneracao: 'R$ 7.988,00 a R$ 10.000,00+',
    remuneracaoSubtexto: 'Bolsa-auxílio: R$ 1.526,92',
    remuneracaoLabel: 'Remuneração após formado:',
    remuneracaoDetalhe: 'Remuneração de R$ 7.988,00 a R$ 10.000,00+ após formado como Oficial e bolsa-auxílio de R$ 1.526,92 durante o Ensino Médio',
    orgao: 'Marinha do Brasil (Colégio Naval - Angra dos Reis/RJ)',
    curso: 'Curso de Preparação de Aspirantes (Ensino Médio integrado à Formação Militar-Naval)',
    escolaridade: 'Ensino Fundamental completo (ou estar matriculado no 9º ano no ano do concurso)',
    idade: 'Ter entre 15 e 18 anos incompletos (conforme data-base estipulada em edital)',
    nacionalidade: 'Brasileiro nato (requisito da carreira das Forças Armadas)',
    sexo: 'Masculino e Feminino (ambos concorrem conforme vagas do edital)',
    remuneracaoFormacao: 'Durante os 3 anos do Ensino Médio em regime de internato em Angra dos Reis/RJ, o aluno recebe bolsa-auxílio mensal de R$ 1.526,92, moradia estudantil completa, 4 refeições diárias balanceadas, fardamento oficial, material didático de ponta, assistência médica, odontológica e psicológica gratuitas.',
    remuneracaoFormado: 'Ao concluir com aproveitamento os 3 anos do Ensino Médio, o aluno do Colégio Naval ingressa automaticamente na Escola Naval (RJ) sem prestar novo vestibular público. Ao se formar Oficial da Marinha (Segundo-Tenente), a remuneração varia de R$ 7.988,00 base a R$ 10.000,00+ brutos.',
    sobre: 'O Colégio Naval (CN), localizado na enseada de Angra dos Reis (RJ), é amplamente reconhecido como um dos estabelecimentos de Ensino Médio com maior índice de desempenho acadêmico e formativo do país. O jovem ingressa ao sair do 9º ano do Fundamental e tem todas as despesas custeadas pela Marinha do Brasil, além de receber bolsa mensal e ter sua vaga de Oficial universitário garantida.',
    disciplinasResumo: 'Matemática Aprofundada, Língua Portuguesa, Redação, Língua Inglesa, Estudos Sociais e Ciências',
    disciplinas: [
      'Matemática Aprofundada (Aritmética, Álgebra, Fatoração, Teoria dos Números, Radicais, Geometria Euclidiana Plana e Trigonometria Básica)',
      'Língua Portuguesa (Gramática Normativa Completa, Análise Sintática, Morfologia, Concordância, Regência e Interpretação de Texto)',
      'Redação (Texto Dissertativo-Argumentativo Padrão Marinha do Brasil)',
      'Estudos Sociais (História Geral, História do Brasil e Geografia do Brasil)',
      'Ciências (Fundamentos de Física e Química do Ensino Fundamental)',
      'Língua Inglesa (Compreensão de Texto, Gramática Fundamental e Vocabulário Contextual)'
    ],
    diferenciais: [
      'Ensino Médio de altíssimo padrão acadêmico com corpo docente de mestres e doutores',
      'Garantia de vaga direta na Escola Naval (RJ) sem prestar vestibular aberto ao público',
      'Recebimento de bolsa mensal de auxílio financeiro desde o 1º ano do Ensino Médio',
      'Regime de internato com infraestrutura esportiva olímpica, náutica e acadêmica em Angra dos Reis',
      'Desenvolvimento precoce de independência, disciplina, honra e espírito de liderança naval'
    ],
    fonte: 'Edital oficial do Concurso de Admissão ao Colégio Naval (Marinha do Brasil) e Lei 13.954/2019.'
  },
  {
    id: 'epcar',
    name: 'EPCAR',
    subtitle: 'Escola Preparatória de Cadetes do Ar',
    shortDescription: 'Ensino Médio militar de excelência da Força Aérea Brasileira em Barbacena/MG, conhecido como a "Nascente do Poder Aéreo" e porta de entrada direta para a AFA.',
    image: '/assets/capas-militar/epcar.png',
    insigniaLogo: '/assets/logos/epcar.png',
    remuneracao: 'R$ 7.490,00 a R$ 10.000,00+',
    remuneracaoSubtexto: 'Bolsa-auxílio: R$ 1.294,00',
    remuneracaoLabel: 'Remuneração após formado:',
    remuneracaoDetalhe: 'Remuneração de R$ 7.490,00 a R$ 10.000,00+ após formado como Oficial e bolsa-auxílio de R$ 1.294,00 durante o Ensino Médio',
    orgao: 'Força Aérea Brasileira - FAB (Barbacena/MG)',
    curso: 'Curso Preparatório de Cadetes do Ar (CPCAR - Ensino Médio militar integrado)',
    escolaridade: 'Ensino Fundamental completo (ou estar matriculado no 9º ano no ano do concurso)',
    idade: 'Ter entre 15 e 18 anos incompletos até 31 de dezembro do ano da matrícula',
    nacionalidade: 'Brasileiro nato (requisito da Força Aérea Brasileira)',
    sexo: 'Masculino e Feminino (ambos concorrem para todas as vagas)',
    remuneracaoFormacao: 'Durante os 3 anos do Ensino Médio na EPCAR em Barbacena (MG), o aluno recebe bolsa-auxílio mensal de R$ 1.294,00, além de regime de internato com alojamentos modernos, 4 refeições diárias, fardamento completo da FAB, assistência médica, odontológica e hospitalar gratuitas.',
    remuneracaoFormado: 'Ao concluir os 3 anos do CPCAR com aproveitamento acadêmico e militar, o aluno ingressa diretamente na Academia da Força Aérea (AFA) em Pirassununga/SP sem prestar vestibular concorrente, formando-se como Oficial com remuneração de R$ 7.490,00 a R$ 10.000,00+ brutos.',
    sobre: 'A Escola Preparatória de Cadetes do Ar (EPCAR), localizada em Barbacena (MG) e carinhosamente conhecida como "Nascente do Poder Aéreo", é a instituição de ensino médio da Força Aérea Brasileira que figura historicamente entre os maiores desempenhos do país no ENEM. Oferece formação integral de alto padrão cívico, acadêmico e militar.',
    disciplinasResumo: 'Matemática, Língua Portuguesa, Redação e Língua Inglesa',
    disciplinas: [
      'Matemática (Aritmética, Álgebra, Produtos Notáveis, Fatoração, Equações, Inequações, Radicais, Geometria Plana e Funções)',
      'Língua Portuguesa (Compreensão e Interpretação Textual, Gramática Normativa, Morfossintaxe e Ortografia Oficial)',
      'Redação (Texto Dissertativo-Argumentativo Padrão Força Aérea Brasileira)',
      'Língua Inglesa (Interpretação Textual, Estruturas Gramaticais Fundamentais e Vocabulário Contextual)'
    ],
    diferenciais: [
      'Histórico de destaque nacional com uma das maiores notas do Brasil no ENEM',
      'Acesso direto à Academia da Força Aérea (AFA) sem passar pelo concorrido vestibular aberto',
      'Bolsa-auxílio financeira mensal de R$ 1.294,00 durante todo o Ensino Médio',
      'Instalações completas de internato militar, biblioteca técnica e complexo esportivo olímpico',
      'Formação sólida de companheirismo, disciplina, liderança e espírito de corpo aeronáutico'
    ],
    fonte: 'Instruções Específicas do Exame de Admissão ao CPCAR (Comando da Aeronáutica) e Lei 13.954/2019.'
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
