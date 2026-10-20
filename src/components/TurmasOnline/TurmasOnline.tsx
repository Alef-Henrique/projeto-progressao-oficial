import React from 'react';
import { 
  Laptop, 
  Calendar, 
  Clock, 
  BookOpen, 
  Layers, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Video, 
  AlertCircle,
  MessageCircle,
  Repeat,
  ArrowRight
} from 'lucide-react';
import { 
  COMO_FUNCIONA_ONLINE, 
  TURMAS_ONLINE_DATA, 
  TEXTO_FINAL_ONLINE 
} from './data';

interface TurmasOnlineProps {
  onSelectTurma?: (turmaNome: string) => void;
}

export const TurmasOnline: React.FC<TurmasOnlineProps> = ({ onSelectTurma }) => {
  return (
    <section id="turmas-online" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E1E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* CABEÇALHO PRINCIPAL DA SEÇÃO */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0289C6]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
            <Video className="w-3.5 h-3.5 text-[#0289C6]" />
            <span>Aulas ao vivo</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#00223B] tracking-tight uppercase mb-4">
            Turmas Online
          </h2>

          <p className="text-base sm:text-lg text-[#64748B]">
            Aulas ao vivo com a qualidade e metodologia do Curso Progressão
          </p>

          {/* Destaque Oficial: Início das Aulas */}
          <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-[#00223B] text-white border-2 border-[#FFBF00]/50 shadow-sm text-xs sm:text-sm font-bold">
            <Calendar className="w-4 h-4 text-[#FFBF00] shrink-0" />
            <span>
              As turmas online e as mentorias iniciam no dia <strong className="text-[#FFBF00] font-black underline underline-offset-2">09/11</strong>.
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SEÇÃO: COMO FUNCIONA */}
        {/* ============================================================ */}
        <div className="bg-white rounded-3xl border border-[#E1E5E8] p-6 sm:p-10 shadow-sm mb-14 sm:mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-extrabold text-[#0289C6] uppercase tracking-wider block mb-1">
              {COMO_FUNCIONA_ONLINE.titulo}
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight mb-2">
              {COMO_FUNCIONA_ONLINE.subtitulo}
            </h3>
            <p className="text-sm sm:text-base text-[#64748B] font-medium">
              {COMO_FUNCIONA_ONLINE.textoGeral}
            </p>
          </div>

          {/* 4 Blocos de Como Funciona */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
            {COMO_FUNCIONA_ONLINE.blocos.map((bloco, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E1E5E8] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center mb-3">
                    {idx === 0 && <Video className="w-5 h-5" />}
                    {idx === 1 && <Clock className="w-5 h-5" />}
                    {idx === 2 && <FileText className="w-5 h-5" />}
                    {idx === 3 && <Layers className="w-5 h-5" />}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#00223B] uppercase tracking-wide mb-2">
                    {bloco.titulo}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0A131F]/80 leading-relaxed font-medium">
                    {bloco.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card dos Combos das Turmas Online — Largura Completa (w-full) */}
        <div className="w-full p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#00223B] via-[#002b49] to-[#001D33] text-white border-2 border-[#015E96]/40 shadow-xl mb-14 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-6 border-b border-white/15">
              <div>
                <span className="text-[11px] font-extrabold text-[#FFBF00] uppercase tracking-wider block">
                  Planos e Pacotes
                </span>
                <h4 className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white">
                  {COMO_FUNCIONA_ONLINE.combosTitulo}
                </h4>
              </div>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">
                Turbine sua aprovação com os pacotes integrados
              </span>
            </div>

            {/* Grid 2x2 de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
              {COMO_FUNCIONA_ONLINE.combos.map((combo, idx) => {
                const parts = combo.split(':');
                const title = parts[0].trim();
                const desc = parts.slice(1).join(':').trim();
                const isCombo3 = idx === 3;
                const isCursoCompleto = idx === 0;

                // Tópicos detalhados de cada combo
                const itensInclusos = idx === 0 
                  ? [
                      'Aulas 100% ao vivo transmitidas pelo YouTube',
                      'Gravações liberadas na plataforma após 24h',
                      'Material didático de apoio em PDF incluso'
                    ]
                  : idx === 1 
                  ? [
                      'Curso completo com todas as aulas ao vivo',
                      'OPA (Orientação Pedagógica Avançada) inclusa',
                      'Direcionamento de estudos e acompanhamento'
                    ]
                  : idx === 2 
                  ? [
                      'Curso completo com todas as aulas ao vivo',
                      '1 simulado por mês (4 simulados durante o curso)',
                      'Correção gravada online das questões mais estratégicas'
                    ]
                  : [
                      'Curso completo com todas as aulas ao vivo',
                      'OPA (Orientação Pedagógica Avançada) inclusa',
                      '1 simulado por mês com correção gravada online',
                      'Bônus: 1 mês grátis de Mentoria de Língua Portuguesa*'
                    ];

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                      isCombo3
                        ? 'bg-gradient-to-b from-[#00385F] to-[#00223B] border-2 border-[#FFBF00] shadow-xl'
                        : 'bg-white/10 hover:bg-white/15 border border-white/20 shadow-md backdrop-blur-sm'
                    }`}
                  >
                    <div>
                      {/* Badge Superior */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                          isCombo3
                            ? 'bg-[#FFBF00] text-[#00223B]'
                            : 'bg-white/20 text-[#FFBF00]'
                        }`}>
                          {isCursoCompleto ? 'Turma Ao Vivo' : isCombo3 ? 'Mais Completo' : `Plano 0${idx}`}
                        </span>

                        {isCombo3 && (
                          <span className="text-[11px] font-extrabold text-[#FFBF00] uppercase tracking-wider">
                            Recomendado
                          </span>
                        )}
                      </div>

                      {/* Título do Combo */}
                      <h5 className="font-serif-heading text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                        {title}
                      </h5>

                      {/* Descrição resumida */}
                      <p className="text-xs sm:text-sm text-[#E1E5E8]/90 font-medium mb-5 leading-relaxed min-h-[38px]">
                        {desc}
                      </p>

                      {/* Divisor */}
                      <div className={`h-px w-full mb-5 ${isCombo3 ? 'bg-[#FFBF00]/30' : 'bg-white/15'}`} />

                      {/* Lista de itens inclusos */}
                      <ul className="space-y-2.5 mb-6 text-xs sm:text-sm">
                        {itensInclusos.map((item, itemIdx) => {
                          const isBonus = item.startsWith('Bônus:');
                          return (
                            <li key={itemIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isBonus ? 'text-[#FFBF00]' : isCombo3 ? 'text-[#FFBF00]' : 'text-emerald-400'
                              }`} />
                              <span className={`leading-relaxed ${
                                isBonus ? 'font-bold text-[#FFBF00]' : 'text-white font-medium'
                              }`}>
                                {item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>

                      {isCombo3 && (
                        <p className="text-[11px] text-[#E1E5E8]/70 italic mb-4">
                          *O bônus de mentoria não se aplica ao concurso GM São Gonçalo.
                        </p>
                      )}
                    </div>

                    {/* Botão Quero me matricular */}
                    <div className="pt-2">
                      <a
                        href="#inscricao"
                        onClick={(e) => {
                          e.preventDefault();
                          const formEl = document.getElementById('formulario-online');
                          if (formEl) {
                            formEl.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99] ${
                          isCombo3
                            ? 'bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B]'
                            : 'bg-white hover:bg-[#FFBF00] text-[#00223B]'
                        }`}
                      >
                        <span>Quero me matricular</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        {/* ============================================================ */}
        {/* LISTAGEM DAS TURMAS ONLINE */}
        {/* ============================================================ */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-extrabold text-[#0289C6] uppercase tracking-wider block mb-1">
                Aulas ao vivo
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                Turmas Online Disponíveis
              </h3>
            </div>
          </div>

          <div className="space-y-8">
            {TURMAS_ONLINE_DATA.map((turma) => (
              <div 
                key={turma.id}
                id={turma.id}
                className="bg-white rounded-3xl border border-[#E1E5E8] p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
              >
                {/* Cabeçalho da Turma */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-[#E1E5E8]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider">
                        <Laptop className="w-3.5 h-3.5 text-[#0289C6]" />
                        <span>{turma.tipo}</span>
                      </span>
                    </div>
                    <h4 className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                      {turma.nome}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                      {turma.subtitulo}
                    </p>
                  </div>

                  <a
                    href="#formulario"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSelectTurma) {
                        onSelectTurma(turma.nome);
                      }
                      const formEl = document.getElementById('formulario-online');
                      if (formEl) {
                        formEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#004B7C] hover:bg-[#00223B] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>QUERO ME MATRICULAR</span>
                  </a>
                </div>

                {/* Grade de Informações Principais */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {/* Período */}
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-[#004B7C]" />
                      Período
                    </span>
                    <p className="font-bold text-[#00223B] text-xs sm:text-sm">
                      {turma.periodo}
                    </p>
                  </div>

                  {/* Carga */}
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#0289C6]" />
                      Carga
                    </span>
                    <p className="font-bold text-[#00223B] text-xs sm:text-sm">
                      {turma.carga}
                    </p>
                  </div>

                  {/* Frequência (se existir) */}
                  {turma.frequencia && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                      <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Repeat className="w-3.5 h-3.5 text-[#004B7C]" />
                        Frequência
                      </span>
                      <p className="font-bold text-[#00223B] text-xs sm:text-sm">
                        {turma.frequencia}
                      </p>
                    </div>
                  )}

                  {/* Horário */}
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]">
                    <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#64748B]" />
                      Horário
                    </span>
                    <p className="font-bold text-[#00223B] text-xs sm:text-sm">
                      {turma.horario}
                    </p>
                  </div>
                </div>

                {/* Edital (se existir, ex: GM São Gonçalo) */}
                {turma.edital && (
                  <div className="p-4 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] mb-6 flex items-start gap-2.5">
                    <FileText className="w-4 h-4 text-[#1E40AF] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-[#1E40AF] uppercase tracking-wider block">
                        Edital
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-[#1E3A8A]">
                        {turma.edital}
                      </p>
                    </div>
                  </div>
                )}

                {/* Matérias da Turma */}
                {turma.materias && turma.materias.length > 0 && (
                  <div className="mb-6">
                    <span className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider flex items-center gap-1.5 mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-[#0289C6]" />
                      Matérias
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                      {turma.materias.map((mat, mIdx) => (
                        <div 
                          key={mIdx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/80 text-xs sm:text-sm font-semibold text-[#00223B]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{mat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Grupos de Matérias (ex: BB Online) */}
                {turma.gruposMaterias && turma.gruposMaterias.length > 0 && (
                  <div className="mb-6 space-y-4">
                    <span className="text-xs font-extrabold text-[#004B7C] uppercase tracking-wider flex items-center gap-1.5 mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-[#0289C6]" />
                      Matérias por Módulo / Cargo
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {turma.gruposMaterias.map((grupo, gIdx) => (
                        <div 
                          key={gIdx}
                          className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]"
                        >
                          <h5 className="font-bold text-xs sm:text-sm text-[#004B7C] uppercase tracking-wide mb-3 pb-2 border-b border-[#E1E5E8]">
                            {grupo.titulo}
                          </h5>
                          <ul className="space-y-2">
                            {grupo.materias.map((mat, matIdx) => (
                              <li key={matIdx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00223B]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>{mat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conteúdo Programático / Observação (ex: GM São Gonçalo) */}
                {turma.conteudo && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] mb-6">
                    <span className="text-[11px] font-bold text-[#92400E] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-[#D97706]" />
                      Conteúdo
                    </span>
                    <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed font-medium">
                      {turma.conteudo}
                    </p>
                  </div>
                )}

                {/* Linha Inferior: Material e Combos */}
                <div className="pt-4 border-t border-[#E1E5E8] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {turma.material && (
                    <div className="flex items-start gap-2.5 text-[#00223B]">
                      <FileText className="w-4 h-4 text-[#004B7C] shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-[#004B7C]">Material:</strong>{' '}
                        <span className="text-[#0A131F]/85">{turma.material}</span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-2.5 text-[#00223B]">
                    <Layers className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold text-[#0289C6]">Combos:</strong>{' '}
                      <span className="text-[#0A131F]/85">{turma.combos}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* TEXTO FINAL DA SEÇÃO */}
        {/* ============================================================ */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E1E5E8] shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-[#00223B] font-semibold leading-relaxed">
            {TEXTO_FINAL_ONLINE}
          </p>
        </div>

      </div>
    </section>
  );
};
