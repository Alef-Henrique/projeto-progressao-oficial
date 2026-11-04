import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Layers, 
  Clock, 
  Target, 
  CalendarDays, 
  Sparkles, 
  ArrowRight,
  Gift
} from 'lucide-react';
import { TurmaConcurso } from '../../data/turmasconcursos';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';
import { useRouter } from '../../components/routing/RouterContext';

export interface TurmaConcursoCardProps {
  turma: TurmaConcurso;
  onSelectTurma?: (turma: TurmaConcurso) => void;
  onMatricula?: (turma: TurmaConcurso) => void;
  showButton?: boolean;
  showInfoGrid?: boolean;
  id?: string;
}

export const TurmaConcursoCard: React.FC<TurmaConcursoCardProps> = ({ 
  turma, 
  onSelectTurma,
  onMatricula,
  showButton = true,
  showInfoGrid = false,
  id
}) => {
  const { navigate } = useRouter();
  const defaultBanner = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';
  const bannerSrc = turma.bannerImage || turma.imagem || defaultBanner;
  const horarioLabel = turma.horarioRotulo || (turma.id.includes('prf') ? 'Horário em 2026' : 'Horário Previsto');
  const cargaHoraria = turma.cargaTotal || turma.cargaNoite || turma.cargaSabado;
  const turmaSlug = turma.slug || turma.id.replace(/^turma-/, '');

  const handleVerDetalhes = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelectTurma) {
      onSelectTurma(turma);
    } else {
      navigate(`/turmas/${turmaSlug}`);
    }
  };

  const handleMatricula = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (turma.linkMatricula) {
      window.open(turma.linkMatricula, '_blank', 'noopener,noreferrer');
      return;
    }
    if (onMatricula) {
      onMatricula(turma);
      return;
    }
    // Fallback: rolar até o formulário de inscrição
    const inscricaoEl = document.getElementById('inscricao');
    if (inscricaoEl) {
      inscricaoEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Olá! Gostaria de fazer minha matrícula na turma ${turma.titulo} do Curso Progressão Caxias.`
      )}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article 
      id={id} 
      className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#004B7C]/40 transition-all duration-300 flex flex-col h-full group scroll-mt-24 md:scroll-mt-28"
    >
      {/* ============================================================ */}
      {/* TOPO – IMAGEM DE CHAMADA DA TURMA (16:9, OBJECT-COVER) */}
      {/* ============================================================ */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#001D33] shrink-0">
        <img 
          src={bannerSrc} 
          alt={`Banner de divulgação da turma ${turma.titulo}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradiente sutil para legibilidade dos badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

        {/* Badge Superior Esquerdo */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className="inline-flex items-center gap-1 bg-[#FFBF00] text-[#00223B] font-black text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
            <span>{turma.categoria || 'Nossa Turma'}</span>
          </span>
        </div>

        {/* Badge Superior Direito: Modalidade */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 bg-[#00223B]/85 backdrop-blur-md text-white border border-white/20 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
            <MapPin className="w-2.5 h-2.5 text-[#FFBF00]" />
            <span>{turma.modalidade || 'Presencial'}</span>
          </span>
        </div>

        {/* Etiqueta Inferior Sobre a Imagem */}
        <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] sm:text-[11px] font-bold text-white drop-shadow-md truncate">
            Curso Progressão Caxias
          </span>
          <span className="text-[9px] sm:text-[10px] font-bold text-[#FFBF00] uppercase tracking-wider drop-shadow-md shrink-0">
            Matrículas Abertas
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MEIO – INFORMAÇÕES DA TURMA */}
      {/* ============================================================ */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 bg-white justify-between gap-5">
        <div className="space-y-4">
          {/* Nome da Turma / Concurso */}
          <div>
            <h3 className="font-serif-heading font-black text-lg sm:text-xl text-[#00223B] uppercase leading-snug group-hover:text-[#004B7C] transition-colors line-clamp-2">
              {turma.titulo}
            </h3>
            {turma.subtitulo && (
              <p className="text-xs text-[#004B7C] font-semibold mt-1 leading-relaxed line-clamp-2">
                {turma.subtitulo}
              </p>
            )}
          </div>

          {/* Blocos / Etiquetas Visuais das Características (Ocultas no card, disponíveis em Ver Detalhes) */}
          {showInfoGrid && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs">
              {/* Período */}
              {turma.periodo && (
                <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8] flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#004B7C] shrink-0" />
                    <span>Período</span>
                  </span>
                  <span className="font-bold text-[#00223B] text-xs leading-tight">
                    {turma.periodo}
                  </span>
                </div>
              )}

              {/* Modalidade */}
              {turma.modalidade && (
                <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8] flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#004B7C] shrink-0" />
                    <span>Modalidade</span>
                  </span>
                  <span className="font-bold text-[#00223B] text-xs leading-tight">
                    {turma.modalidade}
                  </span>
                </div>
              )}

              {/* Formato da Turma */}
              {turma.formato && (
                <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8] flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-[#004B7C] shrink-0" />
                    <span>Formato</span>
                  </span>
                  <span className="font-bold text-[#00223B] text-xs leading-tight truncate" title={turma.formato}>
                    {turma.formato}
                  </span>
                </div>
              )}

              {/* Turnos */}
              {turma.turnos && (
                <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8] flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#004B7C] shrink-0" />
                    <span>Turnos</span>
                  </span>
                  <span className="font-bold text-[#00223B] text-xs leading-tight">
                    {turma.turnos}
                  </span>
                </div>
              )}

              {/* Carga Horária */}
              {cargaHoraria && (
                <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8] flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                    <Target className="w-3 h-3 text-[#004B7C] shrink-0" />
                    <span>Carga Horária</span>
                  </span>
                  <span className="font-bold text-[#004B7C] text-xs leading-tight">
                    {cargaHoraria}
                  </span>
                </div>
              )}

              {/* Frequência Semanal */}
              {turma.frequencia && (
                <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8] flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                    <CalendarDays className="w-3 h-3 text-[#004B7C] shrink-0" />
                    <span>Frequência</span>
                  </span>
                  <span className="font-bold text-[#00223B] text-xs leading-tight truncate" title={turma.frequencia}>
                    {turma.frequencia}
                  </span>
                </div>
              )}

              {/* Horário Previsto */}
              {turma.horario && (
                <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-[#E1E5E8] sm:col-span-2 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#004B7C] shrink-0" />
                    <span>{horarioLabel}</span>
                  </span>
                  <span className="font-bold text-[#00223B] text-xs leading-tight">
                    {turma.horario}
                  </span>
                </div>
              )}

              {/* Bônus ou Benefícios */}
              {turma.bonus && (
                <div className="bg-amber-50/90 p-2.5 rounded-xl border border-amber-200/90 sm:col-span-2 flex items-start gap-2 shadow-2xs">
                  <div className="w-5 h-5 rounded-md bg-[#FFBF00] text-[#00223B] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Gift className="w-3 h-3 text-[#00223B]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-black text-amber-800 uppercase tracking-wider block">
                      Bônus Incluso
                    </span>
                    <span className="text-xs font-semibold text-amber-950 block leading-tight mt-0.5">
                      {turma.bonus}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* RODAPÉ – BOTÕES DE AÇÃO (LADO A LADO) */}
        {/* ============================================================ */}
        {showButton && (
          <div className="pt-4 border-t border-[#E1E5E8]/80 mt-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* BOTÃO SECUNDÁRIO: VER DETALHES */}
              <button
                type="button"
                onClick={handleVerDetalhes}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#F0F7FD] text-[#004B7C] hover:text-[#00223B] border-2 border-[#004B7C] hover:border-[#00223B] font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-3 rounded-xl uppercase tracking-wider shadow-2xs transition-all active:scale-[0.98] cursor-pointer text-center group/btn"
                aria-label={`Ver detalhes completos da turma ${turma.titulo}`}
              >
                <span>Ver detalhes</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#004B7C] group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
              </button>

              {/* BOTÃO PRINCIPAL: FAZER MATRÍCULA */}
              <button
                type="button"
                onClick={handleMatricula}
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#004B7C] hover:bg-[#00223B] text-white font-black text-xs sm:text-sm py-2.5 sm:py-3 px-3 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer text-center"
                aria-label={`Fazer matrícula na turma ${turma.titulo}`}
              >
                <span>Fazer matrícula</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};