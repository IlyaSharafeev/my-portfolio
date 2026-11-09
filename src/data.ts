export const profile = {
  name: 'Ilya Sharafeev',
  role: 'Frontend Engineer',
  stackLine: 'React / Next.js · Vue / Nuxt · Angular · TypeScript',
  summary:
    'Almost 5 years of commercial experience building product frontends end to end: architecture, complex forms, auth, payments, tests in CI and performance. I can start from zero or join an existing codebase and work inside its conventions.',
  location: 'Remote from Bulgaria (EET, GMT+2)',
  availability: 'Open to full-time and long-term contract roles',
  cv: 'https://github.com/IlyaSharafeev/cv/raw/main/CV_Ilya_Sharafeev_Frontend_Fullstack.pdf',
};

export const contacts = [
  { label: 'Email', value: 'ilyasharafeev01@gmail.com', href: 'mailto:ilyasharafeev01@gmail.com' },
  { label: 'LinkedIn', value: 'ilya-sharafeev', href: 'https://www.linkedin.com/in/ilya-sharafeev-6428891ba/' },
  { label: 'GitHub', value: 'IlyaSharafeev', href: 'https://github.com/IlyaSharafeev' },
  { label: 'Telegram', value: '@IlyaSharafeev', href: 'https://t.me/IlyaSharafeev' },
];

export interface Job {
  company: string;
  role: string;
  period: string;
  text: string;
  links?: { label: string; href: string }[];
  stack: string[];
}

export const experience: Job[] = [
  {
    company: 'ORAP GmbH',
    role: 'Frontend Developer',
    period: 'Apr 2026 – now',
    text: "Two live multi-language e-commerce storefronts on Nuxt with SSR. I own orap.de's frontend almost end to end — 243 of 256 commits: catalogue, cart, bulk article search for wholesale, customer dashboard, PayPal checkout. Auth with rotating refresh tokens; led the Nuxt 3 → 4 upgrade on the live shop with tests written first; Vitest, Playwright and axe-core in CI.",
    links: [
      { label: 'orap.de', href: 'https://orap.de' },
      { label: 'handlerparts.com', href: 'https://handlerparts.com' },
    ],
    stack: ['Nuxt 3 / 4', 'Vue 3', 'TypeScript', 'Pinia', 'Vitest', 'Playwright'],
  },
  {
    company: 'ICGS (Intercomputer Global Services GmbH)',
    role: 'Frontend Developer',
    period: 'Apr 2026 – Oct 2026',
    text: 'B2B e-money and payments platform (fintech, EMI). KYC / KYB onboarding for companies and individuals: multi-step forms, cross-field validation, file uploads and a field-level review cycle with the back office. User profile app with 2-step verification (authenticator, SMS, passkeys).',
    stack: ['Angular 20–21', 'Signals', 'RxJS', 'Angular Material', 'Vitest'],
  },
  {
    company: 'Gelios',
    role: 'Founding Frontend Engineer',
    period: 'Jan 2025 – Apr 2026',
    text: 'EdTech platform from zero: student portal, teacher portal and CRM in one Turborepo monorepo with a shared data layer and a Storybook component library (−50% duplicated code). CRM tables with 1 000+ rows, RBAC, Stripe and PayPal; UI CPU usage −60% with list virtualisation and TanStack Query caching; real-time over WebSockets.',
    stack: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'Storybook', 'Turborepo'],
  },
  {
    company: 'Onix-Systems',
    role: 'Frontend Engineer',
    period: 'Dec 2022 – Jan 2025',
    text: 'Client projects in FinTech, e-commerce and SaaS: Vue 2 → 3 migration (−40% legacy code), JavaScript → TypeScript migration (−30% runtime errors), SSR platform on Nuxt (35% faster first load), cross-platform mobile app on Ionic + Capacitor.',
    stack: ['Vue 2 / 3', 'Nuxt', 'TypeScript', 'Ionic', 'Capacitor'],
  },
  {
    company: 'Egolist',
    role: 'Frontend Developer',
    period: 'Jan 2022 – Dec 2022',
    text: 'Marketplace on Vue: WebSocket layer for 10 000+ concurrent connections, GitLab CI/CD that turned manual releases into one click.',
    stack: ['Vue', 'WebSockets', 'GitLab CI'],
  },
];

export interface Project {
  name: string;
  text: string;
  stack: string[];
  demo?: string;
  code: string;
  note?: string;
}

export const projects: Project[] = [
  {
    name: 'CRM Leads',
    text: 'Leads table with search, filters, sorting and pagination kept in the URL, bulk status changes, a lead page with call / email / comment notes and a create-lead form with validation.',
    stack: ['Vue 3', 'TypeScript', 'Vuetify', 'Pinia', 'Vue Router', 'Vite'],
    demo: 'https://crm-leads-orcin.vercel.app',
    code: 'https://github.com/IlyaSharafeev/crm-leads',
  },
  {
    name: 'Payment page',
    text: 'Payment form with CVV / OTP and phone inputs, field validation and country lookup.',
    stack: ['Nuxt 3', 'PrimeVue', 'TypeScript'],
    demo: 'https://geniusee-payment.vercel.app',
    code: 'https://github.com/IlyaSharafeev/geniusee-payment',
    note: 'Test assignment',
  },
  {
    name: 'Secure Note',
    text: 'Browser extension for per-site notes with search and JSON export.',
    stack: ['Manifest V3', 'JavaScript', 'Web Components'],
    code: 'https://github.com/IlyaSharafeev/secure-note-extension',
    note: 'Test assignment',
  },
];

export const stack = [
  { group: 'React', items: ['React 18', 'Next.js (App Router, SSR / SSG)', 'TanStack Query', 'Zustand', 'Redux Toolkit', 'React Testing Library'] },
  { group: 'Vue', items: ['Vue 3', 'Nuxt 3 & 4', 'Pinia', 'Vuex', 'Vuetify', 'Quasar'] },
  { group: 'Angular', items: ['Angular 20–21', 'Signals', 'RxJS', 'Reactive Forms', 'Angular Material'] },
  { group: 'Core', items: ['TypeScript', 'Tailwind CSS', 'SCSS', 'Storybook', 'Turborepo'] },
  { group: 'Testing', items: ['Vitest', 'msw', 'Playwright', 'axe-core', 'Jest', 'Cypress'] },
  { group: 'Backend & DevOps', items: ['Node.js', 'REST', 'GraphQL', 'WebSockets', 'Docker', 'GitHub Actions', 'GitLab CI'] },
];

export const education = {
  degree: 'M.Sc. in Computer Science',
  school: 'Oles Honchar Dnipro National University',
  year: '2025',
  languages: ['Ukrainian — native', 'Russian — fluent', 'English — B1'],
};
