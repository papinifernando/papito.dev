import { useState } from 'react'
import Header from '@/components/Header'
import Posts from '@/components/Posts'
import LatestYoutube from '@/components/LatestYoutube'
import Search from '@/components/Search'

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
  return (
    <div className="page max-w-lg mx-auto px-10 md:px-0">
      <Header />

      <div className="mt-8">
        <Search searchList={mockPosts} />
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