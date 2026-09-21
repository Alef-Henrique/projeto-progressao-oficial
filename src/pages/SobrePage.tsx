import React from 'react';
import { Target, Compass, Heart, Shield, Award, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { CTASection } from '../components/common/CTASection';
import { SITE_CONFIG } from '../config/siteConfig';

export const SobrePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Sobre o Progressão Caxias"
        description="Conheça a história, missão, visão e valores do Curso Progressão Caxias. Tradição e excelência em Duque de Caxias."
        canonicalPath="/sobre"
      />

      <Breadcrumbs items={[{ label: 'O Progressão' }, { label: 'Sobre Nós' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider block mb-2">
            Nossa Instituição
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            TRADIÇÃO, DISCIPLINA E COMPROMISSO COM O SEU FUTURO
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            O Curso Progressão Caxias é uma instituição educacional que une a solidez da formação escolar à intensidade e precisão dos cursos preparatórios de alta performance.
          </p>
        </div>
      </section>

      {/* Quem Somos & História */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Quem Somos
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-4">
                UMA HISTÓRIA DEDICADA À EDUCAÇÃO EM DUQUE DE CAXIAS
              </h2>
            </div>

            <div className="prose text-sm sm:text-base text-[#0A131F]/80 leading-relaxed space-y-4">
              <p className="text-base sm:text-lg text-[#004B7C] font-medium leading-relaxed">
                O Progressão nasceu a partir da percepção de alguns militares sobre a necessidade de preparação para o concurso do EAGS. A partir dessa iniciativa, a instituição construiu uma trajetória de mais de três décadas dedicada à educação e à preparação de alunos.
              </p>

              <p>
                O <strong>{SITE_CONFIG.institutionName}</strong> consolidou-se como um polo de referência na formação de candidatos conscientes e na aprovação de estudantes nos concursos e vestibulares mais disputados do Rio de Janeiro e do Brasil.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E1E5E8] bg-white">
              <img
                src="/assets/sobre-nos.jpeg"
                alt="Ambiente pedagógico do Progressão Caxias"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-[#004B7C] text-white">
                <h3 className="font-serif-heading font-bold text-lg text-white mb-1">
                  Excelência em Duas Frentes
                </h3>
                <p className="text-xs text-[#E1E5E8]/80">
                  Colégio da Educação Infantil ao Ensino Médio & Cursos Preparatórios Militares, ENEM, Vestibulares e Concursos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-[#E1E5E8]/40 border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Nossa Bússola
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1">
              MISSÃO, VISÃO E VALORES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-2xl border border-[#E1E5E8] shadow-sm hover:shadow-md transition-all flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-[#004B7C] text-white flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#0289C6]" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-3">
                Nossa Missão
              </h3>
              <p className="text-sm text-[#0A131F]/70 leading-relaxed">
                Oferecer uma formação educacional sólida e disciplinada que desenvolva o potencial crítico, ético e acadêmico dos alunos, viabilizando conquistas reais em exames concorridos e na vida.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-2xl border border-[#E1E5E8] shadow-sm hover:shadow-md transition-all flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-[#015E96] text-white flex items-center justify-center mb-5">
                <Compass className="w-6 h-6 text-[#0289C6]" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-3">
                Nossa Visão
              </h3>
              <p className="text-sm text-[#0A131F]/70 leading-relaxed">
                Ser referência não apenas no segmento de concursos públicos, mas também no segmento escolar, em todo o município e no estado.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-2xl border border-[#E1E5E8] shadow-sm hover:shadow-md transition-all flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-[#004B7C] text-white flex items-center justify-center mb-5">
                <Heart className="w-6 h-6 text-[#0289C6]" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#004B7C] mb-3">
                Nossos Valores
              </h3>
              <ul className="text-sm text-[#0A131F]/80 space-y-2.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                  <span className="font-semibold text-sm">Excelência</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                  <span className="font-semibold text-sm">Resultado</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                  <span className="font-semibold text-sm">Disciplina</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                  <span className="font-semibold text-sm">Respeito</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                  <span className="font-semibold text-sm">Compromisso</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Institucionais */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
            Por que somos diferentes
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1">
            DIFERENCIAIS DO PROGRESSÃO CAXIAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#E1E5E8] flex gap-4">
            <Shield className="w-8 h-8 text-[#0289C6] shrink-0" />
            <div>
              <h4 className="font-serif-heading font-bold text-base text-[#004B7C] mb-1">Ambiente Seguro e Focado</h4>
              <p className="text-xs sm:text-sm text-[#0A131F]/70">Estrutura física monitorada que prioriza a concentração nos estudos e a tranquilidade dos responsáveis.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E1E5E8] flex gap-4">
            <Award className="w-8 h-8 text-[#0289C6] shrink-0" />
            <div>
              <h4 className="font-serif-heading font-bold text-base text-[#004B7C] mb-1">Cultura de Superação</h4>
              <p className="text-xs sm:text-sm text-[#0A131F]/70">Incentivo diário para que cada estudante construa confiança e autonomia na resolução de provas exigentes.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E1E5E8] flex gap-4">
            <Target className="w-8 h-8 text-[#0289C6] shrink-0" />
            <div>
              <h4 className="font-serif-heading font-bold text-base text-[#004B7C] mb-1">Estratégia Pedagógica Atualizada</h4>
              <p className="text-xs sm:text-sm text-[#0A131F]/70">Constante mapeamento das alterações nos editais militares, vestibulares e concursos públicos.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
