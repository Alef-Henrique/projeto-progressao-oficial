import React, { useState, useEffect, useRef } from 'react';
import {
  Award,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  Target,
  Shield,
  X,
  FileText,
  DollarSign,
  Users,
  GraduationCap,
  Building2,
  MessageCircle,
  Check,
  Layers,
  Scale,
  Calendar,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  MapPin,
  FileCheck,
  Compass,
  BookOpen,
  Sparkles,
  Gift
} from 'lucide-react';
import { useRouter } from '../components/routing/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { WHATSAPP_NUMBER } from '../config/siteConfig';
import { CONCURSOS_PUBLICOS_DATA, ConcursoPublico, ConcursoCategory } from '../data/concursosData';
import { TurmasConcursosSection } from '../components/turmas/TurmasConcursosSection';
import { TurmasPro } from '../components/TurmasPro/TurmasPro';
import { CombosProdutos } from '../components/combosProdutos/CombosProdutos';
import { TurmaConcursoCard } from '../components/turmas/TurmaConcursoCard';
import { TurmaConcursoDetalhesModal } from '../components/turmas/TurmaConcursoDetalhesModal';
import { TurmaConcurso, getTurmaConcursoPorId, getTurmasConcursoPorId, TURMAS_CONCURSOS } from '../data/turmasconcursos';
import { RDStationForm } from '../components/rdstation/RDStationForm';

