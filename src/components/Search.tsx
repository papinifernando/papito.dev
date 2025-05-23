import { useState } from 'react'
import Fuse from 'fuse.js'

const options = {
  keys: ['frontmatter.title', 'frontmatter.description', 'frontmatter.slug'],
  includeMatches: true,
  minMatchCharLength: 2,
};

interface SearchProps {
  searchList: any[];
}

export default function Search({ searchList }: SearchProps) {
  const [query, setQuery] = useState('')
  const fuse = new Fuse(searchList, options)
  const posts = fuse
    .search(query)
    .map(result => result.item)
    .slice(0, 5)

  return (
    <>
      <label htmlFor="search" className='sr-only'>Search</label>
      <input 
        className='block w-full p-4 pl-6 text-zinc-900 border border-zinc-800 rounded bg-zinc-950 text-zinc-100'
        type="text" 
        id="search"
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder='Search posts' 
      />
      {query.length > 1 && (
        <p className='my-4'>
          Found {posts.length} {posts.length === 1 ? 'result' : 'results'} for '{query}'
        </p>
      )}

      <ul className='list-none'>
        {posts.map((post: any) => (
          <li className='py-2' key={post.frontmatter.slug}>
            <a href={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</a>
            <p className="text-sm text-muted-foreground">{post.frontmatter.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}