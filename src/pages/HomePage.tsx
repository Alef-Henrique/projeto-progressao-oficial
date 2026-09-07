import React, { useState, useEffect, useCallback } from 'react';
import { 
  ArrowRight, Shield, GraduationCap, BookOpen, School, 
  CheckCircle2, Clock, Users, UserCheck, TrendingUp, Target, 
  ChevronRight, ChevronLeft, Brain, Sparkles, Compass
} from 'lucide-react';
import { Link } from '../components/routing/RouterContext';
import { SEO } from '../components/common/SEO';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { CTASection } from '../components/common/CTASection';
import { ResultsAndTestimonialsSection } from '../components/common/ResultsAndTestimonialsSection';
import { VideoShowcaseSection } from '../components/common/VideoShowcaseSection';
import { MateriaisDidaticosSection } from '../components/common/MateriaisDidaticosSection';
import { 
  COURSES_DATA, 
  DIFFERENTIALS_DATA, 
  GENERAL_FAQS 
} from '../data/siteData';

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    alt: 'Estudantes do Curso Progressão Caxias em sala de aula moderna e colaborativa',
    badge: 'Tradição & Excelência',
    title: 'Duas Grandes Frentes Educacionais',
    description: 'Colégio Regular e Cursos Preparatórios de Alta Performance em Duque de Caxias.',
    icon: Shield,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Preparação focada para Carreiras Militares e Concursos Públicos',
    badge: 'Carreiras Militares & Concursos',
    title: 'Disciplina, Foco e Alta Intensidade',
    description: 'Treinamento rigoroso com simulados cronometrados nos moldes oficiais das bancas.',
    icon: Target,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    alt: 'Corpo docente especializado em bancas examinadoras',
    badge: 'Professores Especialistas',
    title: 'Aulas Dinâmicas & Resolução Prática',
    description: 'Mestres e especialistas com vivência comprovada nas principais bancas do país.',
    icon: Users,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    alt: 'Estudo intensivo para ENEM e Vestibulares UERJ e Medicina',
    badge: 'Pré-Vestibular & ENEM',
    title: 'Estratégia TRI & Redação Nota 1000',
    description: 'Metodologia focada na pontuação máxima para SISU, UERJ e vestibulares de Medicina.',
    icon: GraduationCap,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    alt: 'Alunos no Colégio Progressão com foco e formação integral',
    badge: 'Colégio Progressão',
    title: 'Educação Básica de Referência',
    description: 'Ensino Fundamental II e Ensino Médio com formação sólida e excelência acadêmica.',
    icon: School,
  },
];

const FULL_HERO_LINE_1 = 'SUA JORNADA RUMO À';
const FULL_HERO_LINE_2 = 'APROVAÇÃO COMEÇA AQUI.';

const HERO_ROTATING_TEXTS = [
  'Preparatório Militar',
  'Enem',
  'Pré-Vestibular',
  'Concursos Públicos',
  'Cursos Técnicos',
];

