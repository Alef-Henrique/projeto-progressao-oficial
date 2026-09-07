import React, { useState, useRef, useEffect } from 'react';
import { Play, ArrowRight, GraduationCap, X, Volume2, VolumeX } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  studentName: string;
  badge: string;
  quote: string;
  videoSrc: string;
  posterSrc: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  studentName,
  badge,
  quote,
  videoSrc,
  posterSrc,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Vídeo de ${studentName}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A131F]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#002e4c] rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header da Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#00243d]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0289C6] text-white">
              <GraduationCap className="w-3.5 h-3.5" />
              {badge}
            </span>
            <h4 className="text-white font-bold text-sm sm:text-base font-serif-heading truncate max-w-md">
              {studentName} • {title}
            </h4>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar vídeo"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player de Vídeo Responsivo — aqui pode tocar COM som, pois abrir a modal já é um gesto do usuário */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <video
            key={videoSrc}
            autoPlay
            controls
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta reprodução de vídeo.
          </video>
        </div>

        {/* Rodapé da modal */}
        <div className="px-6 py-4 bg-[#00243d] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/80">
          <p className="italic text-white/90">"{quote}"</p>
          <span className="text-[#0289C6] font-semibold shrink-0">Progressão Caxias • Depoimento Real</span>
        </div>
      </div>
    </div>
  );
};

interface InlineAutoplayVideoProps {
  videoSrc: string;
  posterSrc: string;
  ariaLabel: string;
  
}

/**
 * Card de vídeo que toca sozinho (mudo) assim que entra na tela,
 * e pausa quando sai da tela. Clicar nele abre a modal grande com som.
 */
