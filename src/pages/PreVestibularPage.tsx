import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Star,
  MessageCircle,
  Check
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { WHATSAPP_NUMBER } from '../config/siteConfig';
import { PRODUTOS_ACELERADOR_VEST, AceleradorProduto } from '../data/aceleradorVestData';
import { AceleradorProdutoModal } from '../components/vestibular/AceleradorProdutoModal';
import { TurmasVestibularSection } from '../components/vestibular/TurmasVestibularSection';
import { TurmaDetalhesModal } from '../components/turmas/TurmaDetalhesModal';
import { TurmaDetalhes } from '../data/turmasData';
import { RDStationForm } from '../components/rdstation/RDStationForm';

export const PreVestibularPage: React.FC = () => {
  // Estado para o produto selecionado do Acelerador Vest (Modal de Detalhes)
  const [selectedProduto, setSelectedProduto] = useState<AceleradorProduto | null>(null);

  // Estado para a turma selecionada do Pré-Vestibular (Modal / Página de Detalhes)
  const [selectedTurma, setSelectedTurma] = useState<TurmaDetalhes | null>(null);

  // Estado para o carrossel de depoimentos reais
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Estado do formulário de pré-inscrição
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    preparacao: 'ENEM',
    horario: 'Manhã',
    modalidade: 'Presencial'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Depoimentos e dados reais de aprovados do Curso Progressão Caxias
  const approvedStudents = [
    {
      id: 1,
      name: 'Arthur Teodoro',
      course: 'Medicina • UFRJ e UERJ',
      image: '/assets/arthur-teodoro.webp',
      testimonial: 'A preparação no Progressão foi decisiva para eu alcançar a nota necessária em Medicina na UFRJ. O apoio individual na redação e os simulados no padrão exato do ENEM me deram a segurança que eu precisava para a prova.',
      badge: 'APROVADO ✓'
    }

  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? approvedStudents.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      (prev + 1) % approvedStudents.length
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.whatsapp.trim()) return;
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fecha modais com tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduto(null);
        setSelectedTurma(null);
      }
    };
    if (selectedProduto || selectedTurma) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProduto, selectedTurma]);

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC] text-[#0A131F] selection:bg-[#FFBF00] selection:text-[#00223B]">
      {/* 16. SEO */}
      <SEO
        title="Pré-Vestibular Progressão ENEM 2027 | Duque de Caxias"
        description="Prepare-se para o ENEM e vestibulares com o Pré-Vestibular Progressão. Conheça nossa metodologia, simulados, redação, tecnologia e faça sua pré-inscrição para 2027."
        canonicalPath="/cursos/pre-vestibular"
      />

      <Breadcrumbs
        items={[
          { label: 'Cursos' },
          { label: 'Pré-Vestibular & ENEM' }
        ]}
      />

      {/* ============================================================ */}
      {/* 2. HERO / BANNER PRINCIPAL DE ALTO IMPACTO */}
      {/* ============================================================ */}
      <section className="relative bg-[#00223B] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#015E96]/30">
        {/* Textura sutil e elegante de listras diagonais suaves e escuras oficial do Progressão */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.07) 0px, rgba(0, 0, 0, 0.07) 18px, transparent 18px, transparent 36px)'
          }}
        />

        {/* Brilhos atmosféricos suaves */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Lado Esquerdo: Mensagem e CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Destaque Superior */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0289C6]/20 text-[#38BDF8] text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-6 border border-[#0289C6]/40 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FFBF00]" />
                <span>INSCRIÇÕES ABERTAS — PRÉ-VEST PROGRESSÃO 2027</span>
              </div>

              {/* H1 Principal Único */}
              <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08] mb-6">
                Pré-Vestibular <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0F2FE] to-[#38BDF8]">
                  Progressão ENEM
                </span>
              </h1>

              {/* Texto de Apoio */}
              <p className="text-base sm:text-xl text-[#E1E5E8]/90 max-w-2xl leading-relaxed mb-8 font-normal">
                Estude no Pré-Vestibular Progressão, em Duque de Caxias, e prepare-se para conquistar sua vaga nas melhores universidades do Brasil.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scrollToSection('pre-inscricao')}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-sm sm:text-base px-8 py-4 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>GARANTIR MINHA MATRÍCULA</span>
                  <ArrowRight className="w-5 h-5 text-[#00223B]" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('turmas-vestibular')}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm sm:text-base px-6 py-4 rounded-xl uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>CONHECER O PRÉ-VEST</span>
                </button>
              </div>

              {/* Indicação sutil abaixo dos CTAs */}
              <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Turmas 2027 • Duque de Caxias</span>
              </div>
            </div>

            {/* Lado Direito: Composição Visual com Estudantes */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Moldura da Imagem no Formato Quadrado */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#00223B] aspect-square">
                  <img
                    src="/assets/vestibular.webp"
                    alt="Estudantes jovens estudando e comemorando aprovação no ENEM"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. BARRA DE PROVA SOCIAL: FAIXA HORIZONTAL DE AUTORIDADE */}
      {/* ============================================================ */}
      <section className="bg-white border-b border-[#E1E5E8] py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E1E5E8]">
            <div className="flex flex-col items-center text-center px-4">
              <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider mb-1">Aprovações</span>
              <span className="text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight font-serif-heading">
                Milhares
              </span>
              <span className="text-xs text-[#64748B] mt-1">UFRJ, UFF, UERJ e Federais</span>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider mb-1">Redações</span>
              <span className="text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight font-serif-heading">
                Nota 1000 & 900+
              </span>
              <span className="text-xs text-[#64748B] mt-1">Correções por competência INEP</span>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider mb-1">Tradição Comprovada</span>
              <span className="text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight font-serif-heading">
                31+ Anos
              </span>
              <span className="text-xs text-[#64748B] mt-1">Preparando alunos em Caxias</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3.1 SEÇÃO OFICIAL: TURMA PRÉ-VESTIBULAR 2027 */}
      {/* ============================================================ */}
      <TurmasVestibularSection onSelectTurma={setSelectedTurma} />

      {/* ============================================================ */}
      {/* 4. SEÇÃO — APROVADOS (CARROSSEL DE HISTÓRIAS REAIS) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
            Mural de Conquistas
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
            Seja você também um dos nossos aprovados.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] italic">
            "Histórias reais de alunos que transformaram preparação em resultado."
          </p>
        </div>

        {/* Carrossel Interativo com Controles de Navegação */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E1E5E8] shadow-lg flex flex-col md:flex-row items-center gap-8 transition-all">
            <div className="relative shrink-0">
              <img
                src={approvedStudents[currentTestimonialIndex].image}
                alt={approvedStudents[currentTestimonialIndex].name}
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-[#0289C6] shadow-md"
              />
              <span className="absolute -bottom-2 -right-2 bg-[#10B981] text-white text-[11px] font-black px-2.5 py-0.5 rounded-md shadow-sm uppercase tracking-wider">
                {approvedStudents[currentTestimonialIndex].badge}
              </span>
            </div>

            <div className="flex flex-col text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#FFBF00] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#FFBF00]" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg text-[#0A131F] font-medium leading-relaxed mb-6 italic">
                "{approvedStudents[currentTestimonialIndex].testimonial}"
              </blockquote>

              <div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-black text-[#00223B]">
                  {approvedStudents[currentTestimonialIndex].name}
                </h3>
                <span className="text-sm font-bold text-[#0289C6] block mt-0.5">
                  {approvedStudents[currentTestimonialIndex].course}
                </span>
              </div>
            </div>
          </div>

          {/* Botões do Carrossel */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={handlePrevTestimonial}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#F1F5F9] text-[#00223B] border border-[#CBD5E1] shadow-sm flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold text-[#64748B]">
              {currentTestimonialIndex + 1} de {approvedStudents.length}
            </span>

            <button
              type="button"
              onClick={handleNextTestimonial}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#F1F5F9] text-[#00223B] border border-[#CBD5E1] shadow-sm flex items-center justify-center transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. SEÇÃO — PRODUTOS DO ACELERADOR VEST */}
      {/* ============================================================ */}
      <section id="diferenciais" className="py-16 sm:py-24 bg-white text-[#0A131F] px-4 sm:px-6 lg:px-8 border-y border-[#E1E5E8]">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho da Seção */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
              Ecossistema Completo de Preparação
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase leading-snug mb-4">
              Produtos do Acelerador Vest
            </h2>
            <p className="text-sm sm:text-base text-[#0A131F]/70 max-w-3xl mx-auto leading-relaxed">
              Recursos, plataformas e simulados que potencializam a preparação para o ENEM e ajudam o aluno a estudar de forma mais personalizada e estratégica.
            </p>
          </div>

          {/* Grid de Produtos (Desktop: 3 colunas, Tablet: 2 colunas, Mobile: 1 coluna) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUTOS_ACELERADOR_VEST.map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1 text-[#0A131F]"
              >
                {/* Topo / Header Visual do Card */}
                <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-5 sm:p-6 relative overflow-hidden shrink-0">
                  <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0px, rgba(255, 255, 255, 0.1) 16px, transparent 16px, transparent 32px)'
                    }}
                  />

                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block bg-[#0289C6]/20 border border-[#0289C6]/40 text-[#38BDF8] font-bold text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                        {produto.categoria}
                      </span>
                      {produto.badge && (
                        <span className="inline-block bg-[#FFBF00]/20 border border-[#FFBF00]/30 text-[#FFBF00] font-bold text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {produto.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-heading text-lg sm:text-xl font-black text-white uppercase leading-snug line-clamp-2 min-h-[3rem]">
                      {produto.titulo}
                    </h3>

                    <p className="text-xs text-[#E1E5E8]/80 line-clamp-1">
                      {produto.descricaoCurta}
                    </p>
                  </div>
                </div>

                {/* Conteúdo / Principais Benefícios do Card */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-5 bg-white">
                  <div className="space-y-3">
                    <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8]">
                      <span className="text-[10px] font-bold text-[#004B7C] uppercase tracking-wider block mb-1">
                        Principais Benefícios
                      </span>
                      <p className="text-xs text-[#334155] leading-relaxed line-clamp-3">
                        {produto.resumo}
                      </p>
                    </div>
                  </div>

                  {/* Botão Ver Detalhes */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProduto(produto)}
                      aria-label={`Ver detalhes do ${produto.titulo}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-4 h-4 text-[#FFBF00] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CTA FINAL COM IMPACTO */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#001D33] text-white px-4 sm:px-6 lg:px-8 border-t border-[#015E96]/30 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-bold text-[#FFBF00] uppercase tracking-wider block mb-3">
            Inscrições para Turmas 2027
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Essa é a sua oportunidade de aprovação.
          </h2>
          <p className="text-base sm:text-xl text-[#E1E5E8]/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Faça sua pré-inscrição agora para as nossas turmas de 2027.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('pre-inscricao')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-base px-8 py-4 rounded-xl uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>FAZER MINHA PRÉ-INSCRIÇÃO</span>
              <ArrowRight className="w-5 h-5 text-[#00223B]" />
            </button>
          </div>

          <p className="mt-4 text-xs text-[#94A3B8]">
            Turmas com vagas limitadas para garantir o acompanhamento de qualidade.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 13. FORMULÁRIO DE PRÉ-INSCRIÇÃO (ETAPA DE MATRÍCULA) */}
      {/* ============================================================ */}
      <section id="pre-inscricao" className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
              Garanta Sua Condição Especial
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
              A turma ideal para você.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B]">
              Estude onde e quando for melhor para você. Escolha entre diferentes horários e locais disponíveis.
            </p>
          </div>
          <div className="bg-white p-8 flex justify-center">
            <div className="w-full max-w-[600px]">
              {/* RD STATION — PROVISÓRIO */}
              <RDStationForm
                formId="caxias_lp_geral-6b17fb580118e7e46ef8"
              />
            </div>
          </div>


        </div>
      </section>

      {/* ============================================================ */}
      {/* MODAL / PAINEL SOBREPOSTO DE DETALHES DO PRODUTO */}
      {/* ============================================================ */}
      {selectedProduto && (
        <AceleradorProdutoModal
          produto={selectedProduto}
          onClose={() => setSelectedProduto(null)}
        />
      )}

      {/* ============================================================ */}
      {/* MODAL / PAINEL SOBREPOSTO DE DETALHES DA TURMA */}
      {/* ============================================================ */}
      {selectedTurma && (
        <TurmaDetalhesModal
          turma={selectedTurma}
          onClose={() => setSelectedTurma(null)}
        />
      )}
    </div>
  );
};

export default PreVestibularPage;
