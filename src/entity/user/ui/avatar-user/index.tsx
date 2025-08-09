"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar"

export const UserAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