const InlineAutoplayVideo: React.FC<InlineAutoplayVideoProps> = ({
  videoSrc,
  posterSrc,
  ariaLabel,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    const containerEl = containerRef.current;
    if (!videoEl || !containerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // play() retorna uma Promise — em alguns navegadores ela pode
            // rejeitar (ex.: usuário com "economia de dados" ativa), então
            // tratamos o erro para não quebrar a aplicação.
            videoEl.play().then(() => setHasStarted(true)).catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      {
        threshold: 0.5, // dispara quando pelo menos 50% do card está visível
      }
    );

    observer.observe(containerEl);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // não deixa o clique também abrir a modal
    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.muted = !videoEl.muted;
    setIsMuted(videoEl.muted);
  };

  return (
    <div
      ref={containerRef}
      
      className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E1E5E8] bg-[#002e4c] aspect-[4/3] sm:aspect-square group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E1E5E8] bg-[#002e4c] aspect-[4/3] sm:aspect-square group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
      />

      {/* Gradiente sutil escuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002e4c]/85 via-transparent to-[#002e4c]/20 pointer-events-none" />

      {/* Botão de mudo/som — controla o preview inline, não a modal */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Ativar som do preview' : 'Silenciar preview'}
        className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-[#001e33]/70 backdrop-blur-md border border-white/40 text-white flex items-center justify-center transition-colors hover:bg-[#0289C6]"
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

    </div>
  );
};

export const VideoShowcaseSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{
    isOpen: boolean;
    title: string;
    studentName: string;
    badge: string;
    quote: string;
    videoSrc: string;
    posterSrc: string;
  }>({
    isOpen: false,
    title: '',
    studentName: '',
    badge: '',
    quote: '',
    videoSrc: '',
    posterSrc: '',
  });

  const openVideo = (
    studentName: string,
    title: string,
    badge: string,
    quote: string,
    videoSrc: string,
    posterSrc: string
  ) => {
    setActiveModal({
      isOpen: true,
      studentName,
      title,
      badge,
      quote,
      videoSrc,
      posterSrc,
    });
  };

  const closeVideo = () => {
    setActiveModal((prev) => ({ ...prev, isOpen: false }));
  };

  // Dados de cada aluno. Caminhos dentro de /public NÃO devem incluir "public/" no src.
  const anthony = {
    studentName: 'Anthony Salgueiro',
    title: 'Com o Progressão, conquistei a minha vaga na ESA',
    badge: 'APROVADO NA ESA',
    quote: 'A preparação no Progressão foi fundamental para a minha aprovação na ESA.',
    videoSrc: '/assets/video-anthony-esa.mp4',
    posterSrc: '/assets/antony-cap-video.jpg',
  };

  const teodoro = {
    studentName: 'Arthur Teodoro',
    title: 'O Progressão me direcionou para a aprovação em Medicina',
    badge: 'APROVADO em Medicina',
    quote:
      'Fui muito bem direcionado pelo Progressão, que me preparou para a aprovação em Medicina.',
    // Troque pelo vídeo real da Mariana.
    videoSrc: '/assets/video-teodoro.mp4',
    posterSrc: '/assets/arthur-teodoro.webp',
  };

  return (
    <section
      id="videos-historias"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative overflow-hidden"
    >
      {/* Elementos decorativos circulares e de pontos */}
      <div className="absolute top-12 right-6 w-16 h-16 rounded-full bg-[#0289C6]/15 blur-sm pointer-events-none hidden sm:block" />
      <div className="absolute bottom-24 left-8 w-12 h-12 rounded-full bg-[#0289C6]/20 blur-xs pointer-events-none hidden sm:block" />

      {/* Matriz de pontos superior direita */}
      <div className="absolute top-44 right-4 grid grid-cols-4 gap-2 opacity-25 pointer-events-none hidden lg:grid">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0289C6]" />
        ))}
      </div>

      {/* Matriz de pontos inferior esquerda */}
      <div className="absolute bottom-10 left-4 grid grid-cols-4 gap-2 opacity-25 pointer-events-none hidden lg:grid">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0289C6]" />
        ))}
      </div>

      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="text-xs sm:text-sm font-bold text-[#0289C6] uppercase tracking-[0.2em] block mb-3">
          DEPOIMENTOS REAIS
        </span>
        <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002e4c] tracking-tight leading-tight mb-4">
          Histórias que inspiram novas conquistas
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#0A131F]/70 leading-relaxed max-w-2xl mx-auto">
          Alunos que confiaram no Progressão e hoje vivem a realização dos seus sonhos. Assista aos depoimentos e veja como a nossa preparação faz a diferença.
        </p>
        {/* Barra divisora ciano centralizada */}
        <div className="w-12 h-1 bg-[#0289C6] rounded-full mx-auto mt-5" />
      </div>

      {/* BLOCO 1: Lucas Almeida (Vídeo à Esquerda, Texto à Direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-28">
        {/* Coluna Vídeo (Esquerda) */}
        <div className="lg:col-span-6 xl:col-span-6">
          <InlineAutoplayVideo
            videoSrc={anthony.videoSrc}
            posterSrc={anthony.posterSrc}
            ariaLabel={`Depoimento em vídeo de ${anthony.studentName}, aprovado na ESA`}
          />
        </div>

        {/* Coluna Texto (Direita) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start lg:pl-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0289C6] text-xs font-bold uppercase tracking-wider mb-5">
            <GraduationCap className="w-4 h-4 text-[#0289C6]" />
            <span>{anthony.badge}</span>
          </div>

          {/* Título com aspas */}
          <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002e4c] leading-tight mb-5">
            “{anthony.title}”
          </h3>

          {/* Citação do depoimento */}
          <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed mb-6 font-normal">
            “A preparação no Progressão foi fundamental para a minha aprovação na ESA. Aqui encontrei professores comprometidos, um ambiente disciplinado e todo o suporte que eu precisava para evoluir nos estudos.”
          </p>

          {/* Linha divisória ciano */}
          <div className="w-12 h-0.5 bg-[#0289C6] mb-4" />

          {/* Nome e Conquista do Aluno */}
          <div className="mb-7">
            <h4 className="font-bold text-base sm:text-lg text-[#002e4c]">
              {anthony.studentName}
            </h4>
            <span className="text-xs sm:text-sm text-[#0A131F]/70 font-medium">
              Aprovado na ESA
            </span>
          </div>
        </div>
      </div>

      {/* BLOCO 2: Teodoro (Texto à Esquerda, Vídeo à Direita) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Coluna Texto (Esquerda no Desktop) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start order-2 lg:order-1 lg:pr-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0289C6] text-xs font-bold uppercase tracking-wider mb-5">
            <GraduationCap className="w-4 h-4 text-[#0289C6]" />
            <span>{teodoro.badge}</span>
          </div>

          {/* Título com aspas */}
          <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002e4c] leading-tight mb-5">
            “{teodoro.title}”
          </h3>

          {/* Citação do depoimento */}
          <p className="text-sm sm:text-base text-[#0A131F]/80 leading-relaxed mb-6 font-normal">
            “Com o apoio dos professores, os simulados e uma preparação focada, consegui conquistar minha aprovação em Medicina na UERJ e na UFRJ. O Progressão foi fundamental para transformar meu esforço em resultado.”
          </p>

          {/* Linha divisória ciano */}
          <div className="w-12 h-0.5 bg-[#0289C6] mb-4" />

          {/* Nome e Conquista do Aluno */}
          <div className="mb-7">
            <h4 className="font-bold text-base sm:text-lg text-[#002e4c]">
              {teodoro.studentName}
            </h4>
            <span className="text-xs sm:text-sm text-[#0A131F]/70 font-medium">
              Aprovado em Medicina Pela UERJ e UFRJ
            </span>
          </div>

        </div>

        {/* Coluna Vídeo (Direita no Desktop) */}
        <div className="lg:col-span-6 xl:col-span-6 order-1 lg:order-2">
          <InlineAutoplayVideo
            videoSrc={teodoro.videoSrc}
            posterSrc={teodoro.posterSrc}
            ariaLabel={`Depoimento em vídeo de ${teodoro.studentName}, aprovado no ENEM`}
          />
        </div>
      </div>

      {/* Frase de Rodapé Inspiracional Institucional */}
      <div className="flex items-center justify-center gap-4 text-center mt-20 sm:mt-28">
        <span className="h-px w-12 sm:w-20 bg-[#0289C6]/35" />
        <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0289C6] uppercase">
          DISCIPLINA HOJE, GRANDES CONQUISTAS AMANHÃ
        </span>
        <span className="h-px w-12 sm:w-20 bg-[#0289C6]/35" />
      </div>

      {/* Modal de Vídeo (compartilhada pelos dois blocos) */}
      <VideoModal
        isOpen={activeModal.isOpen}
        onClose={closeVideo}
        title={activeModal.title}
        studentName={activeModal.studentName}
        badge={activeModal.badge}
        quote={activeModal.quote}
        videoSrc={activeModal.videoSrc}
        posterSrc={activeModal.posterSrc}
      />
    </section>
  );
};
