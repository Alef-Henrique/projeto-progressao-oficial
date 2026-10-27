import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { CTASection } from '../components/common/CTASection';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { RDStationForm } from '../components/rdstation/RDStationForm';

export const ResultadosPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  // Approvals mural dataset with student photos, student names and contest names
  const approvalsList = [
    {
      id: 1,
      category: 'militar',
      name: 'David Lopes',
      exam: 'EAGS',
      examFull: '',
      year: '2025',
      image: '/assets/david-lopes-02.jpeg',
    },
    {
      id: 2,
      category: 'Pré-vestibular',
      name: 'Arthur Teodoro',
      exam: 'Medicina • UFRJ • UERJ',
      examFull: '',
      year: '2025',
      image: '/assets/arthur-teodoro.webp',
    },
    {
      id: 3,
      category: 'militar',
      name: 'Emerson Moura',
      exam: 'ESA',
      examFull: '',
      year: '2024',
      image: '/assets/emerson-moura-esa2.jpg',
    },
    {
      id: 4,
      category: 'militar',
      name: 'Júlia Rainha',
      exam: 'ESA',
      examFull: '',
      year: '2024',
      image: '/assets/julia-rainha-esa2.jpg',
    },
    {
      id: 5,
      category: 'militar',
      name: 'Hudson',
      exam: 'ESA',
      examFull: '',
      year: '2025',
      image: '/assets/hudson-esa.webp',
    },
    {
      id: 6,
      category: 'militar',
      name: 'Jenyfer Luiza',
      exam: 'ESA',
      examFull: '',
      year: '2025',
      image: '/assets/aprovados-concursos/JENYFER-LUIZA-ESASAUDE.webp',
    },
    {
      id: 7,
      category: 'militar',
      name: 'Ruan de Assis',
      exam: 'ESA',
      examFull: '',
      year: '2024',
      image: '/assets/ruan-de-assis-esa.png',
    },
    {
      id: 8,
      category: 'militar',
      name: 'Miguel Klayn',
      exam: 'EPCAR',
      examFull: '',
      year: '2025',
      image: '/assets/miguel-aprovado.webp',
    },
    {
      id: 9,
      category: 'concursos',
      name: 'Thiago Magalhães',
      exam: 'Polícia Civil - RJ',
      examFull: '',
      year: '2024',
      image: '/assets/thiago.jpeg',
    },
    {
      id: 10,
      category: 'militar',
      name: 'Luis Fernando',
      exam: 'EAM',
      examFull: '',
      year: '2024',
      image: '/assets/luis-fernando-marinha.jpeg',
    },
    {
      id: 11,
      category: 'militar',
      name: 'Amanda Marinho',
      exam: 'EAGS',
      examFull: '',
      year: '2024',
      image: '/assets/amanda-marinho-eags.jpg',
    },
    {
      id: 12,
      category: 'militar',
      name: 'Anthony',
      exam: 'ESA',
      examFull: '',
      year: '2024',
      image: '/assets/antony-cap-video.jpg',
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
            <Trophy className="w-4 h-4 text-[#FFBF00]" />
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
              de História em Duque de Caxias
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
              { id: 'vestibular', label: 'Vestibulares' },
              { id: 'concursos', label: 'Concursos Públicos' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeTab === tab.id
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


    </div>
  );
};
