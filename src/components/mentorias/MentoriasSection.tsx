import React from 'react';
import { Video, Clock, Calendar, ArrowRight, Shield, Award, Sparkles, BookOpen } from 'lucide-react';
import { MENTORIAS_ONLINE, MentoriaDetalhes } from '../../data/mentoriasData';

interface MentoriasSectionProps {
  onSelectMentoria: (mentoria: MentoriaDetalhes) => void;
}

export const MentoriasSection: React.FC<MentoriasSectionProps> = ({ onSelectMentoria }) => {
  return (
    <section id="mentorias-online" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E1E5E8]">
      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
          <Video className="w-3.5 h-3.5 text-[#0289C6]" />
          <span>Progressão Online — Online, ao vivo</span>
        </div>
        <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
          Mentorias
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#0A131F]/70 leading-relaxed">
          Mentorias preparatórias com aulas ao vivo, materiais antecipados, acompanhamento das dúvidas e simulados para uma preparação mais completa.
        </p>
      </div>

      {/* Grade de Cards das Mentorias (Formato 2x2 no máximo) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {MENTORIAS_ONLINE.map((mentoria) => {
          return (
            <div
              key={mentoria.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Topo / Header Visual do Card */}
              <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-5 relative overflow-hidden shrink-0">
                <div 
                  className="absolute inset-0 pointer-events-none opacity-10"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 16px, transparent 16px, transparent 32px)'
                  }}
                />
                
                <div className="relative z-10 space-y-2">
                  <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {mentoria.resumoCard.tipo}
                  </span>
                  
                  <h3 className="font-serif-heading text-lg sm:text-xl font-black text-white uppercase leading-snug line-clamp-2 min-h-[3rem]">
                    {mentoria.titulo}
                  </h3>
                  
                  <p className="text-xs text-[#E1E5E8]/80 line-clamp-1">
                    {mentoria.subtitulo}
                  </p>
                </div>
              </div>

              {/* Corpo com Informações Resumidas */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-5 bg-white">
                <div className="space-y-3">
                  {/* Badge ou Destaque da Mentoria */}
                  <div className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E1E5E8] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider">
                        Carga / Encontros:
                      </span>
                      <span className="font-bold text-[#00223B]">
                        {mentoria.resumoCard.encontros || mentoria.resumoCard.carga}
                      </span>
                    </div>

                    {mentoria.resumoCard.encontros && (
                      <div className="flex items-center justify-between text-xs pt-1.5 border-t border-[#E1E5E8]/60">
                        <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider">
                          Horas:
                        </span>
                        <span className="font-medium text-[#00223B]">
                          {mentoria.resumoCard.carga}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs pt-1.5 border-t border-[#E1E5E8]/60">
                      <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider">
                        Foco:
                      </span>
                      <span className="font-bold text-[#0289C6]">
                        {mentoria.foco}
                      </span>
                    </div>

                    {mentoria.resumoCard.periodo && (
                      <div className="flex items-center justify-between text-xs pt-1.5 border-t border-[#E1E5E8]/60">
                        <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider">
                          Período:
                        </span>
                        <span className="font-bold text-[#00223B] text-[11px]">
                          {mentoria.resumoCard.periodo}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-[#0A131F]/70 line-clamp-2 leading-relaxed">
                    {mentoria.descricaoHero}
                  </p>
                </div>

                {/* Botão Ver Detalhes */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectMentoria(mentoria)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs py-2.5 px-4 rounded-xl uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-4 h-4 text-[#FFBF00] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
