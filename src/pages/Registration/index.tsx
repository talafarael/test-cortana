"use client"
import { useLanguageStore } from '@/entity/language'
import { InputFormAuth } from '@/feature/auth/ui/input-form'
import { Card, CardHeader } from '@/shared/components/ui/card'
import React from 'react'
export default function Registration() {
  const { language } = useLanguageStore()
  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <Card className='h-[350px] w-[350px] flex justify-center items-center'>
        <CardHeader className='text-start w-[80%]'>
          {textRegister.title[language]}
        </CardHeader>
        <InputFormAuth
          type='registration'
        />
      </Card>
    </div>
  )

}
const textRegister = {
  title: {
    eng: "register",
    ua: "Реєстрація"
  }
}
