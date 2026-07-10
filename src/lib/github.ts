import { getContent } from '../data/content';
import {
  getCategoryMap,
  getListedRepoNames,
  getManualProjects,
  getProjectsConfig,
  sortProjectsByConfigOrder,
} from '../data/projects';
import type { GitHubRepo, ProjectCard, ProjectsConfig } from '../types';

const GITHUB_API_VERSION = '2022-11-28';

function getGitHubToken(): string | undefined {
  const token = import.meta.env.GITHUB_TOKEN?.trim();
  return token || undefined;
}

function getGitHubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'itshamid-portfolio',
    'X-GitHub-Api-Version': GITHUB_API_VERSION,
  };

  const token = getGitHubToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

function logGitHubApiWarning(res: Response, context: string): void {
  const remaining = res.headers.get('x-ratelimit-remaining');
  const reset = res.headers.get('x-ratelimit-reset');
  const authenticated = Boolean(getGitHubToken());

  if (res.status === 403 && !authenticated) {
    console.warn(
      `GitHub API rate limit hit (${context}). Set GITHUB_TOKEN in .env for 5,000 requests/hour.`,
    );
    return;
  }

  console.warn(
    `GitHub API error (${res.status}) for ${context}. Remaining: ${remaining ?? 'unknown'}, reset: ${reset ?? 'unknown'}`,
  );
}

async function githubFetch(url: string, context: string): Promise<Response | null> {
  try {
    const res = await fetch(url, {
      headers: getGitHubHeaders(),
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      logGitHubApiWarning(res, context);
      return null;
    }

    return res;
  } catch (error) {
    console.warn(`GitHub API unavailable for ${context}:`, error);
    return null;
  }
}

function languageToTags(language: string | null, topics: string[]): string[] {
  const tags = new Set<string>();
  if (language) tags.add(language);
  topics.forEach((topic) => tags.add(topic));
  return [...tags];
}

function formatStars(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K★`;
  return `${count}★`;
}

async function fetchRepoTopics(username: string, repoName: string): Promise<string[]> {
  const url = `https://api.github.com/repos/${username}/${repoName}/topics`;
  const res = await githubFetch(url, `${username}/${repoName} topics`);
  if (!res) return [];

  const data: { names?: string[] } = await res.json();
  return data.names ?? [];
}

async function fetchTopicsForRepos(
  username: string,
  repoNames: string[],
): Promise<Map<string, string[]>> {
  const entries = await Promise.all(
    repoNames.map(async (name) => [name, await fetchRepoTopics(username, name)] as const),
  );

  return new Map(entries);
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`;
  const res = await githubFetch(url, `user ${username} repos`);
  if (!res) return [];

  return res.json();
}

function repoToProject(repo: GitHubRepo, category: string): ProjectCard {
  const isFlagship = category === 'flagship';
  const { projects: projectContent } = getContent();

  return {
    name: repo.name,
    description: repo.description ?? projectContent.fallbackDescription,
    url: repo.html_url,
    homepage: repo.homepage || undefined,
    tags: languageToTags(repo.language, repo.topics),
    note: repo.stargazers_count > 0 ? formatStars(repo.stargazers_count) : undefined,
    stars: repo.stargazers_count,
    language: repo.language,
    category,
    updatedAt: repo.pushed_at,
    wide: isFlagship,
    maroon: isFlagship,
    source: 'github',
  };
}

export function mapReposToProjects(
  repos: GitHubRepo[],
  config: ProjectsConfig,
): ProjectCard[] {
  const categoryMap = getCategoryMap(config);
  const listedNames = new Set(getListedRepoNames(config));
  const repoMap = new Map(
    repos.filter((repo) => listedNames.has(repo.name)).map((repo) => [repo.name, repo]),
  );

  return getListedRepoNames(config).flatMap((name) => {
    const category = categoryMap.get(name);
    if (!category) return [];

    const repo = repoMap.get(name);
    if (!repo) {
      console.warn(`GitHub repo not found for configured project: ${name}`);
      return [];
    }

    return [repoToProject(repo, category)];
  });
}

function sortByUpdatedAt(projects: ProjectCard[]): ProjectCard[] {
  return [...projects].sort(
    (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt),
  );
}

export async function getProjects(): Promise<ProjectCard[]> {
  const config = getProjectsConfig();
  const listedNames = getListedRepoNames(config);
  const [repos, topicsMap] = await Promise.all([
    fetchGitHubRepos(config.username),
    fetchTopicsForRepos(config.username, listedNames),
  ]);

  const reposWithTopics = repos.map((repo) => ({
    ...repo,
    topics: topicsMap.get(repo.name) ?? repo.topics ?? [],
  }));

  return [...getManualProjects(config), ...mapReposToProjects(reposWithTopics, config)];
}

export function getHomeProjects(
  projects: ProjectCard[],
  featured: string[] = [],
): ProjectCard[] {
  const featuredSet = new Set(featured);
  return sortByUpdatedAt(projects.filter((project) => featuredSet.has(project.name)));
}

export function groupProjectsByCategory(
  projects: ProjectCard[],
  categories: { id: string; label: string }[],
  config: ProjectsConfig = getProjectsConfig(),
): { id: string; label: string; projects: ProjectCard[] }[] {
  const categoryOrder: Record<string, string[]> = {
    flagship: config.flagship,
    tools: config.tools,
    misc: config.misc,
    npm: config.npm,
  };

  return categories.map((cat) => ({
    ...cat,
    projects: sortProjectsByConfigOrder(
      projects.filter((p) => p.category === cat.id),
      categoryOrder[cat.id] ?? [],
    ),
  }));
}
