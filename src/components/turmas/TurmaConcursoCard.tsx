import React from 'react';
import { 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TurmaConcurso } from '../../data/turmasconcursos';
import type { ConcursoValoresInfo } from '../../data/concursosData';

interface TurmaConcursoCardProps {
  turma: TurmaConcurso;
  onSelectTurma?: (turma: TurmaConcurso) => void;
  showButton?: boolean;
}

export const TurmaConcursoCard: React.FC<TurmaConcursoCardProps> = ({ 
  turma, 
  onSelectTurma,
  showButton = true 
}) => {
  const horarioLabel = turma.horarioRotulo || (turma.id.includes('prf') ? 'Horário em 2026' : 'Horário');

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row group">
      {/* Lado Esquerdo com Destaque: Nome do Concurso / Turma */}
      <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-5 sm:p-6 md:w-2/5 flex flex-col justify-between relative overflow-hidden shrink-0">
        <div 
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 16px, transparent 16px, transparent 32px)'
          }}
        />
        
        <div className="relative z-10 space-y-2">
          <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-[10px] px-2.5 py-0.5 rounded uppercase tracking-wider">
            {turma.categoria || 'Nossa turma'}
          </span>
          <h3 className="font-serif-heading text-lg sm:text-xl md:text-2xl font-black text-white uppercase leading-snug">
            {turma.titulo}
          </h3>
          {turma.subtitulo && (
            <p className="text-xs text-[#E1E5E8]/90 leading-relaxed font-medium">
              {turma.subtitulo}
            </p>
          )}
        </div>

        <div className="relative z-10 pt-4 mt-4 border-t border-white/15">
          <span className="text-[10px] font-bold text-[#FFBF00] uppercase tracking-wider block">
            Turma Confirmada · Progressão Caxias
          </span>
        </div>
      </div>

      {/* Lado Direito: Pequenas Informações e Botão Ver Detalhes */}
      <div className="p-5 sm:p-6 md:w-3/5 flex flex-col justify-between gap-4 bg-white">
        {/* Pequenas Informações */}
        <div className="grid grid-cols-2 gap-2.5 text-xs">
          {turma.periodo && (
            <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8]">
              <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5">
                Período
              </span>
              <span className="font-bold text-[#00223B] text-xs block">
                {turma.periodo}
              </span>
            </div>
          )}

          {turma.modalidade && (
            <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8]">
              <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5">
                Modalidade
              </span>
              <span className="font-bold text-[#00223B] text-xs block">
                {turma.modalidade}
              </span>
            </div>
          )}
          
          {turma.formato && (
            <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8]">
              <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5">
                Formato
              </span>
              <span className="font-bold text-[#00223B] text-xs block truncate" title={turma.formato}>
                {turma.formato}
              </span>
            </div>
          )}

          {turma.turnos && (
            <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8]">
              <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5">
                Turnos
              </span>
              <span className="font-bold text-[#00223B] text-xs block">
                {turma.turnos}
              </span>
            </div>
          )}

          {(turma.cargaNoite || turma.cargaTotal) && (
            <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8]">
              <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5">
                {turma.cargaNoite ? 'Carga (noite)' : 'Carga'}
              </span>
              <span className="font-bold text-[#004B7C] text-xs block">
                {turma.cargaNoite || turma.cargaTotal}
              </span>
            </div>
          )}

          {turma.frequencia && (
            <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8]">
              <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5">
                Frequência
              </span>
              <span className="font-bold text-[#00223B] text-xs block truncate">
                {turma.frequencia}
              </span>
            </div>
          )}

          {turma.horario && (
            <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8] col-span-2">
              <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5">
                {horarioLabel}
              </span>
              <span className="font-bold text-[#00223B] text-xs block">
                {turma.horario}
              </span>
            </div>
          )}

          {turma.bonus && (
            <div className="bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80 col-span-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider shrink-0">Bônus:</span>
              <span className="text-xs font-semibold text-amber-900">{turma.bonus}</span>
            </div>
          )}
        </div>

        {/* Botão Embaixo: Ver detalhes da turma mostrando as informações completas */}
        {showButton && (
          <div className="pt-2 border-t border-[#E1E5E8]/80">
            <button
              type="button"
              onClick={() => onSelectTurma && onSelectTurma(turma)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl uppercase tracking-wider shadow-sm hover:shadow transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Ver detalhes da turma</span>
              <ArrowRight className="w-4 h-4 text-[#FFBF00] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};