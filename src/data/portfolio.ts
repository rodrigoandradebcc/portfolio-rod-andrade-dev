import type {
  PersonalInfo,
  Experience,
  Skill,
  Education,
  Language,
  Stat,
  NavItem,
} from '../types/portfolio'
import brbatelLogo from '../assets/brbatel-logo.png'
import claudeCodeIcon from '../assets/claude-code-icon.svg'
import fleyeLogo from '../assets/fleye-logo.png'
import izifitLogo from '../assets/izifit-logo.svg'
import mcpIcon from '../assets/mcp-icon.svg'

export const personalInfo: PersonalInfo = {
  name: 'Rodrigo Andrade',
  title: 'Software Engineer | AI | React | React Native | Next.js | Node.js | Frontend & Mobile',
  location: 'Belém, Pará, Brasil',
  summary:
    'Software Engineer com experiência em desenvolvimento Frontend, Mobile e Full Stack. Atuação em empresas como SmartFit e RD Raia Drogasil, além de startups em fases iniciais, o que me deu uma visão ampla de ciclos de produto, desde MVP até escala. Stack principal: ReactJS, React Native, Next.js, TypeScript, Node.js e NestJS. Experiência com Azure, Firebase, REST APIs, GIT Flow e metodologias ágeis. Familiaridade com UI Design e prototipação no Figma. Atualmente utilizando LLMs (Cursor, Claude Code) e MCP no workflow de desenvolvimento, aumentando produtividade e qualidade de entrega de forma consistente.',
  email: 'rodrigoandradebcc@gmail.com',
  phone: '91981401807',
  linkedin: 'https://www.linkedin.com/in/rodandradebcc',
  github: 'https://github.com/rodandradebcc',
}

const companyFavicon = (domain: string) =>
  `https://www.google.com/s2/favicons?sz=128&domain_url=${domain}`

