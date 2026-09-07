import React, { useState } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_DISPLAY } from '../../config/siteConfig';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-7 h-7" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.776.978-.952 1.178-.175.2-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.788-1.68-2.088-.175-.3-.018-.462.132-.612.135-.135.3-.351.451-.527.15-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.23-.244-.585-.492-.505-.677-.514-.176-.008-.376-.01-.577-.01-.201 0-.527.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.542.719.31 1.28.495 1.718.634.723.23 1.38.197 1.902.12.58-.087 1.78-.727 2.03-1.429.251-.702.251-1.304.176-1.43-.075-.126-.276-.201-.577-.351zM12.016 2.071C6.544 2.071 2.096 6.519 2.096 12c0 1.75.457 3.456 1.326 4.96L2.01 22.022l5.176-1.357A9.878 9.878 0 0 0 12.016 21.93c5.471 0 9.92-4.448 9.92-9.93 0-5.48-4.449-9.929-9.92-9.929z"
    />
  </svg>
);

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip / Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0A131F] text-white py-2 px-3.5 rounded-xl shadow-xl border border-[#015E96] text-xs animate-fadeIn max-w-xs">
          <div className="flex flex-col">
            <span className="font-semibold text-[#0289C6]">Dúvidas sobre matrículas?</span>
            <span className="text-[#E1E5E8]/80 text-[11px]">Fale com nosso consultor no WhatsApp</span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-white/60 hover:text-white p-1 rounded transition-colors"
            aria-label="Fechar mensagem de WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Conversar no WhatsApp com Progressão Caxias: ${WHATSAPP_DISPLAY}`}
        className="relative group flex items-center justify-center w-14 h-14 bg-[#0289C6] hover:bg-[#015E96] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#0289C6]/40"
      >
        {/* Subtle breathing ripple wave */}
        <span className="absolute inset-0 rounded-full bg-[#0289C6] opacity-40 animate-ping -z-10 group-hover:hidden"></span>
        
        <WhatsAppIcon className="w-7 h-7 text-white" />

        {/* Floating badge label on mobile or hover */}
        <span className="sr-only">WhatsApp Progressão Caxias</span>
      </a>
    </div>
  );
};
