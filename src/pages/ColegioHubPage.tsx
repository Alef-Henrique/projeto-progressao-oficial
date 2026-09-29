import React from 'react';
import { 
  ArrowRight, 
  School, 
  Compass, 
  GraduationCap, 
  Target, 
  Users, 
  Award, 
  ShieldCheck 
} from 'lucide-react';
import { Link } from '../components/routing/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { CTASection } from '../components/common/CTASection';

export const ColegioHubPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Colégio Progressão Caxias - Ensino Fundamental II e Ensino Médio"
        description="Educação de excelência em Duque de Caxias. Ensino Fundamental II (6º ao 9º ano) e Ensino Médio com foco em desenvolvimento acadêmico, autonomia, pensamento crítico e preparação para o futuro."
        canonicalPath="/colegio"
      />

      <Breadcrumbs items={[{ label: 'Colégio' }, { label: 'Visão Geral' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <School className="w-4 h-4 text-white" />
            <span className="text-white">Colégio Progressão Caxias • Duque de Caxias / RJ</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            EXCELÊNCIA ACADÊMICA, AUTONOMIA E FORMAÇÃO INTEGRAL
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            Uma proposta pedagógica moderna do Ensino Fundamental II ao Ensino Médio. Aliamos rigor conceitual, acompanhamento pedagógico próximo e desenvolvimento de competências para que cada estudante conquiste autonomia e sucesso acadêmico.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-xs sm:text-sm font-semibold">
            <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white">
              Ensino Fundamental II (6º ao 9º ano)
            </span>
            <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-white">
              Ensino Médio (1º ao 3º ano)
            </span>
          </div>
        </div>
      </section>

      {/* SEÇÃO 1: ENSINO FUNDAMENTAL II (6º ao 9º Ano) */}
      <section id="fundamental-2" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header do Bloco */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0289C6]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-[#0289C6]" />
            <span>Anos Finais • 6º ao 9º Ano</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C]">
            ENSINO FUNDAMENTAL II
          </h2>
          <p className="text-sm sm:text-base text-[#0A131F]/75 mt-2 max-w-3xl">
            Transição para a maturidade escolar com metodologia dinâmica, professores especialistas e desenvolvimento contínuo de autonomia, raciocínio lógico e responsabilidade cidadã.
          </p>
        </div>

        {/* Card Principal Estruturado */}
        <div className="bg-white rounded-3xl border border-[#E1E5E8] shadow-sm p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Imagem e Badges */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src="/assets/fundamental.jpeg"
                alt="Estudantes do Ensino Fundamental II no Colégio Progressão Caxias"
              className="w-full h-80 sm:h-96 object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0289C6] block">
                  Metodologia Moderna
                </span>
                <p className="text-sm font-semibold text-white/90 mt-0.5">
                  Estudo com foco em método, pensamento crítico e acompanhamento constante.
                </p>
              </div>
            </div>

            {/* Texto Descritivo e Séries Atendidas */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#004B7C]">
                Proposta Pedagógica dos Anos Finais
              </h3>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                No Ensino Fundamental II do Colégio Progressão Caxias, o estudante vivencia a evolução da sua rotina escolar com professores especialistas para cada disciplina. O aprendizado equilibra o aprofundamento das ciências e linguagens com o acolhimento socioemocional, preparando o jovem para conquistar disciplina pessoal e superar novos desafios acadêmicos com confiança.
              </p>

              {/* Anos de Ensino Atendidos */}
              <div className="w-full pt-2">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-2.5">
                  Etapas Atendidas no Segmento:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="bg-[#F4F6F8] p-3 rounded-xl border border-[#E1E5E8] text-center">
                    <span className="font-bold text-[#004B7C] text-sm block">6º Ano</span>
                    <span className="text-[11px] text-[#0A131F]/70">Adaptação e Rotina</span>
                  </div>
                  <div className="bg-[#F4F6F8] p-3 rounded-xl border border-[#E1E5E8] text-center">
                    <span className="font-bold text-[#004B7C] text-sm block">7º Ano</span>
                    <span className="text-[11px] text-[#0A131F]/70">Método e Hábitos</span>
                  </div>
                  <div className="bg-[#F4F6F8] p-3 rounded-xl border border-[#E1E5E8] text-center">
                    <span className="font-bold text-[#004B7C] text-sm block">8º Ano</span>
                    <span className="text-[11px] text-[#0A131F]/70">Pensamento Crítico</span>
                  </div>
                  <div className="bg-[#F4F6F8] p-3 rounded-xl border border-[#E1E5E8] text-center">
                    <span className="font-bold text-[#004B7C] text-sm block">9º Ano</span>
                    <span className="text-[11px] text-[#0A131F]/70">Foco no Ensino Médio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botão de Navegação */}
          <div className="border-t border-[#E1E5E8] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#0A131F]/60">
              Conheça a grade curricular, atividades de contraturno e diferenciais dos anos finais.
            </span>
            <Link
              href="/colegio/fundamental-2"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#015E96] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-md active:scale-95"
            >
              <span>CONHECER O ENSINO FUNDAMENTAL II</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: ENSINO MÉDIO (1º ao 3º Ano) - MESMO PADRÃO VISUAL E ESTRUTURAL */}
      <section id="ensino-medio" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-[#F4F6F8]/60 border-t border-[#E1E5E8]">
        {/* Header do Bloco */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap className="w-4 h-4 text-[#004B7C]" />
            <span>Formação Estratégica • 1º ao 3º Ano</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C]">
            ENSINO MÉDIO
          </h2>
          <p className="text-sm sm:text-base text-[#0A131F]/75 mt-2 max-w-3xl">
            Formação acadêmica sólida, protagonismo juvenil e preparação intensiva para o ENEM, UERJ e concursos militares, com simulados oficiais e acompanhamento de alta performance.
          </p>
        </div>

        {/* Card Principal Estruturado */}
        <div className="bg-white rounded-3xl border border-[#E1E5E8] shadow-sm p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Imagem e Badges */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src="/assets/img-ensino-2.JPG"
                alt="Estudantes do Ensino Médio no Colégio Progressão Caxias"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0289C6] block">
                  DNA de Conquista
                </span>
                <p className="text-sm font-semibold text-white/90 mt-0.5">
                  Integração entre excelência escolar e matrizes dos grandes vestibulares.
                </p>
              </div>
            </div>

            {/* Texto Descritivo e Anos Atendidos */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#004B7C]">
                Proposta Pedagógica do Ensino Médio
              </h3>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed">
                No Ensino Médio do Colégio Progressão Caxias, o rigor acadêmico converge diretamente com a preparação para os grandes exames e com o planejamento de vida do jovem. O currículo aprofunda os conhecimentos científicos e humanísticos, oferecendo oficinas contínuas de redação, simulados cronometrados e orientação para as escolhas profissionais que definirão o futuro dos estudantes.
              </p>

              {/* Anos de Ensino Atendidos */}
              <div className="w-full pt-2">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-2.5">
                  Etapas Atendidas no Segmento:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="bg-[#F4F6F8] p-3 rounded-xl border border-[#E1E5E8] text-center">
                    <span className="font-bold text-[#004B7C] text-sm block">1º Ano</span>
                    <span className="text-[11px] text-[#0A131F]/70">Aprofundamento e Metas</span>
                  </div>
                  <div className="bg-[#F4F6F8] p-3 rounded-xl border border-[#E1E5E8] text-center">
                    <span className="font-bold text-[#004B7C] text-sm block">2º Ano</span>
                    <span className="text-[11px] text-[#0A131F]/70">Consolidação e Itinerários</span>
                  </div>
                  <div className="bg-[#F4F6F8] p-3 rounded-xl border border-[#E1E5E8] text-center">
                    <span className="font-bold text-[#004B7C] text-sm block">3º Ano (Terceirão)</span>
                    <span className="text-[11px] text-[#0A131F]/70">Revisão, ENEM & UERJ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botão de Navegação */}
          <div className="border-t border-[#E1E5E8] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#0A131F]/60">
              Conheça as turmas de Ensino Médio regular, simulados e laboratórios de redação.
            </span>
            <Link
              href="/colegio/ensino-medio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#015E96] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-colors shadow-md active:scale-95"
            >
              <span>CONHECER O ENSINO MÉDIO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>



      {/* DIFERENCIAIS INSTITUCIONAIS */}
      <section className="py-16 bg-[#004B7C] text-white border-y border-[#015E96] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Compromisso com o Aprendizado
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
              POR QUE ESCOLHER O COLÉGIO PROGRESSÃO CAXIAS?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#015E96] p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
              <Users className="w-8 h-8 text-[#0289C6]" />
              <h3 className="font-serif-heading text-lg font-bold text-white">Corpo Docente Especialista</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                Professores dedicados que dominam a matéria e aplicam didática dinâmica e motivadora em sala de aula.
              </p>
            </div>

            <div className="bg-[#015E96] p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
              <Target className="w-8 h-8 text-[#0289C6]" />
              <h3 className="font-serif-heading text-lg font-bold text-white">Simulados e Avaliações</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                Treinamento prático e diagnóstico contínuo para mensurar o desenvolvimento e aperfeiçoar os pontos fracos.
              </p>
            </div>

            <div className="bg-[#015E96] p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
              <ShieldCheck className="w-8 h-8 text-[#0289C6]" />
              <h3 className="font-serif-heading text-lg font-bold text-white">Estrutura e Segurança</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                Salas climatizadas, recursos multimídia e localização privilegiada e acessível no centro de Duque de Caxias.
              </p>
            </div>

            <div className="bg-[#015E96] p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
              <Award className="w-8 h-8 text-[#0289C6]" />
              <h3 className="font-serif-heading text-lg font-bold text-white">Tradição em Conquistas</h3>
              <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
                Metodologia testada e aprovada, com histórico consistente de alunos aprovados nas instituições mais desejadas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
