import React from 'react'
import surot from '../../assets/Image.svg'
import './cart.css'

function Cart() {
  //useSelector
  return (
    
      <div className='card container'>
      <div className="basket">
      <div className="card-product">
        <div className="card-block">
          <img src={surot}  className='cardImg'/>
           <p>flover</p>          
        </div>
        <p>$300</p>
        <input type='text' />
        <p>$200</p>
      </div>
      </div>
      </div>
    
  )
}

export default Cart
