import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function Me({...props}) {
  return (
    <a href="/">
      <Avatar {...props}>
        <img src="/papito.png" alt="Fernando Papito" />
        <AvatarFallback>FP</AvatarFallback>
      </Avatar>
    </a>
  )
}