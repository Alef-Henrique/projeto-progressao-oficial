/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter, Link } from './components/routing/RouterContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { PrivacyTermsModal } from './components/common/PrivacyTermsModal';
import { MetaPixelPageView } from './components/MetaPixelPageView';

// Pages
import { HomePage } from './pages/HomePage';
import { SobrePage } from './pages/SobrePage';
import { EstruturaPage } from './pages/EstruturaPage';
import { EquipePage } from './pages/EquipePage';
import { ColegioHubPage } from './pages/ColegioHubPage';
import { EducacaoInfantilPage } from './pages/EducacaoInfantilPage';
import { EnsinoFundamental2Page } from './pages/EnsinoFundamental2Page';
import { EnsinoMedioPage } from './pages/EnsinoMedioPage';
import { PreparatorioMilitarPage } from './pages/PreparatorioMilitarPage';
import { EnemPage } from './pages/EnemPage';
import { PreVestibularPage } from './pages/PreVestibularPage';
import { ConcursosPage } from './pages/ConcursosPage';
import { ProgressaoOnlinePage } from './pages/ProgressaoOnlinePage';
import { ResultadosPage } from './pages/ResultadosPage';
import { ContatoPage } from './pages/ContatoPage';
import { TurmaProDetalhePage } from './pages/TurmaProDetalhePage';
import { FundamentalIIDetalhePage } from './pages/FundamentalIIDetalhePage';
import { EnsinoMedioDetalhePage } from './pages/EnsinoMedioDetalhePage';
import { Home } from 'lucide-react';

const PageRenderer: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path by stripping trailing slash (except root) and hash/query
  const cleanPath = (currentPath.split('#')[0].split('?')[0] || '/');
  const normalizedPath = cleanPath.length > 1 && cleanPath.endsWith('/')
    ? cleanPath.slice(0, -1)
    : cleanPath;

  if (normalizedPath.startsWith('/concursos/turmas-pro/')) {
    const slug = normalizedPath.replace(/^\/concursos\/turmas-pro\/?/, '');
    return <TurmaProDetalhePage turmaId={slug} />;
  }
if (
  normalizedPath.startsWith('/concursos/') &&
  normalizedPath !== '/concursos/turmas-pro'
) {
  return <ConcursosPage />;
}

  if (normalizedPath.startsWith('/colegio/fundamental-2/') && normalizedPath !== '/colegio/fundamental-2') {
    const slug = normalizedPath.replace(/^\/colegio\/fundamental-2\/?/, '');
    return <FundamentalIIDetalhePage turmaId={slug} />;
  }

  if (normalizedPath.startsWith('/fundamental-ii/') && normalizedPath !== '/fundamental-ii') {
    const slug = normalizedPath.replace(/^\/fundamental-ii\/?/, '');
    return <FundamentalIIDetalhePage turmaId={slug} />;
  }

  if (normalizedPath.startsWith('/colegio/ensino-medio/') && normalizedPath !== '/colegio/ensino-medio') {
    const slug = normalizedPath.replace(/^\/colegio\/ensino-medio\/?/, '');
    return <EnsinoMedioDetalhePage turmaId={slug} />;
  }

  if (normalizedPath.startsWith('/ensino-medio/') && normalizedPath !== '/ensino-medio') {
    const slug = normalizedPath.replace(/^\/ensino-medio\/?/, '');
    return <EnsinoMedioDetalhePage turmaId={slug} />;
  }

  switch (normalizedPath) {
    case '/':
      return <HomePage />;
    case '/sobre':
      return <SobrePage />;
    case '/estrutura':
      return <EstruturaPage />;
    case '/equipe':
      return <EquipePage />;
    case '/colegio':
      return <ColegioHubPage />;
    case '/colegio/educacao-infantil':
      
    case '/colegio/fundamental-1':
    case '/colegio/ensino-fundamental':
      
    case '/fundamental-ii':
    case '/fundamental-2':
    case '/colegio/fundamental-2':
    case '/colegio/ensino-fundamental-2':
      return <EnsinoFundamental2Page />;
    case '/ensino-medio':
    case '/colegio/ensino-medio':
      return <EnsinoMedioPage />;
    case '/cursos':
    case '/cursos/preparatorio-militar':
      return <PreparatorioMilitarPage />;
    case '/cursos/pre-vestibular':
    case '/cursos/enem':
      return <PreVestibularPage />;
    case '/cursos/concursos':
    case '/concursos':
      return <ConcursosPage />;
    case '/cursos/tecnicos':
    case '/cursos/cursos-tecnicos':
    case '/online':
    case '/progressao-online':
    case '/cursos/online':
      return <ProgressaoOnlinePage />;
    case '/resultados':
      return <ResultadosPage />;
    case '/contato':
      return <ContatoPage />;
    default:
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
          <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider mb-2">
            Erro 404
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#004B7C] mb-3">
            Página Não Encontrada
          </h1>
          <p className="text-sm text-[#0A131F]/70 max-w-md mb-8 leading-relaxed">
            O endereço que você tentou acessar não existe ou foi transferido. Retorne para a página inicial do Curso Progressão Caxias.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#015E96] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4 text-[#0289C6]" />
            <span>Voltar para a Página Inicial</span>
          </Link>
        </div>
      );
  }
};

export default function App() {
  return (
    <RouterProvider>
      <MetaPixelPageView />
      {/* Skip to Content Accessible Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#004B7C] text-white px-4 py-2 rounded-lg font-bold text-xs shadow-xl outline-none ring-2 ring-[#0289C6]"
      >
        Pular para o conteúdo principal
      </a>

      <div className="flex flex-col min-h-screen bg-[#F9F9FD] text-[#0A131F]">
        {/* Global Navigation Header */}
        <Header />

        {/* Dynamic Route Content */}
        <main id="main-content" className="flex-1 flex flex-col focus:outline-none">
          <PageRenderer />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action */}
        <WhatsAppButton />

        {/* Privacy Policy & Terms Modal */}
        <PrivacyTermsModal />
      </div>
    </RouterProvider>
  );
}
