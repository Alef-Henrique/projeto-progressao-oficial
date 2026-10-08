import React, { useEffect } from 'react';
import { TurmaProDetalheData } from './data';
import { useRouter } from '../../routing/RouterContext';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Zap, 
  MessageCircle, 
  BookOpen, 
  Target, 
  ShieldCheck, 
  HelpCircle,
  AlertCircle,
  Layers,
  Repeat
} from 'lucide-react';

interface TurmaProDetalheProps {
  turma: TurmaProDetalheData;
}

export const TurmaProDetalhe: React.FC<TurmaProDetalheProps> = ({ turma }) => {
  const { navigate } = useRouter();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [turma.id]);

  const handleVoltar = () => {
    navigate('/concursos#turmas-pro');
    setTimeout(() => {
      const el = document.getElementById('turmas-pro');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse na turma "${turma.titulo}" do Curso Progressão Caxias e gostaria de consultar valores, horários e formas de matrícula.`
  );

  return (
    <div className="w-full bg-[#F8FAFC] text-[#0A131F] min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. BOTÃO VOLTAR SUPERIOR */}
        <div className="mb-8">
          <button
            type="button"
            onClick={handleVoltar}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#F1F5F9] border border-[#E1E5E8] text-[#004B7C] hover:text-[#00223B] font-bold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#004B7C] group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para Turmas Pro</span>
          </button>
        </div>

        {/* 2. CABEÇALHO DA TURMA */}
        <header className="bg-gradient-to-br from-[#00223B] via-[#00385F] to-[#004B7C] text-white rounded-3xl p-6 sm:p-10 shadow-md mb-8 border border-[#015E96]/30">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFBF00] text-[#00223B] text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Turma Pro</span>
            </span>
            {turma.categoriaTag && (
              <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold tracking-wide">
                {turma.categoriaTag}
              </span>
            )}
          </div>

          <h1 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase leading-snug mb-3">
            {turma.titulo}
          </h1>

          <p className="text-base sm:text-lg text-[#E1E5E8]/90 font-medium max-w-3xl">
            {turma.subtitulo}
          </p>
        </header>

        {/* 3. INFORMAÇÕES PRINCIPAIS (GRID DE CARDS) */}
        <section aria-labelledby="info-principais-title" className="mb-10">
          <h2 id="info-principais-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0289C6]" />
            <span>Informações Principais</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Período */}
            <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-2xs">
              <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5 mb-1.5">
                <Calendar className="w-4 h-4 text-[#004B7C]" />
                Período
              </span>
              <p className="font-bold text-[#00223B] text-sm sm:text-base">
                {turma.info.periodo}
              </p>
            </div>

            {/* Carga */}
            <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-2xs">
              <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5 mb-1.5">
                <Clock className="w-4 h-4 text-[#0289C6]" />
                Carga Horária
              </span>
              <p className="font-bold text-[#00223B] text-sm sm:text-base">
                {turma.info.carga}
              </p>
            </div>

            {/* Duração (se existir) */}
            {turma.info.duracao && (
              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5 mb-1.5">
                  <Layers className="w-4 h-4 text-[#004B7C]" />
                  Duração
                </span>
                <p className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.info.duracao}
                </p>
              </div>
            )}

            {/* Cada Ciclo (se existir) */}
            {turma.info.cadaCiclo && (
              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5 mb-1.5">
                  <Repeat className="w-4 h-4 text-[#004B7C]" />
                  Cada Ciclo
                </span>
                <p className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.info.cadaCiclo}
                </p>
              </div>
            )}

            {/* Entrada Contínua (se existir) */}
            {turma.info.entradaContinua && (
              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5 mb-1.5">
                  <Repeat className="w-4 h-4 text-[#0289C6]" />
                  Entrada Contínua
                </span>
                <p className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.info.entradaContinua}
                </p>
              </div>
            )}

            {/* Frequência */}
            <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-2xs">
              <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5 mb-1.5">
                <Clock className="w-4 h-4 text-[#64748B]" />
                Frequência
              </span>
              <p className="font-bold text-[#00223B] text-sm sm:text-base">
                {turma.info.frequencia}
              </p>
            </div>

            {/* Formato (se existir) */}
            {turma.info.formato && (
              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5 mb-1.5">
                  <Layers className="w-4 h-4 text-[#64748B]" />
                  Formato
                </span>
                <p className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.info.formato}
                </p>
              </div>
            )}

            {/* Horário */}
            {turma.info.horario && (
              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <span className="text-xs font-semibold text-[#64748B] flex items-center gap-1.5 mb-1.5">
                  <Clock className="w-4 h-4 text-[#64748B]" />
                  Horário
                </span>
                <p className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.info.horario}
                </p>
              </div>
            )}

            {/* Bônus */}
            <div className="bg-[#FFBF00]/10 p-5 rounded-2xl border border-[#FFBF00]/40 shadow-2xs sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold text-[#B45309] flex items-center gap-1.5 mb-1.5 uppercase">
                <Sparkles className="w-4 h-4 text-[#B45309]" />
                Bônus Exclusivo
              </span>
              <p className="font-extrabold text-[#00223B] text-sm sm:text-base">
                {turma.info.bonus}
              </p>
            </div>
          </div>
        </section>

        {/* 4. DISCIPLINAS E MATÉRIAS */}
        <section aria-labelledby="materias-title" className="mb-10">
          <h2 id="materias-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#0289C6]" />
            <span>{turma.materiasTitulo || 'Matérias e Conteúdo Programático'}</span>
          </h2>

          <div className="space-y-4">
            {/* Caso 1: Matérias Gerais */}
            {turma.materias && turma.materias.length > 0 && (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                {turma.materiasSubtitulo !== false && (
                  <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-4">
                    {turma.materiasSubtitulo || 'Disciplinas Trabalhadas'}
                  </h3>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {turma.materias.map((mat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm font-semibold text-[#00223B]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Caso 2: Pro 01 (Regular) */}
            {(turma.pro01Disciplinas || turma.pro01Texto) && (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#004B7C]" />
                  <span>{turma.pro01Titulo || 'Pro 01 (Regular)'}</span>
                </h3>
                {turma.pro01Texto ? (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm text-[#00223B] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      {turma.pro01Texto.startsWith('Base e Fundamentos:') ? (
                        <>
                          <strong className="font-bold text-[#00223B]">Base e Fundamentos:</strong>{' '}
                          <span className="font-normal text-[#0A131F]/90">
                            {turma.pro01Texto.replace(/^Base e Fundamentos:\s*/, '')}
                          </span>
                        </>
                      ) : (
                        turma.pro01Texto
                      )}
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {turma.pro01Disciplinas?.map((mat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm font-semibold text-[#00223B]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Caso 3: Pro 02 (Exercícios) */}
            {(turma.pro02Disciplinas || turma.pro02Texto) && (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0289C6]" />
                  <span>{turma.pro02Titulo || 'Pro 02 (Exercícios)'}</span>
                </h3>
                {turma.pro02Texto ? (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm text-[#00223B] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      {turma.pro02Texto.startsWith('Aplicação e Desempenho:') ? (
                        <>
                          <strong className="font-bold text-[#00223B]">Aplicação e Desempenho:</strong>{' '}
                          <span className="font-normal text-[#0A131F]/90">
                            {turma.pro02Texto.replace(/^Aplicação e Desempenho:\s*/, '')}
                          </span>
                        </>
                      ) : (
                        turma.pro02Texto
                      )}
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {turma.pro02Disciplinas?.map((mat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm font-semibold text-[#00223B]">
                        <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Caso 4: Disciplinas Estudadas (Pro Sócio Ciclo 02) */}
            {turma.disciplinasEstudadas && turma.disciplinasEstudadas.length > 0 && (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#004B7C]" />
                  <span>Disciplinas Estudadas</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {turma.disciplinasEstudadas.map((mat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm font-semibold text-[#00223B]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Caso 5: Matérias Base (Carreiras Policiais) */}
            {turma.materiasBase && turma.materiasBase.length > 0 && (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#004B7C]" />
                  <span>Matérias · Base</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {turma.materiasBase.map((mat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm font-semibold text-[#00223B]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Caso 6: Matérias PRF */}
            {turma.materiasPRF && turma.materiasPRF.length > 0 && (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0289C6]" />
                  <span>Matérias · PRF</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {turma.materiasPRF.map((mat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm font-semibold text-[#00223B]">
                      <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Caso 7: Matérias PCERJ */}
            {turma.materiasPCERJ && turma.materiasPCERJ.length > 0 && (
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs">
                <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00223B]" />
                  <span>Matérias · PCERJ</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {turma.materiasPCERJ.map((mat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm font-semibold text-[#00223B]">
                      <CheckCircle2 className="w-4 h-4 text-[#00223B] shrink-0" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Caso 8: Não Abordadas */}
            {turma.naoAbordadas && turma.naoAbordadas.length > 0 && (
              <div className="bg-[#FFFBEB] p-5 sm:p-6 rounded-2xl border border-[#FDE68A] shadow-2xs">
                <h3 className="font-bold text-xs sm:text-sm text-[#92400E] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#D97706]" />
                  <span>Não Abordadas Nesta Turma</span>
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {turma.naoAbordadas.map((mat, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white border border-[#FDE68A] text-xs font-semibold text-[#78350F]">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Módulo complementar (se existir) */}
            {turma.moduloComplementar && (
              <div className="bg-[#F0FDF4] p-5 sm:p-6 rounded-2xl border border-[#BBF7D0] shadow-2xs">
                <h3 className="font-bold text-xs sm:text-sm text-[#166534] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#16A34A]" />
                  <span>Módulo Complementar</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#14532D] leading-relaxed">
                  {turma.moduloComplementar}
                </p>
              </div>
            )}

            {/* Nota de Módulos (se existir) */}
            {turma.notaModulos && (
              <div className="bg-[#EFF6FF] p-5 sm:p-6 rounded-2xl border border-[#BFDBFE] shadow-2xs">
                <h3 className="font-bold text-xs sm:text-sm text-[#1E40AF] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Repeat className="w-4 h-4 text-[#3B82F6]" />
                  <span>Dinâmica dos Módulos</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#1E3A8A] leading-relaxed font-medium">
                  {turma.notaModulos}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* PROPOSTA DA TURMA (se existir) */}
        {turma.propostaDaTurma && (
          <section aria-labelledby="proposta-turma-title" className="mb-10">
            <h2 id="proposta-turma-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#0289C6]" />
              <span>Proposta da Turma</span>
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-2xs space-y-5">
              <p className="text-sm sm:text-base text-[#0A131F]/90 leading-relaxed font-medium">
                {turma.propostaDaTurma.texto}
              </p>

              {turma.propostaDaTurma.importante && (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] shadow-2xs">
                  <div className="flex items-center gap-2 mb-2 text-[#92400E]">
                    <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">
                      Importante
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed font-medium">
                    {turma.propostaDaTurma.importante}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 5. SIMULADOS E AULÕES */}
        {(turma.simulados || turma.auloesEstrategicos) && (
          <section aria-labelledby="simulados-auloes-title" className="mb-10">
            <h2 id="simulados-auloes-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0289C6]" />
              <span>Simulados e Aulões Estratégicos</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Simulados */}
              {turma.simulados && (
                <div className="bg-white p-6 rounded-2xl border border-[#E1E5E8] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center mb-3">
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-2">
                      Simulados
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {turma.simulados}
                    </p>
                  </div>
                </div>
              )}

              {/* Aulões Estratégicos */}
              {turma.auloesEstrategicos && (
                <div className="bg-white p-6 rounded-2xl border border-[#E1E5E8] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFBF00]/20 text-[#B45309] flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-[#00223B] uppercase tracking-wide mb-2">
                      Aulões Estratégicos
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                      {turma.auloesEstrategicos}
                    </p>

                    {/* Matérias dos Aulões */}
                    {turma.materiasAuloes && turma.materiasAuloes.length > 0 && (
                      <div className="pt-3 border-t border-[#E1E5E8]">
                        <span className="block text-[11px] font-bold text-[#004B7C] uppercase tracking-wider mb-2">
                          Matérias dos Aulões e da Central de Questões:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {turma.materiasAuloes.map((mat, idx) => (
                            <span key={idx} className="px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[11px] font-semibold text-[#00223B]">
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 6. PARA QUEM É (se existir) */}
        {turma.paraQuemE && turma.paraQuemE.length > 0 && (
          <section aria-labelledby="para-quem-e-title" className="mb-10">
            <h2 id="para-quem-e-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#0289C6]" />
              <span>{turma.paraQuemETitulo || 'Para Quem É'}</span>
            </h2>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs space-y-6">
              {/* Lista Para quem é */}
              <div className="space-y-3">
                {turma.paraQuemE.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#00223B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Ciclos Estratégicos (se existirem nesta turma) */}
              {turma.ciclos && turma.ciclos.length > 0 && (
                <div className="pt-6 border-t border-[#E1E5E8] space-y-5">
                  <span className="block text-xs font-extrabold text-[#004B7C] uppercase tracking-wider">
                    Estrutura Metodológica por Ciclos
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {turma.ciclos.map((ciclo, cIdx) => (
                      <div 
                        key={cIdx} 
                        className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E1E5E8] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <h3 className="font-bold text-sm sm:text-base text-[#00223B]">
                              {ciclo.nome}
                            </h3>
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#004B7C]/10 text-[#004B7C]">
                              ({ciclo.fase})
                            </span>
                          </div>

                          <ul className="space-y-2 mb-4">
                            {ciclo.itens.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#0A131F]/90">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0289C6] shrink-0 mt-2" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-3 border-t border-[#E1E5E8]/80 text-xs sm:text-sm font-semibold text-[#004B7C] bg-white p-3 rounded-xl border border-[#E1E5E8]/60">
                          {ciclo.conclusao}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* FOCO DA TURMA (se existir) */}
        {turma.focoDaTurma && (
          <section aria-labelledby="foco-turma-title" className="mb-10">
            <h2 id="foco-turma-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#0289C6]" />
              <span>Foco da Turma</span>
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-2xs space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {turma.focoDaTurma.itens.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 text-xs sm:text-sm text-[#00223B] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {turma.focoDaTurma.destaque && (
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#00223B] via-[#00385F] to-[#004B7C] text-white border border-[#015E96]/30 shadow-xs">
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-white">
                    "{turma.focoDaTurma.destaque}"
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ENTRADA CONTÍNUA (se existir) */}
        {turma.entradaContinuaTexto && (
          <section aria-labelledby="entrada-continua-title" className="mb-10">
            <h2 id="entrada-continua-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Repeat className="w-4 h-4 text-[#0289C6]" />
              <span>Entrada Contínua</span>
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-2xs">
              <p className="text-xs sm:text-sm sm:text-base text-[#0A131F]/90 leading-relaxed font-medium">
                {turma.entradaContinuaTexto}
              </p>
            </div>
          </section>
        )}

        {/* 7. MÓDULOS E BÔNUS (para turmas com estrutura modular e regras de bônus em vez de diferenciais) */}
        {(turma.modulosInfo || turma.bonusInfo) && (
          <section aria-labelledby="modulos-bonus-title" className="mb-10">
            <h2 id="modulos-bonus-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0289C6]" />
              <span>Módulos e Bônus da Turma</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card Módulos */}
              {turma.modulosInfo && (
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E1E5E8] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center mb-3">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-[#00223B] tracking-tight mb-1">
                      {turma.modulosInfo.titulo}
                    </h3>
                    {turma.modulosInfo.subtitulo && (
                      <p className="text-xs text-[#64748B] font-medium leading-relaxed mb-5">
                        ({turma.modulosInfo.subtitulo})
                      </p>
                    )}

                    <div className="space-y-3">
                      {turma.modulosInfo.modulos.map((mod, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/80">
                          <span className="inline-block text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-1 px-2.5 py-0.5 rounded-full bg-[#004B7C]/10">
                            {mod.nome}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-[#00223B] mt-1 leading-snug">
                            {mod.disciplinas}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Card Bônus de 2 meses grátis */}
              {turma.bonusInfo && (
                <div className="bg-gradient-to-br from-white to-[#FFFDF5] p-6 sm:p-7 rounded-2xl border border-[#FFBF00]/50 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFBF00]/20 text-[#B45309] flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5 text-[#B45309]" />
                    </div>
                    <h3 className="font-bold text-base text-[#00223B] tracking-tight mb-1">
                      {turma.bonusInfo.titulo}
                    </h3>
                    <p className="text-xs text-[#B45309] font-bold uppercase tracking-wider mb-5">
                      Condições e Utilização do Bônus
                    </p>

                    <div className="space-y-3">
                      {turma.bonusInfo.regras.map((regra, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E1E5E8]/70 shadow-2xs">
                          <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-[#00223B] font-medium leading-relaxed">
                            {regra}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 8. DIFERENCIAIS EXCLUSIVOS */}
        {turma.diferenciais && turma.diferenciais.length > 0 && (
          <section aria-labelledby="diferenciais-title" className="mb-10">
            <h2 id="diferenciais-title" className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#0289C6]" />
              <span>Diferenciais</span>
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E5E8] shadow-2xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {turma.diferenciais.map((dif, idx) => {
                  const colonIndex = dif.indexOf(':');
                  return (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60">
                      <div className="w-2 h-2 rounded-full bg-[#FFBF00] shrink-0 mt-2" />
                      <p className="text-xs sm:text-sm text-[#0A131F]/90 leading-relaxed">
                        {colonIndex !== -1 ? (
                          <>
                            <strong className="font-bold text-[#00223B]">{dif.substring(0, colonIndex + 1)}</strong>{' '}
                            <span className="font-normal text-[#0A131F]/90">{dif.substring(colonIndex + 1).trim()}</span>
                          </>
                        ) : (
                          <span className="font-medium">{dif}</span>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* 8. CHAMADA FINAL E WHATSAPP */}
        <section className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-6 sm:p-10 rounded-3xl border border-[#015E96]/30 shadow-md mb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            {turma.textoFinal ? (
              <p className="text-sm sm:text-base text-[#E1E5E8] leading-relaxed font-semibold">
                "{turma.textoFinal}"
              </p>
            ) : (
              <p className="text-sm sm:text-base text-[#E1E5E8] leading-relaxed font-semibold">
                Garanta a sua preparação de alto nível no Curso Progressão de Duque de Caxias com professores especialistas e acompanhamento completo.
              </p>
            )}

            <div className="pt-2">
              <a
                href={`https://wa.me/5521972825838?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-xs sm:text-sm px-8 py-4 rounded-xl uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consultar Vagas e Valores no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* 9. BOTÃO VOLTAR INFERIOR */}
        <div className="flex justify-center pb-8">
          <button
            type="button"
            onClick={handleVoltar}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F1F5F9] border border-[#E1E5E8] text-[#004B7C] hover:text-[#00223B] font-bold text-xs sm:text-sm shadow-2xs transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#004B7C] group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para Turmas Pro</span>
          </button>
        </div>

      </div>
    </div>
  );
};
