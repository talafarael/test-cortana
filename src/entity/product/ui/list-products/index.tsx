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

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="animate-pulse bg-gray-200 rounded-lg h-64" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        Error loading products. Please try again later.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((elem) => (
        <ProductCard key={elem._id} product={elem} />
      ))}
    </div>
  )
}
