"use client"
import React from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/components/ui/form"
import { Input } from '@/shared/components/ui/input'
import { IInputField } from '@/shared/type'
import { Control } from 'react-hook-form'

export interface InputFormProps<T extends Record<string, any>> {
  dataInput: IInputField<T>
  control: Control<T>
  error: string | undefined
}
export const InputForm = <T extends Record<string, any>>({
  dataInput,
  control,
}: InputFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={dataInput.name}
      rules={{ required: true, maxLength: 20 }}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={dataInput.placeholder}
              {...field}
              value={field.value ?? ''}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
