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
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider block mb-2">
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
              { id: 'coordenacao', label: 'Coordenação' },
              { id: 'professores', label: 'Professores' },
              { id: 'pedagogico', label: 'Apoio Pedagógico' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.id
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
              className="bg-white rounded-2xl border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6]/60 transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Visual Avatar Placeholder */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#004B7C] to-[#015E96] flex items-center justify-center text-white font-serif-heading font-bold text-lg shadow-md border border-[#0289C6]/30 shrink-0">
                    <Users className="w-7 h-7 text-[#0289C6]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#0289C6] uppercase tracking-wider block">
                      {member.category.toUpperCase()}
                    </span>
                    <h3 className="font-serif-heading text-lg font-bold text-[#004B7C]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#0A131F]/70 font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-[#0A131F]/80 leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Credentials / Badges */}
              <div className="pt-4 border-t border-[#E1E5E8]">
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block mb-2">
                  Formação & Qualificação:
                </span>
                <ul className="space-y-1.5 text-xs text-[#0A131F]/70">
                  {member.credentials.map((cred, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
