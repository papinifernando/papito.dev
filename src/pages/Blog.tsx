import { useState } from 'react'
import Header from '@/components/Header'
import config from '@/consts'

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
            Found 0 results for '{searchQuery}'
          </p>
        )}
      </div>

      <div className="mt-8">
        <div className="animate-pulse flex items-center justify-center h-[288px] bg-zinc-700 rounded w-full">
          <svg
            className="w-10 h-10 text-zinc-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>

        <div role="status" className="max-w-sm animate-pulse">
          <div className="mt-4 h-4 bg-zinc-700 rounded-full w-96"></div>
          <div className="mt-2 h-4 bg-zinc-700 rounded-full w-48"></div>
          <div className="mt-2 grid grid-flow-col max-w-[140px]">
            <div className="h-3.5 bg-zinc-700 rounded-full max-w-[40px]"></div>
            <div className="h-3.5 bg-zinc-700 rounded-full max-w-[40px]"></div>
            <div className="h-3.5 bg-zinc-700 rounded-full max-w-[40px]"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}