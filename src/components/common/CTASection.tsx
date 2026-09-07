import React from 'react';
import { ArrowRight, School, MessageCircle } from 'lucide-react';
import { Link } from '../routing/RouterContext';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badge?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "GARANTA SUA VAGA E FAÇA SUA MATRÍCULA",
  subtitle = "Dê o primeiro passo rumo à sua aprovação. Entre em contato com a equipe pedagógica do Progressão Caxias e efetue sua matrícula para iniciar a melhor preparação.",
  primaryCtaText = "FAZER MINHA MATRÍCULA",
  primaryCtaHref = "/contato",
  secondaryCtaText = "CONHECER O COLÉGIO",
  secondaryCtaHref = "/colegio",
  badge = "Faça sua Matrícula no Progressão Caxias"
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 my-12 rounded-2xl shadow-xl max-w-7xl mx-auto border border-[#015E96]">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-[#004B7C]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/25 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span>{badge}</span>
          </div>
        )}

        <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-base text-[#E1E5E8]/90 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4">
          <Link
            href={primaryCtaHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0289C6] hover:bg-white hover:text-[#004B7C] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
          >
            <span>{primaryCtaText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {secondaryCtaText && (
            <Link
              href={secondaryCtaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 backdrop-blur-md hover:border-white"
            >
              <School className="w-4 h-4 text-[#0289C6]" />
              <span>{secondaryCtaText}</span>
            </Link>
          )}

          <Link
            href="/contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-[#E1E5E8] px-5 py-4 rounded-xl font-semibold text-sm transition-all text-center"
          >
            <MessageCircle className="w-4 h-4 text-[#0289C6]" />
            <span>Falar com Atendimento</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
