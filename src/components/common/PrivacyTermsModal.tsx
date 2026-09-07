import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { useRouter } from '../routing/RouterContext';
import { SITE_CONFIG } from '../../config/siteConfig';

export const PrivacyTermsModal: React.FC = () => {
  const { isPrivacyModalOpen, closePrivacyModal, privacyModalType } = useRouter();

  if (!isPrivacyModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-fadeIn"
      onClick={closePrivacyModal}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden border border-[#E1E5E8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#004B7C] text-white px-6 py-4 flex items-center justify-between border-b border-[#015E96]">
          <div className="flex items-center gap-2.5">
            {privacyModalType === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#0289C6]" />
            ) : (
              <FileText className="w-5 h-5 text-[#0289C6]" />
            )}
            <h2 id="modal-title" className="font-serif-heading text-lg sm:text-xl font-bold">
              {privacyModalType === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
            </h2>
          </div>
          <button
            type="button"
            onClick={closePrivacyModal}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-sm text-[#0A131F]/80 leading-relaxed flex flex-col gap-4">
          {privacyModalType === 'privacy' ? (
            <>
              <p className="font-semibold text-[#004B7C]">
                Compromisso com a Privacidade e Proteção de Dados (LGPD)
              </p>
              <p>
                O <strong>{SITE_CONFIG.institutionName}</strong> preza pela segurança, confidencialidade e privacidade de todos os alunos, responsáveis, professores e visitantes de nossa plataforma online.
              </p>
              <h3 className="font-bold text-[#004B7C] text-base pt-2">1. Coleta e Uso de Informações</h3>
              <p>
                As informações fornecidas voluntariamente em nossos formulários de contato e pré-matrícula (tais como nome, e-mail, telefone e curso de interesse) são utilizadas exclusivamente para fins de atendimento pedagógico, esclarecimento de dúvidas e apresentação de nossas turmas escolares e preparatórias.
              </p>
              <h3 className="font-bold text-[#004B7C] text-base pt-2">2. Não Compartilhamento com Terceiros</h3>
              <p>
                O Progressão Caxias não comercializa, não aluga e não repassa quaisquer dados pessoais de seus usuários para empresas parceiras ou terceiros com fins publicitários não autorizados.
              </p>
              <h3 className="font-bold text-[#004B7C] text-base pt-2">3. Direitos do Titular</h3>
              <p>
                A qualquer momento, o titular dos dados pode solicitar a retificação, atualização ou exclusão de suas informações através de nossa secretaria em Duque de Caxias ou pelo e-mail oficial: {SITE_CONFIG.email}.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#004B7C]">
                Termos e Condições Gerais de Uso
              </p>
              <p>
                Bem-vindo ao portal institucional do <strong>{SITE_CONFIG.institutionName}</strong>. Ao navegar por este site, você concorda com as disposições estabelecidas neste documento.
              </p>
              <h3 className="font-bold text-[#004B7C] text-base pt-2">1. Direitos Autorais e Propriedade Intelectual</h3>
              <p>
                Todo o conteúdo institucional, incluindo logotipos, textos, metodologias descritas, materiais didáticos e imagens, é de propriedade exclusiva do Curso Progressão Caxias ou utilizado sob autorização devida, sendo proibida a reprodução parcial ou total sem anuência prévia por escrito.
              </p>
              <h3 className="font-bold text-[#004B7C] text-base pt-2">2. Informações de Cursos e Matrículas</h3>
              <p>
                As informações relativas a turmas, horários e calendários de concursos estão sujeitas a confirmação direta com a secretaria acadêmica no momento da formalização do contrato de prestação de serviços educacionais.
              </p>
              <h3 className="font-bold text-[#004B7C] text-base pt-2">3. Foro</h3>
              <p>
                Fica eleito o foro da Comarca de Duque de Caxias, Estado do Rio de Janeiro, para dirimir eventuais controvérsias decorrentes da utilização deste portal.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#E1E5E8]/30 px-6 py-3.5 border-t border-[#E1E5E8] flex justify-end">
          <button
            type="button"
            onClick={closePrivacyModal}
            className="px-5 py-2 bg-[#004B7C] hover:bg-[#015E96] text-white rounded-xl text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#0289C6]"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
