import { useEffect } from 'react';

interface RDStationFormProps {
  formId: string;
}

const RD_SCRIPT_URL =
  'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';

export const RDStationForm = ({ formId }: RDStationFormProps) => {
  useEffect(() => {
    let cancelled = false;
    let initialized = false;

    const initializeForm = () => {
      if (cancelled || initialized) return;

      const RDStationForms = (
        window as typeof window & {
          RDStationForms?: new (
            id: string,
            token: string
          ) => { createForm: () => void };
        }
      ).RDStationForms;

      if (!RDStationForms) return;

      initialized = true;
      new RDStationForms(formId, 'null').createForm();
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${RD_SCRIPT_URL}"]`
    );

    if (existingScript) {
      if (
        (
          window as typeof window & {
            RDStationForms?: unknown;
          }
        ).RDStationForms
      ) {
        initializeForm();
      } else {
        existingScript.addEventListener('load', initializeForm);
      }

      return () => {
        cancelled = true;
        existingScript.removeEventListener('load', initializeForm);
      };
    }

    const script = document.createElement('script');
    script.src = RD_SCRIPT_URL;
    script.async = true;
    script.onload = initializeForm;
    script.onerror = () => {
      console.error('Não foi possível carregar o formulário RD Station.');
    };

    document.body.appendChild(script);

    return () => {
      cancelled = true;
      script.onload = null;
      script.onerror = null;
    };
  }, [formId]);

  return <div role="main" id={formId} />;
};