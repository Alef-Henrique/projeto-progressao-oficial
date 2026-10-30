import React, { useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  BookOpen, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  PackageCheck, 
  HelpCircle, 
  ArrowRight,
  Shield,
  Layers,
  GraduationCap,
  Coffee,
  Check,
  Flame,
  Award,
  Sun,
  Sunset
} from 'lucide-react';
import { TurmaDetalhes } from '../../data/turmasmilitares';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';


interface TurmaDetalhesModalProps {
  turma: TurmaDetalhes;
  onClose: () => void;
}

export const TurmaDetalhesModal: React.FC<TurmaDetalhesModalProps> = ({ turma, onClose }) => {
  // Prevenir rolagem do body enquanto o modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Gostaria de informações e de me inscrever na turma ${turma.titulo} (${turma.subtitulo}) do Curso Progressão Caxias. Como posso garantir minha vaga?`
  )}`;

  const handleGoToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.getElementById('pre-inscricao') || 
                 document.getElementById('inscricao') || 
                 document.getElementById('formulario-contato-militar') || 
                 document.getElementById('contato-militar');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#001424]/85 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 lg:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-turma-title"
    >
      <div 
        className="bg-white w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-5xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#E1E5E8] relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ============================================================ */}
        {/* CABEÇALHO FIXO COM NAVEGAÇÃO E BOTÃO FECHAR */}
        {/* ============================================================ */}
        <div className="bg-[#00223B] text-white px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#015E96]/40 shrink-0 sticky top-0 z-30 shadow-md">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E1E5E8] hover:text-[#FFBF00] transition-colors py-1 px-2.5 rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Voltar para a lista de turmas"
            >
              <ArrowLeft className="w-4 h-4 text-[#FFBF00]" />
              <span>Voltar para turmas</span>
            </button>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider hidden sm:block">
              Detalhes Oficiais da Turma
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#formulario-contato-militar"
              onClick={handleGoToContact}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs px-3.5 py-1.5 rounded-lg uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              <span>Formulário de Contato</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00223B]" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#E1E5E8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Fechar janela de detalhes da turma"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CORPO DO MODAL COM ROLAGEM */}
        {/* ============================================================ */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 space-y-10 sm:space-y-12">
          
          {/* ------------------------------------------------------------ */}
          {/* HERO DA PÁGINA DE DETALHES */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-gradient-to-br from-[#00223B] via-[#002F52] to-[#001D33] text-white rounded-2xl p-6 sm:p-8 border border-[#015E96]/50 shadow-lg relative overflow-hidden">
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 16px, transparent 16px, transparent 32px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFBF00]/20 text-[#FFBF00] border border-[#FFBF00]/30 text-xs font-bold uppercase tracking-wider mb-3">
                <Shield className="w-3.5 h-3.5 text-[#FFBF00]" />
                <span>Turma Oficial Progressão Caxias</span>
              </div>

              <h1 
                id="modal-turma-title"
                className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-1"
              >
                {turma.titulo}
              </h1>

              {turma.subtitulo && turma.subtitulo !== turma.heroTexto && (
                <div className="text-sm sm:text-base text-[#FFBF00] font-bold uppercase tracking-wider mb-2">
                  {turma.subtitulo}
                </div>
              )}

              {turma.heroTexto && (
                <p className="text-sm sm:text-lg text-white max-w-3xl mb-2 font-medium leading-relaxed">
                  {turma.heroTexto}
                </p>
              )}

              {turma.heroAvisoTurnos && (
                <div className="inline-block bg-white/10 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#E1E5E8] mb-5 border border-white/15">
                  🕒 {turma.heroAvisoTurnos}
                </div>
              )}

              {/* Área de destaque com as principais informações */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-4 border-t border-white/15">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Período
                  </span>
                  <span className="text-xs sm:text-sm text-white font-bold block leading-tight">
                    {turma.periodo}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Turnos
                  </span>
                  <span className="text-xs sm:text-sm text-white font-bold block leading-tight">
                    {turma.turno}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Horário
                  </span>
                  <span className="text-xs sm:text-sm text-white font-bold block leading-tight">
                    {turma.horario}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Carga
                  </span>
                  <span className="text-xs sm:text-sm text-white font-bold block leading-tight">
                    {turma.cargaTotal}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Foco
                  </span>
                  <span className="text-xs sm:text-sm text-white font-bold block leading-tight">
                    {turma.foco}
                  </span>
                </div>
              </div>

              {/* Observação de Carga Sujeita à Confirmação */}
              {turma.cargaObservacao && (
                <p className="text-[11px] text-[#FFBF00] mt-3 font-semibold italic">
                  {turma.cargaObservacao}
                </p>
              )}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SEÇÃO OPCIONAL: ESCOLHA SEU TURNO (QUANDO A TURMA POSSUIR MANHÃ E TARDE) */}
          {/* ------------------------------------------------------------ */}
          {turma.turnosESelecao && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                  <Clock className="w-4 h-4 text-[#FFBF00]" />
                </div>
                <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                  1. {turma.turnosESelecao.titulo}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4">
                {turma.turnosESelecao.cards.map((tCard, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {tCard.turno === 'MANHÃ' ? (
                          <Sun className="w-5 h-5 text-[#FFBF00]" />
                        ) : (
                          <Sunset className="w-5 h-5 text-[#0289C6]" />
                        )}
                        <span className="text-base font-black text-[#00223B] uppercase">
                          {tCard.turno}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-[#004B7C] mb-2">
                        Horário regular: {tCard.horario}
                      </p>
                      <div className="bg-white p-3 rounded-lg border border-[#E1E5E8] text-xs">
                        <span className="font-bold text-[#00223B] block mb-0.5">Tempos extras:</span>
                        <span className="text-[#334155] font-medium">{tCard.temposExtras}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8] text-xs sm:text-sm text-[#334155] leading-relaxed">
                <strong className="text-[#00223B]">Observação: </strong>
                {turma.turnosESelecao.observacaoGeral}
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------ */}
          {/* 2. VISÃO GERAL DA TURMA */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <Clock className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                {turma.turnosESelecao ? '2. Visão Geral' : '1. Visão Geral da Turma'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Duração */}
              <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Duração
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#00223B]">
                    {turma.visaoGeral.duracao}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-[#E1E5E8] text-xs text-[#0A131F]/70">
                  Planejamento pedagógico estruturado do início ao fim da preparação.
                </div>
              </div>

              {/* Carga Horária */}
              <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-2">
                  Carga Horária — {turma.visaoGeral.cargaHoraria.total}
                </span>
                {turma.visaoGeral.cargaHoraria.distribuicao ? (
                  <ul className="space-y-1.5 text-sm text-[#334155]">
                    {turma.visaoGeral.cargaHoraria.distribuicao.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-[#E1E5E8]">
                        <span className="font-semibold text-[#00223B]">{item.ciclo}:</span>
                        <span className="font-bold text-[#004B7C]">{item.encontros}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm font-semibold text-[#00223B]">
                    {turma.visaoGeral.cargaHoraria.total}
                  </p>
                )}
              </div>

              {/* Concursos Preparados (se disponível) ou Turno e Horário */}
              {turma.visaoGeral.concursos ? (
                <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-2">
                    Concursos Atendidos
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {turma.visaoGeral.concursos.map((c, i) => (
                      <span key={i} className="bg-white border border-[#004B7C]/30 text-[#004B7C] font-bold text-xs px-3 py-1.5 rounded-lg">
                        {c}
                      </span>
                    ))}
                  </div>
                  {turma.visaoGeral.frequencia && (
                    <p className="text-xs text-[#334155] font-medium mt-3 pt-2 border-t border-[#E1E5E8]">
                      {turma.visaoGeral.frequencia}
                    </p>
                  )}
                </div>
              ) : (
                <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Turno e Horário
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-[#00223B]">
                    {turma.visaoGeral.turnoEHorario}
                  </p>
                </div>
              )}

              {/* Tempos Extras */}
              <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                  Tempos Extras
                </span>
                <p className="text-sm font-semibold text-[#00223B]">
                  {turma.visaoGeral.temposExtras.horario}
                </p>
                <p className="text-xs text-[#0A131F]/75 mt-1">
                  {turma.visaoGeral.temposExtras.observacao}
                </p>
              </div>
            </div>

            {/* Aviso Obrigatório de Tempos Extras */}
            <div className="mt-4 bg-[#FFBF00]/10 border border-[#FFBF00]/40 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#78350F] font-medium leading-relaxed">
                "{turma.visaoGeral.temposExtras.aviso}"
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 3. 1º CICLO */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <Layers className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                {turma.turnosESelecao ? '3. 1º Ciclo' : '2. 1º Ciclo'} ({turma.ciclo1.encontros} Encontros — {turma.ciclo1.periodo})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {/* Conteúdo Introdutório */}
              {turma.ciclo1.conteudoIntrodutorio && (
                <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Conteúdo Introdutório
                  </span>
                  <p className="text-sm font-bold text-[#00223B]">
                    {turma.ciclo1.conteudoIntrodutorio.periodo}
                  </p>
                  <p className="text-xs text-[#334155] mt-1 font-medium">
                    {turma.ciclo1.conteudoIntrodutorio.encontros}
                  </p>
                </div>
              )}

              {/* Aprofundamento I */}
              {turma.ciclo1.aprofundamentoI && (
                <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                    Aprofundamento I
                  </span>
                  <p className="text-sm font-bold text-[#00223B]">
                    {turma.ciclo1.aprofundamentoI.periodo}
                  </p>
                  <p className="text-xs text-[#334155] mt-1 font-medium">
                    {turma.ciclo1.aprofundamentoI.encontros}
                  </p>
                </div>
              )}
            </div>

            {/* Matérias do 1º Ciclo */}
            <div>
              <span className="text-xs font-bold text-[#00223B] uppercase tracking-wider block mb-3">
                {turma.turnosESelecao ? '4. Matérias do 1º Ciclo:' : 'Matérias do 1º Ciclo:'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {turma.ciclo1.materias.map((mat, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-3.5 rounded-xl border border-[#E1E5E8] shadow-xs flex flex-col justify-center items-center text-center hover:border-[#0289C6] transition-colors"
                  >
                    <BookOpen className="w-5 h-5 text-[#004B7C] mb-1.5" />
                    <span className="text-sm font-bold text-[#00223B]">{mat.nome}</span>
                    {mat.destaque && (
                      <span className="text-[10px] font-bold text-[#0289C6] uppercase mt-1">
                        ({mat.destaque})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* RECESSO 1 (COMPONENTE VISUAL DIFERENCIADO) */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-gradient-to-r from-[#F0FDF4] to-[#ECFDF5] border-2 border-dashed border-[#10B981]/50 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/20 text-[#047857] flex items-center justify-center shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#047857] uppercase tracking-wider block">
                  {turma.turnosESelecao ? '5. ' : '3. '}{turma.recesso1.titulo}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#065F46]">
                  {turma.recesso1.periodo}
                </h3>
                {turma.recesso1.descricao && (
                  <p className="text-xs text-[#047857]/80 mt-0.5">
                    {turma.recesso1.descricao}
                  </p>
                )}
              </div>
            </div>
            <div className="bg-white px-3.5 py-1.5 rounded-lg border border-[#10B981]/30 self-start sm:self-auto text-xs font-bold text-[#047857]">
              Pausa Pedagógica
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 2º CICLO */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <Flame className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                {turma.turnosESelecao ? '6. 2º Ciclo' : '4. 2º Ciclo'} ({turma.ciclo2.encontros} Encontros — {turma.ciclo2.periodo})
              </h2>
            </div>

            <div className="bg-[#00223B] text-white p-4 sm:p-5 rounded-xl mb-4 border border-[#015E96]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-[#FFBF00] font-bold uppercase tracking-wider block">
                  Foco nos Concursos:
                </span>
                <span className="text-base sm:text-lg font-bold text-white">
                  {turma.ciclo2.foco || turma.foco}
                </span>
              </div>
              <div className="bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15 text-xs font-bold text-[#E1E5E8] self-start sm:self-auto">
                {turma.ciclo2.frequencia || 'Aulas realizadas 5 vezes por semana'}
              </div>
            </div>

            {turma.ciclo2.etapas ? (
              <div className="mb-5 space-y-3">
                {turma.ciclo2.etapasTexto && (
                  <span className="text-xs font-bold text-[#00223B] uppercase tracking-wider block">
                    {turma.ciclo2.etapasTexto}
                  </span>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {turma.ciclo2.etapas.map((etp, idx) => (
                    <div 
                      key={idx}
                      className={`p-4.5 rounded-xl border flex flex-col justify-between ${
                        etp.destaque 
                          ? 'bg-gradient-to-b from-[#00223B] to-[#001D33] text-white border-[#FFBF00] shadow-md' 
                          : 'bg-[#F8FAFC] border-[#E1E5E8]'
                      }`}
                    >
                      <div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${etp.destaque ? 'text-[#FFBF00]' : 'text-[#004B7C]'}`}>
                          {idx + 1}ª Etapa
                        </span>
                        <h4 className={`text-sm font-bold mb-1 ${etp.destaque ? 'text-white' : 'text-[#00223B]'}`}>
                          {etp.nome}
                        </h4>
                        <p className={`text-xs font-bold mb-1 ${etp.destaque ? 'text-[#E1E5E8]' : 'text-[#004B7C]'}`}>
                          {etp.periodo}
                        </p>
                        {etp.encontros && (
                          <span className={`text-xs block mb-1 font-medium ${etp.destaque ? 'text-[#E1E5E8]/90' : 'text-[#334155]'}`}>
                            {etp.encontros}
                          </span>
                        )}
                        {etp.foco && (
                          <span className={`text-xs block font-bold ${etp.destaque ? 'text-[#FFBF00]' : 'text-[#00223B]'}`}>
                            Foco: {etp.foco}
                          </span>
                        )}
                      </div>
                      {etp.descricao && (
                        <p className={`text-[11px] mt-2 pt-2 border-t leading-relaxed ${etp.destaque ? 'border-white/15 text-[#E1E5E8]/80' : 'border-[#E1E5E8] text-[#0A131F]/70'}`}>
                          {etp.descricao}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                {/* Conteúdo Introdutório */}
                {turma.ciclo2.conteudoIntrodutorio && (
                  <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                    <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                      Conteúdo Introdutório
                    </span>
                    <p className="text-sm font-bold text-[#00223B]">
                      {turma.ciclo2.conteudoIntrodutorio.periodo}
                    </p>
                    <p className="text-xs text-[#334155] mt-1 font-medium">
                      {turma.ciclo2.conteudoIntrodutorio.encontros}
                    </p>
                  </div>
                )}

                {/* Aprofundamento I */}
                {turma.ciclo2.aprofundamentoI && (
                  <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                    <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                      Aprofundamento I
                    </span>
                    <p className="text-sm font-bold text-[#00223B]">
                      {turma.ciclo2.aprofundamentoI.periodo}
                    </p>
                    <p className="text-xs text-[#334155] mt-1 font-medium">
                      {turma.ciclo2.aprofundamentoI.encontros}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Matérias do 2º Ciclo */}
            <div>
              <span className="text-xs font-bold text-[#00223B] uppercase tracking-wider block mb-3">
                {turma.turnosESelecao ? '7. Matérias do 2º Ciclo:' : 'Matérias do 2º Ciclo:'}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {turma.ciclo2.materias.map((mat, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-3.5 rounded-xl border border-[#E1E5E8] shadow-xs flex flex-col justify-center items-center text-center hover:border-[#0289C6] transition-colors"
                  >
                    <BookOpen className="w-5 h-5 text-[#004B7C] mb-1.5" />
                    <span className="text-xs sm:text-sm font-bold text-[#00223B]">{mat.nome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* RECESSOS DO 2º CICLO (LINHA DO TEMPO / CALENDÁRIO) */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <Calendar className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                {turma.turnosESelecao ? '8. Recessos' : '5. Recessos Programados'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {turma.recessosCiclo2.map((rec, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F8FAFC] p-4.5 rounded-xl border border-[#E1E5E8] flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#004B7C]/10 text-[#004B7C] font-bold text-sm flex items-center justify-center shrink-0">
                    {idx + 1}º
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
                      {rec.titulo}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#00223B] block mt-0.5">
                      {rec.periodo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* APROFUNDAMENTO II (QUANDO EXISTIR) */}
          {/* ------------------------------------------------------------ */}
          {turma.aprofundamento2 && (
            <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-6 sm:p-8 rounded-2xl border border-[#015E96]/50 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#FFBF00] text-[#00223B] font-black text-[11px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Etapa Final da Preparação
                </span>
              </div>

              <h2 className="font-serif-heading text-xl sm:text-2xl font-black text-white uppercase mb-2">
                6. {turma.aprofundamento2.titulo}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase block mb-0.5">Período</span>
                  <span className="text-sm font-bold text-white">{turma.aprofundamento2.periodo}</span>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase block mb-0.5">Encontros</span>
                  <span className="text-sm font-bold text-white">{turma.aprofundamento2.encontros}</span>
                </div>
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase block mb-0.5">Frequência</span>
                  <span className="text-sm font-bold text-white">{turma.aprofundamento2.frequencia}</span>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2 text-xs sm:text-sm text-[#E1E5E8] leading-relaxed">
                <p>
                  <strong className="text-white">Objetivo:</strong> {turma.aprofundamento2.objetivo}
                </p>
                <p className="text-xs text-[#E1E5E8]/80">
                  {turma.aprofundamento2.abrangencia}
                </p>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------ */}
          {/* MATERIAL DIDÁTICO */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-[#F8FAFC] border-2 border-[#0289C6]/30 p-6 rounded-2xl shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#0289C6]/20 text-[#004B7C] flex items-center justify-center shrink-0">
                <PackageCheck className="w-5 h-5" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                {turma.turnosESelecao ? '9. ' : '7. '}{turma.materialDidatico.titulo}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-[#E1E5E8] mb-3">
              <span className="text-xs sm:text-sm font-bold text-[#00223B]">
                Entrega prevista do material didático:
              </span>
              <span className="inline-block bg-[#004B7C] text-white font-black text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider">
                {turma.materialDidatico.entregaPrevista}
              </span>
            </div>

            <div className="bg-[#0289C6]/10 p-4 rounded-xl border border-[#0289C6]/20 text-xs sm:text-sm text-[#00223B] leading-relaxed font-medium">
              ℹ️ {turma.materialDidatico.observacao}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* COMBOS (ESCOLHA SEU COMBO) */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
                Planos e Benefícios
              </span>
              <h2 className="font-serif-heading text-xl sm:text-3xl font-black text-[#00223B] uppercase">
                {turma.turnosESelecao ? '10. Escolha seu combo' : '8. Escolha seu Combo'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {turma.combos.map((combo, idx) => (
                <div 
                  key={idx}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                    combo.destaque 
                      ? 'bg-gradient-to-b from-[#00223B] to-[#001D33] text-white border-2 border-[#FFBF00] shadow-xl relative -translate-y-1' 
                      : 'bg-[#F8FAFC] text-[#0A131F] border border-[#E1E5E8] shadow-sm hover:border-[#0289C6]/40'
                  }`}
                >
                  {combo.tag && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#FFBF00] text-[#00223B] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {combo.tag}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className={`font-serif-heading text-lg sm:text-xl font-black uppercase mb-4 ${combo.destaque ? 'text-white' : 'text-[#00223B]'}`}>
                      {combo.nome}
                    </h3>

                    <span className="text-[11px] font-bold uppercase tracking-wider block mb-2 opacity-75">
                      Inclui:
                    </span>

                    <ul className="space-y-2.5 mb-6 text-sm">
                      {combo.itens.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${combo.destaque ? 'text-[#FFBF00]' : 'text-[#004B7C]'}`} />
                          <span className={combo.destaque ? 'text-[#E1E5E8] font-medium' : 'text-[#334155] font-medium'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {combo.destaqueAceleradorVest && (
                      <div className="mt-4 pt-4 border-t border-white/20 text-xs">
                        <span className="font-bold text-[#FFBF00] block mb-1">
                          {combo.destaqueAceleradorVest.titulo}
                        </span>
                        <p className="text-[#E1E5E8] mb-3 leading-relaxed">
                          {combo.destaqueAceleradorVest.texto}
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            setTimeout(() => {
                              const el = document.getElementById('diferenciais');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 150);
                          }}
                          className="inline-flex items-center gap-1.5 font-bold text-[#FFBF00] hover:text-white underline cursor-pointer text-xs"
                        >
                          <span>{combo.destaqueAceleradorVest.botaoTexto}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center text-xs font-black py-2.5 px-4 rounded-xl uppercase tracking-wider transition-all block mt-4 ${
                      combo.destaque
                        ? 'bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] shadow-md'
                        : 'bg-[#004B7C] hover:bg-[#00223B] text-white'
                    }`}
                  >
                    Consultar este combo
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SIMULADOS (QUANDO DISPONÍVEL) */}
          {/* ------------------------------------------------------------ */}
          {turma.simulados && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                  <FileText className="w-4 h-4 text-[#FFBF00]" />
                </div>
                <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                  {turma.turnosESelecao ? '11. ' : '9. '}{turma.simulados.titulo}
                </h2>
              </div>

              {/* Modelos Dinâmicos de Simulados */}
              {turma.simulados.modelos ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {turma.simulados.modelos.map((m, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#004B7C] uppercase tracking-wider mb-2">
                        <Shield className="w-4 h-4 text-[#004B7C]" />
                        <span>{m.nome}</span>
                      </div>
                      <p className="text-sm font-semibold text-[#00223B] mb-1">
                        {m.dias}
                      </p>
                      <p className="text-xs text-[#334155] font-bold">
                        {m.horario}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {turma.simulados.modeloEpcar && (
                    <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#004B7C] uppercase tracking-wider mb-2">
                        <Shield className="w-4 h-4 text-[#004B7C]" />
                        <span>{turma.simulados.modeloEpcar.nome}</span>
                      </div>
                      <p className="text-sm font-semibold text-[#00223B]">
                        {turma.simulados.modeloEpcar.dia}
                      </p>
                      <p className="text-xs text-[#334155] mt-1 font-bold">
                        Horário: {turma.simulados.modeloEpcar.horario}
                      </p>
                    </div>
                  )}

                  {turma.simulados.modeloCn && (
                    <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#004B7C] uppercase tracking-wider mb-2">
                        <Shield className="w-4 h-4 text-[#004B7C]" />
                        <span>{turma.simulados.modeloCn.nome}</span>
                      </div>
                      <p className="text-sm font-semibold text-[#00223B]">
                        {turma.simulados.modeloCn.dia}
                      </p>
                      <div className="text-xs text-[#334155] mt-1 space-y-0.5 font-bold">
                        <p>{turma.simulados.modeloCn.dia1}</p>
                        <p>{turma.simulados.modeloCn.dia2}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Informações importantes dos simulados */}
              <div className="bg-white p-4.5 rounded-xl border border-[#E1E5E8] space-y-2 mb-3">
                <span className="text-xs font-bold text-[#00223B] uppercase tracking-wider block">
                  Informações importantes:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#334155]">
                  {turma.simulados.avisos.map((aviso, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#0289C6] font-bold">•</span>
                      <span>{aviso}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Alerta Destacado de Inscrição nos Simulados */}
              <div className="bg-[#DC2626]/10 border-2 border-[#DC2626]/40 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#991B1B] font-semibold leading-relaxed">
                  <strong>ATENÇÃO:</strong> {turma.simulados.avisoInscricaoDestaque}
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------ */}
          {/* MONITORIA DE REDAÇÃO (QUANDO DISPONÍVEL) */}
          {/* ------------------------------------------------------------ */}
          {turma.monitoriaRedacao && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                  <FileText className="w-4 h-4 text-[#FFBF00]" />
                </div>
                <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                  {turma.turnosESelecao ? '12. ' : '10. '}{turma.monitoriaRedacao.titulo}
                </h2>
              </div>

              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-[#E1E5E8] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E1E5E8]">
                  <span className="text-sm sm:text-base font-bold text-[#00223B]">
                    {turma.monitoriaRedacao.quantidade}
                  </span>
                  <span className="text-xs font-bold text-[#004B7C] bg-white px-3 py-1.5 rounded-lg border border-[#E1E5E8]">
                    Período: {turma.monitoriaRedacao.periodo}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-2">
                    Cada redação terá:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {turma.monitoriaRedacao.beneficios.map((ben, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-[#E1E5E8] flex items-center gap-2 text-xs font-semibold text-[#00223B]">
                        <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#0A131F]/75">
                  {turma.monitoriaRedacao.calendarioAviso}
                </p>

                {/* Aviso seguro da inconsistência de data */}
                <div className="bg-[#FFBF00]/15 border border-[#FFBF00]/50 rounded-xl p-3.5 flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#B45309] shrink-0" />
                  <span className="text-xs text-[#78350F] font-bold">
                    {turma.monitoriaRedacao.avisoInconsistencia}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------ */}
          {/* PLANTÃO DE VÉSPERA (QUANDO DISPONÍVEL) */}
          {/* ------------------------------------------------------------ */}
          {turma.plantaoVespera && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                  <Award className="w-4 h-4 text-[#FFBF00]" />
                </div>
                <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                  {turma.turnosESelecao ? '13. ' : '11. '}{turma.plantaoVespera.titulo}
                </h2>
              </div>

              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-[#E1E5E8]">
                <p className="text-sm sm:text-base font-semibold text-[#00223B] mb-4">
                  {turma.plantaoVespera.descricao}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-white p-3 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[10px] text-[#004B7C] font-bold uppercase block mb-0.5">Horário</span>
                    <span className="font-bold text-[#00223B]">{turma.plantaoVespera.horario}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[10px] text-[#004B7C] font-bold uppercase block mb-0.5">Formato</span>
                    <span className="font-bold text-[#00223B]">{turma.plantaoVespera.formato}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[10px] text-[#004B7C] font-bold uppercase block mb-0.5">Datas</span>
                    <span className="font-bold text-[#00223B]">{turma.plantaoVespera.datas}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#E1E5E8]">
                    <span className="text-[10px] text-[#004B7C] font-bold uppercase block mb-0.5">Material</span>
                    <span className="font-bold text-[#00223B]">{turma.plantaoVespera.material}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------ */}
          {/* LINHA DO TEMPO DA PREPARAÇÃO (QUANDO DISPONÍVEL) */}
          {/* ------------------------------------------------------------ */}
          {turma.linhaDoTempo && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                  <Calendar className="w-4 h-4 text-[#FFBF00]" />
                </div>
                <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                  {turma.turnosESelecao ? '14. Linha do Tempo da Preparação' : '12. Linha do Tempo da Preparação'}
                </h2>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#004B7C]/25">
                {turma.linhaDoTempo.map((etapa, idx) => (
                  <div key={idx} className="relative flex flex-col items-start">
                    <div className="absolute -left-6 sm:-left-8 top-1 w-6 h-6 rounded-full bg-[#004B7C] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                      {idx + 1}
                    </div>

                    <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8] w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h3 className="font-bold text-sm text-[#00223B]">
                          {etapa.titulo}
                        </h3>
                        <span className="text-xs font-extrabold text-[#004B7C] bg-white px-2.5 py-0.5 rounded-md border border-[#E1E5E8] self-start sm:self-auto">
                          {etapa.data}
                        </span>
                      </div>
                      {etapa.descricao && (
                        <p className="text-xs text-[#0A131F]/75 leading-relaxed mt-1">
                          {etapa.descricao}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------ */}
          {/* CTA FINAL */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-6 sm:p-10 rounded-2xl border border-[#015E96]/50 shadow-xl text-center space-y-4">
            <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Inscrições Abertas
            </span>
            <h2 className="font-serif-heading text-xl sm:text-3xl font-black uppercase tracking-tight text-white max-w-xl mx-auto">
              {turma.cta.titulo}
            </h2>
            <p className="text-xs sm:text-base text-[#E1E5E8] max-w-2xl mx-auto leading-relaxed">
              {turma.cta.texto}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#formulario-contato-militar"
                onClick={handleGoToContact}
                className="inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-sm sm:text-base py-3.5 px-8 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>{turma.cta.botaoTexto}</span>
                <ArrowRight className="w-5 h-5 text-[#00223B]" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl uppercase tracking-wider transition-all border border-white/20"
              >
                <span>WhatsApp da Coordenação</span>
              </a>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* RODAPÉ FIXO DO MODAL COM BOTÃO DE VOLTAR E CTA RÁPIDO */}
        {/* ============================================================ */}
        <div className="bg-[#F8FAFC] border-t border-[#E1E5E8] px-4 sm:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#00223B] hover:text-[#004B7C] py-2 px-4 rounded-xl border border-[#E1E5E8] hover:bg-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#004B7C]" />
            <span>Voltar para turmas</span>
          </button>

          <a
            href="#formulario-contato-militar"
            onClick={handleGoToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-xl uppercase tracking-wider shadow-sm transition-all cursor-pointer"
          >
            <span>Ir para o Formulário de Contato</span>
            <ArrowRight className="w-4 h-4 text-[#FFBF00]" />
          </a>
        </div>
      </div>
    </div>
  );
};
