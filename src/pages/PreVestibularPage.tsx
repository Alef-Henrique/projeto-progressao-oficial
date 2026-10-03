import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
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
import { RDStationForm } from '../components/rdstation/RDStationForm';

export const PreVestibularPage: React.FC = () => {
  // Estado para o carrossel de depoimentos reais
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Estado interativo para o mockup da questão do PROG Provas
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>('C');

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
      name: 'Mariana Costa',
      course: 'Medicina • UFRJ (SISU)',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      testimonial: 'A preparação no Progressão foi decisiva para eu alcançar a nota necessária em Medicina na UFRJ. O apoio individual na redação e os simulados no padrão exato do ENEM me deram a segurança que eu precisava para a prova.',
      badge: 'APROVADO ✓'
    },
    {
      id: 2,
      name: 'Camila Martins',
      course: 'Medicina • UERJ (Conceito A)',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      testimonial: 'Conquistei meu Conceito A na UERJ graças aos simulados cronometrados e às aulas direcionadas para o estilo específico de questões da banca da UERJ e do ENEM.',
      badge: 'APROVADO ✓'
    },
    {
      id: 3,
      name: 'Felipe Almeida',
      course: 'Engenharia • UFF (SISU)',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
      testimonial: 'O direcionamento nas matérias de exatas e o feedback constante nos simulados me colocaram na frente da concorrência para ingressar na Federal Fluminense.',
      badge: 'APROVADO ✓'
    },
    {
      id: 4,
      name: 'Juliana Rocha',
      course: 'Direito • UNIRIO (SISU)',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
      testimonial: 'A estrutura acolhedora, os professores experientes e as correções minuciosas de redação fizeram toda a diferença na minha pontuação geral.',
      badge: 'APROVADO ✓'
    },
    {
      id: 5,
      name: 'Rafael Oliveira',
      course: 'Direito • UERJ',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      testimonial: 'O foco tanto no ENEM quanto nas especificidades discursivas da UERJ me deu dupla vantagem para conquistar minha vaga universitária.',
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
                  onClick={() => scrollToSection('diferenciais')}
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
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
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
      {/* 5. SEÇÃO — POR QUE O PROG É DIFERENTE? */}
      {/* ============================================================ */}
      <section id="diferenciais" className="py-16 sm:py-24 bg-[#001D33] text-white px-4 sm:px-6 lg:px-8 border-y border-[#015E96]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs sm:text-sm font-bold text-[#38BDF8] uppercase tracking-wider block mb-2">
                Inovação no Cursinho
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-white tracking-tight uppercase leading-snug mb-5">
                Por que o PROG é diferente?
              </h2>

              <p className="text-base sm:text-lg text-[#E1E5E8]/90 leading-relaxed mb-6 font-normal">
                Além de se preparar de forma antecipada e garantir descontos especiais, acreditamos que em pleno 2027 não dá para estudar do mesmo jeito do século passado. Por isso, mapeamos as principais dificuldades dos estudantes e desenvolvemos ferramentas específicas para cada uma delas.
              </p>

              {/* Destaque Visual */}
              <div className="bg-[#0289C6]/20 border-l-4 border-[#FFBF00] p-4 sm:p-5 rounded-r-2xl my-2">
                <span className="text-base sm:text-lg font-black text-white block">
                  Preparação inteligente para uma nova geração de estudantes.
                </span>
                <span className="text-xs text-[#E1E5E8]/80 mt-1 block">
                  Mais do que assistir a aulas: análise de dados, acompanhamento individual e estratégias de prova.
                </span>
              </div>
            </div>

            {/* Composição Visual Digital (Estudante + Elementos de Desempenho) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-[#002B48] aspect-[16/10] sm:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
                  alt="Estudante utilizando notebook e tablet para estudos de alta performance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. TECNOLOGIA — PROG NITRO */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Informações da ferramenta */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
              Tecnologia Educacional
            </span>
            <span className="text-sm font-extrabold text-[#D97706] uppercase tracking-widest block mb-1">
              PROG Nitro
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase mb-4">
              Estudando certo, sempre.
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed mb-6">
              O PROG Nitro cria trilhas personalizadas com inteligência artificial que focam no que realmente importa para cada aluno.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-[#0A131F]/80">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0289C6] shrink-0 mt-0.5" />
                <span>Identifica lacunas de conteúdo antes dos simulados oficiais</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0289C6] shrink-0 mt-0.5" />
                <span>Sugere exercícios sob medida de acordo com seu curso pretendido</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0289C6] shrink-0 mt-0.5" />
                <span>Painel claro de evolução semana a semana</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => scrollToSection('pre-inscricao')}
              className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>GARANTIR UM FUTURO SEGURO</span>
              <ArrowRight className="w-4 h-4 text-[#FFBF00]" />
            </button>
          </div>

          {/* Imagem Visual da Plataforma PROG Nitro */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#0289C6]/30 bg-[#001D33] aspect-[16/10] sm:aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Plataforma PROG Nitro com painel de inteligência analítica e acompanhamento de desempenho para o ENEM"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D33]/90 via-transparent to-[#001D33]/30 pointer-events-none" />

              {/* Tag superior de identificação */}
              <div className="absolute top-4 left-4 bg-[#001D33]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">PROG Nitro • Painel de Inteligência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. PROG PROVAS — SISTEMA DE QUESTÕES INTENSIVO */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Lado Esquerdo: Texto & Benefícios */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-1">
                Banco de Treinamento
              </span>
              <span className="text-xs font-extrabold text-[#D97706] uppercase tracking-widest block mb-2">
                PROG Provas
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase leading-snug mb-4">
                Evolução constante e eficaz.
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed mb-6">
                O PROG Provas oferece uma bateria intensa de questões com gabarito comentado e relatórios detalhados sobre seu desempenho.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-start gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                  <CheckCircle2 className="w-5 h-5 text-[#0289C6] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#00223B]">Milhares de Questões Comentadas</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">Resoluções passo a passo de cada alternativa, com foco no raciocínio cobrado pela banca.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                  <CheckCircle2 className="w-5 h-5 text-[#0289C6] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#00223B]">Filtros por Assunto e Nível de Dificuldade</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">Treine apenas o que você precisa: do nível fácil ao difícil, por tema específico do edital.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#F8FAFC] p-4 rounded-xl border border-[#E1E5E8]">
                  <CheckCircle2 className="w-5 h-5 text-[#0289C6] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#00223B]">Estatísticas de Tempo de Resolução</h4>
                    <p className="text-xs text-[#64748B] mt-0.5">Monitore se você está gastando o tempo ideal de prova (média de 3 minutos por questão).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito: Mockup Interativo de uma Tela de Questões */}
            <div className="lg:col-span-6">
              <div className="bg-[#F8FAFC] rounded-3xl p-5 sm:p-7 border border-[#E1E5E8] shadow-xl">
                {/* Cabeçalho da Questão */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E1E5E8] text-xs font-semibold text-[#64748B]">
                  <span className="bg-[#004B7C] text-white px-2.5 py-1 rounded-md text-[11px] font-bold">
                    ENEM • Ciências da Natureza
                  </span>
                  <span>Tempo: 02:45 min</span>
                </div>

                {/* Enunciado */}
                <div className="my-4 text-xs sm:text-sm text-[#0A131F] leading-relaxed">
                  <p className="font-medium mb-2">
                    Em um circuito elétrico residencial de 127 V, um equipamento de potência 2.540 W opera de maneira constante. De acordo com os parâmetros da física e a Lei de Ohm, qual é a intensidade da corrente elétrica estabelecida no circuito?
                  </p>
                </div>

                {/* Alternativas Interativas */}
                <div className="space-y-2 mb-4">
                  {[
                    { id: 'A', text: '10 A' },
                    { id: 'B', text: '15 A' },
                    { id: 'C', text: '20 A (Correta: P = V × I → I = 2540 / 127 = 20 A)' },
                    { id: 'D', text: '25 A' },
                    { id: 'E', text: '30 A' }
                  ].map((alt) => (
                    <button
                      key={alt.id}
                      type="button"
                      onClick={() => setSelectedAnswer(alt.id)}
                      className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm flex items-center justify-between transition-all border ${selectedAnswer === alt.id
                          ? alt.id === 'C'
                            ? 'bg-[#10B981]/10 border-[#10B981] text-[#065F46] font-semibold'
                            : 'bg-[#EF4444]/10 border-[#EF4444] text-[#991B1B] font-semibold'
                          : 'bg-white border-[#E1E5E8] text-[#0A131F] hover:bg-[#F1F5F9]'
                        }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-[#004B7C]/10 text-[#004B7C] font-bold text-xs flex items-center justify-center shrink-0">
                          {alt.id}
                        </span>
                        <span>{alt.text}</span>
                      </div>
                      {selectedAnswer === alt.id && alt.id === 'C' && (
                        <Check className="w-4 h-4 text-[#10B981] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Indicador de Desempenho */}
                <div className="bg-white p-3.5 rounded-xl border border-[#E1E5E8] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#0A131F]">
                    <span className="font-bold text-[#10B981]">78%</span>
                    <span>dos estudantes do Progressão acertaram esta questão</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#004B7C]">Gabarito Oficial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 11. SEÇÃO — JORNADA DO ALUNO (TIMELINE 01 A 06) */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-[#F1F5F9] px-4 sm:px-6 lg:px-8 border-t border-[#E1E5E8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-wider block mb-2">
              Passo a Passo Rumo à Universidade
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-[#00223B] tracking-tight uppercase">
              Do primeiro dia até a aprovação.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B]">
              Uma jornada clara, planejada e orientada para você não perder tempo estudando sem rumo.
            </p>
          </div>

          {/* Timeline Responsiva: Grid no Desktop e Vertical no Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: '01', title: 'Diagnóstico', desc: 'Entenda seu nível atual.' },
              { step: '02', title: 'Plano de estudos', desc: 'Descubra o que precisa estudar.' },
              { step: '03', title: 'Prática', desc: 'Resolva questões e faça simulados.' },
              { step: '04', title: 'Correção', desc: 'Entenda seus erros.' },
              { step: '05', title: 'Evolução', desc: 'Acompanhe seu desempenho.' },
              { step: '06', title: 'Aprovação', desc: 'Chegue preparado para a prova.' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-xs flex flex-col justify-between relative group hover:border-[#0289C6] transition-colors"
              >
                <div>
                  <span className="text-2xl font-black text-[#0289C6] font-mono block mb-2">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-sm text-[#00223B] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {idx < 5 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#CBD5E1]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 12. CTA FINAL COM IMPACTO */}
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

export default PreVestibularPage;