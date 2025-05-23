import config from '@/consts'
import Header from '@/components/Header'
import items from '@/data/setup'

export default function Setup() {
  return (
    <div className="page max-w-lg mx-auto px-2 md:px-0 antialiased">
      <Header />
      
      <main className="grid grid-cols-2 gap-2 text-center pb-10">
        {items.map((item) => (
          <a 
            key={item.name}
            className={`border rounded border-zinc-300 p-4 hover:bg-zinc-100 hover:bg-zinc-800 border-zinc-800 text-muted-foreground hover:text-white`}
            href={item.url} 
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white rounded-sm p-4">
              <img
                className={`mb-1 h-auto w-full rounded-md rounded-b-none object-contain aspect-video`}
                src={item.imgSrc}
                alt={item.name}
              />
            </div>
            <strong className={`font-bold text-sm mt-2 block`}>
              {item.name}
            </strong>
          </a>
        ))}
      </main>
    </div>
  )
}