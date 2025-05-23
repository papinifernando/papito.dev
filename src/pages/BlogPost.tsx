import { useParams } from 'react-router-dom'
import Header from '@/components/Header'
import Tags from '@/components/Tags'

export default function BlogPost() {
  const { slug } = useParams()
  const post = mockPosts.find(p => p.frontmatter.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="pt-8 antialiased lg:pt-16 mb-20">
      <Header />
      
      <div className="mx-auto flex max-w-4xl justify-center gap-12 px-4">
        <article className="w-full format format-sm sm:format-base lg:format-lg format-blue format-invert overflow-x-hidden bg-zinc-950 rounded-lg md:border lg:shadow-4xl lg:-mb-8 md:py-12 md:px-20">
          <header className="not-format mb-4 lg:mb-6">
            <div className="mb-6 flex items-center not-italic">
              <div className="mr-3 inline-flex items-center text-sm text-white">
                <img
                  className="mr-4 h-16 w-16 rounded-full"
                  src="/papito.png"
                  alt="Fernando Papito"
                />
                <div>
                  <a href="#" rel="author" className="text-xl font-bold text-white">
                    Fernando Papito
                  </a>
                  <p className="text-base text-zinc-400">QA Lead & SDET</p>
                  <p className="text-base text-zinc-400">
                    <time dateTime={post.frontmatter.dateStr}>
                      {post.frontmatter.dateStr}
                    </time>
                  </p>
                </div>
              </div>
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white">
              {post.frontmatter.title}
            </h1>

            <Tags tags={post.frontmatter.tags} />
          </header>

          <div className="prose prose-invert">
            <p>{post.frontmatter.description}</p>
          </div>
        </article>
      </div>
    </div>
  )
}