import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { StructureItem } from '../../types';

interface LightboxProps {
  items: StructureItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de Fotos da Estrutura"
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
        aria-label="Fechar visualizador"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="max-w-4xl max-h-[80vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 max-h-[65vh]">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-auto object-contain max-h-[65vh] rounded-xl"
          />
        </div>

        {/* Captions */}
        <div className="text-center text-white max-w-2xl px-4">
          <span className="text-xs font-semibold text-[#0289C6] uppercase tracking-wider block mb-1">
            {currentIndex + 1} de {items.length}
          </span>
          <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white mb-1">
            {current.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
            {current.description}
          </p>
        </div>
      </div>
    </div>
  );
};
