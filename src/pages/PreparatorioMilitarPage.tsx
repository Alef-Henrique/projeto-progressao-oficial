import React from 'react';
import { Shield, CheckCircle2, Star, Target, Clock, Award, BookOpen, AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { COURSES_DATA } from '../data/siteData';

export const PreparatorioMilitarPage: React.FC = () => {
  const course = COURSES_DATA['preparatorio-militar'];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Preparatório Militar em Duque de Caxias - EsPCEx, AFA, Colégio Naval, ESA"
        description="Preparatório Militar de alta performance no Curso Progressão Caxias: EsPCEx, AFA, Colégio Naval, EPCAr, ESA, EEAr e Colégios Militares."
        canonicalPath="/cursos/preparatorio-militar"
      />

      <Breadcrumbs
        items={[
          { label: 'Cursos', href: '/cursos' },
          { label: 'Preparatório Militar' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-white">Carreiras Militares das Forças Armadas</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            DISCIPLINA, RIGOR E PREPARAÇÃO PARA A FARDA MILITAR
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            {course.subtitle}
          </p>
        </div>
      </section>

      {/* Sobre o Curso & Formato */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#E1E5E8]">
            <img
              src={course.image}
              alt="Estudantes em preparação para carreiras militares"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Sobre a Turma
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                PREPARAÇÃO DIRECIONADA PARA CADA BANCA MILITAR
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {course.description}
              </p>
            </div>

            <div className="bg-[#E1E5E8]/30 p-6 rounded-2xl border border-[#E1E5E8] flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#004B7C] font-bold text-sm">
                <Target className="w-4 h-4 text-[#0289C6]" />
                <span>Público-Alvo:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#0A131F]/80">
                {course.targetAudience}
              </p>
              <div className="pt-2 border-t border-[#E1E5E8] flex items-center gap-2 text-xs text-[#0A131F]/70">
                <Clock className="w-4 h-4 text-[#0289C6]" />
                <span>Formato das aulas: {course.classFormat}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concursos Atendidos */}
      <section className="py-16 bg-[#004B7C] text-white border-y border-[#015E96] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Bancas Militares
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
              CONCURSOS ATENDIDOS PELA NOSSA TURMA
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.concursosAtendidos.map((c, i) => (
              <div
                key={i}
                className="bg-[#015E96] p-5 rounded-xl border border-white/10 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-[#0289C6]" />
                </div>
                <span className="text-sm font-semibold text-white">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia & Diferenciais */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
            <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
              Metodologia de Treinamento Militar
            </h3>
            <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-4">
              {course.methodology}
            </p>
            <div className="p-4 rounded-xl bg-[#E1E5E8]/30 border border-[#E1E5E8] text-xs text-[#0A131F]/80">
              <span className="font-bold block text-[#004B7C] mb-1">Simulados Ininterruptos:</span>
              {course.simuladosInfo}
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
            <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
              Diferenciais do Preparatório
            </h3>
            <ul className="space-y-3 text-sm text-[#0A131F]/80">
              {course.differentials.map((diff, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>{diff}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disciplinas e Conteúdo Programático */}
        <div className="bg-[#E1E5E8]/30 p-8 rounded-2xl border border-[#E1E5E8]">
          <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-6 text-center">
            Matérias & Conteúdo Programático
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
            {course.disciplinas.map((disc, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-[#E1E5E8] font-semibold text-xs text-[#004B7C] shadow-xs">
                {disc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados & Depoimentos com Placeholders */}
      <section className="py-16 bg-[#E1E5E8]/30 border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
            Mural de Conquistas Militares
          </span>
          <h3 className="font-serif-heading text-3xl font-bold text-[#004B7C] mb-3">
            {course.resultsPlaceholder}
          </h3>
          <p className="text-sm text-[#0A131F]/70 leading-relaxed mb-8">
            Histórico consistente de alunos formados no Progressão Caxias ingressando nas Forças Armadas brasileiras.
          </p>

          <div className="bg-white p-8 rounded-2xl border border-[#E1E5E8] shadow-sm text-left">
            <div className="flex items-center gap-1 text-[#0289C6] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-[#0289C6]" />
              ))}
            </div>
            <p className="text-sm text-[#0A131F]/80 italic leading-relaxed mb-4">
              "{course.testimonialsPlaceholder}"
            </p>
            <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
              [NOME DO ALUNO APROVADO] • EsPCEx / ESA
            </span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <AccordionFAQ items={course.faqs} title="DÚVIDAS SOBRE O PREPARATÓRIO MILITAR" />
      </section>

      {/* CTA */}
      <CTASection
        title="CONQUISTE SUA VAGA NA CARREIRA MILITAR"
        subtitle="Venha conversar com nossa equipe pedagógica e garanta seu material didático para a próxima turma militar em Duque de Caxias."
        primaryCtaText="GARANTIR MINHA MATRÍCULA MILITAR"
        primaryCtaHref="/contato"
      />
    </div>
  );
};
