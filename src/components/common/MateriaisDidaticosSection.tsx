import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, ArrowRight, BookOpen, 
  CheckCircle2, Layers, ShieldCheck, X, MessageCircle
} from 'lucide-react';
import { DIDACTIC_MATERIALS_DATA } from '../../data/materialsData';
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
  bannerCtaTarget = '#catalogo-materiais',
  onBannerCtaClick
}) => {
  // Lista unificada de todos os materiais didáticos
  const materials = DIDACTIC_MATERIALS_DATA;
  
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
  const maxIndex = Math.max(0, materials.length - visibleCount);

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
                <span>Material Didático</span>
              </div>

              {/* Headline Principal */}
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
                CONTEÚDO QUE PREPARA PARA{' '}
                <span className="text-[#0289C6] underline decoration-[#0289C6]/40 decoration-4 underline-offset-8">
                  NOVOS HORIZONTES
                </span>
              </h2>

              {/* Texto Institucional Fiel */}
              <p className="text-sm sm:text-base text-[#E1E5E8]/90 leading-relaxed max-w-2xl mb-8">
                Os materiais didáticos do Progressão acompanham cada etapa da jornada do aluno, 
                oferecendo conteúdos organizados para apoiar o aprendizado no Colégio e a preparação 
                para diferentes objetivos.
              </p>

              {/* CTA Configurável */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={bannerCtaTarget}
                  onClick={handleBannerCta}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0289C6] hover:bg-[#015E96] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:shadow-[#0289C6]/20 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#0289C6] focus:ring-offset-2 focus:ring-offset-[#003A60]"
                >
                  <span>CONHEÇA NOSSOS MATERIAIS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* LADO DIREITO: COMPOSIÇÃO VISUAL PROFISSIONAL DOS MATERIAIS */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-none">
                
                {/* Card Principal da Composição de Produto */}
                <div className="relative z-10 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-3xl border border-white/20 shadow-2xl overflow-hidden group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#002B48]">
                    <img
                      src="assets/material-colegio-02.jpg"
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

      {/* ============================================================ */}
      {/* 2. SEÇÃO DE MATERIAIS COM FUNDO CLARO E CARROSSEL */}
      {/* ============================================================ */}
      <div 
        id="catalogo-materiais" 
        className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E1E5E8]/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HEADER DA SEÇÃO COM ESPAÇO GENEROSO */}
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider mb-2">
              NOSSOS MATERIAIS
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] tracking-tight mb-3">
              CONHEÇA OS MATERIAIS DO PROGRESSÃO
            </h3>
            <p className="text-sm sm:text-base text-[#0A131F]/70 max-w-2xl leading-relaxed">
              Materiais organizados para acompanhar cada etapa da formação e preparação dos nossos alunos.
            </p>

            
          </div>

          {/* ============================================================ */}
          {/* 3. CARROSSEL HORIZONTAL INTERATIVO */}
          {/* ============================================================ */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* CONTROLES DE NAVEGAÇÃO SUPERIORES / SETAS */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs sm:text-sm font-medium text-[#0A131F]/60">
                Apostilas e coleções didáticas do{' '}
                <strong className="text-[#004B7C]">Colégio & Cursos Preparatórios</strong>
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Material anterior"
                  className="w-10 h-10 rounded-xl bg-white border border-[#E1E5E8] hover:border-[#0289C6] hover:bg-[#0289C6] hover:text-white text-[#004B7C] transition-all flex items-center justify-center shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próximo material"
                  className="w-10 h-10 rounded-xl bg-white border border-[#E1E5E8] hover:border-[#0289C6] hover:bg-[#0289C6] hover:text-white text-[#004B7C] transition-all flex items-center justify-center shadow-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* CONTAINER COM OVERFLOW HIDDEN PARA O SLIDER */}
            <div 
              ref={carouselRef}
              className="overflow-hidden select-none cursor-grab active:cursor-grabbing pb-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}
              >
                {materials.map((material) => (
                  <div
                    key={material.id}
                    className="shrink-0 px-3 w-full sm:w-1/2 lg:w-1/4 transition-all"
                  >
                    {/* CARD DE MATERIAL */}
                    <div className="group h-full bg-white rounded-2xl sm:rounded-3xl border border-[#E1E5E8] hover:border-[#0289C6]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5">
                      
                      {/* PARTE SUPERIOR: IMAGEM DO MATERIAL */}
                      <div>
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0F4F8]">
                        <img
                          src={material.image}
                          alt={material.title}
                          className="w-full h-full object-contain transition-transform duration-500 ease-out"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />


                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </div>

                        {/* CONTEÚDO DO CARD: TÍTULO */}
                        <div className="p-5 sm:p-6">
                          <h4 className="font-serif-heading text-lg sm:text-xl font-bold text-[#004B7C] group-hover:text-[#0289C6] transition-colors leading-snug">
                            {material.title}
                          </h4>
                        </div>
                      </div>

                      {/* RODAPÉ DO CARD: LINK "VER DETALHES →" */}
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-[#E1E5E8]/60 mt-auto">
                        <button
                          type="button"
                          onClick={() => setSelectedMaterial(material)}
                          className="w-full pt-3 inline-flex items-center justify-between text-xs sm:text-sm font-bold text-[#0289C6] group-hover:text-[#014C78] transition-colors focus:outline-none"
                        >
                          <span>VER DETALHES</span>
                          <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INDICADORES / PAGINAÇÃO (DOTS) */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Ir para a página ${dotIdx + 1} de materiais`}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0289C6] ${
                    currentIndex === dotIdx
                      ? 'w-8 bg-[#0289C6]'
                      : 'w-2.5 bg-[#E1E5E8] hover:bg-[#0289C6]/50'
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* MODAL DE DETALHES DO MATERIAL DIDÁTICO */}
      {/* ============================================================ */}
      {selectedMaterial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A131F]/70 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-material-title"
        >
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E1E5E8] relative flex flex-col gap-5 max-h-[90vh] overflow-y-auto">
            
            {/* Botão Fechar */}
            <button
              type="button"
              onClick={() => setSelectedMaterial(null)}
              aria-label="Fechar modal de detalhes"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#E1E5E8]/60 hover:bg-[#E1E5E8] text-[#004B7C] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Topo do modal com badge e título */}
            <div>
              <h3 
                id="modal-material-title"
                className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] leading-snug"
              >
                {selectedMaterial.title}
              </h3>
            </div>

            {/* Imagem do material no modal */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full bg-[#F0F4F8]">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Descrição Completa */}
            <p className="text-xs sm:text-sm text-[#0A131F]/80 leading-relaxed">
              {selectedMaterial.description}
            </p>

            {/* Recursos inclusos */}
            {selectedMaterial.features && selectedMaterial.features.length > 0 && (
              <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E1E5E8]">
                <h4 className="text-xs font-bold text-[#004B7C] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#0289C6]" />
                  <span>Destaques da Estrutura Pedagógica:</span>
                </h4>
                <ul className="space-y-2">
                  {selectedMaterial.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#0A131F]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ações do Modal */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-[#E1E5E8]">
              <button
                type="button"
                onClick={() => setSelectedMaterial(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#E1E5E8] text-[#0A131F]/70 hover:bg-[#F8FAFC] text-xs font-bold transition-colors"
              >
                Fechar
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre os materiais didáticos do Progressão Caxias.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0289C6] hover:bg-[#015E96] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tirar Dúvidas no WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
