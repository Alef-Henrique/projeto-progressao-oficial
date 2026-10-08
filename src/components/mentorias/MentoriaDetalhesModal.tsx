import React, { useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  Clock, 
  Calendar, 
  Video, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  Award,
  Youtube,
  MessageCircle,
  BookOpen,
  UserCheck
} from 'lucide-react';
import { MentoriaDetalhes } from '../../data/mentoriasData';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';

interface MentoriaDetalhesModalProps {
  mentoria: MentoriaDetalhes;
  onClose: () => void;
}

export const MentoriaDetalhesModal: React.FC<MentoriaDetalhesModalProps> = ({ mentoria, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Gostaria de mais informações sobre a ${mentoria.titulo} do Progressão Online. Como posso fazer minha inscrição?`
  )}`;

  const handleGoToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.getElementById('formulario-contato-militar') || document.getElementById('contato-militar');
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
      aria-labelledby="modal-mentoria-title"
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
              aria-label="Voltar para a lista de mentorias"
            >
              <ArrowLeft className="w-4 h-4 text-[#FFBF00]" />
              <span>Voltar para mentorias</span>
            </button>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider hidden sm:block">
              Progressão Online — Detalhes da Mentoria
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#formulario-contato-militar"
              onClick={handleGoToContact}
              className="hidden md:inline-flex items-center gap-1.5 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs px-3.5 py-1.5 rounded-lg uppercase tracking-wider transition-all shadow-sm cursor-pointer"
            >
              <span>Contato & Inscrição</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00223B]" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#E1E5E8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Fechar janela de detalhes da mentoria"
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
          {/* HERO DA MENTORIA */}
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
                <Video className="w-3.5 h-3.5 text-[#FFBF00]" />
                <span>{mentoria.badge}</span>
              </div>

              <h1 
                id="modal-mentoria-title"
                className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-1"
              >
                {mentoria.titulo}
              </h1>

              <div className="text-sm sm:text-base text-[#FFBF00] font-bold uppercase tracking-wider mb-2">
                {mentoria.subtitulo}
              </div>

              <p className="text-sm sm:text-lg text-[#E1E5E8] max-w-3xl mb-5 font-medium leading-relaxed">
                {mentoria.descricaoHero}
              </p>

              {/* Indicadores Principais em Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15 text-xs">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Formato
                  </span>
                  <span className="font-bold text-white block">
                    Online, ao vivo
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Carga Horária
                  </span>
                  <span className="font-bold text-white block">
                    {mentoria.infoPrincipais.carga}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Horário de Aula
                  </span>
                  <span className="font-bold text-white block">
                    {mentoria.infoPrincipais.horario.aula}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
                  <span className="text-[10px] text-[#FFBF00] font-bold uppercase tracking-wider block mb-1">
                    Foco
                  </span>
                  <span className="font-bold text-white block">
                    {mentoria.foco}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* INFORMAÇÕES PRINCIPAIS */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <Clock className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                Informações Principais
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4">
              {/* Carga e Frequência */}
              <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-2">
                    Carga & Frequência Semanal
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#00223B] mb-2">
                    {mentoria.infoPrincipais.carga}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#334155]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span><strong>Aulas:</strong> {mentoria.infoPrincipais.frequencia.aulas}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span><strong>PDF antecipado:</strong> {mentoria.infoPrincipais.frequencia.pdf}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span><strong>Vídeos tira-dúvidas:</strong> {mentoria.infoPrincipais.frequencia.videos}</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-[#0A131F]/70 mt-3 pt-3 border-t border-[#E1E5E8]">
                  ℹ️ {mentoria.infoPrincipais.frequencia.observacao}
                </p>
              </div>

              {/* Horários e Entregas */}
              <div className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-2">
                    Horários de Aulas e Materiais
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#00223B] mb-2">
                    {mentoria.infoPrincipais.horario.aula}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#334155]">
                    <li className="flex items-center gap-2">
                      <span className="text-[#0289C6] font-bold">•</span>
                      <span><strong>Intervalo:</strong> {mentoria.infoPrincipais.horario.intervalo}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#0289C6] font-bold">•</span>
                      <span><strong>Envio do PDF:</strong> {mentoria.infoPrincipais.horario.envioPdf}</span>
                    </li>
                    {mentoria.infoPrincipais.horario.envioVideos && (
                      <li className="flex items-center gap-2">
                        <span className="text-[#0289C6] font-bold">•</span>
                        <span><strong>Vídeos tira-dúvidas:</strong> {mentoria.infoPrincipais.horario.envioVideos}</span>
                      </li>
                    )}
                  </ul>
                </div>

                {mentoria.infoPrincipais.horario.observacaoDivergencia && (
                  <div className="mt-3 pt-3 border-t border-[#E1E5E8] bg-[#FFBF00]/15 p-2.5 rounded-lg text-xs font-bold text-[#78350F] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#B45309] shrink-0" />
                    <span>{mentoria.infoPrincipais.horario.observacaoDivergencia}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Aviso de Período / Informações Pendentes de Confirmação (quando existir) */}
            {mentoria.infoPrincipais.periodo && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  <span className="font-bold">Período da Mentoria:</span> {mentoria.infoPrincipais.periodo.datas}
                  {mentoria.infoPrincipais.periodo.observacaoConflito && (
                    <span className="block mt-1 font-semibold text-amber-800">
                      ⚠️ {mentoria.infoPrincipais.periodo.observacaoConflito}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* COMO FUNCIONA / RECURSOS DA MENTORIA */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <Layers className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                Como Funciona a Mentoria
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mentoria.recursos.map((rec, idx) => (
                <div key={idx} className="bg-[#F8FAFC] p-5 rounded-xl border border-[#E1E5E8] flex flex-col justify-between hover:border-[#0289C6]/50 transition-colors">
                  <div>
                    <h3 className="text-sm font-bold text-[#00223B] mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0" />
                      <span>{rec.titulo}</span>
                    </h3>
                    <p className="text-xs text-[#334155] leading-relaxed">
                      {rec.descricao}
                    </p>
                  </div>
                  {rec.detalhe && (
                    <div className="mt-3 pt-2 border-t border-[#E1E5E8] text-[11px] text-[#004B7C] font-semibold">
                      {rec.detalhe}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CRONOGRAMA SEMANAL */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <Calendar className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                Cronograma Semanal de Estudos
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mentoria.cronogramaSemanal.map((crono, idx) => (
                <div 
                  key={idx}
                  className={`p-4.5 rounded-xl border flex flex-col justify-between ${
                    crono.destaque
                      ? 'bg-gradient-to-b from-[#00223B] to-[#001D33] text-white border-[#FFBF00] shadow-md sm:col-span-2 lg:col-span-3'
                      : 'bg-[#F8FAFC] border-[#E1E5E8]'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${crono.destaque ? 'text-[#FFBF00]' : 'text-[#004B7C]'}`}>
                      {crono.dia}
                    </span>
                    <h4 className={`text-sm font-bold mb-1.5 ${crono.destaque ? 'text-white' : 'text-[#00223B]'}`}>
                      {crono.titulo}
                    </h4>
                    <p className={`text-xs leading-relaxed ${crono.destaque ? 'text-[#E1E5E8]' : 'text-[#334155]'}`}>
                      {crono.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* SEÇÃO COMBO MULTI (QUANDO APLICÁVEL, EX: EAGS E RM2) */}
          {/* ------------------------------------------------------------ */}
          {mentoria.comboMultiDetalhes && (
            <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-6 sm:p-8 rounded-2xl border border-[#015E96]/50 shadow-md space-y-5">
              <div className="flex items-center gap-2">
                <span className="bg-[#FFBF00] text-[#00223B] font-black text-[11px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                  Destaque Exclusivo
                </span>
                <h3 className="font-serif-heading text-lg sm:text-2xl font-bold text-white uppercase">
                  {mentoria.comboMultiDetalhes.titulo}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* Plantão de Véspera */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1">
                    {mentoria.comboMultiDetalhes.plantaoVespera.titulo}
                  </h4>
                  <p className="text-[#E1E5E8] mb-2">
                    {mentoria.comboMultiDetalhes.plantaoVespera.descricao}
                  </p>
                  <p className="text-white font-semibold">
                    Horário: {mentoria.comboMultiDetalhes.plantaoVespera.horario}
                  </p>
                  <p className="text-[#E1E5E8]/80 text-[11px] mt-1">
                    Material incluso. {mentoria.comboMultiDetalhes.plantaoVespera.datas}
                  </p>
                </div>

                {/* Simulados Presenciais */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1">
                    {mentoria.comboMultiDetalhes.simulados.titulo}
                  </h4>
                  <p className="text-white font-semibold mb-1">
                    {mentoria.comboMultiDetalhes.simulados.formato}
                  </p>
                  <p className="text-[#E1E5E8] text-[11px] mb-1">
                    {mentoria.comboMultiDetalhes.simulados.gabarito}
                  </p>
                  <p className="text-[#E1E5E8] text-[11px]">
                    Correção: {mentoria.comboMultiDetalhes.simulados.correcao}
                  </p>
                </div>

                {/* OPA */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1">
                    {mentoria.comboMultiDetalhes.opa.titulo}
                  </h4>
                  <p className="text-[#E1E5E8] leading-relaxed">
                    {mentoria.comboMultiDetalhes.opa.descricao}
                  </p>
                </div>
              </div>

              {/* Alerta de Inscrição Obrigatória */}
              <div className="bg-[#DC2626]/20 border border-[#DC2626]/50 rounded-xl p-3.5 flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-[#FCA5A5] shrink-0 mt-0.5" />
                <p className="text-xs text-[#FEE2E2] font-medium leading-relaxed">
                  <strong>IMPORTANTE:</strong> {mentoria.comboMultiDetalhes.simulados.avisoInscricao}
                </p>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------ */}
          {/* COMBOS / OPÇÕES */}
          {/* ------------------------------------------------------------ */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
                Planos de Contratação
              </span>
              <h2 className="font-serif-heading text-xl sm:text-3xl font-black text-[#00223B] uppercase">
                Escolha sua Opção
              </h2>
            </div>

            <div className={`grid grid-cols-1 ${mentoria.opcoesCombos.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-3'} gap-5`}>
              {mentoria.opcoesCombos.map((combo, idx) => (
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
                  </div>

                  <a
                    href="#formulario-contato-militar"
                    onClick={handleGoToContact}
                    className={`w-full text-center text-xs font-black py-2.5 px-4 rounded-xl uppercase tracking-wider transition-all block cursor-pointer ${
                      combo.destaque
                        ? 'bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] shadow-md'
                        : 'bg-[#004B7C] hover:bg-[#00223B] text-white'
                    }`}
                  >
                    Consultar esta opção
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CTA FINAL */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-6 sm:p-10 rounded-2xl border border-[#015E96]/50 shadow-xl text-center space-y-4">
            <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Inscrições Abertas — Progressão Online
            </span>
            <h2 className="font-serif-heading text-xl sm:text-3xl font-black uppercase tracking-tight text-white max-w-xl mx-auto">
              {mentoria.cta.titulo}
            </h2>
            <p className="text-xs sm:text-base text-[#E1E5E8] max-w-2xl mx-auto leading-relaxed">
              {mentoria.cta.texto}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#formulario-contato-militar"
                onClick={handleGoToContact}
                className="inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-sm sm:text-base py-3.5 px-8 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>{mentoria.cta.botaoTexto}</span>
                <ArrowRight className="w-5 h-5 text-[#00223B]" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl uppercase tracking-wider transition-all border border-white/20"
              >
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* RODAPÉ FIXO DO MODAL */}
        {/* ============================================================ */}
        <div className="bg-[#F8FAFC] border-t border-[#E1E5E8] px-4 sm:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#00223B] hover:text-[#004B7C] py-2 px-4 rounded-xl border border-[#E1E5E8] hover:bg-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#004B7C]" />
            <span>Voltar para mentorias</span>
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