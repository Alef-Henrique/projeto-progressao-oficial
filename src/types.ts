export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
  description: string;
  detailedText: string;
  image?: string;
  classFormat?: string;
  targetAudience: string | string[];
  disciplines: string[];
  disciplinas?: string[];
  differentials: string[];
  methodology?: string;
  methodologySummary?: string;
  simuladosFrequency?: string;
  simuladosInfo?: string;
  concursosAtendidos: string[];
  resultsPlaceholder?: string;
  testimonialsPlaceholder?: string;
  faqs: { question: string; answer: string }[];
}

export interface SchoolSegmentData {
  id: string;
  slug: string;
  title: string;
  ageRange: string;
  badge: string;
  image: string;
  summary: string;
  pedagogicalProposal: string;
  developmentGoals: string[];
  activities: string[];
  methodologyPoints: string[];
  differentials: string[];
  faqs: { question: string; answer: string }[];
}

export interface TeacherMember {
  id: string;
  name: string;
  role: string;
  category: 'direcao' | 'coordenacao' | 'professores' | 'pedagogico';
  discipline?: string;
  bio: string;
  credentials: string[];
  imagePlaceholderText: string;
  image?: string;
}

export interface TestimonialItem {
  id: string;
  studentName: string;
  course: string;
  year: string;
  approval: string;
  testimonial: string;
  avatarText: string;
}

export interface StructureItem {
  id: string;
  title: string;
  category: 'salas' | 'estudo' | 'pedagogico' | 'convivencia';
  description: string;
  image: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface DidacticMaterialItem {
  id: string;
  category: 'colegio' | 'cursos';
  title: string;
  segment: string;
  description: string;
  features?: string[];
  image: string;
  badge?: string;
  link?: string;
}
