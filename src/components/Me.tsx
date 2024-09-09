import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

export default function({...props}) {
  return (
  <a href="/">
    <Avatar {...props} >
      <img src="/me.png" alt="@papito" />
      <AvatarFallback>MB</AvatarFallback>
    </Avatar>
  </a>
  )
}