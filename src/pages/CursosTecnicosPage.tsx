import React from 'react';
import { 
  Wrench,
  CheckCircle2, 
  Target, 
  Clock, 
  Laptop, 
  Building2, 
  Sparkles
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { COURSES_DATA } from '../data/siteData';

export const CursosTecnicosPage: React.FC = () => {
  const course = COURSES_DATA['cursos-tecnicos'];

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Cursos Técnicos e Preparatório CEFET / IFRJ em Duque de Caxias"
        description="Cursos Técnicos profissionalizantes e Preparatório para Escolas Técnicas (CEFET, IFRJ, FAETEC) no Curso Progressão Caxias. Turmas presenciais e online."
        canonicalPath="/cursos/tecnicos"
      />

      <Breadcrumbs
        items={[
          { label: 'Cursos', href: '/cursos' },
          { label: 'Cursos Técnicos' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <Wrench className="w-4 h-4 text-white" />
            <span className="text-white">Formação Técnica & Rápida Inserção no Mercado</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            QUALIFICAÇÃO TÉCNICA E PREPARAÇÃO PARA ESCOLAS FEDERAIS
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            {course.subtitle}
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
              <Building2 className="w-4 h-4 text-[#0289C6]" />
              <span>Aulas Presenciais em Caxias</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
              <Laptop className="w-4 h-4 text-[#0289C6]" />
              <span>Aulas Online Ao Vivo & EAD 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destaque: Aulas Presenciais e Online */}
      <section className="py-16 sm:py-20 bg-[#F4F6F8] px-4 sm:px-6 lg:px-8 border-b border-[#E1E5E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Flexibilidade Total para Você
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mt-2 mb-4">
              AULAS PRESENCIAIS OU ONLINE: VOCÊ ESCOLHE COMO ESTUDAR
            </h2>
            <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
              No Curso Progressão Caxias, a excelência pedagógica é a mesma em qualquer modalidade. Escolha a experiência que melhor se adapta à sua rotina e aos seus objetivos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: Presencial */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#004B7C] transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-[#004B7C] text-white px-4 py-1 text-xs font-bold rounded-bl-xl tracking-wider uppercase">
                Na Unidade
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center mb-6 group-hover:bg-[#004B7C] group-hover:text-white transition-colors">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-3">
                  Modalidade Presencial
                </h3>
                <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                  Imersão direta no ambiente acadêmico com interação diária com os professores, aplicação de provas no modelo real e networking profissional.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-[#0A131F]/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span><strong>Salas climatizadas e multimídia</strong> no centro de Duque de Caxias com fácil acesso a trens e ônibus.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span><strong>Contato direto com professores</strong> para tirar dúvidas imediatas antes, durante e após cada aula.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span><strong>Simulados impressos presenciais</strong> com cronômetro, fiscalização e cartão de respostas oficial.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span><strong>Acesso às salas de estudos e biblioteca</strong> para manter disciplina e foco total na sua aprovação.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E1E5E8] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#004B7C]">Turnos: Manhã, Tarde, Noite ou Sábados</span>
                <span className="text-xs font-bold text-[#0289C6] uppercase">Vagas Limitadas</span>
              </div>
            </div>

            {/* Box 2: Online */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6] transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-[#0289C6] text-white px-4 py-1 text-xs font-bold rounded-bl-xl tracking-wider uppercase">
                Digital & Flex
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0289C6]/10 text-[#0289C6] flex items-center justify-center mb-6 group-hover:bg-[#0289C6] group-hover:text-white transition-colors">
                  <Laptop className="w-7 h-7" />
                </div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-3">
                  Modalidade Online (Ao Vivo & EAD)
                </h3>
                <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                  Estude de qualquer lugar com transmissões em tempo real, acesso irrestrito às gravações 24 horas por dia e monitoria digital.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-[#0A131F]/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span><strong>Aulas transmitidas ao vivo</strong> com chat interativo para fazer perguntas e interagir com a turma.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span><strong>Gravações disponíveis 24/7</strong> em alta definição para você assistir e revisar quantas vezes quiser.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span><strong>Material didático completo em PDF</strong>, incluindo listas de exercícios comentadas e resumos esquematizados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span><strong>Simulados digitais cronometrados</strong> com pontuação instantânea, gabarito explicado e análise de rendimento.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E1E5E8] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#004B7C]">Acesso de celular, tablet ou computador</span>
                <span className="text-xs font-bold text-[#0289C6] uppercase">Início Imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Formação Técnica & Visão Geral */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#E1E5E8]">
            <img
              src={course.image}
              alt="Alunos de cursos técnicos e preparatórios no Progressão Caxias"
              className="w-full h-80 sm:h-96 object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Conectado com o Mercado
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                ENSINO TÉCNICO MODERNO E DIRECIONADO PARA O EMPREGO
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {course.detailedText}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E1E5E8] shadow-sm flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[#004B7C] font-bold text-sm">
                <Target className="w-4 h-4 text-[#0289C6]" />
                <span>Público-Alvo:</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#0A131F]/80">
                {(course.targetAudience as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-[#E1E5E8] flex items-center gap-2 text-xs text-[#0A131F]/70">
                <Clock className="w-4 h-4 text-[#0289C6]" />
                <span>Formatos: Presencial em Duque de Caxias ou 100% Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F4F6F8] px-4 sm:px-6 lg:px-8 border-t border-[#E1E5E8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Tire Suas Dúvidas
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1">
              PERGUNTAS FREQUENTES SOBRE CURSOS TÉCNICOS E FORMATOS
            </h2>
          </div>

          <AccordionFAQ items={course.faqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="PRONTO PARA DAR O PRÓXIMO PASSO NA SUA FORMAÇÃO TÉCNICA?"
        subtitle="Converse com nossa equipe pedagógica e venha conhecer nossa unidade em Duque de Caxias ou experimente a plataforma online."
        primaryCtaText="FALAR COM CONSULTOR PEDAGÓGICO"
        primaryCtaHref="/contato"
        secondaryCtaText="VER TODOS OS CURSOS"
        secondaryCtaHref="/cursos"
      />
    </div>
  );
};
