import { AxiosQuery } from "@/shared"

export const getUserApi = async () => {
  return await AxiosQuery({ path: "user" })
}
