import projectsConfig from './projects.json';

export type ProjectRepoConfig = {
  name: string;
  category?: string;
  showOnHome?: boolean;
  note?: string;
  tags?: string[];
  description?: string;
};

export type ProjectsConfig = {
  username: string;
  excludeForks?: boolean;
  excludeArchived?: boolean;
  flagship?: {
    name: string;
    description: string;
    url: string;
    tags: string[];
    note: string;
    wide?: boolean;
    maroon?: boolean;
  };
  repos: (string | ProjectRepoConfig)[];
};

export function getProjectsConfig(): ProjectsConfig {
  return projectsConfig;
}

export function normalizeRepoConfigs(
  repos: ProjectsConfig['repos'],
): ProjectRepoConfig[] {
  return repos.map((repo) => (typeof repo === 'string' ? { name: repo } : repo));
}
