import React, { useState, useEffect } from 'react';
import {
  Laptop,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Check,
  X,
  Play,
  Award,
  BookOpen,
  Users,
  FileCheck
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { WHATSAPP_NUMBER } from '../config/siteConfig';
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
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
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
    careerAdvancement: 'Progressão na carreira militar de Soldado até Subtenente, com opção de concurso interno para Oficialato.'
  },
  {
    id: 'inss',
    name: 'INSS',
    fullName: 'Instituto Nacional do Seguro Social',
    category: 'Carreiras Federais',
    level: 'Nível Médio',
    statusBadge: 'Solicitação Protocolada',
    salary: 'R$ 5.905,79 a R$ 9.109,20',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
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
    careerAdvancement: 'Plano de Carreira do Seguro Social com progressões por tempo de serviço e gratificações de desempenho.'
  },
  {
    id: 'prf-adm',
    name: 'PRF Administrativo',
    fullName: 'Polícia Rodoviária Federal — Área Administrativa',
    category: 'Carreiras Federais',
    level: 'Nível Médio',
    statusBadge: 'Concurso em Análise',
    salary: 'R$ 5.173,28 a R$ 6.136,00',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
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
    careerAdvancement: 'Carreira federal com estabilidade (Regime Jurídico Único - Lei 8.112/90) e progressão por classes.'
  },
  {
    id: 'prf-agente',
    name: 'PRF Agente Federal',
    fullName: 'Polícia Rodoviária Federal — Policial Rodoviário Federal',
    category: 'Segurança Pública',
    level: 'Nível Superior',
    statusBadge: 'Turma de Elite',
    salary: 'R$ 10.790,87 inicial (topo > R$ 18.000)',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=800&q=80',
    workload: '220h de curso completo + módulos avançados',
    description: 'Preparação aprofundada para a carreira policial rodoviária federal, dominando legislação de trânsito, direito público e física aplicada.',
    includedItems: [
      'Legislação Especial de Trânsito esmiuçada (CTB e Resoluções CONTRAN)',
      'Direito Penal, Processual Penal e Legislação Extravagante',
      'Módulo de Física e Cinemática voltado para a prova da PRF',
      'Orientação teórica e planejamento para o TAF (Teste de Aptidão Física)',
      'Mais de 2.000 questões comentadas em vídeo'
    ],
    subjects: ['Legislação de Trânsito', 'Língua Portuguesa', 'Raciocínio Lógico-Matemático', 'Física', 'Direito Constitucional', 'Direito Penal', 'Direitos Humanos'],
    requirements: 'Diploma de Nível Superior em qualquer área de formação e CNH categoria B ou superior.',
    careerAdvancement: 'Carreira estruturada em Terceira Classe, Segunda Classe, Primeira Classe e Classe Especial.'
  },
  {
    id: 'pcerj',
    name: 'PCERJ',
    fullName: 'Polícia Civil do Estado do Rio de Janeiro',
    category: 'Segurança Pública',
    level: 'Nível Superior',
    statusBadge: 'Turma Regular',
    salary: 'R$ 7.033,00 a R$ 8.699,00',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
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
    careerAdvancement: 'Plano de cargos e salários com evolução de 3ª a 1ª Classe e Classe Comissária.'
  },
  {
    id: 'banco-do-brasil',
    name: 'Banco do Brasil',
    fullName: 'Banco do Brasil — Escriturário (Agente Comercial)',
    category: 'Bancárias & Estatais',
    level: 'Nível Médio',
    statusBadge: 'Concurso Recorrente',
    salary: 'R$ 3.622,23 + R$ 1.900,00 VA/VR + PLR',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
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
    careerAdvancement: 'Plano de ascensão interno com bolsas de estudo, cargos de gerência e participação nos lucros e resultados (PLR semestral).'
  },
  {
    id: 'detran-adm',
    name: 'DETRAN — Técnico Administrativo',
    fullName: 'Departamento de Trânsito do Estado do Rio de Janeiro',
    category: 'Área Administrativa',
    level: 'Nível Médio',
    statusBadge: 'Comissão Formada',
    salary: 'R$ 3.768,00 a R$ 4.500,00 + gratificações',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    workload: '120h de aulas focadas',
    description: 'Treinamento completo para atuação nas rotinas de protocolo, suporte administrativo e atendimento ao cidadão no DETRAN-RJ.',
    includedItems: [
      'Regulamentos internos e noções de Direito Administrativo estadual',
      'Redação Oficial e Técnicas de Comunicação em serviço público',
      'Módulo completo de Informática com questões de bancas estaduais',
      'Banco de questões revisadas e atualizadas',
      'Apostila digital exclusiva Progressão em PDF'
    ],
    subjects: ['Língua Portuguesa', 'Redação Oficial', 'Noções de Direito Constitucional', 'Noções de Direito Administrativo', 'Informática', 'Legislação do DETRAN-RJ'],
    requirements: 'Nível Médio completo expedido por órgão oficial.',
    careerAdvancement: 'Estabilidade estatutária do Estado do Rio de Janeiro e gratificações funcionais.'
  },
  {
    id: 'detran-transito',
    name: 'DETRAN — Técnico de Trânsito',
    fullName: 'Departamento de Trânsito do Estado do Rio de Janeiro',
    category: 'Trânsito',
    level: 'Nível Médio',
    statusBadge: 'Comissão Formada',
    salary: 'R$ 3.768,00 a R$ 4.800,00 + auxílios',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    workload: '130h de conteúdo especializado',
    description: 'Curso intensivo centrado nas normas do Código de Trânsito Brasileiro e resoluções do CONTRAN para atuação em fiscalização e exames.',
    includedItems: [
      'Código de Trânsito Brasileiro (CTB) analisado artigo por artigo',
      'Infrações de trânsito, penalidades e medidas administrativas',
      'Estudo prático de casos reais de fiscalização e operações de trânsito',
      'Simulados temáticos por módulo de legislação',
      'Canal exclusivo para tirar dúvidas pedagógicas'
    ],
    subjects: ['Código de Trânsito Brasileiro', 'Resoluções do CONTRAN', 'Língua Portuguesa', 'Noções de Direito Administrativo', 'Informática'],
    requirements: 'Ensino Médio completo e Carteira Nacional de Habilitação (categoria B).',
    careerAdvancement: 'Progressão na carreira técnica do DETRAN-RJ com acréscimo de adicionais de atividade.'
  },
  {
    id: 'detran-id',
    name: 'DETRAN — Identificação Civil',
    fullName: 'Departamento de Trânsito do Estado do Rio de Janeiro',
    category: 'Área Administrativa',
    level: 'Nível Médio',
    statusBadge: 'Comissão Formada',
    salary: 'R$ 3.768,00 + benefícios',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    workload: '110h de videoaulas direcionadas',
    description: 'Formação especializada nos procedimentos de coleta datiloscópica, emissão de documentos de identidade e atendimento ao público.',
    includedItems: [
      'Legislação de Registros Públicos e Identificação Civil no RJ',
      'Atendimento humanizado e ética no serviço público fluminense',
      'Informática aplicada aos sistemas de identificação',
      'Baterias de questões comentadas pelos professores',
      'Material complementar de apoio teórico em PDF'
    ],
    subjects: ['Língua Portuguesa', 'Noções de Identificação Civil', 'Direito Constitucional', 'Direito Administrativo', 'Informática'],
    requirements: 'Ensino Médio completo.',
    careerAdvancement: 'Quadro efetivo estatutário do DETRAN-RJ com progressão de padrões remuneratórios.'
  },
  {
    id: 'gm-marica',
    name: 'GM Maricá',
    fullName: 'Guarda Municipal de Maricá',
    category: 'Segurança Pública',
    level: 'Nível Médio',
    statusBadge: 'Edital Autorizado',
    salary: 'R$ 4.000,00 a R$ 5.500,00 (c/ gratificações)',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    workload: '120h de videoaulas + simulados',
    description: 'Preparação para o concurso municipal de Maricá, contemplando o Estatuto das Guardas Municipais e legislação local.',
    includedItems: [
      'Estatuto Geral das Guardas Municipais (Lei Federal 13.022)',
      'Legislação Municipal de Maricá e Lei Orgânica',
      'Noções de Direito Constitucional e Penal para guardas civis',
      'Dicas estratégicas para o TAF (Teste de Aptidão Física)',
      'Simulados inéditos com gabarito explicado'
    ],
    subjects: ['Língua Portuguesa', 'Legislação Municipal de Maricá', 'Lei 13.022/2014', 'Direito Constitucional', 'Direito Penal', 'Informática'],
    requirements: 'Ensino Médio completo e CNH categoria A e B.',
    careerAdvancement: 'Regime estatutário municipal com plano de cargos, gratificação de risco de trânsito/policiamento e estabilidade.'
  },
  {
    id: 'transpetro',
    name: 'Transpetro',
    fullName: 'Petrobras Transporte S.A.',
    category: 'Bancárias & Estatais',
    level: 'Nível Médio / Técnico',
    statusBadge: 'Processo Seletivo Recorrente',
    salary: 'R$ 5.540,25 a R$ 12.739,00 + benefícios Petrobras',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    workload: '140h de conteúdo especializado',
    description: 'Curso focado nas provas da Cesgranrio para a Transpetro, subsidiária de logística e transporte de combustíveis da Petrobras.',
    includedItems: [
      'Língua Portuguesa e Inglês técnico para o perfil Cesgranrio',
      'Matemática e Raciocínio Lógico aplicados a concursos de estatais',
      'Módulos específicos para as principais ênfases de nível médio/técnico',
      'Treinamento intensivo de questões de provas anteriores',
      'Simulado geral com análise de desempenho e pontos de melhoria'
    ],
    subjects: ['Língua Portuguesa', 'Língua Inglesa', 'Matemática / Raciocínio Lógico', 'Conhecimentos Específicos da Área', 'Noções de SMS (Segurança, Meio Ambiente e Saúde)'],
    requirements: 'Ensino Médio regular ou Técnico correspondente à ênfase escolhida.',
    careerAdvancement: 'Contratação CLT com previdência complementar (Petros), plano de saúde AMS Petrobras e participação nos lucros (PLR).'
  }
];

