import React from 'react';
import { Calendar, Clock, ArrowRight, GraduationCap, Users } from 'lucide-react';
import { TURMAS_VESTIBULAR, TurmaDetalhes } from '../../data/turmasData';

interface TurmasVestibularSectionProps {
  onSelectTurma: (turma: TurmaDetalhes) => void;
}

export const TurmasVestibularSection: React.FC<TurmasVestibularSectionProps> = ({ onSelectTurma }) => {
  return (
    <section id="turmas-vestibular" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-b border-[#E1E5E8]">
      {/* Título da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
          <span>Turmas Oficiais com Matrículas Abertas</span>
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
          Turma Pré-Vestibular 2027
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#0A131F]/70 leading-relaxed">
          Consulte o cronograma pedagógico completo, ciclos de aprendizagem, horários dos turnos, simulados e materiais didáticos da nossa turma Pré-Vest.
        </p>
      </div>

      {/* Grid de Cards das Turmas */}
      <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {TURMAS_VESTIBULAR.map((turma) => (
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
                <p className="text-xs text-[#E1E5E8] leading-relaxed font-semibold">
                  {turma.subtitulo}
                </p>
                <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                  {turma.heroTexto}
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
                    Turnos
                  </span>
                  <span className="font-bold text-[#00223B] block">
                    {turma.turno}
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Carga Total
                  </span>
                  <span className="font-bold text-[#00223B] block">
                    {turma.cargaTotal}
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Foco Vestibulares
                  </span>
                  <span className="font-bold text-[#00223B] block line-clamp-1">
                    {turma.foco}
                  </span>
                </div>
              </div>

              {/* Informação sobre os Turnos */}
              <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8] text-xs text-[#334155]">
                <span className="font-bold text-[#00223B] block mb-0.5">Horários dos Turnos:</span>
                <span>Manhã (08h15 às 11h30) • Tarde (13h20 às 16h35)</span>
                <span className="block text-[11px] text-[#64748B] mt-0.5">Mesmo calendário pedagógico para ambos os turnos.</span>
              </div>

              {/* Botão para Abrir os Detalhes da Turma */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onSelectTurma(turma)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer group"
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
