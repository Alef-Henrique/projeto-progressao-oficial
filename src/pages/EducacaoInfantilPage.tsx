import React from 'react';
import { Heart, CheckCircle2, Sparkles, School, Smile, Sun } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { SCHOOL_SEGMENTS_DATA } from '../data/siteData';

export const EducacaoInfantilPage: React.FC = () => {
  const data = SCHOOL_SEGMENTS_DATA['educacao-infantil'];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Educação Infantil - Colégio Progressão Caxias"
        description="Educação Infantil com acolhimento, desenvolvimento socioemocional, psicomotor e letramento lúdico em Duque de Caxias."
        canonicalPath="/colegio/educacao-infantil"
      />

      <Breadcrumbs
        items={[
          { label: 'Colégio', href: '/colegio' },
          { label: 'Educação Infantil' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <Heart className="w-4 h-4 text-white" />
            <span className="text-white">Educação Infantil em Duque de Caxias</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            ACOLHIMENTO, DESCOBERTA E AFETO PARA OS PRIMEIROS PASSOS
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            {data.summary}
          </p>
        </div>
      </section>

      {/* Proposta Pedagógica & Objetivos */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#E1E5E8]">
            <img
              src={data.image}
              alt="Crianças em atividades pedagógicas na Educação Infantil"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Proposta Pedagógica
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                O BRINCAR COMO FONTE DE APRENDIZADO
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {data.pedagogicalProposal}
              </p>
            </div>

            <div className="bg-[#E1E5E8]/30 p-6 rounded-2xl border border-[#E1E5E8]">
              <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-3">
                Metas de Desenvolvimento:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#0A131F]/80">
                {data.developmentGoals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades & Metodologia */}
      <section className="py-16 bg-[#E1E5E8]/40 border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Rotina & Vivências
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1">
              ATIVIDADES E METODOLOGIA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center mb-4">
                <Smile className="w-5 h-5 text-[#0289C6]" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
                Atividades Estimulantes
              </h3>
              <ul className="space-y-3 text-sm text-[#0A131F]/80">
                {data.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0289C6] mt-2 shrink-0"></div>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#015E96] text-white flex items-center justify-center mb-4">
                <Sun className="w-5 h-5 text-[#0289C6]" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
                Metodologia & Acompanhamento
              </h3>
              <ul className="space-y-3 text-sm text-[#0A131F]/80">
                {data.methodologyPoints.map((m, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0289C6] mt-2 shrink-0"></div>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <AccordionFAQ items={data.faqs} title="DÚVIDAS SOBRE A EDUCAÇÃO INFANTIL" />
      </section>

      {/* CTA */}
      <CTASection
        title="AGENDE UMA VISITA À EDUCAÇÃO INFANTIL"
        subtitle="Venha conhecer as salas, áreas de recreação e a equipe pedagógica do Colégio Progressão Caxias."
        primaryCtaText="AGENDAR VISITA COM A COORDENAÇÃO"
        primaryCtaHref="/contato"
      />
    </div>
  );
};