export const ProgressaoOnlinePage: React.FC = () => {
  // Modal com mini-página do curso selecionado
  const [activeCourse, setActiveCourse] = useState<OnlineCourseItem | null>(null);

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
    if (activeCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeCourse]);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCourse(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppCourseUrl = (courseName: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no curso online para o concurso ${courseName} do Progressão Online. Gostaria de saber valores, cronograma e formas de matrícula.`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
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
        description="Estude com a tradição do Progressão onde estiver. Cursos online para PMERJ, INSS, PRF, PCERJ, Banco do Brasil, DETRAN e mais, com videoaulas, materiais em PDF e simulados."
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
            Conheça as oportunidades disponíveis no Progressão Online com todas as informações de requisitos, remuneração e disciplinas.
          </p>
        </div>

        {/* Grade de Cards Responsiva */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CONCURSOS_ONLINE.map((course) => (
            <div
              key={course.id}
              onClick={() => setActiveCourse(course)}
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
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Nome completo do órgão */}
                  <p className="text-xs font-semibold text-[#0289C6] mb-2 leading-snug">
                    {course.fullName}
                  </p>

                  {/* Descrição resumida */}
                  <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed mb-5 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Destaque de Remuneração */}
                  <div className="bg-[#F8FAFC] border border-[#E1E5E8] rounded-xl p-3">
                    <span className="text-[11px] font-semibold text-[#0A131F]/60 block mb-0.5">
                      Remuneração inicial prevista
                    </span>
                    <span className="text-base font-bold text-[#00223B]">
                      {course.salary}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ============================================================ */}
      {/* 4. SEÇÃO: COMO FUNCIONA O ESTUDO NO PROGRESSÃO ONLINE */}
      {/* ============================================================ */}
      <section className="bg-[#001D33] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#015E96]/30">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFBF00] mb-2 block">
              Passo a Passo da Aprovação
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold mb-4">
              Como funciona sua rotina no Progressão Online
            </h2>
            <p className="text-sm sm:text-base text-[#E1E5E8]/80 leading-relaxed">
              Uma metodologia testada e aprovada há mais de 30 anos, agora adaptada para acelerar seu aprendizado a distância com máxima eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              <span className="text-3xl font-black text-[#FFBF00] mb-3 block">01</span>
              <h3 className="font-bold text-lg mb-2 text-white">Diagnóstico e Planejamento</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/70 leading-relaxed">
                Você recebe a trilha de conteúdos direcionada pelo edital, sabendo exatamente o que estudar em cada semana.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              <span className="text-3xl font-black text-[#0289C6] mb-3 block">02</span>
              <h3 className="font-bold text-lg mb-2 text-white">Aulas Diretas ao Ponto</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/70 leading-relaxed">
                Aulas gravadas com os professores titulares do Progressão, focando no que realmente cai nas bancas examinadoras.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              <span className="text-3xl font-black text-[#FFBF00] mb-3 block">03</span>
              <h3 className="font-bold text-lg mb-2 text-white">Treino Prático com Questões</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/70 leading-relaxed">
                Fixação imediata através de listas de exercícios gabaritadas e comentadas em vídeo pelos especialistas.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
              <span className="text-3xl font-black text-[#0289C6] mb-3 block">04</span>
              <h3 className="font-bold text-lg mb-2 text-white">Simulados & Ajuste Fino</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/70 leading-relaxed">
                Simulações periódicas nos moldes da prova para gerenciar o tempo, calibrar o emocional e medir sua evolução.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FORMULÁRIO RD STATION*/}
      {/* ============================================================ */}
      <div className="bg-white p-8 flex justify-center">
        <div className="w-full max-w-[600px]">
          {/* RD STATION — PROVISÓRIO */}
          <RDStationForm
            formId="caxias_lp_geral-6b17fb580118e7e46ef8"
          />
        </div>
      </div>


      {/* ============================================================ */}
      {/* 6. MODAL INTERATIVO: MINI-PÁGINA DO CURSO SELECIONADO */}
      {/* ============================================================ */}
      {activeCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveCourse(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-white/20 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho do Modal com Foto e Informações Principais */}
            <div className="relative h-48 sm:h-56 shrink-0 bg-[#001D33] overflow-hidden">
              <img
                src={activeCourse.image}
                alt={activeCourse.name}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D33] via-[#001D33]/60 to-transparent" />

              {/* Botão de Fechar */}
              <button
                onClick={() => setActiveCourse(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-colors z-20 cursor-pointer"
                title="Fechar (ESC)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Conteúdo sobreposto na imagem */}
              <div className="absolute bottom-4 left-6 right-6 z-10 text-white">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFBF00] text-[#00223B]">
                    {activeCourse.level}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {activeCourse.category}
                  </span>
                  <span className="text-xs text-[#25D366] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] inline-block" />
                    {activeCourse.statusBadge}
                  </span>
                </div>
                <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold leading-tight">
                  {activeCourse.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#E1E5E8] line-clamp-1">
                  {activeCourse.fullName}
                </p>
              </div>
            </div>

            {/* Conteúdo com Scroll Interno */}
            <div className="p-6 overflow-y-auto space-y-6 text-[#0A131F]">

              {/* Bloco de Visão Geral */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0289C6] mb-2">
                  Sobre a Carreira e o Concurso
                </h4>
                <p className="text-sm text-[#0A131F]/80 leading-relaxed">
                  {activeCourse.description}
                </p>
              </div>

              {/* Grid de Requisitos e Remuneração */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F8FAFC] border border-[#E1E5E8] rounded-2xl p-4">
                  <span className="text-xs font-semibold text-[#0A131F]/60 block mb-1">
                    Remuneração Inicial
                  </span>
                  <span className="text-lg font-bold text-[#00223B] block mb-2">
                    {activeCourse.salary}
                  </span>
                  {activeCourse.careerAdvancement && (
                    <p className="text-xs text-[#0A131F]/70 leading-relaxed">
                      <strong>Evolução:</strong> {activeCourse.careerAdvancement}
                    </p>
                  )}
                </div>

                <div className="bg-[#F8FAFC] border border-[#E1E5E8] rounded-2xl p-4">
                  <span className="text-xs font-semibold text-[#0A131F]/60 block mb-1">
                    Requisitos Exigidos
                  </span>
                  <p className="text-xs text-[#0A131F]/80 leading-relaxed mb-2 font-medium">
                    {activeCourse.requirements}
                  </p>
                  <span className="text-[11px] text-[#0A131F]/60">
                    <strong>Carga horária:</strong> {activeCourse.workload}
                  </span>
                </div>
              </div>

              {/* O que está incluso no curso */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00223B] mb-3">
                  O que está incluso na sua matrícula online
                </h4>
                <div className="space-y-2.5">
                  {activeCourse.includedItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disciplinas Contempladas */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00223B] mb-2.5">
                  Disciplinas da Grade Curricular
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCourse.subjects.map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#00223B]/5 border border-[#00223B]/10 text-xs font-medium text-[#00223B]"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Rodapé do Modal com Botões de Ação */}
            <div className="p-4 sm:p-5 bg-[#F8FAFC] border-t border-[#E1E5E8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
              <div className="text-xs text-[#0A131F]/70 hidden sm:block">
                Dúvidas sobre o edital? Fale com a secretaria agora mesmo.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveCourse(null)}
                  className="px-5 py-2.5 rounded-xl border border-[#E1E5E8] text-xs font-bold text-[#0A131F]/70 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Fechar
                </button>

                <a
                  href={getWhatsAppCourseUrl(activeCourse.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Garantir Vaga no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
