import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Layers, 
  Target, 
  CalendarDays, 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  BookOpen, 
  ShieldCheck, 
  Gift, 
  ArrowRight,
  AlertCircle,
  FileCheck,
  Check,
  HelpCircle,
  Users
} from 'lucide-react';
import { useRouter, Link } from '../components/routing/RouterContext';
import { getTurmaBySlug, TurmaConcurso } from '../data/turmasconcursos';
import { WHATSAPP_NUMBER } from '../config/siteConfig';
import { SEO } from '../components/common/SEO';
import { TabelaValoresTurma } from '../components/common/TabelaValoresTurma';
import { RDStationForm } from '../components/rdstation/RDStationForm';
import { GuardasMunicipaisDetalhesView } from '../components/turmas/GuardasMunicipaisDetalhesView';
import { PetrobrasDetalhesView } from '../components/turmas/PetrobrasDetalhesView';
import { PetrobrasSuprimentosDetalhesView } from '../components/turmas/PetrobrasSuprimentosDetalhesView';
import { SabadaoTranspetroDetalhesView } from '../components/turmas/SabadaoTranspetroDetalhesView';
import { SemanaTranspetroDetalhesView } from '../components/turmas/SemanaTranspetroDetalhesView';


interface TurmaDetalhesPageProps {
  slug?: string;
}

