import React, { useState } from 'react';
import { UserCheck, GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { CTASection } from '../components/common/CTASection';
import { TEAM_MEMBERS } from '../data/siteData';

export const EquipePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredMembers = activeCategory === 'todos'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Nossa Equipe Pedagógica e Docente"
        description="Conheça o corpo docente, coordenação e direção do Curso Progressão Caxias. Educadores dedicados à formação e aprovação em Duque de Caxias."
        canonicalPath="/equipe"
      />

      <Breadcrumbs items={[{ label: 'O Progressão' }, { label: 'Nossa Equipe' }]} />

{/* Hero Section */}
      <section className="relative bg-[#00223B] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#015E96]/30">
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
          <span className="text-xs sm:text-sm font-semibold text-[#FFBF00] uppercase tracking-wider block mb-2">
            Educadores & Gestores
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            DOCENTES ESPECIALISTAS E COORDENAÇÃO PRESENTE
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            Uma equipe que alia sólida formação acadêmica, profunda experiência nas bancas examinadoras e dedicação ao desenvolvimento de cada aluno.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#E1E5E8] sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {[
              { id: 'todos', label: 'Toda a Equipe' },
              { id: 'direcao', label: 'Direção Geral' },
              { id: 'professores', label: 'Professores' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${activeCategory === tab.id
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

      {/* Team Cards Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Foto do Profissional */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0F4F8]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.member-fallback');
                      if (fallback) {
                        (fallback as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}

                {/* Sombra sutil na borda inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/50 via-transparent to-transparent pointer-events-none" />

                {/* Fallback caso a imagem não carregue */}
                <div className="member-fallback hidden absolute inset-0 bg-gradient-to-br from-[#004B7C] to-[#015E96] items-center justify-center text-white font-serif-heading font-bold text-xl px-4 text-center">
                  {member.imagePlaceholderText || member.name}
                </div>
              </div>

              {/* Informações do Profissional: Função e Nome */}
              <div className="p-5 sm:p-6 flex flex-col">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0289C6]/10 text-[#0289C6] text-xs font-bold uppercase tracking-wider mb-2 w-fit">
                  <span>{member.role}</span>
                </div>

                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#004B7C] group-hover:text-[#015E96] transition-colors leading-tight">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};