import React from 'react'
import surot from '../../assets/Image.svg'
import './cart.css'
import { useSelector } from 'react-redux'

function Cart() {
   const {cartitem} = useSelector( ( state )  => state.flower )
  
  return (
    
      <div className='card container'>
      <div className="basket">
     {
       cartitem.map( ( item ) =>  (
        <div className="card-product">
        <div className="card-block">
          <img src={ item.imageUrl }  className='cardImg'/>
           <p> { item.title } </p>          
        </div>
        <p> { item.price } </p>
        <input type='text' />
        <p> { item.viewsCount } </p>
      </div>

      ))
     }
      </div>
      </div>
    
  )
}

export default Cart
