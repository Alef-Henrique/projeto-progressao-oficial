import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Moon, 
  CheckCircle2, 
  Check, 
  AlertTriangle,
  BookOpen,
  Calculator,
  MessageCircle,
  ArrowLeft
} from 'lucide-react';
import { useRouter } from '../routing/RouterContext';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';
import { SEO } from '../common/SEO';

export const PetrobrasDetalhesView: React.FC = () => {
  const { navigate } = useRouter();
  const [paymentTab, setPaymentTab] = useState<'cartao' | 'avista' | 'boleto'>('cartao');

  const whatsappEnrollUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de garantir minha vaga e realizar minha matrícula na Turma Presencial Petrobras – Nível Médio do Curso Progressão Caxias.'
  )}`;

  const whatsappSecretaryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a secretaria sobre a Turma Presencial Petrobras – Nível Médio do Curso Progressão Caxias.'
  )}`;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#0A131F]">
      <SEO
        title="Petrobras – Nível Médio | Curso Progressão Caxias"
        description="Preparação presencial em Conhecimentos Básicos (Língua Portuguesa e Matemática) para as áreas de nível médio da Petrobras. Banca Cesgranrio confirmada. Aulas noturnas."
      />

      {/* ============================================================ */}
      {/* 1. HERO SECTION (DARK NAVY) */}
      {/* ============================================================ */}
      <section className="bg-[#081B30] text-white pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#0F2847]">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs & Mini-Nav Superior */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/70">
              <button 
                type="button"
                onClick={() => navigate('/concursos')}
                className="hover:text-[#FFBF00] transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>Concursos</span>
              </button>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">Petrobras – Nível Médio</span>
            </nav>

            <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-white/80">
              <button 
                type="button" 
                onClick={() => scrollToSection('o-concurso')}
                className="hover:text-[#FFBF00] transition-colors cursor-pointer"
              >
                O concurso
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('disciplinas')}
                className="hover:text-[#FFBF00] transition-colors cursor-pointer"
              >
                Disciplinas
              </button>
              <button 
                type="button" 
                onClick={() => scrollToSection('investimento')}
                className="hover:text-[#FFBF00] transition-colors cursor-pointer"
              >
                Investimento
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Coluna Esquerda: Chamada e Título */}
            <div className="lg:col-span-7 space-y-5">
              {/* Badges de Topo */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-block bg-[#FFBF00] text-[#081B30] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  TURMA PRESENCIAL · NOITE
                </span>
                <span className="inline-block bg-white/10 text-white text-[11px] font-medium px-3.5 py-1 rounded-full border border-white/20">
                  Banca Cesgranrio confirmada
                </span>
                <span className="inline-block bg-white/10 text-white text-[11px] font-medium px-3.5 py-1 rounded-full border border-white/20">
                  Edital previsto: dez/2026
                </span>
              </div>

              {/* Título Principal */}
              <div>
                <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] uppercase text-white">
                  PETROBRAS <br />
                  <span className="text-[#FFBF00]">NÍVEL MÉDIO</span>
                </h1>
              </div>

              {/* Descrição */}
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
                Preparação em Conhecimentos Básicos para as áreas de nível médio, com Língua Portuguesa e Matemática no estilo Cesgranrio. Comece antes do edital sair.
              </p>

              {/* Box de Destaque da Remuneração */}
              <div className="inline-flex flex-col bg-[#0B2544] border border-[#1A3D66] rounded-xl px-4 py-2.5 shadow-sm">
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider">
                  REMUNERAÇÃO
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#FFBF00] tracking-tight">
                  R$ 5.563,90
                </span>
              </div>

              {/* Botões de Ação do Hero */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={whatsappEnrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#FFBF00] hover:bg-[#E5AC00] text-[#081B30] font-black text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  Garantir minha vaga
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('disciplinas')}
                  className="inline-flex items-center justify-center border border-white/70 hover:border-white text-white hover:bg-white/10 font-bold text-sm px-6 py-3.5 rounded-xl transition-all active:scale-[0.98] cursor-pointer"
                >
                  Ver disciplinas
                </button>
              </div>
            </div>

            {/* Coluna Direita: Card Flutuante de Preço */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white text-[#0A131F] rounded-2xl p-6 sm:p-7 shadow-2xl w-full max-w-sm border border-slate-100">
                <div className="text-xs font-semibold text-slate-700">
                  Valor do curso: <span className="font-bold text-slate-900">R$ 649,90</span>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    PARCELE EM
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#081B30] tracking-tight leading-none mt-1">
                    10x R$ 58,49
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">
                    sem juros · ou R$ 584,91 à vista
                  </span>
                </div>

                <div className="border-t border-slate-200/80 my-4" />

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Duração</span>
                    <span className="font-bold text-[#081B30]">16/11/26 a 28/04/27</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Carga horária</span>
                    <span className="font-bold text-[#081B30]">60h · 20 encontros</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Turno</span>
                    <span className="font-bold text-[#081B30]">Noite</span>
                  </div>
                </div>

                <a
                  href={whatsappEnrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-[#081B30] hover:bg-[#00223B] text-white font-bold text-sm py-3.5 rounded-xl mt-5 shadow-sm hover:shadow-md transition-all active:scale-[0.98] text-center"
                >
                  Matricule-se
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. CARDS RESUMO DE CARACTERÍSTICAS (4 CARDS) */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Duração */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#004B7C] flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#004B7C]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                DURAÇÃO
              </span>
              <div className="text-sm font-bold text-[#081B30] mt-0.5 leading-snug">
                16 nov a 28 abr
              </div>
              <span className="text-[11px] text-slate-500 block">
                Turma 2026/2027
              </span>
            </div>
          </div>

          {/* Card 2: Carga Horária */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#004B7C] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#004B7C]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                CARGA HORÁRIA
              </span>
              <div className="text-sm font-bold text-[#081B30] mt-0.5 leading-snug">
                60 horas
              </div>
              <span className="text-[11px] text-slate-500 block">
                20 encontros, 2 a 3 vezes por semana
              </span>
            </div>
          </div>

          {/* Card 3: Turno */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#004B7C] flex items-center justify-center shrink-0">
              <Moon className="w-5 h-5 text-[#004B7C]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                TURNO
              </span>
              <div className="text-sm font-bold text-[#081B30] mt-0.5 leading-snug">
                Noite
              </div>
              <span className="text-[11px] text-slate-500 block">
                Das 18h45 às 21h45
              </span>
            </div>
          </div>

          {/* Card 4: Banca */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#004B7C] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#004B7C]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                BANCA
              </span>
              <div className="text-sm font-bold text-[#081B30] mt-0.5 leading-snug">
                Cesgranrio
              </div>
              <span className="text-[11px] text-slate-500 block">
                Já confirmada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. O CONCURSO: O QUE VOCÊ PRECISA SABER */}
      {/* ============================================================ */}
      <section id="o-concurso" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 scroll-mt-20">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            O CONCURSO
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#081B30] uppercase tracking-tight mt-1">
            O QUE VOCÊ PRECISA SABER
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Card 1: Remuneração */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              REMUNERAÇÃO
            </span>
            <div className="text-xl font-black text-[#081B30] mt-1 leading-snug">
              R$ 5.563,90
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Para os cargos de nível médio.
            </p>
          </div>

          {/* Card 2: Banca */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              BANCA
            </span>
            <div className="text-xl font-black text-[#081B30] mt-1 leading-snug">
              Cesgranrio
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Organizadora já confirmada.
            </p>
          </div>

          {/* Card 3: Edital */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              EDITAL
            </span>
            <div className="text-xl font-black text-[#081B30] mt-1 leading-snug">
              Dezembro de 2026
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Expectativa de publicação.
            </p>
          </div>

          {/* Card 4: Área Ofertada */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              ÁREA OFERTADA
            </span>
            <div className="text-xl font-black text-[#081B30] mt-1 leading-snug">
              Conhecimentos Básicos
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Para as áreas de nível médio.
            </p>
          </div>
        </div>

        {/* Alerta de Requisito para Posse */}
        <div className="mt-4 bg-amber-50/90 border border-amber-200 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-amber-950 flex items-start sm:items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
          <div>
            <strong className="font-bold text-amber-900">Requisito para a posse: </strong>
            <span>é preciso ter curso técnico de nível médio em uma das áreas exigidas no edital.</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CONTEÚDO PROGRAMÁTICO: CONHECIMENTOS BÁSICOS */}
      {/* ============================================================ */}
      <section id="disciplinas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 scroll-mt-20">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            CONTEÚDO PROGRAMÁTICO
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#081B30] uppercase tracking-tight mt-1">
            CONHECIMENTOS BÁSICOS
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Disciplinas definidas com base no último edital publicado, em dezembro de 2023, comuns a todas as áreas de nível médio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Card 1: Língua Portuguesa */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-[#0B2038] text-white px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFBF00] text-[#081B30] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-[#081B30]" />
              </div>
              <h3 className="font-bold text-sm sm:text-base tracking-wide uppercase">
                LÍNGUA PORTUGUESA
              </h3>
            </div>
            <div className="p-5 text-sm text-slate-700 leading-relaxed">
              Interpretação de texto, gramática e o estilo de cobrança da Cesgranrio.
            </div>
          </div>

          {/* Card 2: Matemática */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-[#0B2038] text-white px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFBF00] text-[#081B30] flex items-center justify-center shrink-0">
                <Calculator className="w-4 h-4 text-[#081B30]" />
              </div>
              <h3 className="font-bold text-sm sm:text-base tracking-wide uppercase">
                MATEMÁTICA
              </h3>
            </div>
            <div className="p-5 text-sm text-slate-700 leading-relaxed">
              Conteúdo do último edital, com resolução de questões no padrão da banca.
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. COMO FUNCIONAM AS AULAS */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="font-serif-heading text-lg sm:text-xl font-black text-[#081B30] uppercase tracking-tight mb-6">
            COMO FUNCIONAM AS AULAS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-[#081B30] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#081B30]">
                  2 a 3 encontros por semana
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Aulas presenciais à noite, pensadas para quem trabalha.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-[#081B30] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#081B30]">
                  18h45 às 21h45
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Com 15 minutos de intervalo.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-[#081B30] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#081B30]">
                  Material em PDF
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Cópia adquirida no dia da aula, a preço de cópia.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-[#081B30] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                4
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#081B30]">
                  Agenda flexível
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  A periodicidade pode variar por imprevistos ou agenda dos professores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. INVESTIMENTO: ESCOLHA COMO PAGAR */}
      {/* ============================================================ */}
      <section id="investimento" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 scroll-mt-20">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            INVESTIMENTO
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#081B30] uppercase tracking-tight mt-1">
            ESCOLHA COMO PAGAR
          </h2>
        </div>

        {/* Faixa Superior: Valor do Curso */}
        <div className="bg-white rounded-xl border border-slate-300 p-4 sm:p-5 flex items-center justify-between shadow-2xs mt-6">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              VALOR DO CURSO
            </span>
            <div className="font-bold text-sm sm:text-base text-[#081B30] mt-0.5">
              Pagamento no cartão de crédito
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-[#081B30] tracking-tight">
            R$ 649,90
          </div>
        </div>

        {/* Abas de Pagamento */}
        <div className="flex items-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => setPaymentTab('cartao')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              paymentTab === 'cartao'
                ? 'bg-[#081B30] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Cartão de crédito
          </button>
          <button
            type="button"
            onClick={() => setPaymentTab('avista')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              paymentTab === 'avista'
                ? 'bg-[#081B30] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            À vista
          </button>
          <button
            type="button"
            onClick={() => setPaymentTab('boleto')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              paymentTab === 'boleto'
                ? 'bg-[#081B30] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Boleto
          </button>
        </div>

        {/* Conteúdo da Forma de Pagamento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-stretch">
          {/* Card Esquerdo: Detalhes da Opção Selecionada */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 border-t-4 border-t-[#FFBF00] border-x border-b border-slate-200 shadow-sm flex flex-col justify-between">
            {paymentTab === 'cartao' && (
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  PARCELADO NO CARTÃO
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#081B30] tracking-tight mt-1">
                  10x R$ 58,49
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Em até 10 vezes sem juros.
                </p>
              </div>
            )}

            {paymentTab === 'avista' && (
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                  PAGAMENTO À VISTA (10% DE DESCONTO)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#081B30] tracking-tight mt-1">
                  R$ 584,91
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Economia imediata de R$ 64,99 via Pix, dinheiro ou transferência bancária.
                </p>
              </div>
            )}

            {paymentTab === 'boleto' && (
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  PARCELAMENTO NO BOLETO BANCÁRIO
                </span>
                <div className="text-2xl sm:text-3xl font-black text-[#081B30] tracking-tight mt-1">
                  Condição Facilitada
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Consulte opções especiais de parcelamento no boleto/carnê diretamente na secretaria.
                </p>
              </div>
            )}

            <div className="mt-8">
              <a
                href={whatsappEnrollUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FFBF00] hover:bg-[#E5AC00] text-[#081B30] font-black text-sm py-3.5 px-7 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                Quero me matricular
              </a>
            </div>
          </div>

          {/* Card Direito: O que está no curso */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-[#081B30] uppercase tracking-wide">
                O que está no curso
              </h4>

              <div className="space-y-3 pt-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                  <span>60 horas de aulas presenciais</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                  <span>Língua Portuguesa e Matemática</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                  <span>Foco na banca Cesgranrio</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Material didático em PDF conforme a necessidade do professor. A cópia é adquirida pelo aluno no dia da aula, a preço de cópia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. BANNER FINAL CTA */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-[#081B30] text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-[#0F2847]">
          <div>
            <h2 className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              EDITAL PREVISTO PARA DEZEMBRO. <br />
              <span className="text-[#FFBF00]">TURMA INICIA EM 16 DE NOVEMBRO.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={whatsappEnrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FFBF00] hover:bg-[#E5AC00] text-[#081B30] font-black text-sm px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Garantir minha vaga
            </a>
            <a
              href={whatsappSecretaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/80 hover:border-white text-white hover:bg-white/10 font-bold text-sm px-6 py-3.5 rounded-lg transition-all active:scale-[0.98]"
            >
              Falar com a secretaria
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};