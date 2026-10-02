import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight, Shield, GraduationCap, BookOpen, School,
  CheckCircle2, Clock, Users, UserCheck, TrendingUp, Target,
  ChevronRight, ChevronLeft, Brain, Sparkles, Compass,
  ClipboardCheck, Award
} from 'lucide-react';
import { Link } from '../components/routing/RouterContext';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { RDStationForm } from '../components/rdstation/RDStationForm';
import { HeroBannerCarousel } from '../components/common/HeroBannerCarousel';
import { ResultsAndTestimonialsSection } from '../components/common/ResultsAndTestimonialsSection';
import { NossosCursosETurmasSection } from '../components/common/NossosCursosETurmasSection';
import { VideoShowcaseSection } from '../components/common/VideoShowcaseSection';
import { MateriaisDidaticosSection } from '../components/common/MateriaisDidaticosSection';
import {
  COURSES_DATA,
  DIFFERENTIALS_DATA,
  GENERAL_FAQS
} from '../data/siteData';



const OBJECTIVE_CARDS = [
  {
    id: 'militar',
    title: 'Preparatório Militar',
    description: 'Treinamento intensivo focado nas bancas da EsPCEx, AFA, Colégio Naval, EPCAr, ESA e EEAr.',
    href: '/cursos/preparatorio-militar',
    image: '/assets/david-lopes-eags.jpeg',
  },
  {
    id: 'colegio',
    title: 'Colégio',
    description: 'Ensino Fundamental II e Ensino Médio com formação acadêmica forte e foco no protagonismo juvenil.',
    href: '/colegio',
    image: '/assets/colegio-I.webp',
  },
  {
    id: 'vestibular',
    title: 'Pré-Vestibular & ENEM',
    description: 'Preparação integrada com metodologia TRI, Redação Nota 1000 e foco no vestibular da UERJ.',
    href: '/cursos/pre-vestibular',
    image: '/assets/img-pre-vestibular.jpeg',
  },
  {
    id: 'concursos',
    title: 'Concursos Públicos',
    description: 'Habilitações práticas e profissionalizantes com rápida inserção no mercado de trabalho e indústrias.',
    href: '/cursos/concursos',
    image: '/assets/pmerj.jpeg',
  },
];

