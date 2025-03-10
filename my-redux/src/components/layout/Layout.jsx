import React from 'react'
import Header from '../header/Header'
import {  Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import Cart from '../cart/Cart'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
       <Cart/>
      <Footer/>
     
    </div>
  )
}

export default Layout
