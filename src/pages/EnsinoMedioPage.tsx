import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { RDStationForm } from '../components/rdstation/RDStationForm';
import { EnsinoMedio } from '../components/EnsinoMedio/EnsinoMedio';
import { SCHOOL_SEGMENTS_DATA } from '../data/siteData';

export const EnsinoMedioPage: React.FC = () => {
  const data = SCHOOL_SEGMENTS_DATA['ensino-medio'];

  const faqsEnsinoMedio = [
    {
      question: "QUAIS SÃO AS TURMAS E MODALIDADES OFERECIDAS NO ENSINO MÉDIO?",
      answer: "Para 2027, oferecemos a 1ª Série Regular com base forte de competição, e a partir da 2ª Série opções direcionadas por foco: 2ª Série Militar, 2ª Série Vestibular e 3ª Série Militar."
    },
    {
      question: "COMO FUNCIONAM AS MONITORIAS NO CONTRATURNO?",
      answer: "As monitorias acontecem duas vezes por semana no contraturno, gratuitamente, nas disciplinas de Matemática e Física para fortalecer a preparação dos alunos."
    },
    {
      question: "OS ALUNOS CONTAM COM COBERTURA DE SEGURO ESCOLAR?",
      answer: "Sim. Os alunos do Colégio Progressão recebem seguro escolar com proteção 24h e cobertura contra acidentes dentro e fora da unidade escolar pela seguradora Porto Seguro."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Ensino Médio 2027 - Colégio Progressão Caxias"
        description="Ensino Médio 2027 em Duque de Caxias: 1ª Série, 2ª Série Militar, 2ª Série Vestibular e 3ª Série Militar. Formação rigorosa e preparação estratégica."
        canonicalPath="/colegio/ensino-medio"
      />

      <Breadcrumbs
        items={[
          { label: 'Colégio', href: '/colegio' },
          { label: 'Ensino Médio' }
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
            <GraduationCap className="w-4 h-4 text-[#FFBF00]" />
            <span className="text-white">Ensino Médio 2027 em Duque de Caxias</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            FORMAÇÃO DE ALTO RENDIMENTO E PREPARAÇÃO DIRECIONADA
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            {data.summary}
          </p>
        </div>
      </section>

      {/* Proposta & Integração */}
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
                Proposta Pedagógica dos Anos Finais
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                ENSINO MÉDIO COM FOCO NO SEU FUTURO
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {data.pedagogicalProposal}
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E1E5E8]">
              <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-3">
                Pilares da Nossa Formação:
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>Base forte de competição com preparação para concursos militares (EAM, ESA, ESPCEX, EEAR) e vestibulares;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>Monitorias gratuitas no contraturno duas vezes por semana em Matemática e Física;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>Avaliações trimestrais com simulados no modelo dos exames e recuperação paralela no contraturno;</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span>Seguro escolar com proteção 24h dentro e fora da escola pela Porto Seguro.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SEÇÃO OFICIAL: TURMAS DO ENSINO MÉDIO (CARDS COMPACTOS) */}
      {/* ============================================================ */}
      <EnsinoMedio />

      {/* FAQs */}
      <section className="py-16 bg-[#F4F6F8] border-t border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <AccordionFAQ
          items={faqsEnsinoMedio}
          title="DÚVIDAS FREQUENTES SOBRE O ENSINO MÉDIO"
          subtitle="Tire suas dúvidas sobre o funcionamento de nossas turmas e metodologia."
        />
      </section>

      <div className="bg-white p-8 flex justify-center">
        <div className="w-full max-w-[600px]">
          {/* RD STATION — OFICIAL — ENSINO MÉDIO */}
          <RDStationForm
            formId="cx-org_site_ensino_medio-e1f3e9929da80e4dcb1f"
          />
        </div>
      </div>
    </div>
  );
};