import React from 'react';
import { GraduationCap, CheckCircle2, Star, Target, Award, Clock, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { SCHOOL_SEGMENTS_DATA } from '../data/siteData';
import { Link } from '../components/routing/RouterContext';

export const EnsinoMedioPage: React.FC = () => {
  const data = SCHOOL_SEGMENTS_DATA['ensino-medio'];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Ensino Médio - Colégio Progressão Caxias"
        description="Ensino Médio de excelência em Duque de Caxias. Preparação acadêmica de ponta integrada ao ENEM, UERJ e carreiras militares com simulados oficiais."
        canonicalPath="/colegio/ensino-medio"
      />

      <Breadcrumbs
        items={[
          { label: 'Colégio', href: '/colegio' },
          { label: 'Ensino Médio' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <GraduationCap className="w-4 h-4 text-white" />
            <span className="text-white">Ensino Médio em Duque de Caxias</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            FORMAÇÃO MADURA E PREPARAÇÃO DIRETA PARA OS GRANDES EXAMES
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            {data.summary}
          </p>
        </div>
      </section>

      {/* Proposta & Integração com Preparatórios */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#E1E5E8]">
            <img
              src={data.image}
              alt="Jovens estudantes no Ensino Médio do Progressão Caxias"
              className="w-full h-80 sm:h-96 object-contain"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Preparação Acadêmica
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                ENSINO MÉDIO COM DNA DE APROVAÇÃO
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {data.pedagogicalProposal}
              </p>
            </div>

            <div className="bg-[#E1E5E8]/30 p-6 rounded-2xl border border-[#E1E5E8]">
              <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-3">
                Competências em Destaque:
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

      {/* Diferenciais e Simulados Oficiais */}
      <section className="py-16 bg-[#004B7C] text-white border-y border-[#015E96] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Metodologia de Alto Rendimento
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
              SIMULADOS, REDAÇÃO E ORIENTAÇÃO VOCACIONAL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#015E96] p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
              <Clock className="w-8 h-8 text-[#0289C6]" />
              <h3 className="font-serif-heading text-lg font-bold text-white">Simulados Oficiais</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                Aplicação periódica de provas nos moldes de tempo e estilo do ENEM e UERJ para treinar resistência e gestão de tempo.
              </p>
            </div>

            <div className="bg-[#015E96] p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
              <Award className="w-8 h-8 text-[#0289C6]" />
              <h3 className="font-serif-heading text-lg font-bold text-white">Laboratório de Redação</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                Correções minuciosas com base nas matrizes das bancas, preparando o aluno para notas acima de 900.
              </p>
            </div>

            <div className="bg-[#015E96] p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
              <Target className="w-8 h-8 text-[#0289C6]" />
              <h3 className="font-serif-heading text-lg font-bold text-white">Orientação Universitária</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                Apoio na escolha de cursos superiores, entendimento das notas de corte no SISU e estratégias de inscrição.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Placeholder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <div className="bg-white p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
          <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
            Desempenho no Terceirão
          </span>
          <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-3">
            [NÚMERO DE APROVAÇÕES DO ENSINO MÉDIO]
          </h3>
          <p className="text-sm text-[#0A131F]/70 leading-relaxed mb-6">
            Alunos do Ensino Médio que conquistaram aprovações diretas em universidades públicas e escolas de formação militar.
          </p>

          <div className="p-4 rounded-xl bg-[#E1E5E8]/30 border border-[#E1E5E8] text-xs sm:text-sm italic text-[#0A131F]/80">
            "[DEPOIMENTO DO ALUNO FORMANDO - Relato sobre a transição do colégio para o vestibular no Progressão Caxias.]"
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#E1E5E8]/30 border-t border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <AccordionFAQ items={data.faqs} title="DÚVIDAS SOBRE O ENSINO MÉDIO" />
      </section>

      {/* CTA */}
      <CTASection
        title="GARANTA A VAGA DO SEU FILHO NO ENSINO MÉDIO"
        subtitle="O Ensino Médio que prepara para o vestibular com seriedade e resultados comprovados em Duque de Caxias."
        primaryCtaText="AGENDAR ENTREVISTA DE MATRÍCULA"
        primaryCtaHref="/contato"
        secondaryCtaText="VER PREPARATÓRIOS MILITARES"
        secondaryCtaHref="/cursos/preparatorio-militar"
      />
    </div>
  );
};
