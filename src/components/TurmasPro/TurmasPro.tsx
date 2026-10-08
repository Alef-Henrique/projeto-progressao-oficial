import React from 'react';
import { TURMAS_PRO_DATA, TurmaPro } from './data';
import { useRouter } from '../routing/RouterContext';
import { 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  Clock, 
  Award, 
  Zap,
  Timer,
  ArrowRight
} from 'lucide-react';

export const TurmasPro: React.FC = () => {
  const { navigate } = useRouter();

  const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de mais informações sobre as Turmas Pro (Sem concurso específico) do Curso Progressão Caxias.'
  );

  return (
    <section 
      id="turmas-pro" 
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[#E1E5E8]"
    >
      {/* 1. CABEÇALHO DA SEÇÃO */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFBF00]/15 border border-[#FFBF00]/40 text-[#00223B] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#004B7C]" />
          <span>Sem concurso específico</span>
        </div>

        <h2 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-black text-[#00223B] tracking-tight uppercase leading-snug">
          Turmas Pro
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
          Preparação contínua de alto rendimento. Quadro geral com a relação completa de turmas, cargas horárias e benefícios.
        </p>
      </div>

      {/* 2. TABELA RESPONSIVA (DESKTOP E TABLETS MÉDIOS/GRANDES) */}
      <div className="hidden md:block overflow-hidden bg-white rounded-2xl border border-[#E1E5E8] shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#00223B] text-white text-xs font-bold uppercase tracking-wider">
                <th scope="col" className="py-4 px-5 text-white">Turma</th>
                <th scope="col" className="py-4 px-4 text-[#E1E5E8]">Período</th>
                <th scope="col" className="py-4 px-4 text-[#E1E5E8]">Carga</th>
                <th scope="col" className="py-4 px-4 text-[#E1E5E8]">Duração</th>
                <th scope="col" className="py-4 px-4 text-[#FFBF00]">Bônus</th>
                <th scope="col" className="py-4 px-4 text-[#E1E5E8]">Simulados</th>
                <th scope="col" className="py-4 px-4 text-[#E1E5E8]">Aulões</th>
                <th scope="col" className="py-4 px-5 text-center text-white">Detalhes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E1E5E8] text-xs sm:text-sm">
              {TURMAS_PRO_DATA.map((turma: TurmaPro, index: number) => {
                return (
                  <tr 
                    key={turma.id} 
                    className={`transition-colors hover:bg-[#F8FAFC] ${index % 2 === 1 ? 'bg-[#FAFCFF]' : 'bg-white'}`}
                  >
                    {/* Turma */}
                    <td className="py-4 px-5 font-bold text-[#00223B]">
                      <span className="text-sm text-[#00223B] font-extrabold block">
                        {turma.turma}
                      </span>
                    </td>

                    {/* Período */}
                    <td className="py-4 px-4 text-[#0A131F] font-semibold whitespace-nowrap">
                      {turma.periodo}
                    </td>

                    {/* Carga */}
                    <td className="py-4 px-4 text-[#0A131F] font-semibold whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#004B7C]/5 text-[#004B7C] font-bold text-xs">
                        {turma.carga}
                      </span>
                    </td>

                    {/* Duração */}
                    <td className="py-4 px-4 text-[#0A131F] font-medium whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#F1F5F9] font-bold text-[#00223B] text-xs">
                        {turma.duracao}
                      </span>
                    </td>

                    {/* Bônus */}
                    <td className="py-4 px-4 font-bold text-[#00223B] whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FFBF00]/20 text-[#00223B] border border-[#FFBF00]/40 text-xs font-black">
                        <Sparkles className="w-3 h-3 text-[#B45309]" />
                        <span>{turma.bonus}</span>
                      </span>
                    </td>

                    {/* Simulados */}
                    <td className="py-4 px-4 text-[#0A131F] text-xs font-semibold whitespace-nowrap">
                      {turma.simulados === 'não informado' ? (
                        <span className="text-[#94A3B8] italic">não informado</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[#004B7C]">
                          {turma.simulados}
                        </span>
                      )}
                    </td>

                    {/* Aulões */}
                    <td className="py-4 px-4 text-[#0A131F] text-xs font-semibold whitespace-nowrap">
                      {turma.auloes === 'não informado' ? (
                        <span className="text-[#94A3B8] italic">não informado</span>
                      ) : (
                        <span className="text-[#00223B]">{turma.auloes}</span>
                      )}
                    </td>

                    {/* Coluna Detalhes */}
                    <td className="py-4 px-5 text-center whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => navigate(`/concursos/turmas-pro/${turma.id}`)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#004B7C] hover:bg-[#00385F] text-white shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                      >
                        <span>Ver detalhes</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. LISTAGEM EM CARDS DIRETOS PARA MOBILE */}
      <div className="md:hidden space-y-4">
        {TURMAS_PRO_DATA.map((turma: TurmaPro) => {
          return (
            <div
              key={turma.id}
              className="bg-white rounded-2xl border border-[#E1E5E8] shadow-2xs overflow-hidden"
            >
              {/* Header do Card Mobile */}
              <div className="p-4 bg-gradient-to-r from-[#00223B] to-[#00385F] text-white">
                <h3 className="font-serif-heading text-base font-black text-white uppercase tracking-tight">
                  {turma.turma}
                </h3>
              </div>

              {/* As 7 Informações Estruturadas */}
              <div className="p-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#004B7C]" />
                    <span>Período:</span>
                  </span>
                  <span className="font-bold text-[#00223B]">{turma.periodo}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#0289C6]" />
                    <span>Carga:</span>
                  </span>
                  <span className="font-bold text-[#00223B]">{turma.carga}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Timer className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>Duração:</span>
                  </span>
                  <span className="font-bold text-[#00223B]">{turma.duracao}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFBF00]" />
                    <span>Bônus:</span>
                  </span>
                  <span className="font-black px-2 py-0.5 rounded bg-[#FFBF00]/20 text-[#00223B] border border-[#FFBF00]/40">
                    {turma.bonus}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Award className="w-3.5 h-3.5 text-[#004B7C]" />
                    <span>Simulados:</span>
                  </span>
                  <span className={`font-semibold ${turma.simulados === 'não informado' ? 'text-[#94A3B8] italic' : 'text-[#00223B]'}`}>
                    {turma.simulados}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B] flex items-center gap-1.5 font-medium">
                    <Zap className="w-3.5 h-3.5 text-[#FFBF00]" />
                    <span>Aulões:</span>
                  </span>
                  <span className={`font-semibold ${turma.auloes === 'não informado' ? 'text-[#94A3B8] italic' : 'text-[#00223B]'}`}>
                    {turma.auloes}
                  </span>
                </div>

                {/* Botão Ver detalhes no Card Mobile */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => navigate(`/concursos/turmas-pro/${turma.id}`)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#004B7C] hover:bg-[#00385F] text-white font-bold text-xs shadow-2xs transition-all cursor-pointer"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. BOTÃO DE AÇÃO GERAL / WHATSAPP NO FINAL DA SEÇÃO */}
      <div className="mt-8 flex justify-center">
        <a
          href={`https://wa.me/5521972825838?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Tirar dúvidas sobre as Turmas Pro no WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
