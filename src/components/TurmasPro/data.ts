export interface TurmaPro {
  id: string;
  turma: string;
  periodo: string;
  carga: string;
  duracao: string;
  bonus: string;
  simulados: string;
  auloes: string;
}

export const TURMAS_PRO_DATA: TurmaPro[] = [
  {
    id: 'pro-socio-concurseiro',
    turma: 'Pro Sócio Concurseiro',
    periodo: '13/10/26 a 30/06/27',
    carga: '198 h',
    duracao: '9 meses',
    bonus: '3 meses',
    simulados: '4',
    auloes: '8 encontros'
  },
  {
    id: 'pro-carreiras-policiais-ciclo-01',
    turma: 'Pro Carreiras Policiais · Ciclo 01',
    periodo: '13/10/26 a 30/06/27',
    carga: '198 h',
    duracao: '9 + 3 de bônus',
    bonus: '3 meses',
    simulados: '4',
    auloes: '8 encontros'
  },
  {
    id: 'pro-carreiras-policiais-turbo',
    turma: 'Pro Carreiras Policiais Turbo',
    periodo: '13/10/26 a 31/03/28',
    carga: '396 h',
    duracao: '18 meses',
    bonus: '2 meses',
    simulados: '8',
    auloes: '9 encontros'
  },
  {
    id: 'pro-turbo-pro01-pro02',
    turma: 'Pro Turbo (Pro 01 + Pro 02)',
    periodo: '13/10/26 a 31/03/28',
    carga: '396 h',
    duracao: '18 meses',
    bonus: '2 meses',
    simulados: '8',
    auloes: '9 encontros'
  },
  {
    id: 'super-pro-carreiras-policiais-ciclo01-ciclo02',
    turma: 'SUPER PRÓ CARREIRAS POLICIAIS (CICLO 01 E CICLO 02)',
    periodo: '09/11/26 a 28/04/28',
    carga: '396 h',
    duracao: '18 meses',
    bonus: '2 meses',
    simulados: '8',
    auloes: '9 encontros'
  },
  {
    id: 'super-pro-pro01-pro02',
    turma: 'Super Pró (Pró 01 + Pró 02)',
    periodo: '09/11/26 a 28/04/28',
    carga: '396 h',
    duracao: '18 meses',
    bonus: '2 meses',
    simulados: '8',
    auloes: '9 encontros'
  },
  {
    id: 'pro-socio-ciclo-02-exercicios',
    turma: 'Pro Sócio Ciclo 02 · Exercícios',
    periodo: '09/11/26 a 30/07/27',
    carga: '198 h',
    duracao: '9 + 3 de bônus',
    bonus: '3 meses',
    simulados: 'não informado',
    auloes: 'não informado'
  }
];
