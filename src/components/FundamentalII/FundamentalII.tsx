import React from 'react';
import { 
  ArrowRight, 
  GraduationCap
} from 'lucide-react';
import { TURMAS_FUNDAMENTAL_II, TurmaFundamentalII } from './data';
import { useRouter } from '../routing/RouterContext';

export const FundamentalII: React.FC = () => {
  const { navigate } = useRouter();

  const handleVerDetalhes = (slug: string) => {
    navigate(`/colegio/fundamental-2/${slug}`);
  };

  return (
    <section id="turmas-fundamental-ii" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E1E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#0289C6]" />
            <span>Estrutura de Turmas Oficiais</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#00223B] tracking-tight uppercase mb-4">
            Turmas do Ensino Fundamental II
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#0A131F]/75 leading-relaxed font-medium">
            Formação sólida e preparação de alta performance do 6º ao 9º ano com foco em autonomia, excelência acadêmica e aprovações.
          </p>
        </div>

        {/* Grid dos 4 Cards — Formato Compacto / Quadrado (Proporção ~1:1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {TURMAS_FUNDAMENTAL_II.map((turma: TurmaFundamentalII) => (
            <div
              key={turma.id}
              className="bg-white rounded-3xl border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group relative h-full min-h-[300px] sm:min-h-[320px]"
            >
              {/* Conteúdo Superior e Central do Card */}
              <div>
                {/* 1. Identificação do Ano & 2. Categoria */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#004B7C]/10 text-[#004B7C] group-hover:bg-[#004B7C] group-hover:text-white transition-colors">
                    {turma.ano}
                  </span>
                  <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider">
                    ANOS FINAIS
                  </span>
                </div>

                {/* 3. Título da Turma */}
                <h3 className="font-serif-heading text-xl font-black text-[#00223B] uppercase tracking-tight mb-3 leading-snug">
                  {turma.titulo}
                </h3>

                {/* 4. Resumo da Proposta Pedagógica */}
                <p className="text-xs sm:text-sm text-[#0A131F]/75 font-medium leading-relaxed">
                  {turma.subtitulo}
                </p>
              </div>

              {/* 5. Botão "VER DETALHES →" Alinhado no Rodapé */}
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
