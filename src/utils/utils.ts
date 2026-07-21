import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMetadata = {
  title?: string;
  publishedAt?: string;
  summary?: string;
  images?: string[];
  tag?: string;
  image?: string;
  link?: string;
  team?: Array<{
    name: string;
    role?: string;
    avatar?: string;
    linkedIn?: string;
  }>;
};

export type Post = {
  slug: string;
  metadata: PostMetadata;
  content: string;
};

export function getPosts(pathSegments: string[]): Post[] {
  const dir = path.join(process.cwd(), ...pathSegments);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f));

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");

    return {
      slug,
      metadata: data as PostMetadata,
      content,
    };
  });
}
