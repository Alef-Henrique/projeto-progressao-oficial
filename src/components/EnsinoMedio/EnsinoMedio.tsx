import React from 'react';
import { 
  ArrowRight, 
  GraduationCap
} from 'lucide-react';
import { TURMAS_ENSINO_MEDIO, TurmaEnsinoMedio } from './data';
import { useRouter } from '../routing/RouterContext';

export const EnsinoMedio: React.FC = () => {
  const { navigate } = useRouter();

  const handleVerDetalhes = (slug: string) => {
    navigate(`/colegio/ensino-medio/${slug}`);
  };

  return (
    <section id="turmas-ensino-medio" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E1E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#0289C6]" />
            <span>Estrutura de Turmas 2027</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#00223B] tracking-tight uppercase mb-4">
            Turmas do Ensino Médio
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#0A131F]/75 leading-relaxed font-medium">
            Preparação acadêmica rigorosa com turmas direcionadas para concursos militares e vestibulares, monitorias no contraturno e seguro escolar completo.
          </p>
        </div>

        {/* Grid dos 4 Cards Compactos / Quadrados (~1:1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {TURMAS_ENSINO_MEDIO.map((turma: TurmaEnsinoMedio) => (
            <div
              key={turma.id}
              className="bg-white rounded-3xl border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group relative h-full min-h-[300px] sm:min-h-[320px]"
            >
              {/* Topo e Conteúdo do Card */}
              <div>
                {/* Identificação da Série & Modalidade */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#004B7C]/10 text-[#004B7C] group-hover:bg-[#004B7C] group-hover:text-white transition-colors">
                    {turma.serie}
                  </span>
                  {turma.modalidade ? (
                    <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider">
                      {turma.modalidade}
                    </span>
                  ) : (
                    <span className="text-[11px] font-extrabold text-[#64748B] uppercase tracking-wider">
                      ENSINO MÉDIO
                    </span>
                  )}
                </div>

                {/* Título da Turma */}
                <h3 className="font-serif-heading text-xl font-black text-[#00223B] uppercase tracking-tight mb-3 leading-snug">
                  {turma.titulo}
                </h3>

                {/* Resumo Oficial da Proposta */}
                <p className="text-xs sm:text-sm text-[#0A131F]/75 font-medium leading-relaxed">
                  {turma.resumo}
                </p>
              </div>

              {/* Botão VER DETALHES Alinhado na Base */}
              <div className="pt-6 mt-auto">
                <button
                  type="button"
                  onClick={() => handleVerDetalhes(turma.slug)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#004B7C] hover:bg-[#00223B] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group-hover:scale-[1.01]"
                >
                  <span>VER DETALHES</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
