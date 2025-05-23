import { cn } from "@/lib/utils"

interface Tag {
  name: string;
  color: string;
}

interface TagsProps {
  tags: Tag[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <div 
          key={tag.name}
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "border-transparent text-foreground hover:bg-primary/80"
          )}
        >
          {tag.name}
        </div>
      ))}
    </div>
  )
}