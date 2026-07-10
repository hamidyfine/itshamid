import type { SiteContent } from '../types';

export const content = {
  site: {
    name: 'Hamid Yaftian',
    title: 'Hamid Yaftian — Founder & CTO / Frontend Engineer',
    description:
      'Founder & CTO at Rasa Money and a frontend engineer with 10+ years building resilient interfaces at scale. React, TypeScript, micro-frontends.',
    url: 'https://itshamid.me',
    locale: 'en',
    author: 'Hamid Yaftian',
    initials: 'HY',
    ogImage: '/og-default.png',
    shortName: 'itshamid',
    twitter: '@itshamid',
  },
  nav: {
    logo: 'Hamid',
    logoSrc: '/logo.png',
    status: 'Available',
    cta: { label: 'Get in touch', href: '/#contact' },
    links: [
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Blog', href: '/blog' },
      { label: 'Resume', href: '/resume' },
    ],
  },
  hero: {
    pill: { text: 'Founder & CTO @ Rasa Money', href: '/#rasa' },
    title: ['Founder & CTO,', 'Frontend', 'Engineer'],
    bio: 'I lead product and engineering at <strong>Rasa Money</strong> while shipping fast, resilient interfaces at scale. A decade turning fuzzy product ideas into well-tested, maintainable frontends — grounded in <strong>React</strong>, <strong>TypeScript</strong>, and <strong>micro-frontend architecture</strong>.',
    actions: [
      { label: "Let's talk", href: '/#contact', variant: 'orange' },
      { label: 'View experience', href: '/#experience', variant: 'ghost' },
    ],
    tags: ['TypeScript', 'React', 'Next.js', 'GraphQL', 'Micro-frontend', 'Node.js'],
    terminal: {
      title: 'hamid@ubuntu: ~',
      commands: {
        profile: 'cat profile.json',
        run: './run.sh',
      },
      profile: {
        role: 'Founder & CTO / Frontend Engineer',
        building: 'Rasa Money',
        experience: '10+ years',
        stack: ['JavaScript', 'TypeScript', 'React', 'GraphQL'],
        focus: 'micro-frontends',
      },
    },
    stats: [
      { value: '10', suffix: '+', label: 'Years shipping' },
      { value: '40', suffix: '+', label: 'Apps built' },
      { value: '90', suffix: 'K+', label: 'NPM downloads' },
    ],
  },
  rasa: {
    label: 'Currently building',
    title: ['Rasa', 'Money'],
    badges: [
      { text: 'Founded 2026', variant: 'default' },
      { text: 'London, UK', variant: 'default' },
      { text: 'Founder & CTO', variant: 'orange' },
    ],
    description:
      'A personal-finance platform for people who live across currencies. Track spending, budget with intent, and see your whole financial picture — banks, cash, cards, and crypto — in one place.',
    features: [
      { name: 'Multi-currency', description: 'Bank, cash & crypto accounts with live exchange rates baked in.' },
      { name: 'Smart budgets', description: 'Flexible budgeting with overlap detection to curb overspending.' },
      { name: 'Live dashboard', description: 'Income, spending and budget health visualized in real time.' },
      { name: 'Batch import', description: 'Migrate transaction history painlessly via CSV / XLSX.' },
      { name: 'Categorization', description: 'Hierarchical categories for precise, low-effort tracking.' },
      { name: 'Secure auth', description: 'JWT sessions, OAuth, and encrypted data at rest.' },
    ],
  },
  experience: {
    label: 'Career path',
    title: ['Timeline'],
    resumeLink: { label: 'View full resume', href: '/resume' },
    timeline: [
      {
        period: '2026 — Present',
        role: 'Founder & CTO',
        company: 'Rasa Money',
        location: 'London, UK',
        current: true,
        highlights: [
          'Set product direction and own the full stack for a multi-currency personal-finance platform.',
          'Architected a micro-frontend system with React, GraphQL and a shared design system.',
          'Built the CI/CD, testing and observability foundations from zero.',
        ],
      },
      {
        period: '2023 — 2026',
        role: 'Senior Frontend Engineer',
        company: 'Heaptify',
        location: 'London, UK',
        highlights: [
          'Led React + GraphQL micro-frontend work, improving system efficiency ~30%.',
          'Drove unit-test coverage from ~20% to 70%+ with a structured Jest strategy.',
          'Mentored mid-level engineers, cutting review cycle time by 25%.',
        ],
      },
      {
        period: '2021 — 2023',
        role: 'Senior Frontend Developer',
        company: 'Deriv',
        location: 'Cyberjaya, Malaysia',
        highlights: [
          'Shipped 20+ product features on a Storybook-driven design system.',
          'Authored unit tests for 50+ components with Jest & Testing Library.',
          'Ran 100+ code reviews and served as Release Manager.',
        ],
      },
    ],
    sidebar: [
      {
        title: 'Core stack',
        type: 'chips',
        items: ['TypeScript', 'React', 'Vue.js', 'Next.js', 'Redux', 'Zustand', 'GraphQL', 'Node.js'],
      },
      {
        title: 'Testing & quality',
        type: 'chips',
        items: ['Jest', 'Playwright', 'Cypress', 'Vitest', 'Testing Library'],
      },
      {
        title: 'Certifications',
        type: 'list',
        items: [
          'Hands-on with Design Systems',
          'Docker for Developers',
          'Scrum: The Basics — PMI',
          'Agile Software Development',
        ],
      },
    ],
  },
  projects: {
    label: 'Open source & tools',
    title: ['Featured', 'projects'],
    allLink: { label: 'View all projects', href: '/projects' },
    pageTitle: ['All', 'projects'],
    pageDescription:
      "Open-source packages, CLIs and product work — from npm libraries used in production to the platform I'm building today. Everything here I designed, built, or led.",
    seoTitle: 'Projects',
    fallbackDescription: 'No description provided.',
    ariaLabels: {
      viewOnGitHub: 'View {name} on GitHub',
      visit: 'Visit {name}',
    },
    manual: {
      'rasa-money': {
        description:
          'A personal-finance platform for people who live across currencies — multi-currency accounts, smart budgets, a live dashboard and bulk import. Founded and led as CTO.',
        url: 'https://rasamoney.com',
        homepage: 'https://rasamoney.com',
      },
    },
    categories: [
      { id: 'flagship', label: 'Flagship' },
      { id: 'npm', label: 'Published on npm' },
      { id: 'tools', label: 'Tools & experiments' },
      { id: 'misc', label: 'Other projects' },
    ],
  },
  blog: {
    label: 'Writing',
    title: ['From the', 'blog'],
    allLink: { label: 'View all posts', href: '/blog' },
    pageTitle: ['Notes on', 'frontend', 'testing & building things.'],
    pageDescription:
      'Field notes from a decade of shipping interfaces at scale — micro-frontend architecture, testing strategy, developer tooling, and the occasional founder diary from building Rasa Money.',
    seoTitle: 'Blog',
    homeFeaturedCount: 3,
    featuredKicker: 'Featured',
    minRead: 'min read',
    readPost: 'Read post',
    emailAriaLabel: 'Email address',
    filters: ['All posts', 'Architecture', 'Testing', 'React', 'Founder', 'Tooling'],
    newsletter: {
      title: 'Get new posts in your inbox',
      description:
        'Occasional, no spam — frontend architecture, testing and founder notes. Roughly once a month.',
      placeholder: 'you@example.com',
      button: 'Subscribe',
    },
    authorBio:
      'Founder & CTO at Rasa Money and a frontend engineer with a decade of shipping resilient interfaces at scale. Writes about architecture, testing, and building products solo.',
    post: {
      backLink: '← Blog',
      morePosts: 'More posts',
      previous: '← Previous',
      next: 'Next →',
      keepReading: 'Keep reading',
    },
  },
  contact: {
    label: 'Get in touch',
    title: ["Let's build scalable", 'solutions', 'together.'],
    description:
      'Open to Senior Frontend / Lead roles and consulting engagements. Drop a message and let\'s talk architecture.',
    info: [
      { label: 'Location', value: 'Türkiye' },
      { label: 'Languages', value: 'English (Advanced)' },
      { label: 'Availability', value: 'Open to work', status: true },
      { label: 'Response time', value: 'Within 24 hours' },
    ],
    scheduleMeeting: {
      label: 'Schedule a meeting',
      href: 'https://calendly.com/hamid-yaftian/itshamid',
    },
    links: [
      { platform: 'Email', handle: 'hamid.yaftian@gmail.com', href: 'mailto:hamid.yaftian@gmail.com', wide: true, icon: 'email' },
      { platform: 'LinkedIn', handle: 'in/hamidyaftian', href: 'https://linkedin.com/in/hamidyaftian', icon: 'linkedin' },
      // { platform: 'Website', handle: 'itshamid.me', href: 'https://itshamid.me', icon: 'globe' },
      { platform: 'GitHub', handle: 'hamidyfine', href: 'https://github.com/hamidyfine', icon: 'github' },
      // { platform: 'Twitter / X', handle: '@itshamid', href: 'https://x.com/itshamid', icon: 'twitter' },
      // { platform: 'npm', handle: '~itshamid', href: 'https://www.npmjs.com/~hamidyfine', icon: 'npm' },
      { platform: 'Telegram', handle: '@itshamid', href: 'https://t.me/hamidyfine', icon: 'telegram' },
    ],
  },
  footer: {
    tagline: 'Designed & built with {heart} by Hamid Yaftian',
    copyright: '© 2026 · Inspired by the Ubuntu design language',
  },
  resume: {
    label: 'Curriculum vitae',
    name: ['Hamid', 'Yaftian'],
    subtitle: 'Founder & CTO, Rasa Money · Frontend Engineer · 10+ years',
    seoTitle: 'Resume',
    seoDescription: 'Resume of {author} — {subtitle}',
    downloadPdf: 'Download PDF',
    pdf: {
      href: '/Hamid_Yaftian_Frontend_Engineer.pdf',
      download: 'Hamid_Yaftian_Frontend_Engineer.pdf',
    },
    sections: {
      contact: 'Contact',
      skills: 'Core skills',
      certifications: 'Certifications',
      languages: 'Languages',
      experience: 'Experience',
      education: 'Education',
      techStack: 'Full tech stack',
    },
    summary:
      'Founder & CTO of <a href="/#rasa">Rasa Money</a> and a frontend engineer with 10+ years building and leading high-performance web applications at scale. Deep expertise in React, TypeScript and micro-frontend architecture, with a track record of raising quality bars — testing, design systems and developer tooling — across the teams I\'ve worked with.',
    contact: [
      { icon: 'location', text: 'Türkiye · Remote' },
      { icon: 'email', text: 'hamid.yaftian@gmail.com' },
      { icon: 'globe', text: 'itshamid.me' },
      { icon: 'linkedin', text: 'in/hamidyaftian' },
      { icon: 'github', text: 'github.com/hamidyfine' },
    ],
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'GraphQL', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Testing (Jest)', level: 88 },
      { name: 'CSS / Design systems', level: 90 },
    ],
    certifications: [
      'Hands-on with Design Systems',
      'Docker for Developers',
      'Scrum: The Basics — PMI',
      'Agile Software Development',
      'GraphQL — Apollo Odyssey',
    ],
    languages: [
      { name: 'English', level: 'Advanced', percent: 90 },
      { name: 'Persian', level: 'Native', percent: 100 },
      { name: 'Turkish', level: 'Intermediate', percent: 60 },
    ],
    experience: [
      {
        role: 'Founder & CTO',
        period: '2026 — Present',
        company: 'Rasa Money',
        location: 'London, UK',
        current: true,
        highlights: [
          'Set product direction and own the full stack for a multi-currency personal-finance platform.',
          'Architected a micro-frontend system with React, GraphQL and a shared design system.',
          'Built CI/CD, automated testing and observability foundations from zero.',
          'Hired and mentor the founding engineering team.',
        ],
      },
      {
        role: 'Senior Frontend Engineer',
        period: '2023 — 2026',
        company: 'Heaptify',
        location: 'London, UK',
        highlights: [
          'Led React + GraphQL micro-frontend work, improving system efficiency ~30%.',
          'Drove unit-test coverage from ~20% to 70%+ with a structured Jest strategy.',
          'Mentored mid-level engineers, cutting review cycle time by 25%.',
          'Owned the shared component library used across four product teams.',
        ],
      },
      {
        role: 'Senior Frontend Developer',
        period: '2021 — 2023',
        company: 'Deriv',
        location: 'Cyberjaya, Malaysia',
        highlights: [
          'Shipped 20+ product features on a Storybook-driven design system.',
          'Authored unit tests for 50+ components with Jest & Testing Library.',
          'Ran 100+ code reviews and served as Release Manager.',
        ],
      },
      {
        role: 'Frontend Team Lead',
        period: '2018 — 2021',
        company: 'Yasna Team',
        location: 'Tehran, Iran',
        highlights: [
          'Led frontend architecture in Vue.js & TypeScript, delivering 50+ reusable components.',
          'Designed a custom CLI to standardize project scaffolding across teams.',
          'Introduced code-review and testing practices adopted org-wide.',
        ],
      },
      {
        role: 'Frontend Developer',
        period: '2015 — 2018',
        company: 'Hamkar',
        location: 'Tehran, Iran',
        highlights: [
          'Rebuilt the UI kit in Angular.js, reducing visual inconsistencies by 35%.',
          'Cut bug volume ~30% and halved intern onboarding time through mentorship.',
        ],
      },
    ],
    education: [
      {
        degree: 'B.Sc. Computer Software Engineering',
        period: '2011 — 2015',
        school: 'Azad University',
        location: 'Tehran, Iran',
      },
    ],
    techStack: [
      'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js', 'GraphQL', 'REST',
      'Redux', 'Zustand', 'MobX', 'Jest', 'Playwright', 'Cypress', 'Vitest', 'Storybook',
      'Webpack', 'Vite', 'Docker', 'PostgreSQL', 'Git', 'CI/CD', 'Micro-frontends',
      'HTML', 'CSS', 'Sass', 'Tailwind',
    ],
  },
} satisfies SiteContent;

export function getContent(): SiteContent {
  return content;
}

export function formatTemplate(template: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  );
}
