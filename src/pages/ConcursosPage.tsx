import React, { useState, useEffect } from 'react';
import {
  Award,
  CheckCircle2,
  ArrowRight,
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
  FileCheck
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { WHATSAPP_NUMBER } from '../config/siteConfig';
import { RDStationForm } from '../components/rdstation/RDStationForm';
import { CONCURSOS_PUBLICOS_DATA, ConcursoPublico, ConcursoCategory } from '../data/concursosData';

export const ConcursosPage: React.FC = () => {
  // Estado para categoria selecionada no filtro
  const [selectedCategory, setSelectedCategory] = useState<ConcursoCategory>('Todos');

  // Estado para o concurso atualmente aberto no modal (mini página)
  const [activeConcurso, setActiveConcurso] = useState<ConcursoPublico | null>(null);

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
      {/* 2. HERO DE ALTO IMPACTO (PADRÃO PREPARATÓRIO MILITAR PROGRESSÃO) */}
      {/* ============================================================ */}
      <section className="relative bg-[#00223B] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#015E96]/30">
        {/* Textura sutil e elegante de listras diagonais suaves e escuras oficial do Progressão */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.07) 0px, rgba(0, 0, 0, 0.07) 18px, transparent 18px, transparent 36px)'
          }}
        />

        {/* Gradiente radial decorativo suave */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Lado Esquerdo: Mensagem e CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* H1 Principal com Tipografia Institucional Progressão */}
              <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08] mb-5">
                Concursos <br className="hidden sm:inline" />
                Públicos
              </h1>

              {/* Subtítulo Dourado Oficial */}
              <p className="text-lg sm:text-2xl font-medium text-[#FFBF00] mb-4 leading-snug">
                Prepare-se hoje para conquistar sua carreira amanhã.
              </p>

              {/* Texto Complementar */}
              <p className="text-base sm:text-lg text-[#E1E5E8]/90 max-w-2xl leading-relaxed mb-8 font-normal">
                Encontre a preparação ideal para os principais concursos públicos e avance com estratégia, acompanhamento e foco na aprovação.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scrollToSection('inscricao')}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-sm sm:text-base px-8 py-4 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>FAZER MINHA INSCRIÇÃO</span>
                  <ArrowRight className="w-5 h-5 text-[#00223B]" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('como-preparamos')}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base px-6 py-4 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>CONHECER OS CURSOS</span>
                </button>
              </div>

              {/* Informação sutil abaixo dos botões */}
              <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-[#E1E5E8]/80 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Turmas Presenciais • Duque de Caxias / RJ</span>
              </div>
            </div>

            {/* Lado Direito: Composição Visual com Estudantes */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Moldura da Imagem no Formato Quadrado */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#00223B] aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80"
                    alt="Estudantes se preparando para concursos públicos com livros, computador e material didático"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00223B]/80 via-transparent to-transparent pointer-events-none" />
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
            "Conheça as oportunidades e descubra os requisitos, remuneração e características de cada carreira."
          </p>
        </div>

        {/* Grade de 3 cards desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredConcursos.map((concurso) => (
            <div
              key={concurso.id}
              className="bg-white rounded-3xl border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Imagem com badges sobrepostos */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#001D33]">
                <img
                  src={concurso.imagem}
                  alt={`Concurso ${concurso.nome} - ${concurso.nomeCompleto}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Nome do concurso sobre a imagem */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white text-xl sm:text-2xl font-black font-serif-heading drop-shadow-md">
                    {concurso.nome}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="font-bold text-sm text-[#004B7C] uppercase tracking-wide mb-2 line-clamp-1">
                    {concurso.nomeCompleto}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-2">
                    {concurso.descricaoCurta}
                  </p>
                </div>

                {/* Área de Destaque: Remuneração e Escolaridade */}
                <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-[#E1E5E8] flex flex-col gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                      Remuneração
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#00223B] font-serif-heading">
                      {concurso.remuneracaoInicial}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#E1E5E8] flex items-center gap-1.5 text-xs text-[#0A131F]/80">
                    <GraduationCap className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span className="font-semibold truncate">{concurso.escolaridade}</span>
                  </div>
                </div>

                {/* Botão Saiba Mais */}
                <button
                  type="button"
                  onClick={() => setActiveConcurso(concurso)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer group-hover:bg-[#00223B]"
                >
                  <span>SAIBA MAIS</span>
                  <ArrowRight className="w-4 h-4 text-[#FFBF00] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7 & 8. MINI PÁGINA DENTRO DO CARD (MODAL COMPLETO) */}
      {/* ============================================================ */}
      {activeConcurso && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#001D33]/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveConcurso(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-white/20 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho Fixo do Modal com Imagem, Nome e Botão Fechar */}
            <div className="relative shrink-0 bg-[#001D33] text-white">
              <div className="relative h-44 sm:h-56 w-full overflow-hidden">
                <img
                  src={activeConcurso.imagem}
                  alt={activeConcurso.nome}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D33] via-[#001D33]/60 to-black/40" />

                {/* Botão Fechar */}
                <button
                  type="button"
                  onClick={() => setActiveConcurso(null)}
                  aria-label="Fechar mini página"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Badges superiores */}
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="bg-[#0289C6] text-white text-[11px] font-black uppercase px-3 py-1 rounded-lg shadow-md">
                    {activeConcurso.categoria.join(' • ')}
                  </span>
                  <span className="bg-[#FFBF00] text-[#00223B] text-[11px] font-black uppercase px-3 py-1 rounded-lg shadow-md">
                    {activeConcurso.destaqueEscolaridade}
                  </span>
                </div>

                {/* Identificação Principal */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
                  <h3 id="modal-title" className="font-serif-heading text-2xl sm:text-4xl font-black text-white leading-tight">
                    {activeConcurso.nome}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E1E5E8]/90 mt-1 font-medium line-clamp-1">
                    {activeConcurso.nomeCompleto}
                  </p>
                </div>
              </div>
            </div>

            {/* Conteúdo com Scroll Interno Vertical */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-8 text-[#0A131F]">
              {/* 8. O QUE É? */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B]">
                    O que é o concurso?
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed bg-[#F8FAFC] p-5 rounded-2xl border border-[#E1E5E8]">
                  {activeConcurso.sobre}
                </p>
              </div>

              {/* GRID DE INFORMAÇÕES GERAIS */}
              <div>
                <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">
                  Informações Gerais da Carreira
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Órgão</span>
                    <strong className="text-[#00223B] mt-0.5 block truncate">{activeConcurso.orgao}</strong>
                  </div>

                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Cargo</span>
                    <strong className="text-[#00223B] mt-0.5 block truncate">{activeConcurso.cargo}</strong>
                  </div>

                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Escolaridade</span>
                    <strong className="text-[#00223B] mt-0.5 block truncate">{activeConcurso.escolaridade}</strong>
                  </div>

                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Idade</span>
                    <strong className="text-[#00223B] mt-0.5 block truncate">{activeConcurso.idade}</strong>
                  </div>

                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Nacionalidade</span>
                    <strong className="text-[#00223B] mt-0.5 block truncate">{activeConcurso.nacionalidade}</strong>
                  </div>

                  <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[#64748B] block text-[11px] uppercase font-bold">Jornada</span>
                    <strong className="text-[#00223B] mt-0.5 block truncate">{activeConcurso.jornada}</strong>
                  </div>
                </div>
              </div>

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

              {/* 9. REMUNERAÇÃO: QUANTO POSSO GANHAR? */}
              <div className="bg-gradient-to-br from-[#00223B] to-[#004B7C] text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#FFBF00] text-xs font-bold uppercase tracking-wider mb-2">
                    <DollarSign className="w-4 h-4" />
                    <span>Plano Remuneratório</span>
                  </div>
                  <h4 className="font-serif-heading text-xl sm:text-2xl font-black text-white mb-6">
                    Quanto posso ganhar?
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                      <span className="text-xs text-[#94A3B8] uppercase block font-semibold">Remuneração Inicial</span>
                      <div className="text-2xl sm:text-3xl font-black text-[#FFBF00] font-serif-heading mt-1">
                        {activeConcurso.remuneracaoInicial}
                      </div>
                    </div>

                    <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                      <span className="text-xs text-[#94A3B8] uppercase block font-semibold">Remuneração na Carreira</span>
                      <div className="text-2xl sm:text-3xl font-black text-white font-serif-heading mt-1">
                        {activeConcurso.remuneracaoFinal}
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

              {/* 10. REQUISITOS: QUEM PODE PARTICIPAR? */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B]">
                    Quem pode participar?
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeConcurso.requisitos.map((req, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E1E5E8] flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0289C6] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-sm text-[#00223B] block">{req.titulo}</span>
                        <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{req.descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 11. ETAPAS DO CONCURSO: COMO FUNCIONA A SELEÇÃO? */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B]">
                    Como funciona a seleção?
                  </h4>
                </div>
                <div className="space-y-3">
                  {activeConcurso.etapas.map((etapa, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-[#E1E5E8] shadow-xs flex items-start gap-4">
                      <span className="w-8 h-8 rounded-xl bg-[#004B7C] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {etapa.numero}
                      </span>
                      <div className="flex-1">
                        <span className="font-bold text-sm text-[#00223B] block">{etapa.titulo}</span>
                        <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{etapa.descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 12. DIFERENCIAIS DA CARREIRA: POR QUE ESCOLHER ESSA CARREIRA? */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B]">
                    Por que escolher essa carreira?
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeConcurso.diferenciais.map((dif, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E1E5E8]">
                      <span className="font-bold text-sm text-[#004B7C] block mb-1">{dif.titulo}</span>
                      <p className="text-xs text-[#64748B] leading-relaxed">{dif.descricao}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 13. PERFIL DO CANDIDATO */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B]">
                    Essa carreira combina com você?
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeConcurso.perfil.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E1E5E8] text-xs font-semibold text-[#0A131F]">
                      <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] text-[#94A3B8] block mt-2 italic">
                  *Características comportamentais sugeridas para a rotina do cargo; não configuram critérios eliminatórios se não previstos em edital.
                </span>
              </div>

              {/* 14. CTA DENTRO DA MINI PÁGINA */}
              <div className="bg-[#001D33] text-white p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-xl">
                <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block">
                  Preparação Especializada em Duque de Caxias
                </span>
                <h4 className="font-serif-heading text-xl sm:text-2xl font-black text-white">
                  Quer se preparar para esse concurso?
                </h4>
                <p className="text-sm text-[#E1E5E8]/90 max-w-xl mx-auto leading-relaxed">
                  "Comece sua preparação com uma estratégia direcionada para o seu objetivo."
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const cNome = activeConcurso.nome;
                      setActiveConcurso(null);
                      setFormData(prev => ({ ...prev, concurso: cNome }));
                      setTimeout(() => scrollToSection('inscricao'), 150);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-sm sm:text-base px-8 py-4 rounded-xl uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>FAZER MINHA INSCRIÇÃO</span>
                    <ArrowRight className="w-5 h-5 text-[#00223B]" />
                  </button>

                  <a
                    href={getWhatsAppUrl(activeConcurso.nome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm px-6 py-4 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* 18. FONTES E TRANSPARÊNCIA */}
              <div className="pt-4 border-t border-[#E1E5E8] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#94A3B8] gap-2">
                <span>"Informações sujeitas a alterações conforme edital e legislação vigente."</span>
                <span>Fonte: {activeConcurso.fonte}</span>
              </div>
            </div>
          </div>
        </div>
      )}

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
      <div className="bg-white p-8 flex justify-center">
              <div className="w-full max-w-[600px]">
                {/* RD STATION — PROVISÓRIO */}
                <RDStationForm
                  formId="caxias_lp_geral-6b17fb580118e7e46ef8"
                />
              </div>
            </div>
      
    </div>
  );
};