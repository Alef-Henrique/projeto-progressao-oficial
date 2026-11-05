import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { useRouter } from '../routing/RouterContext';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';
import { SEO } from '../common/SEO';

type CargoTipo = 'medio-terra' | 'superior-terra' | 'administracao';

export const SemanaTranspetroDetalhesView: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCargo, setSelectedCargo] = useState<CargoTipo>('medio-terra');

  const createWhatsAppUrl = (mensagem: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  };

  const whatsappGeralUrl = createWhatsAppUrl(
    'Olá! Gostaria de garantir minha vaga na Semana Transpetro (Aulões de Reta Final) do Curso Progressão Caxias.'
  );

  const whatsappSecretariaUrl = createWhatsAppUrl(
    'Olá! Gostaria de tirar dúvidas com a secretaria sobre a Semana Transpetro do Curso Progressão Caxias.'
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6F9] text-[#0A131F]">
      <SEO
        title="Semana Transpetro – Aulões de Reta Final | Curso Progressão Caxias"
        description="Uma aula por noite na semana da prova da Transpetro, de 30/11 a 04/12, das 18h45 às 21h45. Revise as disciplinas do seu cargo depois do trabalho a partir de R$ 25,00."
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
              <span className="text-white font-medium">Semana Transpetro</span>
            </nav>

            <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-white/80">
              <button 
                type="button" 
                onClick={() => scrollToSection('cronograma')}
                className="hover:text-[#FFBF00] transition-colors cursor-pointer"
              >
                Cronograma
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
                  AULÕES PRESENCIAIS · NOITE
                </span>
                <span className="inline-block bg-white/10 text-white text-[11px] font-medium px-3.5 py-1 rounded-full border border-white/20">
                  Banca Cesgranrio
                </span>
                <span className="inline-block bg-white/10 text-white text-[11px] font-medium px-3.5 py-1 rounded-full border border-white/20">
                  Edital publicado
                </span>
              </div>

              {/* Título Principal */}
              <div>
                <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.08] uppercase text-white">
                  SEMANA <br />
                  <span className="text-[#FFBF00]">TRANSPETRO</span>
                </h1>
                <div className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-white/90 mt-2">
                  AULÕES DE RETA FINAL!
                </div>
              </div>

              {/* Descrição */}
              <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
                Uma aula por noite na semana da prova, de 30/11 a 04/12. Revise as disciplinas do seu cargo depois do trabalho, das 18h45 às 21h45.
              </p>

              {/* Botões de Ação do Hero */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={whatsappGeralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#FFBF00] hover:bg-[#E5AC00] text-[#081B30] font-black text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  Garantir minha vaga
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('cronograma')}
                  className="inline-flex items-center justify-center border border-white/70 hover:border-white text-white hover:bg-white/10 font-bold text-sm px-6 py-3.5 rounded-xl transition-all active:scale-[0.98] cursor-pointer"
                >
                  Ver cronograma
                </button>
              </div>
            </div>

            {/* Coluna Direita: Card Flutuante "DATAS IMPORTANTES" */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="bg-white text-[#0A131F] rounded-2xl p-6 sm:p-7 shadow-2xl w-full max-w-sm border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">
                  DATAS IMPORTANTES
                </span>

                <div className="space-y-3.5 text-xs">
                  {/* Data 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#081B30] flex flex-col items-center justify-center font-black shrink-0 leading-none">
                      <span className="text-xs">12</span>
                      <span className="text-[9px] uppercase text-slate-500">AGO</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#081B30]">Edital publicado</div>
                      <div className="text-[11px] text-slate-500">Banca Cesgranrio</div>
                    </div>
                  </div>

                  {/* Data 2 (Destaque) */}
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-11 rounded-xl bg-[#FFBF00] text-[#081B30] flex flex-col items-center justify-center font-black shrink-0 leading-none shadow-xs px-1 text-center">
                      <span className="text-[10px] font-black leading-tight">30/11</span>
                      <span className="text-[8px] uppercase font-bold tracking-tight">A 04/12</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#081B30]">Semana de aulões</div>
                      <div className="text-[11px] text-slate-500">Noites, das 18h45 às 21h45</div>
                    </div>
                  </div>

                  {/* Data 3 */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-[#081B30] flex flex-col items-center justify-center font-black shrink-0 leading-none">
                      <span className="text-xs">06</span>
                      <span className="text-[9px] uppercase text-slate-500">DEZ</span>
                    </div>
                    <div>
                      <div className="font-bold text-[#081B30]">Dia da prova</div>
                      <div className="text-[11px] text-slate-500">Domingo</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200/80 my-4" />

                <div className="space-y-1 text-right text-xs">
                  <div className="text-slate-500 font-medium">
                    Carga horária: <span className="font-bold text-[#081B30]">3h a 15h</span>
                  </div>
                  <div className="text-[#081B30] font-black text-sm">
                    Cada aula: R$ 25,00
                  </div>
                </div>

                <a
                  href={createWhatsAppUrl('Olá! Gostaria de escolher minhas aulas para a Semana Transpetro.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-[#081B30] hover:bg-[#00223B] text-white font-bold text-sm py-3.5 rounded-xl mt-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98] text-center"
                >
                  Escolher minhas aulas
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. CRONOGRAMA DA SEMANA */}
      {/* ============================================================ */}
      <section id="cronograma" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 scroll-mt-20">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            30 DE NOVEMBRO A 04 DE DEZEMBRO · 18H45 ÀS 21H45
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#081B30] uppercase tracking-tight mt-1">
            CRONOGRAMA DA SEMANA
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Selecione o seu cargo para ver quais aulas são para você.
          </p>
        </div>

        {/* Filtro de Cargos */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => setSelectedCargo('medio-terra')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCargo === 'medio-terra'
                ? 'bg-[#081B30] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Médio Terra
          </button>
          <button
            type="button"
            onClick={() => setSelectedCargo('superior-terra')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCargo === 'superior-terra'
                ? 'bg-[#081B30] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Superior Terra
          </button>
          <button
            type="button"
            onClick={() => setSelectedCargo('administracao')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCargo === 'administracao'
                ? 'bg-[#081B30] text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            Administração e Controle
          </button>
        </div>

        {/* Cronograma + Card Recomendado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
          {/* Lista de Aulas */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-sm">
            {/* Aula 1: Segunda 30/11 - Português */}
            <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-amber-50/70">
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <span className="font-black text-sm text-[#081B30] w-24">
                  SEG 30/11
                </span>
                <span className="font-bold text-sm text-[#081B30]">
                  Língua Portuguesa
                </span>
                <span className="bg-[#FFBF00] text-[#081B30] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  PARA VOCÊ
                </span>
              </div>
              <div className="text-xs text-slate-500 sm:text-right space-y-0.5">
                <div className="font-semibold text-slate-600">Segunda-feira · 18h45 às 21h45</div>
                <div>Comum a todos os cargos.</div>
              </div>
            </div>

            {/* Aula 2: Terça 01/12 - Administração */}
            <div className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              selectedCargo === 'administracao' ? 'bg-amber-50/70' : ''
            }`}>
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <span className="font-black text-sm text-[#081B30] w-24">
                  TER 01/12
                </span>
                <span className="font-bold text-sm text-[#081B30]">
                  Administração
                </span>
                {selectedCargo === 'administracao' && (
                  <span className="bg-[#FFBF00] text-[#081B30] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                    PARA VOCÊ
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 sm:text-right space-y-0.5">
                <div className="font-semibold text-slate-600">Terça-feira · 18h45 às 21h45</div>
                <div>Cargo de Administração e Controle (ênfase 1, edital 3).</div>
              </div>
            </div>

            {/* Aula 3: Quarta 02/12 - Matemática */}
            <div className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              selectedCargo === 'medio-terra' ? 'bg-amber-50/70' : ''
            }`}>
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <span className="font-black text-sm text-[#081B30] w-24">
                  QUA 02/12
                </span>
                <span className="font-bold text-sm text-[#081B30]">
                  Matemática
                </span>
                {selectedCargo === 'medio-terra' && (
                  <span className="bg-[#FFBF00] text-[#081B30] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                    PARA VOCÊ
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 sm:text-right space-y-0.5">
                <div className="font-semibold text-slate-600">Quarta-feira · 18h45 às 21h45</div>
                <div>Cargos de nível médio e médio técnico não embarcados (Médio Terra).</div>
              </div>
            </div>

            {/* Aula 4: Quarta 02/12 - Língua Inglesa */}
            <div className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              selectedCargo === 'superior-terra' ? 'bg-amber-50/70' : ''
            }`}>
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <span className="font-black text-sm text-[#081B30] w-24">
                  QUA 02/12
                </span>
                <span className="font-bold text-sm text-[#081B30]">
                  Língua Inglesa
                </span>
                {selectedCargo === 'superior-terra' && (
                  <span className="bg-[#FFBF00] text-[#081B30] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                    PARA VOCÊ
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 sm:text-right space-y-0.5">
                <div className="font-semibold text-slate-600">Quarta-feira · 18h45 às 21h45</div>
                <div>Cargos de nível superior não embarcados (Superior Terra).</div>
              </div>
            </div>

            {/* Aula 5: Quinta 03/12 - Contabilidade e Logística */}
            <div className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              selectedCargo === 'administracao' ? 'bg-amber-50/70' : ''
            }`}>
              <div className="flex items-center gap-3 shrink-0 flex-wrap">
                <span className="font-black text-sm text-[#081B30] w-24">
                  QUI 03/12
                </span>
                <span className="font-bold text-sm text-[#081B30]">
                  Contabilidade e Logística
                </span>
                {selectedCargo === 'administracao' && (
                  <span className="bg-[#FFBF00] text-[#081B30] text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                    PARA VOCÊ
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 sm:text-right space-y-0.5">
                <div className="font-semibold text-slate-600">Quinta-feira · 18h45 às 21h45</div>
                <div>Cargo de Administração e Controle (ênfase 1, edital 3).</div>
              </div>
            </div>
          </div>

          {/* Card Indicado (Direita) */}
          <div className="lg:col-span-4 bg-[#0B2038] text-white rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
            {selectedCargo === 'medio-terra' && (
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  INDICADO PARA MÉDIO TERRA
                </span>
                <h3 className="font-serif-heading text-xl font-black uppercase text-white mt-1">
                  COMBO 1 COM MATEMÁTICA
                </h3>
                <div className="text-3xl font-black text-[#FFBF00] mt-2">
                  R$ 55,00
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Língua Portuguesa (seg, 30/11) e Matemática (qua, 02/12), comuns aos cargos de nível médio e médio técnico não embarcados.
                </p>
              </div>
            )}

            {selectedCargo === 'superior-terra' && (
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  INDICADO PARA SUPERIOR TERRA
                </span>
                <h3 className="font-serif-heading text-xl font-black uppercase text-white mt-1">
                  COMBO 1 COM INGLÊS
                </h3>
                <div className="text-3xl font-black text-[#FFBF00] mt-2">
                  R$ 55,00
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Língua Portuguesa (seg, 30/11) e Língua Inglesa (qua, 02/12), comuns aos cargos de nível superior não embarcados.
                </p>
              </div>
            )}

            {selectedCargo === 'administracao' && (
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  INDICADO PARA ADMINISTRAÇÃO E CONTROLE
                </span>
                <h3 className="font-serif-heading text-xl font-black uppercase text-white mt-1">
                  COMBO 2 (4 AULAS)
                </h3>
                <div className="text-3xl font-black text-[#FFBF00] mt-2">
                  R$ 75,00 <span className="text-xs font-normal text-slate-400 line-through">R$ 100,00</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Língua Portuguesa, Matemática, Administração e Contabilidade e Logística.
                </p>
              </div>
            )}

            <div className="mt-6">
              <a
                href={createWhatsAppUrl(
                  `Olá! Gostaria de garantir o pacote recomendado para a Semana Transpetro (${selectedCargo === 'medio-terra' ? 'Combo 1 com Matemática' : selectedCargo === 'superior-terra' ? 'Combo 1 com Inglês' : 'Combo 2 - 4 Aulas'}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-[#FFBF00] hover:bg-[#E5AC00] text-[#081B30] font-black text-sm py-3 px-5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] text-center"
              >
                Quero esse combo
              </a>
            </div>
          </div>
        </div>

        {/* Nota Rodapé do Cronograma */}
        <p className="text-xs text-slate-500 mt-3">
          Matemática e Língua Inglesa acontecem na mesma noite (quarta, 02/12): escolha a que cai na sua prova.
        </p>
      </section>

      {/* ============================================================ */}
      {/* 3. INVESTIMENTO: MONTE A SUA SEMANA */}
      {/* ============================================================ */}
      <section id="investimento" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 scroll-mt-20">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
            INVESTIMENTO
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#081B30] uppercase tracking-tight mt-1">
            MONTE A SUA SEMANA
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 items-stretch">
          {/* Card 1: Aula Avulsa */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                AULA AVULSA
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#081B30] mt-1">
                R$ 25,00
              </div>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Escolha qualquer noite do cronograma, com 3 horas de aula.
              </p>
            </div>
            <div className="mt-6">
              <a
                href={createWhatsAppUrl('Olá! Gostaria de escolher uma aula avulsa para a Semana Transpetro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center border border-[#081B30] text-[#081B30] hover:bg-slate-50 font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all"
              >
                Escolher aula
              </a>
            </div>
          </div>

          {/* Card 2: Combo 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                COMBO 1
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#081B30] mt-1">
                R$ 55,00
              </div>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Língua Portuguesa + Matemática ou Língua Inglesa. Para Médio Terra e Superior Terra.
              </p>
            </div>
            <div className="mt-6">
              <a
                href={createWhatsAppUrl('Olá! Gostaria de garantir o Combo 1 na Semana Transpetro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center border border-[#081B30] text-[#081B30] hover:bg-slate-50 font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all"
              >
                Quero o Combo 1
              </a>
            </div>
          </div>

          {/* Card 3: Combo 2 (Destaque Navy) */}
          <div className="bg-[#0B2038] text-white rounded-2xl p-6 sm:p-7 border-2 border-[#0B2038] shadow-lg flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  COMBO 2
                </span>
                <span className="bg-[#FFBF00] text-[#081B30] font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  4 AULAS
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#FFBF00] mt-1">
                R$ 75,00
              </div>
              <div className="text-xs text-slate-300 mt-2 leading-relaxed">
                Língua Portuguesa, Matemática, Administração e Contabilidade e Logística. Para Administração e Controle. <br />
                <span className="line-through text-slate-400">R$ 100,00</span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href={createWhatsAppUrl('Olá! Gostaria de garantir o Combo 2 (4 aulas com desconto) na Semana Transpetro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center bg-[#FFBF00] hover:bg-[#E5AC00] text-[#081B30] font-black text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                Quero o Combo 2
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. BANNER FINAL CTA */}
      {/* ============================================================ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-[#081B30] text-white rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-[#0F2847]">
          <div>
            <h2 className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              A PROVA É NO DOMINGO, 06/12. <br />
              <span className="text-[#FFBF00]">CHEGUE AFIADO COM A SEMANA TRANSPETRO.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={whatsappGeralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FFBF00] hover:bg-[#E5AC00] text-[#081B30] font-black text-sm px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Garantir minha vaga
            </a>
            <a
              href={whatsappSecretariaUrl}
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
