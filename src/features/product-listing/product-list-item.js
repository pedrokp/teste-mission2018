import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'


export default function ProductListItem(props) {

  return <div className='product-list-item'>
    
    <h3>Nome: { props.product.name }</h3>

    <div>Preço: { props.product.price }</div>
    
    <div>
      <AddBtn
        cartItem={props.cartItem}
        product={props.product}
        addToCart={props.addToCart}
      />

      {
        props.cartItem
          ? <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
          : null
      }
      
    </div>
    
  </div>

}
