import React from 'react'
import art from '../../assets/Image.svg'
import './Product.css'

function Product() {
  return (
    <div className='product'>
      <div className="product-card">
        <div className="pro-img">
            <img src={art}/>
           </div>
                <button className='pro-btn'> add to card</button>
              <div className='pro-title'> 
              <h6> helo</h6>
             </div>
             <div className='pro-text' >
                <p>$120</p>
                <h4> 500 </h4>
             </div>
       </div>
    </div>
  )
}

export default Product
