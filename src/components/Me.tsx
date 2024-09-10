import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function({...props}) {
  return (
  <a href="/">
    <Avatar {...props} >
      <img src="/me.png" alt="Fernando Papito" />
      <AvatarFallback>FP</AvatarFallback>
    </Avatar>
  </a>
  )
}