export const experiences: Experience[] = [
  {
    company: 'Vitae Brasil',
    role: 'Software Developer',
    period: 'Jul 2023 — Mar 2026',
    duration: '2 anos 9 meses',
    location: 'Remoto',
    description:
      'Desenvolvimento e manutenção do app Albert, plataforma de cashback e promoções. Atuei em duas frentes: evolução do app legado em Capacitor (Ionic) e construção do novo app em React Native (Expo), incluindo migração de projetos legados.',
    highlights: [
      'Implementação de 4 aplicações web (backoffice, web associados, parceiros e licenciados) com Next.js e CRA',
      'Criação do design system ui-oialbert com Storybook e CI/CD para publicação no npm',
      'Integração com LLMs e MCP do Figma para automação do fluxo design-to-code',
    ],
    stack: [
      'React Native', 'Expo', 'Capacitor', 'Ionic', 'Next.js', 'React',
      'TypeScript', 'Storybook', 'Figma MCP', 'Claude Code', 'Jest', 'Testing Library',
    ],
    logoUrl: companyFavicon('vitaebrasil.com.br'),
    logoFallback: 'VB',
  },
  {
    company: 'Globalsys',
    role: 'Software Developer',
    period: 'Jan 2023 — Dez 2023',
    duration: '1 ano',
    location: 'Remoto',
    description:
      'Desenvolvimento outsourcing para a Let\'s, contribuindo em 4 produtos simultaneamente: Avalia GAB (app de avaliação), Backoffice administrativo, Portal Let\'s e App Let\'s de manutenções.',
    highlights: [
      'Revisão e aprovação de Pull Requests e Pair Programming',
      'Deploy na Azure e publicação nas lojas (iOS/Android)',
      'Persistência offline-first com WatermelonDB',
    ],
    stack: [
      'ReactJS', 'React Native', 'TypeScript', 'Vite', 'Azure',
      'Firebase', 'WatermelonDB', 'MMKV', 'Context API',
    ],
    logoUrl: companyFavicon('globalsys.com.br'),
    logoFallback: 'GS',
  },
  {
    company: 'Fleye',
    role: 'Software Developer',
    period: 'Mar 2023 — Mai 2023',
    duration: '3 meses',
    location: 'Remoto',
    tag: 'Freelancer',
    description:
      'Desenvolvimento Frontend para a DoIT, startup britânica selecionada como plataforma oficial de uma campanha do Rei Charles para incentivo ao voluntariado no Reino Unido.',
    highlights: [
      'Criação de telas e componentes reutilizáveis',
      'Integração com APIs REST',
      'Fluxo de trabalho com Gitflow e GitHub',
    ],
    stack: ['ReactJS', 'React Native', 'TypeScript'],
    logoUrl: fleyeLogo,
    logoFallback: 'FL',
    logoVariant: 'wide',
  },
  {
    company: 'RD Raia Drogasil',
    role: 'Tech Leader',
    period: 'Jun 2022 — Dez 2022',
    duration: '7 meses',
    location: 'Remoto',
    description:
      'Tech Leader no Squad Controlados, responsável pelo módulo de compra de medicamentos com receita. Atuação full stack nas frentes Web, Mobile e Backend, liderando o time técnico e garantindo a qualidade das entregas.',
    highlights: [
      'Liderança técnica do squad Controlados',
      'Fluxo completo: busca, compra e envio de receitas',
      'Atuação full stack: Web, Mobile e Backend',
    ],
    stack: ['ReactJS', 'React Native', 'NestJS', 'Java'],
    logoUrl: companyFavicon('rdsaude.com.br'),
    logoFallback: 'RD',
  },
  {
    company: 'Smart Fit',
    role: 'Engenheiro de Software Front End',
    period: 'Out 2021 — Jun 2022',
    duration: '9 meses',
    location: 'Remoto',
    description:
      'Desenvolvimento Frontend no time de Assinatura da SmartFit. Construção de features incluindo carrinho de planos, tela de detalhes do plano e nova home. Internacionalização e métricas com Google Analytics.',
    highlights: [
      'Carrinho de compras de planos e tela de detalhes',
      'Internacionalização da aplicação',
      'Ajustes dinâmicos de layout baseados em métricas de interação',
    ],
    stack: ['ReactJS', 'Next.js', 'CRA', 'Ruby on Rails'],
    logoUrl: companyFavicon('smartfit.com.br'),
    logoFallback: 'SF',
  },
  {
    company: 'izi.fit',
    role: 'Full Stack Developer',
    period: 'Jun 2021 — Dez 2021',
    duration: '7 meses',
    location: 'Remoto',
    tag: 'Freelancer',
    description:
      'Desenvolvimento Full Stack em startup de saúde, atuando no app mobile, landing page e ferramenta administrativa. Participei das concepções de UI Design da ferramenta administrativa.',
    highlights: [
      'App mobile, landing page e ferramenta administrativa',
      'Concepção de UI Design com foco em UX',
      'Evolução de Mobile → Backend → Full Stack',
    ],
    stack: ['React Native', 'ReactJS', 'Next.js', 'Vite', 'NestJS'],
    logoUrl: izifitLogo,
    logoFallback: 'IZ',
  },
  {
    company: 'Brbatel',
    role: 'Software Developer',
    period: 'Jan 2021 — Set 2021',
    duration: '9 meses',
    location: 'Remoto',
    description:
      'Desenvolvimento Full Stack e UI Design em plataforma de Análise de Crédito e Gerenciamento Financeiro para empresas.',
    highlights: [
      'Frontend com ReactJS e backend com Node.js',
      'Concepção de interface e experiência do usuário',
      'Foco em UX intuitiva para decisão financeira',
    ],
    stack: ['ReactJS', 'Node.js'],
    logoUrl: brbatelLogo,
    logoFallback: 'BR',
    logoVariant: 'xwide',
  },
]

const devicon = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

