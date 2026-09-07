import React, { useState } from 'react';
import { 
  ArrowRight, 
  Shield, 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  School, 
  Wrench, 
  Laptop, 
  Building2, 
  Video, 
  Calendar, 
  Users, 
  Sparkles,
  Check
} from 'lucide-react';
import { Link } from '../components/routing/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { CTASection } from '../components/common/CTASection';
import { COURSES_DATA } from '../data/siteData';

export const CursosHubPage: React.FC = () => {
  const [filterModalidade, setFilterModalidade] = useState<'todos' | 'presencial' | 'online'>('todos');

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Cursos Preparatórios e Técnicos em Duque de Caxias | Presencial e Online"
        description="Encontre o preparatório ou curso técnico ideal. Carreiras Militares, Cursos Técnicos, ENEM, Pré-Vestibular e Concursos Públicos com turmas presenciais e online no Progressão Caxias."
        canonicalPath="/cursos"
      />

      <Breadcrumbs items={[{ label: 'Cursos' }, { label: 'Todos os Cursos e Preparatórios' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <Award className="w-4 h-4 text-white" />
            <span className="text-white">Cursos Preparatórios e Técnicos de Alta Performance</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            ENCONTRE O CURSO CERTO PARA O SEU OBJETIVO
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            Metodologia focada, corpo docente experiente, simulados com rigor oficial e a flexibilidade de estudar na <strong>modalidade presencial</strong> ou <strong>ao vivo</strong>.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
              <Building2 className="w-4 h-4 text-[#0289C6]" />
              <span>Turmas Presenciais no Centro de Caxias</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-white/15">
              <Laptop className="w-4 h-4 text-[#0289C6]" />
              <span>Aulas Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Explicativa: Aulas Presenciais e Ao Vivo */}
      <section className="py-16 sm:py-20 bg-[#F4F6F8] px-4 sm:px-6 lg:px-8 border-b border-[#E1E5E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Formatos de Aprendizagem
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mt-2 mb-4">
              COMO FUNCIONAM AS AULAS PRESENCIAIS E AO VIVO
            </h2>
            <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
              No Curso Progressão Caxias, você tem a liberdade de escolher a modalidade que melhor se adapta à sua rotina, mantendo o mesmo padrão de excelência pedagógica, professores qualificados e suporte contínuo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Bloco Presencial */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#004B7C] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#004B7C] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                    <Building2 className="w-7 h-7 text-[#0289C6]" />
                  </div>
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider bg-[#004B7C]/10 px-3.5 py-1 rounded-full border border-[#004B7C]/20">
                    Na Unidade Duque de Caxias
                  </span>
                </div>

                <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-3">
                  Aula Presencial
                </h3>
                <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                  A experiência tradicional e imersiva para quem busca foco absoluto, contato direto e rotina diária de estudos dentro de um ambiente preparado para o alto rendimento.
                </p>

                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#004B7C]">Interação Direta com Docentes</h4>
                      <p className="text-xs text-[#0A131F]/70">Tire dúvidas na hora da aula, participe de debates pedagógicos e receba orientações personalizadas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#004B7C]">Estrutura Completa & Climatizada</h4>
                      <p className="text-xs text-[#0A131F]/70">Salas de aula confortáveis, biblioteca, salas de estudo individuais e em grupo no centro de Duque de Caxias.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#004B7C]">Simulados Impressos Oficiais</h4>
                      <p className="text-xs text-[#0A131F]/70">Provas impressas com preenchimento de cartão-resposta, controle de tempo rigoroso e fiscalização idêntica ao dia D.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco Online */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#015E96] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                    <Laptop className="w-7 h-7 text-[#0289C6]" />
                  </div>
                  <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3.5 py-1 rounded-full border border-[#0289C6]/20">
                    Aula Ao Vivo
                  </span>
                </div>

                <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-3">
                  Aula Ao Vivo
                </h3>
                <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                  Acompanhe as transmissões em tempo real de qualquer lugar, interagindo diretamente com os professores pelo chat para tirar dúvidas imediatas.
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0289C6]/10 text-[#0289C6] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#004B7C]">Transmissões em Tempo Real</h4>
                      <p className="text-xs text-[#0A131F]/70">Aulas dinâmicas com transmissão ao vivo e foco nas bancas e nos conteúdos do seu curso.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0289C6]/10 text-[#0289C6] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#004B7C]">Interação Direta no Chat</h4>
                      <p className="text-xs text-[#0A131F]/70">Envie suas perguntas durante a aula para os professores esclarecerem na hora.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0289C6]/10 text-[#0289C6] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#004B7C]">Material Didático Digital em PDF</h4>
                      <p className="text-xs text-[#0A131F]/70">Apostilas completas, listas de exercícios comentadas e resumos esquematizados prontos para download.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner de Compatibilidade Híbrida */}
          <div className="bg-gradient-to-r from-[#004B7C] to-[#015E96] rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-[#0289C6]" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg">Dúvida entre presencial e ao vivo?</h4>
                <p className="text-xs sm:text-sm text-[#E1E5E8]/85">Nossos consultores ajudam você a escolher a melhor grade de horários e plano de estudos.</p>
              </div>
            </div>
            <Link
              href="/contato"
              className="bg-[#0289C6] hover:bg-[#0289C6]/90 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shrink-0 transition-colors shadow"
            >
              FALE COM UM CONSULTOR
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Cards Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
            Catálogo Completo
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mt-2 mb-3">
            TODOS OS CURSOS E PREPARATÓRIOS
          </h2>
          <p className="text-sm sm:text-base text-[#0A131F]/80">
            Conheça as turmas preparatórias em Duque de Caxias e efetue sua matrícula com opção presencial e online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Cursos Técnicos (NOVO) */}
          <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-2xl hover:border-[#0289C6] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0289C6] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-bl-xl tracking-wider">
              Novas Turmas
            </div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#004B7C] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <Wrench className="w-7 h-7 text-[#0289C6]" />
                </div>
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3 py-1 rounded-full">
                  Técnico & Profissional
                </span>
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-2 group-hover:text-[#0289C6] transition-colors">
                Cursos Técnicos
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold bg-[#004B7C]/10 text-[#004B7C] px-2.5 py-0.5 rounded-md">
                  Presencial
                </span>
                <span className="text-[11px] font-semibold bg-[#0289C6]/10 text-[#0289C6] px-2.5 py-0.5 rounded-md">
                  Online (Ao Vivo & EAD)
                </span>
              </div>
              <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                {COURSES_DATA['cursos-tecnicos'].subtitle}
              </p>

              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
                  Áreas & Preparatórios:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs bg-[#E1E5E8]/60 text-[#0A131F]/80 px-2.5 py-1 rounded-lg">Eletrotécnica</span>
                  <span className="text-xs bg-[#E1E5E8]/60 text-[#0A131F]/80 px-2.5 py-1 rounded-lg">TI & Redes</span>
                  <span className="text-xs bg-[#E1E5E8]/60 text-[#0A131F]/80 px-2.5 py-1 rounded-lg">Mecânica</span>
                  <span className="text-xs bg-[#E1E5E8]/60 text-[#0A131F]/80 px-2.5 py-1 rounded-lg">CEFET / IFRJ / FAETEC</span>
                </div>
              </div>
            </div>

            <Link
              href="/cursos/tecnicos"
              className="inline-flex items-center justify-between w-full bg-[#004B7C] group-hover:bg-[#0289C6] text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md"
            >
              <span>VER DETALHES DOS CURSOS TÉCNICOS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Militar */}
          <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-2xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#004B7C] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <Shield className="w-7 h-7 text-[#0289C6]" />
                </div>
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3 py-1 rounded-full">
                  Carreiras Militares
                </span>
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-2 group-hover:text-[#0289C6] transition-colors">
                Preparatório Militar
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold bg-[#004B7C]/10 text-[#004B7C] px-2.5 py-0.5 rounded-md">
                  Presencial
                </span>
                <span className="text-[11px] font-semibold bg-[#0289C6]/10 text-[#0289C6] px-2.5 py-0.5 rounded-md">
                  Online
                </span>
              </div>
              <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                {COURSES_DATA['preparatorio-militar'].subtitle}
              </p>

              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
                  Concursos Atendidos:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {COURSES_DATA['preparatorio-militar'].concursosAtendidos.slice(0, 4).map((c, i) => (
                    <span key={i} className="text-xs bg-[#E1E5E8]/60 text-[#0A131F]/80 px-2.5 py-1 rounded-lg">
                      {c.split('(')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/cursos/preparatorio-militar"
              className="inline-flex items-center justify-between w-full bg-[#004B7C] group-hover:bg-[#0289C6] text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md"
            >
              <span>VER DETALHES DO PREPARATÓRIO MILITAR</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: ENEM */}
          <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-2xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#015E96] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <GraduationCap className="w-7 h-7 text-[#0289C6]" />
                </div>
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3 py-1 rounded-full">
                  Exame Nacional
                </span>
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-2 group-hover:text-[#0289C6] transition-colors">
                ENEM
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold bg-[#004B7C]/10 text-[#004B7C] px-2.5 py-0.5 rounded-md">
                  Presencial
                </span>
                <span className="text-[11px] font-semibold bg-[#0289C6]/10 text-[#0289C6] px-2.5 py-0.5 rounded-md">
                  Online
                </span>
              </div>
              <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                {COURSES_DATA['enem'].subtitle}
              </p>

              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
                  Pilares do Curso:
                </span>
                <ul className="space-y-1.5 text-xs text-[#0A131F]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>Teoria de Resposta ao Item (TRI) e estratégias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>Laboratório semanal de Redação Nota 1000</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/cursos/enem"
              className="inline-flex items-center justify-between w-full bg-[#004B7C] group-hover:bg-[#0289C6] text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md"
            >
              <span>VER DETALHES DO CURSO ENEM</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 4: Pré-Vestibular */}
          <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-2xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#004B7C] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <BookOpen className="w-7 h-7 text-[#0289C6]" />
                </div>
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3 py-1 rounded-full">
                  Vestibulares Tradicionais
                </span>
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-2 group-hover:text-[#0289C6] transition-colors">
                Pré-Vestibular
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold bg-[#004B7C]/10 text-[#004B7C] px-2.5 py-0.5 rounded-md">
                  Presencial
                </span>
                <span className="text-[11px] font-semibold bg-[#0289C6]/10 text-[#0289C6] px-2.5 py-0.5 rounded-md">
                  Online
                </span>
              </div>
              <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                {COURSES_DATA['pre-vestibular'].subtitle}
              </p>

              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
                  Foco em Provas Discursivas:
                </span>
                <ul className="space-y-1.5 text-xs text-[#0A131F]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>Vestibular Estadual UERJ (Qualificação e Discursivo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>Estudo aprofundado dos livros obrigatórios</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/cursos/pre-vestibular"
              className="inline-flex items-center justify-between w-full bg-[#004B7C] group-hover:bg-[#0289C6] text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md"
            >
              <span>VER DETALHES DO PRÉ-VESTIBULAR</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 5: Concursos Públicos */}
          <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-2xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#015E96] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <Award className="w-7 h-7 text-[#0289C6]" />
                </div>
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3 py-1 rounded-full">
                  Carreiras Públicas
                </span>
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-2 group-hover:text-[#0289C6] transition-colors">
                Concursos Públicos
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold bg-[#004B7C]/10 text-[#004B7C] px-2.5 py-0.5 rounded-md">
                  Presencial
                </span>
                <span className="text-[11px] font-semibold bg-[#0289C6]/10 text-[#0289C6] px-2.5 py-0.5 rounded-md">
                  Online
                </span>
              </div>
              <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                {COURSES_DATA['concursos'].subtitle}
              </p>

              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
                  Carreiras Atendidas:
                </span>
                <ul className="space-y-1.5 text-xs text-[#0A131F]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>Carreiras Policiais (PMERJ, PCERJ, PRF, PF)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>Tribunais e Prefeituras da Baixada Fluminense</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/cursos/concursos"
              className="inline-flex items-center justify-between w-full bg-[#004B7C] group-hover:bg-[#0289C6] text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md"
            >
              <span>VER DETALHES DE CONCURSOS PÚBLICOS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 6: Colégio */}
          <div className="bg-white rounded-3xl p-8 border border-[#E1E5E8] shadow-sm hover:shadow-2xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#004B7C] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                  <School className="w-7 h-7 text-[#0289C6]" />
                </div>
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider bg-[#0289C6]/10 px-3 py-1 rounded-full">
                  Educação Básica
                </span>
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#004B7C] mb-2 group-hover:text-[#0289C6] transition-colors">
                Colégio
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-semibold bg-[#004B7C]/10 text-[#004B7C] px-2.5 py-0.5 rounded-md">
                  Presencial
                </span>
                <span className="text-[11px] font-semibold bg-[#0289C6]/10 text-[#0289C6] px-2.5 py-0.5 rounded-md">
                  Plataforma Digital
                </span>
              </div>
              <p className="text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                Educação Infantil, Ensino Fundamental e Ensino Médio com formação humana integral, excelência pedagógica e acolhimento em Duque de Caxias.
              </p>

              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
                  Segmentos Oferecidos:
                </span>
                <ul className="space-y-1.5 text-xs text-[#0A131F]/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>Educação Infantil e Ensino Fundamental</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>Ensino Médio e Formação Acadêmica Completa</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/colegio"
              className="inline-flex items-center justify-between w-full bg-[#004B7C] group-hover:bg-[#0289C6] text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-md"
            >
              <span>CONHECER O COLÉGIO</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="NÃO TEM CERTEZA DE QUAL CURSO OU MODALIDADE ESCOLHER?"
        subtitle="Nossos consultores pedagógicos orientam você sobre cursos técnicos, editais, horários das aulas presenciais e acesso à plataforma online."
        primaryCtaText="FALAR COM CONSULTOR PEDAGÓGICO"
        primaryCtaHref="/contato"
        secondaryCtaText="VER RESULTADOS DE ALUNOS"
        secondaryCtaHref="/resultados"
      />
    </div>
  );
};

