import { cn } from "@/lib/utils"

interface Props {
  url?: string;
  title: string;
  description: string;
  image: string;
}

export default function SocialShare({ 
  url = window.location.href, 
  title, 
  description, 
  image 
}: Props) {
  const encoded_url = encodeURIComponent(url);

  const buttons = [
    {
      url: `https://twitter.com/intent/tweet?url=${url}&text=${description}&via=papito`,
      icon: "X",
      label: "Share on X"
    },
    {
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded_url}`,
      icon: "LinkedIn",
      label: "Share on LinkedIn"
    },
    {
      url: `https://www.facebook.com/sharer/sharer.php?u=${encoded_url}&t=${title}`,
      icon: "Facebook",
      label: "Share on Facebook"
    },
    {
      url:`https://pinterest.com/pin/create/button/?url=${encoded_url}&media=${image}&description=${description}`,
      icon: "Pinterest",
      label: "Share on Pinterest"
    },
    {
      url:`https://telegram.me/share/url?url=${url}&text=${description}`,
      icon: "Telegram",
      label: "Share on Telegram"
    },
    {
      url:`https://api.whatsapp.com/send?text=Check out this content! ${description} ${url}`,
      icon: "WhatsApp",
      label: "Share on WhatsApp"
    }
  ]

  return (
    <>
      <div className="w-full border-top border border-xs mt-16"></div>
      <h4 className="mt-4 font-bold text-xl">
        Like it? Share this content!
      </h4>
      <div className="flex gap-2 mt-6">
        {buttons.map(({url, icon, label}) => (
          <a
            key={icon}
            className={cn(
              "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
              "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
            )}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  )
}