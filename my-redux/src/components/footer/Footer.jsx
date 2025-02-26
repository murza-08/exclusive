import React from 'react'
import './Footer.css'
import art1 from '../../assets/facebok.svg'
import art2 from '../../assets/insta.svg'
import art3 from '../../assets/link.svg'
import art4 from '../../assets/twiter.svg'

function Footer() {
  return (
    <div className='footer container'>
       <div className='info'>
            <div className="info1">
                   <h3> exclusive </h3>
                   <h5> subscribe </h5>
                   <p>get 10% off your first order</p>
            </div>
            <div className="info2">
                <h3> support </h3>
                <p> exclusive@gmail.com </p>
                <p> +996 557 332 888 </p>
            </div>
            <div className='info3'>
              <h3> account </h3>
              <p> register </p>
              <p> shop </p>
            </div>
            <div className="info4">
                <h3> dowload app </h3>
                 <p> save 3$ with app  new user only </p>
                 <div className='apps'> 
                    <img src={art1} />
                    <img src={art2} />
                    <img src={art3} />
                    <img src={art4} />
                    
                 </div>
            </div>
       </div>
    </div>
  )
}

export default Footer
