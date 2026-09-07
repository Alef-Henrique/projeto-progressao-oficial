import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { CTASection } from '../components/common/CTASection';
import { AnimatedCounter } from '../components/common/AnimatedCounter';

export const ResultadosPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  // Approvals mural dataset with student photos, student names and contest names
  const approvalsList = [
    {
      id: 1,
      category: 'militar',
      name: 'Lucas Silveira',
      exam: 'EsPCEx',
      examFull: 'Escola Preparatória de Cadetes do Exército',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'militar',
      name: 'Beatriz Mendonça',
      exam: 'AFA',
      examFull: 'Academia da Força Aérea',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'militar',
      name: 'Matheus Ribeiro',
      exam: 'Colégio Naval',
      examFull: 'Colégio Naval & EPCAr',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'militar',
      name: 'Gabriel Santos',
      exam: 'ESA',
      examFull: 'Escola de Sargentos das Armas',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'enem',
      name: 'Mariana Costa',
      exam: 'Medicina • UFRJ',
      examFull: 'SISU / Universidade Federal do Rio de Janeiro',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'enem',
      name: 'Felipe Almeida',
      exam: 'Engenharia • UFF',
      examFull: 'SISU / Universidade Federal Fluminense',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      category: 'enem',
      name: 'Juliana Rocha',
      exam: 'Direito • UNIRIO',
      examFull: 'SISU / Universidade Federal do Estado do RJ',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      category: 'vestibular',
      name: 'Camila Martins',
      exam: 'Medicina • UERJ',
      examFull: 'UERJ Vestibular Estadual - Conceito A',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      category: 'vestibular',
      name: 'Rafael Oliveira',
      exam: 'Direito • UERJ',
      examFull: 'UERJ Vestibular Estadual',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 10,
      category: 'concursos',
      name: 'Rodrigo Nogueira',
      exam: 'PMERJ',
      examFull: 'Polícia Militar do Estado do Rio de Janeiro',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 11,
      category: 'concursos',
      name: 'Larissa Souza',
      exam: 'PCERJ',
      examFull: 'Polícia Civil do Estado do Rio de Janeiro',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 12,
      category: 'concursos',
      name: 'Thiago Carvalho',
      exam: 'TJ-RJ',
      examFull: 'Tribunal de Justiça do Estado do Rio de Janeiro',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const filteredApprovals = activeTab === 'todos'
    ? approvalsList
    : approvalsList.filter(item => item.category === activeTab);

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Resultados e Aprovações - Curso Progressão Caxias"
        description="Confira o mural de aprovações do Curso Progressão Caxias: carreiras militares, ENEM, UERJ, vestibulares e concursos públicos."
        canonicalPath="/resultados"
      />

      <Breadcrumbs items={[{ label: 'O Progressão' }, { label: 'Resultados' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <Trophy className="w-4 h-4 text-white" />
            <span className="text-white">Mural de Honra & Conquistas</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            NOSSOS RESULTADOS E APROVAÇÕES
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            O fruto da dedicação dos nossos alunos, da disciplina nos estudos e da orientação assertiva dos nossos professores em Duque de Caxias.
          </p>
        </div>
      </section>

      {/* Estatísticas Institucionais */}
      <section className="py-12 bg-white border-b border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#E1E5E8]/30 border border-[#E1E5E8] p-6 rounded-2xl text-center shadow-xs">
            <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#004B7C] block mb-1">
              <AnimatedCounter target={30} prefix="+" suffix=" Mil" duration={2000} />
            </span>
            <span className="text-xs font-bold text-[#0A131F]/70 uppercase tracking-wider">
              Aprovações em Concursos e Vestibulares
            </span>
          </div>

          <div className="bg-[#E1E5E8]/30 border border-[#E1E5E8] p-6 rounded-2xl text-center shadow-xs">
            <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#0289C6] block mb-1">
              <AnimatedCounter target={98} suffix="%" duration={1800} />
            </span>
            <span className="text-xs font-bold text-[#0A131F]/70 uppercase tracking-wider">
              Satisfação dos Resultados
            </span>
          </div>

          <div className="bg-[#E1E5E8]/30 border border-[#E1E5E8] p-6 rounded-2xl text-center shadow-xs">
            <span className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#004B7C] block mb-1">
              <AnimatedCounter target={31} suffix=" anos" duration={1600} />
            </span>
            <span className="text-xs font-bold text-[#0A131F]/70 uppercase tracking-wider">
              Anos de História em Duque de Caxias
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#E1E5E8] sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {[
              { id: 'todos', label: 'Todos os Resultados' },
              { id: 'militar', label: 'Carreiras Militares' },
              { id: 'enem', label: 'ENEM' },
              { id: 'vestibular', label: 'Vestibulares & UERJ' },
              { id: 'concursos', label: 'Concursos Públicos' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#004B7C] text-white shadow-md'
                    : 'bg-[#E1E5E8]/60 text-[#0A131F]/80 hover:bg-[#E1E5E8] hover:text-[#004B7C]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mural Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredApprovals.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E1E5E8] hover:border-[#0289C6] flex flex-col justify-end aspect-square bg-[#002B48]"
            >
              {/* Imagem do Aluno */}
              <img
                src={item.image}
                alt={`${item.name} - Aprovado em ${item.exam}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Degradê institucional para contraste ideal */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002B48] via-[#002B48]/55 to-transparent transition-opacity duration-300 group-hover:via-[#002B48]/45" />

              {/* Conteúdo Sobreposto: Nome do Aluno e Nome do Concurso */}
              <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-1 text-white">
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#68C5DB] uppercase tracking-wider">
                  Aprovado(a)
                </span>
                
                {/* Nome do Aluno */}
                <h3 className="font-serif-heading text-base sm:text-lg font-bold text-white leading-tight drop-shadow-sm group-hover:text-[#68C5DB] transition-colors line-clamp-1">
                  {item.name}
                </h3>

                {/* Nome do Concurso */}
                <div className="pt-1.5 border-t border-white/20 mt-0.5 flex flex-col gap-0.5">
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {item.exam}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-white/75 truncate">
                    {item.examFull}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria Visual de Comemoração */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-10">
          <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#004B7C]">
            Mural Comemorativo
          </h3>
          <p className="text-xs sm:text-sm text-[#0A131F]/70 mt-1">
            Celebrações, vibração e o tradicional banho de tinta dos aprovados no Progressão.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#E1E5E8] h-60">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
              alt="Alunos celebrando aprovação no Progressão Caxias"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#E1E5E8] h-60">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80"
              alt="Grupo de alunos comemorando no colégio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#E1E5E8] h-60">
            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
              alt="Cerimônia de formandos e aprovação em vestibular"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        badge="Faça sua Matrícula no Progressão Caxias"
        title="FAÇA SUA MATRÍCULA E ESTEJA NO PRÓXIMO MURAL DE APROVADOS"
        subtitle="Dê o primeiro passo para conquistar a sua vaga. Efetue sua matrícula e inicie sua preparação com a metodologia que mais aprova em Duque de Caxias."
        primaryCtaText="FAZER MINHA MATRÍCULA"
        primaryCtaHref="/contato"
        secondaryCtaText="CONHECER OS CURSOS"
        secondaryCtaHref="/cursos"
      />
    </div>
  );
};
