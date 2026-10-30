import React from 'react';
import { CreditCard, Tag, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { ConcursoValoresInfo } from '../../data/concursosData';
import { WHATSAPP_NUMBER } from '../../config/siteConfig';

interface TabelaValoresTurmaProps {
  valoresInfo: ConcursoValoresInfo;
  turmaOuConcursoNome?: string;
  showCta?: boolean;
}

export const TabelaValoresTurma: React.FC<TabelaValoresTurmaProps> = ({
  valoresInfo,
  turmaOuConcursoNome = 'Banco do Brasil',
  showCta = true
}) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Vi os valores da turma de ${turmaOuConcursoNome} no site e gostaria de garantir minha vaga no 1º Lote promocional (Sinal de R$ 99,00 + 7x R$ 236,01 no boleto). Podem me ajudar?`
  )}`;

  return (
    <div className="bg-white rounded-2xl border border-[#CBD5E1] p-5 sm:p-7 shadow-sm">
      {/* Cabeçalho do Bloco */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-8 h-8 rounded-lg bg-[#004B7C]/10 text-[#004B7C] flex items-center justify-center shrink-0">
            <CreditCard className="w-4 h-4" />
          </div>
          <h3 className="font-serif-heading text-xl sm:text-2xl font-black text-[#00385E]">
            {valoresInfo.titulo}
          </h3>
        </div>
        {valoresInfo.subtitulo && (
          <p className="text-xs sm:text-sm text-[#64748B] ml-10">
            {valoresInfo.subtitulo}
          </p>
        )}
      </div>

      {/* Formas de Pagamento em Lista (conforme imagem) */}
      <div className="space-y-2 mb-6 ml-1 text-xs sm:text-sm text-[#0A131F]">
        {valoresInfo.aVista && (
          <div className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00223B] mt-2 shrink-0" />
            <span>
              <strong className="font-bold text-[#00223B]">À vista: </strong>
              <span className="text-[#0A131F] font-medium">{valoresInfo.aVista}</span>
            </span>
          </div>
        )}

        {valoresInfo.cartaoCredito && (
          <div className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00223B] mt-2 shrink-0" />
            <span>
              <strong className="font-bold text-[#00223B]">Cartão de crédito: </strong>
              <span className="text-[#0A131F] font-medium">{valoresInfo.cartaoCredito}</span>
            </span>
          </div>
        )}

        {valoresInfo.boletoBancario && (
          <div className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00223B] mt-2 shrink-0" />
            <span>
              <strong className="font-bold text-[#00223B]">Boleto bancário: </strong>
              <span className="text-[#0A131F] font-medium">{valoresInfo.boletoBancario}</span>
            </span>
          </div>
        )}
      </div>

      {/* Tabela de Lotes (idêntica ao modelo oficial) */}
      <div className="overflow-x-auto rounded-xl border border-[#004B7C]/30 shadow-xs mb-5">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="bg-[#004B7C] text-white text-xs sm:text-sm uppercase tracking-wider font-bold">
              <th scope="col" className="py-3 px-4 sm:px-5 font-bold border-r border-white/20 w-1/2">
                Lote
              </th>
              <th scope="col" className="py-3 px-4 sm:px-5 font-bold border-r border-white/20 w-1/4">
                Sinal
              </th>
              <th scope="col" className="py-3 px-4 sm:px-5 font-bold w-1/4">
                Cotas no boleto
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#CBD5E1] text-xs sm:text-sm text-[#0A131F] font-medium">
            {valoresInfo.lotes.map((item, idx) => {
              const isFirst = idx === 0;
              return (
                <tr 
                  key={idx}
                  className={`transition-colors hover:bg-[#F1F5F9]/80 ${
                    isFirst ? 'bg-[#F0F7FD]/60' : idx % 2 === 1 ? 'bg-[#F8FAFC]' : 'bg-white'
                  }`}
                >
                  <td className="py-3.5 px-4 sm:px-5 border-r border-[#CBD5E1] text-[#00223B] font-semibold">
                    <div className="flex items-center gap-2">
                      <span>{item.lote}</span>
                      {item.destaque && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FFBF00] text-[#00223B] shadow-2xs">
                          <Sparkles className="w-3 h-3" />
                          <span>{item.destaque}</span>
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 border-r border-[#CBD5E1] font-bold text-[#004B7C]">
                    {item.sinal}
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 font-bold text-[#00223B]">
                    {item.cotasBoleto}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Observação e CTA de Garantia de Vaga */}
      {showCta && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#E1E5E8]">
          <div className="text-[11px] text-[#64748B] text-center sm:text-left">
            * Valores promocionais por lote. As vagas no 1º lote são limitadas e sujeitas a encerramento sem aviso prévio.
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004B7C] hover:bg-[#00223B] text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-xs transition-all active:scale-[0.98] shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#FFBF00]" />
            <span>Garantir 1º Lote no WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FFBF00]" />
          </a>
        </div>
      )}
    </div>
  );
};
