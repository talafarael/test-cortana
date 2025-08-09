"use client"
import React from 'react'
import {
  Form,
} from "@/shared/components/ui/form"
import { useForm } from 'react-hook-form'
import { Button } from '@/shared/components/ui/button'
import { InputFormLoginSchema } from '@/feature/model/input-form-login.schema'
import { IInputField, InputForm } from '@/shared'
import { LoginValid, LoginValidType, RegisterValidType, RegistrationValid } from '../../model'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputFormRegistrationSchema } from '@/feature/model/input-form-registration.schema'
import z from 'zod'
import { useAuth } from '../../hooks/use-auth'
export interface InputFormAtuhProps {
  type: "login" | "registration"
}
export const InputFormAuth = ({ type }: InputFormAtuhProps) => {
  const AuthResolver = type == "login" ? LoginValid : RegistrationValid
  const AuthSchema = (type == "login" ? InputFormLoginSchema : InputFormRegistrationSchema) as IInputField<z.infer<typeof AuthResolver>>[]
  const {
    handlerAuth,
    loading,
    error
  } = useAuth()
  const form = useForm<RegisterValidType | LoginValidType>({
    resolver: zodResolver(AuthResolver),
  })
  const handleSubmit = async (data: RegisterValidType | LoginValidType) => {
    await handlerAuth({
      type,
      data
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {AuthSchema.map((elem) => (
          <InputForm
            key={elem.name}
            dataInput={elem}
            control={form.control}
            error={form.formState.errors[elem.name]?.message}
          />
        ))}
        <h1>{error}</h1>
        <Button type="submit">Submit</Button>
      </form>
    </Form>)
}
