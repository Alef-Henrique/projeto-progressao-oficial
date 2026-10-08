export interface ComboItem {
  id: string;
  tag: string;
  titulo: string;
  texto: string;
  itens: string[];
  destaque?: boolean;
  ctaLabel?: string;
  ctaUrl?: string;
}

export interface ProdutoItem {
  id: string;
  badge: string;
  titulo: string;
  subtitulo: string;
  itens: string[];
  ctaLabel?: string;
  ctaUrl?: string;
}

export interface OpaItem {
  sigla: string;
  nome: string;
  texto: string;
  itens: string[];
  ctaLabel?: string;
  ctaUrl?: string;
}

export interface CombosProdutosData {
  titulo: string;
  subtitulo: string;
  textoIntrodutorio: string;
  combos: ComboItem[];
  produtos: ProdutoItem[];
  opa: OpaItem;
}

export const COMBOS_PRODUTOS_DATA: CombosProdutosData = {
  titulo: 'Combos e Produtos',
  subtitulo: 'Turmas de concurso público',
  textoIntrodutorio: 'Os combos complementam a turma presencial para aumentar o desempenho, o treino de prova, a interpretação e a constância nos estudos. A proposta não é só "mais conteúdo", e sim mais desempenho, estratégia, treino, direcionamento e preparação real para a prova.',
  
  combos: [
    {
      id: 'combo-multi',
      tag: 'Combo',
      titulo: 'Combo Multi',
      texto: 'A preparação mais completa, com aprofundamento, treino contínuo, questões estratégicas e reforço dos pontos mais difíceis.',
      itens: [
        'Turma presencial',
        'Operação Desempenho',
        'Aulões Estratégicos Prog',
        'Central de Questões Progressão',
        'Bônus: Aulão Extra Personalizado'
      ],
      destaque: true,
      ctaLabel: 'QUERO ME MATRICULAR',
      ctaUrl: '#inscricao'
    },
    {
      id: 'combo-aprov',
      tag: 'Combo',
      titulo: 'Combo Aprov',
      texto: 'Treinar o aluno para a prova real, desenvolver estratégia e melhorar o desempenho.',
      itens: [
        'Turma presencial',
        'Operação Desempenho (simulados presenciais + correções estratégicas)'
      ],
      ctaLabel: 'QUERO ME MATRICULAR',
      ctaUrl: '#inscricao'
    },
    {
      id: 'sem-combo',
      tag: 'Combo',
      titulo: 'Sem combo',
      texto: 'Somente a turma tradicional presencial.',
      itens: [
        'Turma presencial'
      ],
      ctaLabel: 'QUERO ME MATRICULAR',
      ctaUrl: '#inscricao'
    }
  ],

  produtos: [
    {
      id: 'produto-01',
      badge: 'Produto 01',
      titulo: 'Operação Desempenho',
      subtitulo: 'Pacote de simulados · treino real de prova',
      itens: [
        'Simulado presencial: aplicado na unidade, em ambiente controlado, com tempo cronometrado e questões no estilo da banca. Aos domingos, das 8h30 às 12h30',
        'Gabarito comentado: no mesmo dia ou no dia seguinte, com comentários objetivos',
        'Correção ao vivo (online): no domingo seguinte ao simulado, das 9h às 13h, focada nas questões mais erradas, mais difíceis e estratégicas. Nem todas as questões são corrigidas',
        'Diferenciais: ranking por turma e geral, destaque do Top 10, análise de desempenho por matéria e direcionamento de estudo'
      ],
      ctaLabel: 'QUERO ME MATRICULAR',
      ctaUrl: '#inscricao'
    },
    {
      id: 'produto-02',
      badge: 'Produto 02',
      titulo: 'Aulões Estratégicos Prog',
      subtitulo: 'Aos domingos · horários definidos pela coordenação',
      itens: [
        'Pontos difíceis do edital e temas com maior índice de erro',
        'Assuntos mais cobrados pelas bancas, interpretação e raciocínio',
        'Questões estratégicas e revisão direcionada'
      ],
      ctaLabel: 'QUERO ME MATRICULAR',
      ctaUrl: '#inscricao'
    },
    {
      id: 'produto-03',
      badge: 'Produto 03',
      titulo: 'Central de Questões Progressão',
      subtitulo: 'Desafios mensais organizados pela coordenação pedagógica',
      itens: [
        'Bateria de questões: por disciplina (conforme o módulo vigente), das principais bancas, nos temas mais cobrados e com nível estratégico de dificuldade',
        'Questões comentadas: comentários objetivos, explicação dos erros mais comuns e direcionamento de raciocínio',
        'Formato: PDF, WhatsApp, Google Forms, formulários online e gabaritos digitais'
      ],
      ctaLabel: 'QUERO ME MATRICULAR',
      ctaUrl: '#inscricao'
    },
    {
      id: 'produto-04',
      badge: 'Produto 04',
      titulo: 'Aulão Extra Personalizado',
      subtitulo: 'Bônus do Combo Multi',
      itens: [
        '3 aulões aos domingos, das 8h40 às 12h30',
        'Matéria e professor escolhidos por votação dos alunos'
      ],
      ctaLabel: 'QUERO ME MATRICULAR',
      ctaUrl: '#inscricao'
    }
  ],

  opa: {
    sigla: 'OPA',
    nome: 'Orientação Pedagógica Avançada',
    texto: 'Direcionamento, acompanhamento e estratégia durante toda a preparação.',
    itens: [
      'Organizar os estudos e identificar pontos fracos',
      'Melhorar o desempenho e manter constância e disciplina',
      'Receber orientação sobre foco de estudo e acompanhamento da evolução'
    ],
    ctaLabel: 'QUERO ME MATRICULAR',
    ctaUrl: '#inscricao'
  }
};
