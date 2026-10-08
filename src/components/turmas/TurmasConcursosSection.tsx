import React from 'react';
import { TURMAS_CONCURSOS, TurmaConcurso } from '../../data/turmasconcursos';
import { TurmaConcursoCard } from './TurmaConcursoCard';

interface TurmasConcursosSectionProps {
  onSelectTurma: (turma: TurmaConcurso) => void;
}

export const TurmasConcursosSection: React.FC<TurmasConcursosSectionProps> = ({ onSelectTurma }) => {
  return (
    <section id="nossas-turmas" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E1E5E8]">
      {/* Título da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
          <span>Turmas Oficiais com Matrículas Abertas</span>
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
          Nossas Turmas — Concursos Públicos
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#0A131F]/70 leading-relaxed">
          Consulte o cronograma pedagógico completo, horários, matérias, simulados e especificações oficiais de cada turma preparatória.
        </p>
      </div>

      {/* Grid de Cards das Turmas */}
      <div className="grid grid-cols-1 gap-5 sm:gap-6 max-w-4xl mx-auto">
        {TURMAS_CONCURSOS.map((turma) => (
          <TurmaConcursoCard
            key={turma.id}
            turma={turma}
            onSelectTurma={onSelectTurma}
            showButton={true}
          />
        ))}
      </div>
    </section>
  );
};
