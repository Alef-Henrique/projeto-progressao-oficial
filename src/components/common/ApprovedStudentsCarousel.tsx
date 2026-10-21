import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';

export interface ApprovedStudent {
  id: string;
  name: string;
  concurso: string;
  carreira: string;
  badge?: string;
  imageUrl: string;
  ano?: string;
  depoimentoCurto?: string;
}

export const APPROVED_STUDENTS_DATA: ApprovedStudent[] = [
  {
    id: 'aluno-1',
    name: 'Rafael de Souza Borges',
    concurso: 'PCERJ - Polícia Civil - RJ',
    carreira: '',
    badge: 'APROVADO ✓',
    imageUrl: '/assets/aprovados-concursos/Rafael-de-Souza-Borges-Investigador-PCERJ.jpg',
    ano: '2026',
    depoimentoCurto: 'Simulados e direção pedagógica impecáveis no Progressão.'
  },
  {
    id: 'aluno-2',
    name: 'Renata Canuto',
    concurso: 'CBMERJ – Corpo de Bombeiros - RJ',
    carreira: '',
    badge: 'APROVADA ✓',
    imageUrl: '/assets/aprovados-concursos/Renata-Canuto-CBMERJ.jpg',
    ano: '2026',
    depoimentoCurto: 'Metodologia precisa para gabaritar Direito Previdenciário.'
  },
  {
    id: 'aluno-3',
    name: 'Marco Eustáquio da Silva',
    concurso: 'PMERJ – Soldado Policial Militar',
    carreira: '',
    badge: 'APROVADO ✓',
    imageUrl: '/assets/aprovados-concursos/Marco-Eustaquio-da-Silva-PMERJ.JPG',
    ano: '2026',
    depoimentoCurto: 'Treino intensivo no padrão da banca FGV fez toda a diferença.'
  },
  {
    id: 'aluno-4',
    name: 'Aline Correia',
    concurso: 'CBMERJ - Corpo de Bombeiro - RJ',
    carreira: 'Polícia Civil do RJ',
    badge: 'APROVADA ✓',
    imageUrl: '/assets/aprovados-concursos/Aline-Correia-CBMERJ.webp',
    ano: '2026',
    depoimentoCurto: 'Foco nos pontos de maior peso do edital garantiram minha vaga.'
  },
  {
    id: 'aluno-5',
    name: 'Jenyfer Luiza',
    concurso: 'ESA – Escola de Sargentos das Armas',
    carreira: 'Sargento do Exército',
    badge: 'APROVADO ✓',
    imageUrl: '/assets/aprovados-concursos/JENYFER-LUIZA-ESASAUDE.webp',
    ano: '2026',
    depoimentoCurto: 'Disciplina e acompanhamento diário com os professores.'
  },
  {
    id: 'aluno-6',
    name: 'João Vitor',
    concurso: 'EEAR – Força Aérea Brasileira',
    carreira: 'Sargento da Aeronáutica',
    badge: 'APROVADA ✓',
    imageUrl: '/assets/aprovados-concursos/Joao-Vitor-EEAR.jpg',
    ano: '2026',
    depoimentoCurto: 'Aulas objetivas e resolução de centenas de provas anteriores.'
  },
  {
    id: 'aluno-7',
    name: 'Rayane Ferreira',
    concurso: 'ESA - Escola de Sargentos das Armas',
    carreira: '',
    badge: 'APROVADO ✓',
    imageUrl: '/assets/aprovados-concursos/Rayane-Ferreira-ESASaúde.jpeg',
    ano: '2026',
    depoimentoCurto: 'Sonho de infância concretizado com o suporte do Progressão.'
  },
  {
    id: 'aluno-8',
    name: 'Rhaeanny Figueiredo',
    concurso: 'EAGS - Estágio de Adaptação à Graduação de Sargentos',
    carreira: 'Área Federal',
    badge: 'APROVADA ✓',
    imageUrl: '/assets/aprovados-concursos/Rhaeanny-Figueiredo-EAGS.JPG',
    ano: '2026',
    depoimentoCurto: 'Estratégia de prova do CEBRASPE dominada com os simulados.'
  }
];

export const ApprovedStudentsCarousel: React.FC = () => {
  const students = APPROVED_STUDENTS_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  // Responsividade de cards visíveis
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, students.length - visibleCount);

  // Garantir índice válido em resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Transição automática suave de 4.5 segundos
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext, maxIndex]);

  // Suporte a swipe em telas touch
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div id="alunos-aprovados-carrossel" className="w-full mt-14 sm:mt-18 pt-10 sm:pt-14 border-t border-[#E1E5E8]">
      {/* Cabeçalho da Seção de Alunos Aprovados */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold tracking-wider uppercase mb-2.5">
          <GraduationCap className="w-4 h-4 text-[#0289C6]" />
          <span>Galeria de Conquistas</span>
        </div>

        <h3 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#00223B] tracking-tight">
          Nossos Alunos Aprovados
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-[#64748B] mt-2 font-normal">
          Histórias de dedicação que conquistaram a posse nos concursos mais concorridos do Brasil.
        </p>
      </div>

      {/* Contêiner do Carrossel com Botões Flutuantes */}
      <div
        className="relative group/carousel px-1 sm:px-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Botão Anterior */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Aluno anterior"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-lg border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Botão Próximo */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próximo aluno"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-lg border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Trilho de Cards */}
        <div className="overflow-hidden py-3 px-1">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {students.map((student) => (
              <div
                key={student.id}
                className="px-2.5 sm:px-3 shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {/* Card Individual do Aluno Aprovado */}
                <div className="bg-white rounded-3xl overflow-hidden border border-[#E1E5E8] shadow-sm hover:shadow-xl hover:border-[#0289C6]/60 transition-all duration-300 flex flex-col group/card hover:-translate-y-1.5 h-full">

                  {/* Foto do Aluno */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                    <img
                      src={student.imageUrl}
                      alt={`${student.name} - Aprovado em ${student.concurso}`}
                      className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Gradiente para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D33] via-[#001D33]/40 to-transparent" />

                    {/* Identificação Direta sobre a Imagem: Nome e Concurso */}
                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 text-white">
                      <h4 className="font-serif-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug drop-shadow-md">
                        {student.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-[#FFBF00] leading-snug mt-1 drop-shadow-sm">
                        {student.concurso}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores / Dots de Paginação */}
        {maxIndex > 0 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Ir para página ${dotIdx + 1} de aprovados`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx
                    ? 'w-7 bg-[#004B7C]'
                    : 'w-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                }`}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
