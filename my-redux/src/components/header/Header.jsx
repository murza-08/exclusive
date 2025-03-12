import React from 'react'
import './Header.css'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Header() {
    const  {cartitem} = useSelector (  ( state ) => state.flower  )
  return (
    <div className='header container'>
        <div className="header-left">
            <h1>exclusive</h1>
            <ul>
                <li> <a href=""></a> home  </li>
                <li> <a href=""></a> about </li>
                <li> <a href=""></a> contact </li>
                <li> <a href=""></a> sign up </li>
                
            </ul>
        </div>
        <div className='header-right'>
            <div className='search'>
                  <input type="text" placeholder='typing' />
                  <CiSearch />

            </div>
            <div className="icons">
                <a href="">
                     <div className="icon">
                     <CiHeart  className='icon-react'/>
                     </div>
                </a>
                    <Link to="/cartpage" >
                        <div className="icon">
                        <IoCartOutline className='icon-react' />
                          <div className='count'> { cartitem.length } </div>
                        </div>
                    </Link>
                    <a href="">
                        <div className="icon">
                        <CiUser className='icon-react' /> 
                        </div>
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Header
