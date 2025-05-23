import type { YouTubeData } from '@/lib/types'

const CHANNEL_ID = 'UCzsGhfwdImeKj2AOoN92hFw'
const cache = new Map<string, YouTubeData>()

export async function GET() {
  if (cache.has(CHANNEL_ID)) {
    return new Response(JSON.stringify(cache.get(CHANNEL_ID)))
  }

  const youtubeRSS = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
  const rssData = await fetch(youtubeRSS).then((res) => res.text())
  
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
  })
  
  const rss = parser.parse(rssData)
  const video = rss.feed.entry[0]

  const data = {
    title: video["media:group"]["media:title"],
    thumbnail: video["media:group"]["media:thumbnail"]["@_url"],
    url: video["media:group"]["media:content"]["@_url"],
  }

  cache.set(CHANNEL_ID, data)
  return new Response(JSON.stringify(data))
}