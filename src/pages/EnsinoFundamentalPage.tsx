import React from 'react';
import { BookOpen, CheckCircle2, Star, Target, Compass, Award } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { SCHOOL_SEGMENTS_DATA } from '../data/siteData';

export const EnsinoFundamentalPage: React.FC = () => {
  const data = SCHOOL_SEGMENTS_DATA['ensino-fundamental'];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Ensino Fundamental - Colégio Progressão Caxias"
        description="Ensino Fundamental em Duque de Caxias: anos iniciais e finais, desenvolvimento lógico, formação cidadã e hábitos de estudo consistentes."
        canonicalPath="/colegio/ensino-fundamental"
      />

      <Breadcrumbs
        items={[
          { label: 'Colégio', href: '/colegio' },
          { label: 'Ensino Fundamental' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#0289C6] text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/10">
            <BookOpen className="w-4 h-4 text-[#0289C6]" />
            <span>Ensino Fundamental em Duque de Caxias</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            FORMAÇÃO SÓLIDA, HÁBITOS DE ESTUDO E PENSAMENTO CRÍTICO
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            {data.summary}
          </p>
        </div>
      </section>

      {/* Proposta & Objetivos */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#E1E5E8]">
            <img
              src={data.image}
              alt="Estudantes em sala de aula no Ensino Fundamental"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Proposta Pedagógica
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                RIGOR ACADÊMICO E ACOLHIMENTO HUMANO
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {data.pedagogicalProposal}
              </p>
            </div>

            <div className="bg-[#E1E5E8]/30 p-6 rounded-2xl border border-[#E1E5E8]">
              <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-3">
                Pilares do Desenvolvimento Escolar:
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

      {/* Atividades & Acompanhamento */}
      <section className="py-16 bg-[#E1E5E8]/40 border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Metodologia & Prática
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1">
              ATIVIDADES E ACOMPANHAMENTO INDIVIDUALIZADO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-[#0289C6]" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
                Projetos & Atividades
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
                <Compass className="w-5 h-5 text-[#0289C6]" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
                Acompanhamento Pedagógico
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

      {/* Depoimento Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <div className="bg-white p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
          <div className="flex items-center justify-center gap-1 text-[#0289C6] mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-[#0289C6]" />
            ))}
          </div>
          <p className="text-sm sm:text-base text-[#0A131F]/80 italic leading-relaxed mb-4">
            "[DEPOIMENTO DO RESPONSÁVEL / ALUNO - Relato de experiência da família sobre o acolhimento, desenvolvimento dos estudos e evolução escolar no Ensino Fundamental do Colégio Progressão Caxias.]"
          </p>
          <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
            [NOME DO RESPONSÁVEL / ALUNO] • Ensino Fundamental
          </span>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#E1E5E8]/30 border-t border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <AccordionFAQ items={data.faqs} title="DÚVIDAS SOBRE O ENSINO FUNDAMENTAL" />
      </section>

      {/* CTA */}
      <CTASection
        title="VENHA CONHECER O ENSINO FUNDAMENTAL"
        subtitle="Converse com nossos coordenadores e conheça o material didático exclusivo utilizado em Duque de Caxias."
        primaryCtaText="AGENDAR VISITA COM A COORDENAÇÃO"
        primaryCtaHref="/contato"
      />
    </div>
  );
};
