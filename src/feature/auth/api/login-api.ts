"use client"
import { AxiosMutation } from "@/shared"
import { LoginValidType } from "../model"

export const loginApi = async (data: LoginValidType) => {
  return await AxiosMutation({
    path: "auth/login",
    data
  })
}
