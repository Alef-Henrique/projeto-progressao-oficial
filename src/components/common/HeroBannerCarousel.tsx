import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from '../routing/RouterContext';

interface HeroBannerCarouselProps {
  onBannerClick?: (bannerIndex: number) => void;
}

export const HeroBannerCarousel: React.FC<HeroBannerCarouselProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch Swipe for mobile/tablet
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalSlides = 3;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Autoplay de 6.5s, pausando ao interagir
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Swipe Gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Categorias do Banner 2
  const banner2Categories = [
    {
      id: 'colegio',
      title: 'COLÉGIO',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
      alt: 'Aluno do Colégio em sala de aula com caderno e uniforme',
      href: '/colegio',
    },
    {
      id: 'pre-vest',
      title: 'PRÉ-VEST',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      alt: 'Aluno estudando focado para ENEM e UERJ',
      href: '/cursos/pre-vestibular',
    },
    {
      id: 'militar',
      title: 'MILITAR',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
      alt: 'Aluno fardado em preparação militar com disciplina',
      href: '/cursos/preparatorio-militar',
    },
    {
      id: 'concursos',
      title: 'CONCURSOS',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
      alt: 'Aprovado em concursos públicos civis e policiais',
      href: '/cursos/concursos',
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#00223B] select-none border-b border-white/10"
      aria-label="Destaques e Banners da Página Inicial"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Textura sutil de listras diagonais fiel à identidade visual militar/institucional */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 18px, transparent 18px, transparent 36px)'
        }}
      />

      {/* CONTAINER PRINCIPAL DOS SLIDES */}
      <div className="relative w-full min-h-[520px] xs:min-h-[550px] sm:min-h-[580px] md:min-h-[480px] lg:min-h-[540px] xl:min-h-[600px] flex items-center">
        
        {/* ============================================================ */}
        {/* SLIDE 1: 31 ANOS APROVANDO EM CAXIAS - DESDE 1995 */}
        {/* ============================================================ */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 0 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={currentSlide !== 0}
        >
          {/* LAYOUT DESKTOP & TABLET (HORIZONTAL ~1400x600) */}
          <div className="hidden md:flex w-full h-full relative items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* LADO ESQUERDO: TEXTO E SELO */}
            <div className="w-[52%] lg:w-[48%] xl:w-[45%] flex flex-col justify-center py-10 lg:py-16 z-20">
              <div className="flex flex-col items-start leading-[0.95] tracking-tight font-black uppercase text-left">
                <span className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight drop-shadow-md">
                  31 ANOS
                </span>
                <span className="text-[#FFBF00] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight my-1.5 lg:my-2.5 drop-shadow-md">
                  APROVANDO
                </span>
                <span className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight drop-shadow-md">
                  EM CAXIAS
                </span>
              </div>

              {/* SELO DESDE 1995 */}
              <div className="mt-5 sm:mt-6 lg:mt-8">
                <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-xs sm:text-sm lg:text-base px-4 lg:px-5 py-1.5 lg:py-2 rounded uppercase tracking-wider shadow-md">
                  DESDE 1995
                </span>
              </div>
            </div>

            {/* LADO DIREITO: FOTO DOS ALUNOS COM CORTE DIAGONAL DINÂMICO */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] lg:w-[58%] xl:w-[60%] h-full z-10 overflow-hidden [clip-path:polygon(14%_0,_100%_0,_100%_100%,_0%_100%)]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
                alt="Alunos da unidade Caxias uniformizados e focados na preparação acadêmica"
                className="w-full h-full object-cover object-[center_30%]"
                loading="eager"
              />
              {/* Gradiente suave na borda esquerda para integração perfeita com o fundo azul */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#00223B] via-[#00223B]/40 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* LAYOUT MOBILE (VERTICAL RESPONSIVO, SEM CORTES, PARA 360px - 767px) */}
          <div className="flex md:hidden flex-col w-full h-full justify-center px-4 sm:px-6 py-8 sm:py-10 z-10">
            {/* Foto dos alunos no topo */}
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] max-h-64 sm:max-h-72 overflow-hidden rounded-2xl shadow-xl relative border border-white/10 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Alunos da unidade Caxias uniformizados e focados"
                className="w-full h-full object-cover object-[center_25%]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00223B]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Textos abaixo da foto */}
            <div className="pt-6 pb-2 flex flex-col items-center text-center">
              <div className="flex flex-col items-center leading-[0.98] tracking-tight font-black uppercase">
                <span className="text-white text-3xl sm:text-4xl font-black tracking-tight drop-shadow-sm">
                  31 ANOS
                </span>
                <span className="text-[#FFBF00] text-3xl sm:text-4xl font-black tracking-tight my-1 drop-shadow-sm">
                  APROVANDO
                </span>
                <span className="text-white text-3xl sm:text-4xl font-black tracking-tight drop-shadow-sm">
                  EM CAXIAS
                </span>
              </div>

              <div className="mt-4">
                <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-xs sm:text-sm px-4 py-1.5 rounded uppercase tracking-wider shadow-md">
                  DESDE 1995
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* SLIDE 2: TUDO EM UMA SÓ UNIDADE - 4 CATEGORIAS */}
        {/* ============================================================ */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 1 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={currentSlide !== 1}
        >
          {/* LAYOUT DESKTOP & TABLET (4 COLUNAS VERTICAIS LADO A LADO) */}
          <div className="hidden md:flex w-full h-full relative items-stretch max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* LADO ESQUERDO: TÍTULO "TUDO EM UMA SÓ UNIDADE" */}
            <div className="w-[32%] lg:w-[28%] xl:w-[26%] flex flex-col justify-center py-8 pr-4 lg:pr-6 z-20 shrink-0">
              <div className="flex flex-col items-start leading-[0.95] tracking-tight font-black uppercase text-left">
                <span className="text-white text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight drop-shadow-md">
                  TUDO EM
                </span>
                <span className="text-[#FFBF00] text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight my-1 lg:my-1.5 drop-shadow-md">
                  UMA SÓ
                </span>
                <span className="text-white text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight drop-shadow-md">
                  UNIDADE
                </span>
              </div>

              <span className="text-[#68C5DB] text-xs lg:text-sm font-bold uppercase tracking-[0.25em] mt-3 lg:mt-4">
                PROGRESSÃO CAXIAS
              </span>
            </div>

            {/* LADO DIREITO: AS 4 COLUNAS VERTICAIS LADO A LADO COM FOTOS E TÍTULOS */}
            <div className="w-[68%] lg:w-[72%] xl:w-[74%] grid grid-cols-4 h-full border-l border-white/15 my-auto py-4 sm:py-6">
              {banner2Categories.map((cat, idx) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className={`group relative flex flex-col justify-end overflow-hidden ${
                    idx < 3 ? 'border-r border-white/15' : ''
                  } transition-all duration-300 hover:brightness-105`}
                >
                  {/* Foto vertical */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#001726]">
                    <img
                      src={cat.image}
                      alt={cat.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001726] via-[#001726]/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />
                  </div>

                  {/* Barra inferior sólida com linha amarela e título */}
                  <div className="relative z-10 bg-[#001726] border-t-2 border-[#FFBF00] py-3 lg:py-4 px-1.5 text-center w-full">
                    <span className="text-white font-black text-xs sm:text-sm lg:text-base xl:text-lg tracking-wider uppercase group-hover:text-[#FFBF00] transition-colors">
                      {cat.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* LAYOUT MOBILE (GRID DE 2 COLUNAS RESPONSIVO, SEM APERTO, PARA 360px - 767px) */}
          <div className="flex md:hidden flex-col w-full h-full justify-center px-4 sm:px-6 py-6 sm:py-8 z-10">
            {/* Título Centralizado */}
            <div className="flex flex-col items-center text-center mb-4 sm:mb-5">
              <div className="flex flex-col items-center leading-[0.98] tracking-tight font-black uppercase">
                <span className="text-white text-2xl xs:text-3xl font-black tracking-tight drop-shadow-sm">
                  TUDO EM
                </span>
                <span className="text-[#FFBF00] text-2xl xs:text-3xl font-black tracking-tight my-0.5 drop-shadow-sm">
                  UMA SÓ
                </span>
                <span className="text-white text-2xl xs:text-3xl font-black tracking-tight drop-shadow-sm">
                  UNIDADE
                </span>
              </div>
              <span className="text-[#68C5DB] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mt-1.5">
                PROGRESSÃO CAXIAS
              </span>
            </div>

            {/* Grid 2x2 das Categorias */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full">
              {banner2Categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group relative rounded-xl overflow-hidden border border-white/15 shadow-md flex flex-col bg-[#001726] transition-transform active:scale-95"
                >
                  <div className="relative aspect-[1/1] sm:aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/90 via-[#001726]/20 to-transparent" />
                  </div>
                  
                  {/* Faixa inferior */}
                  <div className="bg-[#001726] border-t-2 border-[#FFBF00] py-1.5 sm:py-2 px-1 text-center">
                    <span className="text-white font-black text-xs sm:text-sm tracking-wider uppercase group-hover:text-[#FFBF00] transition-colors">
                      {cat.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* SLIDE 3: NASCEMOS PRÉ-MILITAR - MATRÍCULAS ABERTAS */}
        {/* ============================================================ */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 2 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={currentSlide !== 2}
        >
          {/* LAYOUT DESKTOP & TABLET (HORIZONTAL ~1920x600) */}
          <div className="hidden md:flex w-full h-full relative items-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            
            {/* LADO ESQUERDO: TEXTO E BOTÃO MATRÍCULAS ABERTAS */}
            <div className="w-[50%] lg:w-[48%] xl:w-[45%] flex flex-col justify-center py-10 lg:py-16 z-20">
              <div className="flex flex-col items-start leading-[0.95] tracking-tight font-black uppercase text-left">
                <span className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight drop-shadow-md">
                  NASCEMOS
                </span>
                <span className="text-[#FFBF00] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight my-2 lg:my-3 drop-shadow-md">
                  PRÉ-MILITAR
                </span>
              </div>

              {/* BOTÃO MATRÍCULAS ABERTAS */}
              <div className="mt-6 sm:mt-8">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2.5 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-3.5 rounded uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
                >
                  <span>MATRÍCULAS ABERTAS</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* LADO DIREITO: FOTO DOS APROVADOS DE FARDA (ESA / EEAR / ESPCEX) */}
            <div className="absolute right-0 top-0 bottom-0 w-[55%] lg:w-[58%] xl:w-[60%] h-full z-10 overflow-hidden [clip-path:polygon(16%_0,_100%_0,_100%_100%,_0%_100%)]">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1600&q=80"
                alt="Aprovados de farda das Forças Armadas - ESA, EEAr e EsPCEx do Curso Progressão"
                className="w-full h-full object-cover object-[70%_25%]"
                loading="lazy"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#00223B] via-[#00223B]/40 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* LAYOUT MOBILE (VERTICAL RESPONSIVO, SEM CORTES, PARA 360px - 767px) */}
          <div className="flex md:hidden flex-col w-full h-full justify-center px-4 sm:px-6 py-8 sm:py-10 z-10">
            {/* Foto dos aprovados no topo */}
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] max-h-64 sm:max-h-72 overflow-hidden rounded-2xl shadow-xl relative border border-white/10 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
                alt="Aprovados de farda das Forças Armadas - ESA, EEAr e EsPCEx"
                className="w-full h-full object-cover object-[center_20%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00223B]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Textos e Botão abaixo da foto */}
            <div className="pt-6 pb-2 flex flex-col items-center text-center">
              <div className="flex flex-col items-center leading-[0.98] tracking-tight font-black uppercase">
                <span className="text-white text-3xl sm:text-4xl font-black tracking-tight drop-shadow-sm">
                  NASCEMOS
                </span>
                <span className="text-[#FFBF00] text-3xl sm:text-4xl font-black tracking-tight my-1.5 drop-shadow-sm">
                  PRÉ-MILITAR
                </span>
              </div>

              <div className="mt-5">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm px-6 py-3 rounded uppercase tracking-wider shadow-lg active:scale-95 transition-all"
                >
                  <span>MATRÍCULAS ABERTAS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* CONTROLES DE NAVEGAÇÃO: BOTÕES ANTERIOR E PRÓXIMO */}
      {/* ============================================================ */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="hidden sm:flex absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#001726]/80 hover:bg-[#FFBF00] text-white hover:text-[#00223B] border border-white/20 transition-all duration-200 items-center justify-center shadow-lg active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#FFBF00]"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="hidden sm:flex absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#001726]/80 hover:bg-[#FFBF00] text-white hover:text-[#00223B] border border-white/20 transition-all duration-200 items-center justify-center shadow-lg active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#FFBF00]"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* ============================================================ */}
      {/* INDICADORES / PAGINAÇÃO (DOTS) */}
      {/* ============================================================ */}
      <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#001726]/60 backdrop-blur-xs border border-white/10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para o banner ${index + 1}`}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              currentSlide === index
                ? 'w-7 sm:w-9 bg-[#FFBF00]'
                : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