export const ConcursosPage: React.FC = () => {

  const { currentPath, navigate } = useRouter();
  // Estado para categoria selecionada no filtro
  const [selectedCategory, setSelectedCategory] = useState<ConcursoCategory>('Todos');

  // Estado para o concurso atualmente aberto no modal (mini página)
  const [activeConcurso, setActiveConcurso] = useState<ConcursoPublico | null>(null);

  // Abre automaticamente o modal quando a URL é /concursos/pmerj
  useEffect(() => {
    const path = currentPath.split('?')[0].replace(/\/$/, '');
    const prefix = '/concursos/';

    if (!path.startsWith(prefix)) {
      setActiveConcurso(null);
      return;
    }

    const concursoId = path.slice(prefix.length);

    const concurso = CONCURSOS_PUBLICOS_DATA.find(
      (item) => item.id === concursoId
    );

    setActiveConcurso(concurso ?? null);
  }, [currentPath]);

  // Estado para a turma selecionada para ver detalhes
  const [selectedTurma, setSelectedTurma] = useState<TurmaConcurso | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Helper para exibir apenas uma tag span no card conforme solicitado:
  // Em maiúsculas: "AGUARDANDO NOVO EDITAL", "PROVA DIA {DATA}", "INSCRIÇÕES ABERTAS"
  const getCardTag = (concurso: ConcursoPublico) => {
    const rawText = concurso.tagCard || (concurso.dataProva ? `prova dia ${concurso.dataProva}` : 'aguardando novo edital');
    const lower = rawText.toLowerCase();

    let styleClass = 'bg-[#0289C6] text-white border-[#38B3E6] font-bold uppercase tracking-wider';
    if (lower.includes('prova dia') || lower.includes('prova')) {
      styleClass = 'bg-[#FFBF00] text-[#00223B] border-amber-400 font-extrabold uppercase tracking-wider';
    } else if (lower.includes('inscriç') || lower.includes('inscricoes')) {
      styleClass = 'bg-emerald-600 text-white border-emerald-500 font-extrabold uppercase tracking-wider';
    }

    return {
      text: rawText.toUpperCase(),
      styleClass
    };
  };

  // Rola para o topo do modal ao abrir
  useEffect(() => {
    if (activeConcurso && modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [activeConcurso]);

  // Estado do formulário de inscrição
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    concurso: 'PMERJ',
    turno: 'Noite',
    modalidade: 'Presencial'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.whatsapp.trim()) return;
    setFormSubmitted(true);
  };

  // Lista de categorias para a barra de filtros
  const categories: ConcursoCategory[] = [
    'Todos',
    'Segurança Pública',
    'Administrativo',
    'Área Federal',
    'Estatais',
    'Trânsito'
  ];

  // Filtra os concursos conforme categoria selecionada
  const filteredConcursos = selectedCategory === 'Todos'
    ? CONCURSOS_PUBLICOS_DATA
    : CONCURSOS_PUBLICOS_DATA.filter((item) => item.categoria.includes(selectedCategory));

  // Bloqueio do scroll da página quando a mini página (modal) está aberta
  useEffect(() => {
    if (activeConcurso) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeConcurso]);

  // Fechar com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveConcurso(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Rolagem suave se houver hash na URL (ex: #turmas-pro)
  useEffect(() => {
    const hash = window.location.hash?.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);


  // Bônus de 1 mês grátis nas turmas presenciais (sem custo adicional)
  // Exceções oficiais: não vale para turmas presenciais CBMERJ, GM Maricá, GM São Gonçalo e Transpetro
  const EXCECOES_BONUS_PRESENCIAL = ['cbmerj', 'gm-marica', 'gm-sao-goncalo', 'transpetro'];
  const hasBonusPresencial = (concursoId: string) => {
    return !EXCECOES_BONUS_PRESENCIAL.includes(concursoId.toLowerCase());
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppUrl = (concursoNome: string) => {
    const text = `Olá! Tenho interesse na preparação do Progressão para o concurso ${concursoNome}. Gostaria de mais informações sobre turmas, horários e valores em Duque de Caxias.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] text-[#0A131F] selection:bg-[#FFBF00] selection:text-[#00223B]">
      {/* 21. SEO Estruturado */}
      <SEO
        title="Concursos Públicos | Preparação Progressão"
        description="Prepare-se para os principais concursos públicos com o Progressão. Conheça os concursos, requisitos, carreiras e encontre a preparação ideal para seu objetivo."
        canonicalPath="/cursos/concursos"
      />

      <Breadcrumbs
        items={[
          { label: 'Cursos' },
          { label: 'Concursos Públicos' }
        ]}
      />

      {/* ============================================================ */}
      {/* 2. HERO DE ALTO IMPACTO (PADRÃO REFERÊNCIA PROGRESSÃO) */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-br from-[#00223B] via-[#002b49] to-[#001D33] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-3xl sm:rounded-b-[40px] lg:rounded-b-[48px] shadow-lg border-b border-[#015E96]/30">
        {/* Textura sutil e elegante institucional de listras diagonais */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 18px, transparent 18px, transparent 36px)'
          }}
        />

        {/* Elementos decorativos circulares/geométricos discretos no fundo */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-[#0289C6]/20 bg-[#0289C6]/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full border border-[#0289C6]/15 pointer-events-none" />
        <div className="absolute top-1/2 right-12 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5 pointer-events-none hidden md:block" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Lado Esquerdo: Identificação, Título, Texto de Apoio e Botões */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Identificação acima do título */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 text-[#E1E5E8] border border-white/15 text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] mb-6 backdrop-blur-sm shadow-xs">
                <span>PROGRESSÃO EDUCAÇÃO · CONCURSOS 2026/2027</span>
              </div>

              {/* Título Principal */}
              <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-black text-white tracking-tight uppercase leading-[1.08] mb-6">
                Escolha seu concurso. <br className="hidden sm:inline" />
                <span className="text-white">Prepare-se para a aprovação.</span>
              </h1>

              {/* Texto de Apoio */}
              <p className="text-base sm:text-lg text-[#E1E5E8]/90 max-w-xl leading-relaxed mb-8 font-normal">
                Encontre o concurso ideal para seus objetivos e conheça nossas opções de preparação para cada carreira.
              </p>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                {/* Botão principal (amarelo institucional de alto destaque) */}
                <button
                  type="button"
                  onClick={() => scrollToSection('nossas-turmas')}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-sm sm:text-base px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Ver concursos</span>
                  <ArrowRight className="w-4 h-4 text-[#00223B]" />
                </button>

                {/* Botão secundário (estilo translúcido da referência) */}
                <button
                  type="button"
                  onClick={() => scrollToSection('como-preparamos')}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>Conhecer nossas turmas</span>
                </button>
              </div>
            </div>

            {/* Lado Direito: Grade com 4 Cards Informativos (2x2) */}
            <div className="lg:col-span-5 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* CARD 1 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-5.5 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-1">
                      2026/27
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E1E5E8]/85 leading-relaxed font-normal">
                      Calendário dos concursos
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-5.5 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-1">
                      Presencial
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E1E5E8]/85 leading-relaxed font-normal">
                      Preparação em sala de aula
                    </p>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-5.5 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-1">
                      Online
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E1E5E8]/85 leading-relaxed font-normal">
                      Aulas e preparação a distância
                    </p>
                  </div>
                </div>

                {/* CARD 4 */}
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-5.5 hover:bg-white/15 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-1">
                      Estratégia
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E1E5E8]/85 leading-relaxed font-normal">
                      Questões, simulados e preparação
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. BARRA DE CATEGORIAS / FILTROS DINÂMICOS */}
      {/* ============================================================ */}
      <section className="bg-white border-b border-[#E1E5E8] sticky top-0 z-30 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="hidden md:inline-flex items-center gap-2 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0">
              <Layers className="w-4 h-4 text-[#0289C6]" />
              <span>Filtrar por Área:</span>
            </span>

            {/* Lista com scroll horizontal no mobile */}
            <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar w-full md:w-auto py-1">
              {categories.map((cat) => {
                const count = cat === 'Todos'
                  ? CONCURSOS_PUBLICOS_DATA.length
                  : CONCURSOS_PUBLICOS_DATA.filter(c => c.categoria.includes(cat)).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${isActive
                      ? 'bg-[#004B7C] text-white shadow-md'
                      : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0A131F]/80 border border-transparent'
                      }`}
                  >
                    <span>{cat}</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${isActive ? 'bg-[#FFBF00] text-[#00223B]' : 'bg-[#CBD5E1] text-[#0A131F]'
                      }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SEÇÃO DE CONCURSOS — GRADE RESPONSIVA DE CARDS */}
      {/* ============================================================ */}
      <section id="concursos-grid" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
            Carreiras e Oportunidades Oficiais
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase leading-snug">
            Encontre o concurso certo para você.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B]">
            "Conheça as oportunidades e descubra os requisitos, etapas e características de cada carreira."
          </p>
        </div>

        {/* Grade de 3 cards desktop, 2 tablet, 1 mobile (Padrão Preparatórios Militares) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredConcursos.map((concurso) => {
            const cardTag = getCardTag(concurso);
            const turmaVinculada = getTurmaConcursoPorId(concurso.id);

            return (
              <div
                key={concurso.id}
                className="bg-white rounded-2xl border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* 1. Imagem e Identificação do Card */}
                <div className="relative w-full min-h-[224px] sm:min-h-[244px] flex flex-col justify-between p-4 sm:p-5 overflow-hidden bg-[#001D33] shrink-0">
                  <img
                    src={concurso.imagem}
                    alt={`${concurso.nome} - ${concurso.cargo}`}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/95 via-[#001D33]/60 to-[#001D33]/25 pointer-events-none" />

                  {/* Apenas uma tag span por card posicionada no topo */}
                  <div className="relative z-10 self-start pointer-events-none">
                    <span className={`inline-block px-3 py-1 text-xs rounded-full shadow-md backdrop-blur-sm border ${cardTag.styleClass}`}>
                      {cardTag.text}
                    </span>
                  </div>

                  {/* 1. Identificação do concurso com espaçamento seguro em relação à tag e ao subtítulo */}
                  <div className="relative z-10 mt-auto pt-4">
                    <h3 className="font-serif-heading text-lg sm:text-xl font-black text-white tracking-tight uppercase leading-snug drop-shadow-md">
                      {concurso.nome}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#FFBF00] tracking-wide line-clamp-1 drop-shadow-sm mt-2 sm:mt-2.5">
                      {concurso.cargo}
                    </p>
                  </div>
                </div>

                {/* 2. Conteúdo do Card — Informações Principais Resumidas */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-2.5 text-xs text-[#0A131F]/80">
                    {/* Órgão */}
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span className="line-clamp-1">
                        <strong className="text-[#00223B] font-semibold">Órgão: </strong>
                        {concurso.orgao}
                      </span>
                    </div>

                    {/* Cargo */}
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span className="line-clamp-1">
                        <strong className="text-[#00223B] font-semibold">Cargo: </strong>
                        {concurso.cargo}
                      </span>
                    </div>

                    {/* Banca */}
                    {concurso.banca && (
                      <div className="flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-[#004B7C] shrink-0" />
                        <span className="line-clamp-1">
                          <strong className="text-[#00223B] font-semibold">Banca: </strong>
                          {concurso.banca}
                        </span>
                      </div>
                    )}

                    {/* Vagas */}
                    {concurso.vagas && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#004B7C] shrink-0" />
                        <span className="line-clamp-1">
                          <strong className="text-[#00223B] font-semibold">Vagas: </strong>
                          {concurso.vagas}
                        </span>
                      </div>
                    )}

                    {/* Escolaridade */}
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span className="line-clamp-1">
                        <strong className="text-[#00223B] font-semibold">Escolaridade: </strong>
                        {concurso.escolaridade}
                      </span>
                    </div>
                  </div>

                  {/* Destaque OPA — Botão Direcionado para a Seção OPA */}
                  <div className="space-y-1.5 mt-1">
                    <button
                      type="button"
                      onClick={() => scrollToSection('secao-opa')}
                      aria-label="Conhecer o diferencial OPA - Projeto Exclusivo Incluso"
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-[#00223B] hover:bg-[#002f52] border border-[#015E96]/50 hover:border-[#FFBF00]/60 text-white shadow-xs transition-all duration-200 cursor-pointer group/opa active:scale-[0.99] text-left"
                    >
                      <span className="px-1.5 py-0.5 rounded bg-[#FFBF00] text-[#00223B] text-[10px] font-black uppercase tracking-wider shrink-0 group-hover/opa:bg-[#F59E0B] transition-colors">
                        OPA
                      </span>
                      <span className="text-[11px] sm:text-xs font-semibold text-white group-hover/opa:text-[#FFBF00] transition-colors truncate">
                        Diferencial Exclusivo Incluso
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FFBF00] shrink-0 ml-auto group-hover/opa:translate-x-1 transition-transform" />
                    </button>
                    {/* Destaque: Bônus de 1 mês grátis nas turmas presenciais */}
                    {hasBonusPresencial(concurso.id) && (
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200/90 text-emerald-950 shadow-xs">
                        <Gift className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <p className="text-[11px] sm:text-xs font-semibold text-emerald-950 leading-tight truncate">
                          <strong className="text-emerald-700 font-extrabold mr-1">+1 Mês Grátis:</strong>
                          Ao contratar uma turma presencial!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Botões do Card */}
                  <div className="space-y-2 mt-1">
                    <button
                      type="button"
                      onClick={() => {
                        navigate(`/concursos/${concurso.id}`);
                      }}
                      aria-label={`Ver detalhes do concurso ${concurso.nome}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-4 h-4 text-[#FFBF00] group-hover:translate-x-1 transition-transform" />
                    </button>

                    {turmaVinculada && (
                      <button
                        type="button"
                        onClick={() => setSelectedTurma(turmaVinculada)}
                        aria-label={`Ver detalhes da turma de ${concurso.nome}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#F8FAFC] hover:bg-[#E1E5E8] text-[#004B7C] border border-[#E1E5E8] hover:border-[#004B7C]/40 font-bold text-xs py-2 px-3 rounded-xl uppercase tracking-wider transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#004B7C]" />
                        <span>Ver detalhes da turma</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* PÁGINA / PAINEL DE DETALHES COMPLETO DO CONCURSO */}
      {/* ============================================================ */}
      {activeConcurso && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-[#001D33]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => {
            setActiveConcurso(null);

            if (currentPath === '/concursos/pmerj') {
              navigate('/cursos/concursos');
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-white/20 overflow-hidden relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CABEÇALHO FIXO COM NAVEGAÇÃO "← VOLTAR PARA CONCURSOS" */}
            <div className="bg-[#00223B] text-white px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#015E96]/40 shrink-0 sticky top-0 z-30 shadow-md">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveConcurso(null);

                    if (currentPath === '/concursos/pmerj') {
                      navigate('/cursos/concursos');
                    }
                  }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E1E5E8] hover:text-[#FFBF00] transition-colors py-1 px-2.5 rounded-lg hover:bg-white/10 cursor-pointer"
                  aria-label="Voltar para concursos"
                >
                  <ArrowLeft className="w-4 h-4 text-[#FFBF00]" />
                  <span>Voltar para concursos</span>
                </button>
                <div className="h-4 w-px bg-white/20 hidden sm:block" />
                <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider hidden sm:block truncate max-w-xs">
                  {activeConcurso.nome}
                </span>
              </div>

              {/* Botão Fechar no Cabeçalho */}
              <button
                type="button"
                onClick={() => {
                  const cNome = activeConcurso.nome;

                  setActiveConcurso(null);
                  setFormData(prev => ({ ...prev, concurso: cNome }));

                  if (currentPath.startsWith('/concursos/')) {
                    navigate('/cursos/concursos');
                  }

                  setTimeout(() => scrollToSection('concursos'), 150);
                }}
                aria-label="Fechar painel de detalhes"
                className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0 border border-white/15"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* ÁREA COM SCROLL INTERNO VERTICAL */}
            <div
              ref={modalContentRef}
              className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1 text-[#0A131F]"
            >
              {/* ============================================================ */}
              {/* HERO DO CONCURSO: NOME DO CONCURSO + CARGO */}
              {/* ============================================================ */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E1E5E8] bg-[#00223B] text-white">
                <div className="relative min-h-[230px] sm:min-h-[270px] w-full flex flex-col justify-between p-5 sm:p-7">
                  <img
                    src={activeConcurso.imagem}
                    alt={`${activeConcurso.nome} - ${activeConcurso.cargo}`}
                    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D33] via-[#001D33]/70 to-[#001D33]/30 pointer-events-none" />

                  {/* Apenas uma tag span no hero da página de detalhes posicionada no topo */}
                  <div className="relative z-10 self-start pointer-events-none">
                    <span className={`inline-block px-3.5 py-1 text-xs rounded-full shadow-md backdrop-blur-sm border ${getCardTag(activeConcurso).styleClass}`}>
                      {getCardTag(activeConcurso).text}
                    </span>
                  </div>

                  {/* Nome do Concurso + Cargo no Hero com espaçamento seguro */}
                  <div className="relative z-10 mt-auto pt-5">
                    <h2 id="modal-title" className="font-serif-heading text-xl sm:text-3xl lg:text-4xl font-black text-white uppercase leading-snug drop-shadow-md">
                      {activeConcurso.nomeCompleto || activeConcurso.nome}
                    </h2>
                    <p className="text-sm sm:text-base font-semibold text-[#FFBF00] mt-2.5 sm:mt-3.5 drop-shadow-sm">
                      {activeConcurso.cargo}
                    </p>
                  </div>
                </div>

                {/* Barra Informativa Rápida no Banner */}
                <div className="p-4 sm:p-5 bg-[#001D33] border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#94A3B8] font-semibold uppercase text-[10px] block mb-0.5">
                      Banca
                    </span>
                    <span className="text-white font-bold block truncate">
                      {activeConcurso.banca || 'A definir'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] font-semibold uppercase text-[10px] block mb-0.5">
                      Vagas
                    </span>
                    <span className="text-[#FFBF00] font-bold block truncate">
                      {activeConcurso.vagas || 'Em definição'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] font-semibold uppercase text-[10px] block mb-0.5">
                      Escolaridade
                    </span>
                    <span className="text-white font-bold block truncate">
                      {activeConcurso.destaqueEscolaridade}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] font-semibold uppercase text-[10px] block mb-0.5">
                      Remuneração Inicial
                    </span>
                    <span className="text-[#FFBF00] font-bold block truncate">
                      {activeConcurso.remuneracaoInicial}
                    </span>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* INFORMAÇÕES PRINCIPAIS (ORGANIZADAS EM CARDS) */}
              {/* ============================================================ */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <Target className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Informações Principais
                  </h3>
                </div>

                {/* Lista estruturada de informações principais */}
                <div className="bg-white rounded-2xl border border-[#E1E5E8] shadow-xs overflow-hidden divide-y divide-[#E1E5E8]">
                  {/* Órgão */}
                  {activeConcurso.orgao && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Building2 className="w-3.5 h-3.5" />
                        </div>
                        <span>Órgão</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.orgao}
                      </div>
                    </div>
                  )}

                  {/* Instituição */}
                  {activeConcurso.instituicao && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Shield className="w-3.5 h-3.5" />
                        </div>
                        <span>Instituição</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.instituicao}
                      </div>
                    </div>
                  )}

                  {/* Cargo */}
                  {activeConcurso.cargo && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Target className="w-3.5 h-3.5" />
                        </div>
                        <span>{activeConcurso.cargoLabel || 'Cargo'}</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.cargo}
                      </div>
                    </div>
                  )}

                  {/* Banca */}
                  {activeConcurso.banca && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <FileCheck className="w-3.5 h-3.5" />
                        </div>
                        <span>Banca</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.banca}
                      </div>
                    </div>
                  )}

                  {/* Último Edital / Edital */}
                  {activeConcurso.ultimoEdital && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <FileText className="w-3.5 h-3.5" />
                        </div>
                        <span>{activeConcurso.ultimoEditalLabel || 'Último Edital / Edital'}</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.ultimoEdital}
                      </div>
                    </div>
                  )}

                  {/* Inscrições */}
                  {activeConcurso.inscricoesPeriodo && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <span>Inscrições</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.inscricoesPeriodo}
                      </div>
                    </div>
                  )}

                  {/* Prova Objetiva */}
                  {activeConcurso.dataProva && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                        </div>
                        <span>Prova Objetiva</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.dataProva}
                      </div>
                    </div>
                  )}

                  {/* Vagas */}
                  {activeConcurso.vagas && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <span>Vagas</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.vagas}
                      </div>
                    </div>
                  )}

                  {/* Escolaridade */}
                  {activeConcurso.escolaridade && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <GraduationCap className="w-3.5 h-3.5" />
                        </div>
                        <span>Escolaridade</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.escolaridade}
                      </div>
                    </div>
                  )}

                  {/* Áreas de Atuação */}
                  {activeConcurso.areasAtuacao && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Target className="w-3.5 h-3.5" />
                        </div>
                        <span>Áreas de Atuação</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.areasAtuacao}
                      </div>
                    </div>
                  )}

                  {/* Idade */}
                  {activeConcurso.idade && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                        </div>
                        <span>Idade</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.idade}
                      </div>
                    </div>
                  )}

                  {/* Remuneração */}
                  {activeConcurso.remuneracaoInicial && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <DollarSign className="w-3.5 h-3.5" />
                        </div>
                        <span>Remuneração</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.remuneracaoResumo || activeConcurso.remuneracaoInicial}
                      </div>
                    </div>
                  )}

                  {/* Benefícios */}
                  {activeConcurso.beneficios && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Award className="w-3.5 h-3.5" />
                        </div>
                        <span>Benefícios</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.beneficios}
                      </div>
                    </div>
                  )}

                  {/* Regime */}
                  {activeConcurso.regime && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Scale className="w-3.5 h-3.5" />
                        </div>
                        <span>Regime</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.regime}
                      </div>
                    </div>
                  )}

                  {/* Jornada */}
                  {activeConcurso.jornada && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                        </div>
                        <span>Jornada</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.jornada}
                      </div>
                    </div>
                  )}

                  {/* CNH / Requisitos Adicionais */}
                  {activeConcurso.requisitoAdicional && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Shield className="w-3.5 h-3.5" />
                        </div>
                        <span>CNH / Requisitos Adicionais</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.requisitoAdicional}
                      </div>
                    </div>
                  )}

                  {/* Situação do Concurso */}
                  {activeConcurso.situacao && (
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#F8FAFC] transition-colors gap-1.5 sm:gap-6">
                      <div className="flex items-center gap-2.5 text-xs font-bold text-[#64748B] uppercase tracking-wider shrink-0 sm:w-64">
                        <div className="w-7 h-7 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                        </div>
                        <span>Situação</span>
                      </div>
                      <div className="text-sm sm:text-base font-bold text-[#00223B] sm:text-right flex-1">
                        {activeConcurso.situacao}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* ============================================================ */}
              {/* O QUE É O CONCURSO? (SOBRE A CARREIRA) */}
              {/* ============================================================ */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <Shield className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    O que é o concurso?
                  </h3>
                </div>
                <div className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-[#E1E5E8]">
                  <p>{activeConcurso.sobre}</p>
                </div>
              </div>

              {/* ============================================================ */}
              {/* DISCIPLINAS COBRADAS NO CONCURSO */}
              {/* ============================================================ */}
              {activeConcurso.disciplinas && activeConcurso.disciplinas.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                      <BookOpen className="w-4 h-4 text-[#FFBF00]" />
                    </div>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                      {activeConcurso.disciplinasTitulo || 'Disciplinas Cobradas'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0A131F]/70 mb-3">
                    Conteúdo programático oficial abordado com aulas aprofundadas e simulados comentados:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeConcurso.disciplinas.map((disc, idx) => (
                      <div
                        key={idx}
                        className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-[#E1E5E8] flex items-center gap-3 hover:border-[#0289C6]/50 hover:bg-white transition-all shadow-2xs"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-[#0A131F]">
                          {disc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* ATRIBUIÇÕES DO CARGO */}
              {/* ============================================================ */}
              {activeConcurso.atribuicoes && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                      <FileText className="w-4 h-4 text-[#FFBF00]" />
                    </div>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                      Atribuições do Cargo
                    </h3>
                  </div>
                  <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-[#E1E5E8] text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                    {typeof activeConcurso.atribuicoes === 'string' ? (
                      <p>{activeConcurso.atribuicoes}</p>
                    ) : (
                      <ul className="space-y-2">
                        {activeConcurso.atribuicoes.map((atrib, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#0289C6] font-bold select-none">•</span>
                            <span>{atrib}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* ETAPAS DO PROCESSO SELETIVO */}
              {/* ============================================================ */}
              {activeConcurso.etapas && activeConcurso.etapas.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                      <FileCheck className="w-4 h-4 text-[#FFBF00]" />
                    </div>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                      Etapas do Concurso
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {activeConcurso.etapas.map((etapa, idx) => (
                      <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl border border-[#E1E5E8] shadow-xs flex items-start gap-4">
                        <span className="w-8 h-8 rounded-xl bg-[#004B7C] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          {etapa.numero}
                        </span>
                        <div className="flex-1">
                          <span className="font-bold text-sm sm:text-base text-[#00223B] block">
                            {etapa.titulo}
                          </span>
                          <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                            {etapa.descricao}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ESPECIAL DETRAN: CARGOS DIFERENCIADOS */}
              {activeConcurso.cargosMultiplos && (
                <div className="bg-[#F0F7FD] p-5 sm:p-6 rounded-2xl border border-[#BAE6FD]">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-[#004B7C]" />
                    <h4 className="font-serif-heading text-base sm:text-lg font-black text-[#004B7C]">
                      Cargos e Oportunidades do DETRAN
                    </h4>
                  </div>
                  <p className="text-xs text-[#004B7C]/80 mb-4">
                    O DETRAN oferece carreiras com requisitos e remunerações distintos para cada função:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeConcurso.cargosMultiplos.map((cargoItem, i) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-[#BAE6FD] shadow-xs">
                        <span className="font-black text-sm text-[#00223B] block">{cargoItem.cargo}</span>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#0289C6] mt-1">
                          <span>{cargoItem.escolaridade}</span>
                          <span>•</span>
                          <span>{cargoItem.remuneracao}</span>
                        </div>
                        <p className="text-[11px] text-[#64748B] mt-2 leading-relaxed">
                          {cargoItem.atribuicao}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* BLOCO DE INSCRIÇÕES (QUANDO DISPONÍVEL) */}
              {/* ============================================================ */}
              {activeConcurso.inscricoesBloco && (
                <div className="bg-[#F0FDF4] border-2 border-emerald-400/60 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                      <Calendar className="w-4 h-4 text-[#FFBF00]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                        Cronograma Oficial
                      </span>
                      <h4 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B]">
                        Inscrições
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-2xs">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                        Período de Inscrição
                      </span>
                      <span className="text-base sm:text-lg font-black text-emerald-700 font-serif-heading block">
                        {activeConcurso.inscricoesBloco.periodo}
                      </span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-2xs">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                        Taxa de Inscrição
                      </span>
                      <span className="text-base sm:text-lg font-black text-[#00223B] font-serif-heading block">
                        {activeConcurso.inscricoesBloco.taxa}
                      </span>
                      <span className="text-[11px] text-[#64748B] block mt-0.5">
                        Pagamento: {activeConcurso.inscricoesBloco.pagamentoAte}
                      </span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-2xs">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                        Situação
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{activeConcurso.inscricoesBloco.situacao}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* BLOCO DE PROVA OBJETIVA DETALHADA (QUANDO DISPONÍVEL) */}
              {/* ============================================================ */}
              {activeConcurso.provaObjetivaBloco && (
                <div className="bg-white rounded-2xl border border-[#E1E5E8] p-5 sm:p-6 shadow-xs">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                      <FileCheck className="w-4 h-4 text-[#FFBF00]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0289C6] uppercase tracking-wider block">
                        Estrutura do Exame
                      </span>
                      <h4 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B]">
                        Prova Objetiva
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                    <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase block">Data</span>
                      <span className="text-sm sm:text-base font-black text-[#004B7C] font-mono mt-0.5 block">
                        {activeConcurso.provaObjetivaBloco.data}
                      </span>
                    </div>
                    <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase block">Duração</span>
                      <span className="text-sm sm:text-base font-black text-[#00223B] mt-0.5 block">
                        {activeConcurso.provaObjetivaBloco.duracao}
                      </span>
                    </div>
                    <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8] col-span-2 sm:col-span-1">
                      <span className="text-[10px] font-bold text-[#64748B] uppercase block">Total de Questões</span>
                      <span className="text-sm sm:text-base font-black text-[#00223B] mt-0.5 block">
                        {activeConcurso.provaObjetivaBloco.totalQuestoes}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#00223B] block uppercase tracking-wider mb-2.5">
                    Distribuição das Questões:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {activeConcurso.provaObjetivaBloco.distribuicao.map((item, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E1E5E8] flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-[#0A131F]">
                          {item.materia}
                        </span>
                        <span className="font-mono font-bold text-xs bg-[#004B7C] text-white px-2.5 py-1 rounded-md">
                          {item.quantidade} questões
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-2 bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-bold">Critério de eliminação: </strong>
                      {activeConcurso.provaObjetivaBloco.criterioEliminacao}
                    </span>
                  </div>
                </div>
              )}

              {/* ============================================================ */}
              {/* TURMAS PREPARATÓRIAS ESPECÍFICAS (NOSSAS TURMAS DO CONCURSO) */}
              {/* ============================================================ */}
              {(() => {
                const turmasDoConcurso = getTurmasConcursoPorId(activeConcurso.id);
                if (turmasDoConcurso.length > 0) {
                  return (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                          <GraduationCap className="w-4 h-4 text-[#FFBF00]" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-[#0289C6] uppercase tracking-wider block">
                            Preparação Oficial Progressão Caxias
                          </span>
                          <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                            Nossa Turma · {activeConcurso.nome}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        {turmasDoConcurso.map((turmaItem) => (
                          <TurmaConcursoCard
                            key={turmaItem.id}
                            turma={turmaItem}
                            onSelectTurma={(t) => setSelectedTurma(t)}
                            showButton={true}
                          />
                        ))}
                      </div>
                    </div>
                  );
                }

                if (activeConcurso.turmasPreparatorias && activeConcurso.turmasPreparatorias.length > 0) {
                  return (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                          <GraduationCap className="w-4 h-4 text-[#FFBF00]" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold text-[#0289C6] uppercase tracking-wider block">
                            Preparação Oficial Progressão Caxias
                          </span>
                          <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                            Nossa Turma · {activeConcurso.nome}
                          </h3>
                        </div>
                      </div>

                      {/* Destaque Bônus 1 Mês Grátis se elegível */}
                      {hasBonusPresencial(activeConcurso.id) && (
                        <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 shadow-xs mb-3">
                          <Gift className="w-5 h-5 text-emerald-600 shrink-0" />
                          <div className="text-xs sm:text-sm">
                            <strong className="text-emerald-850 font-bold block sm:inline">Bônus Especial de Matrícula: </strong>
                            <span>Ao contratar a turma presencial</span>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-6">
                        {activeConcurso.turmasPreparatorias.map((turmaItem, tIdx) => (
                          <div
                            key={tIdx}
                            className="bg-white rounded-2xl border-2 border-[#004B7C]/20 shadow-sm overflow-hidden hover:border-[#0289C6] transition-all"
                          >
                            <div className="bg-gradient-to-r from-[#00223B] to-[#004B7C] text-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div>
                                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFBF00] text-[#00223B] mb-1.5">
                                  Nossa turma
                                </span>
                                <h4 className="font-serif-heading text-base sm:text-xl font-bold text-white">
                                  {turmaItem.nome}
                                </h4>
                                {turmaItem.subtitulo && (
                                  <p className="text-xs sm:text-sm text-[#FFBF00] font-medium mt-0.5">
                                    {turmaItem.subtitulo}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return null;
              })()}

              {/* ============================================================ */}
              {/* ESTRUTURA DE REMUNERAÇÃO E BENEFÍCIOS */}
              {/* ============================================================ */}
              <div className="bg-gradient-to-br from-[#00223B] to-[#004B7C] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#FFBF00] text-xs font-bold uppercase tracking-wider mb-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Plano Remuneratório</span>
                  </div>
                  <h4 className="font-serif-heading text-xl sm:text-2xl font-black text-white mb-6">
                    Quanto posso ganhar?
                  </h4>

                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                      <span className="text-xs text-[#94A3B8] uppercase block font-semibold">Remuneração Inicial</span>
                      <div className="text-2xl sm:text-3xl font-black text-[#FFBF00] font-serif-heading mt-1">
                        {activeConcurso.remuneracaoInicial}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#E1E5E8]/90 leading-relaxed mb-4">
                    {activeConcurso.remuneracaoResumo}
                  </p>

                  <div className="flex items-start gap-2 bg-black/20 p-3 rounded-xl border border-white/10 text-[11px] text-[#94A3B8]">
                    <AlertCircle className="w-4 h-4 text-[#FFBF00] shrink-0 mt-0.5" />
                    <span>
                      "Os valores podem variar conforme cargo, gratificações, benefícios, adicionais, progressão funcional e legislação vigente."
                    </span>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* CTA DENTRO DO PAINEL DE DETALHES */}
              {/* ============================================================ */}
              <div className="bg-[#001D33] text-white p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-xl">
                <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block">
                  Preparação Especializada em Duque de Caxias
                </span>
                <h4 className="font-serif-heading text-xl sm:text-2xl font-black text-white">
                  Quer se preparar para o concurso {activeConcurso.nome}?
                </h4>
                <p className="text-sm text-[#E1E5E8]/90 max-w-xl mx-auto leading-relaxed">
                  "Comece sua preparação com uma estratégia direcionada e simulados com as bancas oficiais."
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const cNome = activeConcurso.nome;

                      setActiveConcurso(null);
                      setFormData(prev => ({ ...prev, concurso: cNome }));
                      if (currentPath.startsWith('/concursos/')) {
                        navigate('/cursos/concursos');
                      }

                      setTimeout(() => scrollToSection('inscricao'), 150);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-sm sm:text-base px-8 py-3.5 rounded-xl uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Fazer minha inscrição</span>
                    <ArrowRight className="w-5 h-5 text-[#00223B]" />
                  </button>

                  {getTurmaConcursoPorId(activeConcurso.id) && (
                    <button
                      type="button"
                      onClick={() => {
                        const t = getTurmaConcursoPorId(activeConcurso.id);
                        if (t) setSelectedTurma(t);
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0289C6] hover:bg-[#015E96] text-white font-bold text-sm px-6 py-3.5 rounded-xl uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-[#FFBF00]" />
                      <span>Ver detalhes da turma</span>
                    </button>
                  )}

                  <a
                    href={getWhatsAppUrl(activeConcurso.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-3.5 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* FONTES E BOTÃO VOLTAR NO RODAPÉ */}
              <div className="pt-4 border-t border-[#E1E5E8] flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveConcurso(null);

                    if (currentPath === '/concursos/pmerj') {
                      navigate('/cursos/concursos');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-[#004B7C] hover:text-[#00223B] font-bold cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-[#004B7C]" />
                  <span>Voltar para concursos</span>
                </button>
                <span>Fonte: {activeConcurso.fonte}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SEÇÃO “NOSSAS TURMAS” — CONCURSOS PÚBLICOS */}
      {/* ============================================================ */}
      <TurmasConcursosSection onSelectTurma={setSelectedTurma} />

      {/* ============================================================ */}
      {/* SEÇÃO “TURMAS PRO” — SEM CONCURSO ESPECÍFICO */}
      {/* ============================================================ */}
      <TurmasPro />

      {/* ============================================================ */}
      {/* SEÇÃO “COMBOS E PRODUTOS” */}
      {/* ============================================================ */}
      <CombosProdutos />

      {/* ============================================================ */}
      {/* 15. SEÇÃO — COMO O PROGRESSÃO PREPARA VOCÊ */}
      {/* ============================================================ */}
      <section id="como-preparamos" className="py-16 sm:py-24 bg-[#001D33] text-white px-4 sm:px-6 lg:px-8 border-y border-[#015E96]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#38BDF8] uppercase tracking-wider block mb-2">
              Metodologia de Alta Performance
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-white tracking-tight uppercase leading-snug">
              Mais do que estudar. É se preparar com estratégia.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#E1E5E8]/90">
              Mapeamos o perfil de cada banca organizadora para você conquistar a pontuação necessária para a posse.
            </p>
          </div>

          {/* 4 Cards Estratégicos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#002B48] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#0289C6] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0289C6] flex items-center justify-center text-white mb-5 shadow-md">
                  <Target className="w-6 h-6 text-[#FFBF00]" />
                </div>
                <h3 className="font-serif-heading text-lg font-black text-white mb-2">
                  Conteúdo direcionado
                </h3>
                <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                  Estude o que realmente importa para a prova. Sem perda de tempo com matérias irrelevantes.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#002B48] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#0289C6] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0289C6] flex items-center justify-center text-white mb-5 shadow-md">
                  <FileText className="w-6 h-6 text-[#FFBF00]" />
                </div>
                <h3 className="font-serif-heading text-lg font-black text-white mb-2">
                  Questões
                </h3>
                <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                  Pratique com questões e acompanhe sua evolução com resoluções comentadas pelos professores.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#002B48] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#0289C6] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0289C6] flex items-center justify-center text-white mb-5 shadow-md">
                  <Clock className="w-6 h-6 text-[#FFBF00]" />
                </div>
                <h3 className="font-serif-heading text-lg font-black text-white mb-2">
                  Simulados
                </h3>
                <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                  Teste seus conhecimentos em condições próximas às da prova com rigor de tempo e cartão-resposta.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#002B48] p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-[#0289C6] transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0289C6] flex items-center justify-center text-white mb-5 shadow-md">
                  <TrendingUp className="w-6 h-6 text-[#FFBF00]" />
                </div>
                <h3 className="font-serif-heading text-lg font-black text-white mb-2">
                  Acompanhamento
                </h3>
                <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                  Identifique seus pontos fortes e o que precisa melhorar antes do dia oficial do concurso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 16. JORNADA ATÉ A APROVAÇÃO (TIMELINE 01 A 08) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-[#E1E5E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
              Método Comprovado de Estudo
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
              Jornada até a aprovação.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B]">
              O caminho estruturado passo a passo para transformar dedicação em estabilidade profissional.
            </p>
          </div>

          {/* Grid de 8 Passos Responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Escolha seu objetivo', desc: 'Defina a carreira, órgão e cargo alinhados com seu perfil.' },
              { step: '02', title: 'Conheça o edital', desc: 'Entenda os pesos das disciplinas e as regras da banca.' },
              { step: '03', title: 'Monte sua estratégia', desc: 'Organize seu cronograma com base nas suas metas.' },
              { step: '04', title: 'Estude', desc: 'Aulas teóricas claras com professores especialistas em concursos.' },
              { step: '05', title: 'Resolva questões', desc: 'Treine com milhares de itens anteriores da mesma banca.' },
              { step: '06', title: 'Faça simulados', desc: 'Acostume seu corpo e mente com o tempo real de prova.' },
              { step: '07', title: 'Corrija seus erros', desc: 'Revise os tópicos onde você perdeu pontos valiosos.' },
              { step: '08', title: 'Chegue preparado para a prova', desc: 'Faça a prova com tranquilidade, técnica e confiança.' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E1E5E8] shadow-xs flex flex-col justify-between hover:border-[#0289C6] hover:bg-white transition-all group"
              >
                <div>
                  <span className="text-2xl font-black text-[#0289C6] font-mono block mb-2 group-hover:text-[#FFBF00] transition-colors">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-sm text-[#00223B] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 17. CTA FINAL DE ALTO IMPACTO */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#001D33] text-white px-4 sm:px-6 lg:px-8 border-t border-[#015E96]/30 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-[#FFBF00] uppercase tracking-wider block mb-3">
            Comece Sua Preparação no Progressão Caxias
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4 leading-tight">
            Seu próximo passo pode começar hoje.
          </h2>
          <p className="text-base sm:text-xl text-[#E1E5E8]/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            "Escolha o concurso que combina com seus objetivos e comece sua preparação."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('inscricao')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-base px-8 py-4 rounded-xl uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>GARANTIR MINHA INSCRIÇÃO</span>
              <ArrowRight className="w-5 h-5 text-[#00223B]" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('concursos-grid')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-base px-8 py-4 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
            >
              <span>VER TODOS OS CONCURSOS</span>
            </button>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe pedagógica do Progressão sobre a preparação para concursos públicos em Duque de Caxias.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white border border-[#25D366]/40 font-bold text-base px-6 py-4 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-[#94A3B8]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FFBF00]" />
              <span>Unidade Duque de Caxias / RJ</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#0289C6]" />
              <span>Turmas Presenciais com Vagas Limitadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 18. FORMULÁRIO DE INSCRIÇÃO / PRÉ-MATRÍCULA */}
      {/* ============================================================ */}
      <section id="inscricao" className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8 border-t border-[#E1E5E8]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
              Garanta Sua Condição Especial
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase leading-snug">
              Inscrição para Concursos Públicos
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B]">
              Preencha os campos abaixo para reservar sua vaga nas turmas presenciais de Duque de Caxias e receber o plano de estudos da carreira escolhida.
            </p>
          </div>

          <div className="bg-white p-8 flex justify-center">
            <div className="w-full max-w-[600px]">
              {/* RD STATION — OFICIAL — CONCURSOS PÚBLICOS */}
              <RDStationForm
                formId="cx-org_site_concursos-48acdf488beb07abae27"
              />
            </div>
          </div>


        </div>
      </section>

      {/* ============================================================ */}
      {/* MODAL / PAINEL COMPLETO DE DETALHES DA TURMA SELECIONADA */}
      {/* ============================================================ */}
      {selectedTurma && (
        <TurmaConcursoDetalhesModal
          turma={selectedTurma}
          onClose={() => setSelectedTurma(null)}
        />
      )}
    </div>
  );
};