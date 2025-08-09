'use client'
import { handlerError } from "@/shared";
import { useEffect, useState } from "react";
import { GetProductsApi } from "../api";
import { ProductModel } from "../model";
import { Products } from "@/pages/product";

export const useGetProducts = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()
  const [products, setProducts] = useState<ProductModel[]>([])
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(undefined);
        const getProdcuts = await GetProductsApi()
        setProducts(getProdcuts.data)
      } catch (e: any) {
        const errMessagehandlerError = handlerError(e);
        setError(errMessagehandlerError)
      } finally {
        setLoading(false)
      }
    })()
  }, [])
  return {
    products,
    loading,
    error
  }

}
