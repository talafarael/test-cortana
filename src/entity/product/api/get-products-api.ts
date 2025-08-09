'use client'

import { AxiosQuery } from "@/shared"

export const GetProductsApi = async () => {
  return await AxiosQuery({ path: "/product" })
}
