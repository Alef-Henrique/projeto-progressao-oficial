import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  CheckCircle2, 
  Star, 
  Target, 
  Clock, 
  Award, 
  BookOpen, 
  X, 
  ArrowRight, 
  ArrowLeft, 
  DollarSign, 
  Calendar, 
  GraduationCap, 
  Users, 
  FileText, 
  ChevronRight, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  Compass,
  MessageCircle,
  HelpCircle,
  Building2
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { Link } from '../components/routing/RouterContext';
import { RDStationForm } from '../components/rdstation/RDStationForm';
import { 
  MILITARY_PREPARATORIES, 
  CAREER_DIFFERENTIALS, 
  MilitaryPreparatory 
} from '../data/militaryData';
import { COURSES_DATA } from '../data/siteData';
import { WHATSAPP_NUMBER } from '../config/siteConfig';

export const PreparatorioMilitarPage: React.FC = () => {
  const [selectedPreparatory, setSelectedPreparatory] = useState<MilitaryPreparatory | null>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPreparatory(null);
      }
    };

    if (selectedPreparatory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPreparatory]);

  // Rola para o topo do modal ao abrir
  useEffect(() => {
    if (selectedPreparatory && modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [selectedPreparatory]);

  const courseFaqs = COURSES_DATA['preparatorio-militar']?.faqs || [
    {
      question: 'A partir de qual idade o aluno pode iniciar o preparatório militar?',
      answer: 'Para as turmas de Colégio Naval e EPCAr, recebemos alunos a partir do 9º ano do Ensino Fundamental (14 a 15 anos). Para concursos de nível médio como ESA, EEAr e EsPCEx, alunos a partir de 16/17 anos já podem iniciar a preparação direcionada.'
    },
    {
      question: 'O curso oferece simulados nos moldes das bancas militares?',
      answer: 'Sim! Os simulados do Progressão reproduzem com rigor a folha de respostas oficial, pontuação com nota de corte, tempo estrito e estilo real de questões de cada concurso militar (Exército, Marinha e Aeronáutica).'
    },
    {
      question: 'Há orientação para as demais etapas do concurso (TAF e inspeção médica)?',
      answer: 'Sim, nossos alunos contam com orientações e palestras pedagógicas detalhando os índices exigidos no Teste de Aptidão Física (TAF), exames médicos e psicológicos de cada edital.'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8FAFC]">
      <SEO
        title="Preparatórios Militares em Duque de Caxias - ESA, EEAr, EsPCEx, AFA, Colégio Naval | Progressão"
        description="Conquiste sua vaga nas Forças Armadas: ESA, EEAr, EsPCEx, AFA, EFOMM, Colégio Naval, EPCAR e RM2 da Marinha. Tradição, simulados oficiais e alto índice de aprovação."
        canonicalPath="/cursos/preparatorio-militar"
      />

      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs
        items={[
          { label: 'Cursos' },
          { label: 'Preparatórios Militares' }
        ]}
      />

      {/* ============================================================ */}
      {/* 1. SEÇÃO HERO: IDENTIDADE VISUAL INSTITUCIONAL PROGRESSÃO */}
      {/* ============================================================ */}
      <section className="relative bg-[#00223B] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#015E96]/30">
        {/* Textura sutil e elegante de listras diagonais suaves e escuras oficial do Progressão */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.07) 0px, rgba(0, 0, 0, 0.07) 18px, transparent 18px, transparent 36px)'
          }}
        />

        {/* Gradiente radial decorativo */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center z-10">
          {/* Tag de identificação */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-6 border border-white/20 shadow-sm">
            <Shield className="w-4 h-4 text-[#FFBF00]" />
            <span>Tradição em Aprovações Militares desde 1995</span>
          </div>

          {/* H1 Principal conforme especificação */}
          <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-5 leading-tight">
            Preparatórios Militares
          </h1>

          {/* Subtítulo conforme especificação */}
          <p className="text-lg sm:text-2xl font-medium text-[#FFBF00] max-w-3xl mx-auto mb-5 leading-snug">
            Prepare-se para conquistar sua aprovação nas principais carreiras militares do Brasil.
          </p>

          {/* Breve descrição destacando a preparação direcionada */}
          <p className="text-sm sm:text-base text-[#E1E5E8]/90 max-w-3xl mx-auto leading-relaxed">
            O <strong className="text-white font-semibold">Curso Progressão Caxias</strong> oferece preparação de alta intensidade e rigor pedagógico direcionada para diferentes concursos e escolas militares das Forças Armadas: Marinha, Exército e Aeronáutica.
          </p>

          {/* Indicadores rápidos de autoridade */}
          <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-white">31+</span>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">Anos de Tradição</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-[#FFBF00]">100%</span>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">Bancas Oficiais</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-white">Milhares</span>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">De Alunos Fardados</span>
            </div>
            <div className="p-2">
              <span className="block text-2xl sm:text-3xl font-black text-[#FFBF00]">Simulados</span>
              <span className="text-xs text-[#E1E5E8]/80 font-medium">Ranqueados no Padrão</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. GRADE RESPONSIVA DE CARDS DOS PREPARATÓRIOS MILITARES */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
            Nossas Turmas Especializadas
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
            Escolha Sua Carreira nas Forças Armadas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#0A131F]/70 leading-relaxed">
            Clique em <strong className="text-[#004B7C]">"Saiba mais"</strong> em qualquer um dos preparatórios abaixo para consultar requisitos de admissão, plano de remuneração detalhado, matérias cobradas e a metodologia do Progressão.
          </p>
        </div>

        {/* Grid Responsivo de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {MILITARY_PREPARATORIES.map((prep) => {
            return (
              <div
                key={prep.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Imagem de Destaque da Carreira */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#00223B] shrink-0">
                  <img
                    src={prep.image}
                    alt={`${prep.name} - ${prep.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00223B]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Badge da Força / Órgão Militar */}
                  <div className="absolute top-3 left-3 bg-[#00223B]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/20 shadow-md">
                    {prep.orgao.split('(')[0].trim()}
                  </div>
                </div>

                {/* Conteúdo Principal do Card */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                  <div>
                    {/* Subtítulo / Órgão */}
                    <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
                      {prep.subtitle}
                    </span>

                    {/* Nome do Preparatório */}
                    <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-[#00223B] tracking-tight mb-2 group-hover:text-[#004B7C] transition-colors">
                      {prep.name}
                    </h3>

                    {/* Breve Descrição */}
                    <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed line-clamp-3">
                      {prep.shortDescription}
                    </p>

                    {/* Resumo das Disciplinas Abordadas */}
                    <div className="mt-3 pt-2.5 border-t border-[#E1E5E8] flex items-start gap-2 text-xs text-[#0A131F]/80">
                      <BookOpen className="w-3.5 h-3.5 text-[#004B7C] shrink-0 mt-0.5" />
                      <span className="leading-snug">
                        <strong className="text-[#004B7C] font-semibold">Disciplinas: </strong>
                        {prep.disciplinasResumo}
                      </span>
                    </div>
                  </div>

                  {/* BLOCO DE DESTAQUE VISUAL PARA REMUNERAÇÃO */}
                  <div className="bg-[#F0F7FD] border border-[#BAE6FD] rounded-xl p-3.5 sm:p-4 my-1">
                    <div className="flex items-center gap-1.5 text-[#004B7C] text-[11px] font-bold uppercase tracking-wider mb-1">
                      <DollarSign className="w-3.5 h-3.5 text-[#0289C6]" />
                      <span>{prep.remuneracaoLabel || 'Remuneração:'}</span>
                    </div>

                    {/* Valor da Remuneração Grande e Fácil de Visualizar */}
                    <div className="text-xl sm:text-2xl font-black text-[#00223B] tracking-tight font-serif-heading">
                      {prep.remuneracao}
                    </div>

                    {prep.remuneracaoSubtexto && (
                      <div className="text-xs font-semibold text-[#004B7C] mt-1 pt-1 border-t border-[#BAE6FD]/60">
                        <span className="font-semibold text-[#004B7C]">{prep.remuneracaoSubtexto}</span>
                      </div>
                    )}

                    {!prep.remuneracaoSubtexto && prep.remuneracaoPosFormado && (
                      <div className="text-xs font-semibold text-[#004B7C] mt-1 pt-1 border-t border-[#BAE6FD]/60">
                        Após formado: <span className="font-bold text-[#00223B]">{prep.remuneracaoPosFormado}</span>
                      </div>
                    )}
                  </div>

                  {/* BOTÃO "SAIBA MAIS" (ABRE A MINI PÁGINA / MODAL EXPANDIDO) */}
                  <button
                    type="button"
                    onClick={() => setSelectedPreparatory(prep)}
                    aria-label={`Saiba mais sobre o preparatório ${prep.name}`}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4 text-[#FFBF00] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. MINI PÁGINA / MODAL EXPANDIDO AO CLICAR EM "SAIBA MAIS" */}
      {/* ============================================================ */}
      {selectedPreparatory && (
        <div 
          className="fixed inset-0 z-50 bg-[#001424]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn"
          onClick={() => setSelectedPreparatory(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-preparatory-title"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden border border-[#E1E5E8] relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CABEÇALHO DO MODAL / MINI PÁGINA */}
            <div className="bg-[#00223B] text-white px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between border-b border-[#015E96]/40 shrink-0">
              <div className="pr-4">
                <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block">
                  {selectedPreparatory.subtitle}
                </span>
                <h2 
                  id="modal-preparatory-title"
                  className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight uppercase"
                >
                  {selectedPreparatory.name}
                </h2>
              </div>

              {/* Botão Fechar no Cabeçalho */}
              <button
                type="button"
                onClick={() => setSelectedPreparatory(null)}
                aria-label="Fechar detalhes do preparatório"
                className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-white transition-colors cursor-pointer shrink-0 border border-white/15"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* ÁREA COM SCROLL VERTICAL INTERNO */}
            <div 
              ref={modalContentRef}
              className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1 text-[#0A131F]"
            >
              {/* IMAGEM DE DESTAQUE DO CONCURSO / ESCOLA */}
              <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-[#E1E5E8] shrink-0 bg-[#00223B]">
                <img
                  src={selectedPreparatory.image}
                  alt={`${selectedPreparatory.name} - Formação Militar`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00223B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider block">
                    Instituição Militar Responsável
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white leading-snug">
                    {selectedPreparatory.orgao}
                  </p>
                </div>
              </div>

              {/* SEÇÃO 1: SOBRE A CARREIRA E O CONCURSO */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <Shield className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Sobre a Carreira e o Concurso
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E1E5E8]">
                  {selectedPreparatory.sobre}
                </p>
              </div>

              {/* SEÇÃO 2: REQUISITOS OFICIAIS DE INGRESSO */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <Target className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Requisitos Oficiais para Inscrição
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#004B7C] uppercase mb-1">
                      <GraduationCap className="w-4 h-4 text-[#0289C6]" />
                      <span>Escolaridade</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#0A131F]/80">
                      {selectedPreparatory.escolaridade}
                    </p>
                  </div>

                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#004B7C] uppercase mb-1">
                      <Calendar className="w-4 h-4 text-[#0289C6]" />
                      <span>Faixa Etária</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#0A131F]/80">
                      {selectedPreparatory.idade}
                    </p>
                  </div>

                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#004B7C] uppercase mb-1">
                      <Users className="w-4 h-4 text-[#0289C6]" />
                      <span>Sexo / Vagas</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#0A131F]/80">
                      {selectedPreparatory.sexo}
                    </p>
                  </div>

                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#004B7C] uppercase mb-1">
                      <Award className="w-4 h-4 text-[#0289C6]" />
                      <span>Curso / Destino</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#0A131F]/80">
                      {selectedPreparatory.curso}
                    </p>
                  </div>
                </div>
              </div>

              {/* SEÇÃO 3: ESTRUTURA DETALHADA DE REMUNERAÇÃO E BENEFÍCIOS */}
              <div className="bg-[#00223B] text-white p-5 sm:p-7 rounded-2xl border border-[#015E96]/50 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FFBF00] flex items-center justify-center text-[#00223B] shrink-0 font-bold">
                    <DollarSign className="w-5 h-5 text-[#00223B]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#FFBF00] uppercase tracking-wider block">
                      Valores Oficiais das Forças Armadas
                    </span>
                    <h3 className="font-serif-heading text-lg sm:text-xl font-black text-white">
                      Remuneração Durante o Curso e Após a Formatura
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {/* Durante a Formação */}
                  <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                    <span className="text-xs font-bold text-[#FFBF00] uppercase block mb-1">
                      1. Durante o Curso de Formação:
                    </span>
                    <p className="text-xs sm:text-sm text-[#E1E5E8] leading-relaxed">
                      {selectedPreparatory.remuneracaoFormacao}
                    </p>
                  </div>

                  {/* Após Formado */}
                  <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                    <span className="text-xs font-bold text-[#FFBF00] uppercase block mb-1">
                      2. Após a Formatura / Nomeação:
                    </span>
                    <p className="text-xs sm:text-sm text-[#E1E5E8] leading-relaxed">
                      {selectedPreparatory.remuneracaoFormado}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-[#E1E5E8]/70 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#FFBF00] shrink-0" />
                  <span><strong>Fonte Oficial:</strong> {selectedPreparatory.fonte}</span>
                </div>
              </div>

              {/* SEÇÃO 4: DISCIPLINAS ABORDADAS NA PROVA E NO PREPARATÓRIO */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <BookOpen className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Disciplinas Abordadas no Preparatório & Cobradas no Concurso
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#0A131F]/75 mb-3 leading-relaxed">
                  Todo o conteúdo programático do edital oficial de <strong>{selectedPreparatory.name}</strong> é ministrado com teoria completa, listas direcionadas de exercícios e simulados ranqueados:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPreparatory.disciplinas.map((disc, idx) => (
                    <div 
                      key={idx}
                      className="bg-[#F8FAFC] p-3.5 sm:p-4 rounded-xl border border-[#E1E5E8] flex items-start gap-3 hover:border-[#0289C6]/50 hover:bg-white transition-all shadow-2xs"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#004B7C] text-[#FFBF00] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {idx + 1}
                      </div>
                      <span className="text-xs sm:text-sm text-[#0A131F]/90 leading-snug font-medium">
                        {disc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEÇÃO 5: DIFERENCIAIS DA CARREIRA E DA PREPARAÇÃO */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#00223B]">
                    Principais Vantagens e Benefícios da Carreira
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {selectedPreparatory.diferenciais.map((dif, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E1E5E8] text-xs sm:text-sm text-[#0A131F]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                      <span>{dif}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SEÇÃO 5: COMO O PROGRESSÃO PREPARA VOCÊ */}
              <div className="bg-[#F0F7FD] border border-[#BAE6FD] p-5 sm:p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-[#004B7C]" />
                  <h4 className="font-serif-heading text-base sm:text-lg font-bold text-[#004B7C]">
                    Como o Progressão Caxias prepara você para essa vaga:
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#0A131F]/80 leading-relaxed mb-3">
                  Treinamento cirúrgico com apostilas direcionadas para o edital oficial de <strong>{selectedPreparatory.name}</strong>, resolução exaustiva das últimas 10 a 20 provas do concurso, simulados quinzenais cronometrados e plantões de dúvidas individuais com professores especialistas em bancas militares.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-[#004B7C]">
                  <span className="bg-white px-3 py-1 rounded-md border border-[#BAE6FD]">Simulados Ranqueados</span>
                  <span className="bg-white px-3 py-1 rounded-md border border-[#BAE6FD]">Material Focado na Banca</span>
                  <span className="bg-white px-3 py-1 rounded-md border border-[#BAE6FD]">Plantão de Dúvidas</span>
                  <span className="bg-white px-3 py-1 rounded-md border border-[#BAE6FD]">Orientação para TAF</span>
                </div>
              </div>
            </div>

            {/* RODAPÉ DO MODAL / MINI PÁGINA COM AÇÕES */}
            <div className="bg-[#F8FAFC] px-5 sm:px-8 py-4 border-t border-[#E1E5E8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              {/* Botão "Voltar" conforme especificação */}
              <button
                type="button"
                onClick={() => setSelectedPreparatory(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#CBD5E1] text-[#0A131F] hover:bg-[#E2E8F0] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-[#004B7C]" />
                <span>Voltar aos Preparatórios</span>
              </button>

              {/* Botão de Ação Direta para Matrícula / Dúvidas */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre turmas e matrículas para o preparatório ${selectedPreparatory.name} no Curso Progressão Caxias.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar no WhatsApp</span>
                </a>

                <Link
                  href="/contato"
                  onClick={() => setSelectedPreparatory(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFBF00] hover:bg-[#F59E0B] text-[#00223B] font-black text-xs sm:text-sm py-2.5 px-5 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>Fazer Pré-Matrícula</span>
                  <ArrowRight className="w-4 h-4 text-[#00223B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. SEÇÃO: POR QUE ESCOLHER A CARREIRA MILITAR? */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
              Estabilidade, Honra e Futuro
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
              Por que ingressar nas Forças Armadas Brasileiras?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#0A131F]/70 leading-relaxed">
              A carreira militar oferece segurança profissional ímpar, independência financeira desde jovem, plano de saúde integral para a família e a oportunidade de servir à pátria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREER_DIFFERENTIALS.map((diff, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E1E5E8] hover:border-[#0289C6]/40 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#004B7C] flex items-center justify-center text-white mb-4 shadow-sm">
                  {idx === 0 && <GraduationCap className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 1 && <ShieldCheck className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 2 && <TrendingUp className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 3 && <HeartHandshake className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 4 && <Award className="w-5 h-5 text-[#FFBF00]" />}
                  {idx === 5 && <Compass className="w-5 h-5 text-[#FFBF00]" />}
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-[#00223B] mb-2">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0A131F]/80 leading-relaxed mb-3">
                  {diff.description}
                </p>
                <div className="text-[11px] text-[#004B7C] font-semibold bg-white p-2.5 rounded-lg border border-[#E1E5E8]">
                  {diff.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. METODOLOGIA DE APROVAÇÃO MILITAR DO PROGRESSÃO */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-[#00223B] text-white px-4 sm:px-6 lg:px-8 border-t border-[#015E96]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-[#001424]">
              <img
                src="/assets/banner-militar-02.png"
                alt="Turma militar em treinamento e resolução de simulados"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#FFBF00] uppercase tracking-wider block mb-1">
                  Método Comprovado em Caxias
                </span>
                <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                  Como Conduzimos Nossos Alunos à Aprovação
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#E1E5E8]/85 leading-relaxed">
                  Não preparamos apenas para fazer provas. Treinamos cada candidato para o ritmo, a gestão de tempo sob pressão e a precisão técnica exigidos pelas bancas mais difíceis do Brasil.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                    Simulados Cronometrados
                  </h4>
                  <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                    Reprodução idêntica do tempo, das regras de cartão de respostas e das notas de corte das provas oficiais.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                    Foco na Banca Específica
                  </h4>
                  <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                    Apostilas e listas de exercícios mapeadas de acordo com as peculiaridades de cada força armada.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                    Monitoria Individual
                  </h4>
                  <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                    Plantões de dúvidas presenciais e online para sanar lacunas conceituais antes de cada simulado.
                  </p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/15">
                  <h4 className="font-bold text-sm text-[#FFBF00] mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" />
                    Professores Especialistas
                  </h4>
                  <p className="text-xs text-[#E1E5E8]/80 leading-relaxed">
                    Corpo docente veterano, focado no padrão de exigência das academias e escolas militares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PERGUNTAS FREQUENTES (FAQ) */}
      {/* ============================================================ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <AccordionFAQ items={courseFaqs} title="DÚVIDAS FREQUENTES SOBRE O PREPARATÓRIO MILITAR" />
      </section>
      <div className="bg-white p-8 flex justify-center">
        <div className="w-full max-w-[600px]">
          {/* RD STATION — PROVISÓRIO */}
          <RDStationForm
            formId="caxias_lp_geral-6b17fb580118e7e46ef8"
          />
        </div>
      </div>

    </div>
  );
};
