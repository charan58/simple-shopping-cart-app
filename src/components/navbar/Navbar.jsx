import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
function Navbar(props) {
  return (
    <nav className='navbar navbar-light bg-secondary p-1'>
        <Link className='nav-brand' to='/'>
            <img src='https://thumbnails.yayimages.com/1600/9/7d3/97d31c6.jpg'
                width='50px' alt='gadget icon' className='align-top'
            />
        </Link>
        <h2 style={{color:"white"}}>Electronic Gadget store</h2>
        <Link to='/cart' className='nav-link m-2' style={{color:"white"}}>Cart <span><FaCartShopping/><span>{props.cartCount}</span></span></Link>
    </nav>
  )
}

export default Navbar