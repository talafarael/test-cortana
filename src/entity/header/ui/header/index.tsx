"use client";

import React, { useEffect } from 'react'
import { Button } from "@/shared/components/ui/button"
import { useUserStore } from '@/entity/user';
import { ChangeLanguageButton } from '@/entity/language';

export const Header = () => {
  const { getUser } = useUserStore()
  useEffect(() => {
    getUser()
  }, [])
  return (
    <header className="h-[65px] flex w-[100vw] p-[20px] justify-between items-center bg-[#3333]">
      UserAvatar
      <div>
        <Button onClick={() => { }} className="flex items-center gap-2">
          Login
        </Button>
        <ChangeLanguageButton />
      </div>
    </header>
  )
}
