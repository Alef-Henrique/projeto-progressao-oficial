import { useEffect } from 'react';

interface RDStationFormProps {
  formId: string;
}

export const RDStationForm = ({ formId }: RDStationFormProps) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src =
      'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';

    script.async = true;

    script.onload = () => {
      // @ts-ignore
      new window.RDStationForms(formId, 'null').createForm();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [formId]);

  return (
    <div
      role="main"
      id={formId}
    />
  );
};