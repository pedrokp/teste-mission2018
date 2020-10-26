import React from 'react'
import ProductListing from '../features/product-listing'

export default function ListPage(props) {
  
  return <div>
    <h2>Produtos</h2>
    <ProductListing products={localStorage.products} />
  </div>
}