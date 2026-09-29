import React from 'react';
import { 
  Laptop, 
  Shield, 
  FileText, 
  Landmark, 
  Building2, 
  ArrowRight, 
  ChevronRight,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { Link } from '../components/routing/RouterContext';

interface OnlineCourseItem {
  id: string;
  name: string;
  fullName?: string;
  level?: string;
  segment: string;
  description: string;
}

const CONCURSOS_ONLINE: OnlineCourseItem[] = [
  {
    id: 'pmerj',
    name: 'PMERJ',
    fullName: 'Polícia Militar do Estado do Rio de Janeiro',
    segment: 'Segurança Pública',
    description: 'Preparação focada no conteúdo programático e exigências da banca para a carreira policial militar no estado do Rio de Janeiro.'
  },
  {
    id: 'inss',
    name: 'INSS',
    fullName: 'Instituto Nacional do Seguro Social',
    segment: 'Seguridade & Previdência',
    description: 'Estudo direcionado às disciplinas e normas exigidas pelo órgão federal de seguridade social.'
  },
  {
    id: 'prf-adm',
    name: 'PRF Administrativo',
    fullName: 'Polícia Rodoviária Federal — Área Administrativa',
    level: 'Nível Médio',
    segment: 'Carreiras Federais',
    description: 'Preparação voltada para os cargos de apoio e suporte administrativo da Polícia Rodoviária Federal.'
  },
  {
    id: 'prf-agente',
    name: 'PRF Agente Federal',
    fullName: 'Polícia Rodoviária Federal — Policial Rodoviário Federal',
    level: 'Nível Superior',
    segment: 'Carreiras Policiais Federais',
    description: 'Preparação intensiva para a carreira de Agente Policial da PRF, abrangendo legislação de trânsito e disciplinas correlatas.'
  },
  {
    id: 'pcerj',
    name: 'PCERJ',
    fullName: 'Polícia Civil do Estado do Rio de Janeiro',
    level: 'Nível Superior',
    segment: 'Carreiras Policiais Estaduais',
    description: 'Preparação estruturada para os cargos de nível superior da Polícia Civil do Estado do Rio de Janeiro.'
  },
  {
    id: 'banco-do-brasil',
    name: 'Banco do Brasil',
    fullName: 'Banco do Brasil — Escriturário',
    level: 'Técnico',
    segment: 'Carreiras Bancárias',
    description: 'Conteúdos direcionados para conhecimentos bancários, atendimento ao público e matemática financeira.'
  },
  {
    id: 'detran-adm',
    name: 'DETRAN',
    fullName: 'Departamento de Trânsito do Estado do Rio de Janeiro',
    level: 'Técnico Administrativo',
    segment: 'Trânsito & Administração',
    description: 'Formação focada no suporte operacional e rotinas administrativas do órgão estadual de trânsito.'
  },
  {
    id: 'detran-transito',
    name: 'DETRAN',
    fullName: 'Departamento de Trânsito do Estado do Rio de Janeiro',
    level: 'Técnico de Trânsito',
    segment: 'Fiscalização & Operações de Trânsito',
    description: 'Preparação específica sobre legislação e normas regulamentadoras do Código de Trânsito Brasileiro.'
  },
  {
    id: 'detran-id',
    name: 'DETRAN',
    fullName: 'Departamento de Trânsito do Estado do Rio de Janeiro',
    level: 'ID Civil',
    segment: 'Identificação Civil',
    description: 'Conteúdo direcionado às rotinas de identificação civil, documentação e atendimento do DETRAN-RJ.'
  },
  {
    id: 'gm-marica',
    name: 'GM Maricá',
    fullName: 'Guarda Municipal de Maricá',
    segment: 'Guarda Civil Municipal',
    description: 'Treinamento específico voltado para a carreira municipal de segurança e preservação patrimonial em Maricá.'
  },
  {
    id: 'transpetro',
    name: 'Transpetro',
    fullName: 'Petrobras Transporte S.A.',
    segment: 'Empresas Públicas & Energia',
    description: 'Preparação com base nos editais da subsidiária de transporte e logística da Petrobras.'
  }
];

export const ProgressaoOnlinePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Progressão Online - Preparação Online para Concursos Públicos"
        description="Prepare-se para os principais concursos públicos com o Progressão Online. Turmas focadas para PMERJ, INSS, PRF, PCERJ, Banco do Brasil, DETRAN e mais."
        canonicalPath="/cursos/tecnicos"
      />

      <Breadcrumbs
        items={[
          { label: 'Cursos', href: '/cursos' },
          { label: 'Progressão Online' }
        ]}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge institucional */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <Laptop className="w-4 h-4 text-[#0289C6]" />
            <span>Modalidade Online • Concursos Públicos</span>
          </div>

          {/* Título Principal */}
          <h1 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight tracking-tight">
            Progressão Online
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-xl text-[#E1E5E8] max-w-2xl mx-auto leading-relaxed mb-4 font-normal">
            Prepare-se para os principais concursos públicos com uma preparação focada, acessível e pensada para quem busca aprovação.
          </p>

          {/* Texto de Apoio */}
          <p className="text-xs sm:text-sm text-[#E1E5E8]/80 max-w-xl mx-auto leading-relaxed mb-8">
            Estude no seu ritmo e onde estiver, com o direcionamento e a tradição do Progressão para diferentes oportunidades em carreiras policiais, administrativas, bancárias e federais.
          </p>

          {/* Botão de CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0289C6] hover:bg-white hover:text-[#004B7C] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group text-center"
            >
              <span>Falar com a secretaria e saber mais sobre as turmas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE CONCURSOS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider mb-2">
            Oportunidades Disponíveis
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#004B7C] tracking-tight mb-3">
            Concursos Públicos
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#0A131F]/70 max-w-2xl leading-relaxed">
            Escolha seu objetivo e prepare-se com o Progressão Online.
          </p>
        </div>

        {/* Grade de Cards Responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CONCURSOS_ONLINE.map((item) => {
            const getIcon = () => {
              if (item.name.includes('PMERJ') || item.name.includes('PRF') || item.name.includes('PCERJ') || item.name.includes('GM')) {
                return <Shield className="w-5 h-5 text-[#0289C6]" />;
              }
              if (item.name.includes('Banco')) {
                return <Landmark className="w-5 h-5 text-[#0289C6]" />;
              }
              if (item.name.includes('DETRAN') || item.name.includes('INSS')) {
                return <FileText className="w-5 h-5 text-[#0289C6]" />;
              }
              return <Building2 className="w-5 h-5 text-[#0289C6]" />;
            };

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#E1E5E8] hover:border-[#0289C6]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  {/* Topo do Card: Ícone e Destaque de Nível */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#004B7C]/10 border border-[#004B7C]/15 group-hover:bg-[#004B7C] flex items-center justify-center transition-colors duration-300 shadow-xs">
                      {getIcon()}
                    </div>

                    {/* Destaque Visual de Escolaridade / Nível */}
                    {item.level && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#0289C6]/10 text-[#0289C6] border border-[#0289C6]/25">
                        {item.level}
                      </span>
                    )}
                  </div>

                  {/* Nome do Concurso */}
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#004B7C] group-hover:text-[#015E96] transition-colors leading-tight mb-1.5">
                    {item.name}
                  </h3>

                  {/* Nome Completo do Órgão */}
                  {item.fullName && (
                    <p className="text-xs font-semibold text-[#0289C6] mb-3 leading-snug">
                      {item.fullName}
                    </p>
                  )}

                  {/* Descrição Factual */}
                  <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Rodapé do Card com Ação */}
                <div className="pt-4 border-t border-[#E1E5E8]/80 mt-auto flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0A131F]/60">
                    {item.segment}
                  </span>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#004B7C] group-hover:text-[#0289C6] transition-colors"
                  >
                    <span>Consultar turma</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. SEÇÃO DE CHAMADA PARA AÇÃO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full my-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white p-8 sm:p-12 lg:p-16 rounded-3xl shadow-xl border border-[#015E96] text-center flex flex-col items-center">
          {/* Efeitos visuais suaves de fundo */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#0289C6]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-[#004B7C]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Título de Destaque */}
            <h2 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              Seu próximo objetivo pode começar agora.
            </h2>

            {/* Texto de Apoio */}
            <p className="text-sm sm:text-base lg:text-lg text-[#E1E5E8]/90 max-w-2xl leading-relaxed mb-8">
              Entre em contato com a secretaria para saber mais sobre as turmas do Progressão Online e consultar a disponibilidade de vagas.
            </p>

            {/* Botão de CTA */}
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0289C6] hover:bg-white hover:text-[#004B7C] text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group text-center"
            >
              <span>Falar com a secretaria e saber mais sobre as turmas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};