import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Moon, 
  FileText, 
  Check, 
  Shield, 
  MessageCircle, 
  ArrowLeft,
  Sparkles,
  CreditCard,
  Banknote,
  Receipt
} from 'lucide-react';
import { useRouter } from '../routing/RouterContext';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';
import { SEO } from '../common/SEO';

export const GuardasMunicipaisDetalhesView: React.FC = () => {
  const { navigate } = useRouter();
  const [paymentTab, setPaymentTab] = useState<'cartao' | 'avista' | 'boleto'>('cartao');

  const whatsappEnrollUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de garantir minha vaga e realizar minha matrícula na Turma Presencial de Guardas Municipais RJ do Curso Progressão Caxias.'
  )}`;

  const whatsappSecretaryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a secretaria sobre a Turma Presencial de Guardas Municipais RJ do Curso Progressão Caxias.'
  )}`;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cidades = [
    'São Gonçalo',
    'Queimados',
    'Maricá',
    'Petrópolis',
    'Cordeiro',
    'Saquarema',
    'Resende'
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#0A131F]">
      <SEO
        title="Guardas Municipais do Estado do RJ | Curso Progressão Caxias"
        description="Preparação presencial completa para os concursos de Guardas Municipais do RJ: São Gonçalo, Queimados, Maricá, Petrópolis, Cordeiro, Saquarema e Resende. Aulas noturnas com material incluso."
      />

      {/* ============================================================ */}
      {/* 1. HERO SECTION (DARK NAVY) */}
      {/* ============================================================ */}
      <section className="bg-[#081B30] text-white pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#0F2847]">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/70">
            <button 
              type="button"
              onClick={() => navigate('/concursos')}
              className="hover:text-[#FFBF00] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Concursos</span>
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Guardas Municipais RJ</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Coluna Esquerda: Chamada e Título */}
            <div className="lg:col-span-7 space-y-5">
              {/* Badges de Topo */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-block bg-[#FFBF00] text-[#081B30] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  TURMA PRESENCIAL
                </span>
                <span className="inline-block bg-white/10 text-white text-[11px] font-medium px-3.5 py-1 rounded-full border border-white/20">
                  Início 16 de novembro
                </span>
              </div>

              {/* Título Principal */}
              <div>
                <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] uppercase text-white">
                  GUARDAS MUNICIPAIS <br />
                  <span className="text-[#FFBF00]">DO ESTADO DO RJ</span>
                </h1>
              </div>

              {/* Descrição */}
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
                Preparação completa para os próximos editais de São Gonçalo, Queimados, Maricá, Petrópolis, Cordeiro, Saquarema e Resende, com aulas presenciais à noite e material incluso.
              </p>

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
                  Curso sem combos: <span className="font-bold text-slate-900">R$ 1.790,00</span>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    PARCELE EM
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#081B30] tracking-tight leading-none mt-1">
                    10x R$ 161,10
                  </div>
                  <span className="text-xs text-slate-500 mt-1 block">
                    sem juros no cartão · ou R$ 1.611,00 à vista
                  </span>
                </div>

                <div className="border-t border-slate-200/80 my-4" />

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Duração</span>
                    <span className="font-bold text-[#081B30]">16/11/26 a 30/05/27</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Carga horária</span>
                    <span className="font-bold text-[#081B30]">180h · 60 encontros</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Turno</span>
                    <span className="font-bold text-[#081B30]">Noturno</span>
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
                16 nov a 30 mai
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
                180 horas
              </div>
              <span className="text-[11px] text-slate-500 block">
                60 encontros, 3 vezes por semana
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
                Noturno
              </div>
              <span className="text-[11px] text-slate-500 block">
                Das 18h45 às 21h45
              </span>
            </div>
          </div>

          {/* Card 4: Material */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#004B7C] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-[#004B7C]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                MATERIAL
              </span>
              <div className="text-sm font-bold text-[#081B30] mt-0.5 leading-snug">
                PDF incluso
              </div>
              <span className="text-[11px] text-slate-500 block">
                Para uso em sala de aula
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. DISCIPLINAS DO CURSO */}
      {/* ============================================================ */}
      <section id="disciplinas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 scroll-mt-20">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            CONTEÚDO PROGRAMÁTICO
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#081B30] uppercase tracking-tight mt-1">
            DISCIPLINAS DO CURSO
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Grade montada a partir dos últimos editais das guardas municipais do estado do Rio de Janeiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Card 1: Núcleo Básico */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-[#0B2038] text-white px-5 py-4 flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base tracking-wide uppercase">
                NÚCLEO BÁSICO
              </h3>
              <span className="bg-[#FFBF00] text-[#081B30] text-[11px] font-black px-3 py-0.5 rounded-full">
                3 matérias
              </span>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>Língua Portuguesa</span>
              </div>
              <div className="border-t border-slate-100" />
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>Raciocínio Lógico-Matemático</span>
              </div>
              <div className="border-t border-slate-100" />
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>Informática</span>
              </div>
            </div>
          </div>

          {/* Card 2: Núcleo Jurídico */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-[#0B2038] text-white px-5 py-4 flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base tracking-wide uppercase">
                NÚCLEO JURÍDICO
              </h3>
              <span className="bg-[#FFBF00] text-[#081B30] text-[11px] font-black px-3 py-0.5 rounded-full">
                3 matérias
              </span>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>Direito Constitucional</span>
              </div>
              <div className="border-t border-slate-100" />
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>Direito Penal</span>
              </div>
              <div className="border-t border-slate-100" />
              <div>
                <div className="flex items-center gap-3 text-sm text-slate-800 font-medium mb-3">
                  <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                  <span>Leis Extravagantes</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-7">
                  <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md">
                    Estatuto Geral das Guardas Municipais
                  </span>
                  <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md">
                    ECA
                  </span>
                  <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md">
                    Estatuto do Idoso
                  </span>
                  <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md">
                    Lei Maria da Penha
                  </span>
                  <span className="inline-block bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-md">
                    Abuso de Autoridade (Lei 13.869/2019)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. COMO FUNCIONAM AS AULAS + TURBINE SUA PREPARAÇÃO */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card Esquerda: Como Funcionam as Aulas */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <h3 className="font-serif-heading text-lg sm:text-xl font-black text-[#081B30] uppercase tracking-tight mb-6">
              COMO FUNCIONAM AS AULAS
            </h3>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-[#081B30] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#081B30]">
                    3 encontros por semana
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Aulas presenciais no turno da noite, pensadas para quem trabalha.
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
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
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
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Apostila de uso em sala inclusa no curso.
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
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    A periodicidade pode variar por imprevistos ou agenda dos professores.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Direita: Turbine sua Preparação (Combos) */}
          <div className="lg:col-span-6 bg-[#0B2038] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block bg-[#FFBF00] text-[#081B30] font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                COMBOS
              </span>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                TURBINE SUA PREPARAÇÃO
              </h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Complemente o curso com os combos de estudo, adquiridos separadamente, para acelerar a revisão e a resolução de questões.
              </p>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => navigate('/concursos#combos-produtos')}
                className="inline-flex items-center justify-center border border-[#FFBF00] text-[#FFBF00] hover:bg-[#FFBF00] hover:text-[#081B30] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-all cursor-pointer"
              >
                Conhecer os combos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. PRÓXIMOS EDITAIS: UM CURSO, SETE GUARDAS */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            PRÓXIMOS EDITAIS
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#081B30] uppercase tracking-tight mt-1">
            UM CURSO, SETE GUARDAS
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Municípios com expectativa de edital entre o fim de 2026 e o início de 2027.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8">
          {cidades.slice(0, 6).map((cidade) => (
            <div
              key={cidade}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-col items-center justify-center text-center gap-2.5 hover:border-[#004B7C]/40 hover:shadow-xs transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#004B7C]">
                <Shield className="w-4 h-4 text-[#004B7C]" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#081B30]">
                {cidade}
              </span>
            </div>
          ))}
        </div>

        {/* Linha com a 7ª cidade (Resende) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-3 sm:mt-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs flex flex-col items-center justify-center text-center gap-2.5 hover:border-[#004B7C]/40 hover:shadow-xs transition-all">
            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#004B7C]">
              <Shield className="w-4 h-4 text-[#004B7C]" />
            </div>
            <span className="font-bold text-xs sm:text-sm text-[#081B30]">
              {cidades[6]}
            </span>
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
              Curso sem combos
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-[#081B30] tracking-tight">
            R$ 1.790,00
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
                  10x R$ 161,10
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Sem juros. Total de R$ 1.611,00.
                </p>
              </div>
            )}

            {paymentTab === 'avista' && (
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                  PAGAMENTO À VISTA (10% DE DESCONTO)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-[#081B30] tracking-tight mt-1">
                  R$ 1.611,00
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Economia imediata de R$ 179,00 via Pix, transferência bancária ou em espécie na secretaria.
                </p>
              </div>
            )}

            {paymentTab === 'boleto' && (
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  PARCELAMENTO NO BOLETO BANCÁRIO
                </span>
                <div className="text-2xl sm:text-3xl font-black text-[#081B30] tracking-tight mt-1">
                  Sinal de R$ 99,00 + 7x R$ 241,57
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Parcelamento flexível no carnê/boleto sem comprometer o limite do seu cartão de crédito.
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

          {/* Card Direito: Está Incluso */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-center space-y-3.5">
            <h4 className="font-bold text-xs sm:text-sm text-[#081B30] uppercase tracking-wide">
              Está incluso
            </h4>

            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>180 horas de aulas presenciais</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>Material didático em PDF</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>Núcleos Básico e Jurídico completos</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-700">
                <Check className="w-4 h-4 text-amber-600 shrink-0" strokeWidth={2.5} />
                <span>Foco nos 7 editais previstos</span>
              </div>
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
              COMECE ANTES DO EDITAL SAIR. <br />
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
