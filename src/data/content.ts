import content from './content.json';

export type SiteContent = typeof content;

export function getContent(): SiteContent {
  return content;
}
