import { cn } from "@/lib/utils"

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: Heading[];
  olClass?: string;
  aClass?: string;
  cardClass?: string;
}

export default function TableOfContents({
  headings,
  olClass = "leading-tight",
  aClass = "no-underline text-zinc-400",
  cardClass = "format -mt-8 w-fit",
}: Props) {
  if (headings.length === 0) {
    return null;
  }

  function generateTOC(headings: Heading[]) {
    let toc = `<ol class='${olClass}'>`;
    let currentLevel = 1;

    for (const heading of headings) {
      const level = Number(heading.depth);

      if (level > currentLevel) {
        while (level > currentLevel) {
          toc += "<ol>";
          currentLevel++;
        }
      } else if (level < currentLevel) {
        while (level < currentLevel) {
          toc += "</ol>";
          currentLevel--;
        }
      }

      toc += `<li class="mt-0 pt-4"><a href='#${heading.slug}' class='${aClass}'>${heading.text}</a></li>`;
    }

    while (currentLevel > 1) {
      toc += "</ol>";
      currentLevel--;
    }

    toc += "</ol>";
    return toc;
  }

  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", cardClass)}>
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          In this article
        </h3>
      </div>
      <div className="p-6 pt-0">
        <div 
          className="table-of-content"
          dangerouslySetInnerHTML={{ __html: generateTOC(headings) }} 
        />
      </div>
    </div>
  )
}