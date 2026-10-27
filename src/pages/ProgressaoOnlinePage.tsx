import React, { useState, useEffect } from 'react';
import {
  Laptop,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Check,
  Play,
  Award,
  BookOpen,
  Users,
  FileCheck,
  AlertCircle,
  Radio,
  Calendar
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { WHATSAPP_NUMBER } from '../config/siteConfig';
import { MentoriasSection } from '../components/mentorias/MentoriasSection';
import { MentoriaDetalhesModal } from '../components/mentorias/MentoriaDetalhesModal';
import { MentoriaDetalhes, MENTORIAS_ONLINE } from '../data/mentoriasData';
import { TurmasOnline } from '../components/TurmasOnline/TurmasOnline';
import { TURMAS_ONLINE_DATA } from '../components/TurmasOnline/data';
import { RDStationForm } from '../components/rdstation/RDStationForm';

export type OnlineCategory = 'Todos' | 'Segurança Pública' | 'Carreiras Federais' | 'Área Administrativa' | 'Trânsito' | 'Bancárias & Estatais';

export interface OnlineCourseItem {
  id: string;
  name: string;
  fullName: string;
  category: OnlineCategory;
  level: string;
  statusBadge: string;
  salary: string;
  image: string;
  workload: string;
  description: string;
  includedItems: string[];
  subjects: string[];
  requirements: string;
  careerAdvancement?: string;
  targetSectionId?: string;
  buttonLabel?: string;
  isMentoria?: boolean;
}

const CONCURSOS_ONLINE: OnlineCourseItem[] = [
  {
    id: 'pmerj',
    name: 'PMERJ',
    fullName: 'Polícia Militar do Estado do Rio de Janeiro',
    category: 'Segurança Pública',
    level: 'Nível Médio',
    statusBadge: 'Matrículas Abertas',
    salary: 'R$ 5.233,88 (após o CFSd)',
    image: '/assets/capas-concursos/pmerj.jpg',
    workload: '160h de aulas gravadas + mentorias ao vivo',
    description: 'Preparação focada no conteúdo programático e exigências da banca examinadora para soldado da Polícia Militar do Estado do Rio de Janeiro.',
    includedItems: [
      'Aulas completas de Língua Portuguesa e Redação Discursiva',
      'Direito Constitucional, Penal e Direitos Humanos direcionados',
      'Banco com mais de 1.200 questões comentadas em vídeo',
      'Simulados nos padrões exatos das bancas organizadoras',
      'Material complementar em PDF para download ilimitado'
    ],
    subjects: ['Língua Portuguesa', 'Redação', 'Direito Constitucional', 'Direito Penal', 'Direitos Humanos', 'Legislação Aplicada à PMERJ'],
    requirements: 'Ensino Médio completo, idade entre 18 e 32 anos e CNH categoria B ou superior.',
    careerAdvancement: 'Progressão na carreira militar de Soldado até Subtenente, com opção de concurso interno para Oficialato.',
    targetSectionId: 'pmerj-online',
    buttonLabel: 'Ver Turmas'
  },
  {
    id: 'inss',
    name: 'INSS',
    fullName: 'Instituto Nacional do Seguro Social',
    category: 'Carreiras Federais',
    level: 'Nível Médio',
    statusBadge: 'Solicitação Protocolada',
    salary: 'R$ 5.905,79 a R$ 9.109,20',
    image: '/assets/capas-concursos/inss.jpg',
    workload: '150h de videoaulas + simulados Cebraspe',
    description: 'Estudo intensivo e verticalizado com ênfase total em Seguridade Social, Regime Geral e legislação previdenciária atualizada.',
    includedItems: [
      'Direito Previdenciário detalhado artigo por artigo',
      'Metodologia de resolução estilo Certo/Errado (Cebraspe)',
      'Resoluções normativas e reformas previdenciárias vigentes',
      'Apostilas esquematizadas em PDF para memorização rápida',
      'Tira-dúvidas direto com os professores do Progressão'
    ],
    subjects: ['Seguridade Social', 'Direito Constitucional', 'Direito Administrativo', 'Língua Portuguesa', 'Raciocínio Lógico', 'Informática'],
    requirements: 'Ensino Médio completo expedido por instituição reconhecida pelo MEC.',
    careerAdvancement: 'Plano de Carreira do Seguro Social com progressões por tempo de serviço e gratificações de desempenho.',
    targetSectionId: 'inss-online-tecnico',
    buttonLabel: 'Ver Turmas'
  },
  {
    id: 'prf-adm',
    name: 'PRF Agente Administrativo',
    fullName: 'Polícia Rodoviária Federal — Área Administrativa',
    category: 'Carreiras Federais',
    level: 'Nível Médio',
    statusBadge: 'Concurso em Análise',
    salary: 'R$ 5.173,28 a R$ 6.136,00',
    image: '/assets/capas-concursos/prf-agente.jpeg',
    workload: '140h de conteúdo programático completo',
    description: 'Preparação para o cargo de Agente Administrativo da PRF, desempenhando funções de apoio operacional e técnico sem exigência de porte operacional.',
    includedItems: [
      'Direito Administrativo aplicado às rotinas federais',
      'Noções de Arquivologia, Administração e Recursos Materiais',
      'Redação Oficial de acordo com o Manual da Presidência',
      'Simulados cronometrados com ranking entre alunos',
      'Mapas conceituais e quadros de revisão rápida em PDF'
    ],
    subjects: ['Língua Portuguesa', 'Redação Oficial', 'Noções de Direito Administrativo', 'Noções de Direito Constitucional', 'Noções de Informática', 'Ética no Serviço Público'],
    requirements: 'Certificado de conclusão de Ensino Médio regular.',
    careerAdvancement: 'Carreira federal com estabilidade (Regime Jurídico Único - Lei 8.112/90) e progressão por classes.',
    targetSectionId: 'prf-online-agente-administrativo',
    buttonLabel: 'Ver Turmas'
  },

  {
    id: 'pcerj',
    name: 'PCERJ',
    fullName: 'Polícia Civil do Estado do Rio de Janeiro',
    category: 'Segurança Pública',
    level: 'Nível Superior',
    statusBadge: 'Turma Regular',
    salary: 'R$ 7.033,00 a R$ 8.699,00',
    image: '/assets/capas-concursos/policia-civil.jpg',
    workload: '180h de videoaulas + estudos de caso',
    description: 'Curso preparatório estratégico para os cargos de Investigador e Inspetor de Polícia da PCERJ, com foco no perfil das bancas do RJ.',
    includedItems: [
      'Direito Penal e Processual Penal aprofundados com jurisprudência',
      'Leis Especiais (Drogas, Armas, Maria da Penha, Crimes Hediondos)',
      'Língua Portuguesa estilizada conforme as últimas provas da PCERJ',
      'Resolução de questões de concursos policiais anteriores',
      'Resumos executivos e tabelas de prazos em PDF'
    ],
    subjects: ['Língua Portuguesa', 'Direito Constitucional', 'Direito Administrativo', 'Direito Penal', 'Direito Processual Penal', 'Leis Especiais'],
    requirements: 'Nível Superior em qualquer graduação e CNH B.',
    careerAdvancement: 'Plano de cargos e salários com evolução de 3ª a 1ª Classe e Classe Comissária.',
    targetSectionId: 'pcerj-online',
    buttonLabel: 'Ver Turmas'
  },
  {
    id: 'banco-do-brasil',
    name: 'Banco do Brasil',
    fullName: 'Banco do Brasil — Escriturário (Agente Comercial)',
    category: 'Bancárias & Estatais',
    level: 'Nível Médio',
    statusBadge: 'Concurso Recorrente',
    salary: 'R$ 3.622,23 + R$ 1.900,00 VA/VR + PLR',
    image: '/assets/capas-concursos/bancobb.jpg',
    workload: '130h de conteúdo objetivo e dinâmico',
    description: 'Preparação ágil e completa para a carreira bancária do Banco do Brasil, focando em conhecimentos bancários, atendimento e matemática financeira.',
    includedItems: [
      'Conhecimentos Bancários e Sistema Financeiro Nacional (SFN)',
      'Técnicas de Vendas, Atendimento ao Cliente e Código de Defesa do Consumidor',
      'Matemática Financeira e Raciocínio Lógico simplificados',
      'Laboratório de Redação com temas bancários e econômicos',
      'Pacote de simulados padrão Cesgranrio'
    ],
    subjects: ['Conhecimentos Bancários', 'Língua Portuguesa', 'Matemática e Matemática Financeira', 'Atendimento e Vendas', 'Informática / Tecnologia', 'Língua Inglesa'],
    requirements: 'Certificado de conclusão de Nível Médio regular.',
    careerAdvancement: 'Plano de ascensão interno com bolsas de estudo, cargos de gerência e participação nos lucros e resultados (PLR semestral).',
    targetSectionId: 'bb-online-escriturario',
    buttonLabel: 'Ver Turmas'
  },
  {
    id: 'gm-sao-goncalo',
    name: 'GM São Gonçalo',
    fullName: 'Guarda Municipal de São Gonçalo',
    category: 'Segurança Pública',
    level: 'Nível Médio',
    statusBadge: 'Inscrições em Andamento',
    salary: 'R$ 3.172,96 (inicial) + adicionais',
    image: '/assets/capas-concursos/guarda.jpg',
    workload: '125h (50 encontros) ao vivo + PDFs',
    description: 'Preparação completa para o Concurso da Guarda Municipal de São Gonçalo: banca Instituto SELECON, 100 vagas imediatas + 500 CR, leis extravagantes e conhecimentos específicos.',
    includedItems: [
      'Curso online ao vivo transmitido pelo YouTube com gravações na plataforma',
      'Material em PDF de uso em sala incluso',
      'Disciplinas completas: Português, Direito, Legislação Extravagante, Específicos e Informática',
      'Resolução de questões comentadas padrão Instituto SELECON',
      'Simulados temáticos e suporte tira-dúvidas'
    ],
    subjects: ['Língua Portuguesa', 'Noções de Direito', 'Legislação Extravagante', 'Conhecimentos Específicos', 'Informática'],
    requirements: 'Ensino Médio completo e CNH categoria AB ou superior.',
    careerAdvancement: 'Carreira pública municipal com estabilidade estatutária, 100 vagas imediatas + 500 CR e adicionais de periculosidade.',
    targetSectionId: 'gm-sao-goncalo-online',
    buttonLabel: 'Ver Turmas'
  },
  {
    id: 'mentoria-portugues-publicos',
    name: 'Mentoria Português Concursos',
    fullName: 'Mentoria de Língua Portuguesa para Concursos Públicos',
    category: 'Área Administrativa',
    level: 'Nível Médio e Superior',
    statusBadge: 'Mentoria ao Vivo',
    salary: 'Acompanhamento Estratégico',
    image: '/assets/capas-concursos/guarda.jpg',
    workload: 'Encontros semanais ao vivo + PDFs',
    description: 'Mentoria especializada de Língua Portuguesa para concursos públicos: teoria aplicada, resolução guiada de questões de bancas e correção individual de redação.',
    includedItems: [
      'Aulas ao vivo semanais com interação direta e tira-dúvidas',
      'Envio antecipado de listas de exercícios e materiais teóricos em PDF',
      'Análise de perfil das principais bancas examinadoras (FGV, Cebraspe, FCC)',
      'Plantão de dúvidas e acompanhamento pedagógico individualizado',
      'Simulados de fixação com gabarito e resolução comentada'
    ],
    subjects: ['Gramática Aplicada', 'Interpretação e Compreensão de Texto', 'Redação Oficial e Discursiva', 'Resolução de Questões de Bancas'],
    requirements: 'Aberto a todos os candidatos que buscam excelência em Língua Portuguesa para concursos.',
    careerAdvancement: 'Domínio da disciplina de maior peso e caráter eliminatório em concursos públicos.',
    targetSectionId: 'mentorias-online',
    buttonLabel: 'Ver Mentorias',
    isMentoria: true
  },
  {
    id: 'mentoria-portugues-militares',
    name: 'Mentoria Português Militar',
    fullName: 'Mentoria de Língua Portuguesa para Carreiras Militares',
    category: 'Segurança Pública',
    level: 'Nível Médio e Superior',
    statusBadge: 'Mentoria ao Vivo',
    salary: 'Acompanhamento Especializado',
    image: '/assets/capas-militar/colegio-naval.jpeg',
    workload: 'Encontros semanais ao vivo + Simulados',
    description: 'Treinamento aprofundado nas exigências gramaticais e de interpretação das bancas militares (ESA, EEAr, EsPCEx, AFA, RM2 e EAGS).',
    includedItems: [
      'Aulas ao vivo focadas nas peculiaridades de cada banca militar',
      'Baterias de questões de provas anteriores comentadas em vídeo',
      'Técnicas de redação no padrão rigoroso das Forças Armadas',
      'Acompanhamento contínuo de rendimento e dúvidas',
      'Simulados temáticos com controle estrito de tempo de prova'
    ],
    subjects: ['Morfologia e Sintaxe Militar', 'Interpretação Textual de Bancas', 'Estilística e Figuras de Linguagem', 'Redação Padrão Militar'],
    requirements: 'Candidatos a concursos militares das Forças Armadas e Forças Auxiliares.',
    careerAdvancement: 'Diferencial decisivo para a classificação e obtenção das primeiras colocações.',
    targetSectionId: 'mentorias-online',
    buttonLabel: 'Ver Mentorias',
    isMentoria: true
  },
  {
    id: 'mentoria-eags-aeronautica',
    name: 'Mentoria EAGS',
    fullName: 'Mentoria EAGS — Exame de Admissão ao EAGS da Aeronáutica',
    category: 'Segurança Pública',
    level: 'Nível Médio / Técnico',
    statusBadge: 'Mentoria ao Vivo',
    salary: '115h de Aulas (46 encontros)',
    image: '/assets/capas-militar/concurso-aeronautica.png',
    workload: '46 encontros — 115 horas de aula ao vivo',
    description: 'Preparação específica de Língua Portuguesa direcionada ao Exame de Admissão ao EAGS da Aeronáutica. Aulas ao vivo, PDFs antecipados e simulados com correção.',
    includedItems: [
      'Aulas ao vivo com professores experientes e interação em tempo real',
      'Envio antecipado de PDFs com conteúdos e exercícios da banca provável',
      'Vídeos curtos semanais dedicados ao esclarecimento de dúvidas',
      'Simulados temáticos a cada 4 semanas com correção detalhada',
      'Gravações disponíveis na plataforma por até 24 horas'
    ],
    subjects: ['Língua Portuguesa para EAGS', 'Gramática e Interpretação de Texto', 'Resolução Comentada de Questões', 'Técnicas de Prova para Aeronáutica'],
    requirements: 'Candidatos com formação técnica compatível com as especialidades do EAGS.',
    careerAdvancement: 'Ingresso como Terceiro-Sargento da Força Aérea Brasileira (FAB) com estabilidade e carreira militar.',
    targetSectionId: 'mentoria-eags-aeronautica',
    buttonLabel: 'Ver Mentoria',
    isMentoria: true
  },
  {
    id: 'mentoria-rm2-marinha',
    name: 'Mentoria RM2',
    fullName: 'Mentoria RM2 — Serviço Militar Voluntário da Marinha',
    category: 'Segurança Pública',
    level: 'Nível Superior',
    statusBadge: 'Mentoria ao Vivo',
    salary: '87,5h de Aulas (35 encontros)',
    image: '/assets/capas-militar/RM2.jpg',
    workload: '35 encontros — 87,5 horas de aula ao vivo',
    description: 'Preparação focada em Língua Portuguesa para o processo seletivo do Serviço Militar Voluntário de Oficiais Temporários da Marinha do Brasil (RM2).',
    includedItems: [
      'Aulas ao vivo focadas no padrão de cobrança da Marinha do Brasil',
      'Envio antecipado de PDFs teóricos e listas de exercícios da banca',
      'Vídeos curtos com resolução de dúvidas pontuais',
      'Simulados regulares com modelo idêntico ao processo seletivo RM2',
      'Gravações disponibilizadas na plataforma em até 24h'
    ],
    subjects: ['Língua Portuguesa para RM2', 'Compreensão e Interpretação Textual', 'Sintaxe e Norma Padrão', 'Treinamento de Questões da Marinha'],
    requirements: 'Homens e mulheres com Ensino Superior completo em diversas áreas de graduação.',
    careerAdvancement: 'Oficial Temporário da Marinha do Brasil com remuneração inicial superior a R$ 9.000,00 e plano militar.',
    targetSectionId: 'mentoria-rm2-marinha',
    buttonLabel: 'Ver Mentoria',
    isMentoria: true
  }
];

export const ProgressaoOnlinePage: React.FC = () => {
  // Modal de detalhes da mentoria selecionada
  const [selectedMentoria, setSelectedMentoria] = useState<MentoriaDetalhes | null>(null);

  // Estado do formulário de inscrição / contato
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    curso: 'PMERJ',
    horario: 'Noite',
    experiencia: 'Iniciante'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Prevenir scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (selectedMentoria) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMentoria]);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMentoria(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      element.classList.add('ring-4', 'ring-[#FFBF00]', 'ring-offset-2', 'transition-all', 'duration-500');
      setTimeout(() => {
        element.classList.remove('ring-4', 'ring-[#FFBF00]', 'ring-offset-2');
      }, 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.whatsapp.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC]">
      <SEO
        title="Progressão Online - Cursos EAD para Concursos Públicos"
        description="Estude com a tradição do Progressão onde estiver. Cursos online para PMERJ, INSS, PRF, PCERJ, Banco do Brasil, GM Maricá, Transpetro e mais, com videoaulas, materiais em PDF e simulados."
        canonicalPath="/cursos/tecnicos"
      />

      <Breadcrumbs
        items={[
          { label: 'Cursos' },
          { label: 'Progressão Online' }
        ]}
      />

      {/* ============================================================ */}
      {/* 1. SEÇÃO HERO: ALTO IMPACTO COM EDTECH MOCKUP VISUAL */}
      {/* ============================================================ */}
      <section className="relative bg-[#00223B] text-white pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#015E96]/30">
        {/* Textura sutil e elegante de listras diagonais suaves e escuras oficial do Progressão */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.07) 0px, rgba(0, 0, 0, 0.07) 18px, transparent 18px, transparent 36px)'
          }}
        />

        {/* Gradientes luminosos de ambientação */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#004B7C]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Lado Esquerdo: Textos, Proposta de Valor e Ações */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Título Principal H1 */}
              <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5">
                Conquiste sua aprovação estudando onde você estiver.
              </h1>

              {/* Subtítulo enfático */}
              <p className="text-base sm:text-xl font-medium text-[#FFBF00] mb-4 leading-snug">
                A mesma tradição de aprovações do presencial, com a flexibilidade da plataforma digital.
              </p>

              {/* Texto complementar de apoio */}
              <p className="text-sm sm:text-base text-[#E1E5E8]/90 max-w-2xl leading-relaxed mb-8">
                Tenha acesso a videoaulas direcionadas pelos editais mais recentes, apostilas completas em PDF, simulados com padrão real de bancas e suporte contínuo para transformar sua rotina em resultados concretos.
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <button
                  onClick={() => scrollToSection('catalogo-online')}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0289C6] hover:bg-[#0275a8] text-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group text-center cursor-pointer"
                >
                  <span>Explorar Cursos Online</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com a secretaria sobre os cursos do Progressão Online.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white hover:text-[#00223B] text-white border border-white/20 px-7 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wide backdrop-blur-md transition-all duration-200 active:scale-95 text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Lado Direito: EdTech Visual Mockup Moderno */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Janela de Aplicativo Digital */}
                <div className="bg-[#001D33] rounded-3xl p-4 sm:p-5 shadow-2xl border border-[#0289C6]/30 text-white relative overflow-hidden group">

                  {/* Barra Superior estilo Navegador / App */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                      <span className="ml-2 text-white/50 font-mono text-[10px] hidden sm:inline">progressao.online/sala-virtual</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#25D366] font-semibold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping inline-block" />
                      <span>Plataforma Ativa</span>
                    </div>
                  </div>

                  {/* Player de Vídeo em Destaque */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#0A131F] mb-4 border border-white/10">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                      alt="Estudante na plataforma online Progressão"
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D33] via-transparent to-black/30" />

                    {/* Botão de Play Central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#0289C6] text-white flex items-center justify-center shadow-xl shadow-[#0289C6]/40 transform group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-6 h-6 ml-1 fill-white" />
                      </div>
                    </div>

                    {/* Barra de Progresso do Vídeo */}
                    <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md rounded-lg p-2.5 flex flex-col gap-1 border border-white/10">
                      <div className="flex items-center justify-between text-[11px] text-white/90">
                        <span className="font-semibold truncate">Módulo 03: Direito Constitucional • Direitos Fundamentais</span>
                        <span className="text-[#FFBF00] font-mono shrink-0 ml-2">24:18 / 45:00</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-[55%] h-full bg-[#0289C6] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Informações da Trilha do Aluno */}
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0289C6]/20 text-[#0289C6] flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/60 uppercase font-semibold">Simulado Geral</div>
                        <div className="text-white font-bold text-sm">840 pts <span className="text-[#25D366] text-xs font-normal">Top 5%</span></div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#FFBF00]/20 text-[#FFBF00] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/60 uppercase font-semibold">Trilha Cumprida</div>
                        <div className="text-white font-bold text-sm">88% <span className="text-white/60 text-xs font-normal">concluído</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. BARRA DE DIFERENCIAIS DA METODOLOGIA ONLINE PROGRESSÃO */}
      {/* ============================================================ */}
      <section className="bg-white border-b border-[#E1E5E8] py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E1E5E8]/80 hover:border-[#0289C6]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00223B] text-[#0289C6] flex items-center justify-center shrink-0 shadow-xs">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#00223B] text-sm mb-1">Flexibilidade Total</h4>
                <p className="text-xs text-[#0A131F]/70 leading-relaxed">
                  Estude no seu ritmo, assista as aulas onde quiser e repita quantas vezes precisar no celular ou computador.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E1E5E8]/80 hover:border-[#0289C6]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00223B] text-[#FFBF00] flex items-center justify-center shrink-0 shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#00223B] text-sm mb-1">Professores Especialistas</h4>
                <p className="text-xs text-[#0A131F]/70 leading-relaxed">
                  A mesma equipe de ponta do presencial, com décadas de experiência em provas e bancas de concurso.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E1E5E8]/80 hover:border-[#0289C6]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00223B] text-[#0289C6] flex items-center justify-center shrink-0 shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#00223B] text-sm mb-1">Material em PDF Completo</h4>
                <p className="text-xs text-[#0A131F]/70 leading-relaxed">
                  Apostilas teóricas esquematizadas, resumos de fixação e listas de questões separadas por assunto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E1E5E8]/80 hover:border-[#0289C6]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00223B] text-[#FFBF00] flex items-center justify-center shrink-0 shadow-xs">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#00223B] text-sm mb-1">Simulados com Padrão Real</h4>
                <p className="text-xs text-[#0A131F]/70 leading-relaxed">
                  Treino com tempo cronometrado e questões inéditas no formato das principais bancas examinadoras.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SEÇÃO DE CONCURSOS & CATÁLOGO DE CURSOS ONLINE */}
      {/* ============================================================ */}
      <section id="catalogo-online" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">

        {/* Cabeçalho da Seção com Título e Subtítulo */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0289C6]/10 text-[#0289C6] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catálogo Oficial de Turmas Online</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00223B] tracking-tight mb-4">
            Escolha seu concurso e comece hoje
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#0A131F]/75 max-w-2xl leading-relaxed">
            Conheça as oportunidades disponíveis no Progressão Online com todas as informações de requisitos e disciplinas.
          </p>
        </div>
        {/* Destaque Oficial: Início das Turmas Online e Mentorias */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#00223B] via-[#00385F] to-[#00223B] text-white border-2 border-[#FFBF00]/50 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-[#FFBF00] text-[#00223B] flex items-center justify-center shrink-0 shadow-md">
              <Calendar className="w-5 h-5 text-[#00223B]" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold text-[#FFBF00] uppercase tracking-wider block">
                Início das Aulas Confirmado
              </span>
              <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                As turmas online e as mentorias iniciam no dia <span className="text-[#FFBF00] font-black underline underline-offset-4 decoration-[#FFBF00]">09/11</span>.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection('formulario-online')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm px-6 py-3 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer shrink-0"
          >
            <span>Garantir Minha Vaga</span>
            <ArrowRight className="w-4 h-4 text-[#00223B]" />
          </button>
        </div>

        {/* Grade de Cards Responsiva */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CONCURSOS_ONLINE.map((course) => (
            <div
              key={course.id}
              onClick={() => {
                if (course.targetSectionId) {
                  scrollToSection(course.targetSectionId);
                } else {
                  scrollToSection(course.isMentoria ? 'mentorias-online' : 'turmas-online');
                }
              }}
              role="button"
              tabIndex={0}
              className="bg-white rounded-3xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col group hover:-translate-y-1 cursor-pointer"
            >
              {/* Imagem do Card */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Nome e subtítulo sobre a imagem */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <span className="text-[11px] font-bold text-[#FFBF00] uppercase tracking-wider block mb-0.5">
                    {course.statusBadge}
                  </span>
                  <h3 className="font-serif-heading text-2xl font-bold text-white leading-tight">
                    {course.name}
                  </h3>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                <div>
                  {/* Nome completo do órgão */}
                  <p className="text-xs font-semibold text-[#0289C6] mb-2 leading-snug">
                    {course.fullName}
                  </p>

                  {/* Descrição resumida */}
                  <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Botão de Ação do Card */}
                <div className="pt-4 border-t border-[#E1E5E8]/80 mt-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (course.targetSectionId) {
                        scrollToSection(course.targetSectionId);
                      } else {
                        scrollToSection(course.isMentoria ? 'mentorias-online' : 'turmas-online');
                      }
                    }}
                    aria-label={`${course.buttonLabel || 'Ver Turmas'} do curso ${course.name}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <span>{course.buttonLabel || 'Ver Turmas'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFBF00]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================ */}
      {/* 3.1 SEÇÃO: TURMAS ONLINE (AULAS AO VIVO) */}
      {/* ============================================================ */}
      <TurmasOnline onSelectTurma={(turmaNome) => setFormData(prev => ({ ...prev, curso: turmaNome }))} />

      {/* ============================================================ */}
      {/* 3.2 SEÇÃO: MENTORIAS PROGRESSÃO ONLINE */}
      {/* ============================================================ */}
      <MentoriasSection onSelectMentoria={setSelectedMentoria} />

      {/* ============================================================ */}
      {/* 4. SEÇÃO: POSICIONAMENTO DAS AULAS ONLINE */}
      {/* ============================================================ */}
      <section className="bg-[#001D33] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#015E96]/30">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFBF00] mb-2 block">
              Posicionamento das aulas online
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black mb-3 text-white uppercase tracking-tight">
              Posicionamento das aulas online
            </h2>
            <p className="text-sm sm:text-base text-[#E1E5E8]/80 leading-relaxed">
              Informação interna de apoio à conversa com o aluno.
            </p>
          </div>

          {/* Cards de Contexto de Mercado e Limitações */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

            {/* Card 1: Mercado de aulas online */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#0289C6]/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#004B7C]/40 border border-[#0289C6]/30 text-[#0289C6] flex items-center justify-center mb-4">
                  <Laptop className="w-5 h-5 text-[#0289C6]" />
                </div>
                <h3 className="font-serif-heading font-black text-lg sm:text-xl text-white mb-4 uppercase tracking-wide">
                  Mercado de aulas online
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#E1E5E8]/85 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0289C6] font-bold text-base leading-none mt-0.5">•</span>
                    <span>Aulas gravadas são dominadas por gigantes: áudio e vídeo de alta qualidade, professores famosos, preço muito baixo e portfólio enorme, com assinaturas anuais de vários cursos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0289C6] font-bold text-base leading-none mt-0.5">•</span>
                    <span>Existem também aulas ao vivo de professores individuais, que geram mais empatia pela proximidade com os alunos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Limites dos gigantes */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[#FFBF00] flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5 text-[#FFBF00]" />
                </div>
                <h3 className="font-serif-heading font-black text-lg sm:text-xl text-white mb-4 uppercase tracking-wide">
                  Limites dos gigantes
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#E1E5E8]/85 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFBF00] font-bold text-base leading-none mt-0.5">•</span>
                    <span>Montam aulas gravadas para concursos diferentes daquele que o aluno quer</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFBF00] font-bold text-base leading-none mt-0.5">•</span>
                    <span>Falta empatia e proximidade: o professor parece distante</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFBF00] font-bold text-base leading-none mt-0.5">•</span>
                    <span>Não consideram a banca, se o aluno consegue resolver as questões do último concurso, nem tiram dúvidas na hora</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Limites dos professores individuais ao vivo */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[#FFBF00] flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5 text-[#FFBF00]" />
                </div>
                <h3 className="font-serif-heading font-black text-lg sm:text-xl text-white mb-4 uppercase tracking-wide">
                  Limites dos professores individuais ao vivo
                </h3>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#E1E5E8]/85 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFBF00] font-bold text-base leading-none mt-0.5">•</span>
                    <span>A qualidade de áudio e vídeo costuma ser baixa</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#FFBF00] font-bold text-base leading-none mt-0.5">•</span>
                    <span>O aluno precisa procurar outros professores para o concurso que deseja, o que sairia 10 vezes mais caro</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bloco de Destaque: Nossos diferenciais */}
          <div className="bg-gradient-to-br from-[#002B49] to-[#001D33] border-2 border-[#FFBF00]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 16px, transparent 16px, transparent 32px)'
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-6 border-b border-white/15">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFBF00] block">
                    A proposta do Curso Progressão
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    Nossos diferenciais
                  </h3>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0289C6]/20 border border-[#0289C6]/40 text-[#0289C6] text-xs font-bold self-start sm:self-center">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-[#0289C6]" />
                  <span>Estúdio Próprio & Aulas Ao Vivo</span>
                </div>
              </div>

              {/* Grade de 6 diferenciais */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    Aulas ao vivo com os melhores professores, com larga experiência e muitas aprovações
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    Transmissão do estúdio do curso, com equipamento de qualidade, imagem e áudio nítidos
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    Interação com o professor, reproduzindo ao máximo a sala de aula sem perder a qualidade do estúdio
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    Todo dia tem conteúdo: aula, vídeo ou PDF
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    O aluno sabe o assunto de antemão, faz os exercícios antes e tira as dúvidas na aula
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/[0.08] transition-colors flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    Vídeos tira-dúvidas semanais, transformando o celular do aluno em fonte de informação do concurso
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      <div className="bg-white p-8 flex justify-center" id='formulario-online'>
        <div className="w-full max-w-[600px]">
          {/* RD STATION — OFICIAL — PROGRESSÃO ONLINE */}
          <RDStationForm
            formId="cx-org_site_progressao_online-0f4278541570173de3d3"
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* MODAL / PÁGINA SOBREPOSTA DE DETALHES DA MENTORIA */}
      {/* ============================================================ */}
      {selectedMentoria && (
        <MentoriaDetalhesModal
          mentoria={selectedMentoria}
          onClose={() => setSelectedMentoria(null)}
        />
      )}

    </div>
  );
};
