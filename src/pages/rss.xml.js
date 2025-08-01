import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const issues = (await getCollection("issues")).filter((issue) => !issue.data.draft);

  const calendar = (await getCollection("calendar")).filter(
    (project) => !project.data.draft,
  );

  const items = [...issues, ...calendar].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id.replace(/\/index\.md$/, "").replace(/\.md$/, "")}/`,
    })),
  });
}
