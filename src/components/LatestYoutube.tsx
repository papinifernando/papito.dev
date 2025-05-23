import { useEffect, useState } from 'react'

interface YouTubeData {
  title: string;
  url: string;
  thumbnail: string;
}

export default function LatestYoutube() {
  const [data, setData] = useState<YouTubeData | null>(null)

  useEffect(() => {
    fetch('/api/fetch-youtube')
      .then(res => res.json())
      .then(setData)
  }, [])

  if (!data) {
    return (
      <div className="flex flex-col w-full h-full">
        <div className="flex-1 relative">
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

  return (
    <div className="flex flex-col w-full h-full">
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 relative"
      >
        <img
          className="rounded-lg object-cover object-center w-full shadow-xl aspect-video"
          src={data.thumbnail}
          height="288"
          width="512"
          alt={data.title}
        />
        
        <div className="flex flex-1 flex-col justify-between py-2">
          <h2 className="text-2xl font-bold text-smoke-50 mb-2 break-words">
            {data.title}
          </h2>
          <div className="my-1 text-sm">
            <span className="rounded-full inline-flex flex-row items-center px-2 ring-1 ring-smoke-800 text-smoke-300">
              youtube
            </span>
            <span className="rounded-full inline-flex flex-row items-center px-2 ring-1 ring-smoke-800 text-smoke-300">
              video
            </span>
            <span className="rounded-full inline-flex flex-row items-center px-2 bg-yellow-400 text-black">
              new
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}