import React, { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2,
  AlertCircle, Building2, ExternalLink, ShieldCheck
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { useRouter } from '../components/routing/RouterContext';
import { WhatsAppIcon } from '../components/common/WhatsAppButton';
import { RDStationForm } from '../components/rdstation/RDStationForm';
import {
  SITE_CONFIG,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  WHATSAPP_DEFAULT_MESSAGE
} from '../config/siteConfig';



export const ContatoPage: React.FC = () => {

  const { openPrivacyModal } = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'militar',
    message: '',
    privacyAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle phone mask (BR format: (XX) 9XXXX-XXXX)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData(prev => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, informe um e-mail válido.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 14) {
      setErrorMessage('Por favor, informe um telefone ou WhatsApp válido com DDD.');
      return;
    }
    if (!formData.privacyAccepted) {
      setErrorMessage('Você deve concordar com os termos de privacidade para enviar.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao enviar mensagem.');
      }

      setIsSuccess(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'militar',
        message: '',
        privacyAccepted: false,
      });

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Não foi possível enviar sua mensagem. Tente novamente.'
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Fale Conosco - Matrículas e Atendimento em Duque de Caxias"
        description="Entre em contato com o Curso Progressão Caxias. Tire dúvidas sobre turmas do Colégio e Cursos Preparatórios, agende visitas e matrículas."
        canonicalPath="/contato"
      />

      <Breadcrumbs items={[{ label: 'Contato & Matrículas' }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004B7C] via-[#015E96] to-[#0A131F] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#015E96]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-4 border border-white/20">
            <Building2 className="w-4 h-4 text-white" />
            <span className="text-white">Unidade Duque de Caxias / RJ</span>
          </div>
          <h1 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            ESTAMOS PRONTOS PARA ATENDER VOCÊ
          </h1>
          <p className="text-sm sm:text-lg text-[#E1E5E8]/90 max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre matrículas, horários de turmas, material didático e venha conhecer as instalações do Progressão Caxias.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Info & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
                Canais Institucionais
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1 mb-3">
                INFORMAÇÕES DA UNIDADE
              </h2>
              <p className="text-sm text-[#0A131F]/70 leading-relaxed">
                Nossa equipe de secretários e orientadores pedagógicos está à disposição para esclarecer qualquer dúvida sobre nosso projeto de ensino.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#0289C6]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0289C6] uppercase tracking-wider block">
                    Endereço
                  </span>
                  <p className="text-sm font-semibold text-[#004B7C]">
                    {SITE_CONFIG.address}
                  </p>
                  <p className="text-xs text-[#0A131F]/60 mt-0.5">
                    Centro • Ponto de Referência Próximo à Estação
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0289C6] uppercase tracking-wider block">
                    WhatsApp Matrículas
                  </span>
                  <p className="text-sm font-semibold text-[#004B7C]">
                    {WHATSAPP_DISPLAY}
                  </p>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0289C6] hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#004B7C] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-[#0289C6]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0289C6] uppercase tracking-wider block">
                    E-mail Oficial
                  </span>
                  <p className="text-sm font-semibold text-[#004B7C]">
                    {SITE_CONFIG.email}
                  </p>
                  <p className="text-xs text-[#0A131F]/60 mt-0.5">
                    Envio de dúvidas e documentações
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E1E5E8] shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#015E96] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#0289C6]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#0289C6] uppercase tracking-wider block">
                    Horário de Atendimento
                  </span>
                  <p className="text-sm font-semibold text-[#004B7C]">
                    {SITE_CONFIG.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>


          <RDStationForm
            formId="caxias_lp_geral-6b17fb580118e7e46ef8"
          />
        </div>
      </section>

      {/* Localização / Mapa Interativo Section */}
      <section className="py-16 bg-[#E1E5E8]/30 border-y border-[#E1E5E8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-semibold text-[#0289C6] uppercase tracking-wider">
              Localização Privilegiada
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#004B7C] mt-1">
              COMO CHEGAR AO PROGRESSÃO CAXIAS
            </h2>
            <p className="text-xs sm:text-sm text-[#0A131F]/70 max-w-xl mx-auto mt-2">
              Unidade de fácil acesso no centro de Duque de Caxias, próxima aos principais eixos de transporte público da Baixada Fluminense.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-[#E1E5E8] shadow-md grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 h-80 sm:h-96 relative bg-[#E1E5E8] flex items-center justify-center">
              {/* Map presentation */}
              <iframe
                title="Mapa de Localização - Curso Progressão Caxias"
                src="https://maps.google.com/maps?q=Rua+Bento+Gon%C3%A7alves+23,+Duque+de+Caxias+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-[#004B7C] text-white">
              <div>
                <h3 className="font-serif-heading text-xl font-bold mb-4 text-white">
                  Referência de Acesso
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#E1E5E8]/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span>Próximo à Estação Ferroviária de Duque de Caxias (SuperVia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span>Ampla rede de linhas de ônibus municipais e intermunicipais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0289C6] shrink-0 mt-0.5" />
                    <span>Região com estacionamentos conveniados e comércio consolidado</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0289C6] hover:bg-white hover:text-[#004B7C] text-white py-3 rounded-xl font-bold text-xs transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
