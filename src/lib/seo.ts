import type { SeoProps, SiteContent } from '../types';

export function getSiteUrl(content: SiteContent): string {
  return content.site.url.replace(/\/$/, '');
}

export function buildSeo(content: SiteContent, props: SeoProps = {}) {
  const siteUrl = getSiteUrl(content);
  const title = props.title
    ? `${props.title} — ${content.site.name}`
    : content.site.title;
  const description = props.description ?? content.site.description;
  const image = props.image?.startsWith('http')
    ? props.image
    : `${siteUrl}${props.image ?? content.site.ogImage}`;
  const canonical = props.canonical
    ? props.canonical.startsWith('http')
      ? props.canonical
      : `${siteUrl}${props.canonical}`
    : siteUrl;

  return {
    title,
    description,
    image,
    canonical,
    type: props.type ?? 'website',
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    tags: props.tags ?? [],
    noindex: props.noindex ?? false,
    siteName: content.site.name,
    locale: content.site.locale,
    author: content.site.author,
    twitter: content.site.twitter,
  };
}

export function formatDate(date: Date, style: 'short' | 'long' = 'long'): string {
  return date.toLocaleDateString('en-US', {
    month: style === 'short' ? 'short' : 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function estimateReadTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
