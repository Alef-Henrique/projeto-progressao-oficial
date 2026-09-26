import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Star, 
  Target, 
  Clock, 
  Award, 
  FileText, 
  GraduationCap, 
  PenTool, 
  Sparkles, 
  Compass, 
  BarChart3, 
  Layers 
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { COURSES_DATA } from '../data/siteData';

export const PreVestibularPage: React.FC = () => {
  const course = COURSES_DATA['pre-vestibular'];
  const [activeTab, setActiveTab] = useState<'enem' | 'uerj'>('enem');

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Pré-Vestibular & ENEM em Duque de Caxias - UERJ, TRI e Redação Nota 1000"
        description="Curso Pré-Vestibular & ENEM no Progressão Caxias: preparação completa e integrada para o ENEM (TRI e Redação 1000), UERJ (Qualificação e Discursiva), Medicina e universidades públicas mais concorridas."
        canonicalPath="/cursos/pre-vestibular"
      />

      <Breadcrumbs
        items={[
          { label: 'Cursos', href: '/cursos' },
          { label: 'Pré-Vestibular & ENEM' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-5 border border-white/20">
            <GraduationCap className="w-4 h-4 text-[#68C5DB]" />
            <span>ENEM & Vestibulares Tradicionais</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#68C5DB]" />
            <BookOpen className="w-4 h-4 text-[#68C5DB]" />
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            PREPARAÇÃO INTEGRADA: ENEM, UERJ, MEDICINA E FEDERAIS
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-3xl mx-auto leading-relaxed">
            {course.subtitle}
          </p>
        </div>
      </section>

      {/* Sobre o Curso Integrado */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-[#E1E5E8] relative group">
            <img
              src={course.image}
              alt="Estudantes em preparação para o ENEM e Vestibular UERJ"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-sm font-semibold">
                Duque de Caxias • Turmas Presenciais & Online
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Sobre a Turma Integrada
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                DUAS FRENTES DE APROVAÇÃO EM UM ÚNICO CURSO
              </h2>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                {course.detailedText}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Seção Exclusiva: FRENTES DE PREPARAÇÃO INTEGRADA (ENEM + UERJ) */}
      <section className="py-16 bg-[#F8FAFC] border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Metodologia Dual
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mt-1">
              AS DUAS GRANDES FRENTES DO NOSSO PRÉ-VESTIBULAR
            </h2>
            <p className="text-sm text-[#0A131F]/70 max-w-2xl mx-auto mt-2">
              Entenda como preparamos você simultaneamente para o Exame Nacional e para os Vestibulares Estaduais.
            </p>
          </div>

          {/* Seletor de Frentes em Abas */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab('enem')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                activeTab === 'enem'
                  ? 'bg-[#004B7C] text-white shadow-md'
                  : 'bg-white text-[#0A131F]/70 hover:bg-[#E1E5E8]/40 border border-[#E1E5E8]'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#68C5DB]" />
              <span>Frente ENEM (Sisu, Prouni & TRI)</span>
            </button>
            <button
              onClick={() => setActiveTab('uerj')}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                activeTab === 'uerj'
                  ? 'bg-[#004B7C] text-white shadow-md'
                  : 'bg-white text-[#0A131F]/70 hover:bg-[#E1E5E8]/40 border border-[#E1E5E8]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#68C5DB]" />
              <span>Frente UERJ & Vestibulares Tradicionais</span>
            </button>
          </div>

          {/* Conteúdo da Aba ENEM */}
          {activeTab === 'enem' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E1E5E8] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3 py-1 rounded-full w-fit">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Estratégia Nacional para o SISU</span>
                  </div>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C]">
                    COMO TRABALHAMOS O ENEM NO PROGRESSÃO CAXIAS
                  </h3>
                  <p className="text-sm text-[#0A131F]/80 leading-relaxed">
                    O ENEM não premia apenas o conhecimento bruto: premia a <strong>coerência pedagógica calculada pela Teoria de Resposta ao Item (TRI)</strong>, o gerenciamento de tempo de prova e o domínio da redação dissertativo-argumentativa.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#004B7C] mb-1">
                        <PenTool className="w-4 h-4 text-[#0289C6]" />
                        <span>Laboratório de Redação 1000</span>
                      </div>
                      <p className="text-xs text-[#0A131F]/70">
                        Envios semanais e correções detalhadas por competência do INEP, com orientações personalizadas.
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#004B7C] mb-1">
                        <BarChart3 className="w-4 h-4 text-[#0289C6]" />
                        <span>Calibragem por TRI</span>
                      </div>
                      <p className="text-xs text-[#0A131F]/70">
                        Simulados com nota estatística estimada para você entender sua proficiência e ganho de pontos reais.
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#004B7C] mb-1">
                        <Compass className="w-4 h-4 text-[#0289C6]" />
                        <span>Simulados Oficiais em 2 Domingos</span>
                      </div>
                      <p className="text-xs text-[#0A131F]/70">
                        Mesmos horários, intervalos e cadernos do exame nacional para condicionamento físico e mental.
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#004B7C] mb-1">
                        <Sparkles className="w-4 h-4 text-[#0289C6]" />
                        <span>Consultoria SISU & PROUNI</span>
                      </div>
                      <p className="text-xs text-[#0A131F]/70">
                        Orientação estratégica de notas de corte, pesos por instituição e escolha assertiva de cursos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#004B7C] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold text-[#68C5DB] uppercase tracking-wider block mb-2">
                      Matriz de 4 Áreas + Redação
                    </span>
                    <h4 className="font-serif-heading text-xl font-bold mb-4">
                      Domínio Completo da Matriz de Referência
                    </h4>
                    <ul className="space-y-3 text-xs sm:text-sm text-[#E1E5E8]/90 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#68C5DB] shrink-0" />
                        <span>Linguagens, Códigos e Suas Tecnologias</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#68C5DB] shrink-0" />
                        <span>Ciências Humanas e Suas Tecnologias</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#68C5DB] shrink-0" />
                        <span>Ciências da Natureza (Física, Química, Bio)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#68C5DB] shrink-0" />
                        <span>Matemática e Suas Tecnologias</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#68C5DB] shrink-0" />
                        <span>Oficina Prática de Redação Nota Máxima</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20 text-xs text-[#E1E5E8]/80">
                    Aulas focadas na resolução ágil de questões contextualizadas e interpretação de gráficos e dados.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo da Aba UERJ */}
          {activeTab === 'uerj' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E1E5E8] shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3 py-1 rounded-full w-fit">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Vestibulares Estaduais & Medicina</span>
                  </div>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C]">
                    A FORÇA DO PROGRESSÃO NA UERJ E PROVAS DISCURSIVAS
                  </h3>
                  <p className="text-sm text-[#0A131F]/80 leading-relaxed">
                    A UERJ possui uma banca tradicional e altamente refinada, composta por <strong>Exames de Qualificação objetivos</strong> e <strong>Fase Discursiva com redação e disciplinas específicas</strong>, além da leitura obrigatória de romances e poemas selecionados.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#004B7C] mb-1">
                        <FileText className="w-4 h-4 text-[#0289C6]" />
                        <span>Obras Literárias Obrigatórias</span>
                      </div>
                      <p className="text-xs text-[#0A131F]/70">
                        Aulas especiais com professores mestres e doutores dissecando cada obra literária cobrada no edital oficial.
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#004B7C] mb-1">
                        <PenTool className="w-4 h-4 text-[#0289C6]" />
                        <span>Treinamento de Provas Discursivas</span>
                      </div>
                      <p className="text-xs text-[#0A131F]/70">
                        Como elaborar respostas técnicas, diretas e com fundamentação precisa que garantem nota cheia no espelho.
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#004B7C] mb-1">
                        <Award className="w-4 h-4 text-[#0289C6]" />
                        <span>Específicas de Medicina & Exatas</span>
                      </div>
                      <p className="text-xs text-[#0A131F]/70">
                        Aprofundamento em Biologia, Química, Física e Matemática para os cursos com maior corte do estado.
                      </p>
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#004B7C] mb-1">
                        <Layers className="w-4 h-4 text-[#0289C6]" />
                        <span>Simulados Modelo UERJ</span>
                      </div>
                      <p className="text-xs text-[#0A131F]/70">
                        Simulação do 1º e 2º EQ e cadernos discursivos com a mesma diagramação e pontuação da banca.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#002e4c] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full border border-[#015E96]">
                  <div>
                    <span className="text-xs font-bold text-[#68C5DB] uppercase tracking-wider block mb-2">
                      Conceito A no EQ UERJ
                    </span>
                    <h4 className="font-serif-heading text-xl font-bold mb-4">
                      Garantindo 20 Pontos de Bônus
                    </h4>
                    <p className="text-xs sm:text-sm text-[#E1E5E8]/90 leading-relaxed mb-6">
                      Alcançar o Conceito A no Exame de Qualificação da UERJ é o primeiro passo para a aprovação com folga nos cursos mais concorridos. Nossa metodologia foca na resolução exaustiva das provas dos últimos 15 anos.
                    </p>
                    <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 text-xs text-[#E1E5E8]">
                      ⭐ Plantões presenciais de dúvidas e monitorias semanais em Duque de Caxias.
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20 text-xs text-[#E1E5E8]/80 mt-6">
                    Preparação também válida para vestibulares da USP (Fuvest), Unicamp e faculdades particulares de Medicina.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Metodologia & Diferenciais */}
      <section className="py-16 bg-[#004B7C] text-white border-y border-[#015E96] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Estratégia Pedagógica
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
              DIFERENCIAIS QUE CONDUZEM À APROVAÇÃO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#015E96] p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-[#0289C6] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-white mb-3">
                Treinamento Dual: Questões Discursivas e TRI
              </h3>
              <p className="text-sm text-[#E1E5E8]/80 leading-relaxed mb-4">
                {course.methodology}
              </p>
              <p className="text-xs text-[#0289C6] font-semibold">
                {course.simuladosInfo}
              </p>
            </div>

            <div className="bg-[#015E96] p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-[#0289C6] flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-white mb-3">
                Diferenciais do Curso
              </h3>
              <ul className="space-y-3 text-sm text-[#E1E5E8]/80">
                {course.differentials.map((diff, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span>{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disciplinas Integradas */}
          <div className="bg-[#002e4c] p-6 rounded-2xl border border-white/10">
            <h4 className="font-serif-heading font-bold text-base text-white mb-4 text-center">
              Grade Curricular Integrada • Pré-Vestibular & ENEM
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center">
            {(course.disciplinas ?? []).map((disc, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-[#E1E5E8] font-semibold text-xs text-[#004B7C] shadow-xs">
                {disc}
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resultados & Depoimentos */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
          Aprovações no ENEM & Vestibulares
        </span>
        <h3 className="font-serif-heading text-3xl font-bold text-[#004B7C] mb-3">
          {course.resultsPlaceholder}
        </h3>
        <p className="text-sm text-[#0A131F]/70 leading-relaxed mb-8">
          Alunos aprovados na UERJ, UFRJ, UFF, UNIRIO, UFRRJ e principais faculdades de Medicina do país.
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
            [NOME DO ALUNO APROVADO] • ENEM / UERJ / Medicina
          </span>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#E1E5E8]/30 border-t border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <AccordionFAQ items={course.faqs} title="DÚVIDAS SOBRE O PRÉ-VESTIBULAR & ENEM" />
      </section>

      {/* CTA */}
      <CTASection
        title="CONQUISTE SUA VAGA NA UNIVERSIDADE PÚBLICA"
        subtitle="Venha planejar sua preparação para o ENEM e UERJ com a equipe pedagógica líder em Duque de Caxias."
        primaryCtaText="GARANTIR VAGA NO PRÉ-VESTIBULAR & ENEM"
        primaryCtaHref="/contato"
      />
    </div>
  );
};