const OBJECTIVE_CARDS = [
  {
    id: 'militar',
    title: 'Preparatório Militar',
    href: '/cursos/preparatorio-militar',
    image: 'public/assets/david-lopes-eags.jpeg',
  },
  {
    id: 'colegio',
    title: 'Colégio',
    href: '/colegio',
    image: 'public/assets/colegio-I.webp',
  },
  {
    id: 'vestibular',
    title: 'Pré-Vestibular & ENEM',
    href: '/cursos/pre-vestibular',
    image: 'public/assets/img-pre-vestibular.jpeg',
  },
  {
    id: 'concursos',
    title: 'Concursos Públicos',
    href: '/cursos/concursos',
    image: 'public/assets/pmerj.jpeg',
  },
  {
    id: 'tecnicos',
    title: 'Cursos Técnicos',
    href: '/cursos/tecnicos',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80',
  },
];

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Estados do Carrossel de Objetivos (4 cards fixos no desktop com botões passadores)
  const [objectiveIndex, setObjectiveIndex] = useState(0);
  const [visibleObjectiveCards, setVisibleObjectiveCards] = useState(4);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setVisibleObjectiveCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleObjectiveCards(2);
      } else {
        setVisibleObjectiveCards(4);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxObjectiveIndex = Math.max(0, OBJECTIVE_CARDS.length - visibleObjectiveCards);

  useEffect(() => {
    if (objectiveIndex > maxObjectiveIndex) {
      setObjectiveIndex(maxObjectiveIndex);
    }
  }, [maxObjectiveIndex, objectiveIndex]);

  const handlePrevObjective = () => {
    setObjectiveIndex((prev) => (prev > 0 ? prev - 1 : maxObjectiveIndex));
  };

  const handleNextObjective = () => {
    setObjectiveIndex((prev) => (prev < maxObjectiveIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 50) {
      handleNextObjective();
    } else if (distance < -50) {
      handlePrevObjective();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Typewriter effect state for hero title
  const [typedLine1, setTypedLine1] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return FULL_HERO_LINE_1;
    }
    return '';
  });

  const [typedLine2, setTypedLine2] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return FULL_HERO_LINE_2;
    }
    return '';
  });

  const [cursorPos, setCursorPos] = useState<1 | 2 | null>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return null;
    }
    return 1;
  });

  const [cursorFade, setCursorFade] = useState(false);

  // Typewriter effect state for rotating course categories
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const [rotatingText, setRotatingText] = useState('');
  const [isDeletingRotating, setIsDeletingRotating] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRotatingText(HERO_ROTATING_TEXTS[rotatingIndex]);
      return;
    }

    const currentPhrase = HERO_ROTATING_TEXTS[rotatingIndex];
    let timer: NodeJS.Timeout;

    if (!isDeletingRotating) {
      if (rotatingText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setRotatingText(currentPhrase.slice(0, rotatingText.length + 1));
        }, 75);
      } else {
        // Pausa de 1.8s ao completar a palavra para leitura
        timer = setTimeout(() => {
          setIsDeletingRotating(true);
        }, 1800);
      }
    } else {
      if (rotatingText.length > 0) {
        timer = setTimeout(() => {
          setRotatingText(currentPhrase.slice(0, rotatingText.length - 1));
        }, 35);
      } else {
        // Pausa curta de 250ms antes de começar a próxima palavra
        timer = setTimeout(() => {
          setIsDeletingRotating(false);
          setRotatingIndex((prev) => (prev + 1) % HERO_ROTATING_TEXTS.length);
        }, 250);
      }
    }

    return () => clearTimeout(timer);
  }, [rotatingText, isDeletingRotating, rotatingIndex]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Execute typewriter animation once on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let isCancelled = false;

    let l1Index = 1;
    const typeL1 = () => {
      if (isCancelled) return;
      if (l1Index <= FULL_HERO_LINE_1.length) {
        setTypedLine1(FULL_HERO_LINE_1.slice(0, l1Index));
        l1Index++;
        timeoutId = setTimeout(typeL1, 60);
      } else {
        // Pause 400ms before starting line 2
        timeoutId = setTimeout(() => {
          if (isCancelled) return;
          setCursorPos(2);
          let l2Index = 1;
          const typeL2 = () => {
            if (isCancelled) return;
            if (l2Index <= FULL_HERO_LINE_2.length) {
              setTypedLine2(FULL_HERO_LINE_2.slice(0, l2Index));
              l2Index++;
              timeoutId = setTimeout(typeL2, 60);
            } else {
              // Finished line 2: keep cursor blinking for 2.5s, then fade out smoothly
              timeoutId = setTimeout(() => {
                if (isCancelled) return;
                setCursorFade(true);
                timeoutId = setTimeout(() => {
                  if (isCancelled) return;
                  setCursorPos(null);
                }, 1000);
              }, 2500);
            }
          };
          typeL2();
        }, 400);
      }
    };

    // Initial 200ms pause on mount before typing begins
    timeoutId = setTimeout(typeL1, 200);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  const activeSlide = HERO_SLIDES[currentSlide];
  const line2Aprovacao = typedLine2.slice(0, 9);
  const line2Rest = typedLine2.slice(9);
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Início - Colégio e Cursos Preparatórios"
        description="Sua jornada rumo à aprovação começa aqui. O Curso Progressão Caxias oferece Colégio e Preparatórios Militares, ENEM, Vestibulares e Concursos em Duque de Caxias."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full bg-[#0A131F] text-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Dynamic Ambient Background Carousel - 5 Slides */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={`bg-${slide.id}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
              }}
            />
          ))}

          {/* Sombra azul suave por cima das imagens */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#003B61]/65 via-[#004B7C]/25 to-[#015E96]/15 pointer-events-none"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-between">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            <h1 
              className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18] drop-shadow-md"
              aria-label="SUA JORNADA RUMO À APROVAÇÃO COMEÇA AQUI."
            >
              <span className="inline">
                {typedLine1 || <span className="invisible select-none" aria-hidden="true">&#8203;</span>}
                {cursorPos === 1 && (
                  <span 
                    className="inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.82em] ml-1 sm:ml-1.5 bg-[#0289C6] align-baseline rounded-full animate-pulse" 
                    aria-hidden="true"
                  />
                )}
              </span>
              <br />
              <span className="inline">
                {typedLine2.length === 0 ? (
                  <span className="invisible select-none" aria-hidden="true">&#8203;</span>
                ) : (
                  <>
                    <span className="bg-[#0289C6] text-white px-2 sm:px-2.5 py-0.5 rounded-lg inline-block">
                      {line2Aprovacao}
                    </span>
                    <span>{line2Rest}</span>
                  </>
                )}
                {cursorPos === 2 && (
                  <span 
                    className={`inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.82em] ml-1 sm:ml-1.5 bg-[#0289C6] align-baseline rounded-full ${
                      cursorFade ? 'opacity-0 transition-opacity duration-1000' : 'animate-pulse opacity-100'
                    }`}
                    aria-hidden="true"
                  />
                )}
              </span>
            </h1>

            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold tracking-wide drop-shadow-sm min-h-[2.5rem] flex items-center"
              aria-live="polite"
              aria-label={HERO_ROTATING_TEXTS[rotatingIndex]}
            >
              <span className="text-white font-bold">
                {rotatingText || <span className="invisible select-none" aria-hidden="true">&#8203;</span>}
              </span>
              <span 
                className="inline-block w-[3px] sm:w-[4px] h-[0.85em] ml-1.5 bg-white align-baseline rounded-full animate-pulse" 
                aria-hidden="true" 
              />
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-3">
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center gap-2 bg-[#0289C6] hover:bg-white hover:text-[#004B7C] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 group"
              >
                <span>CONHEÇA NOSSOS PREPARATÓRIOS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OBJETIVO DO ALUNO (Carrossel com 4 cards fixos e botões passadores) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" id="objetivos">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
            Escolha Sua Preparação
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mt-1 mb-3">
            QUAL É O SEU PRÓXIMO OBJETIVO?
          </h2>
          <p className="text-sm sm:text-base text-[#0A131F]/70 max-w-2xl">
            Descubra as turmas desenhadas especificamente para o formato da prova que você deseja prestar.
          </p>
        </div>

        {/* Container do Carrossel com 4 cards fixos e botões passadores */}
        <div 
          className="relative px-2 sm:px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botão Passador Anterior */}
          <button
            onClick={handlePrevObjective}
            aria-label="Voltar card anterior"
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-xl border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Botão Passador Próximo */}
          <button
            onClick={handleNextObjective}
            aria-label="Avançar próximo card"
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#004B7C] hover:bg-[#004B7C] hover:text-white shadow-xl border border-[#E1E5E8] flex items-center justify-center transition-all duration-200 active:scale-95 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Trilho de Overflow dos Cards (4 cards fixos no desktop) */}
          <div className="overflow-hidden py-3 px-1 -mx-2 sm:-mx-3">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${objectiveIndex * (100 / visibleObjectiveCards)}%)`,
              }}
            >
              {OBJECTIVE_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="px-2.5 sm:px-3 shrink-0"
                  style={{ width: `${100 / visibleObjectiveCards}%` }}
                >
                  <Link
                    href={card.href}
                    className="group relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-5 sm:p-6 border border-[#E1E5E8]/60 hover:border-[#0289C6] block"
                  >
                    {/* Background Image: Fotos dos Alunos */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />

                    {/* Degradê escuro para alto contraste e legibilidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/95 via-[#0A131F]/60 to-transparent transition-opacity duration-300 group-hover:via-[#0A131F]/50" />

                    {/* Conteúdo: Somente Título e Saiba Mais */}
                    <div className="relative z-10 flex flex-col gap-4">
                      <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#68C5DB] transition-colors leading-snug drop-shadow-sm">
                        {card.title}
                      </h3>

                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white group-hover:text-[#68C5DB] transition-colors pt-3 border-t border-white/20">
                        <span>Saiba Mais</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Passadores / Indicadores de Posição Inferiores */}
          {maxObjectiveIndex > 0 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: maxObjectiveIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setObjectiveIndex(idx)}
                  aria-label={`Ir para grupo ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                    objectiveIndex === idx 
                      ? 'w-8 bg-[#004B7C]' 
                      : 'w-2.5 bg-[#E1E5E8] hover:bg-[#0289C6]/60'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SEÇÃO SOBRE O COLÉGIO PROGRESSÃO COM CARDS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" id="sobre-o-colegio">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004B7C]/10 text-[#004B7C] text-xs font-bold uppercase tracking-wider mb-3">
            <School className="w-4 h-4 text-[#0289C6]" />
            <span>Colégio Progressão • Educação Básica</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mb-3">
            FORMAÇÃO DE EXCELÊNCIA DA BASE AO TERCEIRÃO
          </h2>
          <p className="text-sm sm:text-base text-[#0A131F]/70 max-w-2xl leading-relaxed">
            Uma proposta pedagógica completa em Duque de Caxias, combinando rigor acadêmico, acolhimento humano e preparação contínua para o futuro dos seus filhos.
          </p>
        </div>

        {/* Cards dos Segmentos de Ensino */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Ensino Fundamental II */}
          <div className="bg-white rounded-3xl border border-[#E1E5E8] hover:border-[#0289C6]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Imagem com Badge */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <img
                  src="public/assets/img-colegio-2.webp"
                  alt="Estudantes do Ensino Fundamental II no Colégio Progressão"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/80 via-[#0A131F]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004B7C] text-white text-xs font-bold shadow-md">
                    <Compass className="w-3.5 h-3.5 text-[#0289C6]" />
                    <span>6º ao 9º Ano</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0289C6] block">
                    Anos Finais
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                    Ensino Fundamental II
                  </h3>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed">
                  Desenvolvimento da autonomia, hábitos sólidos de estudo e base acadêmica forte para os desafios futuros.
                </p>

                {/* Destaques com Check */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Professores especialistas por disciplina</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Rotina de estudos e gestão de tarefas</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Preparação para escolas técnicas.</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Plantões de dúvidas e reforço no contraturno</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ação / Rodapé do Card */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#E1E5E8]/60 mt-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0289C6]">
                6º ao 9º ano
              </span>
              <Link
                href="/colegio/fundamental-2"
                className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#015E96] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 group/btn"
              >
                <span>Conhecer Fundamental II</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Ensino Médio */}
          <div className="bg-white rounded-3xl border border-[#E1E5E8] hover:border-[#0289C6]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Imagem com Badge */}
              <div className="relative h-56 sm:h-60 overflow-hidden">
                <img
                  src="public/assets/img-ensino-medio.webp"
                  alt="Estudantes do Ensino Médio no Colégio Progressão"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A131F]/80 via-[#0A131F]/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0289C6] text-white text-xs font-bold shadow-md">
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                    <span>1º ao 3º Ano</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0289C6] block">
                    Terceirão & Vestibulares
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                    Ensino Médio Regular
                  </h3>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <p className="text-xs sm:text-sm text-[#0A131F]/75 leading-relaxed">
                  Preparação intensiva para ENEM, UERJ e concursos militares, com foco em alto rendimento e aprovação.
                </p>

                {/* Destaques com Check */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Simulados periódicos com padrão oficial e TRI</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Laboratório de Redação com correções individuais</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Itinerários formativos e orientação vocacional</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0A131F]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0" />
                    <span>Terceirão focado em revisão e notas de corte</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ação / Rodapé do Card */}
            <div className="p-6 sm:p-7 pt-0 border-t border-[#E1E5E8]/60 mt-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#0289C6]">
                1º ao 3º ano
              </span>
              <Link
                href="/colegio/ensino-medio"
                className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#015E96] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 group/btn"
              >
                <span>Conhecer Ensino Médio</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS E DEPOIMENTOS */}
      <ResultsAndTestimonialsSection />

      {/* VÍDEOS INSTITUCIONAL E DEPOIMENTOS */}
      <VideoShowcaseSection />

      {/* SEÇÃO — MATERIAIS DIDÁTICOS (BANNER + CARROSSEL) */}
      <MateriaisDidaticosSection />

      {/* 5. DIFERENCIAIS (6 Cards) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
            Nossos Pilares
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-4xl font-bold text-[#004B7C] mt-1 mb-3">
            POR QUE ESCOLHER O PROGRESSÃO?
          </h2>
          <p className="text-sm sm:text-base text-[#0A131F]/70 max-w-2xl">
            Uma estrutura séria, desenhada para eliminar distrações e acelerar a evolução acadêmica de cada estudante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS_DATA.map((diff, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E1E5E8] hover:border-[#0289C6]/60 hover:shadow-md transition-all duration-200 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center">
                {idx % 2 === 0 ? <CheckCircle2 className="w-5 h-5 text-[#0289C6]" /> : <Target className="w-5 h-5 text-[#0289C6]" />}
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#004B7C]">
                {diff.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#0A131F]/70 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQ ACCORDION SECTION */}
      <section className="py-16 sm:py-20 bg-[#E1E5E8]/30 border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <AccordionFAQ items={GENERAL_FAQS} />
      </section>

      {/* 8. CTA FINAL */}
      <CTASection />
    </div>
  );
};
