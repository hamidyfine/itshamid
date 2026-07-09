import {
  getProjectsConfig,
  normalizeRepoConfigs,
  type ProjectsConfig,
} from '../data/projects';

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
  npm?: boolean;
}

export interface ProjectCard {
  name: string;
  description: string;
  url: string;
  tags: string[];
  note?: string;
  stars?: number;
  language?: string | null;
  wide?: boolean;
  maroon?: boolean;
  category?: string;
  showOnHome?: boolean;
  source: 'github' | 'flagship' | 'override';
}

function languageToTags(language: string | null, topics: string[]): string[] {
  const tags = new Set<string>();
  if (language) tags.add(language);
  topics.slice(0, 3).forEach((t) => tags.add(t));
  return [...tags].slice(0, 4);
}

function formatStars(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K★`;
  return `${count}★`;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;
  const res = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'itshamid-portfolio',
    },
  });

  if (!res.ok) {
    console.warn(`GitHub API error (${res.status}) for user ${username}`);
    return [];
  }

  return res.json();
}

export function mapReposToProjects(
  repos: GitHubRepo[],
  config: ProjectsConfig,
): ProjectCard[] {
  const excludeForks = config.excludeForks ?? true;
  const excludeArchived = config.excludeArchived ?? true;
  const repoMap = new Map(repos.map((repo) => [repo.name, repo]));
  const repoConfigs = normalizeRepoConfigs(config.repos);

  return repoConfigs.flatMap((repoConfig) => {
    const repo = repoMap.get(repoConfig.name);
    if (!repo) {
      console.warn(`GitHub repo not found: ${repoConfig.name}`);
      return [];
    }
    if (excludeForks && repo.fork) return [];
    if (excludeArchived && repo.archived) return [];

    const tags = repoConfig.tags ?? languageToTags(repo.language, repo.topics);
    const note =
      repoConfig.note ??
      (repo.stargazers_count > 0 ? formatStars(repo.stargazers_count) : undefined);

    return [{
      name: repo.name,
      description: repoConfig.description ?? repo.description ?? 'No description provided.',
      url: repo.homepage || repo.html_url,
      tags,
      note,
      stars: repo.stargazers_count,
      language: repo.language,
      category: repoConfig.category ?? 'tools',
      showOnHome: repoConfig.showOnHome,
      source: 'github' as const,
    }];
  });
}

export function getFlagshipProject(flagship: ProjectsConfig['flagship']): ProjectCard | null {
  if (!flagship) return null;
  return {
    name: flagship.name,
    description: flagship.description,
    url: flagship.url,
    tags: flagship.tags,
    note: flagship.note,
    wide: flagship.wide,
    maroon: flagship.maroon,
    category: 'flagship',
    source: 'flagship',
  };
}

export async function getProjects(): Promise<ProjectCard[]> {
  const config = getProjectsConfig();
  const repos = await fetchGitHubRepos(config.username);
  const githubProjects = mapReposToProjects(repos, config);
  const flagship = getFlagshipProject(config.flagship);

  const projects: ProjectCard[] = [];
  if (flagship) projects.push(flagship);
  projects.push(...githubProjects);

  return projects;
}

export function getHomeProjects(projects: ProjectCard[]): ProjectCard[] {
  return projects.filter((project) => project.source !== 'flagship' && project.showOnHome);
}

export function groupProjectsByCategory(
  projects: ProjectCard[],
  categories: { id: string; label: string }[],
): { id: string; label: string; projects: ProjectCard[] }[] {
  return categories.map((cat) => ({
    ...cat,
    projects: projects.filter((p) => p.category === cat.id),
  }));
}
