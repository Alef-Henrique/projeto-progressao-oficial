import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '../routing/RouterContext';

export interface BreadcrumbCrumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbCrumb[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      aria-label="Navegação estrutural"
      className="py-3 px-4 sm:px-6 bg-[#E1E5E8]/40 border-b border-[#E1E5E8] text-xs sm:text-sm text-[#0A131F]/70"
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5 sm:gap-2">
        <Link
          href="/"
          className="inline-flex items-center gap-1 hover:text-[#0289C6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0289C6] rounded px-1"
          aria-label="Página Inicial"
        >
          <Home className="w-3.5 h-3.5 text-[#004B7C]" />
          <span className="sr-only sm:not-sr-only">Início</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={`${item.label}-${index}`}>
              <ChevronRight className="w-3.5 h-3.5 text-[#0A131F]/40 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="font-semibold text-[#004B7C] truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#0289C6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0289C6] rounded px-1 truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
