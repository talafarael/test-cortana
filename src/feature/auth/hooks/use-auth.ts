"use client"
import { useState } from "react"
import { AuthDto, RegisterValidType } from "../model"
import { loginApi, registrationApi } from "../api"
import { handlerError } from "@/shared"
import { useUserStore } from "@/entity/user/store/user.store"
import { useRouter } from "next/navigation"
export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()
  const { user, getUser } = useUserStore()
  const router = useRouter();
  const handlerAuth = async ({ type, data }: AuthDto) => {
    try {
      setLoading(true)
      setError(undefined);
      if (type == "login") {
        await loginApi(data)
      } else {
        await registrationApi(data as RegisterValidType)
      }
      await getUser()
      router.push("/dashboard");
    } catch (e: any) {
      const errMessagehandlerError = handlerError(e);
      setError(errMessagehandlerError)
    } finally {
      setLoading(false)
    }
  }
  return {
    handlerAuth,
    loading,
    error
  }
}
