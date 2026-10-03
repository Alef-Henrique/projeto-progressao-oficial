import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ShieldCheck } from 'lucide-react';
import { Link, useRouter } from '../routing/RouterContext';
import { SITE_CONFIG, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE } from '../../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppButton';

export const Footer: React.FC = () => {
  const { openPrivacyModal, openTermsModal } = useRouter();

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <footer className="bg-[#002e4c] text-white border-t border-[#015E96] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Introduction */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group">
            <div className="h-14 flex items-center group-hover:scale-105 transition-transform">
              <img
                src="/assets/logo-oficial.webp"
                alt="Progressão Caxias - Curso & Colégio"
                className="h-full w-auto object-contain"
              />
            </div>
              <div className="flex flex-col">
                <span className="font-serif-heading font-bold text-lg text-white leading-tight">
                  PROGRESSÃO CAXIAS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-white font-semibold">
                  CURSO & COLÉGIO
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-[#E1E5E8]/80 leading-relaxed">
            Rigor, disciplina e resultado. Formando gerações e liderando aprovações em Duque de Caxias.

            </p>
          </div>

          {/* Coluna 1: O Progressão */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif-heading font-bold text-sm uppercase tracking-wider text-[#0289C6] border-b border-white/10 pb-2">
              O Progressão
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#E1E5E8]/80">
              <li>
                <Link href="/sobre" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Sobre o Progressão
                </Link>
              </li>
              <li>
                <Link href="/estrutura" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Nossa Estrutura
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link href="/resultados" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Resultados e Aprovações
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Colégio */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif-heading font-bold text-sm uppercase tracking-wider text-[#0289C6] border-b border-white/10 pb-2">
              Colégio
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#E1E5E8]/80">
              <li>
                <Link href="/colegio" className="hover:text-white hover:translate-x-1 transition-all inline-block font-semibold text-white">
                  Visão Geral do Colégio
                </Link>
              </li>
              <li>
                <Link href="/colegio/fundamental-2" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Ensino Fundamental II (6º ao 9º Ano)
                </Link>
              </li>
              <li>
                <Link href="/colegio/ensino-medio" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Ensino Médio (1º ao 3º Série)
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Cursos Preparatórios */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif-heading font-bold text-sm uppercase tracking-wider text-[#0289C6] border-b border-white/10 pb-2">
              Cursos
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#E1E5E8]/80">

              <li>
                <Link href="/cursos/preparatorio-militar" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Preparatório Militar
                </Link>
              </li>
              <li>
                <Link href="/cursos/enem" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  ENEM
                </Link>
              </li>
              <li>
                <Link href="/cursos/pre-vestibular" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Pré-Vestibular
                </Link>
              </li>
              <li>
                <Link href="/cursos/concursos" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Concursos Públicos
                </Link>
              </li>
              <li>
                <Link href="/cursos/tecnicos" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Cursos Técnicos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 & 5: Atendimento & Social */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif-heading font-bold text-sm uppercase tracking-wider text-[#0289C6] border-b border-white/10 pb-2">
              Atendimento
            </h3>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#E1E5E8]/80">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-[#0289C6] hover:text-white transition-colors group"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0 mt-0.5 text-[#0289C6]" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                <span className="break-all">{SITE_CONFIG.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-[11px] text-[#E1E5E8]/60">
                <Clock className="w-3.5 h-3.5 text-[#0289C6] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.officeHours}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-3">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-2">
                Redes Sociais
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0289C6] text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram Curso Progressão Caxias"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0289C6] text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook Curso Progressão Caxias"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0289C6] text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube Curso Progressão Caxias"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Footer Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E1E5E8]/60">
          <p>© {new Date().getFullYear()} Curso Progressão Caxias. Todos os direitos reservados. Duque de Caxias - RJ.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={openPrivacyModal}
              className="hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={openTermsModal}
              className="hover:text-white transition-colors focus:outline-none focus:underline"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <Link href="/contato" className="hover:text-white transition-colors">
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
