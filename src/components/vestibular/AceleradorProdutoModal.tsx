import React, { useEffect } from 'react';
import { 
  X, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Award, 
  BookOpen, 
  Check, 
  MessageCircle, 
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Cpu
} from 'lucide-react';
import { AceleradorProduto } from '../../data/aceleradorVestData';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';

interface AceleradorProdutoModalProps {
  produto: AceleradorProduto;
  onClose: () => void;
}

export const AceleradorProdutoModal: React.FC<AceleradorProdutoModalProps> = ({ produto, onClose }) => {
  // Prevenir rolagem do body quando o modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Gostaria de mais informações sobre o produto ${produto.titulo} (${produto.categoria}) do Acelerador Vest no Curso Progressão.`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#001424]/85 backdrop-blur-md flex items-center justify-center p-0 sm:p-4 lg:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-produto-title"
    >
      <div 
        className="bg-white w-full h-full sm:h-auto sm:max-h-[92vh] sm:max-w-4xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#E1E5E8] relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CABEÇALHO FIXO COM RETORNO E FECHAR */}
        <div className="bg-[#00223B] text-white px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between border-b border-[#015E96]/40 shrink-0 sticky top-0 z-30 shadow-md">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E1E5E8] hover:text-[#FFBF00] transition-colors py-1 px-2.5 rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Voltar para a lista de produtos"
            >
              <ArrowLeft className="w-4 h-4 text-[#FFBF00]" />
              <span>Voltar para Produtos</span>
            </button>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="text-xs font-bold text-[#FFBF00] uppercase tracking-wider hidden sm:block">
              {produto.categoria}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#E1E5E8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CORPO DO MODAL COM ROLAGEM */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 space-y-8">
          
          {/* HERO DO PRODUTO */}
          <div className="bg-gradient-to-br from-[#00223B] via-[#002B48] to-[#001D33] text-white rounded-2xl p-6 sm:p-8 border border-[#015E96]/50 shadow-lg relative overflow-hidden">
            <div 
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 16px, transparent 16px, transparent 32px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-block bg-[#0289C6]/20 border border-[#0289C6]/40 text-[#38BDF8] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {produto.categoria}
                </span>
                {produto.badge && (
                  <span className="inline-block bg-[#FFBF00]/20 border border-[#FFBF00]/30 text-[#FFBF00] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {produto.badge}
                  </span>
                )}
              </div>

              <h1 
                id="modal-produto-title"
                className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-2"
              >
                {produto.titulo}
              </h1>

              <div className="text-sm sm:text-base text-[#FFBF00] font-bold mb-3">
                {produto.subtitulo}
              </div>

              <p className="text-sm sm:text-base text-[#E1E5E8] max-w-2xl leading-relaxed">
                {produto.resumo}
              </p>
            </div>
          </div>

          {/* RECURSOS E ESTRUTURA EM CARDS */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#004B7C] flex items-center justify-center text-white shrink-0">
                <Layers className="w-4 h-4 text-[#FFBF00]" />
              </div>
              <h2 className="font-serif-heading text-lg sm:text-2xl font-bold text-[#00223B]">
                Recursos & Como Funciona
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {produto.recursos.map((rec, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F8FAFC] border border-[#E1E5E8] rounded-2xl p-5 hover:border-[#0289C6]/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#0289C6]" />
                      <h3 className="font-serif-heading text-base font-bold text-[#00223B]">
                        {rec.titulo}
                      </h3>
                    </div>

                    {rec.descricao && (
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-3">
                        {rec.descricao}
                      </p>
                    )}

                    {rec.itens && rec.itens.length > 0 && (
                      <ul className="space-y-2 text-xs sm:text-sm text-[#0A131F]/80">
                        {rec.itens.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DESTAQUE ESPECIAL (Ex: Simulador SISU) */}
          {produto.destaqueEspecial && (
            <div className="bg-gradient-to-br from-[#00223B] to-[#001D33] text-white p-6 sm:p-7 rounded-2xl border-2 border-[#FFBF00]/40 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#FFBF00] text-[#00223B] font-black text-[10px] uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#00223B]" />
                  <span>Destaque Exclusivo</span>
                </div>

                <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-1">
                  {produto.destaqueEspecial.titulo}
                </h3>
                
                {produto.destaqueEspecial.subtitulo && (
                  <p className="text-xs sm:text-sm text-[#FFBF00] font-bold mb-3">
                    {produto.destaqueEspecial.subtitulo}
                  </p>
                )}

                <p className="text-xs sm:text-sm text-[#E1E5E8] leading-relaxed mb-4">
                  {produto.destaqueEspecial.descricao}
                </p>

                {produto.destaqueEspecial.itens && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/15">
                    {produto.destaqueEspecial.itens.map((it, i) => (
                      <div key={i} className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#FFBF00] shrink-0 mt-0.5" />
                        <span className="text-xs text-white leading-snug">{it}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* RODAPÉ DO MODAL */}
        <div className="bg-[#F8FAFC] px-4 sm:px-8 py-3.5 sm:py-4 border-t border-[#E1E5E8] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#CBD5E1] text-[#0A131F] hover:bg-[#E2E8F0] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#004B7C]" />
            <span>Voltar para Produtos</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-xl uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
