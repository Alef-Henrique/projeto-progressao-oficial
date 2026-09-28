import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Shield, GraduationCap, School, BookOpen, Award, Info, Users, Building, Instagram, Facebook, Youtube, Wrench } from 'lucide-react';
import { Link, useRouter } from '../routing/RouterContext';
import { SITE_CONFIG } from '../../config/siteConfig';
import logoProgressao from "/assets/logo-oficial.webp";

export const Header: React.FC = () => {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(110);
  const [mobileSubmenu, setMobileSubmenu] = useState<Record<string, boolean>>({
    progressao: false,
    colegio: false,
    cursos: false
  });

  const headerRef = useRef<HTMLElement>(null);

  // Keep header height synced dynamically
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Prevent background scroll when mobile drawer is open so it stays firmly fixed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [currentPath]);

  const toggleMobileSubmenu = (key: string) => {
    setMobileSubmenu(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isRouteActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  };

  const isHistoryActive = ['/sobre', '/estrutura', '/equipe'].some(p => currentPath.startsWith(p));
  const isColegioActive = currentPath.startsWith('/colegio');
  const isCursosActive = currentPath.startsWith('/cursos');
  const isResultadosActive = currentPath === '/resultados';
  const isContatoActive = currentPath === '/contato';

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-[#004B7C] border-b border-[#015E96] shadow-md"
    >
      {/* Top micro-bar with quick contact info */}
      <div className="bg-[#0A131F] text-xs text-[#E1E5E8] py-1.5 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0289C6] animate-pulse"></span>
              <span className="font-semibold text-white">Matrículas 2027 Abertas! </span>Quem começa agora chega na frente.
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="text-[#E1E5E8]/70 text-[11px] hidden sm:inline font-medium">Redes Sociais:</span>
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded bg-white/10 hover:bg-[#0289C6] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Curso Progressão Caxias"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded bg-white/10 hover:bg-[#0289C6] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook Curso Progressão Caxias"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded bg-white/10 hover:bg-[#0289C6] text-white flex items-center justify-center transition-colors"
                aria-label="YouTube Curso Progressão Caxias"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-0 border-0 outline-none rounded-lg p-1 group"
            aria-label="Progressão Caxias - Curso & Colégio"
          >
            <div className="h-14 flex items-center group-hover:scale-105 transition-transform">
              <img
                src={logoProgressao}
                alt="Logo Projeto Progressão"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading font-bold text-base sm:text-lg text-white tracking-wide leading-tight group-hover:text-[#0289C6] transition-colors">
                PROGRESSÃO CAXIAS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#E1E5E8] font-semibold">
                CURSO & COLÉGIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-white" aria-label="Navegação Principal">
            {/* Dropdown: O Progressão */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('progressao')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-menu-btn group flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-200 ${
                  isHistoryActive || activeDropdown === 'progressao'
                    ? 'is-active text-white font-semibold'
                    : 'text-[#E1E5E8] hover:text-white'
                }`}
                aria-expanded={activeDropdown === 'progressao'}
                aria-haspopup="true"
              >
                <span className="relative z-10">Nossa História</span>
                <ChevronDown
                  className={`relative z-10 w-4 h-4 transition-all duration-200 ${
                    activeDropdown === 'progressao'
                      ? 'rotate-180 text-[#0289C6]'
                      : isHistoryActive
                      ? 'text-[#0289C6]'
                      : 'text-[#E1E5E8] group-hover:text-white group-hover:translate-y-[1px]'
                  }`}
                />
              </button>

              {activeDropdown === 'progressao' && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-fadeIn">
                  <div className="bg-[#002e4c] rounded-xl shadow-2xl border border-[#015E96] p-2 flex flex-col gap-1 backdrop-blur-xl">
                    <Link
                      href="/sobre"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/sobre' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <Info className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Sobre Nós</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">História, missão e valores</div>
                      </div>
                    </Link>
                    <Link
                      href="/estrutura"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/estrutura' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <Building className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Nossa Estrutura</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">Salas, estudo e convivência</div>
                      </div>
                    </Link>
                    <Link
                      href="/equipe"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/equipe' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <Users className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Nossa Equipe</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">Direção, coordenação e docentes</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Colégio */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('colegio')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-menu-btn group flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-200 ${
                  isColegioActive || activeDropdown === 'colegio'
                    ? 'is-active text-white font-semibold'
                    : 'text-[#E1E5E8] hover:text-white'
                }`}
                aria-expanded={activeDropdown === 'colegio'}
                aria-haspopup="true"
              >
                <span className="relative z-10">Colégio</span>
                <ChevronDown
                  className={`relative z-10 w-4 h-4 transition-all duration-200 ${
                    activeDropdown === 'colegio'
                      ? 'rotate-180 text-[#0289C6]'
                      : isColegioActive
                      ? 'text-[#0289C6]'
                      : 'text-[#E1E5E8] group-hover:text-white group-hover:translate-y-[1px]'
                  }`}
                />
              </button>

              {activeDropdown === 'colegio' && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-fadeIn">
                  <div className="bg-[#002e4c] rounded-xl shadow-2xl border border-[#015E96] p-2 flex flex-col gap-1 backdrop-blur-xl">
                    <Link
                      href="/colegio"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/colegio' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <School className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Visão Geral do Colégio</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">Educação integral e continuada</div>
                      </div>
                    </Link>
                    <div className="h-px bg-white/10 my-1"></div>
                    <Link
                      href="/colegio/fundamental-2"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/colegio/fundamental-2' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0289C6]"></div>
                      <div>
                        <div className="font-semibold text-white">Ensino Fundamental II</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">6º ao 9º ano • Autonomia e rigor</div>
                      </div>
                    </Link>
                    <Link
                      href="/colegio/ensino-medio"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/colegio/ensino-medio' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0289C6]"></div>
                      <div>
                        <div className="font-semibold text-white">Ensino Médio</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">1º ao 3º ano • Foco e aprovação</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Cursos Preparatórios */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('cursos')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`nav-menu-btn group flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-200 ${
                  isCursosActive || activeDropdown === 'cursos'
                    ? 'is-active text-white font-semibold'
                    : 'text-[#E1E5E8] hover:text-white'
                }`}
                aria-expanded={activeDropdown === 'cursos'}
                aria-haspopup="true"
              >
                <span className="relative z-10">Cursos</span>
                <ChevronDown
                  className={`relative z-10 w-4 h-4 transition-all duration-200 ${
                    activeDropdown === 'cursos'
                      ? 'rotate-180 text-[#0289C6]'
                      : isCursosActive
                      ? 'text-[#0289C6]'
                      : 'text-[#E1E5E8] group-hover:text-white group-hover:translate-y-[1px]'
                  }`}
                />
              </button>

              {activeDropdown === 'cursos' && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-fadeIn">
                  <div className="bg-[#002e4c] rounded-xl shadow-2xl border border-[#015E96] p-2 flex flex-col gap-1 backdrop-blur-xl">
                    <Link
                      href="/cursos"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/cursos' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <Award className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Todos os Preparatórios</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">Encontre o preparatório ideal</div>
                      </div>
                    </Link>
                    <div className="h-px bg-white/10 my-1"></div>
                    <Link
                      href="/cursos/preparatorio-militar"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/cursos/preparatorio-militar' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <Shield className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Preparatório Militar</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">EsPCEx, AFA, ESA, EEAr, CN</div>
                      </div>
                    </Link>
                    <Link
                      href="/cursos/pre-vestibular"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/cursos/pre-vestibular' || currentPath === '/cursos/enem' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Pré-Vestibular & ENEM</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">UERJ, TRI, Redação Nota 1000 e Medicina</div>
                      </div>
                    </Link>
                    <Link
                      href="/cursos/concursos"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/cursos/concursos' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <Award className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Concursos Públicos</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">Carreiras policiais, tribunais e civis</div>
                      </div>
                    </Link>
                    <Link
                      href="/cursos/tecnicos"
                      className={`flex items-center gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        currentPath === '/cursos/tecnicos' ? 'bg-[#015E96] text-[#0289C6] font-semibold' : 'text-[#E1E5E8] hover:bg-[#015E96]/50 hover:text-white'
                      }`}
                    >
                      <Wrench className="w-4 h-4 text-[#0289C6] shrink-0" />
                      <div>
                        <div className="font-semibold text-white">Cursos Técnicos</div>
                        <div className="text-[11px] text-[#E1E5E8]/70">CEFET, IFRJ, FAETEC e profissionalizantes</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/resultados"
              className={`nav-menu-btn px-3 py-2 rounded-md transition-colors duration-200 ${
                isResultadosActive
                  ? 'is-active text-white font-semibold'
                  : 'text-[#E1E5E8] hover:text-white'
              }`}
            >
              <span className="relative z-10">Resultados</span>
            </Link>

            <Link
              href="/contato"
              className={`nav-menu-btn px-3 py-2 rounded-md transition-colors duration-200 ${
                isContatoActive
                  ? 'is-active text-white font-semibold'
                  : 'text-[#E1E5E8] hover:text-white'
              }`}
            >
              <span className="relative z-10">Contato</span>
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/cursos"
              className="inline-flex items-center justify-center gap-2 bg-[#0289C6] hover:bg-[#015E96] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0289C6] focus:ring-offset-2 focus:ring-offset-[#004B7C] active:scale-95"
            >
              <span>QUERO GARANTIR MINHA VAGA</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-white hover:bg-[#015E96] focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{ top: `${headerHeight}px` }}
          className="lg:hidden fixed inset-x-0 bottom-0 bg-[#002e4c] z-50 overflow-y-auto border-t border-[#015E96] p-4 flex flex-col justify-between"
        >
          <nav className="flex flex-col gap-1.5" aria-label="Menu Mobile">
            <Link
              href="/"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base ${
                currentPath === '/' ? 'bg-[#015E96] text-[#0289C6] font-bold' : 'text-white hover:bg-[#015E96]/50'
              }`}
            >
              Início
            </Link>

            {/* Submenu Progressão */}
            <div className="rounded-xl overflow-hidden bg-black/20">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('progressao')}
                className="w-full flex items-center justify-between px-4 py-3 text-white text-base font-semibold"
                aria-expanded={mobileSubmenu.progressao}
              >
                <span>Nossa História</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu.progressao ? 'rotate-180 text-[#0289C6]' : ''}`} />
              </button>
              {mobileSubmenu.progressao && (
                <div className="px-4 pb-3 flex flex-col gap-2 pt-1 border-t border-white/5">
                  <Link href="/sobre" className="text-sm py-1.5 px-3 rounded-lg text-[#E1E5E8] hover:text-white hover:bg-white/5">
                    Sobre o Progressão
                  </Link>
                  <Link href="/estrutura" className="text-sm py-1.5 px-3 rounded-lg text-[#E1E5E8] hover:text-white hover:bg-white/5">
                    Nossa Estrutura
                  </Link>
                  <Link href="/equipe" className="text-sm py-1.5 px-3 rounded-lg text-[#E1E5E8] hover:text-white hover:bg-white/5">
                    Nossa Equipe
                  </Link>
                </div>
              )}
            </div>

            {/* Submenu Colégio */}
            <div className="rounded-xl overflow-hidden bg-black/20">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('colegio')}
                className="w-full flex items-center justify-between px-4 py-3 text-white text-base font-semibold"
                aria-expanded={mobileSubmenu.colegio}
              >
                <span>Colégio</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu.colegio ? 'rotate-180 text-[#0289C6]' : ''}`} />
              </button>
              {mobileSubmenu.colegio && (
                <div className="px-4 pb-3 flex flex-col gap-2 pt-1 border-t border-white/5">
                  <Link href="/colegio" className="text-sm py-1.5 px-3 rounded-lg text-[#0289C6] font-semibold">
                    Visão Geral do Colégio
                  </Link>
                  <Link href="/colegio/fundamental-2" className="text-sm py-1.5 px-3 rounded-lg text-[#E1E5E8] hover:text-white hover:bg-white/5">
                    Ensino Fundamental II (6º ao 9º Ano)
                  </Link>
                  <Link href="/colegio/ensino-medio" className="text-sm py-1.5 px-3 rounded-lg text-[#E1E5E8] hover:text-white hover:bg-white/5">
                    Ensino Médio (1º ao 3º Ano)
                  </Link>
                </div>
              )}
            </div>

            {/* Submenu Cursos */}
            <div className="rounded-xl overflow-hidden bg-black/20">
              <button
                type="button"
                onClick={() => toggleMobileSubmenu('cursos')}
                className="w-full flex items-center justify-between px-4 py-3 text-white text-base font-semibold"
                aria-expanded={mobileSubmenu.cursos}
              >
                <span>Cursos Preparatórios</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu.cursos ? 'rotate-180 text-[#0289C6]' : ''}`} />
              </button>
              {mobileSubmenu.cursos && (
                <div className="px-4 pb-3 flex flex-col gap-2 pt-1 border-t border-white/5">
                  <Link href="/cursos" className="text-sm py-1.5 px-3 rounded-lg text-[#0289C6] font-semibold">
                    Todos os Preparatórios
                  </Link>
                  <Link href="/cursos/preparatorio-militar" className="text-sm py-1.5 px-3 rounded-lg text-[#E1E5E8] hover:text-white hover:bg-white/5">
                    Preparatório Militar
                  </Link>
                  <Link 
                    href="/cursos/pre-vestibular" 
                    className={`text-sm py-1.5 px-3 rounded-lg transition-colors ${
                      currentPath === '/cursos/pre-vestibular' || currentPath === '/cursos/enem' 
                        ? 'text-[#0289C6] font-semibold bg-white/5' 
                        : 'text-[#E1E5E8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Pré-Vestibular & ENEM
                  </Link>
                  <Link href="/cursos/concursos" className="text-sm py-1.5 px-3 rounded-lg text-[#E1E5E8] hover:text-white hover:bg-white/5">
                    Concursos Públicos
                  </Link>
                  <Link href="/cursos/tecnicos" className="text-sm py-1.5 px-3 rounded-lg text-[#E1E5E8] hover:text-white hover:bg-white/5">
                    Cursos Técnicos
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/resultados"
              className={`px-4 py-3 rounded-xl text-base ${
                currentPath === '/resultados' ? 'bg-[#015E96] text-[#0289C6] font-bold' : 'text-white hover:bg-[#015E96]/50'
              }`}
            >
              Resultados
            </Link>

            <Link
              href="/contato"
              className={`px-4 py-3 rounded-xl text-base ${
                currentPath === '/contato' ? 'bg-[#015E96] text-[#0289C6] font-bold' : 'text-white hover:bg-[#015E96]/50'
              }`}
            >
              Contato
            </Link>
          </nav>

          <div className="pt-6 pb-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/cursos"
              className="w-full flex items-center justify-center gap-2 bg-[#0289C6] text-white py-3.5 rounded-xl font-bold text-center shadow-lg"
            >
              <span>QUERO ME PREPARAR</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-xs text-[#E1E5E8]/60">
              Matrículas 2027 abertas! Quem começa agora chega na frente.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
