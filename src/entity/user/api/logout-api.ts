import { AxiosQuery } from "@/shared"

export const logoutApi = async () => {
  return await AxiosQuery({ path: "user/logout" })
}
