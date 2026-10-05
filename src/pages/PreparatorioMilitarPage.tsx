import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  CheckCircle2,
  Target,
  Clock,
  Award,
  BookOpen,
  X,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Calendar,
  GraduationCap,
  Users,
  FileText,
  Sparkles,
  Building2,
  TrendingUp,
  HeartHandshake,
  Compass,
  MessageCircle,
  FileCheck2,
  Check,
  PhoneCall,
  Laptop,
  Video,
  MonitorCheck
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { Link } from '../components/routing/RouterContext';
import {
  MILITARY_PREPARATORIES,
  CAREER_DIFFERENTIALS,
  MilitaryPreparatory
} from '../data/militaryData';
import { COURSES_DATA } from '../data/siteData';
import { WHATSAPP_NUMBER } from '../config/siteConfig';
import { RDStationForm } from '../components/rdstation/RDStationForm';

export const PreparatorioMilitarPage: React.FC = () => {
  const [selectedPreparatory, setSelectedPreparatory] = useState<MilitaryPreparatory | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPreparatory(null);
      }
    };

    if (selectedPreparatory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPreparatory]);

  // Rola para o topo do modal ao abrir
  useEffect(() => {
    if (selectedPreparatory && modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [selectedPreparatory]);

  const courseFaqs = COURSES_DATA['preparatorio-militar']?.faqs || [
    {
      question: 'A partir de qual idade o aluno pode iniciar o preparatório militar?',
      answer: 'Para as turmas de Colégio Naval e EPCAr, recebemos alunos a partir do 9º ano do Ensino Fundamental (14 a 15 anos). Para concursos de nível médio como ESA, EEAr e EsPCEx, alunos a partir de 16/17 anos já podem iniciar a preparação direcionada.'
    },
    {
      question: 'O curso oferece simulados nos moldes das bancas militares?',
      answer: 'Sim! Os simulados do Progressão reproduzem com rigor a folha de respostas oficial, pontuação com nota de corte, tempo estrito e estilo real de questões de cada concurso militar (Exército, Marinha e Aeronáutica).'
    },
    {
      question: 'Há orientação para as demais etapas do concurso (TAF e inspeção médica)?',
      answer: 'Sim, nossos alunos contam com orientações e palestras pedagógicas detalhando os índices exigidos no Teste de Aptidão Física (TAF), exames médicos e psicológicos de cada edital.'
    }
  ];

  // Helper para cor do status
  const getStatusBadge = (status: string, statusTipo?: string) => {
    const upper = status.toUpperCase();
    if (statusTipo === 'aberto' || upper.includes('ABERTA')) {
      return {
        bg: 'bg-emerald-600 text-white border-emerald-500',
        dot: 'bg-emerald-300 animate-pulse',
        label: status
      };
    }
    if (statusTipo === 'previsto' || upper.includes('AGUARDANDO') || upper.includes('PREVISTO')) {
      return {
        bg: 'bg-[#0289C6] text-white border-[#38B3E6]',
        dot: 'bg-white/80',
        label: status
      };
    }
    return {
      bg: 'bg-slate-700 text-white border-slate-600',
      dot: 'bg-slate-400',
      label: status
    };
  };

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC]">
      <SEO
        title="Preparatórios Militares em Duque de Caxias - ESA, EEAr, EsPCEx, AFA, EFOMM, Colégio Naval, EPCAR | Progressão"
        description="Conquiste sua vaga nas Forças Armadas: ESA, EEAr, EsPCEx, AFA, EFOMM, Colégio Naval, EPCAR e Monitorias de Português RM2 e EAGS. Tradição, simulados oficiais e alto índice de aprovação."
        canonicalPath="/cursos/preparatorio-militar"
      />

      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs
        items={[
          { label: 'Cursos' },
          { label: 'Preparatórios Militares' }
        ]}
      />

      {/* ============================================================ */}
      {/* 1. SEÇÃO HERO: IDENTIDADE VISUAL INSTITUCIONAL PROGRESSÃO */}
      {/* ============================================================ */}
      <section className="relative bg-[#00223B] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#015E96]/30">
        {/* Textura sutil e elegante de listras diagonais suaves e escuras oficial do Progressão */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.07) 0px, rgba(0, 0, 0, 0.07) 18px, transparent 18px, transparent 36px)'
          }}
        />

        {/* Gradiente radial decorativo */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center z-10">
          {/* Tag de identificação */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-6 border border-white/20 shadow-sm">
            <Shield className="w-4 h-4 text-[#FFBF00]" />
            <span>Tradição em Aprovações Militares desde 1995</span>
          </div>

          {/* H1 Principal conforme especificação */}
          <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-5 leading-tight">
            Preparatórios Militares
          </h1>

          {/* Subtítulo conforme especificação */}
          <p className="text-lg sm:text-2xl font-medium text-[#FFBF00] max-w-3xl mx-auto mb-5 leading-snug">
            Prepare-se para conquistar sua aprovação nas principais carreiras militares do Brasil.
          </p>

          {/* Breve descrição destacando a preparação direcionada */}
          <p className="text-sm sm:text-base text-[#E1E5E8]/90 max-w-3xl mx-auto leading-relaxed">
            O <strong className="text-white font-semibold">Curso Progressão Caxias</strong> oferece preparação de alta intensidade e rigor pedagógico direcionada para diferentes concursos e escolas militares das Forças Armadas: Marinha, Exército e Aeronáutica.
          </p>

          {/* Indicadores rápidos de autoridade */}
          <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-white">31+</span>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">Anos de Tradição</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-[#FFBF00]">100%</span>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">Bancas Oficiais</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-white">Milhares</span>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">De Alunos Fardados</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-[#FFBF00]">Simulados</span>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">Ranqueados no Padrão</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. GRADE RESPONSIVA DE CARDS PADRONIZADOS DOS PREPARATÓRIOS */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
            Nossas Turmas Especializadas
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
            Escolha Sua Carreira nas Forças Armadas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#0A131F]/70 leading-relaxed">
            Consulte abaixo todos os concursos militares atendidos pelo Progressão. Clique em <strong className="text-[#004B7C]">"Saiba mais"</strong> para visualizar a mini página com todos os detalhes do edital, remuneração, disciplinas e metodologia de preparação.
          </p>
        </div>

        {/* Grid Responsivo de Cards Padronizados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MILITARY_PREPARATORIES.map((prep) => {
            const badge = getStatusBadge(prep.status, prep.statusTipo);

            return (
              <div
                key={prep.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* 1. IMAGEM DO CARD COM BADGES DE STATUS E ÓRGÃO */}
                <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-[#00223B] shrink-0">
                  <img
                    src={prep.imagem}
                    alt={`${prep.nome} - ${prep.subtitulo}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00223B]/85 via-[#00223B]/30 to-transparent pointer-events-none" />

                  {/* Status do Edital no Topo Direito (Fácil Edição) */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md border ${badge.bg}`}>
                      <span className={`w-2 h-2 rounded-full ${badge.dot}`} />
                      <span>{badge.label}</span>
                    </span>
                  </div>

                  {/* Nome e Subtítulo sobrepostos ao rodapé da imagem */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-md">
                      {prep.nome}
                    </h3>
                    <span className="text-[11px] font-bold text-[#FFBF00] uppercase tracking-wider block mb-0.5">
                      {prep.subtitulo}
                    </span>

                  </div>
                </div>

                {/* CONTEÚDO PRINCIPAL DO CARD */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-3">
                    {/* Órgão Responsável */}
                    <div className="flex items-center gap-2 text-xs text-[#0A131F]/80">
                      <Building2 className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span className="line-clamp-1">
                        <strong className="text-[#00223B] font-semibold">Órgão: </strong>
                        {prep.orgao}
                      </span>
                    </div>

                    {/* Vagas Disponíveis */}
                    <div className="flex items-center gap-2 text-xs text-[#0A131F]/80">
                      <Users className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span className="line-clamp-1">
                        <strong className="text-[#00223B] font-semibold">Vagas: </strong>
                        {prep.vagas}
                      </span>
                    </div>

                    {/* Escolaridade / Requisito */}
                    <div className="flex items-center gap-2 text-xs text-[#0A131F]/80">
                      <GraduationCap className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span className="line-clamp-1">
                        <strong className="text-[#00223B] font-semibold">Escolaridade: </strong>
                        {prep.escolaridade}
                      </span>
                    </div>
                  </div>

                  {/* BOTÃO "SAIBA MAIS" (ABRE A MINI PÁGINA/MODAL COMPLETO) */}
                  <button
                    type="button"
                    onClick={() => setSelectedPreparatory(prep)}
                    aria-label={`Saiba mais sobre o concurso ${prep.nome}`}
                    className="w-full mt-1 inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 text-[#FFBF00] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. MINI PÁGINA / MODAL PADRONIZADO (SAIBA MAIS) */}
      {/* ============================================================ */}
      {selectedPreparatory && (
        <div
          className="fixed inset-0 z-50 bg-[#001424]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn"
          onClick={() => setSelectedPreparatory(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-preparatory-title"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden border border-[#E1E5E8] relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CABEÇALHO FIXO DO MODAL */}
            <div className="bg-[#00223B] text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-[#015E96]/40 shrink-0">
              <div className="pr-4">
                <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block">
                  {selectedPreparatory.subtitulo}
                </span>
                <h2
                  id="modal-preparatory-title"
                  className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight uppercase"
                >
                  {selectedPreparatory.nome}
                </h2>
              </div>

              {/* Botão Fechar no Cabeçalho */}
              <button
                type="button"
                onClick={() => setSelectedPreparatory(null)}
                aria-label="Fechar detalhes do preparatório"
                className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer shrink-0 border border-white/15"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* ÁREA COM SCROLL VERTICAL INTERNO COM AS 10 SEÇÕES OBRIGATÓRIAS */}
            <div
              ref={modalContentRef}
              className="overflow-y-auto p-5 sm:p-8 space-y-10 flex-1 text-[#0A131F]"
            >
              {/* ============================================================ */}
              {/* SEÇÃO 1: BANNER DO EDITAL */}
              {/* ============================================================ */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E1E5E8] bg-[#00223B] text-white">
                <div className="relative h-48 sm:h-64 w-full">
                  <img
                    src={selectedPreparatory.imagem}
                    alt={`${selectedPreparatory.nome} - Edital Oficial`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D33] via-[#001D33]/70 to-transparent" />

                  {/* Badge de Status no Banner */}
                  <div className="absolute top-4 right-4 z-10">
                    {(() => {
                      const b = getStatusBadge(selectedPreparatory.status, selectedPreparatory.statusTipo);
                      return (
                        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg border ${b.bg}`}>
                          <span className={`w-2 h-2 rounded-full ${b.dot}`} />
                          <span>{b.label}</span>
                        </span>
                      );
                    })()}
                  </div>

                  {/* Nome e Órgão */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block mb-1">
                      {selectedPreparatory.orgao}
                    </span>
                    <h3 className="font-serif-heading text-xl sm:text-3xl font-black text-white uppercase leading-tight">
                      {selectedPreparatory.nome}
                    </h3>
                  </div>
                </div>

                {/* Grade Informativa do Banner do Edital */}
                <div className="p-4 sm:p-6 bg-[#001D33] border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div>
                    <span className="text-[#94A3B8] font-semibold uppercase text-[10px] block mb-0.5">
                      Edital
                    </span>
                    <span className="text-white font-bold block line-clamp-2">
                      {selectedPreparatory.edital}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] font-semibold uppercase text-[10px] block mb-0.5">
                      Inscrições
                    </span>
                    <span className="text-white font-bold block">
                      {selectedPreparatory.inscricoes.inicio} até {selectedPreparatory.inscricoes.fim}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] font-semibold uppercase text-[10px] block mb-0.5">
                      Número de Vagas
                    </span>
                    <span className="text-[#FFBF00] font-bold block">
                      {selectedPreparatory.vagas}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#94A3B8] font-semibold uppercase text-[10px] block mb-0.5">
                      Data da Prova
                    </span>
                    <span className="text-white font-bold block">
                      {selectedPreparatory.dataProva}
                    </span>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* SEÇÃO 2: O QUE É? (SOBRE A CARREIRA E CONCURSO) */}
              {/* ============================================================ */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <Shield className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    O Que É o Concurso?
                  </h3>
                </div>
                <div className="bg-[#F8FAFC] p-5 rounded-2xl border border-[#E1E5E8] leading-relaxed text-sm sm:text-base text-[#0A131F]/80">
                  <p>{selectedPreparatory.sobre}</p>
                </div>
              </div>

              {/* ============================================================ */}
              {/* SEÇÃO 3: INFORMAÇÕES GERAIS (GRADE COMPLETA COM 8 CAMPOS) */}
              {/* ============================================================ */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <Target className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Informações Gerais e Requisitos Oficiais
                  </h3>
                </div>

                <div className="bg-[#F8FAFC] rounded-2xl border border-[#E1E5E8] p-5 sm:p-7 shadow-xs">
                  <ul className="space-y-3.5 text-sm sm:text-base text-[#1E293B]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                      <div className="leading-relaxed">
                        <strong className="text-[#00223B] font-bold">{selectedPreparatory.orgaoLabel || 'Órgão'}:</strong>{' '}
                        <span className="text-[#334155]">{selectedPreparatory.orgao}</span>
                      </div>
                    </li>
                    {selectedPreparatory.instituicao && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">Instituição:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.instituicao}</span>
                        </div>
                      </li>
                    )}
                    {selectedPreparatory.concurso && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">Concurso:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.concurso}</span>
                        </div>
                      </li>
                    )}
                    <li className="flex items-start gap-3">
                      <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                      <div className="leading-relaxed">
                        <strong className="text-[#00223B] font-bold">{selectedPreparatory.ultimoEditalLabel || 'Último edital'}:</strong>{' '}
                        <span className="text-[#334155]">{selectedPreparatory.ultimoEdital || selectedPreparatory.edital}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                      <div className="leading-relaxed">
                        <strong className="text-[#00223B] font-bold">Banca organizadora:</strong>{' '}
                        <span className="text-[#334155]">{selectedPreparatory.banca || 'Comissão própria militar.'}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                      <div className="leading-relaxed">
                        <strong className="text-[#00223B] font-bold">Número de vagas:</strong>{' '}
                        <span className="text-[#334155] font-semibold">{selectedPreparatory.vagas}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                      <div className="leading-relaxed">
                        <strong className="text-[#00223B] font-bold">Escolaridade:</strong>{' '}
                        <span className="text-[#334155]">{selectedPreparatory.escolaridade}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                      <div className="leading-relaxed">
                        <strong className="text-[#00223B] font-bold">Idade:</strong>{' '}
                        <span className="text-[#334155]">{selectedPreparatory.idade}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                      <div className="leading-relaxed">
                        <strong className="text-[#00223B] font-bold">Duração:</strong>{' '}
                        <span className="text-[#334155]">{selectedPreparatory.duracao}</span>
                      </div>
                    </li>
                    {selectedPreparatory.areas && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">{selectedPreparatory.areasLabel || 'Áreas'}:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.areas}</span>
                        </div>
                      </li>
                    )}
                    {selectedPreparatory.carreiras && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">{selectedPreparatory.carreirasLabel || 'Carreiras'}:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.carreiras}</span>
                        </div>
                      </li>
                    )}
                    {selectedPreparatory.cargoAposFormacao && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">Cargo após a formação:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.cargoAposFormacao}</span>
                        </div>
                      </li>
                    )}
                    {selectedPreparatory.atuacaoProfissional && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">Atuação profissional:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.atuacaoProfissional}</span>
                        </div>
                      </li>
                    )}
                    {selectedPreparatory.nacionalidade && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">Nacionalidade:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.nacionalidade}</span>
                        </div>
                      </li>
                    )}
                    {selectedPreparatory.sexo && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">Sexo / Critério:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.sexo}</span>
                        </div>
                      </li>
                    )}
                    {selectedPreparatory.regime && (
                      <li className="flex items-start gap-3">
                        <span className="text-[#0289C6] font-bold text-lg leading-none mt-0.5 select-none">•</span>
                        <div className="leading-relaxed">
                          <strong className="text-[#00223B] font-bold">Regime:</strong>{' '}
                          <span className="text-[#334155]">{selectedPreparatory.regime}</span>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* ============================================================ */}
              {/* SEÇÃO 4: REMUNERAÇÃO (DESTAQUE FORMATION & FORMADO) */}
              {/* ============================================================ */}
              <div className="bg-[#00223B] text-white p-6 sm:p-8 rounded-2xl border border-[#015E96]/50 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-[#FFBF00] flex items-center justify-center text-[#00223B] shrink-0 font-bold shadow-md">
                    <DollarSign className="w-5 h-5 text-[#00223B]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block">
                      Valores e Benefícios Financeiros
                    </span>
                    <h3 className="font-serif-heading text-lg sm:text-2xl font-black text-white uppercase">
                      Estrutura de Remuneração da Carreira
                    </h3>
                  </div>
                </div>

                <div className="w-full">
                  {/* Remuneração */}
                  <div className="bg-white/10 p-5 sm:p-6 rounded-xl border border-white/15">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#FFBF00] uppercase tracking-wider mb-2">
                      <Award className="w-4 h-4 text-[#FFBF00]" />
                      <span>{selectedPreparatory.remuneracaoModalLabel || 'Remuneração'}</span>
                    </div>
                    <p className="text-sm sm:text-base text-[#E1E5E8] leading-relaxed font-semibold">
                      {selectedPreparatory.remuneracaoFormado}
                    </p>
                  </div>
                </div>

                {selectedPreparatory.fonte && (
                  <div className="mt-5 pt-4 border-t border-white/15 text-xs text-[#E1E5E8]/70 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#FFBF00] shrink-0" />
                    <span><strong>Fonte Legal:</strong> {selectedPreparatory.fonte}</span>
                  </div>
                )}
              </div>

              {/* ============================================================ */}
              {/* SEÇÃO 5: BENEFÍCIOS */}
              {/* ============================================================ */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <HeartHandshake className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Benefícios da Carreira e Formação Militar
                  </h3>
                </div>

                <div className={selectedPreparatory.beneficios.length > 1 ? "grid grid-cols-1 sm:grid-cols-2 gap-3.5" : "flex flex-col gap-3.5"}>
                  {selectedPreparatory.beneficios.map((ben, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E1E5E8] flex items-start gap-3 hover:border-[#0289C6]/40 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#004B7C]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#004B7C]">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-[#0A131F]/85 font-medium leading-relaxed">
                        {ben}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ============================================================ */}
              {/* SEÇÃO 6: DISCIPLINAS COBRADAS */}
              {/* ============================================================ */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <BookOpen className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Disciplinas Cobradas no Processo Seletivo
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#0A131F]/70 mb-3">
                  Conteúdo programático oficial abordado com profundidade e listas de exercícios direcionadas:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPreparatory.disciplinas.map((disc, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-[#E1E5E8] flex items-start gap-3 hover:border-[#0289C6]/50 hover:bg-white transition-all shadow-2xs"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#004B7C] text-[#FFBF00] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-[#0A131F]/90 leading-snug font-medium">
                        {disc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ============================================================ */}
              {/* SEÇÃO 7: ETAPAS DO CONCURSO (TIMELINE) */}
              {/* ============================================================ */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <FileCheck2 className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Etapas do Concurso (Linha do Tempo)
                  </h3>
                </div>

                {/* Resumo Oficial das Etapas */}
                <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E1E5E8] mb-6">
                  <p className="text-xs sm:text-sm text-[#0A131F]/85 font-medium leading-relaxed">
                    <strong className="text-[#00223B]">Etapas:</strong>{' '}
                    {selectedPreparatory.etapasResumo || selectedPreparatory.etapas.map(e => e.titulo.replace(/^\d+ª\s*Etapa\s*-\s*/, '')).join(', ') + '.'}
                  </p>
                </div>

                <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#015E96]/30">
                  {selectedPreparatory.etapas.map((etapa, idx) => (
                    <div key={idx} className="relative flex flex-col items-start">
                      {/* Nó da Timeline */}
                      <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full bg-[#004B7C] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                        {idx + 1}
                      </div>

                      <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8] w-full">
                        <h4 className="font-bold text-xs sm:text-sm text-[#00223B] mb-1">
                          {etapa.titulo}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed">
                          {etapa.descricao}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ============================================================ */}
              {/* SEÇÃO 8: PREPARAÇÃO PROGRESSÃO */}
              {/* ============================================================ */}
              <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-6 sm:p-8 rounded-2xl border border-[#015E96]/40 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                  <div>
                    <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-[11px] px-3 py-1 rounded-md uppercase tracking-wider shadow-sm mb-2">
                      Início Imediato!
                    </span>
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-white uppercase">
                      Preparação Progressão Caxias
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E1E5E8]/85 mt-1">
                      Carga Horária Completa e Estratégia de Aprovação Militar
                    </p>
                  </div>

                  <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 text-center shrink-0">
                    <span className="text-[10px] text-[#FFBF00] font-bold uppercase block">Metodologia</span>
                    <span className="text-xs font-bold text-white">Bancas Oficiais</span>
                  </div>
                </div>

                {/* Grade de Horários e Carga Horária */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-6 text-xs">
                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/15">
                    <span className="text-[#FFBF00] font-bold block mb-1">Carga Horária</span>
                    <span className="text-white font-medium">{selectedPreparatory.preparacao.cargaHoraria}</span>
                  </div>
                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/15">
                    <span className="text-[#FFBF00] font-bold block mb-1">Encontros</span>
                    <span className="text-white font-medium">{selectedPreparatory.preparacao.encontros}</span>
                  </div>
                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/15">
                    <span className="text-[#FFBF00] font-bold block mb-1">Turno Manhã</span>
                    <span className="text-white font-medium">{selectedPreparatory.preparacao.manha}</span>
                  </div>
                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/15">
                    <span className="text-[#FFBF00] font-bold block mb-1">Turno Tarde</span>
                    <span className="text-white font-medium">{selectedPreparatory.preparacao.tarde}</span>
                  </div>
                  <div className="bg-white/10 p-3.5 rounded-xl border border-white/15 sm:col-span-2 lg:col-span-1">
                    <span className="text-[#FFBF00] font-bold block mb-1">Turno Noite</span>
                    <span className="text-white font-medium">{selectedPreparatory.preparacao.noite}</span>
                  </div>
                </div>

                {/* Modalidades de Estudo */}
                <div>
                  <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block mb-3">
                    Modalidades de Ensino Disponíveis:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedPreparatory.preparacao.modalidades.map((mod, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 p-3.5 rounded-xl border border-white/15 flex items-center gap-2.5"
                      >
                        {idx === 0 && <Building2 className="w-4 h-4 text-[#FFBF00] shrink-0" />}
                        {idx === 1 && <Video className="w-4 h-4 text-[#FFBF00] shrink-0" />}
                        {idx === 2 && <Laptop className="w-4 h-4 text-[#FFBF00] shrink-0" />}
                        <span className="text-xs font-semibold text-white">
                          {mod}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* SEÇÃO 10: CTA FINAL DENTRO DO MODAL */}
              {/* ============================================================ */}
              <div className="bg-[#F0F7FD] border border-[#BAE6FD] p-6 sm:p-8 rounded-2xl text-center space-y-4">
                <div className="max-w-2xl mx-auto">
                  <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
                    Sua Farda Começa Aqui
                  </span>
                  <h4 className="font-serif-heading text-xl sm:text-2xl font-black text-[#00223B] uppercase">
                    Quer se preparar para esse concurso?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0A131F]/75 mt-2 leading-relaxed">
                    Fale agora com nossos consultores pedagógicos do Progressão Caxias para consultar valores de mensalidade, materiais didáticos inclusos e garantir sua vaga.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de me preparar para o concurso ${selectedPreparatory.nome} (${selectedPreparatory.subtitulo}) no Curso Progressão Caxias. Como posso fazer minha matrícula?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm py-3 px-6 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <span>QUERO ME PREPARAR</span>
                    <ArrowRight className="w-4 h-4 text-[#00223B]" />
                  </a>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de tirar dúvidas com a equipe do Curso Progressão Caxias sobre o preparatório ${selectedPreparatory.nome}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FFBF00]" />
                    <span>FALAR COM O PROGRESSÃO</span>
                  </a>
                </div>
              </div>
            </div>

            {/* RODAPÉ DO MODAL COM BOTÕES DE AÇÃO */}
            <div className="bg-[#F8FAFC] px-5 sm:px-8 py-4 border-t border-[#E1E5E8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              {/* Botão Voltar */}
              <button
                type="button"
                onClick={() => setSelectedPreparatory(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#CBD5E1] text-[#0A131F] hover:bg-[#E2E8F0] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#004B7C]" />
                <span>Voltar aos Preparatórios</span>
              </button>

              {/* Ações Diretas */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre turmas e matrículas para o preparatório ${selectedPreparatory.nome} no Curso Progressão Caxias.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar no WhatsApp</span>
                </a>

                <Link
                  href="/contato"
                  onClick={() => setSelectedPreparatory(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>Ver Contato & Endereço</span>
                  <ArrowRight className="w-4 h-4 text-[#FFBF00]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. SEÇÃO: POR QUE ESCOLHER A CARREIRA MILITAR? */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
              Estabilidade, Honra e Futuro
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
              Por que ingressar nas Forças Armadas Brasileiras?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#0A131F]/70 leading-relaxed">
              A carreira militar oferece segurança profissional ímpar, independência financeira desde jovem, plano de saúde integral para a família e a oportunidade de servir à pátria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_DIFFERENTIALS.map((diff, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E1E5E8] hover:border-[#0289C6]/40 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#004B7C] flex items-center justify-center text-white mb-4 shadow-sm">
                  {idx === 0 && <GraduationCap className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 1 && <Shield className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 2 && <TrendingUp className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 3 && <HeartHandshake className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 4 && <Award className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 5 && <Compass className="w-5 h-5 text-[#FFBF00]" />}
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-[#00223B] mb-2">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0A131F]/80 leading-relaxed mb-3">
                  {diff.description}
                </p>
                <div className="text-[11px] text-[#004B7C] font-semibold bg-white p-2.5 rounded-lg border border-[#E1E5E8]">
                  {diff.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. METODOLOGIA DE APROVAÇÃO MILITAR DO PROGRESSÃO */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#00223B] text-white px-4 sm:px-6 lg:px-8 border-t border-[#015E96]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#001424]">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
                alt="Turma militar em treinamento e resolução de simulados"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#FFBF00] uppercase tracking-wider block mb-1">
                  Método Comprovado em Caxias
                </span>
                <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  Como Conduzimos Nossos Alunos à Aprovação
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#E1E5E8]/85 leading-relaxed">
                  Não preparamos apenas para fazer provas. Treinamos cada candidato para o ritmo, a gestão de tempo sob pressão e a precisão técnica exigidos pelas bancas mais difíceis do Brasil.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                    Simulados Cronometrados
                  </h4>
                  <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                    Reprodução idêntica do tempo, das regras de cartão de respostas e das notas de corte das provas oficiais.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                    Foco na Banca Específica
                  </h4>
                  <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                    Apostilas e listas de exercícios mapeadas de acordo com as peculiaridades de cada força armada.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                    Monitoria Individual
                  </h4>
                  <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                    Plantões de dúvidas presenciais e online para sanar lacunas conceituais antes de cada simulado.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                    Professores Especialistas
                  </h4>
                  <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                    Corpo docente veterano, focado no padrão de exigência das academias e escolas militares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. PERGUNTAS FREQUENTES (FAQ) */}
      {/* ============================================================ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <AccordionFAQ items={courseFaqs} title="DÚVIDAS FREQUENTES SOBRE O PREPARATÓRIO MILITAR" />
      </section>

      {/* ============================================================ */}
      {/* 7. SEÇÃO CTA FINAL: MATRÍCULAS E INFORMAÇÕES */}
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