export const HomePage: React.FC = () => {


  // Estados do Carrossel de Objetivos (4 cards fixos no desktop com botões passadores)
  const [objectiveIndex, setObjectiveIndex] = useState(0);
  const [visibleObjectiveCards, setVisibleObjectiveCards] = useState(4);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setVisibleObjectiveCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleObjectiveCards(2);
      } else {
        setVisibleObjectiveCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxObjectiveIndex = Math.max(0, OBJECTIVE_CARDS.length - visibleObjectiveCards);

  useEffect(() => {
    if (objectiveIndex > maxObjectiveIndex) {
      setObjectiveIndex(maxObjectiveIndex);
    }
  }, [maxObjectiveIndex, objectiveIndex]);

  const handlePrevObjective = () => {
    setObjectiveIndex((prev) => (prev > 0 ? prev - 1 : maxObjectiveIndex));
  };

  const handleNextObjective = () => {
    setObjectiveIndex((prev) => (prev < maxObjectiveIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) {
      handleNextObjective();
    } else if (distance < -50) {
      handlePrevObjective();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };


  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Início - Colégio e Cursos Preparatórios"
        description="Sua jornada rumo à aprovação começa aqui. O Curso Progressão Caxias oferece Colégio e Preparatórios Militares, ENEM, Vestibulares e Concursos em Duque de Caxias."
        canonicalPath="/"
      />
      {/* 1. HERO BANNERS CAROUSEL (RESPONSIVO COM OS 3 BANNERS DO PROGRESSÃO) */}
      <HeroBannerCarousel />


      {/* 2. OBJETIVO DO ALUNO (Carrossel com 4 cards fixos e botões passadores) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" id="objetivos">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
            Escolha Sua Preparação
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mt-1 mb-3">
            QUAL VAGA VOCÊ VAI CONQUISTAR?
          </h2>
          <p className="text-sm sm:text-base text-[#0A131F]/70 max-w-2xl">
            Descubra a turma feita pro formato exato da prova que você vai prestar. Sem enrolação
          </p>
        </div>

        {/* Container do Carrossel com 4 cards fixos e botões passadores */}
        <div
          className="relative px-2 sm:px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botão Passador Anterior */}
          <button
            onClick={handlePrevObjective}
            aria-label="Voltar card anterior"
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-xl border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Botão Passador Próximo */}
          <button
            onClick={handleNextObjective}
            aria-label="Avançar próximo card"
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-xl border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Trilho de Overflow dos Cards (4 cards fixos no desktop) */}
          <div className="overflow-hidden py-3 px-1 -mx-2 sm:-mx-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${objectiveIndex * (100 / visibleObjectiveCards)}%)`,
              }}
            >
              {OBJECTIVE_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="px-2.5 sm:px-3 shrink-0"
                  style={{ width: `${100 / visibleObjectiveCards}%` }}
                >
                  <Link
                    href={card.href}
                    className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-5 sm:p-6 border border-[#E1E5E8]/60 hover:border-[#0289C6] block"
                  >
                    {/* Background Image: Fotos dos Alunos */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Degradê escuro para alto contraste e legibilidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/95 via-[#0A131F]/60 to-transparent transition-opacity duration-300 group-hover:via-[#0A131F]/50" />

                    {/* Conteúdo: Título, Parágrafo Descritivo e Saiba Mais */}
                    <div className="relative z-10 flex flex-col gap-2.5">
                      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#68C5DB] transition-colors leading-snug drop-shadow-sm">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-2">
                        {card.description}
                      </p>

                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white group-hover:text-[#68C5DB] transition-colors pt-2.5 border-t border-white/20 mt-1">
                        <span>Saiba Mais</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Passadores / Indicadores de Posição Inferiores */}
          {maxObjectiveIndex > 0 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: maxObjectiveIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setObjectiveIndex(idx)}
                  aria-label={`Ir para grupo ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${objectiveIndex === idx
                    ? 'w-8 bg-[#004B7C]'
                    : 'w-2.5 bg-[#E1E5E8] hover:bg-[#0289C6]/60'
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SEÇÃO SOBRE O COLÉGIO PROGRESSÃO COM CARDS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" id="sobre-o-colegio">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
            <School className="w-4 h-4 text-[#0289C6]" />
            <span>Colégio Progressão • Educação Básica</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mb-3">
            FORMAÇÃO DE EXCELÊNCIA
          </h2>
          <p className="text-sm sm:text-base text-[#0A131F]/70 max-w-2xl leading-relaxed">
            Rigor acadêmico, acolhimento humano e preparação contínua. Uma proposta pedagógica completa em Duque de Caxias, pensada para o futuro dos seus filhos.          </p>
        </div>

        {/* Cards dos Segmentos de Ensino */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Ensino Fundamental II */}
          <div className="bg-white rounded-3xl border border-[#E1E5E8] hover:border-[#0289C6]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Imagem com Badge */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <img
                  src="/assets/img-colegio-2.avif"
                  alt="Estudantes do Ensino Fundamental II no Colégio Progressão"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/80 via-[#0A131F]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004B7C] text-white text-xs font-bold shadow-md">
                    <Compass className="w-3.5 h-3.5 text-[#0289C6]" />
                    <span>6º ao 9º Ano</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0289C6] block">
                    Anos Finais
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                    Ensino Fundamental II
                  </h3>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed">
                  Desenvolvimento da autonomia, hábitos sólidos de estudo e base acadêmica forte para os desafios futuros.
                </p>

                {/* Destaques com Check */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Professores especialistas por disciplina</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Rotina de estudos e gestão de tarefas</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Preparação para escolas técnicas.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Plantões de dúvidas e reforço no contraturno</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ação / Rodapé do Card */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#E1E5E8]/60 mt-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0289C6]">
                6º ao 9º ano
              </span>
              <Link
                href="/colegio/fundamental-2"
                className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#015E96] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 group/btn"
              >
                <span>Conhecer Fundamental II</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Ensino Médio */}
          <div className="bg-white rounded-3xl border border-[#E1E5E8] hover:border-[#0289C6]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Imagem com Badge */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <img
                  src="/assets/img-ensino-medio.avif"
                  alt="Estudantes do Ensino Médio no Colégio Progressão"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/80 via-[#0A131F]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0289C6] text-white text-xs font-bold shadow-md">
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                    <span>1º ao 3º Ano</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0289C6] block">
                    Terceirão & Vestibulares
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                    Ensino Médio Regular
                  </h3>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed">
                  Preparação intensiva para ENEM, UERJ e concursos militares, com foco em alto rendimento e aprovação.
                </p>

                {/* Destaques com Check */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Simulados periódicos com padrão oficial e TRI</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Laboratório de Redação com correções individuais</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Itinerários formativos e orientação vocacional</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Terceirão focado em revisão e notas de corte</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ação / Rodapé do Card */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#E1E5E8]/60 mt-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0289C6]">
                1º ao 3º ano
              </span>
              <Link
                href="/colegio/ensino-medio"
                className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#015E96] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 group/btn"
              >
                <span>Conhecer Ensino Médio</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS E DEPOIMENTOS */}
      <ResultsAndTestimonialsSection />

      {/* VÍDEOS INSTITUCIONAL E DEPOIMENTOS */}
      <VideoShowcaseSection />

      {/* NOSSOS CURSOS E TURMAS (PRESENCIAL E ONLINE) */}
      <NossosCursosETurmasSection />

      {/* SEÇÃO — MATERIAIS DIDÁTICOS (BANNER + CARROSSEL) */}
      <MateriaisDidaticosSection />

      {/* 5. NOSSOS PILARES (6 Blocos Institucionais) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" id="nossos-pilares">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#0289C6]" />
            <span>Nossos Pilares</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#004B7C] tracking-tight mb-4">
            Por que escolher o Progressão?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#0A131F]/70 max-w-2xl leading-relaxed">
            Uma estrutura séria, sem distração, pensada pra transformar dedicação em aprovação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {DIFFERENTIALS_DATA.map((diff) => {
            const renderIcon = () => {
              switch (diff.icon) {
                case 'GraduationCap':
                  return <GraduationCap className="w-5 h-5 text-[#0289C6] group-hover:text-white transition-colors" />;
                case 'BookOpen':
                  return <BookOpen className="w-5 h-5 text-[#0289C6] group-hover:text-white transition-colors" />;
                case 'ClipboardCheck':
                  return <ClipboardCheck className="w-5 h-5 text-[#0289C6] group-hover:text-white transition-colors" />;
                case 'UserCheck':
                  return <UserCheck className="w-5 h-5 text-[#0289C6] group-hover:text-white transition-colors" />;
                case 'TrendingUp':
                  return <TrendingUp className="w-5 h-5 text-[#0289C6] group-hover:text-white transition-colors" />;
                case 'Target':
                  return <Target className="w-5 h-5 text-[#0289C6] group-hover:text-white transition-colors" />;
                default:
                  return <Shield className="w-5 h-5 text-[#0289C6] group-hover:text-white transition-colors" />;
              }
            };

            return (
              <div
                key={diff.id}
                className="bg-white p-7 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E1E5E8] hover:border-[#0289C6]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  {/* Top: Ícone sutil + Identificador do Pilar */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#004B7C]/10 border border-[#004B7C]/15 group-hover:bg-[#004B7C] flex items-center justify-center transition-colors duration-300 shadow-sm">
                      {renderIcon()}
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#0289C6] px-2.5 py-1 rounded-full bg-[#0289C6]/10">
                      Pilar {diff.pilarNumber}
                    </span>
                  </div>

                  {/* Título do Pilar */}
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#004B7C] group-hover:text-[#013558] transition-colors mb-2.5">
                    {diff.title}
                  </h3>

                  {/* Texto Explicativo */}
                  <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed">
                    {diff.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 4. FAQ ACCORDION SECTION */}
      <section className="py-16 sm:py-20 bg-[#E1E5E8]/30 border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <AccordionFAQ items={GENERAL_FAQS} />
      </section>

      <div className="w-full flex justify-center px-4">
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
