import { useState } from 'react'
import Header from '@/components/Header'
import Posts from '@/components/Posts'
import LatestYoutube from '@/components/LatestYoutube'

const mockPosts = [
  {
    frontmatter: {
      id: "1",
      slug: "post-1",
      title: "Sample Post 1",
      description: "This is a sample post description",
      tags: [{ name: "React", color: "blue" }],
      dateStr: "Dec 31, 2023",
      reading_time: "5 min read",
      coverImageSrc: "https://picsum.photos/800/200"
    }
  },
  {
    frontmatter: {
      id: "2",
      slug: "post-2",
      title: "Sample Post 2",
      description: "Another sample post description",
      tags: [{ name: "TypeScript", color: "blue" }],
      dateStr: "Dec 30, 2023",
      reading_time: "3 min read",
      coverImageSrc: "https://picsum.photos/800/200"
    }
  }
]

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="page max-w-lg mx-auto px-10 md:px-0">
      <Header />

      <div className="mt-8">
        <label htmlFor="search" className="sr-only">Search</label>
        <input 
          className="block w-full p-4 pl-6 text-zinc-900 border border-zinc-800 rounded bg-zinc-950 text-zinc-100"
          type="text" 
          id="search"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          placeholder="Search posts" 
        />
        {searchQuery.length > 1 && (
          <p className="my-4">
            Found {mockPosts.length} results for '{searchQuery}'
          </p>
        )}
      </div>

      <div className="mt-8">
        <LatestYoutube />
      </div>

      <main className="grid gap-2 my-10">
        <Posts posts={mockPosts} />
      </main>
    </div>
  )
}