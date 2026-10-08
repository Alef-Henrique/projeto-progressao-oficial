import React from 'react';
import { Calendar, Clock, ArrowRight, Shield, BookOpen, Users } from 'lucide-react';
import { TURMAS_MILITARES, TurmaDetalhes } from '../../data/turmasData';

interface TurmasEmDestaqueSectionProps {
  onSelectTurma: (turma: TurmaDetalhes) => void;
}

export const TurmasEmDestaqueSection: React.FC<TurmasEmDestaqueSectionProps> = ({ onSelectTurma }) => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E1E5E8]">
      {/* Título da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
          <span>Turmas Oficiais com Matrículas Abertas</span>
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
          Detalhes das Turmas Militares
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#0A131F]/70 leading-relaxed">
          Consulte o cronograma pedagógico completo, ciclos de aprendizagem, matérias, simulados e materiais didáticos de cada turma.
        </p>
      </div>

      {/* Grid de Cards das Turmas */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {TURMAS_MILITARES.map((turma) => (
          <div
            key={turma.id}
            className="bg-white rounded-2xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group"
          >
            {/* Bloco Lateral com Destaque Visual */}
            <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-6 sm:p-8 md:w-2/5 flex flex-col justify-between relative overflow-hidden shrink-0">
              <div 
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 16px, transparent 16px, transparent 32px)'
                }}
              />
              
              <div className="relative z-10 space-y-3">
                <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Turma Confirmada
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-white uppercase leading-snug">
                  {turma.titulo}
                </h3>
                <p className="text-xs text-[#E1E5E8] leading-relaxed">
                  {turma.subtitulo}
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/15">
                <span className="text-[10px] font-bold text-[#FFBF00] uppercase tracking-wider block mb-1">
                  Foco nos Concursos:
                </span>
                <span className="text-sm font-bold text-white block">
                  {turma.foco}
                </span>
              </div>
            </div>

            {/* Conteúdo Principal com Informações Chave */}
            <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between gap-6">
              <div className="grid grid-cols-2 gap-3.5 text-xs">
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Período
                  </span>
                  <span className="font-bold text-[#00223B] block">
                    {turma.periodo}
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Turno e Horário
                  </span>
                  <span className="font-bold text-[#00223B] block">
                    {turma.turno} ({turma.horario})
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Carga Horária
                  </span>
                  <span className="font-bold text-[#00223B] block">
                    {turma.cargaTotal}
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Concursos
                  </span>
                  <span className="font-bold text-[#00223B] block line-clamp-1">
                    {turma.foco}
                  </span>
                </div>
              </div>

              {/* Botão para Abrir os Detalhes */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectTurma(turma)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Ver detalhes da turma</span>
                  <ArrowRight className="w-4 h-4 text-[#FFBF00] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
