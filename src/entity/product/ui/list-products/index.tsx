'use client'
import React from 'react'
import { useGetProducts } from '../../hook/use-get-products'
import { ProductCard } from '../card-product'

export const ProductsList = () => {
  const {
    products,
    loading,
    error
  } = useGetProducts()
  return (
    <div>
      {products.map((elem) => <ProductCard key={elem._id} product={elem} />)}
    </div>
  )
}
