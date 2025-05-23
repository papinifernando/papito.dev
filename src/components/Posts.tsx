import { useState } from "react";
import Tags from "./Tags";

interface Post {
  frontmatter: {
    id: string;
    slug: string;
    title: string;
    description: string;
    tags: Array<{ name: string; color: string; }>;
    dateStr: string;
    reading_time: string;
    coverImageSrc?: string;
  }
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  const showItems = 3;
  const [currentItems, setCurrentItems] = useState(showItems);

  return (
    <>
      {posts.length > 0 &&
        posts.slice(0, currentItems).map((post) => (
          <a
            key={post.frontmatter.id}
            href={`/blog/${post.frontmatter.slug}`}
            className={
              "post-link-container block mb-4 " +
              post.frontmatter.tags
                .map((tag) => `post-link-tag-${tag.name}`)
                .join(" ")
            }
          >
            <article className="transform rounded-lg border border-zinc-700 bg-zinc-950 shadow-md transition duration-100 ease-in sm:hover:scale-[102%] lg:hover:scale-105">
              {post.frontmatter.coverImageSrc && (
                <img
                  className="mb-1 h-auto w-full rounded-md rounded-b-none object-cover"
                  style={{ aspectRatio: "4/1" }}
                  src={post.frontmatter.coverImageSrc}
                  alt="cover"
                />
              )}
              <div className="p-4">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {post.frontmatter.title}
                </h2>

                <p className="mb-4 whitespace-pre-line font-light text-zinc-400">
                  {post.frontmatter.description}
                </p>

                <div className="flex justify-between align-center">
                  <small className="text-zinc-500">
                    {post.frontmatter.dateStr} - {post.frontmatter.reading_time}
                  </small>
                  <div className="tags">
                    <Tags tags={post.frontmatter.tags} />
                  </div>
                </div>
              </div>
            </article>
          </a>
        ))}

      {currentItems < posts.length && (
        <button
          className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10"
          onClick={() => setCurrentItems(currentItems + showItems)}
        >
          Load More
        </button>
      )}
    </>
  );
}