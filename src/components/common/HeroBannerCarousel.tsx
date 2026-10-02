import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from '../routing/RouterContext';

interface HeroBannerCarouselProps {
  onBannerClick?: (bannerIndex: number) => void;
}

export const HeroBannerCarousel: React.FC<HeroBannerCarouselProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch Swipe para mobile/tablet
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

  // Gestos de Swipe
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

  // Navegação por teclado
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
      image: '/assets/banner-colegio.png',
      alt: 'Aluno do Colégio em sala de aula com caderno e uniforme',
      href: '/colegio',
    },
    {
      id: 'pre-vest',
      title: 'PRÉ-VEST',
      image: '/assets/banner-prevestibular02.png',
      alt: 'Aluno estudando focado para ENEM e UERJ',
      href: '/cursos/pre-vestibular02',
    },
    {
      id: 'militar',
      title: 'MILITAR',
      image: '/assets/banner-militar.png',
      alt: 'Aluno fardado em preparação militar com disciplina',
      href: '/cursos/preparatorio-militar',
    },
    {
      id: 'concursos',
      title: 'CONCURSOS',
      image: '/assets/banner-concursos-02.png',
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
      {/* CONTAINER PRINCIPAL: PROPORÇÃO HORIZONTAL FIEL AO DESIGN ORIGINAL */}
      <div className="relative w-full min-h-[490px] xs:min-h-[500px] sm:min-h-[520px] md:h-[380px] lg:h-[420px] xl:h-[450px] flex items-center justify-center">
        
        {/* ============================================================ */}
        {/* SLIDE 1: 31 ANOS APROVANDO EM CAXIAS - DESDE 1995 */}
        {/* ============================================================ */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 0 ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={currentSlide !== 0}
        >
          {/* Fundo base neutro sólido */}
          <div className="absolute inset-0 bg-[#001D33] pointer-events-none" aria-hidden="true" />

          {/* LAYOUT DESKTOP & TABLET: COMPOSIÇÃO HORIZONTAL FIEL AO DESIGN ORIGINAL */}
          <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden bg-[#00223B]">
            {/* Fundo base texturizado com listras diagonais no fundo */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-45 z-0"
              style={{
                backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.065) 0px, rgba(255,255,255,0.065) 18px, transparent 18px, transparent 36px)'
              }}
            />

            {/* 1. ÁREA DIREITA: FUNDO AZUL COM LISTRAS DIAGONAIS CONTÍNUAS (ATRÁS DA FOTOGRAFIA) */}
            <div 
              className="absolute right-0 top-0 bottom-0 h-full z-10 overflow-hidden bg-[#00223B]"
              style={{
                left: '28%'
              }}
            >
              {/* Textura de listras diagonais azul contínua preenchendo toda a área direita disponível */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-50 z-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.075) 0px, rgba(255,255,255,0.075) 18px, transparent 18px, transparent 36px)'
                }}
              />

              {/* Fotografia ampla preservando a nitidez total das pessoas */}
              <img
                src="/assets/banner-meninas.png"
                alt="Alunos da unidade Caxias uniformizados e focados na preparação acadêmica"
                className="relative z-10 w-full h-full object-cover object-[36%_18%]"
                style={{
                  maskImage: 'linear-gradient(105deg, transparent 0%, transparent 10%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 100%)',
                  WebkitMaskImage: 'linear-gradient(105deg, transparent 0%, transparent 10%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 100%)'
                }}
                loading="eager"
              />
            </div>

            {/* 2. ÁREA DO TEXTO: FUNDO AZUL-MARINHO SÓLIDO COM CORTE DIAGONAL DIRETO SOBRE A FOTO */}
            <div 
              className="absolute left-0 top-0 bottom-0 h-full z-20 bg-[#001D33] flex flex-col justify-center pl-8 sm:pl-10 lg:pl-16 xl:pl-24 pr-4"
              style={{
                width: '40%',
                clipPath: 'polygon(0 0, 100% 0, 77.5% 100%, 0 100%)'
              }}
            >
              <div className="flex flex-col items-start leading-[0.95] tracking-tight font-black uppercase text-left">
                <span className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight drop-shadow-md">
                  31 ANOS
                </span>
                <span className="text-[#FFBF00] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight my-1 lg:my-2 drop-shadow-md">
                  APROVANDO
                </span>
                <span className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight drop-shadow-md">
                  EM CAXIAS
                </span>
              </div>

              {/* SELO DESDE 1995 */}
              <div className="mt-4 lg:mt-6">
                <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-xs sm:text-sm lg:text-base px-4 lg:px-5 py-1.5 lg:py-2 rounded uppercase tracking-wider shadow-md">
                  DESDE 1995
                </span>
              </div>
            </div>
          </div>

          {/* LAYOUT MOBILE: COMPOSIÇÃO VERTICAL RESPONSIVA (SEM CORTES) */}
          <div className="flex md:hidden flex-col w-full h-full justify-center px-3.5 sm:px-6 py-3 sm:py-4 z-20 max-w-md mx-auto">
            {/* Foto dos alunos no topo com fundo de listras diagonais */}
            <div className="relative w-full aspect-[16/10] max-h-40 xs:max-h-44 sm:max-h-52 overflow-hidden rounded-xl shadow-lg border border-white/15 shrink-0 bg-[#002B48]">
              {/* Textura de listras diagonais no fundo da imagem */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-50 z-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.065) 0px, rgba(255,255,255,0.065) 18px, transparent 18px, transparent 36px)'
                }}
              />
              <img
                src="/assets/banner-meninas.png"
                alt="Alunos da unidade Caxias uniformizados e focados"
                className="relative z-10 w-full h-full object-cover object-[center_25%]"
                loading="eager"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00223B]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bloco de Textos abaixo da foto: FUNDO AZUL-MARINHO SÓLIDO (COR LISA SEM LISTRAS) */}
            <div className="mt-2.5 sm:mt-3 bg-[#001D33] rounded-xl sm:rounded-2xl p-3 xs:p-3.5 sm:p-4 border border-white/10 shadow-lg flex flex-col items-center text-center shrink-0 w-full">
              <div className="flex flex-col items-center leading-none tracking-tight font-black uppercase w-full">
                <span className="text-white text-xl xs:text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm whitespace-nowrap">
                  31 ANOS
                </span>
                <span className="text-[#FFBF00] text-xl xs:text-2xl sm:text-3xl font-black tracking-tight my-1 drop-shadow-sm whitespace-nowrap">
                  APROVANDO
                </span>
                <span className="text-white text-xl xs:text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm whitespace-nowrap">
                  EM CAXIAS
                </span>
              </div>

              <div className="mt-2.5 sm:mt-3">
                <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-[11px] xs:text-xs sm:text-sm px-3.5 py-1.5 rounded uppercase tracking-wider shadow-md whitespace-nowrap">
                  DESDE 1995
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* SLIDE 2: TUDO EM UMA SÓ UNIDADE - 4 CATEGORIAS */}
        {/* COMPOSIÇÃO DE DOIS FUNDOS: TEXTO SÓLIDO + IMAGENS TEXTURIZADAS */}
        {/* ============================================================ */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 1 ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={currentSlide !== 1}
        >
          {/* LAYOUT DESKTOP & TABLET: DOIS FUNDOS DISTINTOS CONFORME O BANNER DE REFERÊNCIA */}
          <div className="hidden md:flex w-full h-full relative items-stretch">
            
            {/* 1. ÁREA DO TEXTO: FUNDO AZUL-MARINHO SÓLIDO (SEM TEXTURA) */}
            <div className="w-[30%] lg:w-[28%] xl:w-[25%] h-full bg-[#001D33] flex flex-col justify-center pl-8 sm:pl-10 lg:pl-16 xl:pl-24 pr-6 z-20 shrink-0 border-r border-white/20 shadow-2xl">
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

            {/* 2. ÁREA DAS IMAGENS: FUNDO AZUL COM TEXTURA DE LISTRAS DIAGONAIS CONTÍNUA COMPARTILHADA */}
            <div className="flex-1 relative h-full bg-[#002B48] overflow-hidden">
              {/* Textura de listras diagonais contínua para toda a área das 4 imagens */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-45 z-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.065) 0px, rgba(255,255,255,0.065) 18px, transparent 18px, transparent 36px)'
                }}
              />

              {/* As 4 colunas verticais sobre a mesma textura contínua */}
              <div className="relative z-10 grid grid-cols-4 h-full w-full">
                {banner2Categories.map((cat, idx) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    className={`group relative flex flex-col justify-end h-full overflow-hidden ${
                      idx < 3 ? 'border-r border-white/20' : ''
                    } transition-all duration-300 hover:brightness-105`}
                  >
                    {/* Foto vertical sobre a textura contínua */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      {/* Gradiente sutil para integrar com a textura de fundo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001D33] via-[#001D33]/15 to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />
                    </div>

                    {/* Barra inferior sólida escura com faixa amarela superior (Azul-Marinho Sólido) */}
                    <div className="relative z-20 bg-[#001D33] border-t-4 border-[#FFBF00] py-3.5 lg:py-5 px-1.5 text-center w-full">
                      <span className="text-white font-black text-xs sm:text-sm lg:text-base xl:text-lg tracking-wider uppercase group-hover:text-[#FFBF00] transition-colors">
                        {cat.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* LAYOUT MOBILE: TÍTULO SÓLIDO + ÁREA DE IMAGENS TEXTURIZADA CONTÍNUA */}
          <div className="flex md:hidden flex-col w-full h-full justify-center px-3.5 sm:px-6 py-3 sm:py-4 z-20 max-w-md mx-auto">
            {/* Bloco de Texto Superior com Fundo Azul-Marinho Sólido (Sem Textura) */}
            <div className="bg-[#001D33] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 shadow-lg text-center mb-2.5 sm:mb-3 shrink-0">
              <div className="flex flex-col items-center leading-none tracking-tight font-black uppercase">
                <span className="text-white text-lg xs:text-xl sm:text-2xl font-black tracking-tight drop-shadow-sm">
                  TUDO EM
                </span>
                <span className="text-[#FFBF00] text-lg xs:text-xl sm:text-2xl font-black tracking-tight my-0.5 drop-shadow-sm">
                  UMA SÓ
                </span>
                <span className="text-white text-lg xs:text-xl sm:text-2xl font-black tracking-tight drop-shadow-sm">
                  UNIDADE
                </span>
              </div>
              <span className="text-[#68C5DB] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mt-1 block">
                PROGRESSÃO CAXIAS
              </span>
            </div>

            {/* Área das Imagens com Fundo Azul Texturizado Contínuo com Listras Diagonais */}
            <div className="relative w-full rounded-2xl overflow-hidden p-2 xs:p-2.5 sm:p-3 bg-[#002B48] border border-white/15 shadow-xl">
              {/* Textura de listras diagonais contínua para toda a área das imagens */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-45 z-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.065) 0px, rgba(255,255,255,0.065) 18px, transparent 18px, transparent 36px)'
                }}
              />

              {/* Grid 2x2 das Categorias sobre a textura contínua */}
              <div className="relative z-10 grid grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 w-full">
                {banner2Categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={cat.href}
                    className="group relative rounded-xl overflow-hidden border border-white/20 shadow-md flex flex-col bg-[#001726] transition-transform active:scale-95"
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/85 via-transparent to-transparent" />
                    </div>
                    
                    {/* Faixa inferior sólida com linha amarela e textos 100% visíveis e nítidos */}
                    <div className="bg-[#001D33] border-t-2 border-[#FFBF00] py-2 px-1 text-center relative z-10 flex items-center justify-center min-h-[30px] sm:min-h-[34px]">
                      <span className="text-white font-black text-xs sm:text-sm tracking-wide uppercase group-hover:text-[#FFBF00] transition-colors whitespace-nowrap block truncate">
                        {cat.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* SLIDE 3: NASCEMOS PRÉ-MILITAR - MATRÍCULAS ABERTAS */}
        {/* ============================================================ */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            currentSlide === 2 ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          aria-hidden={currentSlide !== 2}
        >
          {/* Fundo base neutro sólido */}
          <div className="absolute inset-0 bg-[#001D33] pointer-events-none" aria-hidden="true" />

          {/* LAYOUT DESKTOP & TABLET: COMPOSIÇÃO HORIZONTAL FIEL AO DESIGN ORIGINAL */}
          <div className="hidden md:block absolute inset-0 w-full h-full overflow-hidden bg-[#00223B]">
            {/* Fundo base texturizado com listras diagonais no fundo */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-45 z-0"
              style={{
                backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.065) 0px, rgba(255,255,255,0.065) 18px, transparent 18px, transparent 36px)'
              }}
            />

            {/* 1. ÁREA DIREITA: FUNDO AZUL COM LISTRAS DIAGONAIS CONTÍNUAS (ATRÁS DA FOTOGRAFIA) */}
            <div 
              className="absolute right-0 top-0 bottom-0 h-full z-10 overflow-hidden bg-[#00223B]"
              style={{
                left: '28%'
              }}
            >
              {/* Textura de listras diagonais azul contínua preenchendo toda a área direita disponível */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-50 z-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.075) 0px, rgba(255,255,255,0.075) 18px, transparent 18px, transparent 36px)'
                }}
              />

              {/* Fotografia ampla preservando a nitidez total das pessoas */}
              <img
                src="/assets/banner-militar-02.png"
                alt="Aprovados de farda das Forças Armadas - ESA, EEAr e EsPCEx do Curso Progressão"
                className="relative z-10 w-full h-full object-cover object-[70%_20%]"
                style={{
                  maskImage: 'linear-gradient(105deg, transparent 0%, transparent 10%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 100%)',
                  WebkitMaskImage: 'linear-gradient(105deg, transparent 0%, transparent 10%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,1) 34%, rgba(0,0,0,1) 100%)'
                }}
                loading="lazy"
              />
            </div>

            {/* 2. ÁREA DO TEXTO: FUNDO AZUL-MARINHO SÓLIDO COM CORTE DIAGONAL DIRETO SOBRE A FOTO */}
            <div 
              className="absolute left-0 top-0 bottom-0 h-full z-20 bg-[#001D33] flex flex-col justify-center pl-8 sm:pl-10 lg:pl-16 xl:pl-24 pr-4"
              style={{
                width: '40%',
                clipPath: 'polygon(0 0, 100% 0, 77.5% 100%, 0 100%)'
              }}
            >
              <div className="flex flex-col items-start leading-[0.95] tracking-tight font-black uppercase text-left">
                <span className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight drop-shadow-md">
                  NASCEMOS
                </span>
                <span className="text-[#FFBF00] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight my-1 lg:my-2 drop-shadow-md">
                  PRÉ-MILITAR
                </span>
              </div>

              {/* BOTÃO PRÉ-MATRÍCULA DESKTOP */}
              <div className="mt-4 lg:mt-6">
                <Link
                  href="/cursos/preparatorio-militar"
                  aria-label="Fazer Pré-Matrícula no Preparatório Militar"
                  style={{ backgroundColor: '#FFBF00', color: '#00223B', opacity: 1, display: 'inline-flex' }}
                  className="inline-flex items-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm lg:text-base px-6 lg:px-7 py-2.5 lg:py-3 rounded-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
                >
                  <span className="font-black text-[#00223B] tracking-wider">PRÉ-MATRÍCULA</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#00223B] group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>

              </div>
            </div>
          </div>

          {/* LAYOUT MOBILE: COMPOSIÇÃO VERTICAL RESPONSIVA (SEM CORTES) */}
          <div className="flex md:hidden flex-col w-full h-full justify-center px-3.5 sm:px-6 py-3 sm:py-4 z-20 max-w-md mx-auto">
            {/* Foto dos aprovados no topo com fundo de listras diagonais */}
            <div className="relative w-full aspect-[16/10] max-h-40 xs:max-h-44 sm:max-h-52 overflow-hidden rounded-xl shadow-lg border border-white/15 shrink-0 bg-[#002B48]">
              {/* Textura de listras diagonais no fundo da imagem */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-50 z-0"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.065) 0px, rgba(255,255,255,0.065) 18px, transparent 18px, transparent 36px)'
                }}
              />
              <img
                src="/assets/banner-militar-02.png"
                alt="Aprovados de farda das Forças Armadas - ESA, EEAr e EsPCEx"
                className="relative z-10 w-full h-full object-cover object-[center_20%]"
                loading="lazy"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00223B]/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bloco de Textos e Botão abaixo da foto: FUNDO AZUL-MARINHO SÓLIDO (COR LISA SEM LISTRAS) */}
            <div className="mt-2.5 sm:mt-3 bg-[#001D33] rounded-xl sm:rounded-2xl p-3 xs:p-3.5 sm:p-4 border border-white/10 shadow-lg flex flex-col items-center text-center shrink-0 w-full">
              <div className="flex flex-col items-center leading-none tracking-tight font-black uppercase w-full">
                <span className="text-white text-xl xs:text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm">
                  NASCEMOS
                </span>
                <span className="text-[#FFBF00] text-xl xs:text-2xl sm:text-3xl font-black tracking-tight my-1 drop-shadow-sm whitespace-nowrap">
                  PRÉ-MILITAR
                </span>
              </div>

               {/* BOTÃO PRÉ-MATRÍCULA MOBILE */}
              <div className="mt-2.5 sm:mt-3 flex justify-center w-full">
                <Link
                  href="/cursos/preparatorio-militar"
                  aria-label="Fazer Pré-Matrícula no Preparatório Militar"
                  style={{ backgroundColor: '#FFBF00', color: '#00223B', opacity: 1, display: 'inline-flex' }}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm px-6 py-2.5 rounded-lg uppercase tracking-wider shadow-lg active:scale-95 transition-all whitespace-nowrap group z-20"
                >
                  <span className="font-black text-[#00223B] tracking-wider">PRÉ-MATRÍCULA</span>
                  <ArrowRight className="w-4 h-4 text-[#00223B] group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* CONTROLES DE NAVEGAÇÃO: BOTÕES PASSADORES (ANTERIOR E PRÓXIMO) */}
      {/* ============================================================ */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="flex absolute left-1.5 xs:left-2 sm:left-3 lg:left-3 xl:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-[#001726]/85 hover:bg-[#FFBF00] text-white hover:text-[#00223B] border border-white/20 transition-all duration-200 items-center justify-center shadow-lg active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#FFBF00] touch-manipulation"
      >
        <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Próximo slide"
        className="flex absolute right-1.5 xs:right-2 sm:right-3 lg:right-3 xl:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full bg-[#001726]/85 hover:bg-[#FFBF00] text-white hover:text-[#00223B] border border-white/20 transition-all duration-200 items-center justify-center shadow-lg active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#FFBF00] touch-manipulation"
      >
        <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
      </button>
    </section>
  );
};
