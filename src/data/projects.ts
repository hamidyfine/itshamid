import { getContent } from './content';
import type { ProjectCard, ProjectsConfig } from '../types';

export const projectsConfig = {
  username: 'hamidyfine',
  flagship: ['rasa-money'],
  tools: [],
  misc: ['flexbox'],
  npm: [
    'eslint-config-reactify',
    'jest-graphql-transformer',
    'use-breakpoint-hook',
    'tabler-dynamic-icon',
    'mantine-icon-picker',
    'html-to-object',
  ],
  featured: [
    'eslint-config-reactify',
    'jest-graphql-transformer',
  ],
} satisfies ProjectsConfig;

const manualProjectMeta = [
  {
    name: 'rasa-money',
    tags: [] as string[],
    category: 'flagship',
    updatedAt: '2026-01-01T00:00:00.000Z',
    wide: true,
    maroon: true,
  },
] as const;

export function getProjectsConfig(): ProjectsConfig {
  return projectsConfig;
}

export function getManualProjects(config: ProjectsConfig = projectsConfig): ProjectCard[] {
  const { projects: projectContent } = getContent();
  const listedNames = new Set(getListedRepoNames(config, { includeManual: true }));

  return manualProjectMeta
    .filter((project) => listedNames.has(project.name))
    .map((project) => {
      const copy = projectContent.manual[project.name];
      if (!copy) {
        throw new Error(`Missing project copy in content.ts for manual project: ${project.name}`);
      }

      return {
        ...project,
        description: copy.description,
        url: copy.url,
        homepage: copy.homepage ?? copy.url,
        source: 'manual' as const,
      };
    });
}

export function getManualProjectNames(config: ProjectsConfig = projectsConfig): Set<string> {
  return new Set(getManualProjects(config).map((project) => project.name));
}

export function getCategoryMap(config: ProjectsConfig): Map<string, string> {
  const map = new Map<string, string>();
  config.tools.forEach((name) => map.set(name, 'tools'));
  config.npm.forEach((name) => map.set(name, 'npm'));
  config.flagship.forEach((name) => map.set(name, 'flagship'));
  config.misc.forEach((name) => map.set(name, 'misc'));
  return map;
}

export function sortProjectsByConfigOrder(
  projects: ProjectCard[],
  order: string[],
): ProjectCard[] {
  const indexByName = new Map(order.map((name, index) => [name, index]));

  return [...projects].sort((a, b) => {
    const aIndex = indexByName.get(a.name) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = indexByName.get(b.name) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
}

export function getListedRepoNames(
  config: ProjectsConfig,
  options: { includeManual?: boolean } = {},
): string[] {
  const seen = new Set<string>();
  const names: string[] = [];
  const manualNames = options.includeManual ? null : getManualProjectNames(config);

  for (const name of [...config.flagship, ...config.tools, ...config.misc, ...config.npm]) {
    if (!seen.has(name) && !manualNames?.has(name)) {
      seen.add(name);
      names.push(name);
    }
  }

  return names;
}
