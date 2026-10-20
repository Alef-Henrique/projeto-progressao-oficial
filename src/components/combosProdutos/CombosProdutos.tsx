import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  Layers,
  Award,
  Zap,
  FileText,
  Calendar,
  Compass,
  ShieldCheck,
  Check,
  BookOpen,
  Target,
  TrendingUp,
  GraduationCap

} from 'lucide-react';
import { COMBOS_PRODUTOS_DATA } from './data';

export const CombosProdutos: React.FC = () => {
  const { titulo, subtitulo, textoIntrodutorio, combos, produtos, opa } = COMBOS_PRODUTOS_DATA;

  return (
    <section id="combos-e-produtos" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E1E5E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================================================ */}
        {/* 1. INTRODUÇÃO DA SEÇÃO */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#0289C6]" />
            <span>{subtitulo}</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#00223B] tracking-tight uppercase mb-4">
            {titulo}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#0A131F]/80 leading-relaxed font-medium">
            {textoIntrodutorio}
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. ÁREA DE COMBOS */}
        {/* ============================================================ */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-8 h-8 rounded-xl bg-[#004B7C] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Layers className="w-4 h-4 text-[#FFBF00]" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider block">
                Pacotes Integrados
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                Combos
              </h3>
            </div>
          </div>

          {/* Grid de 3 Cards de Combos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {combos.map((combo) => (
              <div
                key={combo.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${combo.destaque
                    ? 'bg-gradient-to-b from-[#00223B] to-[#00385F] text-white border-2 border-[#FFBF00] shadow-xl md:-translate-y-1'
                    : 'bg-white text-[#0A131F] border border-[#E1E5E8] shadow-sm hover:shadow-md'
                  }`}
              >
                {/* Badge Superior */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${combo.destaque
                        ? 'bg-[#FFBF00] text-[#00223B]'
                        : 'bg-[#004B7C]/10 text-[#004B7C]'
                      }`}>
                      {combo.tag}
                    </span>

                    {combo.destaque && (
                      <span className="text-[11px] font-bold text-[#FFBF00] uppercase tracking-wider">
                        Mais Completo
                      </span>
                    )}
                  </div>

                  {/* Título do Combo */}
                  <h4 className={`font-serif-heading text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 ${combo.destaque ? 'text-white' : 'text-[#00223B]'
                    }`}>
                    {combo.titulo}
                  </h4>

                  {/* Descrição do Combo */}
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-medium ${combo.destaque ? 'text-[#E1E5E8]/90' : 'text-[#64748B]'
                    }`}>
                    {combo.texto}
                  </p>

                  {/* Divisor */}
                  <div className={`h-px w-full mb-6 ${combo.destaque ? 'bg-white/15' : 'bg-[#E1E5E8]'}`} />

                  {/* Lista de Itens do Combo */}
                  <div className="space-y-3 mb-6">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider block ${combo.destaque ? 'text-[#FFBF00]' : 'text-[#004B7C]'
                      }`}>
                      O que está incluso:
                    </span>
                    <ul className="space-y-2.5">
                      {combo.itens.map((item, idx) => {
                        const isBonus = item.startsWith('Bônus:');
                        return (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${combo.destaque
                                ? (isBonus ? 'text-[#FFBF00]' : 'text-[#25D366]')
                                : 'text-emerald-600'
                              }`} />
                            <span className={`font-semibold leading-relaxed ${combo.destaque
                                ? (isBonus ? 'text-[#FFBF00] font-bold' : 'text-white')
                                : (isBonus ? 'text-[#B45309] font-bold' : 'text-[#00223B]')
                              }`}>
                              {item}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Rodapé e CTA do combo */}
                <div className="mt-auto pt-6 space-y-4">
                  <a
                    href="#inscricao"
                    onClick={(e) => {
                      e.preventDefault();
                      const formEl = document.getElementById('inscricao');
                      if (formEl) {
                        formEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.99] ${combo.destaque
                        ? 'bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B]'
                        : 'bg-[#004B7C] hover:bg-[#00223B] text-white'
                      }`}
                  >
                    QUERO ME MATRICULAR
                  </a>

                  <div className={`pt-3 border-t text-[11px] font-semibold text-center ${combo.destaque ? 'border-white/10 text-[#E1E5E8]/70' : 'border-[#E1E5E8] text-[#64748B]'
                    }`}>
                    Preparação Presencial Progressão
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. ÁREA DE PRODUTOS INDIVIDUAIS */}
        {/* ============================================================ */}
        <div className="mb-20 pt-10 border-t border-[#E1E5E8]">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-xl bg-[#0289C6] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0289C6] uppercase tracking-wider block">
                Recursos Individuais
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-black text-[#00223B] uppercase tracking-tight">
                Produtos
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#64748B] mb-8 font-medium max-w-3xl">
            Soluções estratégicas que compõem a metodologia Progressão para potencializar o aprendizado em cada etapa da jornada.
          </p>

          {/* Grid de 4 Produtos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-3xl border border-[#E1E5E8] p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Badge e Cabeçalho */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-black uppercase tracking-wider">
                      {produto.badge}
                    </span>
                  </div>

                  <h4 className="font-serif-heading text-xl sm:text-2xl font-black text-[#00223B] uppercase tracking-tight mb-1">
                    {produto.titulo}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#0289C6] font-bold mb-6">
                    {produto.subtitulo}
                  </p>

                  <div className="h-px w-full bg-[#E1E5E8] mb-6" />

                  {/* Lista de Itens do Produto */}
                  <ul className="space-y-3.5 mb-6">
                    {produto.itens.map((item, idx) => {
                      const colonIdx = item.indexOf(':');
                      const hasPrefix = colonIdx !== -1 && colonIdx < 35;

                      return (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#004B7C] shrink-0 mt-0.5" />
                          <p className="text-[#0A131F]/90 leading-relaxed font-medium">
                            {hasPrefix ? (
                              <>
                                <strong className="font-bold text-[#00223B]">
                                  {item.substring(0, colonIdx + 1)}
                                </strong>{' '}
                                <span>{item.substring(colonIdx + 1).trim()}</span>
                              </>
                            ) : (
                              item
                            )}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Rodapé e CTA do produto */}
                <div className="mt-auto pt-6 space-y-4">
                  <a
                    href="#inscricao"
                    onClick={(e) => {
                      e.preventDefault();
                      const formEl = document.getElementById('inscricao');
                      if (formEl) {
                        formEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#004B7C] hover:bg-[#00223B] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-sm hover:shadow-md active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    QUERO ME MATRICULAR
                  </a>

                  <div className="pt-3 border-t border-[#E1E5E8]/80 text-[11px] font-bold text-[#64748B] uppercase tracking-wider text-center">
                    Curso Progressão · Excelência Pedagógica
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4. ÁREA DE OPA — ORIENTAÇÃO PEDAGÓGICA AVANÇADA */}
        {/* ============================================================ */}
        <div id="secao-opa" className="pt-10 border-t border-[#E1E5E8] scroll-mt-24 sm:scroll-mt-28">
          <div className="bg-gradient-to-br from-[#00223B] via-[#002b49] to-[#001D33] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#015E96]/50 shadow-xl relative overflow-hidden">
            {/* Elemento Decorativo */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[#0289C6]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              {/* Badge e Título */}
              <span className="text-xs sm:text-sm font-extrabold text-[#FFBF00] uppercase tracking-wider block mb-2">
                DIFERENCIAL EXCLUSIVO
              </span>

              <h3 className="font-serif-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-1">
                OPA
              </h3>

              <h4 className="text-lg sm:text-2xl font-bold text-white mb-1">
                Orientação Pedagógica Avançada
              </h4>

              <p className="text-sm sm:text-base text-[#FFBF00] font-bold mb-4">
                Mais direcionamento, mais resultados!
              </p>

              <p className="text-xs sm:text-sm lg:text-base text-[#E1E5E8]/90 leading-relaxed font-medium mb-6">
                {opa.texto}
              </p>

              {/* Divisor sutil */}
              <div className="h-px w-full bg-white/20 mb-6" />

              {/* 4 Pilares da OPA da imagem */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex flex-col gap-2">
                  <BookOpen className="w-5 h-5 text-[#FFBF00]" />
                  <span className="text-sm font-bold text-white">Organização dos estudos</span>
                  <span className="text-xs text-[#E1E5E8]/80 leading-relaxed">Cronograma personalizado e metodologia para otimizar seu tempo.</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex flex-col gap-2">
                  <Target className="w-5 h-5 text-[#FFBF00]" />
                  <span className="text-sm font-bold text-white">Foco e estratégia</span>
                  <span className="text-xs text-[#E1E5E8]/80 leading-relaxed">Direcionamento preciso nos tópicos de maior peso da banca examinadora.</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex flex-col gap-2">
                  <TrendingUp className="w-5 h-5 text-[#FFBF00]" />
                  <span className="text-sm font-bold text-white">Acompanhamento da evolução</span>
                  <span className="text-xs text-[#E1E5E8]/80 leading-relaxed">Métricas de rendimento, análise de erros e evolução contínua.</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex flex-col gap-2">
                  <GraduationCap className="w-5 h-5 text-[#FFBF00]" />
                  <span className="text-sm font-bold text-white">Direcionamento pedagógico</span>
                  <span className="text-xs text-[#E1E5E8]/80 leading-relaxed">Consultoria individualizada com professores especialistas para sua posse.</span>
                </div>
              </div>

              {/* Botão CTA da OPA */}
              <div className="pt-2">
                <a
                  href="#inscricao"
                  onClick={(e) => {
                    e.preventDefault();
                    const formEl = document.getElementById('inscricao');
                    if (formEl) {
                      formEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-[0.99] transition-all duration-200 cursor-pointer"
                >
                  QUERO ME MATRICULAR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
