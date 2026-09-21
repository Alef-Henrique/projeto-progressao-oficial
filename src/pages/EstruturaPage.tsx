import React, { useState } from 'react';
import { Maximize2, ShieldCheck, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { CTASection } from '../components/common/CTASection';
import { Lightbox } from '../components/common/Lightbox';
import { STRUCTURE_ITEMS } from '../data/siteData';

export const EstruturaPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Nossa Estrutura"
        description="Conheça a infraestrutura do Curso Progressão Caxias: salas climatizadas, áreas de estudo individual e coletivo, laboratórios e convivência em Duque de Caxias."
        canonicalPath="/estrutura"
      />

      <Breadcrumbs items={[{ label: 'O Progressão' }, { label: 'Nossa Estrutura' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider block mb-2">
            Instalações & Conforto
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            ESTRUTURA PROJETADA PARA APROVAÇÃO E APRENDIZADO
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            Cada ambiente do Curso Progressão Caxias foi planejado para proporcionar ergonomia, silêncio nos momentos de foco e dinamismo nas salas de aula.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STRUCTURE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Zoom and Lightbox Trigger */}
              <div
                className="relative h-64 sm:h-72 overflow-hidden cursor-pointer"
                onClick={() => handleOpenLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 bg-white/90 text-[#004B7C] px-4 py-2 rounded-xl text-xs font-bold shadow-lg backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4 text-[#0289C6]" />
                    Ampliar Foto
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-start">
                <div>
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#004B7C] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#0A131F]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Highlights */}
      <section className="py-16 bg-[#E1E5E8]/30 border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="p-6 bg-white rounded-2xl border border-[#E1E5E8] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#0289C6]" />
              </div>
              <h4 className="font-serif-heading font-bold text-lg text-[#004B7C]">Segurança Contínua</h4>
              <p className="text-xs sm:text-sm text-[#0A131F]/70">Controle rigoroso de portaria e circulação interna, oferecendo proteção absoluta para pais e estudantes.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E1E5E8] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#015E96] text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#0289C6]" />
              </div>
              <h4 className="font-serif-heading font-bold text-lg text-[#004B7C]">Higiene e Climatização</h4>
              <p className="text-xs sm:text-sm text-[#0A131F]/70">Manutenção periódica de filtros de ar-condicionado e higienização contínua das instalações escolares.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#E1E5E8] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center">
                <Maximize2 className="w-5 h-5 text-[#0289C6]" />
              </div>
              <h4 className="font-serif-heading font-bold text-lg text-[#004B7C]">Ambientes Acessíveis</h4>
              <p className="text-xs sm:text-sm text-[#0A131F]/70">Rampas de acesso, banheiros adaptados e sinalização clara para garantir inclusão e comodidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={STRUCTURE_ITEMS}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex(prev => (prev > 0 ? prev - 1 : STRUCTURE_ITEMS.length - 1))}
        onNext={() => setLightboxIndex(prev => (prev < STRUCTURE_ITEMS.length - 1 ? prev + 1 : 0))}
      />

    </div>
  );
};