export const skills: Skill[] = [
  { name: 'React', description: 'Interfaces complexas e reativas', color: 'cyan', icon: devicon('react') },
  { name: 'React Native', description: 'Apps mobile cross-platform', color: 'blue', icon: devicon('reactnative') },
  { name: 'Next.js', description: 'SSR, SSG e full stack', color: 'zinc', icon: devicon('nextjs') },
  { name: 'TypeScript', description: 'Tipagem estática e segura', color: 'blue', icon: devicon('typescript') },
  { name: 'Node.js', description: 'Backend e APIs escaláveis', color: 'lime', icon: devicon('nodejs') },
  { name: 'NestJS', description: 'Backend modular e robusto', color: 'rose', icon: devicon('nestjs') },
  { name: 'Expo', description: 'Dev mobile otimizado', color: 'violet', icon: devicon('expo') },
  { name: 'Vite', description: 'Bundler rápido e moderno', color: 'yellow', icon: devicon('vitejs') },
  { name: 'Storybook', description: 'Design system e documentação', color: 'pink', icon: devicon('storybook') },
  { name: 'Jest', description: 'Testes unitários e integração', color: 'orange', icon: devicon('jest', 'plain') },
  { name: 'Testing Library', description: 'Testes centrados no usuário', color: 'emerald', icon: devicon('vitest') },
  { name: 'Firebase', description: 'Auth, Analytics, Crashlytics', color: 'yellow', icon: devicon('firebase') },
  { name: 'Azure', description: 'Deploy e cloud services', color: 'blue', icon: devicon('azure') },
  { name: 'Figma', description: 'UI Design e prototipação', color: 'violet', icon: devicon('figma') },
  { name: 'Tailwind CSS', description: 'Utility-first CSS', color: 'cyan', icon: devicon('tailwindcss') },
  { name: 'Styled Components', description: 'CSS-in-JS dinâmico', color: 'pink', icon: devicon('styledcomponents') },
  { name: 'Claude Code', description: 'LLM no workflow de dev', color: 'orange', icon: claudeCodeIcon },
  { name: 'MCP', description: 'Protocolo multiagente', color: 'emerald', icon: mcpIcon },
  { name: 'Git Flow', description: 'Versionamento estruturado', color: 'rose', icon: devicon('git') },
  { name: 'REST APIs', description: 'Integração de serviços', color: 'sky', icon: devicon('json', 'plain') },
]

export const education: Education[] = [
  {
    institution: 'CESUPA — Centro Universitário do Estado do Pará',
    degree: 'Bacharelado em Ciências da Computação',
    period: '2012 — 2016',
  },
  {
    institution: 'Rocketseat',
    degree: 'Bootcamp GoStack 13',
    period: '2020',
  },
  {
    institution: 'Rocketseat',
    degree: 'Bootcamp Ignite — Trilha React',
    period: '2021 — 2022',
  },
  {
    institution: 'Origamid',
    degree: 'Web Design, UX/UI Design, HTML, CSS, JavaScript e React',
    period: '2020 — 2022',
  },
  {
    institution: 'UNINASSAU',
    degree: 'Bacharelado em Contabilidade',
    period: '2019 — 2024',
  },
]

export const languages: Language[] = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Profissional' },
  { name: 'Espanhol', level: 'Profissional' },
]

export const stats: Stat[] = [
  { value: '5+', label: 'Anos de experiência em desenvolvimento' },
  { value: 'React', label: 'Especialista em React e ecossistema' },
  { value: 'Mobile', label: 'React Native, Expo, Capacitor' },
  { value: 'Full Stack', label: 'Frontend, Mobile e Backend' },
]

export const competencies = [
  {
    title: 'Frontend & Mobile',
    description: 'React, React Native, Next.js, Expo — interfaces performáticas e acessíveis',
  },
  {
    title: 'Backend & APIs',
    description: 'Node.js, NestJS, REST APIs — serviços escaláveis e bem estruturados',
  },
  {
    title: 'Design System',
    description: 'Storybook, Figma, CI/CD — componentes reutilizáveis com documentação',
  },
  {
    title: 'Qualidade',
    description: 'Jest, Testing Library, code review — entregas com confiança',
  },
  {
    title: 'AI & Produtividade',
    description: 'Claude Code, Cursor, MCP — LLMs integrados ao workflow de desenvolvimento',
  },
  {
    title: 'Produto & Colaboração',
    description: 'De MVP a escala, metodologias ágeis e visão de produto',
  },
]

export const navItems: NavItem[] = [
  { label: 'Resumo', href: '#resumo' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Stacks', href: '#stacks' },
  { label: 'Contato', href: '#contato' },
]
