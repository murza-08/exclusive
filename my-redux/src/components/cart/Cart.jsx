import React from 'react'
import art from '../../assets/Image.svg'
import './Cart.css'
function Cart() {
  return (
    <div className='card container'>
      <div className="basket">
      <div className="card-product">
        <div className="card-block">
          <img src={art}  className='cardImg'/>
           <h6>lotus</h6>          
        </div>
        <p>$300</p>
        <input type='text' />
        <h6>$200</h6>
      </div>
      </div>
    </div>
  )
}

export default Cart
