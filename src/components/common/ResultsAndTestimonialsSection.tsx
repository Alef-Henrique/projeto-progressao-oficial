import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { ApprovedInstitutionsCarousel } from './ApprovedInstitutionsCarousel';
import { ApprovedStudentsCarousel } from './ApprovedStudentsCarousel';

interface ResultsAndTestimonialsSectionProps {
  showViewAllButton?: boolean;
}

export interface CarouselImageItem {
  id: string;
  imageUrl: string;
  title: string;
}

export const CAROUSEL_APPROVAL_IMAGES: CarouselImageItem[] = [
  {
    id: 'banner-1',
    imageUrl: '/assets/depoimento-01.jpeg',
    title: 'Aprovação Conquistada - Progressão Caxias',
  },
  {
    id: 'banner-2',
    imageUrl: '/assets/depoimento-02.jpeg',
    title: 'Aprovação ESA - Progressão Caxias',
  },
  {
    id: 'banner-3',
    imageUrl: '/assets/depoimento-03.jpeg',
    title: 'Aprovação ENEM - Progressão Caxias',
  },
  {
    id: 'banner-4',
    imageUrl: '/assets/depoimento-04.jpeg',
    title: 'Aprovação EsPCEx - Progressão Caxias',
  },
  {
    id: 'banner-5',
    imageUrl: '/assets/depoimento-05.jpg',
    title: 'Aprovação Colégio Naval - Progressão Caxias',
  },
  {
    id: 'banner-6',
    imageUrl: '/assets/depoimento-06.jpg',
    title: 'Aprovação UERJ - Progressão Caxias',
  },

];

export const ResultsAndTestimonialsSection: React.FC<ResultsAndTestimonialsSectionProps> = ({
  showViewAllButton = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [selectedImage, setSelectedImage] = useState<CarouselImageItem | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Calcula dinamicamente o número de cards visíveis conforme o tamanho da tela
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const totalItems = CAROUSEL_APPROVAL_IMAGES.length;
  const maxIndex = Math.max(0, totalItems - visibleCards);

  // Garante que o índice atual permaneça válido após redimensionamentos
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Carrossel automático com timer de 4 segundos e pausa no hover
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, handleNext, maxIndex]);

  // Suporte a gestos touch (swipe) em dispositivos móveis
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" id="resultados-depoimentos">
      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] tracking-tight">
          RESULTADOS E DEPOIMENTOS
        </h2>
        <p className="text-sm sm:text-base text-[#0A131F]/70 mt-2 font-normal">
          Números que não mentem. Aqui, aprovação é rotina, não sorte.
        </p>
      </div>

      {/* Grid Superior: 3 Cards de Métricas e Destaques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Aprovações */}
        <div className="bg-[#F8FAFC] p-7 sm:p-8 rounded-2xl border border-[#E1E5E8] text-center flex flex-col items-center justify-center min-h-[140px] shadow-sm hover:border-[#0289C6]/60 hover:shadow-md transition-all duration-300 group">
          <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#004B7C] group-hover:text-[#0289C6] tracking-wide mb-1.5 transition-colors">
            <AnimatedCounter target={30} prefix="+" suffix=" Mil" duration={2000} />
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#0A131F]/75 uppercase tracking-wider">
            Aprovações em Concursos e Vestibulares
          </span>
        </div>

        {/* Card 2: Satisfação */}
        <div className="bg-[#F8FAFC] p-7 sm:p-8 rounded-2xl border border-[#E1E5E8] text-center flex flex-col items-center justify-center min-h-[140px] shadow-sm hover:border-[#0289C6]/60 hover:shadow-md transition-all duration-300 group">
          <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0289C6] tracking-wide mb-1.5">
            <AnimatedCounter target={98} suffix="%" duration={1800} />
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#0A131F]/75 uppercase tracking-wider">
            Satisfação dos Resultados
          </span>
        </div>

        {/* Card 3: Anos de História */}
        <div className="bg-[#F8FAFC] p-7 sm:p-8 rounded-2xl border border-[#E1E5E8] text-center flex flex-col items-center justify-center min-h-[140px] shadow-sm hover:border-[#0289C6]/60 hover:shadow-md transition-all duration-300 group">
          <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#004B7C] group-hover:text-[#0289C6] tracking-wide mb-1.5 transition-colors">
            <AnimatedCounter target={31} suffix=" anos" duration={1600} />
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#0A131F]/75 uppercase tracking-wider">
             de História em Duque de Caxias
          </span>
        </div>
      </div>

      {/* CARROSSEL DAS INSTITUIÇÕES ONDE OS ALUNOS FORAM APROVADOS */}
      <ApprovedInstitutionsCarousel />

            {/* NOVA SEÇÃO: CARROSSEL DE FOTOS DOS ALUNOS APROVADOS (COM NOME E CONCURSO) */}
      <ApprovedStudentsCarousel />

      {/* Carrossel Automático (Cards são Imagens Somente) */}
      <div
        className="relative group/carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Controles de Navegação Flutuantes Laterais */}
        <button
          onClick={handlePrev}
          aria-label="Imagem anterior"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-lg border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-90"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Próxima imagem"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-lg border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-90"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Trilho de Overflow do Carrossel */}
        <div className="overflow-hidden py-2 px-1">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {CAROUSEL_APPROVAL_IMAGES.map((item) => (
              <div
                key={item.id}
                className="px-3 shrink-0"
                style={{ width: `${100 / visibleCards}%` }}
              >
                {/* Card do Carrossel: Imagem Somente */}
                <div
                  onClick={() => setSelectedImage(item)}
                  className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-slate-100 group/card"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox ao Clicar na Imagem do Card */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A131F]/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar visualização"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
