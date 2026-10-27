import React from 'react';
import { Compass, CheckCircle2, Award, Trophy, Calendar, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { FundamentalII } from '../components/FundamentalII/FundamentalII';
import { RDStationForm } from '../components/rdstation/RDStationForm';
import { SCHOOL_SEGMENTS_DATA } from '../data/siteData';
import { WHATSAPP_NUMBER } from '../config/siteConfig';

export const EnsinoFundamental2Page: React.FC = () => {
  const data = SCHOOL_SEGMENTS_DATA['fundamental-2'];

  const faqsFundamental2 = [
    {
      question: "QUAIS TURNOS ESTÃO DISPONÍVEIS PARA O FUNDAMENTAL II?",
      answer: "As turmas do Fundamental II possuem opções de turno pela manhã e à tarde, conforme a disponibilidade de cada ano escolar."
    },
    {
      question: "COMO FUNCIONAM AS MONITORIAS NO CONTRATURNO?",
      answer: "As monitorias acontecem duas vezes por semana e são gratuitas. No 6º e 7º ano, são oferecidas em Matemática e Língua Portuguesa. No 8º e 9º ano, em Matemática e Física."
    },
    {
      question: "COMO O 9º ANO PREPARA O ALUNO PARA OS PRÓXIMOS DESAFIOS?",
      answer: "No 9º ano, a proposta pedagógica inclui conteúdos dos editais do Colégio Naval e EPCAR, além de abordar Escolas Técnicas e o ENEM como treinamento vestibular."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Ensino Fundamental II (6º ao 9º Ano) - Colégio Progressão Caxias"
        description="Ensino Fundamental 2 em Duque de Caxias: 6º ao 9º ano, professores especialistas, forte base acadêmica e preparação estratégica para CEFET, IFRJ e FAETEC."
        canonicalPath="/colegio/fundamental-2"
      />

      <Breadcrumbs
        items={[
          { label: 'Colégio', href: '/colegio' },
          { label: 'Ensino Fundamental II' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-[#00223B] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#015E96]/30">
        {/* Textura sutil de listras diagonais de fundo */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 22px, transparent 22px, transparent 44px)'
          }}
        />
        {/* Gradiente radial decorativo */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <Compass className="w-4 h-4 text-[#FFBF00]" />
            <span className="text-white">Anos Finais • 6º ao 9º Ano em Duque de Caxias</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            DO 6º AO 9º ANO, UMA JORNADA DE EVOLUÇÃO
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Formação acadêmica progressiva, ensino de competição e preparação para os próximos desafios escolares.
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as vagas do Ensino Fundamental II (6º ao 9º ano).')}`}
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
              alt="Jovens estudantes no Ensino Fundamental II no Colégio Progressão Caxias"
              className="w-full h-80 sm:h-96 object-contain"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Proposta Pedagógica dos Anos Finais
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                UMA BASE FORTE PARA O FUTURO DO SEU FILHO
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                No Ensino Fundamental II do Colégio Progressão Caxias, cada etapa é planejada para fortalecer o aprendizado, desenvolver a autonomia e preparar o aluno para os próximos desafios acadêmicos.
              </p>
            </div>

            <div className="bg-[#F4F6F8] p-6 rounded-2xl border border-[#E1E5E8]">
              <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-3">
                Diferenciais da nossa proposta:
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>Ensino de competição, com conteúdos alinhados a referências como Colégio Militar, Pedro II, CAP/UERJ e Newton Braga;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>Acompanhamento e monitoria gratuita em disciplinas estratégicas;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>Desenvolvimento acadêmico progressivo, do 6º ao 9º ano;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>Preparação para o próximo nível, com o 9º ano direcionado também para Colégio Naval, EPCAR, Escolas Técnicas e ENEM.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO OFICIAL: TURMAS DO FUNDAMENTAL II (6º AO 9º ANO) */}
      {/* ============================================================ */}
      <FundamentalII />

      {/* Preparação para os Próximos Desafios */}
      <section className="py-16 sm:py-20 bg-[#004B7C] text-white px-4 sm:px-6 lg:px-8 border-y border-[#015E96]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Coluna da Esquerda: Textos Principais */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider w-fit border border-white/20">
                <Trophy className="w-3.5 h-3.5 text-[#FFBF00]" />
                <span>Preparação para os Próximos Desafios</span>
              </div>

              <h2 className="font-serif-heading text-2xl sm:text-4xl font-black leading-tight tracking-tight text-white uppercase">
                DO FUNDAMENTAL II PARA NOVAS CONQUISTAS
              </h2>

              <p className="text-sm sm:text-base text-[#E1E5E8]/95 leading-relaxed font-medium">
                O Fundamental II do Colégio Progressão desenvolve uma base acadêmica sólida e prepara o aluno, de forma progressiva, para os desafios dos próximos anos.
              </p>

              {/* Destaque da Monitoria */}
              <div className="mt-2 p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-[#FFBF00]/20 text-[#FFBF00] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#FFBF00]" />
                </div>
                <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                  Além disso, os alunos contam com monitoria gratuita de Matemática e Física, realizada duas vezes por semana.
                </p>
              </div>
            </div>

            {/* Coluna da Direita: Card com a Preparação do 9º Ano */}
            <div className="lg:col-span-5 bg-white text-[#0A131F] p-7 sm:p-8 rounded-3xl shadow-2xl border border-white/20 flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#004B7C] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  <Award className="w-4 h-4 text-[#FFBF00]" />
                </div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B] uppercase tracking-tight">
                  No 9º ano, essa preparação inclui:
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-[#0A131F]/85 font-medium">
                <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0 mt-0.5" />
                  <span className="font-bold text-[#00223B]">Colégio Naval e EPCAR</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0 mt-0.5" />
                  <span className="font-bold text-[#00223B]">Escolas Técnicas</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0 mt-0.5" />
                  <span className="font-bold text-[#00223B]">ENEM como treinamento vestibular</span>
                </li>
                <li className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                  <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0 mt-0.5" />
                  <span className="font-bold text-[#00223B]">Conteúdos de Matemática, Física, Química, Língua Portuguesa e outras áreas</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#F4F6F8] border-t border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <AccordionFAQ
          items={faqsFundamental2}
          title="DÚVIDAS FREQUENTES SOBRE O FUNDAMENTAL II"
          subtitle="Tire suas dúvidas sobre o funcionamento de nossas turmas e metodologia."
        />
      </section>

      <div className="bg-white p-8 flex justify-center" id="formulario-fundamental-2">
        <div className="w-full max-w-[600px]">
          {/* RD STATION — COLÉGIO FUNDAMENTAL 2 */}
          <RDStationForm
            formId="cx-org_site_fundamental_2-be5bacdd5101ac3a6c9a"
          />
        </div>
      </div>


    </div>
  );
};