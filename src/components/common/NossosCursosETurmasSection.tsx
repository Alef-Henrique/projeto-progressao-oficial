import React from 'react';
import { 
  FileCheck, 
  Shield, 
  GraduationCap, 
  School, 
  MonitorPlay, 
  MapPin, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';

export const NossosCursosETurmasSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a secretaria e garantir minha vaga em uma das turmas do Progressão Caxias.'
  )}`;

  // ==========================================
  // DADOS EXATOS FORNECIDOS PARA A SEÇÃO
  // ==========================================
  const presencialData = {
    concursos: [
      'PMERJ',
      'INSS',
      'PRF Administrativo (nível médio)',
      'PRF Agente Federal (nível superior)',
      'PCERJ (nível superior)',
      'Banco do Brasil (técnico)',
      'DETRAN (técnico administrativo, técnico de trânsito e ID civil)',
      'GM Maricá',
      'Transpetro'
    ],
    militares: [
      'Monitoria de Português RM2 (Oficial da Marinha Temporário)',
      'ESA',
      'EEAr',
      'Monitoria de Português EAGS',
      'AFA / EFOMM',
      'EsPCEx',
      'Colégio Naval / EPCAR'
    ],
    vestibular: [
      'UERJ',
      'ENEM'
    ],
    colegio: [
      'Fundamental II (6º ao 9º ano)',
      'Ensino Médio (1ª à 3ª série)'
    ]
  };

  const onlineData = {
    concursos: [
      'PMERJ',
      'INSS',
      'PRF Administrativo (nível médio)',
      'PRF Agente Federal (nível superior)',
      'PCERJ (nível superior)',
      'Banco do Brasil (técnico)',
      'DETRAN (técnico administrativo, técnico de trânsito e ID civil)',
      'GM Maricá',
      'Transpetro'
    ]
  };

  return (
    <section 
      id="nossos-cursos-e-turmas" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
    >
      {/* ======================================================== */}
      {/* CABEÇALHO DA SEÇÃO */}
      {/* ======================================================== */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <h2 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#004B7C] tracking-tight">
          Nossos Cursos e Turmas
        </h2>

        <span className="text-base sm:text-xl font-bold text-[#0289C6] mt-2 sm:mt-3">
          Qual é a sua próxima vaga?
        </span>

        <p className="text-sm sm:text-base text-[#0A131F]/70 mt-3 leading-relaxed">
          Cursos presenciais e Progressão Online, organizados por concurso, carreira militar ou vestibular. Direto no que cai na sua prova, sem enrolação.
        </p>
      </div>

      {/* ======================================================== */}
      {/* BLOCO 1 — CURSOS PRESENCIAIS */}
      {/* ======================================================== */}
      <div className="mb-14 sm:mb-20">
        
        {/* Identificador Visual: Presencial */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B7C] text-white text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
            <MapPin className="w-4 h-4 text-[#68C5DB]" />
            <span>Presencial</span>
          </div>
          <div className="h-px bg-[#E1E5E8] flex-1" />
        </div>

        {/* Grid das Categorias Presenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Categoria 1: Concurso Público (5 cols em lg) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E1E5E8] hover:border-[#0289C6]/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#E1E5E8]/70">
              <div className="w-10 h-10 rounded-xl bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#004B7C]">
                  Concurso Público
                </h3>
                <span className="text-[11px] font-semibold text-[#0289C6] uppercase tracking-wider">
                  Carreiras Públicas
                </span>
              </div>
            </div>

            <ul className="space-y-2.5">
              {presencialData.concursos.map((curso, idx) => (
                <li 
                  key={idx}
                  className="flex items-start gap-2.5 p-2 rounded-xl text-xs sm:text-sm text-[#0A131F]/80 hover:text-[#004B7C] hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0289C6] mt-2 shrink-0" />
                  <span className="leading-snug font-medium">{curso}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna da Direita (6 cols em lg): Militares + Pré-Vestibular + Colégio */}
          <div className="lg:col-span-6 flex flex-col gap-6 sm:gap-8">
            
            {/* Categoria 2: Carreiras Militares */}
            <div className="bg-white rounded-2xl border border-[#E1E5E8] hover:border-[#0289C6]/60 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#E1E5E8]/70">
                <div className="w-10 h-10 rounded-xl bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#004B7C]">
                    Carreiras Militares
                  </h3>
                  <span className="text-[11px] font-semibold text-[#0289C6] uppercase tracking-wider">
                    Forças Armadas
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5">
                {presencialData.militares.map((curso, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-2.5 p-2 rounded-xl text-xs sm:text-sm text-[#0A131F]/80 hover:text-[#004B7C] hover:bg-[#F8FAFC] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0289C6] mt-2 shrink-0" />
                    <span className="leading-snug font-medium">{curso}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-grid: Pré-Vestibular e Colégio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Categoria 3: Pré-Vestibular */}
              <div className="bg-white rounded-2xl border border-[#E1E5E8] hover:border-[#0289C6]/60 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E1E5E8]/70">
                  <div className="w-9 h-9 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#004B7C]">
                      Pré-Vestibular
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2">
                  {presencialData.vestibular.map((curso, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center gap-2.5 p-2 rounded-xl text-xs sm:text-sm text-[#0A131F]/80 hover:text-[#004B7C] hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0289C6] shrink-0" />
                      <span className="font-medium">{curso}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categoria 4: Colégio */}
              <div className="bg-white rounded-2xl border border-[#E1E5E8] hover:border-[#0289C6]/60 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E1E5E8]/70">
                  <div className="w-9 h-9 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
                    <School className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#004B7C]">
                      Colégio
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2">
                  {presencialData.colegio.map((curso, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-2.5 p-2 rounded-xl text-xs sm:text-sm text-[#0A131F]/80 hover:text-[#004B7C] hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0289C6] mt-1.5 shrink-0" />
                      <span className="leading-snug font-medium">{curso}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* BLOCO 2 — PROGRESSÃO ONLINE */}
      {/* ======================================================== */}
      <div className="mb-14 sm:mb-16 bg-gradient-to-br from-[#F0F7FA]/70 to-[#F8FAFC] rounded-3xl border border-[#0289C6]/25 p-6 sm:p-10">
        
        {/* Identificador Visual: Progressão Online */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0289C6] text-white text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
            <MonitorPlay className="w-4 h-4 text-white" />
            <span>Progressão Online</span>
          </div>
          <div className="h-px bg-[#0289C6]/20 flex-1" />
        </div>

        {/* Conteúdo do Bloco Online */}
        <div className="bg-white rounded-2xl border border-[#E1E5E8] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E1E5E8]/70">
            <div className="w-10 h-10 rounded-xl bg-[#0289C6]/10 text-[#0289C6] flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-[#004B7C]">
                Concurso Público
              </h3>
              <span className="text-[11px] font-semibold text-[#0289C6] uppercase tracking-wider">
                Aulas e Preparação 100% Online
              </span>
            </div>
          </div>

          {/* Lista em 2 colunas no desktop para leitura limpa e espaçada */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {onlineData.concursos.map((curso, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E1E5E8]/60 hover:border-[#0289C6]/40 hover:bg-white text-xs sm:text-sm text-[#0A131F]/80 hover:text-[#004B7C] transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0289C6] mt-2 shrink-0" />
                <span className="leading-snug font-medium">{curso}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ======================================================== */}
      {/* CTA FINAL */}
      {/* ======================================================== */}
      <div className="flex flex-col items-center justify-center text-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#004B7C] hover:bg-[#015E96] text-white px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-xl active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
        >
          <MessageSquare className="w-5 h-5 text-[#68C5DB] group-hover:scale-110 transition-transform shrink-0" />
          <span>Falar com a secretaria e garantir minha turma</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
        </a>
      </div>

    </section>
  );
};
