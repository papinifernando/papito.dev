import config from "@/consts"
import Header from "@/components/Header"
import Me from "@/components/Me"
import { cn } from "@/lib/utils"

export default function Home() {
  const { links } = config

  return (
    <div className="page max-w-xs mx-auto px-2 md:px-0 antialiased">
      <Header />

      <div className="grid gap-12">
        <div className="text-center">
          <Me className="mx-auto w-36 h-36" />
          <div className="mb-2 mt-4 text-xl font-bold text-white">Fernando Papito</div>
          <p className="leading-tight text-muted-foreground">
            🚀 QA Lead & SDET <br />
            Apaixonado por Qualidade de Software 😍 <br />
          </p>
        </div>

        <main className="grid gap-2 text-center">
          {links.primary.map((link) => (
            <a
              key={link.url}
              className={cn(
                `border rounded border-zinc-300 p-4 hover:bg-zinc-800 border-zinc-800`,
                link.colors?.background
              )}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className={cn(`font-bold text-white text-lg`, link.colors?.title)}>
                {link.title}
              </strong>
              <p className={cn("text-muted-foreground", link.colors?.description)}>
                {link.description}
              </p>
            </a>
          ))}
        </main>

        <footer className="flex flex-wrap gap-2 justify-center mb-20">
          {links.social.map((link) => (
            <a 
              key={link.url}
              className="border rounded border-zinc-800 p-3 hover:bg-zinc-700" 
              href={link.url} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon strokeWidth={1} />
              <p className="sr-only">{link.title}</p>
            </a>
          ))}
        </footer>
      </div>
    </div>
  )
}