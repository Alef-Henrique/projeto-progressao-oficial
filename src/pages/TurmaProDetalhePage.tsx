import React from 'react';
import { useRouter } from '../components/routing/RouterContext';
import { TURMAS_PRO_DETALHES_DATA } from '../components/TurmasPro/detalhes/data';
import { TurmaProDetalhe } from '../components/TurmasPro/detalhes/TurmaProDetalhe';
import { ArrowLeft, AlertCircle } from 'lucide-react';

interface TurmaProDetalhePageProps {
  turmaId?: string;
}

export const TurmaProDetalhePage: React.FC<TurmaProDetalhePageProps> = ({ turmaId }) => {
  const { currentPath, navigate } = useRouter();

  // Extract slug from currentPath if not passed as prop
  // e.g. /concursos/turmas-pro/pro-socio-concurseiro
  const slug = turmaId || currentPath.replace(/^\/concursos\/turmas-pro\/?/, '').replace(/\/$/, '');

  const turma = TURMAS_PRO_DETALHES_DATA[slug];

  if (!turma) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#F8FAFC]">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-[#0289C6] uppercase tracking-wider mb-2">
          Página em Atualização
        </span>
        <h1 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#00223B] mb-3">
          Turma em Preparação Pedagógica
        </h1>
        <p className="text-sm text-[#64748B] max-w-md mb-8 leading-relaxed">
          As informações detalhadas desta turma estão sendo consolidadas. Você pode retornar ao quadro principal ou falar diretamente com a secretaria.
        </p>
        <button
          type="button"
          onClick={() => {
            navigate('/concursos#turmas-pro');
            setTimeout(() => {
              document.getElementById('turmas-pro')?.scrollIntoView({ behavior: 'smooth' });
            }, 150);
          }}
          className="inline-flex items-center gap-2 bg-[#004B7C] hover:bg-[#00385F] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Turmas Pro</span>
        </button>
      </div>
    );
  }

  return <TurmaProDetalhe turma={turma} />;
};