import React from 'react';
import { useRouter } from '../components/routing/RouterContext';
import { ENSINO_MEDIO_DETALHES_DATA } from '../components/EnsinoMedio/detalhes/data';
import { EnsinoMedioDetalhe } from '../components/EnsinoMedio/detalhes/EnsinoMedioDetalhe';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';

interface EnsinoMedioDetalhePageProps {
  turmaId?: string;
}

export const EnsinoMedioDetalhePage: React.FC<EnsinoMedioDetalhePageProps> = ({ turmaId }) => {
  const { currentPath, navigate } = useRouter();

  // Extract slug from path if not explicitly provided
  // Supports: /colegio/ensino-medio/1-serie or /ensino-medio/1-serie
  let slug = turmaId;
  if (!slug) {
    const clean = currentPath.split('?')[0].split('#')[0].replace(/\/$/, '');
    const parts = clean.split('/');
    slug = parts[parts.length - 1];
  }

  const turma = ENSINO_MEDIO_DETALHES_DATA[slug];

  if (!turma) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#F8FAFC]">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider mb-2">
          Turma Não Encontrada
        </span>
        <h1 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#00223B] mb-3">
          Turma do Ensino Médio em Atualização
        </h1>
        <p className="text-sm text-[#64748B] max-w-md mb-8 leading-relaxed">
          Não localizamos os detalhes desta turma. Retorne para a página do Ensino Médio para conferir as turmas disponíveis.
        </p>
        <button
          type="button"
          onClick={() => navigate('/colegio/ensino-medio')}
          className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#00385F] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o Ensino Médio</span>
        </button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${turma.titulo} - Colégio Progressão Caxias`}
        description={`Detalhes oficiais da turma ${turma.titulo}: período ${turma.periodo}, carga horária ${turma.cargaHoraria}, horários, monitorias e grade curricular.`}
        canonicalPath={`/colegio/ensino-medio/${turma.slug}`}
      />
      <EnsinoMedioDetalhe turma={turma} />
    </>
  );
};
