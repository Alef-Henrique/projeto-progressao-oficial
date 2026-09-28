import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { APPROVED_INSTITUTIONS_DATA } from '../../data/institutionsData';

export const ApprovedInstitutionsCarousel: React.FC = () => {
  const institutions = APPROVED_INSTITUTIONS_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  // Responsividade: 4 cards no desktop, 3 no tablet, 2 em telas médias/sm e 1 em mobile estreito
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, institutions.length - visibleCount);

  // Passagem automática suave do carrossel (pausa com hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Suporte a gestos touch/swipe em smartphones e tablets
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      id="aprovacoes-instituicoes" 
      className="mb-14 sm:mb-16 w-full"
    >
      <div className="w-full">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0289C6]/10 text-[#0289C6] text-xs font-bold tracking-wider uppercase mb-2.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Tradição em Aprovações</span>
          </div>

          <h3 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#004B7C] tracking-tight">
            Nossos alunos aprovados em
          </h3>
          
          <p className="text-xs sm:text-sm text-[#0A131F]/70 mt-2 font-normal">
            Instituições militares prestigiadas, universidades federais e estaduais com alta concorrência em todo o país.
          </p>
        </div>

        {/* CONTÊINER DO CARROSSEL COM BOTÕES PASSADORES */}
        <div 
          className="relative group/carousel px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botão Passador Anterior */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Card anterior"
            className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-md hover:shadow-xl border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Botão Passador Próximo */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo card"
            className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-md hover:shadow-xl border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Trilho de Overflow dos Cards com Imagens Fictícias */}
          <div className="overflow-hidden py-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {institutions.map((item) => (
                <div
                  key={item.id}
                  className="px-2.5 sm:px-3 shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  {/* Card com Imagem Fictícia (Fácil de alterar no arquivo src/data/institutionsData.ts) */}
                  <div className="h-full bg-white rounded-2xl border border-[#E1E5E8] hover:border-[#0289C6]/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group">
                    
                    {/* PARTE SUPERIOR: IMAGEM FICTÍCIA */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F0F4F8]">
                      <img
                        src={item.imageUrl}
                        alt={item.fullName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Se a imagem falhar ou for substituída por link quebrado, exibe fallback elegante
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector('.img-fallback');
                          if (fallback) {
                            (fallback as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />

                      {/* Fallback caso a imagem não carregue */}
                      <div className="img-fallback hidden absolute inset-0 bg-[#004B7C]/10 items-center justify-center text-[#004B7C] font-bold text-xl">
                        {item.shortName}
                      </div>
                    </div>

                    {/* CONTEÚDO DO CARD: NOME */}
                    <div className="p-4 sm:p-5 flex flex-col justify-center text-center">
                      <h4 className="font-serif-heading text-base sm:text-lg font-bold text-[#004B7C] group-hover:text-[#0289C6] transition-colors leading-snug">
                        {item.fullName}
                      </h4>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores / Paginação (Dots) */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Ir para a página ${dotIdx + 1} de instituições`}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  currentIndex === dotIdx
                    ? 'w-6 sm:w-8 bg-[#0289C6]'
                    : 'w-2 bg-[#E1E5E8] hover:bg-[#0289C6]/50'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
