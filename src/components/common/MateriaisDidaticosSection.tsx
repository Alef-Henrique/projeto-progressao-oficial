import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, ArrowRight, BookOpen, 
  CheckCircle2, Layers, ShieldCheck, X, MessageCircle
} from 'lucide-react';
import { Link } from '../routing/RouterContext';
import { DidacticMaterialItem } from '../../types';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';

interface MateriaisDidaticosSectionProps {
  /**
   * Destino customizável para o botão de CTA do Banner
   * Pode ser um seletor (#catalogo-materiais), uma URL ou manipulador
   */
  bannerCtaTarget?: string;
  onBannerCtaClick?: () => void;
}

export const MateriaisDidaticosSection: React.FC<MateriaisDidaticosSectionProps> = ({
  bannerCtaTarget = '/cursos/preparatorio-militar',
  onBannerCtaClick
}) => {
  // Lista unificada de todos os materiais didáticos
  
  // Índice atual do carrossel
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // Controle de pausa no autoplay (hover do mouse ou toque)
  const [isPaused, setIsPaused] = useState<boolean>(false);
  
  // Modal de detalhes do material
  const [selectedMaterial, setSelectedMaterial] = useState<DidacticMaterialItem | null>(null);

  // Cards visíveis por breakpoint
  const [visibleCount, setVisibleCount] = useState<number>(4);

  // Referência para o container de arraste
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number>(0);
  const touchEndXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);

  // Atualizar contagem de itens visíveis conforme tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Máximo de páginas/slides permitidos
  const maxIndex = Math.max(0, length - visibleCount);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay de 5 segundos, respeita prefers-reduced-motion e pausa no hover
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused || maxIndex === 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex, handleNext]);

  // Gestos de Swipe (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (touchEndXRef.current > 0 && Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  // Drag com Mouse (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseMove = () => {
    if (!isDraggingRef.current) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsPaused(false);
    const diff = dragStartXRef.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Handler de clique do CTA do Banner
  const handleBannerCta = (e: React.MouseEvent) => {
    if (onBannerCtaClick) {
      e.preventDefault();
      onBannerCtaClick();
      return;
    }

    if (bannerCtaTarget.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(bannerCtaTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="materiais-didaticos" 
      className="w-full relative overflow-hidden"
      aria-label="Seção de Materiais Didáticos"
    >
      {/* ============================================================ */}
      {/* 1. BANNER HERO DE APRESENTAÇÃO DOS MATERIAIS */}
      {/* ============================================================ */}
      <div className="w-full bg-gradient-to-br from-[#003A60] via-[#014C78] to-[#002B48] text-white relative py-16 sm:py-24 border-y border-[#015E96]/30 shadow-inner">
        {/* Elementos visuais de profundidade e textura sutil */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#68C5DB_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#002B48]/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LADO ESQUERDO: TEXTOS, DIFERENCIAIS E CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Pequeno Label */}
              <div className="inline-flex items-center gap-2 bg-[#0289C6]/20 text-[#68C5DB] border border-[#0289C6]/40 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5">
                <BookOpen className="w-3.5 h-3.5 text-[#0289C6]" />
                <span>Disciplina hoje, grandes conquistas amanhã</span>
              </div>

              {/* Headline Principal */}
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
                ESTUDAR DÓI. NÃO PASSAR.{' '}
                <span className="text-[#0289C6] underline decoration-[#0289C6]/40 decoration-4 underline-offset-8">
                  DÓI MAIS AINDA
                </span>
              </h2>

              {/* Texto Institucional Fiel */}
              <p className="text-sm sm:text-base text-[#E1E5E8]/90 leading-relaxed max-w-2xl mb-8">
                Cada aula, cada simulado e cada correção existem pra te aproximar da aprovação. Chega de estudar sem direção, aqui você sabe exatamente o que estudar e por quê.
              </p>

              {/* CTA Configurável */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Link
                  href={bannerCtaTarget}
                  onClick={handleBannerCta}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0289C6] hover:bg-[#015E96] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:shadow-[#0289C6]/20 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#0289C6] focus:ring-offset-2 focus:ring-offset-[#003A60]"
                >
                  <span>CONHEÇA NOSSOS CURSOS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* LADO DIREITO: COMPOSIÇÃO VISUAL PROFISSIONAL DOS MATERIAIS */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                
                {/* Card Principal da Composição de Produto */}
                <div className="relative z-10 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-3xl border border-white/20 shadow-2xl overflow-hidden group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#002B48]">
                    <img
                      src="assets/material-colegio-banner.jpg"
                      alt="Materiais didáticos e apostilas do Colégio e Cursos Progressão Caxias"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Gradiente de iluminação suave */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002B48]/90 via-[#002B48]/20 to-transparent" />
                  </div>
                </div>

                {/* Card Flutuante Superior */}
                <div className="hidden sm:flex absolute -top-4 -right-4 z-20 bg-[#004B7C] text-white px-4 py-2 rounded-xl shadow-xl border border-white/20 items-center gap-2 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#0289C6]" />
                  <span>Estrutura Pedagógica Completa</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
