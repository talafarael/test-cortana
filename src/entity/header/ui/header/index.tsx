"use client";

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Button } from "@/shared/components/ui/button"
import { logoutApi, useUserStore } from '@/entity/user'
import { ChangeLanguageButton, useLanguageStore } from '@/entity/language'
import { UserAvatar } from '@/entity/user/ui/avatar-user'

export const Header = () => {
  const router = useRouter()
  const { user, getUser, removeUser } = useUserStore()
  const { language } = useLanguageStore()
  useEffect(() => {
    getUser()
  }, [])
  const handlerLogout = async () => {
    await logoutApi()
    removeUser()
    router.push("/")
  }
  return (
    <header className="h-[65px] flex w-[100vw] px-6 justify-between items-center bg-background border-b">
      <div className="flex items-center gap-4">
        {user ? (
          <UserAvatar />
        ) : (
          <div className="h-9 w-9 rounded-full bg-muted" />
        )}
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <Button
            variant="outline"
            onClick={handlerLogout}
            className="flex items-center gap-2"
          >
            {textHeader.buttonLogout[language]}
          </Button>
        ) : (
          <>
            <Button
              variant="ghost"
              onClick={() => router.push('/login')}
              className="flex items-center gap-2"
            >
              {textHeader.buttonLogin[language]}
            </Button>
            <Button
              onClick={() => router.push('/registration')}
              className="flex items-center gap-2"
            >
              {textHeader.buttonRegistration[language]}
            </Button>
          </>
        )}
        <ChangeLanguageButton />
      </div>
    </header>
  )
}
const textHeader = {
  buttonLogin: {
    eng: "Login",
    ua: "Вхід"
  },
  buttonRegistration: {
    eng: "Registration",
    ua: "Реєстрація"
  },
  buttonLogout: {
    eng: "Logout",
    ua: "Вихід"
  }
}
