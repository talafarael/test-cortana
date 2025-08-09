"use client"
import { AxiosMutation } from "@/shared"
import { RegisterValidType } from "../model"

export const registrationApi = async (data: RegisterValidType) => {
  await AxiosMutation({
    path: "auth/registration",
    data
  })
}
