import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement"
import './Home.css'
import axios from 'axios'



function Home() {
  const [product, setProduct ] = useState( [] )
  
  async function getPro(){
    try{
      const res = await axios.get( API )
      setProduct( res.data.slice(0, 8  )
      )  }
      
    catch( error ){
      console.log( error );
      
  } }

  useEffect( () => {
    getPro()
  }, [] )
           

  return (
    <div className="container">
      <div className="flower">
        {product.slice( 0, 8).map( ( pro ) => {
          return(
            <Product key={ pro.id } data={ pr0 }/>
          )
        } )
        }
      </div>
    </div>
  );
}  

export default Home