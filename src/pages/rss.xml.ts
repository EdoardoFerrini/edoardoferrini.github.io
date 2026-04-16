import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'edoardo ferrini — Build To Understand',
    description: 'Blog di Edoardo Ferrini: programmazione, knowledge management e fotografia.',
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: `/posts/${post.id}/`,
      categories: post.data.tags ?? [],
    })),
    customData: `<language>it-it</language>`,
  });
}
