import { useState } from "react";
import { Button } from "./ui/button";
import type { Post } from "@/lib/types";
import Tags from "./Tags";

export default function Posts({ ...props }) {
  const posts = props.posts;
  let showItems = 3;
  const [currentItems, setCurrentItems] = useState(showItems);

  return (
    <>
      {posts.length > 0 &&
        posts.slice(0, currentItems).map((post: Post) => (
          <a
            key={post.frontmatter.id}
            href={`/blog/${post.frontmatter.slug}`}
            className={
              "post-link-container block mb-4 " +
              post.frontmatter.tags
                .map((tag: { id: string }) => `post-link-tag-${tag.id}`)
                .join(" ")
            }
          >
            <article className="transform rounded-lg border border-zinc-200 bg-white shadow-md transition duration-100 ease-in border-zinc-700 bg-zinc-950 sm:hover:scale-[102%] lg:hover:scale-105">
              <div
                style={{
                  viewTransitionName: `cover-image-${post.frontmatter.id}`,
                }}
              >
                {post.frontmatter.optimizedCoverImage && (
                  <img
                    className={`mb-1 h-auto w-full rounded-md rounded-b-none object-cover`}
                    style={{ aspectRatio: "4/1" }}
                    src={post.frontmatter.coverImageSrc}
                    alt="cover"
                  />
                )}
              </div>
              <div
                className="p-4"
                style={{
                  viewTransitionName: `cover-title-${post.frontmatter.id}`,
                }}
              >
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 text-white">
                  {post.frontmatter.title}
                </h2>

                <p className="mb-4 whitespace-pre-line font-light text-zinc-500 text-zinc-400">
                  {post.frontmatter.description}
                </p>

                <div className="flex justify-between align-center">
                  <small className="text-zinc-500 text-zinc-500">
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
        <Button
          className="w-full"
          variant="outline"
          onClick={() => setCurrentItems(() => currentItems + showItems)}
        >
          Load More
        </Button>
      )}
    </>
  );
}
