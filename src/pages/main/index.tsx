'use client'
import { useLanguageStore } from '@/entity/language';
import { useUserStore } from '@/entity/user';
import { Button } from '@/shared/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'


export const Main = () => {
  const router = useRouter()
  const { language } = useLanguageStore()
  const { user } = useUserStore()
  useEffect(() => {
    if (user) router.push("/dashboard");
  }, [user])
  return (
    <div className="h-[80vh] w-full flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          {textMain.title[language]}
        </h1>
        <p className="text-lg text-muted-foreground max-w-[600px]">
          {textMain.description[language]}
        </p>
        <Button
          size="lg"
          onClick={() => router.push('/login')}
          className="px-8"
        >
          {textMain.button[language]}
        </Button>
      </div>
    </div>
  );
}
const textMain = {
  title: {
    eng: "Welcome to Cortana",
    ua: "Ласкаво просимо до Cortana"
  },
  description: {
    eng: "Test assignment for Cortana",
    ua: "Тестове завдання для Cortana"
  },
  button: {
    eng: "Get Started",
    ua: "Розпочати"
  }
}
