import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../../types';

interface AccordionFAQProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
}

export const AccordionFAQ: React.FC<AccordionFAQProps> = ({
  items,
  title = "PERGUNTAS FREQUENTES",
  subtitle = "Tire suas dúvidas sobre o funcionamento de nossas turmas e metodologia."
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {(title || subtitle) && (
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
            Tire Suas Dúvidas
          </span>
          {title && (
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm sm:text-base text-[#0A131F]/70 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-content-${index}`;
          const buttonId = `faq-btn-${index}`;

          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#E1E5E8] overflow-hidden transition-all duration-200 shadow-sm hover:border-[#0289C6]/50"
            >
              <button
                type="button"
                id={buttonId}
                aria-controls={contentId}
                aria-expanded={isOpen}
                onClick={() => toggleItem(index)}
                className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#004B7C] hover:text-[#0289C6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0289C6] focus:ring-inset"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-[#0289C6] transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-5 sm:px-6 pb-5 pt-1 text-sm text-[#0A131F]/80 leading-relaxed border-t border-[#E1E5E8]/60 bg-[#F9F9FD]"
                >
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
