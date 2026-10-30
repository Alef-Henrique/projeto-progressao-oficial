import React, { useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  BookOpen, 
  Check, 
  AlertCircle, 
  FileText, 
  Layers, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  Target,
  Zap,
  Package
} from 'lucide-react';
import { TurmaConcurso } from '../../data/turmasconcursos';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';
import { TabelaValoresTurma } from '../common/TabelaValoresTurma';

interface TurmaConcursoDetalhesModalProps {
  turma: TurmaConcurso;
  onClose: () => void;
}

export const TurmaConcursoDetalhesModal: React.FC<TurmaConcursoDetalhesModalProps> = ({ 
  turma, 
  onClose 
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Gostaria de informações e de me inscrever na ${turma.titulo} do Curso Progressão Caxias. Como posso garantir minha vaga?`
  )}`;

  const horarioLabel = turma.horarioRotulo || (turma.id.includes('prf') ? 'Horário em 2026' : 'Horário');

  return (
    <div className="fixed inset-0 z-50 bg-[#001D33]/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-turma-concurso-title"
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#E1E5E8] animate-scale-up"
      >
        {/* Cabeçalho */}
        <div className="bg-gradient-to-r from-[#00223B] to-[#004B7C] text-white p-4 sm:p-6 flex items-center justify-between gap-4 border-b border-white/10 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E1E5E8] hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#FFBF00]" />
            <span>Voltar</span>
          </button>

          <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider truncate max-w-xs sm:max-w-md">
            {turma.titulo}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo com Scroll */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 flex-1 text-[#0A131F]">
          {/* Header Visual */}
          <div className="bg-[#00223B] rounded-2xl p-6 text-white relative overflow-hidden">
            <span className="inline-block bg-[#FFBF00] text-[#00223B] font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider mb-3">
              {turma.categoria || 'Nossa turma'}
            </span>
            <h2 id="modal-turma-concurso-title" className="font-serif-heading text-xl sm:text-3xl font-black text-white uppercase leading-snug">
              {turma.titulo}
            </h2>
            {turma.subtitulo && (
              <p className="text-sm text-[#E1E5E8] mt-1.5 font-medium">
                {turma.subtitulo}
              </p>
            )}
          </div>

          {/* Grid de Informações Chave */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
            {turma.periodo && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  Período
                </span>
                <span className="font-bold text-[#00223B] text-sm block">
                  {turma.periodo}
                </span>
              </div>
            )}

            {turma.modalidade && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  Modalidade
                </span>
                <span className="font-bold text-[#00223B] text-sm block">
                  {turma.modalidade}
                </span>
              </div>
            )}

            {turma.turnos && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  Turnos
                </span>
                <span className="font-bold text-[#00223B] text-sm block">
                  {turma.turnos}
                </span>
              </div>
            )}

            {turma.cargaNoite && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  Carga (noite)
                </span>
                <span className="font-bold text-[#004B7C] text-sm block">
                  {turma.cargaNoite}
                </span>
              </div>
            )}

            {turma.cargaSabado && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  Carga (sábado)
                </span>
                <span className="font-bold text-[#004B7C] text-sm block">
                  {turma.cargaSabado}
                </span>
              </div>
            )}

            {!turma.cargaNoite && turma.cargaTotal && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  Carga
                </span>
                <span className="font-bold text-[#004B7C] text-sm block">
                  {turma.cargaTotal}
                </span>
              </div>
            )}

            {turma.frequencia && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  Frequência
                </span>
                <span className="font-bold text-[#00223B] text-sm block">
                  {turma.frequencia}
                </span>
              </div>
            )}

            {turma.formato && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8] sm:col-span-2 lg:col-span-1">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  Formato
                </span>
                <span className="font-bold text-[#00223B] text-xs block leading-snug">
                  {turma.formato}
                </span>
              </div>
            )}

            {turma.horario && (
              <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8] sm:col-span-2">
                <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block mb-1">
                  {horarioLabel}
                </span>
                <span className="font-bold text-[#00223B] text-sm block">
                  {turma.horario}
                </span>
              </div>
            )}

            {turma.bonus && (
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 sm:col-span-2 lg:col-span-1">
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Bônus
                </span>
                <span className="font-bold text-amber-900 text-sm block">
                  {turma.bonus}
                </span>
              </div>
            )}
          </div>

          {/* Para quem é & Foco */}
          {(turma.paraQuemE || turma.foco) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {turma.paraQuemE && (
                <div className="bg-[#F0F7FD] p-4 sm:p-5 rounded-2xl border border-[#BAE6FD] space-y-2">
                  <h3 className="text-xs font-bold text-[#004B7C] uppercase tracking-wider flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#004B7C]" />
                    <span>Para quem é</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0A131F]/90 leading-relaxed font-medium">
                    {turma.paraQuemE}
                  </p>
                </div>
              )}

              {turma.foco && (
                <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-[#E1E5E8] space-y-2">
                  <h3 className="text-xs font-bold text-[#00223B] uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#FFBF00]" />
                    <span>Foco</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0A131F]/90 leading-relaxed font-medium">
                    {turma.foco}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Matérias */}
          {turma.materias && turma.materias.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-[#00223B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#004B7C]" />
                <span>Matérias</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {turma.materias.map((mat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E1E5E8] flex items-center gap-2 text-xs font-semibold text-[#00223B]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#004B7C] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conteúdo Programático / Observações de Conteúdo */}
          {turma.conteudo && (
            <div className="bg-[#F0F7FD] p-4 sm:p-5 rounded-2xl border border-[#BAE6FD]">
              <h3 className="text-xs font-bold text-[#004B7C] uppercase tracking-wider mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#004B7C]" />
                <span>Conteúdo Programático</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#0A131F]/90 leading-relaxed">
                {turma.conteudo}
              </p>
            </div>
          )}

          {/* Matérias Presenciais */}
          {turma.materiasPresenciais && turma.materiasPresenciais.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-[#00223B] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#004B7C]" />
                <span>Matérias Presenciais</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {turma.materiasPresenciais.map((mat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E1E5E8] flex items-center gap-2 text-xs font-semibold text-[#00223B]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#004B7C] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conhecimentos Básicos */}
          {turma.conhecimentosBasicos && turma.conhecimentosBasicos.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-[#00223B] uppercase tracking-wider mb-2.5">
                Conhecimentos Básicos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {turma.conhecimentosBasicos.map((mat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E1E5E8] flex items-center gap-2 text-xs font-semibold text-[#00223B]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#004B7C] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conhecimentos Específicos */}
          {turma.conhecimentosEspecificos && turma.conhecimentosEspecificos.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-[#0289C6] uppercase tracking-wider mb-2.5">
                Conhecimentos Específicos
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {turma.conhecimentosEspecificos.map((mat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded-xl border border-[#0289C6]/30 shadow-2xs flex items-center gap-2 text-xs font-bold text-[#00223B]"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#0289C6] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disciplinas Básicos */}
          {turma.disciplinasBasicos && turma.disciplinasBasicos.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-[#00223B] uppercase tracking-wider mb-2.5">
                Disciplinas (básicos)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {turma.disciplinasBasicos.map((mat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAFC] p-3 rounded-xl border border-[#E1E5E8] flex items-center gap-2 text-xs font-semibold text-[#00223B]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#004B7C] shrink-0" />
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Áreas Atendidas */}
          {turma.areasAtendidas && turma.areasAtendidas.length > 0 && (
            <div className="bg-[#F0F7FD] p-4 rounded-xl border border-[#BAE6FD]">
              <h3 className="text-xs font-bold text-[#004B7C] uppercase tracking-wider mb-2.5">
                Áreas Atendidas ({turma.areasAtendidas.length} especialidades)
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {turma.areasAtendidas.map((area, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-[#BAE6FD] text-[#00223B] text-xs font-semibold px-2.5 py-1 rounded-md"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Não Trabalhadas */}
          {((turma.naoTrabalhadas && turma.naoTrabalhadas.length > 0) || (turma.naoTrabalhamos && turma.naoTrabalhamos.length > 0)) && (
            <div className="bg-[#FFF7ED] p-4 rounded-xl border border-[#FED7AA]">
              <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>{turma.naoTrabalhadas ? 'Não trabalhadas' : 'Não trabalhamos'}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {(turma.naoTrabalhadas || turma.naoTrabalhamos || []).map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-amber-900 border border-amber-300 text-xs font-semibold px-2.5 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Combos e Pacotes */}
          {(turma.comboMulti || turma.comboAprov || turma.semCombo) && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#00223B] uppercase tracking-wider flex items-center gap-2">
                <Package className="w-4 h-4 text-[#004B7C]" />
                <span>Modalidades de Contratação e Combos</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {turma.comboMulti && (
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 p-4 rounded-xl border border-amber-200 space-y-1.5">
                    <span className="inline-block bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                      Combo Multi (Completo)
                    </span>
                    <p className="text-xs text-[#00223B] font-bold leading-snug">
                      {turma.comboMulti}
                    </p>
                  </div>
                )}
                {turma.comboAprov && (
                  <div className="bg-[#F0F7FD] p-4 rounded-xl border border-[#BAE6FD] space-y-1.5">
                    <span className="inline-block bg-[#004B7C] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                      Combo Aprov
                    </span>
                    <p className="text-xs text-[#00223B] font-bold leading-snug">
                      {turma.comboAprov}
                    </p>
                  </div>
                )}
                {turma.semCombo && (
                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8] space-y-1.5">
                    <span className="inline-block bg-slate-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                      Sem Combo
                    </span>
                    <p className="text-xs text-[#00223B] font-bold leading-snug">
                      {turma.semCombo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Simulados */}
          {turma.simulados && (
            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
              <h3 className="text-xs font-bold text-[#004B7C] uppercase tracking-wider mb-1.5 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Simulados</span>
              </h3>
              {turma.simulados.operacaoDesempenho && (
                <p className="text-sm font-semibold text-[#00223B]">
                  {turma.simulados.operacaoDesempenho}
                </p>
              )}
            </div>
          )}

          {/* Aulões Estratégicos */}
          {turma.auloesEstrategicos && (
            <div className="bg-gradient-to-br from-[#00223B]/5 to-[#004B7C]/10 p-5 rounded-2xl border border-[#004B7C]/20 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-[#004B7C] font-black text-xs uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-[#FFBF00]" />
                  <span>Aulões Estratégicos</span>
                </div>
                <span className="text-xs font-bold text-[#00223B] bg-white px-3 py-1 rounded-full border border-[#E1E5E8]">
                  {turma.auloesEstrategicos.encontros}
                </span>
              </div>

              {turma.auloesEstrategicos.materias && turma.auloesEstrategicos.materias.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block mb-2">
                    Matérias dos aulões e da Central de Questões:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {turma.auloesEstrategicos.materias.map((mat, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-[#E1E5E8] text-[#00223B] text-xs font-semibold px-2.5 py-1 rounded-md shadow-2xs"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
                    {/* Valores e Formas de Pagamento */}
          {turma.valoresInfo && (
            <TabelaValoresTurma
              valoresInfo={turma.valoresInfo}
              turmaOuConcursoNome={turma.titulo}
              showCta={false}
            />
          )}
        </div>
        


        {/* Rodapé CTA */}
        <div className="p-4 sm:p-6 bg-[#001D33] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <p className="text-xs text-[#E1E5E8] text-center sm:text-left">
            Matrículas abertas para o Curso Progressão Caxias. Vagas limitadas.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm px-6 py-3 rounded-xl uppercase tracking-wider shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#00223B]" />
            <span>FALAR COM COORDENAÇÃO NO WHATSAPP</span>
          </a>
        </div>
      </div>
    </div>
  );
};

