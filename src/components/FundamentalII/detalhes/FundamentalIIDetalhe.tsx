import React from 'react';
import { 
  Calendar, 
  Clock, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  ArrowLeft, 
  MessageCircle, 
  GraduationCap, 
  Sparkles, 
  Layers,
  Users,
  Compass
} from 'lucide-react';
import { TurmaFundamentalIIDetalhe } from './data';
import { useRouter } from '../../routing/RouterContext';
import { WHATSAPP_NUMBER } from '../../../config/siteConfig';

interface FundamentalIIDetalheProps {
  turma: TurmaFundamentalIIDetalhe;
}

export const FundamentalIIDetalhe: React.FC<FundamentalIIDetalheProps> = ({ turma }) => {
  const { navigate } = useRouter();

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de mais informações e de agendar uma visita pedagógica para o ${turma.titulo}.`
  );

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC]">
      
      {/* ============================================================ */}
      {/* 1. HERO DA TURMA */}
      {/* ============================================================ */}
      <section className="relative bg-[#00223B] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#015E96]/30">
        {/* Textura sutil decorativa */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 20px, transparent 20px, transparent 40px)'
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto z-10">
          {/* Navegação de Retorno */}
          <button
            type="button"
            onClick={() => {
              navigate('/colegio/fundamental-2');
              setTimeout(() => {
                document.getElementById('turmas-fundamental-ii')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#00223B] bg-white hover:bg-[#F8FAFC] px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md mb-6 group cursor-pointer transition-all active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4 text-[#004B7C] group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para Ensino Fundamental II</span>
          </button>

          <h1 className="font-serif-heading text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-4">
            {turma.titulo}
          </h1>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-[#E1E5E8]/90 font-medium">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/15">
              <Calendar className="w-4 h-4 text-[#38BDF8]" />
              <span>{turma.periodo}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/15">
              <Clock className="w-4 h-4 text-[#FFBF00]" />
              <span>{turma.cargaHoraria}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* ============================================================ */}
        {/* 2. INFORMAÇÕES PRINCIPAIS */}
        {/* ============================================================ */}
        <section>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-[#004B7C] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Layers className="w-4 h-4 text-[#FFBF00]" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider block">
                Estrutura Letiva
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                Informações Principais
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Período */}
            <div className="bg-white p-6 rounded-2xl border border-[#E1E5E8] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#004B7C]/10 text-[#004B7C]">
                  <Calendar className="w-5 h-5 text-[#004B7C]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                    Período Letivo
                  </span>
                  <p className="font-serif-heading text-lg font-black text-[#00223B]">
                    {turma.periodo}
                  </p>
                </div>
              </div>
            </div>

            {/* Carga Horária */}
            <div className="bg-white p-6 rounded-2xl border border-[#E1E5E8] shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-[#0289C6]/10 text-[#0289C6]">
                  <Clock className="w-5 h-5 text-[#0289C6]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider block">
                    Carga Horária
                  </span>
                  <p className="font-serif-heading text-lg font-black text-[#00223B]">
                    {turma.cargaHoraria}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. HORÁRIOS */}
        {/* ============================================================ */}
        <section>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-[#0289C6] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider block">
                Turnos e Rotina
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                Horários de Aula
              </h2>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E1E5E8] shadow-xs">
            <div className="mb-6 pb-6 border-b border-[#E1E5E8]">
              <p className="font-bold text-[#00223B] text-base sm:text-lg mb-1">
                {turma.horarios.texto}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-semibold">
                ({turma.horarios.intervalo})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                  Turno da Manhã
                </span>
                <p className="font-serif-heading text-xl font-black text-[#00223B]">
                  {turma.horarios.turnoManha}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
                  Turno da Tarde
                </span>
                <p className="font-serif-heading text-xl font-black text-[#00223B]">
                  {turma.horarios.turnoTarde}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. MONITORIAS */}
        {/* ============================================================ */}
        <section>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-[#004B7C] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Users className="w-4 h-4 text-[#FFBF00]" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider block">
                Reforço e Acompanhamento
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                Monitorias no Contraturno
              </h2>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-[#F0F9FF] p-6 sm:p-8 rounded-3xl border border-[#BAE6FD] shadow-xs">
            {turma.monitorias.frequencia && (
              <div className="mb-6 pb-6 border-b border-[#E0F2FE]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0289C6]/15 text-[#004B7C] text-xs font-black uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#0289C6]" />
                  Gratuito para Alunos
                </span>
                <p className="text-sm sm:text-base font-bold text-[#00223B] leading-relaxed">
                  {turma.monitorias.frequencia}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#BAE6FD] shadow-2xs">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                  Alunos do Turno da Manhã
                </span>
                <p className="font-serif-heading text-xl font-black text-[#00223B]">
                  {turma.monitorias.turnoManha}
                </p>
                <span className="text-[11px] text-[#64748B] font-medium block mt-1">
                  Atendimento no turno da tarde
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#BAE6FD] shadow-2xs">
                <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
                  Alunos do Turno da Tarde
                </span>
                <p className="font-serif-heading text-xl font-black text-[#00223B]">
                  {turma.monitorias.turnoTarde}
                </p>
                <span className="text-[11px] text-[#64748B] font-medium block mt-1">
                  Atendimento no turno da manhã
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. SEGURO ESCOLAR */}
        {/* ============================================================ */}
        <section>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E5E8] shadow-xs flex flex-col md:flex-row items-start gap-5">
            <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 shrink-0 border border-emerald-100">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider block mb-1">
                Proteção e Tranquilidade
              </span>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-[#00223B] uppercase tracking-tight mb-2">
                Seguro Escolar
              </h3>
              <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed font-medium">
                {turma.seguroEscolar}
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. PROPOSTA PEDAGÓGICA */}
        {/* ============================================================ */}
        <section>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-[#004B7C] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <BookOpen className="w-4 h-4 text-[#FFBF00]" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider block">
                Metodologia Progressão
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                Proposta Pedagógica
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E1E5E8] shadow-xs">
            <ul className="space-y-4">
              {turma.propostaPedagogica.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-[#0A131F]/85 leading-relaxed font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#004B7C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. COMPOSIÇÃO DA GRADE */}
        {/* ============================================================ */}
        <section>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 rounded-xl bg-[#0289C6] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider block">
                Estrutura Curricular
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                Composição da Grade
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#E1E5E8] overflow-hidden shadow-xs">
            <div className="divide-y divide-[#E1E5E8]">
              {turma.composicaoGrade.map((disc, idx) => (
                <div 
                  key={idx} 
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <div>
                      <span className="font-bold text-[#00223B] text-sm sm:text-base">
                        {disc.disciplina}
                      </span>
                      {disc.observacao && (
                        <p className="text-xs text-[#64748B] mt-0.5 font-medium">
                          {disc.observacao}
                        </p>
                      )}
                    </div>
                  </div>

                  <span className="sm:self-center ml-9 sm:ml-0 inline-flex items-center px-3 py-1 rounded-full bg-[#F1F5F9] text-[#004B7C] text-xs font-black uppercase tracking-wider shrink-0 w-fit">
                    {disc.tempos}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. CTA FINAL */}
        {/* ============================================================ */}
        <section className="bg-gradient-to-br from-[#00223B] via-[#002b49] to-[#001D33] text-white rounded-3xl p-8 sm:p-12 border-2 border-[#015E96]/50 shadow-xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[#0289C6]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFBF00] text-[#00223B] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Matrículas Abertas para 2027
            </span>

            <h3 className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Garanta a Vaga do Seu Filho no {turma.ano}
            </h3>

            <p className="text-sm sm:text-base text-[#E1E5E8]/90 font-medium leading-relaxed">
              Agende uma visita pedagógica, conheça nossa estrutura em Duque de Caxias e converse com a coordenação sobre o futuro acadêmico do seu filho.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contato"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm px-7 py-4 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>FAZER A MATRICULA</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm px-7 py-4 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#38BDF8]" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
