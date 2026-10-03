import React from 'react';
import { Compass, CheckCircle2, Target, Award, Trophy, GraduationCap, Calendar, MessageCircle, FileText, Users } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { SCHOOL_SEGMENTS_DATA } from '../data/siteData';
import { WHATSAPP_NUMBER } from '../config/siteConfig';
import { RDStationForm } from '../components/rdstation/RDStationForm';

export const EnsinoFundamental2Page: React.FC = () => {
  const data = SCHOOL_SEGMENTS_DATA['fundamental-2'];

  const preparatoryBadges = [
    'CEFET-RJ',
    'IFRJ (Instituto Federal)',
    'FAETEC',
    'EPCAR / Colégio Naval',
    'Colégio Militar do Rio de Janeiro',
    'CAP-UERJ / Colégio Pedro II'
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
            ENSINO FUNDAMENTAL II: MATURIDADE, AUTONOMIA E ALTO DESEMPENHO
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
                ENSINO RIGOROSO COM FOCO NO FUTURO DO JOVEM
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {data.pedagogicalProposal}
              </p>
            </div>

            <div className="bg-[#F4F6F8] p-6 rounded-2xl border border-[#E1E5E8]">
              <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-3">
                Pilares de Desenvolvimento Acadêmico:
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

      {/* Destaque: Preparação para Escolas Técnicas e Militares */}
      <section className="py-16 bg-[#004B7C] text-white px-4 sm:px-6 lg:px-8 border-y border-[#015E96]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#0289C6] text-xs font-bold uppercase tracking-wider w-fit">
                <Trophy className="w-3.5 h-3.5" />
                <span>Tradição em Aprovações em Caxias</span>
              </div>
              <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold leading-tight">
                BASE ESTRATÉGICA PARA O 9º ANO E CONCURSOS DE ACESSO
              </h2>
              <p className="text-sm sm:text-base text-[#E1E5E8]/90 leading-relaxed">
                O aluno do Fundamental II do Progressão Caxias conta com uma preparação que vai além da sala de aula tradicional. Integramos ao currículo os conteúdos exigidos pelas bancas mais disputadas do Rio de Janeiro, garantindo bagagem para quem sonha em ingressar em escolas técnicas federais ou carreiras públicas.
              </p>

              <div className="pt-2">
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-3">
                  Exames e Instituições Alvo da Nossa Formação:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {preparatoryBadges.map((inst, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl">
                      <Award className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                      <span className="text-xs text-white font-medium">{inst}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-[#0A131F] p-8 rounded-3xl shadow-2xl border border-white/20 flex flex-col gap-5">
              <h3 className="font-serif-heading text-xl font-bold text-[#004B7C]">
                Por que o Fundamental II do Progressão é Diferente?
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#0A131F]/80">
                <li className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span><strong>Simulados Ranqueados:</strong> Testes periódicos com questões no modelo dos exames oficiais para diagnóstico de aprendizagem.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span><strong>Professores de Pré-Vestibular e Militares:</strong> Contato com docentes experientes em provas de alto rendimento.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Target className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span><strong>Plantões de Redação e Dúvidas:</strong> Correções pormenorizadas e horários dedicados para tirar dúvidas difíceis.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                  <span><strong>Apoio à Transição da Juventude:</strong> Orientação para autonomia, foco nos estudos e convivência ética e respeitosa.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades & Acompanhamento */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
            Vivências & Metodologia
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1">
            ROUTINA ACADÊMICA E RECURSOS PEDAGÓGICOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-[#0289C6]" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
              Projetos & Atividades do Segmento
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
              <GraduationCap className="w-5 h-5 text-[#0289C6]" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-4">
              Acompanhamento & Metodologia
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
              Compromisso com o Futuro
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold mt-1">
              DIFERENCIAIS DO ENSINO FUNDAMENTAL II
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
        <AccordionFAQ items={data.faqs} title="DÚVIDAS FREQUENTES SOBRE O FUNDAMENTAL II" />
      </section>
      <div className="bg-white p-8 flex justify-center">
        <div className="w-full max-w-[600px]">
          {/* RD STATION — PROVISÓRIO */}
          <RDStationForm
            formId="caxias_lp_geral-6b17fb580118e7e46ef8"
          />
        </div>
      </div>
    </div>
  );
};
