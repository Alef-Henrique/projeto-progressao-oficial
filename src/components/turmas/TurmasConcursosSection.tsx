import React from 'react';
import { TURMAS_CONCURSOS, TurmaConcurso } from '../../data/turmasconcursos';
import { TurmaConcursoCard } from './TurmaConcursoCard';

interface TurmasConcursosSectionProps {
  onSelectTurma: (turma: TurmaConcurso) => void;
  onMatricula?: (turma: TurmaConcurso) => void;
}

export const TurmasConcursosSection: React.FC<TurmasConcursosSectionProps> = ({ 
  onSelectTurma,
  onMatricula
}) => {
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

      {/* Grid 2x2 de Cards das Turmas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {TURMAS_CONCURSOS.map((turma, idx) => {
          const isFirstOfConcurso = TURMAS_CONCURSOS.findIndex(t => t.concursoId === turma.concursoId) === idx;
          const concursoAnchorId = isFirstOfConcurso ? `turmas-${turma.concursoId}` : undefined;
          
          return (
            <div 
              key={turma.id}
              id={concursoAnchorId}
              className="scroll-mt-24 md:scroll-mt-28 flex flex-col h-full"
            >
              {/* Se for a turma de PRF Agente, também disponibiliza o alias turmas-prf-agente-federal */}
              {turma.concursoId === 'prf' && (
                <div id="turmas-prf-agente-federal" className="scroll-mt-24 md:scroll-mt-28" />
              )}
              <TurmaConcursoCard
                id={`turma-${turma.id}`}
                turma={turma}
                onSelectTurma={onSelectTurma}
                onMatricula={onMatricula}
                showButton={true}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};