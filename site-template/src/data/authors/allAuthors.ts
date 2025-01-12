import type { Author } from "@gonzo-engineering/libs";

const authorObjects: Author[] = [];

const paths = import.meta.glob("/src/data/authors/*.json", { eager: true });

// Combine all author objects into one array
for (const path in paths) {
  const file = paths[path];

  if (file && typeof file === "object" && "default" in file) {
    const author = file.default as Author;
    authorObjects.push(author);
  }
}

export const allAuthors = authorObjects;
