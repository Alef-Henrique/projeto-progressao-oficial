import React from 'react';
import { BookOpen, CheckCircle2, Star, Target, Compass, Sparkles, Heart, Pencil, Award, MessageCircle, Calendar } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { SCHOOL_SEGMENTS_DATA } from '../data/siteData';
import { WHATSAPP_NUMBER } from '../config/siteConfig';

export const EnsinoFundamental1Page: React.FC = () => {
  const data = SCHOOL_SEGMENTS_DATA['fundamental-1'];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Ensino Fundamental I (1º ao 5º Ano) - Colégio Progressão Caxias"
        description="Ensino Fundamental 1 em Duque de Caxias: alfabetização sólida, raciocínio lógico-matemático, acolhimento afetivo e formação de hábitos de estudo."
        canonicalPath="/colegio/fundamental-1"
      />

      <Breadcrumbs
        items={[
          { label: 'Colégio', href: '/colegio' },
          { label: 'Ensino Fundamental I' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <BookOpen className="w-4 h-4 text-white" />
            <span className="text-white">Anos Iniciais • 1º ao 5º Ano em Duque de Caxias</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            ENSINO FUNDAMENTAL I: ALFABETIZAÇÃO SÓLIDA E AMOR PELO SABER
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed mb-8">
            {data.summary}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contato"
              className="inline-flex items-center gap-2 bg-[#0289C6] hover:bg-[#015E96] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Visita Pedagógica</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de mais informações sobre as matrículas do Ensino Fundamental I (1º ao 5º ano).')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#0289C6]" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Proposta & Objetivos */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#E1E5E8]">
            <img
              src={data.image}
              alt="Crianças aprendendo em sala de aula no Ensino Fundamental I"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Proposta Pedagógica dos Anos Iniciais
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                RIGOR ACADÊMICO COM CUIDADO E AFETO
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {data.pedagogicalProposal}
              </p>
            </div>

            <div className="bg-[#F4F6F8] p-6 rounded-2xl border border-[#E1E5E8]">
              <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-3">
                Objetivos de Desenvolvimento no Fundamental 1:
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#0A131F]/80">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
            Vivências Pedagógicas
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1">
            ATIVIDADES PRÁTICAS E ACOMPANHAMENTO INDIVIDUAL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#0289C6]" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
              Projetos & Oficinas
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
              Apoio Pedagógico Contínuo
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
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-[#004B7C] text-white px-4 sm:px-6 lg:px-8 border-t border-[#015E96]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Por Que Escolher o Progressão Caxias
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold mt-1">
              DIFERENCIAIS DO NOSSO FUNDAMENTAL I
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.differentials.map((diff, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0289C6]/20 text-[#0289C6] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <p className="text-sm text-[#E1E5E8] leading-relaxed font-medium">
                  {diff}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#F4F6F8] border-t border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <AccordionFAQ items={data.faqs} title="DÚVIDAS FREQUENTES SOBRE O FUNDAMENTAL I" />
      </section>

      {/* CTA */}
      <CTASection
        badge="Faça sua Matrícula no Progressão Caxias"
        title="FAÇA A MATRÍCULA NO ENSINO FUNDAMENTAL I"
        subtitle="Venha conhecer de perto nossa proposta pedagógica, equipe de professores e estrutura em Duque de Caxias. Efetue a matrícula do seu filho."
        primaryCtaText="FAZER MATRÍCULA"
        primaryCtaHref="/contato"
      />
    </div>
  );
};