export const TurmaDetalhesPage: React.FC<TurmaDetalhesPageProps> = ({ slug }) => {
  const { currentPath, navigate } = useRouter();
  
  // Extrai o slug do path se não vier via prop
  const currentSlug = slug || currentPath.replace(/^\/turmas\/?/, '').replace(/\/$/, '').trim();
    // Novo layout personalizado para Guardas Municipais do RJ conforme modelo oficial
  if (currentSlug === 'guardas-municipais-rj' || currentSlug === 'turma-guardas-municipais-rj') {
    return <GuardasMunicipaisDetalhesView />;
  }
  // Novo layout personalizado para Petrobras – Nível Médio conforme modelo oficial
  if (currentSlug === 'petrobras-nivel-medio' || currentSlug === 'turma-petrobras-nivel-medio' || currentSlug === 'petrobras') {
    return <PetrobrasDetalhesView />;
  }
  
  // Novo layout personalizado para Petrobras – Suprimentos de Bens e Serviços (Administração)
  if (
    currentSlug === 'petrobras-suprimentos-administracao' || 
    currentSlug === 'turma-petrobras-suprimentos-administracao' || 
    currentSlug === 'petrobras-suprimentos'
  ) {
    return <PetrobrasSuprimentosDetalhesView />;
  }
    
  // Novo layout personalizado para Sabadão Transpetro – Aulões de Reta Final
  if (
    currentSlug === 'sabadao-transpetro' || 
    currentSlug === 'turma-sabadao-transpetro'
  ) {
    return <SabadaoTranspetroDetalhesView />;
  }
    // Novo layout personalizado para Semana Transpetro – Aulões de Reta Final
  if (
    currentSlug === 'semana-transpetro' || 
    currentSlug === 'turma-semana-transpetro'
  ) {
    return <SemanaTranspetroDetalhesView />;
  }
  
  const turma: TurmaConcurso | undefined = getTurmaBySlug(currentSlug);

  // Estado do formulário de matrícula rápido integrado na página
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [inscricaoSucesso, setInscricaoSucesso] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlug]);

  if (!turma) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#F9F9FD]">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 shadow-sm">
          <AlertCircle className="w-8 h-8" />
        </div>
        <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider mb-2">
          Turma Não Encontrada
        </span>
        <h1 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] mb-3">
          Página da Turma Indisponível
        </h1>
        <p className="text-sm text-[#64748B] max-w-md mb-8 leading-relaxed">
          Não localizamos os detalhes da turma com o identificador "{currentSlug}". Consulte o catálogo de turmas com inscrições abertas.
        </p>
        <button
          type="button"
          onClick={() => navigate('/concursos#nossas-turmas')}
          className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#FFBF00]" />
          <span>Voltar para Nossas Turmas</span>
        </button>
      </div>
    );
  }

  const defaultBanner = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';
  const bannerSrc = turma.bannerImage || turma.imagem || defaultBanner;
  const horarioLabel = turma.horarioRotulo || (turma.id.includes('prf') ? 'Horário em 2026' : 'Horário Previsto');
  const cargaHoraria = turma.cargaTotal || turma.cargaNoite || turma.cargaSabado;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Gostaria de informações e de garantir minha matrícula na ${turma.titulo} do Curso Progressão Caxias.`
  )}`;

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !telefone) return;
    setInscricaoSucesso(true);
  };

  const handleMatriculaClick = () => {
    if (turma.linkMatricula) {
      window.open(turma.linkMatricula, '_blank', 'noopener,noreferrer');
      return;
    }
    const formEl = document.getElementById('formulario-matricula-turma');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9FD] text-[#0A131F]">
      <SEO
        title={`${turma.titulo} | Curso Progressão Caxias`}
        description={`Matrículas abertas para ${turma.titulo}. ${turma.subtitulo || 'Preparação completa com aulas presenciais, simulados e corpo docente especializado em Duque de Caxias.'}`}
      />

      {/* Navegação Superior: Breadcrumbs & Voltar */}
      <div className="bg-[#00223B] text-white border-b border-[#015E96]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center">
          <button
            type="button"
            onClick={() => navigate('/concursos#nossas-turmas')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E1E5E8] hover:text-[#FFBF00] transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-white/10"
            aria-label="Voltar para a listagem de turmas e concursos"
          >
            <ArrowLeft className="w-4 h-4 text-[#FFBF00]" />
            <span>Voltar para Turmas</span>
          </button>


        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* ============================================================ */}
        {/* 1. TOPO – IMAGEM DE CHAMADA E APRESENTAÇÃO DA TURMA */}
        {/* ============================================================ */}
        <section className="bg-white rounded-3xl overflow-hidden border border-[#E1E5E8] shadow-sm">
          {/* Imagem de Chamada 16:9 em largura total */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[480px] overflow-hidden bg-[#001D33]">
            <img
              src={bannerSrc}
              alt={`Banner oficial da turma ${turma.titulo}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/90 via-[#001D33]/40 to-transparent pointer-events-none" />

            {/* Badges Flutuantes */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap items-center gap-2 z-10">

              <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white border border-white/20 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#FFBF00]" />
                <span>{turma.modalidade || 'Presencial em Duque de Caxias'}</span>
              </span>
            </div>

            {/* Chamada Textual no Banner */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 z-10 text-white space-y-2">
              <span className="text-xs sm:text-sm font-bold text-[#38BDF8] uppercase tracking-wider block drop-shadow">
                Preparação de Alta Performance · Curso Progressão Caxias
              </span>
              <h1 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
                {turma.titulo}
              </h1>
              {turma.subtitulo && (
                <p className="text-sm sm:text-lg text-[#E1E5E8] max-w-3xl font-medium drop-shadow leading-relaxed">
                  {turma.subtitulo}
                </p>
              )}
            </div>
          </div>

          {/* Barra de Ação Rápida Abaixo do Banner */}
          <div className="bg-[#00223B] text-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#015E96]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004B7C] flex items-center justify-center text-[#FFBF00] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block">
                  Matrículas Abertas para Novas Turmas
                </span>
                <span className="text-sm font-medium text-white/90">
                  Vagas limitadas por sala presencial para acompanhamento individual
                </span>
              </div>
            </div>

            <div className="flex flex-col xs:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleMatriculaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm py-3 px-6 rounded-xl uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
              >
                <span>Fazer matrícula</span>
                <ArrowRight className="w-4 h-4 text-[#00223B]" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm py-3 px-5 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. GRID DE INFORMAÇÕES E CARACTERÍSTICAS DA TURMA */}
        {/* ============================================================ */}
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
              <Calendar className="w-4 h-4 text-[#FFBF00]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block">
                Ficha Técnica da Turma
              </span>
              <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#00223B]">
                Informações e Cronograma da Turma
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {turma.periodo && (
              <div className="bg-white p-4 rounded-2xl border border-[#E1E5E8] shadow-xs flex flex-col justify-between">
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#004B7C]" /> Período
                </span>
                <span className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.periodo}
                </span>
              </div>
            )}

            {turma.modalidade && (
              <div className="bg-white p-4 rounded-2xl border border-[#E1E5E8] shadow-xs flex flex-col justify-between">
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#004B7C]" /> Modalidade
                </span>
                <span className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.modalidade}
                </span>
              </div>
            )}

            {turma.formato && (
              <div className="bg-white p-4 rounded-2xl border border-[#E1E5E8] shadow-xs flex flex-col justify-between">
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#004B7C]" /> Formato
                </span>
                <span className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.formato}
                </span>
              </div>
            )}

            {turma.turnos && (
              <div className="bg-white p-4 rounded-2xl border border-[#E1E5E8] shadow-xs flex flex-col justify-between">
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#004B7C]" /> Turnos
                </span>
                <span className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.turnos}
                </span>
              </div>
            )}

            {cargaHoraria && (
              <div className="bg-white p-4 rounded-2xl border border-[#E1E5E8] shadow-xs flex flex-col justify-between">
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-[#004B7C]" /> Carga Horária
                </span>
                <span className="font-bold text-[#004B7C] text-sm sm:text-base">
                  {cargaHoraria}
                </span>
              </div>
            )}

            {turma.frequencia && (
              <div className="bg-white p-4 rounded-2xl border border-[#E1E5E8] shadow-xs flex flex-col justify-between">
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5 text-[#004B7C]" /> Frequência Semanal
                </span>
                <span className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.frequencia}
                </span>
              </div>
            )}

            {turma.horario && (
              <div className="bg-white p-4 rounded-2xl border border-[#E1E5E8] shadow-xs sm:col-span-2 flex flex-col justify-between">
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#004B7C]" /> {horarioLabel}
                </span>
                <span className="font-bold text-[#00223B] text-sm sm:text-base">
                  {turma.horario}
                </span>
              </div>
            )}
          </div>

          {/* Bônus ou Benefícios da Turma */}
          {turma.bonus && (
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/70 p-5 rounded-2xl border border-amber-300/80 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FFBF00] text-[#00223B] flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Gift className="w-5 h-5 text-[#00223B]" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-black text-amber-900 uppercase tracking-wider block">
                  Bônus e Benefícios Exclusivos Desta Turma
                </span>
                <p className="text-sm font-bold text-amber-950 mt-1 leading-relaxed">
                  {turma.bonus}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* ============================================================ */}
        {/* 3. PARA QUEM É & FOCO PEDAGÓGICO */}
        {/* ============================================================ */}
        {(turma.paraQuemE || turma.foco || turma.cargoInfo) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {turma.paraQuemE && (
              <div className="bg-white p-6 rounded-3xl border border-[#E1E5E8] shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#004B7C]">
                  <Users className="w-5 h-5" />
                  <h3 className="font-serif-heading text-lg font-bold text-[#00223B]">
                    Para quem é esta turma?
                  </h3>
                </div>
                <p className="text-sm text-[#0A131F]/90 leading-relaxed">
                  {turma.paraQuemE}
                </p>
              </div>
            )}

            {turma.foco && (
              <div className="bg-white p-6 rounded-3xl border border-[#E1E5E8] shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#004B7C]">
                  <Target className="w-5 h-5 text-[#FFBF00]" />
                  <h3 className="font-serif-heading text-lg font-bold text-[#00223B]">
                    Foco Estratégico do Curso
                  </h3>
                </div>
                <p className="text-sm text-[#0A131F]/90 leading-relaxed">
                  {turma.foco}
                </p>
              </div>
            )}

            {turma.cargoInfo && (
              <div className="bg-[#F0F7FD] p-6 rounded-3xl border border-[#BAE6FD] space-y-2 md:col-span-2">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block">
                  Cargo Contemplado & Requisitos Oficiais
                </span>
                <h4 className="font-serif-heading text-lg font-bold text-[#00223B]">
                  {turma.cargoInfo.cargo}
                </h4>
                {turma.cargoInfo.requisito && (
                  <p className="text-sm text-[#004B7C]/90 font-medium">
                    {turma.cargoInfo.requisito}
                  </p>
                )}
              </div>
            )}
          </section>
        )}

        {/* ============================================================ */}
        {/* 4. DISCIPLINAS E CONTEÚDO PROGRAMÁTICO */}
        {/* ============================================================ */}
        {((turma.materiasPresenciais && turma.materiasPresenciais.length > 0) ||
          (turma.materias && turma.materias.length > 0) ||
          (turma.conhecimentosBasicos && turma.conhecimentosBasicos.length > 0)) && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E1E5E8] shadow-xs space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <BookOpen className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block">
                  Matérias Ofertadas
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#00223B]">
                  Disciplinas e Grade Curricular
                </h3>
              </div>
            </div>

            {/* Matérias Gerais */}
            {(turma.materiasPresenciais || turma.materias) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {(turma.materiasPresenciais || turma.materias || []).map((materia, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8] flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#00223B]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0" />
                    <span>{materia}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Divisão por Básicos e Específicos se existir */}
            {turma.conhecimentosEspecificos && turma.conhecimentosEspecificos.length > 0 && (
              <div className="pt-4 border-t border-[#E1E5E8]">
                <span className="text-xs font-bold text-[#004B7C] uppercase tracking-wider block mb-3">
                  Núcleo Específico / Jurídico:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {turma.conhecimentosEspecificos.map((esp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F0F7FD] border border-[#BAE6FD] flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#004B7C]"
                    >
                      <Check className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <span>{esp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ============================================================ */}
        {/* 5. ÁREAS ATENDIDAS / MUNICÍPIOS / CARGOS */}
        {/* ============================================================ */}
        {turma.areasAtendidas && turma.areasAtendidas.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E1E5E8] shadow-xs space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <FileCheck className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#004B7C] uppercase tracking-wider block">
                  Abrangência da Preparação
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#00223B]">
                  Editais, Vagas e Municípios Contemplados
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {turma.areasAtendidas.map((area, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8] flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-[#004B7C] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#0A131F]">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 6. SIMULADOS E AULÕES ESTRATÉGICOS */}
        {/* ============================================================ */}
        {(turma.simulados || turma.auloesEstrategicos) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {turma.simulados && (
              <div className="bg-[#00223B] text-white p-6 sm:p-8 rounded-3xl space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-[#FFBF00]">
                  <Target className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    Operação Desempenho
                  </span>
                </div>
                <h4 className="font-serif-heading text-xl font-bold text-white">
                  Simulados Ranqueados Oficiais
                </h4>
                <p className="text-xs sm:text-sm text-[#E1E5E8] leading-relaxed">
                  {turma.simulados.operacaoDesempenho}
                </p>
              </div>
            )}

            {turma.auloesEstrategicos && (
              <div className="bg-gradient-to-br from-[#004B7C] to-[#015E96] text-white p-6 sm:p-8 rounded-3xl space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-[#FFBF00]">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    Reforço Especial aos Domingos
                  </span>
                </div>
                <h4 className="font-serif-heading text-xl font-bold text-white">
                  Aulões Estratégicos e Central de Questões
                </h4>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-semibold">
                  {turma.auloesEstrategicos.encontros}
                </p>
                {turma.auloesEstrategicos.materias && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {turma.auloesEstrategicos.materias.map((m, i) => (
                      <span key={i} className="bg-white/15 px-2.5 py-1 rounded text-xs text-white">
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* ============================================================ */}
        {/* 7. VALORES E FORMAS DE PAGAMENTO */}
        {/* ============================================================ */}
        {turma.valoresInfo && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E1E5E8] shadow-xs">
            <TabelaValoresTurma
              valoresInfo={turma.valoresInfo}
              turmaOuConcursoNome={turma.titulo}
              showCta={false}
            />
          </section>
        )}

        {/* ============================================================ */}
        {/* 8. FORMULÁRIO RÁPIDO DE MATRÍCULA & CONTATO DIRETO */}
        {/* ============================================================ */}

                  <div className="bg-white p-8 flex justify-center">
                    <div className="w-full max-w-[600px]">
                      {/* RD STATION — OFICIAL — CONCURSOS PÚBLICOS */}
                      <RDStationForm
                        formId="cx-org_site_concursos-48acdf488beb07abae27"
                      />
                    </div>
                  </div>
        
        {/* Rodapé da Página: Voltar */}
        <div className="pt-6 border-t border-[#E1E5E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <button
            type="button"
            onClick={() => navigate('/concursos#nossas-turmas')}
            className="inline-flex items-center gap-2 text-[#004B7C] hover:text-[#00223B] font-bold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#004B7C]" />
            <span>Voltar para Nossas Turmas</span>
          </button>
          <span>Curso Progressão Caxias · Duque de Caxias, RJ</span>
        </div>
      </div>
    </div>
  );
};