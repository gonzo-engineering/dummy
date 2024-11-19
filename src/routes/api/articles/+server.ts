import { json } from "@sveltejs/kit";
import type { Article } from "$lib/types";

async function getPosts() {
  let posts: Article[] = [];

  const paths = import.meta.glob("/src/data/articles/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Article, "slug">;
      const post = { ...metadata, slug } satisfies Article;
      posts.push(post);
    }
  }

  posts = posts.sort(
    (first, second) =>
      new Date(second.publicationDate).getTime() -
      new Date(first.publicationDate).getTime(),
  );

  return posts;
}

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}