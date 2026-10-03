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
  jornada: string;
  idade: string;
  nacionalidade: string;
  sexo: string;
  orgao: string;
  cargo: string;
  sobre: string;
  requisitos: ConcursoRequisito[];
  etapas: ConcursoEtapa[];
  diferenciais: ConcursoDiferencial[];
  perfil: string[];
  cargosMultiplos?: ConcursoCargoDetalhe[];
  observacao?: string;
  fonte: string;
}

export const CONCURSOS_PUBLICOS_DATA: ConcursoPublico[] = [
  {
    id: 'pmerj',
    nome: 'PMERJ',
    nomeCompleto: 'Polícia Militar do Estado do Rio de Janeiro',
    descricaoCurta: 'Polícia Militar do Estado do Rio de Janeiro — Segurança ostensiva e ordem pública estadual.',
    categoria: ['Segurança Pública'],
    imagem: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Médio Completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 5.233,88',
    remuneracaoFinal: 'R$ 9.800,00+',
    remuneracaoResumo: 'R$ 2.956,41 (como Aluno no CFAP) chegando a R$ 5.233,88 bruto como Soldado PM pós-formado.',
    jornada: 'Regime de escala (12x36, 24x72 ou expediente de acordo com a unidade policial)',
    idade: 'Entre 18 e 32 anos (limite legal fixado pela Lei Estadual nº 9.610/2022)',
    nacionalidade: 'Brasileira (ou portuguesa com direitos civis reconhecidos)',
    sexo: 'Ambos os sexos (masculino e feminino com ampla concorrência)',
    orgao: 'Secretaria de Estado de Polícia Militar do Rio de Janeiro (SEPM-RJ)',
    cargo: 'Soldado Policial Militar do Quadro de Praças (QPMP)',
    sobre: 'A Polícia Militar do Estado do Rio de Janeiro (PMERJ) é uma das forças de segurança pública mais tradicionais do país, responsável pelo policiamento ostensivo, preservação da ordem pública e segurança das famílias fluminenses. O cargo de Soldado PM oferece estabilidade estatutária definitiva, plano de assistência médica do Hospital Central da PMERJ e progressão transparente por tempo e merecimento até as patentes superiores do quadro militar estadual.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Certificado de conclusão do Ensino Médio expedido por instituição autorizada pelo MEC.' },
      { titulo: 'Idade Limite', descricao: 'Ter entre 18 anos completos e até 32 anos na data limite da inscrição.' },
      { titulo: 'Habilitação (CNH)', descricao: 'Possuir Carteira Nacional de Habilitação (CNH), no mínimo na categoria B.' },
      { titulo: 'Estatura Mínima', descricao: 'Estatura mínima descalço de 1,65m para candidatos do sexo masculino e 1,60m para o sexo feminino.' },
      { titulo: 'Obrigações e Idoneidade', descricao: 'Quitação com obrigações eleitorais e militares (candidatos masculinos), sem antecedentes criminais desabonadores.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Escrita Objetiva e Discursiva', descricao: 'Exame de conhecimentos gerais (Língua Portuguesa, Matemática Básica, Direitos Humanos, Noções de Direito e Legislação) com Redação dissertativa.' },
      { numero: '02', titulo: 'Preenchimento do Formulário e Antropometria', descricao: 'Conferência física da estatura mínima e medidas oficiais regulamentares.' },
      { numero: '03', titulo: 'Teste de Aptidão Física (TAF)', descricao: 'Testes de corrida, flexão na barra fixa, abdominais e impulsão conforme parâmetros do edital.' },
      { numero: '04', titulo: 'Exame Psicológico', descricao: 'Avaliação clínica dos traços de perfil adequados para a atividade policial armada.' },
      { numero: '05', titulo: 'Exame de Saúde', descricao: 'Bateria de exames médicos, laboratoriais, toxicológicos e odontológicos.' },
      { numero: '06', titulo: 'Exame Social e Documental', descricao: 'Pesquisa minuciosa de vida pregressa e homologação dos documentos cadastrais.' },
      { numero: '07', titulo: 'Curso de Formação Profissional (CFAP)', descricao: 'Treinamento intensivo no Centro de Formação e Aperfeiçoamento de Praças em Sulacap/RJ com bolsa de remuneração integral.' }
    ],
    diferenciais: [
      { titulo: 'Estabilidade Estatutária', descricao: 'Garantia de emprego público regido pelo Estatuto dos Policiais Militares do RJ.' },
      { titulo: 'Plano de Saúde Exclusivo', descricao: 'Acesso completo ao Hospital Central da Polícia Militar (HCPM) e clínicas conveniadas para o policial e dependentes.' },
      { titulo: 'Escala de Trabalho Flexível', descricao: 'Possibilidade de folgas prolongadas e adesão voluntária a escalas extras remuneradas (PROEIS/RAS).' },
      { titulo: 'Aposentadoria Especial Militar', descricao: 'Regras previdenciárias específicas para carreiras militares das forças estaduais.' }
    ],
    perfil: [
      'Disciplina e prontidão para agir',
      'Senso de justiça e respeito à sociedade',
      'Boa resistência física e emocional',
      'Habilidade para trabalhar em equipe sob pressão'
    ],
    observacao: 'Valores e requisitos confirmados conforme o edital oficial mais recente da Polícia Militar do RJ (SEPM/RJ).',
    fonte: 'Secretaria de Estado de Polícia Militar do Rio de Janeiro (SEPM-RJ) / Governo do RJ.'
  },
  {
    id: 'inss',
    nome: 'INSS',
    nomeCompleto: 'Instituto Nacional do Seguro Social',
    descricaoCurta: 'Instituto Nacional do Seguro Social — Atendimento à previdência e proteção aos trabalhadores brasileiros.',
    categoria: ['Administrativo', 'Área Federal'],
    imagem: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Médio Completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 5.938,52',
    remuneracaoFinal: 'R$ 9.109,20+',
    remuneracaoResumo: 'Vencimento básico de R$ 712,61 somado à Gratificação GDASS (até R$ 4.225,91) e auxílio-alimentação de R$ 1.000,00.',
    jornada: '40 horas semanais (com regimes de atendimento presencial e teletrabalho conforme lotação)',
    idade: 'Mínimo de 18 anos completos na data da posse no cargo público',
    nacionalidade: 'Brasileira nata, naturalizada ou portuguesa equiparada por lei',
    sexo: 'Ambos os sexos (concorrência universal sem distinção de gênero)',
    orgao: 'Instituto Nacional do Seguro Social (Autarquia Federal Vinculada ao Ministério da Previdência Social)',
    cargo: 'Técnico do Seguro Social',
    sobre: 'O INSS é o maior órgão de seguridade social da América Latina, responsável pelo reconhecimento e concessão de aposentadorias, pensões, auxílios por incapacidade e benefícios assistenciais aos brasileiros. O cargo de Técnico do Seguro Social atua no suporte ao atendimento dos segurados, análise documental de requerimentos e operacionalização de processos. É um dos concursos de nível médio mais cobiçados do país devido à estabilidade federal regida pela Lei 8.112/90.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Diploma ou certificado de conclusão do Ensino Médio expedido por entidade de ensino oficial autorizada pelo MEC.' },
      { titulo: 'Idade', descricao: 'Ter 18 anos completos no momento da investidura e posse.' },
      { titulo: 'Direitos Cívicos', descricao: 'Estar em dia com as obrigações da Justiça Eleitoral e com o Serviço Militar Obrigatório (para homens).' },
      { titulo: 'Aptidão Física e Mental', descricao: 'Avaliação clínica admissional confirmando plena capacidade para o desempenho das atribuições administrativas.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Inscrição e Escolha da Gerência Executiva (GEX)', descricao: 'Seleção do polo regional de lotação pretendido pelo candidato.' },
      { numero: '02', titulo: 'Prova Objetiva (Cebraspe / Padrão Certo/Errado)', descricao: '120 itens divididos entre Conhecimentos Básicos (Língua Portuguesa, Ética no Serviço Público, Noções de Direito Constitucional e Administrativo, Raciocínio Lógico e Informática) e Conhecimentos Específicos (Seguridade e Legislação Previdenciária).' },
      { numero: '03', titulo: 'Curso de Formação Profissional', descricao: 'Etapa classificatória e eliminatória realizada nas capitais sedes das Gerências Executivas com avaliação específica.' },
      { numero: '04', titulo: 'Homologação e Nomeação Federal', descricao: 'Convocação dos aprovados para posse e exercício nas Agências da Previdência Social (APS).' }
    ],
    diferenciais: [
      { titulo: 'Estabilidade Federal (Lei 8.112/90)', descricao: 'Vínculo estatutário estável após 3 anos de estágio probatório com proteção federal.' },
      { titulo: 'Teletrabalho Estruturado', descricao: 'Programa de gestão com ampla possibilidade de teletrabalho total ou híbrido por produtividade.' },
      { titulo: 'Progressão Funcional Regular', descricao: 'Avanço por classes e padrões com aumentos sucessivos garantidos em plano de carreira.' },
      { titulo: 'Atuação de Alto Impacto Social', descricao: 'Garantia de amparo e dignidade aos idosos, trabalhadores e famílias em momentos cruciais da vida.' }
    ],
    perfil: [
      'Organização e precisão com normas legais',
      'Empatia e respeito no atendimento ao público',
      'Boa interpretação de texto e textos normativos',
      'Facilidade com sistemas e fluxos digitais'
    ],
    observacao: 'Dados de remuneração e estrutura baseados no edital oficial federal do INSS e na tabela de remuneração dos servidores federais.',
    fonte: 'Ministério da Previdência Social / Diário Oficial da União.'
  },
  {
    id: 'prf-administrativo',
    nome: 'PRF Administrativo',
    nomeCompleto: 'Polícia Rodoviária Federal — Área Administrativa',
    descricaoCurta: 'Polícia Rodoviária Federal — Suporte técnico, logístico e operacional de uma das forças policiais de elite do país.',
    categoria: ['Administrativo', 'Área Federal'],
    imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Médio Completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 5.173,28',
    remuneracaoFinal: 'R$ 6.300,00+',
    remuneracaoResumo: 'Vencimento básico + Gratificação GDATPPRF + auxílio-alimentação federal de R$ 1.000,00 mensais.',
    jornada: '40 horas semanais (segunda a sexta-feira, em superintendências, delegacias e unidades centrais)',
    idade: '18 anos completos no momento da posse',
    nacionalidade: 'Brasileira nata ou naturalizada',
    sexo: 'Ambos os sexos (livre concorrência)',
    orgao: 'Polícia Rodoviária Federal (Ministério da Justiça e Segurança Pública)',
    cargo: 'Agente Administrativo do Plano Especial de Cargos da PRF',
    sobre: 'O concurso para Agente Administrativo da PRF oferece uma das melhores portas de entrada no serviço público federal para quem possui o Ensino Médio completo. O servidor não atua no policiamento ostensivo com arma de fogo nem necessita de teste físico (TAF), sendo responsável por toda a engrenagem administrativa, gestão de processos, apoio logístico, recursos humanos e controle de frotas e compras que mantêm as viaturas e operações da PRF rodando com excelência.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Certificado de conclusão de Ensino Médio devidamente registrado e emitido por instituição reconhecida pelo MEC.' },
      { titulo: 'Idade', descricao: 'Mínimo de 18 anos completos na data da posse.' },
      { titulo: 'Sem CNH Obrigatória', descricao: 'Diferente do cargo de Policial Rodoviário, a área administrativa não exige CNH nem carteira especial de trânsito.' },
      { titulo: 'Sem Teste Físico (TAF)', descricao: 'Não há cobrança de corrida, barra ou natação nas etapas de seleção.' },
      { titulo: 'Idoneidade Civil', descricao: 'Quitação com a Justiça Eleitoral e com o Serviço Militar Obrigatório para candidatos masculinos.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Inscrição', descricao: 'Cadastro no certame da banca organizadora oficial com indicação da lotação regional.' },
      { numero: '02', titulo: 'Prova Objetiva (120 Itens)', descricao: 'Língua Portuguesa, Raciocínio Lógico, Informática, Legislação Aplicada à PRF, Noções de Direito Constitucional e Administrativo e Ética Pública.' },
      { numero: '03', titulo: 'Investigação Social Simplificada', descricao: 'Verificação de regularidade cadastral e comprovação de idoneidade.' },
      { numero: '04', titulo: 'Nomeação e Posse Federal', descricao: 'Investidura no cargo efetivo com estabilidade da Lei 8.112/90.' }
    ],
    diferenciais: [
      { titulo: 'Vínculo Federal Estável', descricao: 'Segurança contra demissões arbitrárias assegurada pelo regime estatutário da União.' },
      { titulo: 'Sem Risco Ostensivo Policial', descricao: 'Ambiente de trabalho focado em escritório corporativo e gestão pública.' },
      { titulo: 'Horário Regular de Trabalho', descricao: 'Carga horária previsível em dias úteis, ideal para quem deseja continuar estudando para concursos de nível superior.' },
      { titulo: 'Adicional de Fronteira', descricao: 'Possibilidade de acréscimo indenizatório para servidores lotados em delegacias de faixas de fronteira.' }
    ],
    perfil: [
      'Gosto por rotinas de escritório e administração',
      'Boa redação de memorandos e relatórios',
      'Habilidade com planilhas e softwares corporativos',
      'Comprometimento com o apoio à segurança nacional'
    ],
    observacao: 'Dados condizentes com o Plano Especial de Cargos da PRF e as tabelas federais vigentes de remuneração.',
    fonte: 'Ministério da Justiça e Segurança Pública / Polícia Rodoviária Federal.'
  },
  {
    id: 'prf-agente-federal',
    nome: 'PRF — Agente Federal',
    nomeCompleto: 'Polícia Rodoviária Federal — Policial Rodoviário Federal',
    descricaoCurta: 'Polícia Rodoviária Federal — A elite da fiscalização e do combate ao crime organizado nas rodovias brasileiras.',
    categoria: ['Segurança Pública', 'Área Federal'],
    imagem: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Superior em qualquer área de formação',
    destaqueEscolaridade: 'Nível Superior',
    remuneracaoInicial: 'R$ 10.790,87',
    remuneracaoFinal: 'R$ 16.552,34+',
    remuneracaoResumo: 'Subsídio inicial oficial de R$ 10.790,87 + R$ 1.000,00 de auxílio-alimentação + adicional de fronteira de até R$ 2.000,00.',
    jornada: 'Regime de plantão (comumente 24x72 horas) ou expediente operacional',
    idade: '18 anos completos na data da posse (sem limite máximo além da aposentadoria compulsória)',
    nacionalidade: 'Brasileira nata ou naturalizada',
    sexo: 'Ambos os sexos (concorrência paritária)',
    orgao: 'Departamento de Polícia Rodoviária Federal (DPRF)',
    cargo: 'Policial Rodoviário Federal (Terceira Classe / Padrão I)',
    sobre: 'O Policial Rodoviário Federal atua em mais de 75 mil quilômetros de rodovias e estradas federais, desempenhando papel decisivo no patrulhamento tático, apreensão de drogas, armas e contrabandos, fiscalização de trânsito e salvamento de vidas. A carreira oferece armamento de ponta, viaturas modernas, tecnologia de radar e reconhecimento óptico, além de remuneração em modelo de subsídio com plano de progressão que atinge mais de R$ 16.500 mensais na Classe Especial.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Diploma devidamente registrado de conclusão de curso de graduação de Nível Superior em qualquer área (inclusive cursos de Tecnólogo reconhecidos pelo MEC).' },
      { titulo: 'Habilitação (CNH)', descricao: 'Possuir CNH válida na categoria "B" ou superior, livre de restrições ou bloqueios.' },
      { titulo: 'Idade', descricao: 'Ter 18 anos completos na investidura do cargo público.' },
      { titulo: 'Aptidão Física Rigorosa', descricao: 'Aprovação no Teste de Aptidão Física (TAF com corrida, barra fixa, shuttle run e impulsão).' },
      { titulo: 'Idoneidade Moral', descricao: 'Investigação social completa atestando conduta ilibada e sem máculas na vida pública e privada.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Objetiva e Discursiva', descricao: '120 itens divididos em 3 blocos (Língua Portuguesa, Raciocínio Lógico-Matemático, Informática, Física, Ética, Geopolítica, Direito Constitucional, Administrativo, Penal e Legislação de Trânsito do CTB) mais Redação dissertativa.' },
      { numero: '02', titulo: 'Exame de Aptidão Física (TAF)', descricao: 'Flexão em barra fixa, shuttle run (teste de agilidade), impulsão horizontal e corrida de 12 minutos.' },
      { numero: '03', titulo: 'Avaliação de Saúde e Biopsicossocial', descricao: 'Exames clínicos, laboratoriais e verificação de condições médicas de alta exigência.' },
      { numero: '04', titulo: 'Avaliação Psicológica', descricao: 'Testes de atenção concentrada, agressividade controlada, tomada de decisão e estabilidade emocional.' },
      { numero: '05', titulo: 'Avaliação de Títulos', descricao: 'Pontuação complementar para pós-graduação, mestrado, doutorado e experiência policial.' },
      { numero: '06', titulo: 'Investigação Social', descricao: 'Checagem de vida pregressa em âmbito nacional com acompanhamento durante todo o certame.' },
      { numero: '07', titulo: 'Curso de Formação Profissional (CFP)', descricao: 'Treinamento intensivo de caráter eliminatório na Universidade Corporativa da PRF (UniPRF) em Florianópolis/SC com bolsa-auxílio.' }
    ],
    diferenciais: [
      { titulo: 'Remuneração Inicial Superior a R$ 11.000', descricao: 'Um dos maiores salários iniciais da segurança pública da União.' },
      { titulo: 'Escala 24x72 Horas', descricao: 'Permite 3 dias consecutivos de folga após cada plantão de 24 horas.' },
      { titulo: 'Porte de Arma de Fogo Nacional', descricao: 'Direito a porte de arma em todo o território nacional, em serviço ou fora dele.' },
      { titulo: 'Grupos Especializados de Elite', descricao: 'Oportunidade de ingressar no Comando de Operações Especializadas (COE), Grupo de Resposta Rápida (GRR) e Motopoliciamento.' }
    ],
    perfil: [
      'Gosto por operações de campo e patrulhamento tático',
      'Alto autocontrole emocional em situações de perigo',
      'Excelente aptidão física e condicionamento',
      'Senso de proteção e defesa da vida nas rodovias'
    ],
    observacao: 'Dados de remuneração e etapas em conformidade com o edital oficial federal da Polícia Rodoviária Federal.',
    fonte: 'Polícia Rodoviária Federal (DPRF) / Ministério da Justiça e Segurança Pública.'
  },
  {
    id: 'pcerj',
    nome: 'PCERJ',
    nomeCompleto: 'Polícia Civil do Estado do Rio de Janeiro',
    descricaoCurta: 'Polícia Civil do Estado do Rio de Janeiro — Investigação policial judiciária e combate especializado à criminalidade.',
    categoria: ['Segurança Pública'],
    imagem: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Superior (cargos de Inspetor, Investigador, Perito e Delegado)',
    destaqueEscolaridade: 'Nível Superior',
    remuneracaoInicial: 'R$ 5.840,37 a R$ 8.469,00',
    remuneracaoFinal: 'R$ 12.000,00 a R$ 18.483,00+',
    remuneracaoResumo: 'R$ 5.840,37 para Investigador, R$ 8.469,00 para Inspetor e até R$ 18.483,00+ para Delegado de Polícia.',
    jornada: '40 horas semanais em regime de expediente ou plantões em delegacias e departamentos especializados',
    idade: 'Mínimo de 18 anos completos na data da posse',
    nacionalidade: 'Brasileira nata ou naturalizada',
    sexo: 'Ambos os sexos (ampla concorrência)',
    orgao: 'Secretaria de Estado de Polícia Civil do Rio de Janeiro (SEPOL-RJ)',
    cargo: 'Inspetor de Polícia de 6ª Classe / Investigador Policial',
    sobre: 'A Polícia Civil do Estado do Rio de Janeiro é a instituição responsável pela investigação criminal, elucidação de delitos, perícias técnico-científicas e cumprimento de mandados judiciais em todo o território fluminense. Diferente do policiamento ostensivo uniformizado, a PCERJ opera em investigações de inteligência, delegacias distritais e delegacias especializadas (DCOD, DRACO, DH, DAS). A carreira proporciona porte de arma irrestrito, adicional de atividade perigosa e sólida ascensão funcional.',
    requisitos: [
      { titulo: 'Escolaridade Exigida', descricao: 'Diploma de Nível Superior em qualquer área para Inspetor de Polícia; para Delegado, exige-se bacharelado em Direito.' },
      { titulo: 'Habilitação (CNH)', descricao: 'Possuir Carteira Nacional de Habilitação (CNH) válida, no mínimo na categoria "B".' },
      { titulo: 'Idade', descricao: 'Ter 18 anos completos na data da investidura no cargo.' },
      { titulo: 'Condicionamento Físico', descricao: 'Aprovação no TAF eliminatório (corrida, flexão de braço, abdominal e impulsão).' },
      { titulo: 'Idoneidade e Vida Pregressa', descricao: 'Sem registros criminais ou condutas incompatíveis com a função policial judiciária.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Prova Escrita de Conhecimentos (Objetiva)', descricao: 'Exame de alta densidade técnica com Língua Portuguesa, Direito Constitucional, Direito Administrativo, Direito Penal e Processual Penal, Leis Especiais e Informática.' },
      { numero: '02', titulo: 'Prova de Capacidade Física (TAF)', descricao: 'Testes de corrida de média distância, abdominais tipo remador e flexão.' },
      { numero: '03', titulo: 'Exame Psicotécnico', descricao: 'Avaliação clínica de traços de atenção, resiliência e controle de impulsos.' },
      { numero: '04', titulo: 'Exame Médico', descricao: 'Avaliação física geral, audiometria, oftalmologia e exames laboratoriais.' },
      { numero: '05', titulo: 'Investigação Social', descricao: 'Diligências nos círculos social, profissional e financeiro do candidato.' },
      { numero: '06', titulo: 'Curso de Formação Profissional (Acadepol)', descricao: 'Treinamento prático de tiro defensivo, técnicas de algemamento, investigação e inteligência policial na Academia de Polícia Sylvio Terra com bolsa salarial.' }
    ],
    diferenciais: [
      { titulo: 'Estabilidade Estatutária Estadual', descricao: 'Garantia de permanência na carreira com regras de estabilidade do servidor público do Estado do RJ.' },
      { titulo: 'Atuação em Inteligência e Investigação', descricao: 'Trabalho focado na resolução de inquéritos, operações sigilosas e enfrentamento qualificado ao crime.' },
      { titulo: 'Porte de Arma de Fogo Institucional', descricao: 'Direito a porte de arma em todo o território nacional.' },
      { titulo: 'Departamentos Especializados de Destaque', descricao: 'Possibilidade de atuar na CORE (Coordenadoria de Recursos Especiais), Delegacias de Homicídios e Delegacias Especializadas.' }
    ],
    perfil: [
      'Gosto por investigação, pesquisa e dedução lógica',
      'Boa escrita e clareza na redação de inquéritos e relatórios',
      'Atenção aos detalhes e observação crítica',
      'Capacidade de tomar decisões estratégicas com discrição'
    ],
    observacao: 'Requisitos e salários alinhados aos editais oficiais da SEPOL-RJ e à legislação remuneratória do Estado do Rio de Janeiro.',
    fonte: 'Secretaria de Estado de Polícia Civil do Rio de Janeiro (SEPOL-RJ).'
  },
  {
    id: 'banco-do-brasil',
    nome: 'Banco do Brasil',
    nomeCompleto: 'Banco do Brasil S.A.',
    descricaoCurta: 'Banco do Brasil — Uma das maiores instituições financeiras do mundo, com plano de carreira veloz e excelentes benefícios.',
    categoria: ['Estatais', 'Administrativo'],
    imagem: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Médio Completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 5.436,07',
    remuneracaoFinal: 'R$ 14.000,00+',
    remuneracaoResumo: 'Salário-base de R$ 3.622,23 + R$ 1.813,84 de auxílio-alimentação/refeição + PLR semestral + previdência privada Previ.',
    jornada: '30 horas semanais (apenas 6 horas diárias de segunda a sexta-feira)',
    idade: 'Mínimo de 18 anos completos na data da contratação',
    nacionalidade: 'Brasileira ou portuguesa amparada pelo Estatuto de Igualdade',
    sexo: 'Ambos os sexos (ampla concorrência universal)',
    orgao: 'Banco do Brasil S.A. (Sociedade de Economia Mista)',
    cargo: 'Escriturário (com perfis de Agente Comercial e Agente de Tecnologia)',
    sobre: 'O Banco do Brasil é a primeira instituição financeira criada no Brasil e um dos maiores bancos da América Latina. O concurso para Escriturário é reconhecido por exigir apenas o Ensino Médio e oferecer uma carga horária reduzida de 6 horas diárias, permitindo excelente qualidade de vida e tempo para estudos. Além do salário e de mais de R$ 1.800 em vales de alimentação/refeição, os funcionários participam do rateio semestral de lucros (PLR) e têm acesso a um plano de ascensão para gerência em poucos anos.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Certificado de conclusão de Ensino Médio expedido por instituição de ensino reconhecida pelo MEC.' },
      { titulo: 'Idade', descricao: 'Ter 18 anos completos no momento da convocação admissional.' },
      { titulo: 'Sem CNH Obrigatória', descricao: 'Não há exigência de carteira de motorista.' },
      { titulo: 'Sem Teste Físico', descricao: 'Não há etapa de TAF nem exigências esportivas.' },
      { titulo: 'Exames Médicos Admissionais', descricao: 'Comprovação de higidez física e mental para as rotinas bancárias e de atendimento.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Inscrição por Microrregião / Macrorregião', descricao: 'O candidato escolhe o polo geográfico de atuação em agências bancárias.' },
      { numero: '02', titulo: 'Prova Objetiva (70 Questões)', descricao: 'Conhecimentos Básicos (Língua Portuguesa, Língua Inglesa, Matemática e Atualidades do Mercado Financeiro) e Conhecimentos Específicos (Conhecimentos Bancários, Informática/Vendas e Negociação).' },
      { numero: '03', titulo: 'Prova de Redação', descricao: 'Texto dissertativo-argumentativo estruturado de caráter estritamente eliminatório.' },
      { numero: '04', titulo: 'Aferição de Cotas e Exames Médicos Admissionais', descricao: 'Etapa final para contratação sob o regime da CLT com direitos do Acordo Coletivo dos Bancários.' }
    ],
    diferenciais: [
      { titulo: 'Jornada Reduzida de 6 Horas Diárias', descricao: '30 horas por semana sem trabalho aos sábados e domingos.' },
      { titulo: 'Vale-Alimentação e Refeição Superior a R$ 1.800', descricao: 'Creditado mensalmente no cartão de benefícios da categoria bancária.' },
      { titulo: 'Participação nos Lucros e Resultados (PLR)', descricao: 'Pagamento semestral de bonificações sobre o lucro líquido do banco.' },
      { titulo: 'Ascensão Rápida por Processos Internos', descricao: 'Possibilidade de disputar vagas internas de Gerente, Assessor ou Especialista com salários acima de R$ 10.000.' },
      { titulo: 'Previdência Complementar (Previ)', descricao: 'Um dos fundos de pensão mais sólidos do país com coparticipação da empresa.' }
    ],
    perfil: [
      'Facilidade de comunicação e bom relacionamento interpessoal',
      'Raciocínio numérico e interesse pelo mercado financeiro',
      'Proatividade comercial e atendimento consultivo',
      'Capacidade de aprender continuamente novas tecnologias'
    ],
    observacao: 'Informações e valores baseados no edital oficial do concurso do Banco do Brasil e na Convenção Coletiva dos Bancários.',
    fonte: 'Banco do Brasil S.A. / Fundação Cesgranrio.'
  },
  {
    id: 'detran',
    nome: 'DETRAN',
    nomeCompleto: 'Departamento de Trânsito do Estado do Rio de Janeiro',
    descricaoCurta: 'Departamento de Trânsito do Estado do Rio de Janeiro — Registro veicular, fiscalização, habilitação e identificação civil.',
    categoria: ['Trânsito', 'Administrativo'],
    imagem: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Médio e Nível Superior (conforme o cargo específico)',
    destaqueEscolaridade: 'Nível Médio / Superior',
    remuneracaoInicial: 'R$ 3.250,00 a R$ 5.500,00',
    remuneracaoFinal: 'R$ 6.000,00 a R$ 8.500,00+',
    remuneracaoResumo: 'R$ 3.250,00 a R$ 4.200,00 para cargos de Nível Médio e R$ 5.500,00 a R$ 7.500,00+ para cargos de Nível Superior com gratificações.',
    jornada: '40 horas semanais em postos de atendimento, CIRETRANs ou sedes administrativas',
    idade: '18 anos completos na data da posse',
    nacionalidade: 'Brasileira nata ou naturalizada',
    sexo: 'Ambos os sexos (livre concorrência)',
    orgao: 'Departamento de Trânsito do Estado do Rio de Janeiro (DETRAN-RJ)',
    cargo: 'Técnico de Trânsito / Técnico Administrativo / Analista de Trânsito',
    sobre: 'O DETRAN-RJ é a autarquia estadual responsável pela habilitação de motoristas, vistoria e licenciamento da frota de veículos, fiscalização das normas do Código de Trânsito Brasileiro (CTB) e emissão de carteiras de identidade pelo Instituto Félix Pacheco. O concurso do DETRAN é extremamente procurado por oferecer postos de trabalho distribuídos por toda a Baixada Fluminense, capital e interior, além de estabilidade estatutária e oportunidades tanto para nível médio quanto para nível superior.',
    cargosMultiplos: [
      {
        cargo: 'Técnico de Trânsito',
        escolaridade: 'Nível Médio Completo',
        remuneracao: 'R$ 3.250,00 a R$ 4.200,00',
        atribuicao: 'Atuação na fiscalização de trânsito, atendimento a condutores, aplicação de provas práticas e vistoria veicular.'
      },
      {
        cargo: 'Técnico Administrativo',
        escolaridade: 'Nível Médio Completo',
        remuneracao: 'R$ 3.250,00 a R$ 4.100,00',
        atribuicao: 'Processamento de documentação, prontuários, recursos de infrações e suporte operacional às unidades.'
      },
      {
        cargo: 'Assistente de Identificação Civil',
        escolaridade: 'Nível Médio Completo',
        remuneracao: 'R$ 3.250,00 a R$ 4.100,00',
        atribuicao: 'Coleta de dados biométricos, emissão da carteira de identidade civil e conferência de registros de identificação.'
      },
      {
        cargo: 'Analista de Trânsito / Gestão',
        escolaridade: 'Nível Superior Específico',
        remuneracao: 'R$ 5.500,00 a R$ 7.500,00+',
        atribuicao: 'Planejamento de engenharia de tráfego, gestão jurídica, finanças e tecnologia da informação da autarquia.'
      }
    ],
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Nível Médio completo para cargos de Técnico ou diploma de Nível Superior para cargos de Analista expedido por entidade credenciada pelo MEC.' },
      { titulo: 'Idade', descricao: 'Ter no mínimo 18 anos completos na investidura.' },
      { titulo: 'Habilitação (CNH)', descricao: 'Exigida CNH mínima categoria B especificamente para o cargo de Técnico de Trânsito/Fiscalização.' },
      { titulo: 'Quitação Cívica', descricao: 'Regularidade perante a Justiça Eleitoral e quitação militar (candidatos do sexo masculino).' }
    ],
    etapas: [
      { numero: '01', titulo: 'Inscrição', descricao: 'Escolha do cargo pretendido e da região geográfica de lotação.' },
      { numero: '02', titulo: 'Prova Objetiva', descricao: 'Língua Portuguesa, Legislação de Trânsito (Código de Trânsito Brasileiro - Lei 9.503/97), Noções de Direito Administrativo e Constitucional e Informática.' },
      { numero: '03', titulo: 'Prova Discursiva / Redação', descricao: 'Avaliação de redação estruturada de acordo com o nível de escolaridade.' },
      { numero: '04', titulo: 'Exames Médicos e Perícia Documental', descricao: 'Conferência física e documental preliminar à homologação dos resultados.' },
      { numero: '05', titulo: 'Nomeação e Posse', descricao: 'Ingresso no quadro de servidores estatutários do Estado do Rio de Janeiro.' }
    ],
    diferenciais: [
      { titulo: 'Estabilidade Estatutária Estadual', descricao: 'Proteção contra demissões sem justa causa garantida pela legislação do Estado do RJ.' },
      { titulo: 'Lotacões Próximas de Casa', descricao: 'Postos de atendimento e postos de vistoria presentes em Duque de Caxias e em toda a Baixada Fluminense.' },
      { titulo: 'Plano de Cargos e Vencimentos', descricao: 'Progressão por antiguidade e qualificação educacional com adicionais de titulação.' },
      { titulo: 'Diversidade de Atuações', descricao: 'Opções em áreas técnicas de trânsito, atendimento, identificação ou gestão interna.' }
    ],
    perfil: [
      'Atenção às regras e normas do Código de Trânsito',
      'Boa didática e paciência para atendimento presencial',
      'Organização documental e conferência cadastral',
      'Postura ética e compromisso com o cidadão'
    ],
    observacao: 'Os requisitos, cargos e faixas salariais são informados individualmente para cada carreira conforme documentação oficial da autarquia.',
    fonte: 'Departamento de Trânsito do Estado do Rio de Janeiro (DETRAN-RJ).'
  },
  {
    id: 'gm-marica',
    nome: 'Guarda Municipal de Maricá',
    nomeCompleto: 'Guarda Civil Municipal de Maricá',
    descricaoCurta: 'Guarda Civil Municipal de Maricá — Segurança comunitária e patrimonial em um dos municípios com maior investimento público do Brasil.',
    categoria: ['Segurança Pública'],
    imagem: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Médio Completo',
    destaqueEscolaridade: 'Nível Médio',
    remuneracaoInicial: 'R$ 3.800,00 a R$ 4.500,00',
    remuneracaoFinal: 'R$ 6.200,00+',
    remuneracaoResumo: 'Vencimento básico + adicional de periculosidade de 30% + Regime Especial de Trabalho (RET) e benefícios municipais.',
    jornada: 'Escala de 12x36 ou 24x72 horas, conforme necessidade da Secretaria de Ordem Pública',
    idade: '18 anos completos na data de posse no cargo',
    nacionalidade: 'Brasileira nata ou naturalizada',
    sexo: 'Ambos os sexos (ampla concorrência)',
    orgao: 'Prefeitura Municipal de Maricá / Secretaria de Ordem Pública e Gestão de Gabinete Institucional',
    cargo: 'Guarda Municipal',
    sobre: 'A Guarda Civil Municipal de Maricá se tornou referência nacional em infraestrutura, valorização salarial e tecnologia, impulsionada pelos recursos de royalties do petróleo do município. A corporação atua na proteção do patrimônio público, policiamento comunitário nas praias, lagoas e centros comerciais, além de rondas escolares e apoio à fiscalização integrada. O município oferece excelente plano de carreira e equipamentos modernos.',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Ensino Médio completo expedido por instituição de ensino regular autorizada.' },
      { titulo: 'Habilitação (CNH)', descricao: 'Possuir Carteira Nacional de Habilitação (CNH), no mínimo na categoria "A/B".' },
      { titulo: 'Idade', descricao: 'Ter 18 anos completos na data da investidura no cargo público.' },
      { titulo: 'Aptidão Física', descricao: 'Aprovação no Teste de Aptidão Física (TAF com corrida, flexão de braço e abdominais).' },
      { titulo: 'Idoneidade Moral', descricao: 'Comprovação de antecedentes criminais idôneos por certidões negativas da Justiça Estadual e Federal.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Inscrição', descricao: 'Adesão ao certame organizado pela banca oficial contratada pelo município.' },
      { numero: '02', titulo: 'Prova Escrita Objetiva', descricao: 'Língua Portuguesa, Raciocínio Lógico-Matemático, Noções de Direito (Constitucional, Penal e Administrativo), Estatuto Geral das Guardas Municipais (Lei 13.022/14) e Legislação Municipal de Maricá.' },
      { numero: '03', titulo: 'Teste de Aptidão Física (TAF)', descricao: 'Testes de corrida de resistência, flexões de solo e abdominais com critérios eliminatórios.' },
      { numero: '04', titulo: 'Exame Psicotécnico', descricao: 'Avaliação psicológica com emissão de laudo para porte de arma de fogo.' },
      { numero: '05', titulo: 'Exames Médicos e Toxicológico', descricao: 'Bateria de exames de saúde com teste antidrogas de larga janela de detecção.' },
      { numero: '06', titulo: 'Investigação Social', descricao: 'Apuração da conduta moral e social do candidato na comunidade.' },
      { numero: '07', titulo: 'Curso de Formação Profissional (CFP)', descricao: 'Capacitação prática em defesa pessoal, tiro institucional, policiamento de trânsito e direitos humanos com bolsa de auxílio.' }
    ],
    diferenciais: [
      { titulo: 'Investimento Municipal Maciço', descricao: 'Maricá é reconhecida pela alta arrecadação e pelos investimentos contínuos em segurança e ordem pública.' },
      { titulo: 'Escala 12x36 ou 24x72', descricao: 'Facilidade de conciliação de horários com folgas garantidas.' },
      { titulo: 'Adicional de Periculosidade e Gratificações', descricao: 'Composição salarial robusta com adicionais específicos da categoria.' },
      { titulo: 'Plano de Cargos e Vencimentos Próprio', descricao: 'Estrutura de carreira clara com evolução de classes e remuneração crescente.' }
    ],
    perfil: [
      'Gosto por segurança comunitária e proximidade com a população',
      'Boa capacidade física e agilidade de reação',
      'Disciplina, respeito às leis e integridade ética',
      'Facilidade de comunicação e mediação pacífica de conflitos'
    ],
    observacao: 'Dados e critérios condizentes com os editais oficiais de Guarda Municipal da Prefeitura de Maricá.',
    fonte: 'Prefeitura Municipal de Maricá / Secretaria de Ordem Pública.'
  },
  {
    id: 'transpetro',
    nome: 'Transpetro',
    nomeCompleto: 'Petrobras Transporte S.A. — Transpetro',
    descricaoCurta: 'Petróleo Brasileiro / Transporte e Logística — Gigante da infraestrutura de dutos, terminais e navios petroleiros.',
    categoria: ['Estatais'],
    imagem: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    escolaridade: 'Nível Médio Técnico ou Nível Superior (conforme edital do Processo Seletivo)',
    destaqueEscolaridade: 'Nível Técnico / Superior',
    remuneracaoInicial: 'R$ 4.700,00 a R$ 12.000,00+',
    remuneracaoFinal: 'R$ 15.000,00 a R$ 22.000,00+',
    remuneracaoResumo: 'Salário inicial entre R$ 4.700,00 e R$ 6.500,00 para Nível Médio Técnico; R$ 9.000,00 a R$ 12.000,00+ para Nível Superior e Oficiais de Marinha Mercante.',
    jornada: 'Regime de 40 horas semanais em terra ou regimes de escala de embarque (1x1 ou 2x1) para quadro de mar',
    idade: '18 anos completos na data da admissão formal',
    nacionalidade: 'Brasileira ou portuguesa amparada por tratado de reciprocidade',
    sexo: 'Ambos os sexos (concorrência equânime)',
    orgao: 'Petrobras Transporte S.A. — Transpetro (Subsidiária Integral da Petrobras)',
    cargo: 'Técnico de Administração e Controle / Técnico de Faixa e Dutos / Oficial de Náutica / Analista',
    sobre: 'A Transpetro é a maior subsidiária da Petrobras e a principal operadora logística de petróleo, derivados, gás e biocombustíveis da América Latina. Com uma rede extensa de milhares de quilômetros de oleodutos e gasodutos, mais de 45 terminais terrestres e aquaviários e uma frota moderna de navios petroleiros, a Transpetro seleciona profissionais pelo Processo Seletivo Público (PSP). A empresa se destaca pelos altos salários, plano de saúde AMS de excelência, previdência Petros e participação substancial nos lucros (PLR).',
    requisitos: [
      { titulo: 'Escolaridade', descricao: 'Diploma ou certificado de Nível Médio Técnico (Mecânica, Eletrônica, Automação, Logística, etc.) ou diploma de Nível Superior na área pretendida, emitido por instituição reconhecida pelo MEC.' },
      { titulo: 'Registro em Conselho Profissional', descricao: 'Registro ativo no respectivo conselho de classe (CFT, CREA, CRA, CRC, etc.) quando exigido pelo edital.' },
      { titulo: 'Quadro de Mar (quando aplicável)', descricao: 'Apresentação de Caderneta de Inscrição e Registro (CIR) emitida pela Capitania dos Portos para Oficiais de Náutica e Máquinas.' },
      { titulo: 'Idade', descricao: 'Mínimo de 18 anos completos no momento da convocação admissional.' },
      { titulo: 'Qualificação Biopsicossocial', descricao: 'Aprovação rigorosa nos exames clínicos e testes para trabalho em áreas industriais e/ou confinamento embarcado.' }
    ],
    etapas: [
      { numero: '01', titulo: 'Inscrição e Escolha do Polo de Trabalho', descricao: 'Seleção da ênfase técnica e do polo de atuação (terra ou mar).' },
      { numero: '02', titulo: 'Prova Objetiva (Conhecimentos Básicos e Específicos)', descricao: 'Língua Portuguesa, Língua Inglesa, Matemática e Conhecimentos Específicos aprofundados da especialidade técnica ou da engenharia/administração.' },
      { numero: '03', titulo: 'Prova de Títulos (para cargos de nível superior)', descricao: 'Pontuação complementar para pós-graduação e produção acadêmica/profissional.' },
      { numero: '04', titulo: 'Exames Médicos Admissionais', descricao: 'Avaliações toxicológicas, laboratoriais, ergonômicas e atestado de saúde ocupacional (ASO).' },
      { numero: '05', titulo: 'Admissão e Contratação em Regime CLT', descricao: 'Ingresso com estabilidade material assegurada pela jurisprudência das estatais com plano de cargos.' }
    ],
    diferenciais: [
      { titulo: 'Remunerações de Alto Padrão Petrobras', descricao: 'Salários e adicionais de periculosidade/embarque que superam amplamente o mercado privado.' },
      { titulo: 'Participação nos Lucros e Resultados (PLR)', descricao: 'Bonificações anuais expressivas atreladas às metas operacionais e financeiras da companhia.' },
      { titulo: 'Assistência Médica e Odontológica (AMS)', descricao: 'Um dos melhores planos de saúde corporativos do país com cobertura ampla.' },
      { titulo: 'Previdência Complementar Petros', descricao: 'Construção de aposentadoria com aporte paritário da empresa empregadora.' },
      { titulo: 'Folgas Prolongadas no Quadro de Mar', descricao: 'Regime de 28 dias de embarque por 28 dias de folga contínua (ou similar conforme escala).' }
    ],
    perfil: [
      'Rigor com segurança operacional e meio ambiente (SMS)',
      'Gosto por processos de engenharia, logística e controle',
      'Disciplina com normas técnicas e padrões internacionais',
      'Disposição para trabalho em instalações industriais ou embarcações'
    ],
    observacao: 'Informações e requisitos baseados nos editais oficiais mais recentes do Processo Seletivo Público (PSP) da Transpetro / Petrobras.',
    fonte: 'Petrobras Transporte S.A. (Transpetro) / Diário Oficial da União.'
  }
];
