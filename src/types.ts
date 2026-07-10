export type NavLink = { label: string; href: string };

export type HeroAction = {
  label: string;
  href: string;
  variant: 'orange' | 'ghost';
};

export type Badge = { text: string; variant: 'default' | 'orange' };

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  current?: boolean;
  highlights: string[];
};

export type SidebarCard =
  | { title: string; type: 'chips'; items: string[] }
  | { title: string; type: 'list'; items: string[] };

export type ContactInfoItem = {
  label: string;
  value: string;
  status?: boolean;
};

export type ContactLink = {
  platform: string;
  handle: string;
  href: string;
  wide?: boolean;
  icon: string;
};

export type SiteContent = {
  site: {
    name: string;
    title: string;
    description: string;
    url: string;
    locale: string;
    author: string;
    initials: string;
    ogImage: string;
    shortName: string;
    twitter: string;
  };
  nav: {
    logo: string;
    logoSrc: string;
    status: string;
    cta: NavLink;
    links: NavLink[];
  };
  hero: {
    pill: { text: string; href: string };
    title: string[];
    bio: string;
    actions: HeroAction[];
    tags: string[];
    terminal: {
      title: string;
      commands: {
        profile: string;
        run: string;
      };
      profile: {
        role: string;
        building: string;
        experience: string;
        stack: string[];
        focus: string;
      };
    };
    stats: { value: string; suffix: string; label: string }[];
  };
  rasa: {
    label: string;
    title: string[];
    badges: Badge[];
    description: string;
    features: { name: string; description: string }[];
  };
  experience: {
    label: string;
    title: string[];
    resumeLink: NavLink;
    timeline: TimelineItem[];
    sidebar: SidebarCard[];
  };
  projects: {
    label: string;
    title: string[];
    allLink: NavLink;
    pageTitle: string[];
    pageDescription: string;
    seoTitle: string;
    fallbackDescription: string;
    ariaLabels: {
      viewOnGitHub: string;
      visit: string;
    };
    categories: { id: string; label: string }[];
    manual: Record<string, { description: string; url: string; homepage?: string }>;
  };
  blog: {
    label: string;
    title: string[];
    allLink: NavLink;
    pageTitle: string[];
    pageDescription: string;
    seoTitle: string;
    homeFeaturedCount: number;
    filters: string[];
    featuredKicker: string;
    minRead: string;
    readPost: string;
    emailAriaLabel: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      button: string;
    };
    authorBio: string;
    post: {
      backLink: string;
      morePosts: string;
      previous: string;
      next: string;
      keepReading: string;
    };
  };
  contact: {
    label: string;
    title: string[];
    description: string;
    info: ContactInfoItem[];
    scheduleMeeting: {
      label: string;
      href: string;
    };
    links: ContactLink[];
  };
  footer: {
    tagline: string;
    copyright: string;
  };
  resume: {
    label: string;
    name: string[];
    subtitle: string;
    seoTitle: string;
    seoDescription: string;
    downloadPdf: string;
    pdf: {
      href: string;
      download: string;
    };
    sections: {
      contact: string;
      skills: string;
      certifications: string;
      languages: string;
      experience: string;
      education: string;
      techStack: string;
    };
    summary: string;
    contact: { icon: string; text: string }[];
    skills: { name: string; level: number }[];
    certifications: string[];
    languages: { name: string; level: string; percent: number }[];
    experience: TimelineItem[];
    education: { degree: string; period: string; school: string; location: string }[];
    techStack: string[];
  };
};

export type ProjectsConfig = {
  username: string;
  flagship: string[];
  tools: string[];
  misc: string[];
  npm: string[];
  featured?: string[];
};

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

export interface ProjectCard {
  name: string;
  description: string;
  url: string;
  homepage?: string;
  tags: string[];
  note?: string;
  stars?: number;
  language?: string | null;
  wide?: boolean;
  maroon?: boolean;
  category: string;
  updatedAt: string;
  source: 'github' | 'manual';
}

export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  noindex?: boolean;
}
