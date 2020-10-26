import React from 'react'
import ProductListItem from './product-list-item'
import { connect } from 'react-redux'

function ProductListing(props) {
  
  let productlist = JSON.parse(localStorage.getItem("productlist"));
  if (productlist) {

  return <div className='product-listing'>
    {
      productlist.map(product =>
        <ProductListItem
          key={product.id}
          product={product}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
        />)
    }
  </div>
} 
else { 
  return <div> Nenhum produto cadastrado! </div>
}
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)